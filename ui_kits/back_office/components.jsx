// ============================================================
// TeraWise Desk — Back-Office · shared atoms & helpers
// ============================================================
const { useState, useEffect, useMemo, useRef } = React;

// Brand mark (same as customer portal, sized for sidebar)
function BrandMark({ size = 26, color = 'var(--tw-gold-500)', stem = '#8B4A24' }) {
  const Row = ({ by, w, ty, gap }) => (
    <g fill={color}>
      <polygon points={`32,${by} ${32 - w},${ty + 2} ${32 - gap / 2},${ty}`} />
      <polygon points={`32,${by} ${32 + w},${ty + 2} ${32 + gap / 2},${ty}`} />
    </g>
  );
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} style={{ display: 'block' }}>
      <Row by={22} w={8}  ty={11} gap={4} />
      <Row by={34} w={10} ty={22} gap={5} />
      <Row by={46} w={12} ty={33} gap={6} />
      <rect x="30.5" y="46" width="3" height="10" fill={stem}/>
      <rect x="19" y="55" width="26" height="2.5" fill={stem}/>
    </svg>
  );
}

function Icon({ name, size = 14, color, style }) {
  const iconName = name.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
  const lc = window.lucide;
  if (!lc || !lc[iconName]) {
    return <span style={{ display: 'inline-flex', width: size, height: size, ...style }} />;
  }
  let svgHtml = '';
  try {
    if (typeof lc.createElement === 'function') {
      // Use Lucide's own API — works regardless of internal data format or version
      const el = lc.createElement(lc[iconName], { width: size, height: size, 'stroke-width': 1.5 });
      svgHtml = el.outerHTML;
    } else {
      // Fallback: icon data is a flat children array [[tag, attrs], ...]
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

const STATUS_LABEL = {
  pending:  '送出委託',
  accepted: '已接單',
  filled:   '完成',
  rejected: '失敗',
};

// ---- Order type & time-in-force labels ----
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

// ---- Market conventions (mirrors customer portal) ----
const MARKETS = [
  { code: 'TW', label: '台灣',    conv: 'east' },
  { code: 'US', label: '美國',    conv: 'west' },
  { code: 'CN', label: '中國 A股', conv: 'east' },
  { code: 'HK', label: '香港',    conv: 'east' },
  { code: 'JP', label: '日本',    conv: 'jp'   },
  { code: 'KR', label: '韓國',    conv: 'kr'   },
  { code: 'UK', label: '英國',    conv: 'west' },
  { code: 'EU', label: '歐洲',    conv: 'west' },
  { code: 'CA', label: '加拿大',  conv: 'west' },
  { code: 'AU', label: '澳洲',    conv: 'west' },
  { code: 'SG', label: '新加坡',  conv: 'east' },
  { code: 'IN', label: '印度',    conv: 'west' },
];
function getMarketColors(code) {
  const conv = MARKETS.find(m => m.code === code)?.conv ?? 'west';
  switch (conv) {
    case 'east': return { up: 'var(--tw-red-600)',     down: 'var(--tw-green-600)' };
    case 'jp':
    case 'kr':   return { up: 'var(--tw-red-600)',     down: 'var(--tw-blue-dn-600)' };
    default:     return { up: 'var(--tw-green-600)',   down: 'var(--tw-red-600)' };
  }
}

// Market session status — timezone-aware, DST-correct (see customer portal for notes)
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
function usHoursTW(d = new Date()) {
  const offName = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', timeZoneName: 'short' })
    .formatToParts(d).find(x => x.type === 'timeZoneName')?.value || '';
  return offName.includes('DT') ? '夏令 21:30–04:00（台灣）' : '冬令 22:30–05:00（台灣）';
}

function StatusChip({ status }) {
  return <span className={`bo-chip bo-chip--${status}`}>{STATUS_LABEL[status]}</span>;
}

function Badge({ tone, children }) {
  return <span className={`bo-badge bo-badge--${tone}`}>{children}</span>;
}

// Assignable desk owners for the order-detail "負責人 Owner" select
const STAFF = ['Victor', 'Sylvia Yi', 'David Chen', 'Kevin Lam'];

Object.assign(window, { BrandMark, Icon, StatusChip, Badge, STATUS_LABEL, MARKETS, getMarketColors, marketStatus, usHoursTW, STAFF, ORDER_TYPE_LABEL, ORDER_TYPE_SHORT, TIF_LABEL, TIF_SHORT });
