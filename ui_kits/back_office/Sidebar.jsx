// ============================================================
// TeraWise Desk — Sidebar
// ============================================================
function Sidebar({ active, onChange, counts, staff, onLogout }) {
  const groups = [
    {
      head: 'Trading Desk',
      items: [
        { id: 'queue',     label: '委託佇列 Order Queue',  icon: 'inbox',  count: counts.pending },
        { id: 'active',    label: '處理中 Active',         icon: 'activity', count: counts.active },
        { id: 'history',   label: '歷史紀錄 History',      icon: 'archive' },
      ]
    },
    {
      head: 'Clients',
      items: [
        { id: 'clients',   label: '客戶 Clients',          icon: 'users' },
        { id: 'kyc',       label: 'KYC 審核',              icon: 'shield-check' },
      ]
    },
    {
      head: 'Admin',
      items: [
        { id: 'staff',    label: '員工帳號 Staff',    icon: 'shield-check' },
        { id: 'reports',  label: '報表 Reports',      icon: 'file-text' },
        { id: 'settings', label: '設定 Settings',     icon: 'settings' },
      ]
    },
  ];
  return (
    <aside className="bo-side">
      <div className="bo-side__brand">
        <BrandMark size={28} />
        <div>
          <div className="bo-side__wordmark">TeraWise</div>
          <div className="bo-side__sub">Desk · 後台</div>
        </div>
      </div>
      <nav className="bo-side__nav">
        {groups.map(g => (
          <div key={g.head}>
            <div className="bo-side__head">{g.head}</div>
            {g.items.map(it => (
              <button
                key={it.id}
                className={`bo-side__item ${active === it.id ? 'is-active' : ''}`}
                onClick={() => onChange(it.id)}>
                <Icon name={it.icon} size={16} />
                <span>{it.label}</span>
                {it.count ? <span className="bo-side__count">{it.count}</span> : null}
              </button>
            ))}
          </div>
        ))}
      </nav>
      <div className="bo-side__user">
        <div className="bo-side__avatar">{staff?.initials || 'SY'}</div>
        <div style={{ flex: 1 }}>
          <div className="bo-side__uname">{staff?.name || 'Sylvia Yi'}</div>
          <div className="bo-side__urole">{staff?.role || 'Trading Operations'}</div>
        </div>
        <button className="bo-top__icon" title="登出" onClick={onLogout}><Icon name="log-out" size={14} /></button>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
