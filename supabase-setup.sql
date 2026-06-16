-- ============================================================
-- TeraWise · Supabase 資料庫初始化腳本
-- 前往 Supabase Dashboard → SQL Editor → New query → 貼上執行
-- ============================================================
--
-- ⚠️  執行前請先：
--     Authentication → Settings → 關閉 "Enable email confirmations"
--     （讓後台建立的帳號無需確認信即可立即登入）
-- ============================================================

-- ① Profiles（對應 auth.users，每位用戶一筆）
create table if not exists public.profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  initials     text,
  role         text not null default 'client'
               check (role in ('admin', 'staff', 'client')),
  status       text not null default 'active'
               check (status in ('active', 'inactive')),
  created_at   timestamptz default now(),
  last_login   timestamptz
);
alter table public.profiles enable row level security;
drop policy if exists "profiles_read"       on profiles;
drop policy if exists "profiles_insert"     on profiles;
drop policy if exists "profiles_update_any" on profiles;
create policy "profiles_read"        on profiles for select    to authenticated using (true);
create policy "profiles_insert"      on profiles for insert                     with check (true);
create policy "profiles_update_any"  on profiles for update    to authenticated using (true);

-- ② Clients（後台管理的客戶資料）
create table if not exists public.clients (
  id          text primary key,
  profile_id  uuid references public.profiles(id) on delete set null unique,
  name        text not null,
  email       text,
  phone       text,
  accounts    text[] default '{}',   -- 下單帳號（可多個券商交割帳號）
  order_banks text[] default '{}',   -- 下單銀行（可多個）
  account_bank_map jsonb default '{}'::jsonb,  -- 帳號→銀行綁定：{"U1234567":"中國信託"}
  status      text default 'active' check (status in ('active', 'inactive')),
  created_at  timestamptz default now(),
  last_login  timestamptz
);
alter table public.clients enable row level security;
drop policy if exists "clients_read"   on clients;
drop policy if exists "clients_manage" on clients;
create policy "clients_read"   on clients for select to authenticated using (true);
create policy "clients_manage" on clients for all    to authenticated using (true) with check (true);

-- ③ Orders（委託紀錄）
create table if not exists public.orders (
  id            text primary key,
  client_id     text references public.clients(id) on delete set null,
  client_name   text,
  account       text,                          -- 下單帳號（券商交割帳號）
  order_bank    text,                          -- 下單銀行
  sym           text not null,
  market        text not null,
  side          text not null check (side in ('buy', 'sell')),
  type          text not null check (type in ('market', 'limit', 'at_open', 'at_close')),
  time_in_force text default 'rod' check (time_in_force in ('rod','ioc','fok')),
  qty           integer not null,
  price         numeric,                        -- 委託限價（市價單為 null）
  status        text default 'pending'
                check (status in ('pending','accepted','processing','filled','cancelled','rejected')),
  -- 實際成交回報（後台處理完成後填入）
  fill_price    numeric,
  fill_qty      integer,
  fill_time     timestamptz,
  owner         text,
  note          text default '',
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);
alter table public.orders enable row level security;
drop policy if exists "orders_read"   on orders;
drop policy if exists "orders_insert" on orders;
drop policy if exists "orders_update" on orders;
drop policy if exists "orders_delete" on orders;
create policy "orders_read"   on orders for select to authenticated using (true);
create policy "orders_insert" on orders for insert to authenticated with check (true);
create policy "orders_update" on orders for update to authenticated using (true);
create policy "orders_delete" on orders for delete to authenticated using (true);

-- ④ Trigger：新用戶自動建立 Profile
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, display_name, initials, role, status)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    upper(left(coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)), 2)),
    coalesce(new.raw_user_meta_data->>'role', 'client'),
    'active'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ⑤ Trigger：自動更新 orders.updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;
drop trigger if exists orders_updated_at on public.orders;
create trigger orders_updated_at before update on public.orders
  for each row execute procedure public.set_updated_at();

-- ============================================================
-- ⑥ 既有資料庫升級（若上方 create table 已存在，補上新欄位）
--    可重複執行，不會出錯。
-- ============================================================
alter table public.clients add column if not exists accounts      text[] default '{}';
alter table public.clients add column if not exists account_holder text;
alter table public.clients add column if not exists order_banks   text[] default '{}';
alter table public.clients add column if not exists account_bank_map jsonb default '{}'::jsonb;
alter table public.orders  add column if not exists account        text;
alter table public.orders  add column if not exists order_bank     text;
alter table public.orders  add column if not exists trade_date     date;
alter table public.orders  add column if not exists time_in_force text default 'rod';
alter table public.orders  add column if not exists fill_price    numeric;
alter table public.orders  add column if not exists fill_qty      integer;
alter table public.orders  add column if not exists fill_time     timestamptz;
-- 放寬委託類型，允許開盤／收盤價單
alter table public.orders  drop constraint if exists orders_type_check;
alter table public.orders  add  constraint orders_type_check
  check (type in ('market', 'limit', 'at_open', 'at_close'));

-- ============================================================
-- ⑦ Email 通知（收到新訂單 → 通知管理人員；訂單關鍵狀態異動 → 通知客戶）
--    僅在 已接單 / 已成交 / 已拒絕 / 已取消 時通知客戶，跳過中間狀態以節省額度。
--    透過 pg_net + Resend (https://resend.com) 在資料庫端送信，
--    不論委託由前台或後台觸發都會自動寄出。
--
-- 設定步驟：
--   1) Database → Extensions → 啟用 "pg_net"
--   2) 於 Resend 註冊並驗證寄件網域 terawisehk.com，取得 API Key
--   3) 將下方三個常數替換為實際值後執行：
--        TWC_RESEND_KEY  → Resend API Key（re_xxx）
--        TWC_FROM        → 寄件地址（需為已驗證網域）
--        TWC_ADMIN       → 接收新訂單通知的管理員信箱
-- ============================================================
create extension if not exists pg_net;

