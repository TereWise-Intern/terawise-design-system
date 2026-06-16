// ============================================================
// TeraWise Desk — Order detail drawer
// ============================================================
function OrderDrawer({ order, onClose, onAccept, onReject, onChangeStatus, onAssign, onAddNote, onRequestFill }) {
  const isOpen = !!order;
  const [note, setNote] = useState('');
  useEffect(() => { setNote(''); }, [order?.id]);
  if (!order) {
    return <>
      <div className="bo-scrim" onClick={onClose} />
      <aside className="bo-drawer" />
    </>;
  }
  const o = order;
  const statusOrder = ['pending', 'accepted', 'filled'];
  const isTerminal = o.status === 'rejected';
  const sIdx = isTerminal ? 2 : statusOrder.indexOf(o.status);

  const timeline = [
    { label: '客戶送出委託', t: o.t },
    { label: '後台已接單',   t: sIdx >= 1 ? incrTime(o.t, 1) : '' },
    { label: isTerminal ? '失敗' : '完成', t: sIdx >= 2 ? incrTime(o.t, 8) : '' },
  ];

  return (
    <>
      <div className={`bo-scrim ${isOpen ? 'is-open' : ''}`} onClick={onClose} />
      <aside className={`bo-drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="bo-drawer__head">
          <div>
            <div className="bo-drawer__title">委託詳情</div>
            <div className="bo-drawer__sub">{o.id}</div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <StatusChip status={o.status} />
            <button className="bo-top__icon" onClick={onClose}><Icon name="x" size={16} /></button>
          </div>
        </div>

        <div className="bo-drawer__body">
          {/* Client block */}
          <div className="bo-section-h">客戶 Client</div>
          <div style={{
            display: 'flex', gap: 12, alignItems: 'center', padding: '10px 12px',
            background: 'var(--tw-navy-050)', border: '1px solid var(--tw-navy-100)',
            borderRadius: 4, marginBottom: 16
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'var(--tw-navy-200)', color: 'var(--tw-navy-800)',
              display: 'grid', placeItems: 'center', font: '600 13px/1 var(--tw-font-sans)'
            }}>{o.client.slice(0, 1)}</div>
            <div style={{ flex: 1 }}>
              <div style={{ font: '600 13px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)' }}>{o.client}</div>
              <div style={{ font: '500 11px/1 var(--tw-font-mono)', color: 'var(--tw-fg-4)', marginTop: 4 }}>{o.cid} · {o.account || '未指定帳號'}</div>
            </div>
            <button className="bo-btn bo-btn--secondary"><Icon name="phone" size={12} /> 聯繫</button>
          </div>

          {/* Ticket */}
          <div className="bo-section-h">委託內容 Ticket</div>
          <div className="bo-kv">
            <div className="k">下單帳號</div>
            <div className="v">{o.account || '—'}</div>
            <div className="k">下單銀行</div>
            <div className="v">{o.order_bank || '—'}</div>
            <div className="k">市場</div>
            <div className="v sans"><Badge tone={o.market.toLowerCase()}>{o.market}</Badge> {o.market === 'US' ? '美股 · US Equities' : '台股 · TW Equities'}</div>
            <div className="k">股票</div>
            <div className="v">{o.sym} <span style={{ font: '400 12px/1.6 var(--tw-font-sans)', color: 'var(--tw-fg-4)' }}>— {o.name}</span></div>
            <div className="k">方向</div>
            <div className="v sans"><Badge tone={o.side}>{o.side === 'buy' ? 'BUY' : 'SELL'}</Badge> {o.side === 'buy' ? '買進' : '賣出'}</div>
            <div className="k">委託類型</div>
            <div className="v sans">{ORDER_TYPE_LABEL[o.type] || o.type}</div>
            <div className="k">委託效期</div>
            <div className="v sans">{TIF_LABEL[o.time_in_force || 'rod']}</div>
            <div className="k">數量</div>
            <div className="v">{o.qty.toLocaleString()} 股</div>
            {o.price != null
              ? (<><div className="k">委託限價</div><div className="v">{o.market === 'US' ? 'US$' : 'NT$'} {o.price.toFixed(2)}</div>
                   <div className="k">預估金額</div>
                   <div className="v" style={{ fontWeight: 600 }}>{o.market === 'US' ? 'US$' : 'NT$'} {(o.price * o.qty).toLocaleString('en-US', { minimumFractionDigits: 2 })}</div></>)
              : (<><div className="k">委託價</div><div className="v sans" style={{ color: 'var(--tw-fg-3)' }}>市價 · 依市場成交價</div></>)}
            <div className="k">下單時間</div>
            <div className="v">{o.t}</div>
          </div>

          {/* Execution / fill report */}
          {o.fill_price != null && (
            <>
              <div className="bo-section-h">成交回報 Execution</div>
              <div className="bo-kv" style={{ background: 'var(--tw-buy-050)', border: '1px solid var(--tw-buy-100)', borderRadius: 4, padding: '4px 12px' }}>
                <div className="k">成交價</div>
                <div className="v" style={{ fontWeight: 600 }}>{o.market === 'US' ? 'US$' : 'NT$'} {Number(o.fill_price).toFixed(2)}</div>
                <div className="k">成交數量</div>
                <div className="v">{Number(o.fill_qty ?? o.qty).toLocaleString()} 股</div>
                <div className="k">成交金額</div>
                <div className="v" style={{ fontWeight: 600 }}>{o.market === 'US' ? 'US$' : 'NT$'} {(Number(o.fill_price) * Number(o.fill_qty ?? o.qty)).toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                <div className="k">成交時間</div>
                <div className="v">{(o.fill_time || '').slice(0, 16).replace('T', ' ') || '—'}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
                <button className="bo-btn bo-btn--secondary" onClick={() => onRequestFill(o)}>
                  <Icon name="pencil" size={12} /> 修改成交回報
                </button>
              </div>
            </>
          )}

          {/* Owner */}
          <div className="bo-section-h">負責人 Owner</div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <select
              value={o.owner || ''}
              onChange={e => onAssign(o.id, e.target.value || null)}
              style={{
                flex: 1, padding: '7px 10px', borderRadius: 4,
                border: '1px solid var(--tw-border)', background: 'white',
                font: '500 13px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)'
              }}>
              <option value="">— 未指派 —</option>
              {STAFF.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <button className="bo-btn bo-btn--secondary" onClick={() => onAssign(o.id, 'Sylvia Yi')}>指派給我</button>
          </div>

          {/* Status update */}
          {!isTerminal && (
            <>
              <div className="bo-section-h">更新狀態 Update status</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {statusOrder.map((s, i) => (
                  <button key={s}
                    className={`bo-btn ${o.status === s ? 'bo-btn--primary' : 'bo-btn--secondary'}`}
                    disabled={o.status === s}
                    onClick={() => s === 'filled' ? onRequestFill(o) : onChangeStatus(o.id, s)}>
                    {i + 1}. {STATUS_LABEL[s]}
                  </button>
                ))}
                <button className="bo-btn bo-btn--reject" onClick={() => onChangeStatus(o.id, 'rejected')}>
                  標記失敗
                </button>
              </div>
            </>
          )}

          {/* Timeline */}
          <div className="bo-section-h">處理進度 Timeline</div>
          <ol className="bo-timeline">
            {timeline.map((t, i) => {
              const done = i < sIdx || (i === sIdx && (o.status === 'filled' || o.status === 'rejected'));
              const active = i === sIdx && o.status !== 'filled' && o.status !== 'rejected';
              const cls = done ? 'is-done' : active ? 'is-active' : 'is-todo';
              const isFailStep = i === 2 && isTerminal;
              return (
                <li key={i} className={cls}>
                  <div className="dot" style={isFailStep ? { background: 'var(--tw-sell-600)', borderColor: 'var(--tw-sell-600)' } : {}}>
                    {done ? <Icon name={isFailStep ? 'x' : 'check'} size={10} /> : null}
                  </div>
                  <div>
                    <div className="lbl">{t.label}</div>
                    <div className="t">{t.t || (active ? '進行中…' : '尚未處理')}</div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Notes */}
          <div className="bo-section-h">內部備註 Notes</div>
          {o.note && (
            <div className="bo-note">
              <div className="bo-note__head">
                <Icon name="user" size={12} /> {o.owner || 'System'}
                <span className="bo-note__time">{incrTime(o.t, 2)}</span>
              </div>
              <div className="bo-note__body">{o.note}</div>
            </div>
          )}
          <div className="bo-note-input">
            <textarea placeholder="新增備註… 例如：客戶已電話確認、等待開盤、與券商通路確認回報。"
              value={note} onChange={e => setNote(e.target.value)} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
            <button className="bo-btn bo-btn--primary"
              disabled={!note.trim()}
              onClick={() => { onAddNote(o.id, note); setNote(''); }}>
              新增備註
            </button>
          </div>
        </div>

        <div className="bo-drawer__foot">
          {o.status === 'pending' ? (
            <>
              <button className="bo-btn bo-btn--reject bo-btn--lg" onClick={() => onReject(o.id)}>
                <Icon name="x" size={14} /> 拒絕委託
              </button>
              <button className="bo-btn bo-btn--accept bo-btn--lg" onClick={() => onAccept(o.id)}>
                <Icon name="check" size={14} /> 接單
              </button>
            </>
          ) : (
            <button className="bo-btn bo-btn--primary bo-btn--lg" onClick={onClose}>關閉</button>
          )}
        </div>
      </aside>
    </>
  );
}

// Helper: increment a "YYYY-MM-DD HH:MM:SS" timestamp by N minutes
function incrTime(t, mins) {
  if (!t) return '';
  const [date, time] = t.split(' ');
  const [h, m, s] = time.split(':').map(Number);
  const total = h * 60 + m + mins;
  const nh = Math.floor(total / 60) % 24;
  const nm = total % 60;
  return `${date} ${String(nh).padStart(2,'0')}:${String(nm).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

window.OrderDrawer = OrderDrawer;

// ── Fill report modal (成交回報) ──────────────────────────────
// Pads a Date (or now) to the value format datetime-local expects.
function toLocalInput(iso) {
  const d = iso ? new Date(iso) : new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
}

function FillModal({ order, onClose, onConfirm }) {
  const cur = order.market === 'US' ? 'US$' : 'NT$';
  const [price, setPrice] = useState(order.fill_price != null ? String(order.fill_price) : (order.price != null ? String(order.price) : ''));
  const [qty,   setQty]   = useState(String(order.fill_qty ?? order.qty));
  const [time,  setTime]  = useState(toLocalInput(order.fill_time));
  const [err,   setErr]   = useState('');

  const submit = () => {
    const p = Number(price), q = Number(qty);
    if (!p || p <= 0) { setErr('請輸入有效的成交價格。'); return; }
    if (!q || q <= 0) { setErr('請輸入有效的成交數量。'); return; }
    onConfirm(order.id, {
      status: 'filled',
      fill_price: p,
      fill_qty: Math.round(q),
      fill_time: new Date(time).toISOString(),
    });
  };

  const total = (Number(price) || 0) * (Number(qty) || 0);
  const inputStyle = { padding: '9px 12px', borderRadius: 4, border: '1px solid var(--tw-border)', font: '500 14px/1 var(--tw-font-mono)', outline: 'none', width: '100%', boxSizing: 'border-box' };

  return (
    <>
      <div className="bo-scrim is-open" onClick={onClose} />
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'white', borderRadius: 8, width: 400, padding: 28, boxShadow: 'var(--tw-shadow-3)', zIndex: 90 }}>
        <div style={{ font: '600 16px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)', marginBottom: 4 }}>成交回報</div>
        <div style={{ font: '400 12px/1.4 var(--tw-font-sans)', color: 'var(--tw-fg-4)', marginBottom: 18 }}>
          {order.sym} · {order.side === 'buy' ? '買進' : '賣出'} · 委託 {order.qty.toLocaleString()} 股。填入實際成交資訊，將同步顯示於客戶委託紀錄並通知客戶。
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>成交價格 *</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid var(--tw-border)', borderRadius: 4, padding: '0 12px', background: 'white' }}>
              <span style={{ font: '600 13px/1 var(--tw-font-mono)', color: 'var(--tw-fg-4)' }}>{cur}</span>
              <input type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)} autoFocus placeholder="0.00"
                style={{ ...inputStyle, border: 'none', padding: '9px 0' }} />
            </div>
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>成交數量（股）*</span>
            <input type="number" value={qty} onChange={e => setQty(e.target.value)} style={inputStyle} />
            {Number(qty) > 0 && Number(qty) < order.qty && (
              <span style={{ font: '500 11px/1.4 var(--tw-font-sans)', color: 'var(--tw-status-pending-fg)' }}>部分成交：委託 {order.qty.toLocaleString()} 股中之 {Number(qty).toLocaleString()} 股。</span>
            )}
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>成交時間 *</span>
            <input type="datetime-local" value={time} onChange={e => setTime(e.target.value)} style={{ ...inputStyle, fontFamily: 'var(--tw-font-sans)' }} />
          </label>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px 12px', background: 'var(--tw-buy-050)', border: '1px solid var(--tw-buy-100)', borderRadius: 4 }}>
            <span style={{ font: '500 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-3)' }}>成交金額</span>
            <span style={{ font: '600 16px/1 var(--tw-font-mono)', color: 'var(--tw-fg-1)' }}>{cur} {total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          {err && <div style={{ font: '500 12px/1.4 var(--tw-font-sans)', color: 'var(--tw-sell-700)', display: 'flex', gap: 6, alignItems: 'center' }}><Icon name="alert-circle" size={13} /> {err}</div>}
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 22 }}>
          <button className="bo-btn bo-btn--secondary bo-btn--lg" onClick={onClose}>取消</button>
          <button className="bo-btn bo-btn--accept bo-btn--lg" onClick={submit}>
            <Icon name="check-circle" size={14} /> 確認成交
          </button>
        </div>
      </div>
    </>
  );
}

