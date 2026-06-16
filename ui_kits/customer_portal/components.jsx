// ============================================================
// TeraWise Trade — Customer Portal · atoms & shared bits
// ============================================================

const { useState, useEffect, useMemo, useRef } = React;

// ----- Brand mark (inline SVG of the wheat-leaf, for header use) -----
// Recreated to match the logo: 3 stacked chevron-V wheat rows where each
// row = 2 angled wedge leaves meeting at the bottom, with a notch at top.
// On a brown stem with a horizontal ground bar.
function BrandMark({ size = 22, color = 'var(--tw-gold-500)', stem = '#8B4A24' }) {
  // Each row: a pair of wedge polygons. Params: bottom apex y (by), outer top width (w),
  // top y (ty), gap between inner tops (gap)
  const Row = ({ by, w, ty, gap }) => (
    <g fill={color}>
      {/* left wedge */}
      <polygon points={`32,${by} ${32 - w},${ty + 2} ${32 - gap / 2},${ty}`} />
      {/* right wedge */}
      <polygon points={`32,${by} ${32 + w},${ty + 2} ${32 + gap / 2},${ty}`} />
    </g>
  );
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} style={{ display: 'block' }}>
      {/* Top (smallest) → bottom (largest) */}
      <Row by={22}  w={8}  ty={11}  gap={4} />
      <Row by={34}  w={10} ty={22}  gap={5} />
      <Row by={46}  w={12} ty={33}  gap={6} />
      {/* stem */}
      <rect x="30.5" y="46" width="3" height="10" fill={stem}/>
      {/* horizontal ground bar */}
      <rect x="19" y="55" width="26" height="2.5" fill={stem}/>
    </svg>
  );
}

