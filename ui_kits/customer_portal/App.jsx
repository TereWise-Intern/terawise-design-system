// ============================================================
// TeraWise Trade — Customer Portal App (Supabase Auth)
// ============================================================

function LoadingScreen() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--tw-navy-900)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: 'rgba(255,255,255,0.4)', font: '500 14px/1 var(--tw-font-sans)' }}>載入中…</div>
    </div>
  );
}

function NoClientScreen() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--tw-navy-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 14 }}>
      <Icon name="user-x" size={32} color="rgba(255,255,255,0.3)" />
      <div style={{ color: 'white', font: '600 16px/1 var(--tw-font-sans)' }}>帳號尚未啟用</div>
      <div style={{ color: 'rgba(255,255,255,0.45)', font: '400 13px/1.5 var(--tw-font-sans)', textAlign: 'center', maxWidth: 280 }}>
        您的客戶資料尚未建立，請聯繫您的專員。
      </div>
      <button onClick={() => sb.auth.signOut()} style={{
        marginTop: 8, padding: '8px 20px', background: 'var(--tw-navy-700)',
        color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer',
        font: '500 13px/1 var(--tw-font-sans)'
      }}>登出</button>
    </div>
  );
}

function App() {
  const [session,     setSession]     = useState(null);
  const [profile,     setProfile]     = useState(null);
  const [client,      setClient]      = useState(null);
  const [orders,      setOrders]      = useState([]);
  const [authLoading, setAuthLoading] = useState(true);
  const [route,       setRoute]       = useState('dashboard');
  const [toast,       setToast]       = useState(null);

  // ── Auth ──
  useEffect(() => {
    // 單一來源：onAuthStateChange 會在載入時以 INITIAL_SESSION 帶入已儲存的登入狀態，
    // 達成自動登入；TOKEN_REFRESHED 僅更新 token、不重新載入畫面，避免閃爍或被登出。
    const { data: { subscription } } = sb.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (!session || event === 'SIGNED_OUT') {
        setProfile(null); setClient(null); setOrders([]); setAuthLoading(false);
        return;
      }
      if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        initUser(session.user.id, session.user.email);
      }
      // TOKEN_REFRESHED：維持現有 session 即可，不重新抓取資料
    });
    return () => subscription.unsubscribe();
  }, []);

  const initUser = async (uid, userEmail) => {
    setAuthLoading(true);
    const { data: prof } = await sb.from('profiles').select('*').eq('id', uid).single();
    setProfile(prof);
    if (prof?.role === 'client') {
      // Find client by profile_id first, then by email (for pre-registered clients)
      let { data: cli } = await sb.from('clients').select('*').eq('profile_id', uid).single();
      if (!cli && userEmail) {
        const { data: cliByEmail } = await sb.from('clients').select('*').eq('email', userEmail).single();
        if (cliByEmail) {
          await sb.from('clients').update({ profile_id: uid }).eq('id', cliByEmail.id);
          cli = { ...cliByEmail, profile_id: uid };
        }
      }
      setClient(cli || null);
      if (cli) await fetchOrders(cli.id);
    }
    setAuthLoading(false);
    sb.from('profiles').update({ last_login: new Date().toISOString() }).eq('id', uid);
  };

  const fetchOrders = async (clientId) => {
    const { data } = await sb.from('orders').select('*')
      .eq('client_id', clientId)
      .order('created_at', { ascending: false });
    if (data) setOrders(data.map(o => ({
      ...o,
      t:    (o.created_at || '').slice(0, 19).replace('T', ' '),
      name: o.sym,
    })));
  };

  // ── Real-time for this client's orders ──
  useEffect(() => {
    if (!client?.id) return;
    const channel = sb.channel('cp-orders-rt')
      .on('postgres_changes', {
        event: '*', schema: 'public', table: 'orders',
        filter: `client_id=eq.${client.id}`
      }, () => fetchOrders(client.id))
      .subscribe();
    return () => sb.removeChannel(channel);
  }, [client?.id]);

  // ── Submit order ──
  const submit = async (ticket) => {
    if (!client) return;
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    const orderId = `OR-${date}-${rand}`;
    const { error } = await sb.from('orders').insert({
      id:          orderId,
      client_id:   client.id,
      client_name: client.account_holder || profile?.display_name || client.name,
      account:     ticket.account || null,
      order_bank:  ticket.order_bank || null,
      sym:         ticket.symbol,
      market:      ticket.market,
      side:        ticket.side,
      type:        ticket.type,
      time_in_force: ticket.tif || 'rod',
      qty:         Number(ticket.qty),
      price:       ticket.type === 'limit' ? Number(ticket.price) : null,
      trade_date:  ticket.trade_date || null,
      status:      'pending',
      note:        '',
    });
    if (!error) {
      await fetchOrders(client.id); // force immediate refresh
      showToast('委託已送出，後台人員將盡快處理。');
      setRoute('dashboard');
    } else {
      showToast('送出失敗：' + error.message);
    }
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  // ── Render guards ──
  if (authLoading) return <LoadingScreen />;

  if (!session || !profile) {
    return <LoginScreen onLogin={() => {}} />;
  }

  if (profile.role !== 'client') {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--tw-navy-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 14 }}>
        <div style={{ color: 'white', font: '600 16px/1 var(--tw-font-sans)' }}>請使用後台系統登入</div>
        <button onClick={() => sb.auth.signOut()} style={{ padding: '8px 20px', background: 'var(--tw-navy-700)', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer', font: '500 13px/1 var(--tw-font-sans)' }}>登出</button>
      </div>
    );
  }

  if (!client) return <NoClientScreen />;

  return (
    <div className="tw-app">
      <TopNav
        route={route}
        onNav={setRoute}
        userName={profile.display_name || client.name}
        onLogout={() => sb.auth.signOut()}
      />
      <main className="tw-main">
        {route === 'dashboard' && (
          <Dashboard
            userName={profile.display_name || client.name}
            orders={orders}
            onPlaceOrder={() => setRoute('order')} />
        )}
        {route === 'order' && (
          <OrderTicket
            clientId={client.id}
            clientName={client.account_holder || client.name}
            accounts={client.accounts || []}
            orderBanks={client.order_banks || []}
            accountBankMap={client.account_bank_map || {}}
            onCancel={() => setRoute('dashboard')}
            onSubmit={submit} />
        )}
      </main>
      {toast && (
        <div style={{
          position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--tw-navy-800)', color: 'white',
          padding: '12px 20px', borderRadius: 6, boxShadow: 'var(--tw-shadow-3)',
          font: '500 13px/1.4 var(--tw-font-sans)', zIndex: 9999,
          display: 'flex', alignItems: 'center', gap: 10
        }}>
          <Icon name="check-circle-2" size={16} color="var(--tw-buy-400)" />
          {toast}
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
