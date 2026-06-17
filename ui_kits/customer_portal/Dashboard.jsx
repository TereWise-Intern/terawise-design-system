// ============================================================
// TeraWise Trade — Dashboard (overview)
// ============================================================
function Dashboard({ onPlaceOrder, onCancelOrder, onModifyOrder, userName, orders = [] }) {
  const [filter, setFilter] = useState('all');
  const [openOrder, setOpenOrder] = useState(null);
  const [confirmCancel, setConfirmCancel] = useState(null);
  const filtered = orders.filter(o => {
    if (filter === 'all') return true;
    if (filter === 'open') return ['pending', 'accepted', 'processing'].includes(o.status);
    if (filter === 'done') return ['filled', 'cancelled', 'rejected'].includes(o.status);
    return true;
  });

  const greetHour = new Date().getHours();
  const greeting = greetHour < 12 ? '早安' : greetHour < 18 ? '午安' : '晚安';
  const today = new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' });
  const usSt = marketStatus('US');
  const twSt = marketStatus('TW');

  return (
    <div className="tw-stack">
      <div className="tw-page-head">
        <div>
          <h1>{greeting}，{userName}。</h1>
          <div className="tw-page-head__sub">兆易觀點｜{today} · 美股{usSt.label} · 台股{twSt.label}</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <a href="https://terawisehk.com/2026q1%e5%85%86%e6%98%93%e8%a7%80%e9%bb%9e/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" icon="file-text">本週研究週報</Button>
          </a>
          <Button variant="primary" icon="arrow-up-right" onClick={onPlaceOrder}>建立新委託</Button>
        </div>
      </div>

      {/* LINE promotion banner */}
      <a href="https://lin.ee/ofwCuzI" target="_blank" rel="noopener noreferrer" style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '14px 20px',
        background: '#06C755', borderRadius: 6,
        textDecoration: 'none', color: 'white',
        boxShadow: 'var(--tw-shadow-1)',
        transition: 'filter 80ms ease',
      }}
      onMouseEnter={e => e.currentTarget.style.filter = 'brightness(0.92)'}
      onMouseLeave={e => e.currentTarget.style.filter = ''}>
        {/* LINE logo mark */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="white" fillOpacity="0.2"/>
          <path d="M26 14.4C26 9.76 21.52 6 16 6C10.48 6 6 9.76 6 14.4C6 18.56 9.6 22.04 14.48 22.68C14.84 22.76 15.32 22.92 15.44 23.24C15.56 23.52 15.52 23.96 15.48 24.24L15.28 25.44C15.2 25.76 15.04 26.68 16 26.28C16.96 25.88 21.2 23.12 23.12 20.92C24.44 19.44 26 17.08 26 14.4Z" fill="white"/>
          <path d="M13.5 12.5H12.5C12.22 12.5 12 12.72 12 13V17C12 17.28 12.22 17.5 12.5 17.5H13.5C13.78 17.5 14 17.28 14 17V13C14 12.72 13.78 12.5 13.5 12.5Z" fill="#06C755"/>
          <path d="M20 12.5H19C18.72 12.5 18.5 12.72 18.5 13V15.5L16.5 12.72C16.44 12.6 16.3 12.5 16.16 12.5H15C14.72 12.5 14.5 12.72 14.5 13V17C14.5 17.28 14.72 17.5 15 17.5H16C16.28 17.5 16.5 17.28 16.5 17V14.5L18.5 17.28C18.56 17.4 18.7 17.5 18.84 17.5H20C20.28 17.5 20.5 17.28 20.5 17V13C20.5 12.72 20.28 12.5 20 12.5Z" fill="#06C755"/>
        </svg>
        <div style={{ flex: 1 }}>
          <div style={{ font: '600 14px/1.2 var(--tw-font-sans)' }}>加入 LINE 官方帳號</div>
          <div style={{ font: '400 12px/1.4 var(--tw-font-sans)', opacity: 0.88, marginTop: 3 }}>每日接收兆易觀點最新研究報告與市場動態</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, font: '600 13px/1 var(--tw-font-sans)', opacity: 0.9 }}>
          立即加入
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </a>

      {/* orders */}
      <div className="tw-card">
        <div className="tw-card__head">
          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <div className="tw-card__title">委託紀錄 Orders</div>
            <Segmented
              options={[
                { value: 'all',  label: '全部' },
                { value: 'open', label: '處理中' },
                { value: 'done', label: '已結案' },
              ]}
              value={filter} onChange={setFilter} />
            <div style={{ font: '500 12px/1 var(--tw-font-mono)', color: 'var(--tw-fg-4)' }}>
              共 {filtered.length} 筆
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button className="tw-icon-btn" title="搜尋"><Icon name="search" /></button>
            <button className="tw-icon-btn" title="篩選"><Icon name="filter" /></button>
            <button className="tw-icon-btn" title="匯出"><Icon name="download" /></button>
          </div>
        </div>
        <table className="tw-table">
          <thead>
            <tr>
              <th>下單時間</th>
              <th>委託編號</th>
              <th>市場</th>
              <th>股票</th>
              <th>方向</th>
              <th>類型</th>
              <th className="r">數量</th>
              <th className="r">價格</th>
              <th>狀態</th>
              <th className="r">操作</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(o => (
              <tr key={o.id} onClick={() => setOpenOrder(o)} className={openOrder?.id === o.id ? 'is-active' : ''}>
                <td>{o.t.slice(5, 16)}</td>
                <td>{o.id}</td>
                <td className="l"><Badge tone={o.market.toLowerCase()}>{o.market}</Badge></td>
                <td><span style={{ fontWeight: 600 }}>{o.sym}</span></td>
                <td className="l"><Badge tone={o.side}>{o.side === 'buy' ? 'BUY' : 'SELL'}</Badge></td>
                <td className="l">{orderTypeShort(o)}{o.time_in_force ? <span style={{ color: 'var(--tw-fg-4)', marginLeft: 4 }}>· {TIF_SHORT[o.time_in_force]}</span> : null}</td>
                <td className="r">{o.qty.toLocaleString()}</td>
                <td className="r">{o.fill_price != null ? Number(o.fill_price).toFixed(2) : o.price != null ? Number(o.price).toFixed(2) : '市價'}</td>
                <td className="l"><StatusChip status={o.status} /></td>
                <td className="r" onClick={e => e.stopPropagation()}>
                  {CLIENT_EDITABLE(o.status) ? (
                    <div style={{ display: 'flex', gap: 4, justifyContent: 'flex-end' }}>
                      <button className="tw-icon-btn" title="修改委託" onClick={() => onModifyOrder && onModifyOrder(o)}><Icon name="pencil" size={15} /></button>
                      <button className="tw-icon-btn" title="取消委託" onClick={() => setConfirmCancel(o)} style={{ color: 'var(--tw-sell-600)' }}><Icon name="x" size={15} /></button>
                    </div>
                  ) : (
                    <span style={{ color: 'var(--tw-fg-4)', font: '400 12px/1 var(--tw-font-sans)' }}>—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <OrderDetail order={openOrder} onClose={() => setOpenOrder(null)}
        onModify={(o) => { setOpenOrder(null); onModifyOrder && onModifyOrder(o); }}
        onCancel={(o) => setConfirmCancel(o)} />
      <ConfirmCancel order={confirmCancel}
        onClose={() => setConfirmCancel(null)}
        onConfirm={() => { onCancelOrder && onCancelOrder(confirmCancel); setOpenOrder(null); setConfirmCancel(null); }} />
    </div>
  );
}

window.Dashboard = Dashboard;

function OrderDetail({ order, onClose, onModify, onCancel }) {
  const isOpen = !!order;
  const o = order ?? {};
  const timeline = [
    { status: 'pending',    label: '客戶送出委託',  t: o.t },
    { status: 'accepted',   label: '後台已接單',     t: o.t && o.t.replace(/(\d\d):(\d\d):(\d\d)/, (m, h, mi, s) => `${h}:${String(Number(mi) + 1).padStart(2, '0')}:${s}`) },
    { status: 'processing', label: '送往券商通路',   t: '' },
    { status: 'filled',     label: '全數成交',       t: o.fill_time ? o.fill_time.slice(0, 19).replace('T', ' ') : '' },
  ];
  const order_status_index = ['pending','accepted','processing','filled','cancelled','rejected'].indexOf(o.status);
  return (
    <>
      <div className={`tw-scrim ${isOpen ? 'is-open' : ''}`} onClick={onClose} />
      <aside className={`tw-drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="tw-drawer__head">
          <div>
            <div className="tw-drawer__title">委託詳情</div>
            <div style={{ font: '500 11px/1.2 var(--tw-font-mono)', color: 'var(--tw-fg-4)', marginTop: 4 }}>{o.id}</div>
          </div>
          <button className="tw-icon-btn" onClick={onClose}><Icon name="x" size={18} /></button>
        </div>
        <div className="tw-drawer__body">
          {order && (
            <>
              <div style={{ marginBottom: 18 }}>
                <StatusChip status={o.status} />
              </div>
              <div className="tw-kv">
                <div className="tw-kv__k">下單帳號</div>
                <div className="tw-kv__v">{o.account || '—'}</div>
                <div className="tw-kv__k">市場</div>
                <div className="tw-kv__v is-sans"><Badge tone={o.market.toLowerCase()}>{o.market}</Badge> {marketName(o.market)}</div>
                <div className="tw-kv__k">股票</div>
                <div className="tw-kv__v">{o.sym} <span style={{ color: 'var(--tw-fg-4)', font: '400 13px/1 var(--tw-font-sans)' }}>— {o.name}</span></div>
                <div className="tw-kv__k">方向</div>
                <div className="tw-kv__v is-sans"><Badge tone={o.side}>{o.side === 'buy' ? 'BUY' : 'SELL'}</Badge> {o.side === 'buy' ? '買進' : '賣出'}</div>
                <div className="tw-kv__k">數量</div>
                <div className="tw-kv__v">{o.qty?.toLocaleString()} 股</div>
                <div className="tw-kv__k">委託類型</div>
                <div className="tw-kv__v is-sans">{orderTypeLabel(o)}</div>
                <div className="tw-kv__k">委託效期</div>
                <div className="tw-kv__v is-sans">{TIF_LABEL[o.time_in_force || 'rod']}</div>
                {o.price != null && (
                  <>
                    <div className="tw-kv__k">委託限價</div>
                    <div className="tw-kv__v">{marketCcy(o.market)} {o.price?.toFixed(2)}</div>
                  </>
                )}
                <div className="tw-kv__k">下單時間</div>
                <div className="tw-kv__v">{o.t}</div>
              </div>

              {o.fill_price != null && (
                <div style={{ marginTop: 14, padding: '12px 14px', background: 'var(--tw-buy-050)', border: '1px solid var(--tw-buy-100)', borderRadius: 4 }}>
                  <div style={{ font: '600 11px/1 var(--tw-font-sans)', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--tw-buy-700)', marginBottom: 10 }}>成交資訊 Execution</div>
                  <div className="tw-kv" style={{ gridTemplateColumns: '88px 1fr', rowGap: 8 }}>
                    <div className="tw-kv__k">成交價</div>
                    <div className="tw-kv__v" style={{ fontWeight: 600 }}>{marketCcy(o.market)} {Number(o.fill_price).toFixed(2)}</div>
                    <div className="tw-kv__k">成交數量</div>
                    <div className="tw-kv__v">{Number(o.fill_qty ?? o.qty).toLocaleString()} 股</div>
                    <div className="tw-kv__k">成交金額</div>
                    <div className="tw-kv__v" style={{ fontWeight: 600 }}>{marketCcy(o.market)} {(Number(o.fill_price) * Number(o.fill_qty ?? o.qty)).toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                    <div className="tw-kv__k">成交時間</div>
                    <div className="tw-kv__v">{(o.fill_time || '').slice(0, 16).replace('T', ' ') || '—'}</div>
                  </div>
                </div>
              )}

              <hr className="tw-hr" />
              <div style={{ font: '600 11px/1 var(--tw-font-sans)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--tw-fg-4)', marginBottom: 12 }}>
                處理進度 Timeline
              </div>
              <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {timeline.map((t, i) => {
                  const done = i <= order_status_index;
                  const active = i === order_status_index && o.status !== 'filled';
                  return (
                    <li key={i} style={{
                      display: 'flex', gap: 12, padding: '10px 0',
                      opacity: done ? 1 : 0.45
                    }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: '50%',
                        background: done ? 'var(--tw-buy-600)' : 'var(--tw-ink-200)',
                        color: 'white', display: 'grid', placeItems: 'center',
                        font: '600 11px/1 var(--tw-font-mono)', flexShrink: 0
                      }}>{done ? <Icon name="check" size={12} /> : i + 1}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ font: '500 13px/1.4 var(--tw-font-sans)', color: 'var(--tw-fg-1)' }}>{t.label}</div>
                        <div style={{ font: '500 11px/1 var(--tw-font-mono)', color: 'var(--tw-fg-4)', marginTop: 4 }}>{t.t || (active ? '進行中…' : '')}</div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </>
          )}
        </div>
        <div className="tw-drawer__foot">
          {order && CLIENT_EDITABLE(o.status) ? (
            <>
              <Button variant="ghost" onClick={onClose}>關閉</Button>
              <Button variant="danger" icon="x" onClick={() => onCancel && onCancel(order)}>取消委託</Button>
              <Button variant="secondary" icon="pencil" onClick={() => onModify && onModify(order)}>修改委託</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" icon="phone">聯繫專員</Button>
              <Button variant="secondary" onClick={onClose}>關閉</Button>
            </>
          )}
        </div>
      </aside>
    </>
  );
}

window.OrderDetail = OrderDetail;

// ---------- Cancel confirmation dialog (接單前可取消) ----------
function ConfirmCancel({ order, onClose, onConfirm }) {
  const isOpen = !!order;
  const o = order ?? {};
  return (
    <>
      <div className={`tw-scrim ${isOpen ? 'is-open' : ''}`} onClick={onClose} style={{ zIndex: 60 }} />
      {isOpen && (
        <div role="dialog" aria-modal="true" style={{
          position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 'min(420px, calc(100vw - 32px))', background: 'white',
          border: '1px solid var(--tw-border)', borderRadius: 8,
          boxShadow: 'var(--tw-shadow-3)', zIndex: 61, overflow: 'hidden'
        }}>
          <div style={{ padding: '20px 22px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--tw-sell-050)', color: 'var(--tw-sell-600)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <Icon name="alert-triangle" size={18} />
              </span>
              <div style={{ font: 'var(--tw-text-h3)', color: 'var(--tw-fg-1)' }}>取消這筆委託？</div>
            </div>
            <div style={{ font: 'var(--tw-text-small)', color: 'var(--tw-fg-3)', lineHeight: 1.6 }}>
              委託 <strong style={{ fontFamily: 'var(--tw-font-mono)', color: 'var(--tw-fg-1)' }}>{o.id}</strong>（{o.sym} · {Number(o.qty || 0).toLocaleString()} 股）將被取消，無法復原。僅後台接單前可取消。
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '18px 22px 20px' }}>
            <Button variant="secondary" onClick={onClose}>保留委託</Button>
            <Button variant="sell" icon="x" onClick={onConfirm}>確認取消</Button>
          </div>
        </div>
      )}
    </>
  );
}
window.ConfirmCancel = ConfirmCancel;
