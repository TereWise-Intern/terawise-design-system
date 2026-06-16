// ============================================================
// TeraWise Desk — Staff account management (Supabase)
// ============================================================

const ROLES = ['管理員', '一般'];

function StaffAdmin({ currentProfile }) {
  const [staffList,   setStaffList]   = useState([]);
  const [loading,     setLoading]     = useState(true);
  const [showCreate,  setShowCreate]  = useState(false);
  const [deleteTarget,setDeleteTarget]= useState(null);
  const [createdInfo, setCreatedInfo] = useState(null); // { name, email, pass }

  useEffect(() => { loadStaff(); }, []);

  const loadStaff = async () => {
    setLoading(true);
    const { data } = await sb.from('profiles')
      .select('*')
      .in('role', ['admin', 'staff'])
      .order('created_at', { ascending: true });
    setStaffList(data || []);
    setLoading(false);
  };

  const toggleStatus = async (id) => {
    const s = staffList.find(x => x.id === id);
    const next = s.status === 'active' ? 'inactive' : 'active';
    setStaffList(prev => prev.map(x => x.id === id ? { ...x, status: next } : x));
    await sb.from('profiles').update({ status: next }).eq('id', id);
  };

  const confirmDeactivate = async () => {
    await sb.from('profiles').update({ status: 'inactive' }).eq('id', deleteTarget.id);
    setStaffList(prev => prev.map(x => x.id === deleteTarget.id ? { ...x, status: 'inactive' } : x));
    setDeleteTarget(null);
  };

  if (loading) return <div style={{ padding: 40, textAlign: 'center', color: 'var(--tw-fg-4)', font: '400 13px/1 var(--tw-font-sans)' }}>載入中…</div>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <div style={{ font: '600 22px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)' }}>員工帳號管理</div>
          <div style={{ font: 'var(--tw-text-small)', color: 'var(--tw-fg-4)', marginTop: 4 }}>
            共 {staffList.length} 位員工 · 啟用中 {staffList.filter(s => s.status === 'active').length} 位
          </div>
        </div>
        <button className="bo-btn bo-btn--primary bo-btn--lg" onClick={() => setShowCreate(true)}>
          <Icon name="user-plus" size={14} /> 新增員工帳號
        </button>
      </div>

      <div className="bo-table-wrap">
        <table className="bo-table">
          <thead>
            <tr>
              <th>姓名</th><th>職稱</th><th>狀態</th>
              <th>建立日期</th><th>最後登入</th>
              <th className="r" style={{ width: 200 }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map(s => {
              const isSelf = s.id === currentProfile?.id;
              return (
                <tr key={s.id}>
                  <td className="l">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 26, height: 26, borderRadius: '50%', flexShrink: 0, background: isSelf ? 'var(--tw-navy-800)' : 'var(--tw-ink-100)', color: isSelf ? 'white' : 'var(--tw-fg-2)', display: 'grid', placeItems: 'center', font: '600 9px/1 var(--tw-font-sans)' }}>
                        {(s.initials || (s.display_name || '?').slice(0,2)).toUpperCase()}
                      </div>
                      <span style={{ fontWeight: 600, color: 'var(--tw-fg-1)' }}>
                        {s.display_name}
                        {isSelf && <span style={{ font: '500 10px/1 var(--tw-font-sans)', color: 'var(--tw-navy-500)', marginLeft: 6, padding: '2px 6px', background: 'var(--tw-navy-100)', borderRadius: 2 }}>本人</span>}
                      </span>
                    </div>
                  </td>
                  <td className="l">{s.role === 'admin' ? '管理員' : '一般'}</td>
                  <td className="l">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, font: '600 11px/1 var(--tw-font-sans)', padding: '4px 8px', borderRadius: 999, background: s.status === 'active' ? 'var(--tw-status-filled-bg)' : 'var(--tw-status-cancelled-bg)', color: s.status === 'active' ? 'var(--tw-status-filled-fg)' : 'var(--tw-status-cancelled-fg)', border: '1px solid', borderColor: s.status === 'active' ? 'var(--tw-status-filled-bd)' : 'var(--tw-status-cancelled-bd)' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor' }} />
                      {s.status === 'active' ? '啟用中' : '已停用'}
                    </span>
                  </td>
                  <td>{(s.created_at || '').slice(0, 10)}</td>
                  <td>{s.last_login ? s.last_login.slice(0, 16).replace('T', ' ') : '—'}</td>
                  <td className="r">
                    <div className="row-actions" style={{ opacity: 1 }}>
                      <button className={`bo-btn ${s.status === 'active' ? 'bo-btn--reject' : 'bo-btn--accept'}`}
                        disabled={isSelf} style={isSelf ? { opacity: 0.4, cursor: 'not-allowed' } : {}}
                        onClick={() => !isSelf && toggleStatus(s.id)}>
                        {s.status === 'active' ? '停用' : '啟用'}
                      </button>
                      <button className="bo-btn bo-btn--ghost" style={{ color: 'var(--tw-sell-600)' }}
                        disabled={isSelf} onClick={() => !isSelf && setDeleteTarget(s)}>
                        <Icon name="trash-2" size={12} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {staffList.length === 0 && !loading && (
              <tr><td colSpan="6" style={{ textAlign: 'center', padding: '36px', color: 'var(--tw-fg-4)' }}>尚無員工資料。</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {showCreate && (
        <CreateStaffModal
          onClose={() => setShowCreate(false)}
          onCreate={(member, pass) => {
            setStaffList(prev => [...prev, member]);
            setShowCreate(false);
            setCreatedInfo({ name: member.display_name, pass });
          }} />
      )}

      {createdInfo && (
        <StaffCreatedModal info={createdInfo} onClose={() => setCreatedInfo(null)} />
      )}

      {deleteTarget && (
        <DeleteConfirmModal
          name={deleteTarget.display_name}
          onCancel={() => setDeleteTarget(null)}
          onConfirm={confirmDeactivate} />
      )}
    </div>
  );
}

// ── Create Staff Modal ────────────────────────────────────
function CreateStaffModal({ onClose, onCreate }) {
  const [name,  setName]  = useState('');
  const [email, setEmail] = useState('');
  const [role,  setRole]  = useState(ROLES[1]); // 一般
  const [pass,  setPass]  = useState('');
  const [err,   setErr]   = useState('');
  const [loading, setLoading] = useState(false);

  const initials = (n) => n.trim().split(' ').map(w => w[0] || '').join('').toUpperCase().slice(0, 2) || n.slice(0,2).toUpperCase();

  const handleCreate = async () => {
    if (!name.trim())         { setErr('請填寫姓名。'); return; }
    if (!email.includes('@')) { setErr('請輸入有效的 Email。'); return; }
    if (pass.length < 6)      { setErr('密碼至少需 6 位。'); return; }
    setErr(''); setLoading(true);

    const sbRole = role === '管理員' ? 'admin' : 'staff';
    const { data: authData, error: authErr } = await createUserAccount(email.trim(), pass, { display_name: name.trim(), role: sbRole });

    if (authErr) { setErr('建立失敗：' + authErr.message); setLoading(false); return; }

    const uid = authData?.user?.id;
    if (!uid) { setErr('帳號建立失敗，請再試一次。'); setLoading(false); return; }

    await new Promise(r => setTimeout(r, 600));

    const { data: prof } = await sb.from('profiles').select('*').eq('id', uid).single();
    const member = prof || { id: uid, display_name: name.trim(), initials: initials(name), role: sbRole, status: 'active', created_at: new Date().toISOString() };

    setLoading(false);
    onCreate(member, pass);
  };

  return (
    <>
      <div className="bo-scrim is-open" onClick={onClose} />
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'white', borderRadius: 8, width: 420, padding: 28, boxShadow: 'var(--tw-shadow-3)', zIndex: 70 }}>
        <div style={{ font: '600 16px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)', marginBottom: 20 }}>新增員工帳號</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { label: '姓名 *',  val: name,  set: setName,  type: 'text',     ph: 'Kevin Lam' },
            { label: 'Email *', val: email, set: setEmail, type: 'email',    ph: 'staff@terawisehk.com' },
            { label: '初始密碼 *（至少 6 位）', val: pass, set: setPass, type: 'password', ph: '••••••' },
          ].map(f => (
            <label key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>{f.label}</span>
              <input type={f.type} value={f.val} onChange={e => f.set(e.target.value)} placeholder={f.ph}
                style={{ padding: '9px 12px', borderRadius: 4, border: '1px solid var(--tw-border)', font: '400 14px/1.4 var(--tw-font-sans)', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
            </label>
          ))}
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>職稱</span>
            <select value={role} onChange={e => setRole(e.target.value)}
              style={{ padding: '9px 12px', borderRadius: 4, border: '1px solid var(--tw-border)', font: '400 14px/1.4 var(--tw-font-sans)', outline: 'none', background: 'white' }}>
              {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </label>
          {err && <div style={{ font: '500 12px/1.4 var(--tw-font-sans)', color: 'var(--tw-sell-700)', display: 'flex', gap: 6, alignItems: 'center' }}><Icon name="alert-circle" size={13} /> {err}</div>}
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 22 }}>
          <button className="bo-btn bo-btn--secondary bo-btn--lg" onClick={onClose} disabled={loading}>取消</button>
          <button className="bo-btn bo-btn--primary bo-btn--lg" onClick={handleCreate} disabled={loading}>
            <Icon name={loading ? 'loader-2' : 'user-plus'} size={13} /> {loading ? '建立中…' : '新增帳號'}
          </button>
        </div>
      </div>
    </>
  );
}

