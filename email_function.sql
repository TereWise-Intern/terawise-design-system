-- ============================================================
-- TeraWise · 更新 Email 通知函式 v3（支援多位收件人）
-- 填好下方 TODO 後，整段貼進 Supabase SQL Editor 執行
-- ============================================================
create or replace function public.notify_order_email()
returns trigger language plpgsql security definer as $$
declare
  -- ★ 請填入實際值 ★
  v_key   text    := 'TODO_re_你的Resend_APIKey';
  v_from  text    := 'TeraWise Order System <TODO_寄件地址>';
  -- 新訂單通知收件人（可填多個，逗號分隔加一行即可）
  v_admin text[]  := ARRAY[
    'TODO_管理員1@gmail.com'
    -- ,'TODO_管理員2@gmail.com'
    -- ,'TODO_管理員3@gmail.com'
  ];
  -- ★ 以上填完即可 ★

  v_to         text[];
  v_to_client  text;
  v_subject    text;
  v_html       text;
  v_qty_fmt    text;
  v_price_line text;
  v_side_en    text;
  v_sig        text;
begin
  if v_key like 'TODO%' then return new; end if;

  v_side_en    := case when new.side = 'buy' then 'Buy' else 'Sell' end;
  v_qty_fmt    := to_char(new.qty, 'FM999,999,999') || ' shares';
  v_price_line := case
    when new.type = 'limit'    then '@limit at ' || new.price::text
    when new.type = 'market'   then '@market'
    when new.type = 'at_open'  then '@open price'
    when new.type = 'at_close' then '@close price'
    else '@' || new.type end;

  v_sig :=
    '<br><br>--<br>' ||
    '<strong>TeraWise Capital Limited</strong><br>' ||
    'Address: 4309B 43/F, Cosco Tower, 183 Queen''s Road Central, Sheung Wan, Hong Kong';

  -- 新訂單 → 通知管理員（可多人）
  if (tg_op = 'INSERT') then
    v_to := v_admin;
    v_subject := format('[New Order] %s %s %s — %s',
      v_side_en, new.sym, new.market, coalesce(new.client_name, new.client_id));
    v_html := format(
      '<div style="font-family:Arial,sans-serif;font-size:14px;color:#222;line-height:1.8;">' ||
      '<p>Hi Team,</p>' ||
      '<p>Please place the following order to <strong>%s</strong>. Thanks.</p>' ||
      '<p style="font-family:monospace;background:#f5f5f5;padding:12px 16px;border-radius:4px;">' ||
        'Client: <strong>%s</strong><br>' ||
        'A/C: <strong>%s</strong><br>' ||
        '%s %s | %s<br>' ||
        '%s %s' ||
      '</p>' ||
      '%s</div>',
      coalesce(new.order_bank, 'N/A'),
      coalesce(new.client_name, new.client_id, 'N/A'),
      coalesce(new.account, 'N/A'),
      v_side_en, new.sym, new.market,
      v_qty_fmt, v_price_line,
      v_sig);

  -- 關鍵狀態異動 → 通知客戶
  elsif (tg_op = 'UPDATE'
         and new.status is distinct from old.status
         and new.status in ('accepted','filled','rejected','cancelled')) then
    select email into v_to_client from public.clients where id = new.client_id;
    if v_to_client is null then return new; end if;
    v_to := ARRAY[v_to_client];
    v_subject := format('[Order Update] %s %s — %s',
      new.sym, new.id,
      case new.status
        when 'accepted'  then 'Order Accepted'
        when 'filled'    then 'Order Filled'
        when 'cancelled' then 'Order Cancelled'
        when 'rejected'  then 'Order Rejected'
        else new.status end);
    v_html := format(
      '<div style="font-family:Arial,sans-serif;font-size:14px;color:#222;line-height:1.8;">' ||
      '<p>Dear %s,</p>' ||
      '<p>Your order status has been updated.</p>' ||
      '<p style="font-family:monospace;background:#f5f5f5;padding:12px 16px;border-radius:4px;">' ||
        'Order ID: <strong>%s</strong><br>' ||
        '%s %s · %s<br>' ||
        '%s<br>' ||
        'Status: <strong>%s</strong>%s' ||
      '</p>' ||
      '<p style="font-size:12px;color:#888;">If you have any questions, please contact your advisor.</p>' ||
      '%s</div>',
      coalesce(new.client_name, 'Client'),
      new.id, v_side_en, new.sym, new.market,
      v_qty_fmt,
      case new.status
        when 'accepted'  then 'Order Accepted'
        when 'filled'    then 'Filled ✓'
        when 'cancelled' then 'Cancelled'
        when 'rejected'  then 'Rejected'
        else new.status end,
      case when new.status = 'filled' and new.fill_price is not null
        then '<br>Fill Price: ' || new.fill_price::text
          || '  |  Fill Qty: ' || coalesce(new.fill_qty, new.qty)::text || ' shares'
        else '' end,
      v_sig);
  else
    return new;
  end if;

  perform net.http_post(
    url     := 'https://api.resend.com/emails',
    headers := jsonb_build_object(
      'Authorization', 'Bearer ' || v_key,
      'Content-Type',  'application/json'),
    body    := jsonb_build_object(
      'from',    v_from,
      'to',      to_jsonb(v_to),
      'subject', v_subject,
      'html',    v_html)
  );
  return new;
end;
$$;
