// ============================================================
// TeraWise Trade — Top nav
// ============================================================
function TopNav({ route, onNav, userName, onLogout }) {
  const [now, setNow] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPw, setShowPw] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const hh = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  const us = marketStatus('US', now);
  const tw = marketStatus('TW', now);
  const links = [
    { id: 'dashboard', label: '總覽 Overview' },
    { id: 'order', label: '下單 Trade' },
  ];
  const initials = userName ? userName.slice(-2) : 'YC';
  return (
    <header className="tw-nav">
      <div className="tw-nav__brand">
        <BrandMark size={28} />
        <div className="tw-nav__wordmark">TeraWise <span style={{ opacity: 0.7, fontWeight: 400 }}>Trade</span></div>
      </div>
      <div className="tw-nav__divider"></div>
      <nav className="tw-nav__links">
        {links.map(l => (
          <button key={l.id}
            className={`tw-nav__link ${route === l.id ? 'is-active' : ''}`}
            onClick={() => onNav(l.id)}>{l.label}</button>
        ))}
      </nav>
      <div className="tw-nav__spacer" />
      <div className="tw-nav__clock">
        <span className={`tw-nav__market ${us.open ? '' : 'closed'}`} title={`美股交易時間：${usHoursTW(now)}`}><span className="dot"></span> NYSE · {us.open ? 'OPEN' : 'CLOSED'}</span>
        <span className={`tw-nav__market ${tw.open ? '' : 'closed'}`} title="台股交易時間：09:00–13:30（台灣）"><span className="dot"></span> TWSE · {tw.open ? 'OPEN' : 'CLOSED'}</span>
        <span>{hh} HKT</span>
      </div>
      <div className="tw-nav__profile-wrap" style={{ position: 'relative' }}>
        <button className="tw-nav__profile" onClick={() => setMenuOpen(o => !o)} title="帳號選單">
          <div className="tw-avatar">{initials}</div>
          <span>{userName}</span>
          <Icon name="chevron-down" size={14} style={{ opacity: 0.6 }} />
        </button>
        {menuOpen && (
          <>
            <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 40 }} />
            <div style={{ position: 'absolute', top: 'calc(100% + 6px)', right: 0, minWidth: 180, background: 'white', borderRadius: 6, boxShadow: 'var(--tw-shadow-3)', border: '1px solid var(--tw-border)', overflow: 'hidden', zIndex: 50 }}>
              <button onClick={() => { setMenuOpen(false); setShowPw(true); }}
                style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '11px 14px', border: 'none', background: 'white', cursor: 'pointer', font: '500 13px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)', textAlign: 'left' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--tw-ink-050)'}
                onMouseLeave={e => e.currentTarget.style.background = 'white'}>
                <Icon name="key" size={14} style={{ opacity: 0.7 }} /> 更改密碼
              </button>
              <div style={{ height: 1, background: 'var(--tw-border-subtle)' }} />
              <button onClick={() => { setMenuOpen(false); onLogout(); }}
                style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '11px 14px', border: 'none', background: 'white', cursor: 'pointer', font: '500 13px/1 var(--tw-font-sans)', color: 'var(--tw-sell-700)', textAlign: 'left' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--tw-sell-050)'}
                onMouseLeave={e => e.currentTarget.style.background = 'white'}>
                <Icon name="log-out" size={14} style={{ opacity: 0.7 }} /> 登出
              </button>
            </div>
          </>
        )}
      </div>
      {showPw && <ChangePasswordModal onClose={() => setShowPw(false)} />}
    </header>
  );
}

window.TopNav = TopNav;

// ── Change Password Modal ──────────────────────────────────
function ChangePasswordModal({ onClose }) {
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const [err, setErr] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (pw1.length < 6) { setErr('密碼至少需 6 位。'); return; }
    if (pw1 !== pw2)    { setErr('兩次輸入的密碼不一致。'); return; }
    setErr(''); setLoading(true);
    const { error } = await sb.auth.updateUser({ password: pw1 });
    if (error) { setErr('更新失敗：' + error.message); setLoading(false); return; }
    setLoading(false); setDone(true);
  };

  return (
    <>
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(11,22,40,0.45)', zIndex: 200 }} onClick={onClose} />
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'white', borderRadius: 8, width: 360, padding: 28, boxShadow: 'var(--tw-shadow-3)', zIndex: 210 }}>
        {done ? (
          <>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 18 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--tw-status-filled-bg)', color: 'var(--tw-status-filled-fg)', display: 'grid', placeItems: 'center' }}>
                <Icon name="check" size={18} />
              </div>
              <div style={{ font: '600 15px/1.3 var(--tw-font-sans)', color: 'var(--tw-fg-1)' }}>密碼已更新</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="primary" onClick={onClose}>完成</Button>
            </div>
          </>
        ) : (
          <>
            <div style={{ font: '600 16px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)', marginBottom: 20 }}>更改密碼</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>新密碼（至少 6 位）</span>
                <input className="tw-input" type="password" value={pw1} onChange={e => setPw1(e.target.value)} placeholder="••••••" autoComplete="new-password" />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>確認新密碼</span>
                <input className="tw-input" type="password" value={pw2} onChange={e => setPw2(e.target.value)} placeholder="••••••" autoComplete="new-password" />
              </label>
              {err && <div style={{ font: '500 12px/1.4 var(--tw-font-sans)', color: 'var(--tw-sell-700)', display: 'flex', gap: 6, alignItems: 'center' }}><Icon name="alert-circle" size={13} /> {err}</div>}
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 22 }}>
              <Button variant="secondary" onClick={onClose} disabled={loading}>取消</Button>
              <Button variant="primary" onClick={handleSave} disabled={loading}>{loading ? '更新中…' : '儲存'}</Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

window.ChangePasswordModal = ChangePasswordModal;
