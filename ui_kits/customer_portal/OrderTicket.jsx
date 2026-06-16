// ============================================================
// TeraWise Trade — Order ticket (5-step wizard)
// ============================================================
const STEP_LABELS = ['市場與股票', '買賣與類型', '數量與價格', '確認'];

// ── 交易日：產生未來 N 個工作日（排除周六日）──
const WEEKDAY_ZH = ['日','一','二','三','四','五','六'];
function getBusinessDays(n) {
  const days = [];
  const d = new Date();
  while (days.length < n) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {
      const y = d.getFullYear(), m = d.getMonth() + 1, dt = d.getDate();
      days.push({
        value: `${y}-${String(m).padStart(2,'0')}-${String(dt).padStart(2,'0')}`,
        label: `${y}/${m}/${dt}（周${WEEKDAY_ZH[dow]}）`,
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return days;
}
function getDefaultTradeDate() {
  const d = new Date();
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  const m = d.getMonth() + 1, dt = d.getDate();
  return `${d.getFullYear()}-${String(m).padStart(2,'0')}-${String(dt).padStart(2,'0')}`;
}

function OrderTicket({ initial, onCancel, onSubmit, clientId, clientName, accounts = [], orderBanks = [] }) {
  const [step, setStep] = useState(0);
  const [ticket, setTicket] = useState({
    market: 'US', symbol: 'AAPL',
    side: 'buy', type: 'limit', tif: 'rod',
    qty: 100, price: '',
    trade_date: getDefaultTradeDate(),
    account: accounts[0] || '',
    order_bank: orderBanks[0] || '',
    ...initial,
  });
  const update = (patch) => setTicket(t => ({ ...t, ...patch }));
  const quote = useMemo(() => findSym(ticket.symbol), [ticket.symbol]);
  // 系統目前無即時報價來源：僅限價單以客戶自訂價格估算金額；市價／開收盤單依實際成交價結算。
  const estimate = useMemo(() => {
    if (!TYPE_NEEDS_PRICE(ticket.type)) return null;
    return Number(ticket.price || 0) * Number(ticket.qty || 0);
  }, [ticket]);

  const next = () => setStep(s => Math.min(s + 1, STEP_LABELS.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));
  const needPrice = TYPE_NEEDS_PRICE(ticket.type);
  const stepValid =
    step === 0 ? !!ticket.account && !!String(ticket.symbol).trim() && !!ticket.order_bank :
    step === 2 ? Number(ticket.qty) > 0 && (!needPrice || Number(ticket.price) > 0) :
    true;

  return (
    <div>
      <div className="tw-page-head">
        <div>
          <h1>建立委託 New order</h1>
          <div className="tw-page-head__sub">送出前將顯示確認頁面，避免誤送。</div>
        </div>
        <Button variant="ghost" icon="x" onClick={onCancel}>取消下單</Button>
      </div>

      <Steps items={STEP_LABELS} current={step} />

      <div className="tw-grid-2">
        <div className="tw-card">
          <div className="tw-card__head">
            <div className="tw-card__title">{STEP_LABELS[step]}</div>
            <div className="tw-card__sub">STEP {step + 1} / {STEP_LABELS.length}</div>
          </div>
          <div className="tw-card__body">
            {step === 0 && <StepMarketSymbol ticket={ticket} update={update} accounts={accounts} orderBanks={orderBanks} />}
            {step === 1 && <StepSideType ticket={ticket} update={update} />}
            {step === 2 && <StepQtyPrice ticket={ticket} update={update} quote={quote} />}
            {step === 3 && <StepConfirm ticket={ticket} quote={quote} estimate={estimate} clientName={clientName} />}
          </div>
          <div className="tw-card__foot">
            {step > 0 && <Button variant="secondary" onClick={back}>返回上一步</Button>}
            {step < 3 && <Button variant="primary" onClick={next} disabled={!stepValid}>下一步</Button>}
            {step === 3 && (
              <Button variant={ticket.side === 'buy' ? 'buy' : 'sell'} size="lg"
                onClick={() => onSubmit(ticket)}>
                確認送出 · {ticket.side === 'buy' ? '買進' : '賣出'}
              </Button>
            )}
          </div>
        </div>

        <SidePreview ticket={ticket} quote={quote} estimate={estimate} step={step} clientName={clientName} />
      </div>
    </div>
  );
}

// ---------- Step 0: market + symbol ----------
function StepMarketSymbol({ ticket, update, accounts = [], orderBanks = [] }) {
  const [customMarket, setCustomMarket] = useState('');
  const [showCustom, setShowCustom] = useState(false);

  const handleMarketClick = (code) => {
    if (code === '__other__') { setShowCustom(true); return; }
    setShowCustom(false);
    update({ market: code });
  };

  const applyCustom = () => {
    const v = customMarket.trim().toUpperCase();
    if (v) { update({ market: v }); setShowCustom(false); }
  };

  // Suggestions: US + TW stocks for now (extend per market as needed)
  const suggestions = SAMPLE_SYMBOLS.filter(s =>
    s.market === ticket.market || (ticket.market !== 'US' && ticket.market !== 'TW' && false)
  );

  return (
    <div className="tw-stack">
      <Field label="下單帳號 Account" required hint="選擇本次委託使用的券商交割帳號">
        {accounts.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {accounts.map(a => (
              <button key={a}
                onClick={() => update({ account: a })}
                className={`tw-btn tw-btn--sm ${ticket.account === a ? 'tw-btn--primary' : 'tw-btn--secondary'}`}
                style={{ fontFamily: 'var(--tw-font-mono)', fontWeight: 600, padding: '9px 14px', height: 'auto', ...(ticket.account === a ? { boxShadow: '0 0 0 2px var(--tw-navy-800)' } : {}) }}>
                {a}
              </button>
            ))}
          </div>
        ) : (
          <div style={{
            background: 'var(--tw-sell-050)', border: '1px solid var(--tw-sell-100)',
            borderRadius: 4, padding: '10px 12px', display: 'flex', gap: 10, alignItems: 'flex-start',
            font: 'var(--tw-text-small)', color: 'var(--tw-sell-700)'
          }}>
            <Icon name="alert-triangle" size={16} color="var(--tw-sell-700)" style={{ marginTop: 1 }} />
            <div>您的帳戶尚未設定下單帳號，請聯繫您的專員開通後再行委託。</div>
          </div>
        )}
      </Field>

      <Field label="下單銀行 Order Bank" required hint="選擇本次委託的下單銀行">
        {orderBanks.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {orderBanks.map(b => (
              <button key={b}
                onClick={() => update({ order_bank: b })}
                className={`tw-btn tw-btn--sm ${ticket.order_bank === b ? 'tw-btn--primary' : 'tw-btn--secondary'}`}
                style={{ fontWeight: 600, padding: '9px 14px', height: 'auto', ...(ticket.order_bank === b ? { boxShadow: '0 0 0 2px var(--tw-navy-800)' } : {}) }}>
                {b}
              </button>
            ))}
          </div>
        ) : (
          <div style={{
            background: 'var(--tw-sell-050)', border: '1px solid var(--tw-sell-100)',
            borderRadius: 4, padding: '10px 12px', display: 'flex', gap: 10, alignItems: 'flex-start',
            font: 'var(--tw-text-small)', color: 'var(--tw-sell-700)'
          }}>
            <Icon name="alert-triangle" size={16} color="var(--tw-sell-700)" style={{ marginTop: 1 }} />
            <div>您的帳戶尚未設定下單銀行，請聯繫您的專員設定後再行委託。</div>
          </div>
        )}
      </Field>

      <Field label="市場別 Market" required>
        {/* Primary market grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {MARKETS.map(m => (
            <button key={m.code}
              onClick={() => handleMarketClick(m.code)}
              className={`tw-btn ${ticket.market === m.code ? 'tw-btn--primary' : 'tw-btn--secondary'} tw-btn--sm`}
              style={{ flexDirection: 'column', gap: 2, padding: '10px 6px', height: 'auto' }}>
              <span style={{ font: '500 11px/1 var(--tw-font-mono)' }}>{m.code}</span>
              <span style={{ font: '400 10px/1.2 var(--tw-font-sans)', opacity: 0.75 }}>{m.label}</span>
            </button>
          ))}
          <button
            onClick={() => handleMarketClick('__other__')}
            className={`tw-btn tw-btn--sm ${showCustom ? 'tw-btn--primary' : 'tw-btn--secondary'}`}
            style={{ flexDirection: 'column', gap: 2, padding: '10px 6px', height: 'auto' }}>
            <span style={{ font: '500 11px/1 var(--tw-font-mono)' }}>其他</span>
            <span style={{ font: '400 10px/1.2 var(--tw-font-sans)', opacity: 0.75 }}>Custom</span>
          </button>
        </div>

        {/* Custom market free input */}
        {showCustom && (
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <input className="tw-input is-mono"
              value={customMarket}
              onChange={e => setCustomMarket(e.target.value.toUpperCase())}
              placeholder="自行輸入市場代碼 (e.g. BR, MX, TR)"
              onKeyDown={e => e.key === 'Enter' && applyCustom()} />
            <Button variant="primary" onClick={applyCustom}>確認</Button>
          </div>
        )}

        {/* Currently selected */}
        {ticket.market && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, marginTop: 6,
            font: '500 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-3)'
          }}>
            <Icon name="map-pin" size={13} />
            已選取：<strong style={{ color: 'var(--tw-fg-1)', fontFamily: 'var(--tw-font-mono)' }}>{ticket.market}</strong>
            {MARKETS.find(m => m.code === ticket.market)?.label && (
              <span>— {MARKETS.find(m => m.code === ticket.market).label}</span>
            )}
          </div>
        )}
      </Field>

      <Field label="股票代碼 Symbol" required hint="輸入上市代碼，例如 AAPL, NVDA, 2330.TW, 7203.T, 005930.KS">
        <input className="tw-input is-mono" value={ticket.symbol}
          onChange={e => update({ symbol: e.target.value.toUpperCase() })}
          placeholder="輸入股票代碼" />
      </Field>

      {suggestions.length > 0 && (
        <div>
          <div style={{ font: '600 11px/1 var(--tw-font-sans)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--tw-fg-4)', marginBottom: 10 }}>
            常用 Quick select
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {suggestions.map(s => (
              <button key={s.sym}
                onClick={() => update({ symbol: s.sym })}
                className={`tw-btn tw-btn--sm ${ticket.symbol === s.sym ? 'tw-btn--primary' : 'tw-btn--secondary'}`}
                style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 2, height: 'auto', padding: '8px 12px', minWidth: 100 }}>
                <span style={{ fontFamily: 'var(--tw-font-mono)', fontWeight: 600, fontSize: 13 }}>{s.sym}</span>
                <span style={{ fontSize: 11, opacity: 0.7, fontFamily: 'var(--tw-font-sans)', fontWeight: 400, whiteSpace: 'nowrap' }}>{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Step 1: side + type ----------
function StepSideType({ ticket, update }) {
  return (
    <div className="tw-stack">
      <Field label="買賣方向 Side" required>
        <Segmented
          options={[
            { value: 'buy',  label: '買進 BUY',  tone: 'buy'  },
            { value: 'sell', label: '賣出 SELL', tone: 'sell' },
          ]}
          value={ticket.side} onChange={(v) => update({ side: v })} />
      </Field>
      <Field label="委託類型 Order type" required hint="限價單於指定價格或更佳成交；市價單以最佳價格立即成交；開盤／收盤價於當日集合競價成交">
        <Segmented
          options={[
            { value: 'limit',    label: '限價' },
            { value: 'market',   label: '市價' },
            { value: 'at_open',  label: '開盤價' },
            { value: 'at_close', label: '收盤價' },
          ]}
          value={ticket.type} onChange={(v) => update({ type: v })} />
      </Field>
      <Field label="委託效期 Time in force" required hint="ROD 當日有效；IOC 立即成交否則取消；FOK 全部成交否則取消">
        <Segmented
          options={[
            { value: 'rod', label: 'ROD 當日' },
            { value: 'ioc', label: 'IOC' },
            { value: 'fok', label: 'FOK' },
          ]}
          value={ticket.tif || 'rod'} onChange={(v) => update({ tif: v })} />
      </Field>
      <div style={{
        background: 'var(--tw-navy-050)', border: '1px solid var(--tw-navy-100)',
        borderRadius: 4, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'flex-start',
        font: 'var(--tw-text-small)', color: 'var(--tw-fg-2)'
      }}>
        <Icon name="info" size={16} color="var(--tw-navy-500)" style={{ marginTop: 1 }} />
        <div>
          委託送出後僅<strong>後台人員</strong>可協助取消，客戶端暫不開放自助取消。
          如需取消請聯繫專員。
        </div>
      </div>
    </div>
  );
}

// ---------- Step 2: qty + price ----------
function StepQtyPrice({ ticket, update, quote }) {
  const needsPrice = TYPE_NEEDS_PRICE(ticket.type);
  return (
    <div className="tw-stack">
      <Field label="交易日 Trade Date" required>
        <select className="tw-input" style={{ fontFamily: 'var(--tw-font-mono)' }}
          value={ticket.trade_date || ''}
          onChange={e => update({ trade_date: e.target.value })}>
          {getBusinessDays(10).map(d => (
            <option key={d.value} value={d.value}>{d.label}</option>
          ))}
        </select>
      </Field>
      {quote && (
        <div className="tw-quote-strip">
          <span className="sym">{quote.sym}</span>
          <span style={{ color: 'var(--tw-fg-3)', font: '500 12px/1 var(--tw-font-sans)' }}>{quote.name}</span>
        </div>
      )}
      <div className={needsPrice ? 'tw-grid-form-2' : ''}>
        <Field label="數量 Quantity (股)" required>
          <input className="tw-input is-mono" value={ticket.qty}
            onChange={e => update({ qty: e.target.value.replace(/[^\d]/g, '') })} />
        </Field>
        {needsPrice && (
          <Field label="限價 Limit Price" required>
            <div className="tw-input--prefix-wrap">
              <span className="prefix">{marketCcy(ticket.market)}</span>
              <input
                className="tw-input is-mono"
                value={ticket.price}
                onChange={e => update({ price: e.target.value })}
                placeholder="輸入您的限定價格" />
            </div>
          </Field>
        )}
      </div>
      {!needsPrice && (
        <div style={{
          background: 'var(--tw-navy-050)', border: '1px solid var(--tw-navy-100)',
          borderRadius: 4, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'flex-start',
          font: 'var(--tw-text-small)', color: 'var(--tw-fg-2)'
        }}>
          <Icon name="info" size={16} color="var(--tw-navy-500)" style={{ marginTop: 1 }} />
          <div>{ORDER_TYPE_SHORT[ticket.type]}單依市場最佳價格成交，無需指定價格。實際成交價將於後台回報後顯示。</div>
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
        {[10, 50, 100, 500].map(n => (
          <button key={n} className="tw-btn tw-btn--secondary tw-btn--sm" onClick={() => update({ qty: n })}>
            {n.toLocaleString()} 股
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------- Step 3: confirm ----------
function StepConfirm({ ticket, quote, estimate, clientName }) {
  return (
    <div>
      <div style={{
        background: ticket.side === 'buy' ? 'var(--tw-buy-050)' : 'var(--tw-sell-050)',
        border: `1px solid ${ticket.side === 'buy' ? 'var(--tw-buy-100)' : 'var(--tw-sell-100)'}`,
        borderLeft: `3px solid ${ticket.side === 'buy' ? 'var(--tw-buy-600)' : 'var(--tw-sell-600)'}`,
        borderRadius: 4, padding: '12px 14px', marginBottom: 16,
        display: 'flex', gap: 10, alignItems: 'center',
        font: 'var(--tw-text-small)', color: 'var(--tw-fg-1)'
      }}>
        <Icon name="alert-triangle" size={16}
          color={ticket.side === 'buy' ? 'var(--tw-buy-700)' : 'var(--tw-sell-700)'} />
        <div>請仔細核對下方委託內容。送出後將提交至後台處理，<strong>無法由客戶端自行取消</strong>。</div>
      </div>
      <div className="tw-kv">
        <div className="tw-kv__k">戶名</div>
        <div className="tw-kv__v" style={{ fontWeight: 600 }}>{clientName || '—'}</div>
        <div className="tw-kv__k">下單帳號</div>
        <div className="tw-kv__v">{ticket.account || '—'}</div>
        <div className="tw-kv__k">下單銀行</div>
        <div className="tw-kv__v">{ticket.order_bank || '—'}</div>
        <div className="tw-kv__k">交易日</div>
        <div className="tw-kv__v">{ticket.trade_date ? ticket.trade_date.replace(/-/g, '/') : '—'}</div>
        <div className="tw-kv__k">市場</div>
        <div className="tw-kv__v is-sans">
          <Badge tone={ticket.market.toLowerCase()}>{ticket.market}</Badge>
          {`${marketName(ticket.market)} · ${ticket.market} Equities`}
        </div>
        <div className="tw-kv__k">股票</div>
        <div className="tw-kv__v">{ticket.symbol} <span style={{ font: '400 13px/1.6 var(--tw-font-sans)', color: 'var(--tw-fg-4)' }}>— {quote?.name ?? '—'}</span></div>
        <div className="tw-kv__k">方向</div>
        <div className="tw-kv__v is-sans"><Badge tone={ticket.side}>{ticket.side === 'buy' ? 'BUY' : 'SELL'}</Badge> {ticket.side === 'buy' ? '買進' : '賣出'}</div>
        <div className="tw-kv__k">數量</div>
        <div className="tw-kv__v">{Number(ticket.qty).toLocaleString()} 股</div>
        <div className="tw-kv__k">委託類型</div>
        <div className="tw-kv__v is-sans"><Badge tone="neutral">{ORDER_TYPE_LABEL[ticket.type] || ticket.type}</Badge></div>
        <div className="tw-kv__k">委託效期</div>
        <div className="tw-kv__v is-sans"><Badge tone="neutral">{TIF_LABEL[ticket.tif || 'rod']}</Badge></div>
        {TYPE_NEEDS_PRICE(ticket.type) && (
          <>
            <div className="tw-kv__k">限價</div>
            <div className="tw-kv__v">{marketCcy(ticket.market)} {Number(ticket.price).toFixed(2)}</div>
          </>
        )}
        <div className="tw-kv__k">預估金額</div>
        <div className="tw-kv__v" style={{ fontWeight: 600 }}>
          {estimate == null
            ? <span style={{ font: '400 13px/1.6 var(--tw-font-sans)', color: 'var(--tw-fg-3)' }}>依市場成交價結算</span>
            : `${marketCcy(ticket.market)} ${estimate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
        </div>
      </div>
    </div>
  );
}

// ---------- Step 4: submitted ----------
function StepSubmitted({ ticket }) {
  return (
    <div style={{ textAlign: 'center', padding: '28px 12px 18px' }}>
      <div style={{
        width: 48, height: 48, margin: '0 auto 16px',
        background: 'var(--tw-buy-100)', color: 'var(--tw-buy-700)',
        borderRadius: '50%', display: 'grid', placeItems: 'center'
      }}>
        <Icon name="check" size={26} />
      </div>
      <div style={{ font: 'var(--tw-text-h3)', color: 'var(--tw-fg-1)', marginBottom: 6 }}>委託已送出</div>
      <div style={{ font: 'var(--tw-text-small)', color: 'var(--tw-fg-3)', marginBottom: 20 }}>
        後台人員將於數分鐘內接單並更新狀態。
      </div>
      <div style={{
        display: 'inline-flex', gap: 12, alignItems: 'center',
        padding: '10px 16px', background: 'var(--tw-navy-050)',
        border: '1px solid var(--tw-navy-100)', borderRadius: 4
      }}>
        <span style={{ font: '500 11px/1 var(--tw-font-sans)', color: 'var(--tw-fg-4)', letterSpacing: '0.04em' }}>ORDER ID</span>
        <span style={{ font: '600 14px/1 var(--tw-font-mono)' }}>OR-20250218-0145</span>
      </div>
    </div>
  );
}

// ---------- Side preview (always-visible summary) ----------
function SidePreview({ ticket, quote, estimate, step, clientName }) {
  return (
    <div className="tw-card" style={{ alignSelf: 'flex-start', position: 'sticky', top: 80 }}>
      <div className="tw-card__head">
        <div className="tw-card__title">委託預覽 Order preview</div>
        <Badge tone={ticket.side}>{ticket.side === 'buy' ? 'BUY' : 'SELL'}</Badge>
      </div>
      <div className="tw-card__body">
        <div className="tw-kv" style={{ gridTemplateColumns: '90px 1fr' }}>
          <div className="tw-kv__k">戶名</div>
          <div className="tw-kv__v" style={{ fontWeight: 600 }}>{clientName || '—'}</div>
          <div className="tw-kv__k">帳號</div>
          <div className="tw-kv__v">{ticket.account || '—'}</div>
          <div className="tw-kv__k">銀行</div>
          <div className="tw-kv__v">{ticket.order_bank || '—'}</div>
          <div className="tw-kv__k">市場</div>
          <div className="tw-kv__v is-sans">{marketName(ticket.market)}</div>
          <div className="tw-kv__k">股票</div>
          <div className="tw-kv__v">{ticket.symbol || '—'}</div>
          <div className="tw-kv__k">類型</div>
          <div className="tw-kv__v is-sans">{ORDER_TYPE_SHORT[ticket.type] || ticket.type}</div>
          <div className="tw-kv__k">效期</div>
          <div className="tw-kv__v is-sans">{TIF_SHORT[ticket.tif || 'rod']}</div>
          <div className="tw-kv__k">數量</div>
          <div className="tw-kv__v">{Number(ticket.qty || 0).toLocaleString()} 股</div>
          {TYPE_NEEDS_PRICE(ticket.type) && (
            <>
              <div className="tw-kv__k">限價</div>
              <div className="tw-kv__v">{marketCcy(ticket.market)} {Number(ticket.price || 0).toFixed(2)}</div>
            </>
          )}
        </div>
        <hr className="tw-hr" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ font: '500 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-4)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>預估金額</span>
          {estimate == null ? (
            <span style={{ font: '500 13px/1.3 var(--tw-font-sans)', color: 'var(--tw-fg-3)' }}>依市場成交價</span>
          ) : (
            <span style={{ font: '600 22px/1.1 var(--tw-font-mono)', color: 'var(--tw-fg-1)', fontVariantNumeric: 'tabular-nums' }}>
              {marketCcy(ticket.market)} {estimate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

window.OrderTicket = OrderTicket;
