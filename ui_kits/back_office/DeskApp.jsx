// ============================================================
// TeraWise Desk — Back-Office App (Supabase Auth)
// ============================================================

function LoadingScreen() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--tw-navy-900)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: 'rgba(255,255,255,0.4)', font: '500 14px/1 var(--tw-font-sans)' }}>載入中…</div>
    </div>
  );
}

function AccessDenied() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--tw-navy-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 14 }}>
      <Icon name="shield-off" size={32} color="rgba(255,255,255,0.3)" />
      <div style={{ color: 'white', font: '600 18px/1 var(--tw-font-sans)' }}>存取被拒</div>
      <div style={{ color: 'rgba(255,255,255,0.4)', font: '400 13px/1 var(--tw-font-sans)' }}>此帳號無後台存取權限。</div>
      <button onClick={() => sb.auth.signOut()} style={{
        marginTop: 8, padding: '8px 20px', background: 'var(--tw-navy-700)',
        color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer',
        font: '500 13px/1 var(--tw-font-sans)'
      }}>登出</button>
    </div>
  );
}

// ── Login Screen ──────────────────────────────────────────────
function BOLoginScreen() {
  const [email,   setEmail]   = useState('');
  const [pass,    setPass]    = useState('');
  const [err,     setErr]     = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !pass.trim()) { setErr('請填寫 Email 與密碼。'); return; }
    setErr(''); setLoading(true);
    // Direct fetch — bypasses SDK's Authorization: Bearer header
    // (sb_publishable_ key is not a JWT so the SDK's Bearer header causes 422)
    try {
      const res = await fetch(
        'https://yecijqecmabjtgpwfroy.supabase.co/auth/v1/token?grant_type=password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': 'sb_publishable_WpuOkrhxrKQWCbgOosVcWQ_VJyJWCVi',
          },
          body: JSON.stringify({ email: email.trim(), password: pass }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setErr(data.error_description || data.msg || data.error || `Error ${res.status}`);
        setLoading(false);
        return;
      }
      await sb.auth.setSession({ access_token: data.access_token, refresh_token: data.refresh_token });
    } catch (err) {
      setErr(err.message);
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--tw-navy-900)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--tw-font-sans)', padding: 24
    }}>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <BrandMark size={48} />
          <div style={{ font: '600 22px/1.1 var(--tw-font-serif)', color: 'white', marginTop: 10 }}>TeraWise Capital</div>
          <div style={{ font: '600 9px/1 var(--tw-font-sans)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tw-gold-400)', marginTop: 6 }}>
            DESK · 後台管理系統
          </div>
        </div>
        <div style={{ background: 'white', borderRadius: 6, padding: '24px 24px 20px', boxShadow: 'var(--tw-shadow-3)' }}>
          <div style={{ font: '600 15px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)', marginBottom: 4 }}>後台登入</div>
          <div style={{ font: '400 12px/1.4 var(--tw-font-sans)', color: 'var(--tw-fg-4)', marginBottom: 20 }}>僅限授權內部人員使用</div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ font: '600 11px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>Email</span>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="staff@terawisehk.com" autoComplete="email"
                style={{ padding: '9px 12px', borderRadius: 4, border: '1px solid var(--tw-border)', font: '400 14px/1 var(--tw-font-sans)', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ font: '600 11px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>密碼</span>
              <input type="password" value={pass} onChange={e => setPass(e.target.value)}
                placeholder="請輸入密碼" autoComplete="current-password"
                style={{ padding: '9px 12px', borderRadius: 4, border: '1px solid var(--tw-border)', font: '400 14px/1 var(--tw-font-sans)', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
            </label>
            {err && (
              <div style={{ font: '500 12px/1.4 var(--tw-font-sans)', color: 'var(--tw-sell-700)', display: 'flex', gap: 6, alignItems: 'center' }}>
                <Icon name="alert-circle" size={13} color="var(--tw-sell-700)" /> {err}
              </div>
            )}
            <button type="submit" disabled={loading} style={{
              padding: '10px', borderRadius: 4, border: 'none', marginTop: 4,
              cursor: loading ? 'not-allowed' : 'pointer',
              background: loading ? 'var(--tw-ink-200)' : 'var(--tw-navy-800)',
              color: loading ? 'var(--tw-ink-400)' : 'white',
              font: '600 13px/1 var(--tw-font-sans)',
            }}>
              {loading ? '登入中…' : '登入後台'}
            </button>
          </form>
        </div>
        <div style={{ marginTop: 16, textAlign: 'center', font: '500 10px/1.4 var(--tw-font-sans)', color: 'rgba(255,255,255,0.25)' }}>
          © 2025 TeraWise Capital · Internal Use Only
        </div>
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────
function DeskApp() {
  const [session,     setSession]     = useState(null);
  const [profile,     setProfile]     = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [active,      setActive]      = useState('queue');
  const [orders,      setOrders]      = useState([]);
  const [openId,      setOpenId]      = useState(null);
  const [fillTarget,  setFillTarget]  = useState(null);
  const [acceptTarget, setAcceptTarget] = useState(null);

  // ── Auth ──
  useEffect(() => {
    // 單一來源：INITIAL_SESSION 自動帶入已儲存登入（自動登入）；
    // TOKEN_REFRESHED 不重新載入，避免閃爍或誤判登出。
    const { data: { subscription } } = sb.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (!session || event === 'SIGNED_OUT') { setProfile(null); setOrders([]); setAuthLoading(false); return; }
      if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        loadProfile(session.user.id);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const loadProfile = async (uid) => {
    const { data } = await sb.from('profiles').select('*').eq('id', uid).single();
    setProfile(data);
    setAuthLoading(false);
    sb.from('profiles').update({ last_login: new Date().toISOString() }).eq('id', uid);
  };

  // ── Orders (real-time) ──
  useEffect(() => {
    if (!session) return;
    fetchOrders();
    const channel = sb.channel('bo-orders-rt')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, fetchOrders)
      .subscribe();
    return () => sb.removeChannel(channel);
  }, [session]);

  const fetchOrders = async () => {
    const { data } = await sb.from('orders').select('*').order('created_at', { ascending: false });
    if (data) setOrders(data.map(normalizeOrder));
  };

  const normalizeOrder = (o) => ({
    ...o,
    t:      (o.created_at || '').slice(0, 19).replace('T', ' '),
    client: o.client_name,
    cid:    o.client_id,
    name:   o.sym,
  });

  // ── Order mutations ──
  const updateOrder = async (id, patch) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, ...patch } : o));
    await sb.from('orders').update(patch).eq('id', id);
  };

  const onAccept       = (id) => { const o = orders.find(x => x.id === id); if (o) setAcceptTarget(o); };
  const confirmAccept  = (id) => { updateOrder(id, { status: 'accepted', owner: profile?.display_name || 'Staff' }); setAcceptTarget(null); };
  const onBulkAccept   = (ids) => ids.forEach(id => updateOrder(id, { status: 'accepted', owner: profile?.display_name || 'Staff' }));
  const onReject       = (id) => updateOrder(id, { status: 'rejected' });
  const onChangeStatus = (id, status) => updateOrder(id, { status });
  const onAssign       = (id, owner)  => updateOrder(id, { owner });
  const onAddNote      = (id, note)   => updateOrder(id, { note });
  const onRequestFill  = (order) => setFillTarget(order);
  const confirmFill    = async (id, patch) => { await updateOrder(id, patch); setFillTarget(null); };

  const counts = {
    pending: orders.filter(o => o.status === 'pending').length,
    active:  orders.filter(o => o.status === 'accepted').length,
  };
  const openOrder = openId ? orders.find(o => o.id === openId) : null;

  const titles = {
    queue: '委託佇列 Order Queue', active: '處理中 Active', history: '歷史紀錄 History',
    clients: '客戶 Clients', kyc: 'KYC 審核', staff: '員工帳號 Staff',
    reports: '報表 Reports', settings: '設定 Settings',
  };

  // ── Render guards ──
  if (authLoading) return <LoadingScreen />;
  if (!session || !profile) return <BOLoginScreen />;
  if (!['admin', 'staff'].includes(profile.role)) return <AccessDenied />;

  const sidebarStaff = {
    name:     profile.display_name || 'Staff',
    role:     profile.role === 'admin' ? '管理員' : '一般',
    initials: profile.initials || (profile.display_name || 'ST').slice(0, 2).toUpperCase(),
  };

  let view;
  if (['queue', 'active', 'history'].includes(active)) {
    const filtered = active === 'queue'   ? orders
                   : active === 'active'  ? orders.filter(o => ['pending', 'accepted'].includes(o.status))
                   : orders.filter(o => ['filled', 'rejected'].includes(o.status));
    view = <OrderQueue orders={filtered} onOpenOrder={setOpenId} openId={openId}
             onAccept={onAccept} onBulkAccept={onBulkAccept} onReject={onReject} onChangeStatus={onChangeStatus} onAssign={onAssign} onRequestFill={onRequestFill} />;
  } else if (active === 'clients') {
    view = <ClientAdmin />;
  } else if (active === 'staff') {
    view = <StaffAdmin currentProfile={profile} />;
  } else {
    view = (
      <div style={{ background: 'white', border: '1px solid var(--tw-border)', borderRadius: 6, padding: 60, textAlign: 'center', color: 'var(--tw-fg-4)' }}>
        <div style={{ font: '600 16px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>{titles[active]}</div>
        <div style={{ marginTop: 8, font: '400 13px/1.5 var(--tw-font-sans)' }}>本模組尚未實作於此 UI Kit。</div>
      </div>
    );
  }

  return (
    <div className="bo-app">
      <Sidebar active={active} onChange={setActive} counts={counts}
        staff={sidebarStaff} onLogout={() => sb.auth.signOut()} />
      <main className="bo-main">
        <TopBar crumb={titles[active]} profile={profile} email={session?.user?.email} />
        <div className="bo-content">{view}</div>
      </main>
      <OrderDrawer order={openOrder} onClose={() => setOpenId(null)}
        onAccept={onAccept} onReject={onReject} onChangeStatus={onChangeStatus}
        onAssign={onAssign} onAddNote={onAddNote} onRequestFill={onRequestFill} />
      {fillTarget && <FillModal order={fillTarget} onClose={() => setFillTarget(null)} onConfirm={confirmFill} />}
      <ConfirmAcceptModal order={acceptTarget} onClose={() => setAcceptTarget(null)} onConfirm={confirmAccept} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DeskApp />);