create or replace function public.notify_order_email()
returns trigger language plpgsql security definer as $$
declare
  v_key   text := 'TWC_RESEND_KEY';                      -- ← 替換成 Resend API Key
  v_from  text := 'TeraWise Desk <desk@terawisehk.com>'; -- ← 替換成已驗證寄件地址
  v_admin text := 'twc_intern@terawisehk.com';           -- ← 替換成管理員信箱
  v_to      text;
  v_subject text;
  v_html    text;
  v_px      text;
  v_side    text := case when new.side = 'buy' then '買進 BUY' else '賣出 SELL' end;
begin
  if v_key = 'TWC_RESEND_KEY' then
    return new;  -- 尚未設定 API Key，略過寄信（避免報錯）
  end if;

  -- 新訂單 → 通知管理員
  if (tg_op = 'INSERT') then
    v_to := v_admin;
    v_subject := format('【新委託】%s %s %s × %s 股 — %s',
                        new.market, v_side, new.sym, new.qty, coalesce(new.client_name,'客戶'));
    v_px := case when new.price is null then '市價' else new.price::text end;
    v_html := format(
      '<h2>收到新委託</h2><table cellpadding="6">'
      '<tr><td>委託編號</td><td><b>%s</b></td></tr>'
      '<tr><td>客戶</td><td>%s（%s）</td></tr>'
      '<tr><td>下單銀行</td><td>%s</td></tr>'
      '<tr><td>下單帳號</td><td>%s</td></tr>'
      '<tr><td>市場 / 股票</td><td>%s · %s</td></tr>'
      '<tr><td>方向 / 類型</td><td>%s · %s</td></tr>'
      '<tr><td>數量 / 委託價</td><td>%s 股 / %s</td></tr>'
      '<tr><td>時間</td><td>%s</td></tr></table>',
      new.id, coalesce(new.client_name,'—'), coalesce(new.client_id,'—'),
      coalesce(new.order_bank,'—'), coalesce(new.account,'—'), new.market, new.sym, v_side, new.type,
      new.qty, v_px, to_char(new.created_at,'YYYY-MM-DD HH24:MI'));

  -- 狀態異動 → 通知客戶（僅關鍵狀態：已接單／已成交／已拒絕／已取消；
  --   略過 pending、processing 等中間狀態以節省寄信額度）
  elsif (tg_op = 'UPDATE'
         and new.status is distinct from old.status
         and new.status in ('accepted','filled','rejected','cancelled')) then
    select email into v_to from public.clients where id = new.client_id;
    if v_to is null then return new; end if;
    v_subject := format('【委託更新】%s %s — 狀態：%s', new.sym, new.id,
      case new.status
        when 'accepted'  then '已接單'
        when 'processing'then '處理中'
        when 'filled'    then '已成交'
        when 'cancelled' then '已取消'
        when 'rejected'  then '未成交 / 已拒絕'
        else new.status end);
    v_html := format(
      '<h2>您的委託狀態已更新</h2><table cellpadding="6">'
      '<tr><td>委託編號</td><td><b>%s</b></td></tr>'
      '<tr><td>股票</td><td>%s · %s %s</td></tr>'
      '<tr><td>數量</td><td>%s 股</td></tr>'
      '<tr><td>目前狀態</td><td><b>%s</b></td></tr>%s</table>'
      '<p style="color:#64748b;font-size:12px">本信由系統自動發送，請勿直接回覆。如有疑問請聯繫您的專員。</p>',
      new.id, new.sym, new.market, v_side, new.qty,
      case new.status
        when 'accepted'  then '已接單'
        when 'processing'then '處理中'
        when 'filled'    then '已成交'
        when 'cancelled' then '已取消'
        when 'rejected'  then '未成交 / 已拒絕'
        else new.status end,
      case when new.status = 'filled' and new.fill_price is not null then
        format('<tr><td>成交價</td><td>%s</td></tr><tr><td>成交數量</td><td>%s 股</td></tr><tr><td>成交時間</td><td>%s</td></tr>',
               new.fill_price, coalesce(new.fill_qty, new.qty), to_char(coalesce(new.fill_time, now()),'YYYY-MM-DD HH24:MI'))
        else '' end);
  else
    return new;  -- 其他更新（備註、負責人等）不寄信
  end if;

  perform net.http_post(
    url     := 'https://api.resend.com/emails',
    headers := jsonb_build_object('Authorization', 'Bearer ' || v_key, 'Content-Type', 'application/json'),
    body    := jsonb_build_object('from', v_from, 'to', v_to, 'subject', v_subject, 'html', v_html)
  );
  return new;
end;
$$;

drop trigger if exists orders_email_insert on public.orders;
create trigger orders_email_insert after insert on public.orders
  for each row execute procedure public.notify_order_email();

drop trigger if exists orders_email_update on public.orders;
create trigger orders_email_update after update on public.orders
  for each row execute procedure public.notify_order_email();

-- ============================================================
-- ☑  初始管理員設定（執行完上方 SQL 後操作）
--
-- 步驟 1：Supabase Dashboard → Authentication → Users
--         → Add user → 填入：
--           Email:    twc_intern@terawisehk.com
--           Password: 525258
--           ☑ Auto Confirm User
--
-- 步驟 2：用戶建立後，執行以下 SQL 設為管理員：
-- ============================================================

-- ▶ 設定管理員角色（步驟 1 完成後取消註解執行）：
--
-- update public.profiles
-- set role = 'admin', display_name = 'Victor', initials = 'V'
-- where id = (
--   select id from auth.users where email = 'twc_intern@terawisehk.com'
-- );
