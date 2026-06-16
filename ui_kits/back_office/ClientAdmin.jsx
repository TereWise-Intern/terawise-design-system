// ============================================================
// TeraWise Desk — Client account management (Supabase)
// ============================================================

function ClientAdmin() {
  const [clients,     setClients]     = useState([]);
  const [search,      setSearch]      = useState('');
  const [loading,     setLoading]     = useState(true);
  const [showCreate,  setShowCreate]  = useState(false);
  const [resetTarget, setResetTarget] = useState(null);
  const [deleteTarget,setDeleteTarget]= useState(null);
  const [openClient,  setOpenClient]  = useState(null);

  useEffect(() => { loadClients(); }, []);

  const loadClients = async () => {
    setLoading(true);
    const { data: clientsData } = await sb.from('clients').select('*').order('created_at', { ascending: false });
    const { data: ordersData }  = await sb.from('orders').select('client_id');
    const countMap = {};
    (ordersData || []).forEach(o => { if (o.client_id) countMap[o.client_id] = (countMap[o.client_id] || 0) + 1; });
    setClients((clientsData || []).map(c => ({ ...c, orderCount: countMap[c.id] || 0 })));
    setLoading(false);
  };

  const filtered = clients.filter(c =>
    (c.name || '').includes(search) || (c.id || '').includes(search) || (c.email || '').toLowerCase().includes(search.toLowerCase())
  );

  const toggleStatus = async (id) => {
    const c = clients.find(x => x.id === id);
    const next = c.status === 'active' ? 'inactive' : 'active';
    setClients(prev => prev.map(x => x.id === id ? { ...x, status: next } : x));
    await sb.from('clients').update({ status: next }).eq('id', id);
  };

  const confirmDelete = async () => {
    await sb.from('clients').delete().eq('id', deleteTarget.id);
    if (deleteTarget.profile_id) await sb.from('profiles').update({ status: 'inactive' }).eq('id', deleteTarget.profile_id);
    setClients(prev => prev.filter(c => c.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  if (loading) return <div style={{ padding: 40, textAlign: 'center', color: 'var(--tw-fg-4)', font: '400 13px/1 var(--tw-font-sans)' }}>載入中…</div>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <div style={{ font: '600 22px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)' }}>客戶帳號管理</div>
          <div style={{ font: 'var(--tw-text-small)', color: 'var(--tw-fg-4)', marginTop: 4 }}>共 {clients.length} 位客戶 · 啟用中 {clients.filter(c => c.status === 'active').length} 位</div>
        </div>
        <button className="bo-btn bo-btn--primary bo-btn--lg" onClick={() => setShowCreate(true)}>
          <Icon name="user-plus" size={14} /> 建立新帳號
        </button>
      </div>

      <div style={{ position: 'relative', marginBottom: 12, maxWidth: 360 }}>
        <Icon name="search" size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--tw-fg-4)' }} />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="搜尋姓名、客戶代號、Email…"
          style={{ width: '100%', padding: '8px 10px 8px 32px', borderRadius: 4, border: '1px solid var(--tw-border)', background: 'white', font: '400 13px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)', outline: 'none', boxSizing: 'border-box' }} />
      </div>

      <div className="bo-table-wrap">
        <table className="bo-table">
          <thead>
            <tr>
              <th>客戶代號</th><th>姓名</th><th>Email</th><th>狀態</th>
              <th>建立日期</th><th>最後登入</th><th className="r">委託</th>
              <th className="r" style={{ width: 200 }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(c => (
              <tr key={c.id} className={openClient?.id === c.id ? 'is-open' : ''} onClick={() => setOpenClient(c)} style={{ cursor: 'pointer' }}>
                <td>{c.id}</td>
                <td className="l" style={{ fontWeight: 600, color: 'var(--tw-fg-1)' }}>{c.name}</td>
                <td className="l" style={{ color: 'var(--tw-fg-4)', fontSize: 12 }}>{c.email || '—'}</td>
                <td className="l">
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    font: '600 11px/1 var(--tw-font-sans)', padding: '4px 8px', borderRadius: 999,
                    background: c.status === 'active' ? 'var(--tw-status-filled-bg)' : 'var(--tw-status-cancelled-bg)',
                    color: c.status === 'active' ? 'var(--tw-status-filled-fg)' : 'var(--tw-status-cancelled-fg)',
                    border: '1px solid', borderColor: c.status === 'active' ? 'var(--tw-status-filled-bd)' : 'var(--tw-status-cancelled-bd)',
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor' }} />
                    {c.status === 'active' ? '啟用中' : '已停用'}
                  </span>
                </td>
                <td>{(c.created_at || '').slice(0, 10)}</td>
                <td>{c.last_login ? c.last_login.slice(0, 16).replace('T', ' ') : '—'}</td>
                <td className="r">{c.orderCount}</td>
                <td className="r">
                  <div className="row-actions" style={{ opacity: 1 }} onClick={e => e.stopPropagation()}>
                    <button className="bo-btn bo-btn--secondary" onClick={() => setResetTarget(c)}>
                      <Icon name="key" size={12} /> 重設密碼
                    </button>
                    <button className={`bo-btn ${c.status === 'active' ? 'bo-btn--reject' : 'bo-btn--accept'}`} onClick={() => toggleStatus(c.id)}>
                      {c.status === 'active' ? '停用' : '啟用'}
                    </button>
                    <button className="bo-btn bo-btn--ghost" style={{ color: 'var(--tw-sell-600)' }} onClick={() => setDeleteTarget(c)}>
                      <Icon name="trash-2" size={12} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && !loading && (
              <tr><td colSpan="8" style={{ textAlign: 'center', padding: '36px 20px', color: 'var(--tw-fg-4)' }}>尚無客戶資料。</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {showCreate  && <CreateClientModal onClose={() => setShowCreate(false)}  onCreate={c => { setClients(prev => [{ ...c, orderCount: 0 }, ...prev]); setShowCreate(false); }} />}
      {resetTarget && <ResetPasswordModal client={resetTarget} onClose={() => setResetTarget(null)} />}
      {deleteTarget && <DeleteConfirmModal name={deleteTarget.name} onCancel={() => setDeleteTarget(null)} onConfirm={confirmDelete} />}
      <ClientDetailDrawer client={openClient} onClose={() => setOpenClient(null)}
        onUpdateClient={(id, patch) => {
          setClients(prev => prev.map(c => c.id === id ? { ...c, ...patch } : c));
          setOpenClient(prev => prev && prev.id === id ? { ...prev, ...patch } : prev);
        }} />
    </div>
  );
}

// ── Client Detail Drawer ───────────────────────────────────
function ClientDetailDrawer({ client, onClose, onUpdateClient }) {
  const isOpen = !!client;
  const c = client ?? {};
  const [clientOrders, setClientOrders] = useState([]);
  const [accts, setAccts] = useState([]);
  const [newAcct, setNewAcct] = useState('');
  const [banks, setBanks] = useState([]);
  const [newBank, setNewBank] = useState('');
  const [holder, setHolder] = useState('');
  const [holderEditing, setHolderEditing] = useState(false);

  useEffect(() => {
    setAccts(client?.accounts || []);
    setBanks(client?.order_banks || []);
    setHolder(client?.account_holder || '');
    setHolderEditing(false);
    setNewAcct('');
    setNewBank('');
    if (!client?.id) { setClientOrders([]); return; }
    sb.from('orders').select('*').eq('client_id', client.id).order('created_at', { ascending: false })
      .then(({ data }) => setClientOrders((data || []).map(o => ({ ...o, t: (o.created_at || '').slice(0, 16).replace('T', ' ') }))));
  }, [client?.id]);

  const saveHolder = async () => {
    if (onUpdateClient) onUpdateClient(client.id, { account_holder: holder });
    await sb.from('clients').update({ account_holder: holder }).eq('id', client.id);
    setHolderEditing(false);
  };

  const saveAccts = async (list) => {
    setAccts(list);
    if (onUpdateClient) onUpdateClient(client.id, { accounts: list });
    await sb.from('clients').update({ accounts: list }).eq('id', client.id);
  };
  const addAcct = () => { const v = newAcct.trim(); if (v && !accts.includes(v)) { saveAccts([...accts, v]); setNewAcct(''); } };
  const removeAcct = (a) => saveAccts(accts.filter(x => x !== a));

  const saveBanks = async (list) => {
    setBanks(list);
    if (onUpdateClient) onUpdateClient(client.id, { order_banks: list });
    await sb.from('clients').update({ order_banks: list }).eq('id', client.id);
  };
  const addBank = () => { const v = newBank.trim(); if (v && !banks.includes(v)) { saveBanks([...banks, v]); setNewBank(''); } };
  const removeBank = (b) => saveBanks(banks.filter(x => x !== b));

  return (
    <>
      <div className={`bo-scrim ${isOpen ? 'is-open' : ''}`} onClick={onClose} />
      <aside className={`bo-drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="bo-drawer__head">
          <div><div className="bo-drawer__title">客戶詳情</div><div className="bo-drawer__sub">{c.id}</div></div>
          <button className="bo-top__icon" onClick={onClose}><Icon name="x" size={16} /></button>
        </div>
        <div className="bo-drawer__body">
          {client && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px', background: 'var(--tw-navy-050)', border: '1px solid var(--tw-navy-100)', borderRadius: 4, marginBottom: 18 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', flexShrink: 0, background: 'var(--tw-navy-200)', color: 'var(--tw-navy-800)', display: 'grid', placeItems: 'center', font: '600 16px/1 var(--tw-font-sans)' }}>
                  {(c.name || '?').slice(0, 1)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ font: '600 15px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)' }}>{c.name}</div>
                  {c.account_holder && <div style={{ font: '500 11px/1.4 var(--tw-font-sans)', color: 'var(--tw-fg-3)', marginTop: 4 }}>戶名：{c.account_holder}</div>}
                  <div style={{ font: '500 11px/1.4 var(--tw-font-mono)', color: 'var(--tw-fg-4)', marginTop: 5 }}>{c.email || '無 Email'}</div>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, font: '600 11px/1 var(--tw-font-sans)', padding: '4px 8px', borderRadius: 999, background: c.status === 'active' ? 'var(--tw-status-filled-bg)' : 'var(--tw-status-cancelled-bg)', color: c.status === 'active' ? 'var(--tw-status-filled-fg)' : 'var(--tw-status-cancelled-fg)', border: '1px solid', borderColor: c.status === 'active' ? 'var(--tw-status-filled-bd)' : 'var(--tw-status-cancelled-bd)' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor' }} />
                  {c.status === 'active' ? '啟用中' : '已停用'}
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
                {[
                  { label: '委託總數', value: clientOrders.length },
                  { label: '建立日期', value: (c.created_at || '').slice(0, 10) },
                  { label: '最後登入', value: c.last_login ? c.last_login.slice(5, 16).replace('T', ' ') : '未曾登入' },
                ].map(s => (
                  <div key={s.label} style={{ padding: '10px 12px', background: 'var(--tw-ink-050)', borderRadius: 4 }}>
                    <div style={{ font: '600 10px/1 var(--tw-font-sans)', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--tw-fg-4)', marginBottom: 6 }}>{s.label}</div>
                    <div style={{ font: '600 13px/1 var(--tw-font-mono)', color: 'var(--tw-fg-1)' }}>{s.value}</div>
                  </div>
                ))}
              </div>
              <div className="bo-section-h">基本資料</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, padding: '10px 12px', background: 'var(--tw-ink-050)', borderRadius: 4 }}>
                <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-3)', width: 40, flexShrink: 0 }}>戶名</span>
                {holderEditing ? (
                  <div style={{ display: 'flex', gap: 8, flex: 1 }}>
                    <input value={holder} onChange={e => setHolder(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && saveHolder()}
                      autoFocus
                      style={{ flex: 1, padding: '6px 10px', borderRadius: 4, border: '1px solid var(--tw-border)', font: '400 13px/1 var(--tw-font-sans)', outline: 'none' }} />
                    <button className="bo-btn bo-btn--primary" onClick={saveHolder}>儲存</button>
                    <button className="bo-btn bo-btn--secondary" onClick={() => { setHolderEditing(false); setHolder(client?.account_holder || ''); }}>取消</button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
                    <span style={{ font: '500 13px/1 var(--tw-font-sans)', color: holder ? 'var(--tw-fg-1)' : 'var(--tw-fg-4)' }}>{holder || '尚未設定'}</span>
                    <button className="bo-btn bo-btn--secondary" style={{ marginLeft: 'auto' }} onClick={() => setHolderEditing(true)}>
                      <Icon name="pencil" size={12} /> 編輯
                    </button>
                  </div>
                )}
              </div>

              <div className="bo-section-h">下單帳號 Trading Accounts</div>
              <div style={{ marginBottom: 20 }}>
                {accts.length === 0 && (
                  <div style={{ font: '400 12px/1.5 var(--tw-font-sans)', color: 'var(--tw-fg-4)', marginBottom: 8 }}>尚未設定任何下單帳號。客戶須有至少一個帳號才能委託。</div>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                  {accts.map(a => (
                    <span key={a} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 8px 6px 12px', background: 'var(--tw-ink-050)', border: '1px solid var(--tw-border)', borderRadius: 4, font: '600 12px/1 var(--tw-font-mono)', color: 'var(--tw-fg-1)' }}>
                      {a}
                      <button onClick={() => removeAcct(a)} title="移除帳號"
                        style={{ display: 'grid', placeItems: 'center', width: 18, height: 18, border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--tw-fg-4)', borderRadius: 3 }}>
                        <Icon name="x" size={13} />
                      </button>
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input value={newAcct} onChange={e => setNewAcct(e.target.value)} placeholder="新增帳號，例如 U1234567"
                    onKeyDown={e => e.key === 'Enter' && addAcct()}
                    style={{ flex: 1, padding: '8px 10px', borderRadius: 4, border: '1px solid var(--tw-border)', background: 'white', font: '400 13px/1 var(--tw-font-mono)', color: 'var(--tw-fg-1)', outline: 'none', boxSizing: 'border-box' }} />
                  <button className="bo-btn bo-btn--secondary" onClick={addAcct} disabled={!newAcct.trim()}>
                    <Icon name="plus" size={13} /> 新增
                  </button>
                </div>
              </div>

              <div className="bo-section-h">下單銀行 Order Banks</div>
              <div style={{ marginBottom: 20 }}>
                {banks.length === 0 && (
                  <div style={{ font: '400 12px/1.5 var(--tw-font-sans)', color: 'var(--tw-fg-4)', marginBottom: 8 }}>尚未設定下單銀行。客戶下單時將從這些銀行中選擇。</div>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                  {banks.map(b => (
                    <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 8px 6px 12px', background: 'var(--tw-ink-050)', border: '1px solid var(--tw-border)', borderRadius: 4, font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)' }}>
                      {b}
                      <button onClick={() => removeBank(b)} title="移除銀行"
                        style={{ display: 'grid', placeItems: 'center', width: 18, height: 18, border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--tw-fg-4)', borderRadius: 3 }}>
                        <Icon name="x" size={13} />
                      </button>
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input value={newBank} onChange={e => setNewBank(e.target.value)} placeholder="新增下單銀行，例如 中國信託"
                    onKeyDown={e => e.key === 'Enter' && addBank()}
                    style={{ flex: 1, padding: '8px 10px', borderRadius: 4, border: '1px solid var(--tw-border)', background: 'white', font: '400 13px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)', outline: 'none', boxSizing: 'border-box' }} />
                  <button className="bo-btn bo-btn--secondary" onClick={addBank} disabled={!newBank.trim()}>
                    <Icon name="plus" size={13} /> 新增
                  </button>
                </div>
              </div>
              <div className="bo-section-h">下單紀錄 Order History</div>
              {clientOrders.length === 0
                ? <div style={{ padding: '24px', textAlign: 'center', color: 'var(--tw-fg-4)', font: '400 13px/1 var(--tw-font-sans)' }}>尚無委託紀錄。</div>
                : (
                  <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--tw-border)', borderRadius: 4, overflow: 'hidden' }}>
                    {clientOrders.map((o, i) => (
                      <div key={o.id} style={{ padding: '11px 14px', borderBottom: i < clientOrders.length - 1 ? '1px solid var(--tw-border-subtle)' : 'none', display: 'flex', alignItems: 'center', gap: 12, background: 'white' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                            <span style={{ font: '600 13px/1 var(--tw-font-mono)', color: 'var(--tw-fg-1)' }}>{o.sym}</span>
                            <span className={`bo-badge bo-badge--${o.side}`}>{o.side === 'buy' ? 'BUY' : 'SELL'}</span>
                            <span className={`bo-badge bo-badge--${(o.market || '').toLowerCase()}`}>{o.market}</span>
                          </div>
                          <div style={{ font: '500 11px/1 var(--tw-font-mono)', color: 'var(--tw-fg-4)' }}>
                            {o.t} · {(o.qty || 0).toLocaleString()} 股{o.type === 'limit' && o.price ? ` · @${Number(o.price).toFixed(2)}` : ' · MKT'}
                          </div>
                        </div>
                        <span className={`bo-chip bo-chip--${o.status}`}>{STATUS_LABEL[o.status] || o.status}</span>
                      </div>
                    ))}
                  </div>
                )}
            </>
          )}
        </div>
        <div className="bo-drawer__foot">
          <button className="bo-btn bo-btn--secondary bo-btn--lg" onClick={onClose}>關閉</button>
        </div>
      </aside>
    </>
  );
}

// ── Create Client Modal ────────────────────────────────────
function CreateClientModal({ onClose, onCreate }) {
  const [name,   setName]   = useState('');
  const [holder, setHolder] = useState('');
  const [email,  setEmail]  = useState('');
  const [phone, setPhone] = useState('');
  const [accountsStr, setAccountsStr] = useState('');
  const [orderBanksStr, setOrderBanksStr] = useState('');
  const [pass,  setPass]  = useState('');
  const [err,   setErr]   = useState('');
  const [loading, setLoading] = useState(false);

  const parseAccounts = (s) => s.split(/[,，\n]/).map(x => x.trim()).filter(Boolean);

  const handleCreate = async () => {
    if (!name.trim())         { setErr('請輸入客戶姓名。'); return; }
    if (!holder.trim())       { setErr('請輸入戶名。'); return; }
    if (!email.includes('@')) { setErr('請輸入有效的 Email。'); return; }
    if (pass.length < 6)      { setErr('密碼至少需 6 位。'); return; }
    setErr(''); setLoading(true);

    const { data: authData, error: authErr } = await createUserAccount(email.trim(), pass, { display_name: name.trim(), role: 'client' });
    if (authErr) { setErr('建立失敗：' + authErr.message); setLoading(false); return; }

    const uid = authData?.user?.id;
    if (!uid) { setErr('帳號建立失敗，請再試一次。'); setLoading(false); return; }

    const { count } = await sb.from('clients').select('*', { count: 'exact', head: true });
    const clientId = 'C-' + String((count || 0) + 1).padStart(5, '0');
    await new Promise(r => setTimeout(r, 600));

    const { data: clientData, error: cErr } = await sb.from('clients').insert({
      id: clientId, profile_id: uid, name: name.trim(),
      account_holder: holder.trim(),
      email: email.trim(), phone: phone.trim() || null,
      accounts: parseAccounts(accountsStr),
      order_banks: parseAccounts(orderBanksStr), status: 'active',
    }).select().single();

    if (cErr) { setErr('客戶資料建立失敗：' + cErr.message); setLoading(false); return; }
    setLoading(false);
    onCreate(clientData);
  };

  return (
    <>
      <div className="bo-scrim is-open" onClick={onClose} />
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'white', borderRadius: 8, width: 420, padding: 28, boxShadow: 'var(--tw-shadow-3)', zIndex: 70 }}>
        <div style={{ font: '600 16px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)', marginBottom: 20 }}>建立新客戶帳號</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { label: '姓名 *', val: name, set: setName, type: 'text',     ph: '例如：林啟瑞（聯絡人）' },
            { label: '戶名 *（券商帳戶登記名稱）', val: holder, set: setHolder, type: 'text', ph: '例如：LIN CHI JUI 或 公司名稱' },
            { label: 'Email *', val: email, set: setEmail, type: 'email', ph: 'client@example.com' },
            { label: '電話',    val: phone, set: setPhone, type: 'tel',   ph: '+852 9123 4567' },
            { label: '初始密碼 *（至少 6 位）', val: pass, set: setPass, type: 'password', ph: '••••••' },
          ].map(f => (
            <label key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>{f.label}</span>
              <input type={f.type} value={f.val} onChange={e => f.set(e.target.value)} placeholder={f.ph}
                style={{ padding: '9px 12px', borderRadius: 4, border: '1px solid var(--tw-border)', font: '400 14px/1.4 var(--tw-font-sans)', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
            </label>
          ))}
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>下單帳號（可多個，以逗號分隔）</span>
            <input type="text" value={accountsStr} onChange={e => setAccountsStr(e.target.value)} placeholder="例如：U1234567, 9876543-01"
              style={{ padding: '9px 12px', borderRadius: 4, border: '1px solid var(--tw-border)', font: '400 14px/1.4 var(--tw-font-mono)', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
            <span style={{ font: '400 11px/1.4 var(--tw-font-sans)', color: 'var(--tw-fg-4)' }}>客戶下單時將從這些帳號中選擇；之後也可在客戶詳情中調整。</span>
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>下單銀行（可多個，以逗號分隔）</span>
            <input type="text" value={orderBanksStr} onChange={e => setOrderBanksStr(e.target.value)} placeholder="例如：中國信託, 台新銀行"
              style={{ padding: '9px 12px', borderRadius: 4, border: '1px solid var(--tw-border)', font: '400 14px/1.4 var(--tw-font-sans)', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
            <span style={{ font: '400 11px/1.4 var(--tw-font-sans)', color: 'var(--tw-fg-4)' }}>客戶下單時將從這些銀行中選擇；之後也可在客戶詳情中調整。</span>
          </label>
          {err && <div style={{ font: '500 12px/1.4 var(--tw-font-sans)', color: 'var(--tw-sell-700)', display: 'flex', gap: 6, alignItems: 'center' }}><Icon name="alert-circle" size={13} /> {err}</div>}
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 22 }}>
          <button className="bo-btn bo-btn--secondary bo-btn--lg" onClick={onClose} disabled={loading}>取消</button>
          <button className="bo-btn bo-btn--primary bo-btn--lg" onClick={handleCreate} disabled={loading}>
            <Icon name={loading ? 'loader-2' : 'user-plus'} size={13} /> {loading ? '建立中…' : '建立帳號'}
          </button>
        </div>
      </div>
    </>
  );
}

// ── Reset Password Modal ───────────────────────────────────
function ResetPasswordModal({ client, onClose }) {
  const [status, setStatus] = useState('sending');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (!client?.email) { setStatus('error'); setErrMsg('此客戶無 Email 資訊，無法發送重設信件。'); return; }
    sb.auth.resetPasswordForEmail(client.email)
      .then(({ error }) => {
        if (error) { setStatus('error'); setErrMsg(error.message); }
        else setStatus('sent');
      });
  }, []);

  return (
    <>
      <div className="bo-scrim is-open" onClick={onClose} />
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'white', borderRadius: 8, width: 380, padding: 28, boxShadow: 'var(--tw-shadow-3)', zIndex: 70 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: status === 'error' ? 'var(--tw-sell-050)' : 'var(--tw-status-pending-bg)', color: status === 'error' ? 'var(--tw-sell-700)' : 'var(--tw-status-pending-fg)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <Icon name={status === 'sending' ? 'loader-2' : status === 'sent' ? 'mail-check' : 'alert-triangle'} size={18} />
          </div>
          <div>
            <div style={{ font: '600 15px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)' }}>
              {status === 'sending' ? '發送中…' : status === 'sent' ? '密碼重設信已發送' : '發送失敗'}
            </div>
            <div style={{ font: '400 12px/1.4 var(--tw-font-sans)', color: 'var(--tw-fg-3)', marginTop: 4 }}>客戶：{client.name}</div>
          </div>
        </div>
        {status === 'sent' && (
          <div style={{ background: 'var(--tw-navy-050)', border: '1px solid var(--tw-navy-100)', borderRadius: 4, padding: '12px 14px', marginBottom: 14, font: '400 13px/1.5 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>
            已發送密碼重設連結至 <strong>{client.email}</strong>，請通知客戶查收並點擊連結設定新密碼。
          </div>
        )}
        {status === 'error' && (
          <div style={{ background: 'var(--tw-sell-050)', border: '1px solid var(--tw-sell-100)', borderRadius: 4, padding: '12px 14px', marginBottom: 14, font: '400 13px/1.5 var(--tw-font-sans)', color: 'var(--tw-sell-700)' }}>
            {errMsg}
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="bo-btn bo-btn--primary bo-btn--lg" onClick={onClose} disabled={status === 'sending'}>完成</button>
        </div>
      </div>
    </>
  );
}

// ── Delete Confirm Modal (shared) ─────────────────────────
function DeleteConfirmModal({ name, onCancel, onConfirm }) {
  return (
    <>
      <div className="bo-scrim is-open" onClick={onCancel} />
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'white', borderRadius: 8, width: 360, padding: 28, boxShadow: 'var(--tw-shadow-3)', zIndex: 70 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--tw-sell-050)', color: 'var(--tw-sell-700)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <Icon name="trash-2" size={18} />
          </div>
          <div>
            <div style={{ font: '600 15px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)' }}>確認刪除</div>
            <div style={{ font: '400 13px/1.5 var(--tw-font-sans)', color: 'var(--tw-fg-3)', marginTop: 6 }}>
              即將刪除帳號 <strong style={{ color: 'var(--tw-fg-1)' }}>{name}</strong>，此操作無法復原。
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
          <button className="bo-btn bo-btn--secondary bo-btn--lg" onClick={onCancel}>取消</button>
          <button className="bo-btn bo-btn--lg" onClick={onConfirm} style={{ background: 'var(--tw-sell-600)', color: 'white', border: 'none' }}>
            <Icon name="trash-2" size={13} /> 確認刪除
          </button>
        </div>
      </div>
    </>
  );
}

window.DeleteConfirmModal = DeleteConfirmModal;
