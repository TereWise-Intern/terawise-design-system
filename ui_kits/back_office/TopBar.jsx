// ============================================================
// TeraWise Desk — Top bar
// ============================================================
function TopBar({ crumb, profile, email }) {
  const [now, setNow] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // Close the menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const onDoc = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [menuOpen]);

  const hh = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  const us = marketStatus('US', now);
  const tw = marketStatus('TW', now);
  const name = profile?.display_name || 'Staff';
  const initials = (profile?.initials || name.slice(0, 2)).toUpperCase();

  return (
    <header className="bo-top">
      <div className="bo-top__crumb">
        <span>後台</span>
        <Icon name="chevron-right" size={12} />
        <span>Trading Desk</span>
        <Icon name="chevron-right" size={12} />
        <span className="now">{crumb}</span>
      </div>
      <div className="bo-top__search">
        <Icon name="search" size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--tw-fg-4)' }} />
        <input placeholder="搜尋 Order ID, 客戶代號, 股票…" />
      </div>
      <div className="bo-top__spacer" />
      <div className="bo-top__clocks">
        <span className={`mk ${us.open ? '' : 'closed'}`} title={`美股 ${us.label}｜${usHoursTW(now)}`}><span className="dot" />NYSE</span>
        <span className={`mk ${tw.open ? '' : 'closed'}`} title={`台股 ${tw.label}｜09:00–13:30（台灣）`}><span className="dot" />TWSE</span>
        <span>{hh} HKT</span>
      </div>
      <button className="bo-top__icon" title="通知"><Icon name="bell" size={16} /></button>
      <button className="bo-top__icon" title="說明"><Icon name="help-circle" size={16} /></button>

      {/* User menu */}
      <div ref={menuRef} style={{ position: 'relative' }}>
        <button
          onClick={() => setMenuOpen(o => !o)}
          title={name}
          style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '4px 6px 4px 4px',
            background: menuOpen ? 'var(--tw-ink-100)' : 'transparent', border: 'none',
            borderRadius: 999, cursor: 'pointer', marginLeft: 4
          }}>
          <span style={{
            width: 28, height: 28, borderRadius: '50%', background: 'var(--tw-navy-800)',
            color: 'white', display: 'grid', placeItems: 'center', font: '600 10px/1 var(--tw-font-sans)'
          }}>{initials}</span>
          <Icon name="chevron-down" size={13} color="var(--tw-fg-4)" />
        </button>

        {menuOpen && (
          <div style={{
            position: 'absolute', top: 'calc(100% + 6px)', right: 0, minWidth: 200,
            background: 'white', border: '1px solid var(--tw-border)', borderRadius: 8,
            boxShadow: 'var(--tw-shadow-3)', zIndex: 80, overflow: 'hidden', padding: 6
          }}>
            <div style={{ padding: '8px 10px 10px', borderBottom: '1px solid var(--tw-border-subtle)', marginBottom: 4 }}>
              <div style={{ font: '600 13px/1.2 var(--tw-font-sans)', color: 'var(--tw-fg-1)' }}>{name}</div>
              <div style={{ font: '500 11px/1.2 var(--tw-font-sans)', color: 'var(--tw-fg-4)', marginTop: 3 }}>
                {profile?.role === 'admin' ? '管理員' : '一般'}
              </div>
              {email && (
                <div style={{ font: '400 11px/1.3 var(--tw-font-sans)', color: 'var(--tw-fg-4)', marginTop: 4, wordBreak: 'break-all' }}>
                  {email}
                </div>
              )}
            </div>
            <button
              onClick={() => { setMenuOpen(false); setShowPw(true); }}
              style={menuItemStyle}>
              <Icon name="key-round" size={14} color="var(--tw-fg-3)" /> 修改密碼
            </button>
          </div>
        )}
      </div>

      {showPw && <ChangePasswordModal onClose={() => setShowPw(false)} />}
    </header>
  );
}

const menuItemStyle = {
  display: 'flex', alignItems: 'center', gap: 10, width: '100%',
  padding: '9px 10px', background: 'transparent', border: 'none', borderRadius: 5,
  cursor: 'pointer', font: '500 13px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)',
  textAlign: 'left'
};

// ── Change Password Modal ─────────────────────────────────
function ChangePasswordModal({ onClose }) {
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const [err, setErr] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (pw1.length < 6)  { setErr('新密碼至少需 6 位。'); return; }
    if (pw1 !== pw2)     { setErr('兩次輸入的密碼不一致。'); return; }
    setErr(''); setLoading(true);
    const { error } = await sb.auth.updateUser({ password: pw1 });
    setLoading(false);
    if (error) { setErr('修改失敗：' + error.message); return; }
    setDone(true);
  };

  const inputStyle = {
    padding: '9px 12px', borderRadius: 4, border: '1px solid var(--tw-border)',
    font: '400 14px/1.4 var(--tw-font-sans)', outline: 'none', width: '100%', boxSizing: 'border-box'
  };

  return (
    <>
      <div className="bo-scrim is-open" onClick={onClose} />
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'white', borderRadius: 8, width: 400, padding: 28, boxShadow: 'var(--tw-shadow-3)', zIndex: 90 }}>
        {done ? (
          <div style={{ textAlign: 'center', padding: '8px 4px' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--tw-status-filled-bg)', color: 'var(--tw-status-filled-fg)', display: 'grid', placeItems: 'center', margin: '0 auto 14px' }}>
              <Icon name="check" size={22} />
            </div>
            <div style={{ font: '600 16px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)', marginBottom: 6 }}>密碼已更新</div>
            <div style={{ font: '400 13px/1.5 var(--tw-font-sans)', color: 'var(--tw-fg-4)', marginBottom: 20 }}>下次登入請使用新密碼。</div>
            <button className="bo-btn bo-btn--primary bo-btn--lg" onClick={onClose}>完成</button>
          </div>
        ) : (
          <>
            <div style={{ font: '600 16px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)', marginBottom: 4 }}>修改密碼</div>
            <div style={{ font: '400 12px/1.4 var(--tw-font-sans)', color: 'var(--tw-fg-4)', marginBottom: 20 }}>請輸入新密碼，至少 6 位。</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>新密碼</span>
                <input type="password" value={pw1} onChange={e => setPw1(e.target.value)} placeholder="••••••" autoComplete="new-password" style={inputStyle} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>確認新密碼</span>
                <input type="password" value={pw2} onChange={e => setPw2(e.target.value)} placeholder="••••••" autoComplete="new-password" style={inputStyle}
                  onKeyDown={e => e.key === 'Enter' && submit()} />
              </label>
              {err && (
                <div style={{ font: '500 12px/1.4 var(--tw-font-sans)', color: 'var(--tw-sell-700)', display: 'flex', gap: 6, alignItems: 'center' }}>
                  <Icon name="alert-circle" size={13} color="var(--tw-sell-700)" /> {err}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 22 }}>
              <button className="bo-btn bo-btn--secondary bo-btn--lg" onClick={onClose} disabled={loading}>取消</button>
              <button className="bo-btn bo-btn--primary bo-btn--lg" onClick={submit} disabled={loading}>
                <Icon name={loading ? 'loader-2' : 'check'} size={13} /> {loading ? '更新中…' : '確認修改'}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

window.TopBar = TopBar;
