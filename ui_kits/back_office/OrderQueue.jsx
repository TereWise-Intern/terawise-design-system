// ============================================================
// TeraWise Desk — Order Queue (KPIs + filter + bulk + table)
// ============================================================
function OrderQueue({ orders, onOpenOrder, openId, onAccept, onBulkAccept, onReject, onChangeStatus, onAssign, onRequestFill }) {
  const [filter, setFilter] = useState('all');
  const [marketFilter, setMarketFilter] = useState('all');
  const [sideFilter, setSideFilter] = useState('all');
  const [selected, setSelected] = useState(new Set());

  const kpi = useMemo(() => ({
    all:      orders.length,
    pending:  orders.filter(o => o.status === 'pending').length,
    accepted: orders.filter(o => o.status === 'accepted').length,
    filled:   orders.filter(o => o.status === 'filled').length,
    rejected: orders.filter(o => o.status === 'rejected').length,
  }), [orders]);

  const filtered = useMemo(() => orders.filter(o => {
    if (filter !== 'all' && o.status !== filter) return false;
    if (marketFilter !== 'all' && o.market !== marketFilter) return false;
    if (sideFilter !== 'all' && o.side !== sideFilter) return false;
    return true;
  }), [orders, filter, marketFilter, sideFilter]);

  const toggle = (id) => {
    setSelected(prev => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });
  };
  const toggleAll = () => {
    if (selected.size === filtered.length) setSelected(new Set());
    else setSelected(new Set(filtered.map(o => o.id)));
  };

  const kpiTiles = [
    { id: 'all',      label: '本日委託 ALL',   value: kpi.all,      delta: '',         color: 'var(--tw-navy-600)' },
    { id: 'pending',  label: '送出委託',       value: kpi.pending,  delta: '待接單',    color: 'var(--tw-status-pending-fg)',  urgent: true },
    { id: 'accepted', label: '已接單',         value: kpi.accepted, delta: '處理中',    color: 'var(--tw-status-accepted-fg)' },
    { id: 'filled',   label: '完成',           value: kpi.filled,   delta: '',         color: 'var(--tw-status-filled-fg)' },
    { id: 'rejected', label: '失敗',           value: kpi.rejected, delta: '',         color: 'var(--tw-status-rejected-fg)' },
  ];

  return (
    <div>
      {/* KPI tiles double as quick filters */}
      <div className="bo-kpi">
        {kpiTiles.map(t => (
          <div key={t.id}
            className={`bo-kpi__tile ${filter === t.id ? 'is-active' : ''}`}
            onClick={() => setFilter(t.id)}>
            <div className="bo-kpi__label">
              <span className="bo-kpi__chip" style={{ background: t.color }} />
              {t.label}
            </div>
            <div className="bo-kpi__value">{t.value}</div>
            <div className="bo-kpi__delta" style={{ color: t.urgent ? 'var(--tw-status-pending-fg)' : 'var(--tw-fg-4)' }}>
              {t.delta || '\u00A0'}
            </div>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div className="bo-filter">
        <span style={{ font: '600 11px/1 var(--tw-font-sans)', color: 'var(--tw-fg-4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          市場
        </span>
        {['all', 'US', 'TW'].map(m => (
          <button key={m} className={`bo-filter__chip ${marketFilter === m ? 'is-on' : ''}`}
            onClick={() => setMarketFilter(m)}>
            {m === 'all' ? '全部' : m}
          </button>
        ))}
        <span className="bo-filter__sep"></span>
        <span style={{ font: '600 11px/1 var(--tw-font-sans)', color: 'var(--tw-fg-4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          方向
        </span>
        {[{ v: 'all', l: '全部' }, { v: 'buy', l: 'BUY' }, { v: 'sell', l: 'SELL' }].map(o => (
          <button key={o.v} className={`bo-filter__chip ${sideFilter === o.v ? 'is-on' : ''}`}
            onClick={() => setSideFilter(o.v)}>{o.l}</button>
        ))}
        <div className="bo-filter__spacer" />
        <div className="bo-filter__sort">
          <Icon name="arrow-up-down" size={12} />
          排序：下單時間 ↓
        </div>
        <span className="bo-filter__sep"></span>
        <button className="bo-btn bo-btn--secondary">
          <Icon name="download" size={12} /> 匯出 CSV
        </button>
      </div>

      {/* Bulk action bar — shown when items selected */}
      {selected.size > 0 && (
        <div className="bo-bulk">
          <Icon name="check-square" size={16} />
          <span className="bo-bulk__count">{selected.size}</span>
          <span>筆委託已選取</span>
          <div className="bo-bulk__spacer" />
          <button className="bo-bulk__btn buy" onClick={() => { onBulkAccept([...selected]); setSelected(new Set()); }}>
            <Icon name="check" size={12} /> 全部接單
          </button>
          <button className="bo-bulk__btn" onClick={() => { selected.forEach(id => onAssign(id, 'Sylvia Yi')); }}>
            指派給我
          </button>
          <button className="bo-bulk__btn" onClick={() => setSelected(new Set())}>取消選取</button>
        </div>
      )}

      {/* Table */}
      <div className="bo-table-wrap">
        <table className="bo-table">
          <thead>
            <tr>
              <th className="ck">
                <input type="checkbox"
                  checked={filtered.length > 0 && selected.size === filtered.length}
                  ref={el => el && (el.indeterminate = selected.size > 0 && selected.size < filtered.length)}
                  onChange={toggleAll} />
              </th>
              <th>下單時間<Icon name="chevron-down" size={10} style={{ marginLeft: 4 }} /></th>
              <th>委託編號</th>
              <th>客戶</th>
              <th>市場</th>
              <th>股票</th>
              <th>方向</th>
              <th>類型</th>
              <th className="r">數量</th>
              <th className="r">價格</th>
              <th>負責人</th>
              <th>狀態</th>
              <th className="r" style={{ width: 180 }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(o => (
              <tr key={o.id}
                  className={`${selected.has(o.id) ? 'is-selected' : ''} ${openId === o.id ? 'is-open' : ''}`}
                  onClick={() => onOpenOrder(o.id)}>
                <td className="ck" onClick={e => e.stopPropagation()}>
                  <input type="checkbox" checked={selected.has(o.id)} onChange={() => toggle(o.id)} />
                </td>
                <td>{o.t.slice(5, 16)}</td>
                <td>{o.id}</td>
                <td className="l">
                  {o.client}
                  <span style={{ font: '500 11px/1 var(--tw-font-mono)', color: 'var(--tw-fg-4)', marginLeft: 6 }}>{o.cid}</span>
                </td>
                <td className="l"><Badge tone={o.market.toLowerCase()}>{o.market}</Badge></td>
                <td><span style={{ fontWeight: 600 }}>{o.sym}</span></td>
                <td className="l"><Badge tone={o.side}>{o.side === 'buy' ? 'BUY' : 'SELL'}</Badge></td>
                <td className="l">{ORDER_TYPE_SHORT[o.type] || o.type}{o.time_in_force ? <span style={{ font: '500 10px/1 var(--tw-font-mono)', color: 'var(--tw-fg-4)', marginLeft: 5 }}>{TIF_SHORT[o.time_in_force]}</span> : null}</td>
                <td className="r">{o.qty.toLocaleString()}</td>
                <td className="r">{o.fill_price != null ? Number(o.fill_price).toFixed(2) : o.price != null ? Number(o.price).toFixed(2) : '市價'}</td>
                <td className="l" style={{ color: o.owner ? 'var(--tw-fg-1)' : 'var(--tw-fg-4)' }}>
                  {o.owner || '— 未指派'}
                </td>
                <td className="l"><StatusChip status={o.status} /></td>
                <td className="r" onClick={e => e.stopPropagation()}>
                  {o.status === 'pending' ? (
                    <div className="row-actions">
                      <button className="bo-btn bo-btn--accept" onClick={() => onAccept(o.id)}>
                        <Icon name="check" size={12} /> 接單
                      </button>
                      <button className="bo-btn bo-btn--reject" onClick={() => onReject(o.id)}>拒絕</button>
                    </div>
                  ) : o.status === 'accepted' ? (
                    <div className="row-actions">
                      <button className="bo-btn bo-btn--accept" onClick={() => onRequestFill(o)}>
                        <Icon name="check-circle" size={12} /> 完成
                      </button>
                      <button className="bo-btn bo-btn--reject" onClick={() => onChangeStatus(o.id, 'rejected')}>失敗</button>
                    </div>
                  ) : (o.status === 'filled' || o.status === 'rejected') ? (
                    <div className="row-actions">
                      <button className="bo-btn bo-btn--secondary" onClick={() => onChangeStatus(o.id, 'accepted')}>
                        <Icon name="undo-2" size={12} /> 撤回
                      </button>
                      <button className="bo-btn bo-btn--ghost" onClick={() => onOpenOrder(o.id)}>
                        <Icon name="arrow-up-right" size={12} /> 詳細
                      </button>
                    </div>
                  ) : null}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="13" style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--tw-fg-4)' }}>
                  目前篩選條件下沒有委託紀錄。
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

window.OrderQueue = OrderQueue;