// ── Staff Created Confirmation Modal ──────────────────────
function StaffCreatedModal({ info, onClose }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(info.pass).catch(() => {});
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <div className="bo-scrim is-open" onClick={onClose} />
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'white', borderRadius: 8, width: 380, padding: 28, boxShadow: 'var(--tw-shadow-3)', zIndex: 70 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--tw-status-filled-bg)', color: 'var(--tw-status-filled-fg)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <Icon name="user-check" size={18} />
          </div>
          <div>
            <div style={{ font: '600 15px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)' }}>帳號已建立</div>
            <div style={{ font: '400 12px/1.4 var(--tw-font-sans)', color: 'var(--tw-fg-3)', marginTop: 4 }}>員工：{info.name}</div>
          </div>
        </div>
        <div style={{ background: 'var(--tw-navy-050)', border: '1px solid var(--tw-navy-100)', borderRadius: 4, padding: '12px 14px', marginBottom: 14 }}>
          <div style={{ font: '500 11px/1 var(--tw-font-sans)', color: 'var(--tw-fg-4)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>初始密碼</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ font: '700 20px/1 var(--tw-font-mono)', color: 'var(--tw-fg-1)', letterSpacing: '0.08em' }}>{info.pass}</span>
            <button className="bo-btn bo-btn--secondary" onClick={copy} style={{ marginLeft: 'auto' }}>
              <Icon name={copied ? 'check' : 'copy'} size={12} /> {copied ? '已複製' : '複製'}
            </button>
          </div>
        </div>
        <div style={{ font: '400 12px/1.5 var(--tw-font-sans)', color: 'var(--tw-fg-4)', marginBottom: 18, padding: '10px 12px', background: 'var(--tw-status-pending-bg)', borderRadius: 4, border: '1px solid var(--tw-status-pending-bd)' }}>
          <Icon name="alert-triangle" size={13} style={{ verticalAlign: 'middle', marginRight: 6, color: 'var(--tw-status-pending-fg)' }} />
          請立即告知員工此初始密碼並要求登入後更改。
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="bo-btn bo-btn--primary bo-btn--lg" onClick={onClose}>完成</button>
        </div>
      </div>
    </>
  );
}

window.StaffAdmin = StaffAdmin;
window.ROLES = ROLES;