window.FillModal = FillModal;

// ── Confirm-accept modal (確認接單) ──────────────────────────
function ConfirmAcceptModal({ order, onClose, onConfirm }) {
  if (!order) return null;
  const o = order;
  const MKT_CCY = { TW: 'NT$', US: 'US$', CN: '¥', HK: 'HK$', JP: '¥', KR: '₩', UK: '£', EU: '€', CA: 'C$', AU: 'A$', SG: 'S$', IN: '₹' };
  const cur = MKT_CCY[o.market] || (o.market + ' ');
  return (
    <>
      <div className="bo-scrim is-open" onClick={onClose} />
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'white', borderRadius: 8, width: 410, padding: 28, boxShadow: 'var(--tw-shadow-3)', zIndex: 90 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 18 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--tw-status-accepted-bg)', color: 'var(--tw-status-accepted-fg)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <Icon name="check" size={18} />
          </div>
          <div>
            <div style={{ font: '600 16px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)' }}>確認接單</div>
            <div style={{ font: '400 12px/1.5 var(--tw-font-sans)', color: 'var(--tw-fg-3)', marginTop: 5 }}>接單後狀態將更新為「已接單」並通知客戶。請確認委託內容無誤。</div>
          </div>
        </div>
        <div className="bo-kv" style={{ background: 'var(--tw-ink-050)', borderRadius: 4, padding: '8px 12px', marginBottom: 20 }}>
          <div className="k">委託編號</div><div className="v">{o.id}</div>
          <div className="k">客戶</div><div className="v">{o.client} <span style={{ color: 'var(--tw-fg-4)', fontFamily: 'var(--tw-font-mono)', fontSize: 11, marginLeft: 4 }}>{o.cid}</span></div>
          <div className="k">下單帳號</div><div className="v">{o.account || '—'}{o.order_bank ? ` · ${o.order_bank}` : ''}</div>
          <div className="k">股票</div><div className="v">{o.sym} <Badge tone={o.market.toLowerCase()}>{o.market}</Badge></div>
          <div className="k">方向</div><div className="v sans"><Badge tone={o.side}>{o.side === 'buy' ? 'BUY' : 'SELL'}</Badge> {o.side === 'buy' ? '買進' : '賣出'}</div>
          <div className="k">數量</div><div className="v">{o.qty.toLocaleString()} 股</div>
          <div className="k">價格</div><div className="v">{o.price != null ? `${cur} ${Number(o.price).toFixed(2)}` : '市價 · 依市場成交價'}</div>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
          <button className="bo-btn bo-btn--secondary bo-btn--lg" onClick={onClose}>取消</button>
          <button className="bo-btn bo-btn--accept bo-btn--lg" onClick={() => onConfirm(o.id)}>
            <Icon name="check" size={14} /> 確認接單
          </button>
        </div>
      </div>
    </>
  );
}

window.ConfirmAcceptModal = ConfirmAcceptModal;