// ----- Lucide icon wrapper (uses Lucide's own API — version-agnostic, no React DOM conflict) -----
function Icon({ name, size = 16, color, style }) {
  const iconName = name.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
  const lc = window.lucide;
  if (!lc || !lc[iconName]) {
    return <span style={{ display: 'inline-flex', width: size, height: size, ...style }} />;
  }
  let svgHtml = '';
  try {
    if (typeof lc.createElement === 'function') {
      const el = lc.createElement(lc[iconName], { width: size, height: size, 'stroke-width': 1.5 });
      svgHtml = el.outerHTML;
    } else {
      const kids = Array.isArray(lc[iconName][0]) ? lc[iconName] : (lc[iconName][2] || []);
      const childStr = kids.map(child => {
        if (!Array.isArray(child)) return '';
        const [tag, attrs] = child;
        const a = Object.entries(attrs || {}).filter(([k]) => k !== 'key')
          .map(([k, v]) => `${k}="${v}"`).join(' ');
        return `<${tag} ${a}/>`;
      }).join('');
      svgHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${childStr}</svg>`;
    }
  } catch(e) {
    return <span style={{ display: 'inline-flex', width: size, height: size, ...style }} />;
  }
  return (
    <span
      style={{ display: 'inline-flex', color, ...style }}
      dangerouslySetInnerHTML={{ __html: svgHtml }}
    />
  );
}

// ----- Button -----
function Button({ variant = 'primary', size = 'md', icon, children, onClick, disabled, type = 'button', style, full }) {
  const cls = ['tw-btn', `tw-btn--${variant}`, `tw-btn--${size}`, full && 'tw-btn--full', disabled && 'is-disabled']
    .filter(Boolean).join(' ');
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} style={style}>
      {icon && <Icon name={icon} size={size === 'sm' ? 14 : 16} />}
      <span>{children}</span>
    </button>
  );
}

// ----- Field wrapper -----
function Field({ label, required, hint, error, children }) {
  return (
    <label className="tw-field">
      <span className="tw-field__label">
        {label}{required && <span className="tw-field__req">*</span>}
      </span>
      {children}
      {error
        ? <span className="tw-field__err">{error}</span>
        : hint && <span className="tw-field__hint">{hint}</span>}
    </label>
  );
}

// ----- Segmented control -----
function Segmented({ options, value, onChange, tone }) {
  return (
    <div className={`tw-seg ${tone ? 'tw-seg--' + tone : ''}`}>
      {options.map(o => (
        <button key={o.value}
          className={`tw-seg__btn ${value === o.value ? 'is-on' : ''} ${o.tone ? 'tw-seg__btn--' + o.tone : ''}`}
          onClick={() => onChange(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

// ----- Status chip -----
const STATUS_LABEL = {
  pending:  '送出委託',
  accepted: '已接單',
  filled:   '完成',
  rejected: '失敗',
};
function StatusChip({ status }) {
  return <span className={`tw-chip tw-chip--${status}`}>{STATUS_LABEL[status]}</span>;
}

// ----- Order type & time-in-force labels -----
const ORDER_TYPE_LABEL = {
  limit:    '限價 LIMIT',
  market:   '市價 MARKET',
  at_open:  '開盤價 @market open price',
  at_close: '收盤價 @market close price',
};
const ORDER_TYPE_SHORT = { limit: '限價', market: '市價', at_open: '@market open', at_close: '@market close' };
const TIF_LABEL = {
  rod: 'ROD 當日有效',
  ioc: 'IOC 立即成交否則取消',
  fok: 'FOK 全部成交否則取消',
};
const TIF_SHORT = { rod: 'ROD', ioc: 'IOC', fok: 'FOK' };
// Only limit orders carry a client-specified price
const TYPE_NEEDS_PRICE = (t) => t === 'limit';

// ----- Attribute badge -----
function Badge({ tone = 'neutral', children }) {
  return <span className={`tw-badge tw-badge--${tone}`}>{children}</span>;
}

// ----- Number cell (tabular) -----
function Num({ value, sign, prefix, suffix, decimals = 2 }) {
  const isNeg = Number(value) < 0;
  const cls = sign ? (isNeg ? 'tw-num is-down' : 'tw-num is-up') : 'tw-num';
  const v = typeof value === 'number'
    ? value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : value;
  const explicit = sign && !isNeg ? '+' : '';
  return <span className={cls}>{prefix}{explicit}{v}{suffix}</span>;
}

// ----- Step indicator (wizard) -----
function Steps({ items, current }) {
  return (
    <ol className="tw-steps">
      {items.map((s, i) => (
        <li key={s} className={`tw-steps__item ${i < current ? 'is-done' : ''} ${i === current ? 'is-active' : ''}`}>
          <span className="tw-steps__dot">{i < current ? <Icon name="check" size={12} /> : i + 1}</span>
          <span className="tw-steps__label">{s}</span>
        </li>
      ))}
    </ol>
  );
}

// ----- Toast -----
function Toast({ tone = 'success', children, onClose }) {
  useEffect(() => {
    const t = setTimeout(() => onClose && onClose(), 4500);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`tw-toast tw-toast--${tone}`}>
      <Icon name={tone === 'success' ? 'check-circle-2' : 'alert-triangle'} size={18} />
      <div>{children}</div>
      <button className="tw-toast__close" onClick={onClose}><Icon name="x" size={14} /></button>
    </div>
  );
}

// ============================================================
// Market color conventions (market-aware up/down)
// ============================================================
const MARKETS = [
  { code: 'TW', label: '台灣', flag: '🇹🇼', conv: 'east' },
  { code: 'US', label: '美國', flag: '🇺🇸', conv: 'west' },
  { code: 'CN', label: '中國 A 股', flag: '🇨🇳', conv: 'east' },
  { code: 'HK', label: '香港', flag: '🇭🇰', conv: 'east' },
  { code: 'JP', label: '日本', flag: '🇯🇵', conv: 'jp' },
  { code: 'KR', label: '韓國', flag: '🇰🇷', conv: 'kr' },
  { code: 'UK', label: '英國', flag: '🇬🇧', conv: 'west' },
  { code: 'EU', label: '歐洲', flag: '🇪🇺', conv: 'west' },
  { code: 'CA', label: '加拿大', flag: '🇨🇦', conv: 'west' },
  { code: 'AU', label: '澳洲', flag: '🇦🇺', conv: 'west' },
  { code: 'SG', label: '新加坡', flag: '🇸🇬', conv: 'east' },
  { code: 'IN', label: '印度', flag: '🇮🇳', conv: 'west' },
];

// Per-market currency symbol & display name (fallback for custom codes)
const MARKET_CCY = {
  TW: 'NT$', US: 'US$', CN: '¥', HK: 'HK$', JP: '¥', KR: '₩',
  UK: '£', EU: '€', CA: 'C$', AU: 'A$', SG: 'S$', IN: '₹',
};
function marketCcy(code) { return MARKET_CCY[code] || `${code} `; }
function marketName(code) {
  const m = MARKETS.find(x => x.code === code);
  return m ? m.label : code;
}

// Returns { up: cssColor, down: cssColor } for a given market code
function getMarketColors(marketCode) {
  const m = MARKETS.find(x => x.code === marketCode);
  const conv = m?.conv ?? 'west';
  switch (conv) {
    case 'east': return { up: 'var(--tw-red-600)',     down: 'var(--tw-green-600)' };
    case 'jp':   return { up: 'var(--tw-red-600)',     down: 'var(--tw-blue-dn-600)' };
    case 'kr':   return { up: 'var(--tw-red-600)',     down: 'var(--tw-blue-dn-600)' };
    default:     return { up: 'var(--tw-green-600)',   down: 'var(--tw-red-600)' };
  }
}

// ============================================================
// Market session status (timezone-aware, DST-correct)
//  US 常規盤 09:30–16:00 美東（夏令台灣 21:30–04:00／冬令 22:30–05:00）
//  TW 常規盤 09:00–13:30 台灣
// 以實際時區計算，自動處理日光節約時間與週末。
// ============================================================
function marketStatus(code, d = new Date()) {
  const tz = code === 'US' ? 'America/New_York' : 'Asia/Taipei';
  const p = new Intl.DateTimeFormat('en-US', {
    timeZone: tz, weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
  }).formatToParts(d).reduce((a, x) => (a[x.type] = x.value, a), {});
  const weekend = p.weekday === 'Sat' || p.weekday === 'Sun';
  const mins = (Number(p.hour) % 24) * 60 + Number(p.minute);
  let open = false;
  if (code === 'US')      open = !weekend && mins >= 570 && mins < 960; // 09:30–16:00 ET
  else if (code === 'TW') open = !weekend && mins >= 540 && mins < 810; // 09:00–13:30
  return { open, label: open ? '交易中' : '已收盤' };
}
// 美股交易時間（台灣時間）說明，依夏令/冬令切換
function usHoursTW(d = new Date()) {
  const offName = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', timeZoneName: 'short' })
    .formatToParts(d).find(x => x.type === 'timeZoneName')?.value || '';
  const dst = offName.includes('DT'); // EDT = 夏令
  return dst ? '夏令 21:30–04:00（台灣）' : '冬令 22:30–05:00（台灣）';
}

// Delta chip with market-aware color
function DeltaChip({ value, market }) {
  const colors = getMarketColors(market);
  const isUp = Number(value) >= 0;
  const color = isUp ? colors.up : colors.down;
  const sign = isUp ? '+' : '';
  return (
    <span style={{
      fontFamily: 'var(--tw-font-mono)', fontWeight: 600,
      fontSize: 12, fontVariantNumeric: 'tabular-nums',
      color,
    }}>
      {sign}{typeof value === 'number' ? value.toFixed(2) + '%' : value}
    </span>
  );
}

// ============================================================
// Login screen
// ============================================================
function LoginScreen({ onLogin }) {
  const [email,   setEmail]   = useState('');
  const [pass,    setPass]    = useState('');
  const [err,     setErr]     = useState('');
  const [loading, setLoading] = useState(false);
  const [gLoading, setGLoading] = useState(false);

  const handleGoogle = async () => {
    setErr(''); setGLoading(true);
    try {
      // redirect 回客戶端介面本身（不管從哪個 host 跑）
      const redirectTo = window.location.href.split('#')[0].split('?')[0];
      const { error } = await sb.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo },
      });
      if (error) { setErr(error.message); setGLoading(false); }
      // 成功時頁面會轉跳至 Google，回來後 sb 會自動建立 session
    } catch (e) {
      setErr(e.message); setGLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !pass.trim()) { setErr('請填寫 Email 與密碼。'); return; }
    setErr(''); setLoading(true);
    try {
      const res = await fetch(
        'https://yecijqecmabjtgpwfroy.supabase.co/auth/v1/token?grant_type=password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': 'sb_publishable_WpuOkrhxrKQWCbgOosVcWQ_VJyJWCVi',
          },
          body: JSON.stringify({ email: email.trim(), password: pass }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setErr(data.error_description || data.msg || data.error || `Error ${res.status}`);
        setLoading(false);
        return;
      }
      await sb.auth.setSession({ access_token: data.access_token, refresh_token: data.refresh_token });
    } catch (err) {
      setErr(err.message);
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--tw-navy-900)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--tw-font-sans)', padding: 24
    }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        {/* Logo block */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <BrandMark size={56} />
          <div style={{
            font: '600 26px/1.1 var(--tw-font-serif)',
            color: 'white', marginTop: 12, letterSpacing: '-0.01em'
          }}>TeraWise Capital</div>
          <div style={{
            font: '600 10px/1 var(--tw-font-sans)',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--tw-gold-400)', marginTop: 8
          }}>YOUR MOST RELIABLE PARTNER</div>
        </div>

        {/* Card */}
        <div style={{
          background: 'white', borderRadius: 6, padding: '28px 28px 24px',
          boxShadow: 'var(--tw-shadow-3)'
        }}>
          <div style={{ font: '600 16px/1 var(--tw-font-sans)', color: 'var(--tw-fg-1)', marginBottom: 4 }}>
            登入帳號
          </div>
          <div style={{ font: '400 13px/1.4 var(--tw-font-sans)', color: 'var(--tw-fg-4)', marginBottom: 22 }}>
            TeraWise Trade 客戶委託入口
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>
                Email
              </span>
              <input
                className="tw-input"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                autoComplete="email"
              />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ font: '600 12px/1 var(--tw-font-sans)', color: 'var(--tw-fg-2)' }}>
                密碼
              </span>
              <input
                className="tw-input"
                type="password"
                value={pass}
                onChange={e => setPass(e.target.value)}
                placeholder="請輸入密碼"
                autoComplete="current-password"
              />
            </label>

            {err && (
              <div style={{
                font: '500 12px/1.4 var(--tw-font-sans)',
                color: 'var(--tw-sell-700)',
                display: 'flex', alignItems: 'center', gap: 6
              }}>
                <Icon name="alert-circle" size={14} /> {err}
              </div>
            )}

            <button
              type="submit"
              className={`tw-btn tw-btn--primary tw-btn--full tw-btn--lg ${loading ? 'is-disabled' : ''}`}
              disabled={loading}
              style={{ marginTop: 4 }}>
              {loading ? '登入中…' : '登入'}
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '18px 0' }}>
            <div style={{ flex: 1, height: 1, background: 'var(--tw-border-subtle)' }} />
            <span style={{ font: '500 11px/1 var(--tw-font-sans)', color: 'var(--tw-fg-4)', letterSpacing: '0.04em' }}>或</span>
            <div style={{ flex: 1, height: 1, background: 'var(--tw-border-subtle)' }} />
          </div>

          {/* Google sign-in */}
          <button
            type="button"
            onClick={handleGoogle}
            disabled={gLoading}
            className="tw-btn tw-btn--secondary tw-btn--full tw-btn--lg"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z"/>
              <path fill="#FBBC05" d="M3.97 10.72a5.4 5.4 0 0 1 0-3.44V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.33z"/>
              <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"/>
            </svg>
            {gLoading ? '轉接 Google…' : '使用 Google 帳號継續'}
          </button>

          <div style={{
            marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--tw-border-subtle)',
            font: '400 12px/1.4 var(--tw-font-sans)', color: 'var(--tw-fg-4)',
            textAlign: 'center'
          }}>
            帳號由專員代為建立，忘記密碼請聯繫您的專員。
          </div>
        </div>

        <div style={{
          marginTop: 20, textAlign: 'center',
          font: '500 11px/1.4 var(--tw-font-sans)', color: 'rgba(255,255,255,0.3)'
        }}>
          © 2025 TeraWise Capital · ESTD 2022
        </div>
      </div>
    </div>
  );
}

// Expose globally for other Babel scripts
Object.assign(window, {
  BrandMark, Icon, Button, Field, Segmented, StatusChip, Badge, Num, Steps, Toast,
  STATUS_LABEL, MARKETS, getMarketColors, DeltaChip, LoginScreen, marketStatus, usHoursTW,
  marketCcy, marketName,
  ORDER_TYPE_LABEL, ORDER_TYPE_SHORT, TIF_LABEL, TIF_SHORT, TYPE_NEEDS_PRICE
});
