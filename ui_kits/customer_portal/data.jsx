// ============================================================
// TeraWise Trade — Sample data (stubbed quotes & orders)
// ============================================================
const SAMPLE_SYMBOLS = [
  // US stocks
  { sym: 'AAPL',  name: '蘋果 Apple',          market: 'US', last: 227.63, chg:  0.84, pct:  0.37 },
  { sym: 'NVDA',  name: '輝達 NVIDIA',          market: 'US', last: 129.84, chg: -2.41, pct: -1.83 },
  { sym: 'MSFT',  name: '微軟 Microsoft',       market: 'US', last: 416.20, chg:  1.52, pct:  0.37 },
  { sym: 'TSLA',  name: '特斯拉 Tesla',         market: 'US', last: 354.40, chg:  5.10, pct:  1.46 },
  { sym: 'AMZN',  name: '亞馬遜 Amazon',        market: 'US', last: 224.18, chg:  0.60, pct:  0.27 },
  { sym: 'GOOGL', name: 'Google Alphabet',      market: 'US', last: 196.45, chg: -1.20, pct: -0.61 },
  { sym: 'META',  name: 'Meta 元宇宙',          market: 'US', last: 726.50, chg:  8.30, pct:  1.16 },
  { sym: 'NFLX',  name: '網飛 Netflix',         market: 'US', last: 1025.30,chg:  3.80, pct:  0.37 },
  { sym: 'AMD',   name: '超微半導體 AMD',        market: 'US', last: 118.42, chg: -1.58, pct: -1.32 },
  { sym: 'AVGO',  name: '博通 Broadcom',        market: 'US', last: 244.66, chg:  2.10, pct:  0.87 },
  // TW stocks
  { sym: '2330.TW', name: '台積電 TSMC',         market: 'TW', last: 1135.00,chg: 25.00, pct:  2.25 },
  { sym: '2317.TW', name: '鴻海 Hon Hai',        market: 'TW', last: 184.50, chg:  1.50, pct:  0.82 },
  { sym: '2454.TW', name: '聯發科 MediaTek',     market: 'TW', last: 1485.00,chg:-10.00, pct: -0.67 },
  { sym: '2303.TW', name: '聯電 UMC',            market: 'TW', last: 56.10,  chg:  0.30, pct:  0.54 },
  { sym: '2308.TW', name: '台達電 Delta',        market: 'TW', last: 382.00, chg: -3.00, pct: -0.78 },
  { sym: '2412.TW', name: '中華電信 Chunghwa',   market: 'TW', last: 120.50, chg:  0.50, pct:  0.42 },
  { sym: '2382.TW', name: '廣達 Quanta',         market: 'TW', last: 318.00, chg:  4.00, pct:  1.27 },
  { sym: '2881.TW', name: '富邦金 Fubon',        market: 'TW', last: 102.50, chg: -0.50, pct: -0.49 },
  { sym: '2882.TW', name: '國泰金 Cathay',       market: 'TW', last: 68.80,  chg:  0.20, pct:  0.29 },
  { sym: '0050.TW', name: '元大台灣50 ETF',      market: 'TW', last: 208.40, chg:  2.80, pct:  1.36 },
];
const findSym = (q) => SAMPLE_SYMBOLS.find(s => s.sym.toUpperCase() === q.toUpperCase());

window.SAMPLE_SYMBOLS = SAMPLE_SYMBOLS;
window.findSym = findSym;
