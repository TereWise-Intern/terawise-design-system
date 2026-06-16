/* @ds-bundle: {"format":3,"namespace":"TeraWiseDesignSystem_248c24","components":[],"sourceHashes":{"ios-frame.jsx":"d67eb3ffe562","ui_kits/back_office/ClientAdmin.jsx":"fe1abf85f22d","ui_kits/back_office/DeskApp.jsx":"2c5997ca443f","ui_kits/back_office/OrderDrawer.jsx":"24f54496e1b5","ui_kits/back_office/OrderQueue.jsx":"64a9cc5e3a62","ui_kits/back_office/Sidebar.jsx":"16c440a0ccd3","ui_kits/back_office/StaffAdmin.jsx":"016d7762242a","ui_kits/back_office/TopBar.jsx":"0e40dd596bc1","ui_kits/back_office/components.jsx":"c521a660361b","ui_kits/back_office/supabase.js":"84cae052a7b8","ui_kits/customer_portal/App.jsx":"25b475311013","ui_kits/customer_portal/Dashboard.jsx":"6fa62bf11c2a","ui_kits/customer_portal/OrderTicket.jsx":"91b49d0a6830","ui_kits/customer_portal/TopNav.jsx":"b68c5a4b99e9","ui_kits/customer_portal/components.jsx":"999d1a6a7bef","ui_kits/customer_portal/data.jsx":"20164c857524","ui_kits/customer_portal/supabase.js":"ea861dc71ce8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TeraWiseDesignSystem_248c24 = window.TeraWiseDesignSystem_248c24 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back_office/ClientAdmin.jsx
try { (() => {
// ============================================================
// TeraWise Desk — Client account management (Supabase)
// ============================================================

function ClientAdmin() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [resetTarget, setResetTarget] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [openClient, setOpenClient] = useState(null);
  useEffect(() => {
    loadClients();
  }, []);
  const loadClients = async () => {
    setLoading(true);
    const {
      data: clientsData
    } = await sb.from('clients').select('*').order('created_at', {
      ascending: false
    });
    const {
      data: ordersData
    } = await sb.from('orders').select('client_id');
    const countMap = {};
    (ordersData || []).forEach(o => {
      if (o.client_id) countMap[o.client_id] = (countMap[o.client_id] || 0) + 1;
    });
    setClients((clientsData || []).map(c => ({
      ...c,
      orderCount: countMap[c.id] || 0
    })));
    setLoading(false);
  };
  const filtered = clients.filter(c => (c.name || '').includes(search) || (c.id || '').includes(search) || (c.email || '').toLowerCase().includes(search.toLowerCase()));
  const toggleStatus = async id => {
    const c = clients.find(x => x.id === id);
    const next = c.status === 'active' ? 'inactive' : 'active';
    setClients(prev => prev.map(x => x.id === id ? {
      ...x,
      status: next
    } : x));
    await sb.from('clients').update({
      status: next
    }).eq('id', id);
  };
  const confirmDelete = async () => {
    await sb.from('clients').delete().eq('id', deleteTarget.id);
    if (deleteTarget.profile_id) await sb.from('profiles').update({
      status: 'inactive'
    }).eq('id', deleteTarget.profile_id);
    setClients(prev => prev.filter(c => c.id !== deleteTarget.id));
    setDeleteTarget(null);
  };
  if (loading) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      color: 'var(--tw-fg-4)',
      font: '400 13px/1 var(--tw-font-sans)'
    }
  }, "\u8F09\u5165\u4E2D\u2026");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 22px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)'
    }
  }, "\u5BA2\u6236\u5E33\u865F\u7BA1\u7406"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--tw-text-small)',
      color: 'var(--tw-fg-4)',
      marginTop: 4
    }
  }, "\u5171 ", clients.length, " \u4F4D\u5BA2\u6236 \xB7 \u555F\u7528\u4E2D ", clients.filter(c => c.status === 'active').length, " \u4F4D")), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--primary bo-btn--lg",
    onClick: () => setShowCreate(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-plus",
    size: 14
  }), " \u5EFA\u7ACB\u65B0\u5E33\u865F")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: 12,
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14,
    style: {
      position: 'absolute',
      left: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--tw-fg-4)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "\u641C\u5C0B\u59D3\u540D\u3001\u5BA2\u6236\u4EE3\u865F\u3001Email\u2026",
    style: {
      width: '100%',
      padding: '8px 10px 8px 32px',
      borderRadius: 4,
      border: '1px solid var(--tw-border)',
      background: 'white',
      font: '400 13px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)',
      outline: 'none',
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "bo-table-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "bo-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u5BA2\u6236\u4EE3\u865F"), /*#__PURE__*/React.createElement("th", null, "\u59D3\u540D"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "\u72C0\u614B"), /*#__PURE__*/React.createElement("th", null, "\u5EFA\u7ACB\u65E5\u671F"), /*#__PURE__*/React.createElement("th", null, "\u6700\u5F8C\u767B\u5165"), /*#__PURE__*/React.createElement("th", {
    className: "r"
  }, "\u59D4\u8A17"), /*#__PURE__*/React.createElement("th", {
    className: "r",
    style: {
      width: 200
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.id,
    className: openClient?.id === c.id ? 'is-open' : '',
    onClick: () => setOpenClient(c),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("td", null, c.id), /*#__PURE__*/React.createElement("td", {
    className: "l",
    style: {
      fontWeight: 600,
      color: 'var(--tw-fg-1)'
    }
  }, c.name), /*#__PURE__*/React.createElement("td", {
    className: "l",
    style: {
      color: 'var(--tw-fg-4)',
      fontSize: 12
    }
  }, c.email || '—'), /*#__PURE__*/React.createElement("td", {
    className: "l"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: '600 11px/1 var(--tw-font-sans)',
      padding: '4px 8px',
      borderRadius: 999,
      background: c.status === 'active' ? 'var(--tw-status-filled-bg)' : 'var(--tw-status-cancelled-bg)',
      color: c.status === 'active' ? 'var(--tw-status-filled-fg)' : 'var(--tw-status-cancelled-fg)',
      border: '1px solid',
      borderColor: c.status === 'active' ? 'var(--tw-status-filled-bd)' : 'var(--tw-status-cancelled-bd)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), c.status === 'active' ? '啟用中' : '已停用')), /*#__PURE__*/React.createElement("td", null, (c.created_at || '').slice(0, 10)), /*#__PURE__*/React.createElement("td", null, c.last_login ? c.last_login.slice(0, 16).replace('T', ' ') : '—'), /*#__PURE__*/React.createElement("td", {
    className: "r"
  }, c.orderCount), /*#__PURE__*/React.createElement("td", {
    className: "r"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-actions",
    style: {
      opacity: 1
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary",
    onClick: () => setResetTarget(c)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "key",
    size: 12
  }), " \u91CD\u8A2D\u5BC6\u78BC"), /*#__PURE__*/React.createElement("button", {
    className: `bo-btn ${c.status === 'active' ? 'bo-btn--reject' : 'bo-btn--accept'}`,
    onClick: () => toggleStatus(c.id)
  }, c.status === 'active' ? '停用' : '啟用'), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--ghost",
    style: {
      color: 'var(--tw-sell-600)'
    },
    onClick: () => setDeleteTarget(c)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 12
  })))))), filtered.length === 0 && !loading && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "8",
    style: {
      textAlign: 'center',
      padding: '36px 20px',
      color: 'var(--tw-fg-4)'
    }
  }, "\u5C1A\u7121\u5BA2\u6236\u8CC7\u6599\u3002"))))), showCreate && /*#__PURE__*/React.createElement(CreateClientModal, {
    onClose: () => setShowCreate(false),
    onCreate: c => {
      setClients(prev => [{
        ...c,
        orderCount: 0
      }, ...prev]);
      setShowCreate(false);
    }
  }), resetTarget && /*#__PURE__*/React.createElement(ResetPasswordModal, {
    client: resetTarget,
    onClose: () => setResetTarget(null)
  }), deleteTarget && /*#__PURE__*/React.createElement(DeleteConfirmModal, {
    name: deleteTarget.name,
    onCancel: () => setDeleteTarget(null),
    onConfirm: confirmDelete
  }), /*#__PURE__*/React.createElement(ClientDetailDrawer, {
    client: openClient,
    onClose: () => setOpenClient(null),
    onUpdateClient: (id, patch) => {
      setClients(prev => prev.map(c => c.id === id ? {
        ...c,
        ...patch
      } : c));
      setOpenClient(prev => prev && prev.id === id ? {
        ...prev,
        ...patch
      } : prev);
    }
  }));
}

// ── Client Detail Drawer ───────────────────────────────────
function ClientDetailDrawer({
  client,
  onClose,
  onUpdateClient
}) {
  const isOpen = !!client;
  const c = client ?? {};
  const [clientOrders, setClientOrders] = useState([]);
  const [accts, setAccts] = useState([]);
  const [newAcct, setNewAcct] = useState('');
  const [banks, setBanks] = useState([]);
  const [newBank, setNewBank] = useState('');
  const [holder, setHolder] = useState('');
  const [holderEditing, setHolderEditing] = useState(false);
  useEffect(() => {
    setAccts(client?.accounts || []);
    setBanks(client?.order_banks || []);
    setHolder(client?.account_holder || '');
    setHolderEditing(false);
    setNewAcct('');
    setNewBank('');
    if (!client?.id) {
      setClientOrders([]);
      return;
    }
    sb.from('orders').select('*').eq('client_id', client.id).order('created_at', {
      ascending: false
    }).then(({
      data
    }) => setClientOrders((data || []).map(o => ({
      ...o,
      t: (o.created_at || '').slice(0, 16).replace('T', ' ')
    }))));
  }, [client?.id]);
  const saveHolder = async () => {
    if (onUpdateClient) onUpdateClient(client.id, {
      account_holder: holder
    });
    await sb.from('clients').update({
      account_holder: holder
    }).eq('id', client.id);
    setHolderEditing(false);
  };
  const saveAccts = async list => {
    setAccts(list);
    if (onUpdateClient) onUpdateClient(client.id, {
      accounts: list
    });
    await sb.from('clients').update({
      accounts: list
    }).eq('id', client.id);
  };
  const addAcct = () => {
    const v = newAcct.trim();
    if (v && !accts.includes(v)) {
      saveAccts([...accts, v]);
      setNewAcct('');
    }
  };
  const removeAcct = a => saveAccts(accts.filter(x => x !== a));
  const saveBanks = async list => {
    setBanks(list);
    if (onUpdateClient) onUpdateClient(client.id, {
      order_banks: list
    });
    await sb.from('clients').update({
      order_banks: list
    }).eq('id', client.id);
  };
  const addBank = () => {
    const v = newBank.trim();
    if (v && !banks.includes(v)) {
      saveBanks([...banks, v]);
      setNewBank('');
    }
  };
  const removeBank = b => saveBanks(banks.filter(x => x !== b));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `bo-scrim ${isOpen ? 'is-open' : ''}`,
    onClick: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: `bo-drawer ${isOpen ? 'is-open' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "bo-drawer__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bo-drawer__title"
  }, "\u5BA2\u6236\u8A73\u60C5"), /*#__PURE__*/React.createElement("div", {
    className: "bo-drawer__sub"
  }, c.id)), /*#__PURE__*/React.createElement("button", {
    className: "bo-top__icon",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bo-drawer__body"
  }, client && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 14px',
      background: 'var(--tw-navy-050)',
      border: '1px solid var(--tw-navy-100)',
      borderRadius: 4,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      flexShrink: 0,
      background: 'var(--tw-navy-200)',
      color: 'var(--tw-navy-800)',
      display: 'grid',
      placeItems: 'center',
      font: '600 16px/1 var(--tw-font-sans)'
    }
  }, (c.name || '?').slice(0, 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)'
    }
  }, c.name), c.account_holder && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-fg-3)',
      marginTop: 4
    }
  }, "\u6236\u540D\uFF1A", c.account_holder), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1.4 var(--tw-font-mono)',
      color: 'var(--tw-fg-4)',
      marginTop: 5
    }
  }, c.email || '無 Email')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: '600 11px/1 var(--tw-font-sans)',
      padding: '4px 8px',
      borderRadius: 999,
      background: c.status === 'active' ? 'var(--tw-status-filled-bg)' : 'var(--tw-status-cancelled-bg)',
      color: c.status === 'active' ? 'var(--tw-status-filled-fg)' : 'var(--tw-status-cancelled-fg)',
      border: '1px solid',
      borderColor: c.status === 'active' ? 'var(--tw-status-filled-bd)' : 'var(--tw-status-cancelled-bd)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), c.status === 'active' ? '啟用中' : '已停用')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 10,
      marginBottom: 20
    }
  }, [{
    label: '委託總數',
    value: clientOrders.length
  }, {
    label: '建立日期',
    value: (c.created_at || '').slice(0, 10)
  }, {
    label: '最後登入',
    value: c.last_login ? c.last_login.slice(5, 16).replace('T', ' ') : '未曾登入'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      padding: '10px 12px',
      background: 'var(--tw-ink-050)',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10px/1 var(--tw-font-sans)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--tw-fg-4)',
      marginBottom: 6
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px/1 var(--tw-font-mono)',
      color: 'var(--tw-fg-1)'
    }
  }, s.value)))), /*#__PURE__*/React.createElement("div", {
    className: "bo-section-h"
  }, "\u57FA\u672C\u8CC7\u6599"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 20,
      padding: '10px 12px',
      background: 'var(--tw-ink-050)',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-3)',
      width: 40,
      flexShrink: 0
    }
  }, "\u6236\u540D"), holderEditing ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: holder,
    onChange: e => setHolder(e.target.value),
    onKeyDown: e => e.key === 'Enter' && saveHolder(),
    autoFocus: true,
    style: {
      flex: 1,
      padding: '6px 10px',
      borderRadius: 4,
      border: '1px solid var(--tw-border)',
      font: '400 13px/1 var(--tw-font-sans)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--primary",
    onClick: saveHolder
  }, "\u5132\u5B58"), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary",
    onClick: () => {
      setHolderEditing(false);
      setHolder(client?.account_holder || '');
    }
  }, "\u53D6\u6D88")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1 var(--tw-font-sans)',
      color: holder ? 'var(--tw-fg-1)' : 'var(--tw-fg-4)'
    }
  }, holder || '尚未設定'), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary",
    style: {
      marginLeft: 'auto'
    },
    onClick: () => setHolderEditing(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: 12
  }), " \u7DE8\u8F2F"))), /*#__PURE__*/React.createElement("div", {
    className: "bo-section-h"
  }, "\u4E0B\u55AE\u5E33\u865F Trading Accounts"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, accts.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.5 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      marginBottom: 8
    }
  }, "\u5C1A\u672A\u8A2D\u5B9A\u4EFB\u4F55\u4E0B\u55AE\u5E33\u865F\u3002\u5BA2\u6236\u9808\u6709\u81F3\u5C11\u4E00\u500B\u5E33\u865F\u624D\u80FD\u59D4\u8A17\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 10
    }
  }, accts.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 8px 6px 12px',
      background: 'var(--tw-ink-050)',
      border: '1px solid var(--tw-border)',
      borderRadius: 4,
      font: '600 12px/1 var(--tw-font-mono)',
      color: 'var(--tw-fg-1)'
    }
  }, a, /*#__PURE__*/React.createElement("button", {
    onClick: () => removeAcct(a),
    title: "\u79FB\u9664\u5E33\u865F",
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 18,
      height: 18,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--tw-fg-4)',
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: newAcct,
    onChange: e => setNewAcct(e.target.value),
    placeholder: "\u65B0\u589E\u5E33\u865F\uFF0C\u4F8B\u5982 U1234567",
    onKeyDown: e => e.key === 'Enter' && addAcct(),
    style: {
      flex: 1,
      padding: '8px 10px',
      borderRadius: 4,
      border: '1px solid var(--tw-border)',
      background: 'white',
      font: '400 13px/1 var(--tw-font-mono)',
      color: 'var(--tw-fg-1)',
      outline: 'none',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary",
    onClick: addAcct,
    disabled: !newAcct.trim()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 13
  }), " \u65B0\u589E"))), /*#__PURE__*/React.createElement("div", {
    className: "bo-section-h"
  }, "\u4E0B\u55AE\u9280\u884C Order Banks"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, banks.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.5 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      marginBottom: 8
    }
  }, "\u5C1A\u672A\u8A2D\u5B9A\u4E0B\u55AE\u9280\u884C\u3002\u5BA2\u6236\u4E0B\u55AE\u6642\u5C07\u5F9E\u9019\u4E9B\u9280\u884C\u4E2D\u9078\u64C7\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 10
    }
  }, banks.map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 8px 6px 12px',
      background: 'var(--tw-ink-050)',
      border: '1px solid var(--tw-border)',
      borderRadius: 4,
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)'
    }
  }, b, /*#__PURE__*/React.createElement("button", {
    onClick: () => removeBank(b),
    title: "\u79FB\u9664\u9280\u884C",
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 18,
      height: 18,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--tw-fg-4)',
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: newBank,
    onChange: e => setNewBank(e.target.value),
    placeholder: "\u65B0\u589E\u4E0B\u55AE\u9280\u884C\uFF0C\u4F8B\u5982 \u4E2D\u570B\u4FE1\u8A17",
    onKeyDown: e => e.key === 'Enter' && addBank(),
    style: {
      flex: 1,
      padding: '8px 10px',
      borderRadius: 4,
      border: '1px solid var(--tw-border)',
      background: 'white',
      font: '400 13px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)',
      outline: 'none',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary",
    onClick: addBank,
    disabled: !newBank.trim()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 13
  }), " \u65B0\u589E"))), /*#__PURE__*/React.createElement("div", {
    className: "bo-section-h"
  }, "\u4E0B\u55AE\u7D00\u9304 Order History"), clientOrders.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px',
      textAlign: 'center',
      color: 'var(--tw-fg-4)',
      font: '400 13px/1 var(--tw-font-sans)'
    }
  }, "\u5C1A\u7121\u59D4\u8A17\u7D00\u9304\u3002") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid var(--tw-border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, clientOrders.map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: o.id,
    style: {
      padding: '11px 14px',
      borderBottom: i < clientOrders.length - 1 ? '1px solid var(--tw-border-subtle)' : 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px/1 var(--tw-font-mono)',
      color: 'var(--tw-fg-1)'
    }
  }, o.sym), /*#__PURE__*/React.createElement("span", {
    className: `bo-badge bo-badge--${o.side}`
  }, o.side === 'buy' ? 'BUY' : 'SELL'), /*#__PURE__*/React.createElement("span", {
    className: `bo-badge bo-badge--${(o.market || '').toLowerCase()}`
  }, o.market)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 var(--tw-font-mono)',
      color: 'var(--tw-fg-4)'
    }
  }, o.t, " \xB7 ", (o.qty || 0).toLocaleString(), " \u80A1", o.type === 'limit' && o.price ? ` · @${Number(o.price).toFixed(2)}` : ' · MKT')), /*#__PURE__*/React.createElement("span", {
    className: `bo-chip bo-chip--${o.status}`
  }, STATUS_LABEL[o.status] || o.status)))))), /*#__PURE__*/React.createElement("div", {
    className: "bo-drawer__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary bo-btn--lg",
    onClick: onClose
  }, "\u95DC\u9589"))));
}

// ── Create Client Modal ────────────────────────────────────
function CreateClientModal({
  onClose,
  onCreate
}) {
  const [name, setName] = useState('');
  const [holder, setHolder] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [accountsStr, setAccountsStr] = useState('');
  const [orderBanksStr, setOrderBanksStr] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const parseAccounts = s => s.split(/[,，\n]/).map(x => x.trim()).filter(Boolean);
  const handleCreate = async () => {
    if (!name.trim()) {
      setErr('請輸入客戶姓名。');
      return;
    }
    if (!holder.trim()) {
      setErr('請輸入戶名。');
      return;
    }
    if (!email.includes('@')) {
      setErr('請輸入有效的 Email。');
      return;
    }
    if (pass.length < 6) {
      setErr('密碼至少需 6 位。');
      return;
    }
    setErr('');
    setLoading(true);
    const {
      data: authData,
      error: authErr
    } = await createUserAccount(email.trim(), pass, {
      display_name: name.trim(),
      role: 'client'
    });
    if (authErr) {
      setErr('建立失敗：' + authErr.message);
      setLoading(false);
      return;
    }
    const uid = authData?.user?.id;
    if (!uid) {
      setErr('帳號建立失敗，請再試一次。');
      setLoading(false);
      return;
    }
    const {
      count
    } = await sb.from('clients').select('*', {
      count: 'exact',
      head: true
    });
    const clientId = 'C-' + String((count || 0) + 1).padStart(5, '0');
    await new Promise(r => setTimeout(r, 600));
    const {
      data: clientData,
      error: cErr
    } = await sb.from('clients').insert({
      id: clientId,
      profile_id: uid,
      name: name.trim(),
      account_holder: holder.trim(),
      email: email.trim(),
      phone: phone.trim() || null,
      accounts: parseAccounts(accountsStr),
      order_banks: parseAccounts(orderBanksStr),
      status: 'active'
    }).select().single();
    if (cErr) {
      setErr('客戶資料建立失敗：' + cErr.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    onCreate(clientData);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bo-scrim is-open",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      background: 'white',
      borderRadius: 8,
      width: 420,
      padding: 28,
      boxShadow: 'var(--tw-shadow-3)',
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)',
      marginBottom: 20
    }
  }, "\u5EFA\u7ACB\u65B0\u5BA2\u6236\u5E33\u865F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [{
    label: '姓名 *',
    val: name,
    set: setName,
    type: 'text',
    ph: '例如：林啟瑞（聯絡人）'
  }, {
    label: '戶名 *（券商帳戶登記名稱）',
    val: holder,
    set: setHolder,
    type: 'text',
    ph: '例如：LIN CHI JUI 或 公司名稱'
  }, {
    label: 'Email *',
    val: email,
    set: setEmail,
    type: 'email',
    ph: 'client@example.com'
  }, {
    label: '電話',
    val: phone,
    set: setPhone,
    type: 'tel',
    ph: '+852 9123 4567'
  }, {
    label: '初始密碼 *（至少 6 位）',
    val: pass,
    set: setPass,
    type: 'password',
    ph: '••••••'
  }].map(f => /*#__PURE__*/React.createElement("label", {
    key: f.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, f.label), /*#__PURE__*/React.createElement("input", {
    type: f.type,
    value: f.val,
    onChange: e => f.set(e.target.value),
    placeholder: f.ph,
    style: {
      padding: '9px 12px',
      borderRadius: 4,
      border: '1px solid var(--tw-border)',
      font: '400 14px/1.4 var(--tw-font-sans)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box'
    }
  }))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "\u4E0B\u55AE\u5E33\u865F\uFF08\u53EF\u591A\u500B\uFF0C\u4EE5\u9017\u865F\u5206\u9694\uFF09"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: accountsStr,
    onChange: e => setAccountsStr(e.target.value),
    placeholder: "\u4F8B\u5982\uFF1AU1234567, 9876543-01",
    style: {
      padding: '9px 12px',
      borderRadius: 4,
      border: '1px solid var(--tw-border)',
      font: '400 14px/1.4 var(--tw-font-mono)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 11px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)'
    }
  }, "\u5BA2\u6236\u4E0B\u55AE\u6642\u5C07\u5F9E\u9019\u4E9B\u5E33\u865F\u4E2D\u9078\u64C7\uFF1B\u4E4B\u5F8C\u4E5F\u53EF\u5728\u5BA2\u6236\u8A73\u60C5\u4E2D\u8ABF\u6574\u3002")), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "\u4E0B\u55AE\u9280\u884C\uFF08\u53EF\u591A\u500B\uFF0C\u4EE5\u9017\u865F\u5206\u9694\uFF09"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: orderBanksStr,
    onChange: e => setOrderBanksStr(e.target.value),
    placeholder: "\u4F8B\u5982\uFF1A\u4E2D\u570B\u4FE1\u8A17, \u53F0\u65B0\u9280\u884C",
    style: {
      padding: '9px 12px',
      borderRadius: 4,
      border: '1px solid var(--tw-border)',
      font: '400 14px/1.4 var(--tw-font-sans)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 11px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)'
    }
  }, "\u5BA2\u6236\u4E0B\u55AE\u6642\u5C07\u5F9E\u9019\u4E9B\u9280\u884C\u4E2D\u9078\u64C7\uFF1B\u4E4B\u5F8C\u4E5F\u53EF\u5728\u5BA2\u6236\u8A73\u60C5\u4E2D\u8ABF\u6574\u3002")), err && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-sell-700)',
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 13
  }), " ", err)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary bo-btn--lg",
    onClick: onClose,
    disabled: loading
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--primary bo-btn--lg",
    onClick: handleCreate,
    disabled: loading
  }, /*#__PURE__*/React.createElement(Icon, {
    name: loading ? 'loader-2' : 'user-plus',
    size: 13
  }), " ", loading ? '建立中…' : '建立帳號'))));
}

// ── Reset Password Modal ───────────────────────────────────
function ResetPasswordModal({
  client,
  onClose
}) {
  const [status, setStatus] = useState('sending');
  const [errMsg, setErrMsg] = useState('');
  useEffect(() => {
    if (!client?.email) {
      setStatus('error');
      setErrMsg('此客戶無 Email 資訊，無法發送重設信件。');
      return;
    }
    sb.auth.resetPasswordForEmail(client.email).then(({
      error
    }) => {
      if (error) {
        setStatus('error');
        setErrMsg(error.message);
      } else setStatus('sent');
    });
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bo-scrim is-open",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      background: 'white',
      borderRadius: 8,
      width: 380,
      padding: 28,
      boxShadow: 'var(--tw-shadow-3)',
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: status === 'error' ? 'var(--tw-sell-050)' : 'var(--tw-status-pending-bg)',
      color: status === 'error' ? 'var(--tw-sell-700)' : 'var(--tw-status-pending-fg)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: status === 'sending' ? 'loader-2' : status === 'sent' ? 'mail-check' : 'alert-triangle',
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)'
    }
  }, status === 'sending' ? '發送中…' : status === 'sent' ? '密碼重設信已發送' : '發送失敗'), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-fg-3)',
      marginTop: 4
    }
  }, "\u5BA2\u6236\uFF1A", client.name))), status === 'sent' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tw-navy-050)',
      border: '1px solid var(--tw-navy-100)',
      borderRadius: 4,
      padding: '12px 14px',
      marginBottom: 14,
      font: '400 13px/1.5 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "\u5DF2\u767C\u9001\u5BC6\u78BC\u91CD\u8A2D\u9023\u7D50\u81F3 ", /*#__PURE__*/React.createElement("strong", null, client.email), "\uFF0C\u8ACB\u901A\u77E5\u5BA2\u6236\u67E5\u6536\u4E26\u9EDE\u64CA\u9023\u7D50\u8A2D\u5B9A\u65B0\u5BC6\u78BC\u3002"), status === 'error' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tw-sell-050)',
      border: '1px solid var(--tw-sell-100)',
      borderRadius: 4,
      padding: '12px 14px',
      marginBottom: 14,
      font: '400 13px/1.5 var(--tw-font-sans)',
      color: 'var(--tw-sell-700)'
    }
  }, errMsg), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--primary bo-btn--lg",
    onClick: onClose,
    disabled: status === 'sending'
  }, "\u5B8C\u6210"))));
}

// ── Delete Confirm Modal (shared) ─────────────────────────
function DeleteConfirmModal({
  name,
  onCancel,
  onConfirm
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bo-scrim is-open",
    onClick: onCancel
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      background: 'white',
      borderRadius: 8,
      width: 360,
      padding: 28,
      boxShadow: 'var(--tw-shadow-3)',
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--tw-sell-050)',
      color: 'var(--tw-sell-700)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)'
    }
  }, "\u78BA\u8A8D\u522A\u9664"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--tw-font-sans)',
      color: 'var(--tw-fg-3)',
      marginTop: 6
    }
  }, "\u5373\u5C07\u522A\u9664\u5E33\u865F ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--tw-fg-1)'
    }
  }, name), "\uFF0C\u6B64\u64CD\u4F5C\u7121\u6CD5\u5FA9\u539F\u3002"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary bo-btn--lg",
    onClick: onCancel
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--lg",
    onClick: onConfirm,
    style: {
      background: 'var(--tw-sell-600)',
      color: 'white',
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 13
  }), " \u78BA\u8A8D\u522A\u9664"))));
}
window.DeleteConfirmModal = DeleteConfirmModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back_office/ClientAdmin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back_office/DeskApp.jsx
try { (() => {
// ============================================================
// TeraWise Desk — Back-Office App (Supabase Auth)
// ============================================================

function LoadingScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--tw-navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.4)',
      font: '500 14px/1 var(--tw-font-sans)'
    }
  }, "\u8F09\u5165\u4E2D\u2026"));
}
function AccessDenied() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--tw-navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-off",
    size: 32,
    color: "rgba(255,255,255,0.3)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'white',
      font: '600 18px/1 var(--tw-font-sans)'
    }
  }, "\u5B58\u53D6\u88AB\u62D2"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.4)',
      font: '400 13px/1 var(--tw-font-sans)'
    }
  }, "\u6B64\u5E33\u865F\u7121\u5F8C\u53F0\u5B58\u53D6\u6B0A\u9650\u3002"), /*#__PURE__*/React.createElement("button", {
    onClick: () => sb.auth.signOut(),
    style: {
      marginTop: 8,
      padding: '8px 20px',
      background: 'var(--tw-navy-700)',
      color: 'white',
      border: 'none',
      borderRadius: 4,
      cursor: 'pointer',
      font: '500 13px/1 var(--tw-font-sans)'
    }
  }, "\u767B\u51FA"));
}

// ── Login Screen ──────────────────────────────────────────────
function BOLoginScreen() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    if (!email.trim() || !pass.trim()) {
      setErr('請填寫 Email 與密碼。');
      return;
    }
    setErr('');
    setLoading(true);
    // Direct fetch — bypasses SDK's Authorization: Bearer header
    // (sb_publishable_ key is not a JWT so the SDK's Bearer header causes 422)
    try {
      const res = await fetch('https://yecijqecmabjtgpwfroy.supabase.co/auth/v1/token?grant_type=password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'sb_publishable_WpuOkrhxrKQWCbgOosVcWQ_VJyJWCVi'
        },
        body: JSON.stringify({
          email: email.trim(),
          password: pass
        })
      });
      const data = await res.json();
      if (!res.ok) {
        setErr(data.error_description || data.msg || data.error || `Error ${res.status}`);
        setLoading(false);
        return;
      }
      await sb.auth.setSession({
        access_token: data.access_token,
        refresh_token: data.refresh_token
      });
    } catch (err) {
      setErr(err.message);
      setLoading(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--tw-navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--tw-font-sans)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 22px/1.1 var(--tw-font-serif)',
      color: 'white',
      marginTop: 10
    }
  }, "TeraWise Capital"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 9px/1 var(--tw-font-sans)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--tw-gold-400)',
      marginTop: 6
    }
  }, "DESK \xB7 \u5F8C\u53F0\u7BA1\u7406\u7CFB\u7D71")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: 6,
      padding: '24px 24px 20px',
      boxShadow: 'var(--tw-shadow-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)',
      marginBottom: 4
    }
  }, "\u5F8C\u53F0\u767B\u5165"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      marginBottom: 20
    }
  }, "\u50C5\u9650\u6388\u6B0A\u5167\u90E8\u4EBA\u54E1\u4F7F\u7528"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 11px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "staff@terawisehk.com",
    autoComplete: "email",
    style: {
      padding: '9px 12px',
      borderRadius: 4,
      border: '1px solid var(--tw-border)',
      font: '400 14px/1 var(--tw-font-sans)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 11px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "\u5BC6\u78BC"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pass,
    onChange: e => setPass(e.target.value),
    placeholder: "\u8ACB\u8F38\u5165\u5BC6\u78BC",
    autoComplete: "current-password",
    style: {
      padding: '9px 12px',
      borderRadius: 4,
      border: '1px solid var(--tw-border)',
      font: '400 14px/1 var(--tw-font-sans)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box'
    }
  })), err && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-sell-700)',
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 13,
    color: "var(--tw-sell-700)"
  }), " ", err), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: loading,
    style: {
      padding: '10px',
      borderRadius: 4,
      border: 'none',
      marginTop: 4,
      cursor: loading ? 'not-allowed' : 'pointer',
      background: loading ? 'var(--tw-ink-200)' : 'var(--tw-navy-800)',
      color: loading ? 'var(--tw-ink-400)' : 'white',
      font: '600 13px/1 var(--tw-font-sans)'
    }
  }, loading ? '登入中…' : '登入後台'))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      textAlign: 'center',
      font: '500 10px/1.4 var(--tw-font-sans)',
      color: 'rgba(255,255,255,0.25)'
    }
  }, "\xA9 2025 TeraWise Capital \xB7 Internal Use Only")));
}

// ── Main App ──────────────────────────────────────────────────
function DeskApp() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [active, setActive] = useState('queue');
  const [orders, setOrders] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [fillTarget, setFillTarget] = useState(null);

  // ── Auth ──
  useEffect(() => {
    // 單一來源：INITIAL_SESSION 自動帶入已儲存登入（自動登入）；
    // TOKEN_REFRESHED 不重新載入，避免閃爍或誤判登出。
    const {
      data: {
        subscription
      }
    } = sb.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (!session || event === 'SIGNED_OUT') {
        setProfile(null);
        setOrders([]);
        setAuthLoading(false);
        return;
      }
      if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        loadProfile(session.user.id);
      }
    });
    return () => subscription.unsubscribe();
  }, []);
  const loadProfile = async uid => {
    const {
      data
    } = await sb.from('profiles').select('*').eq('id', uid).single();
    setProfile(data);
    setAuthLoading(false);
    sb.from('profiles').update({
      last_login: new Date().toISOString()
    }).eq('id', uid);
  };

  // ── Orders (real-time) ──
  useEffect(() => {
    if (!session) return;
    fetchOrders();
    const channel = sb.channel('bo-orders-rt').on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'orders'
    }, fetchOrders).subscribe();
    return () => sb.removeChannel(channel);
  }, [session]);
  const fetchOrders = async () => {
    const {
      data
    } = await sb.from('orders').select('*').order('created_at', {
      ascending: false
    });
    if (data) setOrders(data.map(normalizeOrder));
  };
  const normalizeOrder = o => ({
    ...o,
    t: (o.created_at || '').slice(0, 19).replace('T', ' '),
    client: o.client_name,
    cid: o.client_id,
    name: o.sym
  });

  // ── Order mutations ──
  const updateOrder = async (id, patch) => {
    setOrders(prev => prev.map(o => o.id === id ? {
      ...o,
      ...patch
    } : o));
    await sb.from('orders').update(patch).eq('id', id);
  };
  const onAccept = id => updateOrder(id, {
    status: 'accepted',
    owner: profile?.display_name || 'Staff'
  });
  const onReject = id => updateOrder(id, {
    status: 'rejected'
  });
  const onChangeStatus = (id, status) => updateOrder(id, {
    status
  });
  const onAssign = (id, owner) => updateOrder(id, {
    owner
  });
  const onAddNote = (id, note) => updateOrder(id, {
    note
  });
  const onRequestFill = order => setFillTarget(order);
  const confirmFill = async (id, patch) => {
    await updateOrder(id, patch);
    setFillTarget(null);
  };
  const counts = {
    pending: orders.filter(o => o.status === 'pending').length,
    active: orders.filter(o => o.status === 'accepted').length
  };
  const openOrder = openId ? orders.find(o => o.id === openId) : null;
  const titles = {
    queue: '委託佇列 Order Queue',
    active: '處理中 Active',
    history: '歷史紀錄 History',
    clients: '客戶 Clients',
    kyc: 'KYC 審核',
    staff: '員工帳號 Staff',
    reports: '報表 Reports',
    settings: '設定 Settings'
  };

  // ── Render guards ──
  if (authLoading) return /*#__PURE__*/React.createElement(LoadingScreen, null);
  if (!session || !profile) return /*#__PURE__*/React.createElement(BOLoginScreen, null);
  if (!['admin', 'staff'].includes(profile.role)) return /*#__PURE__*/React.createElement(AccessDenied, null);
  const sidebarStaff = {
    name: profile.display_name || 'Staff',
    role: profile.role === 'admin' ? '管理員' : '一般',
    initials: profile.initials || (profile.display_name || 'ST').slice(0, 2).toUpperCase()
  };
  let view;
  if (['queue', 'active', 'history'].includes(active)) {
    const filtered = active === 'queue' ? orders : active === 'active' ? orders.filter(o => ['pending', 'accepted'].includes(o.status)) : orders.filter(o => ['filled', 'rejected'].includes(o.status));
    view = /*#__PURE__*/React.createElement(OrderQueue, {
      orders: filtered,
      onOpenOrder: setOpenId,
      openId: openId,
      onAccept: onAccept,
      onReject: onReject,
      onChangeStatus: onChangeStatus,
      onAssign: onAssign,
      onRequestFill: onRequestFill
    });
  } else if (active === 'clients') {
    view = /*#__PURE__*/React.createElement(ClientAdmin, null);
  } else if (active === 'staff') {
    view = /*#__PURE__*/React.createElement(StaffAdmin, {
      currentProfile: profile
    });
  } else {
    view = /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'white',
        border: '1px solid var(--tw-border)',
        borderRadius: 6,
        padding: 60,
        textAlign: 'center',
        color: 'var(--tw-fg-4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 16px/1 var(--tw-font-sans)',
        color: 'var(--tw-fg-2)'
      }
    }, titles[active]), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        font: '400 13px/1.5 var(--tw-font-sans)'
      }
    }, "\u672C\u6A21\u7D44\u5C1A\u672A\u5BE6\u4F5C\u65BC\u6B64 UI Kit\u3002"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "bo-app"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onChange: setActive,
    counts: counts,
    staff: sidebarStaff,
    onLogout: () => sb.auth.signOut()
  }), /*#__PURE__*/React.createElement("main", {
    className: "bo-main"
  }, /*#__PURE__*/React.createElement(TopBar, {
    crumb: titles[active],
    profile: profile,
    email: session?.user?.email
  }), /*#__PURE__*/React.createElement("div", {
    className: "bo-content"
  }, view)), /*#__PURE__*/React.createElement(OrderDrawer, {
    order: openOrder,
    onClose: () => setOpenId(null),
    onAccept: onAccept,
    onReject: onReject,
    onChangeStatus: onChangeStatus,
    onAssign: onAssign,
    onAddNote: onAddNote,
    onRequestFill: onRequestFill
  }), fillTarget && /*#__PURE__*/React.createElement(FillModal, {
    order: fillTarget,
    onClose: () => setFillTarget(null),
    onConfirm: confirmFill
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(DeskApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back_office/DeskApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back_office/OrderDrawer.jsx
try { (() => {
// ============================================================
// TeraWise Desk — Order detail drawer
// ============================================================
function OrderDrawer({
  order,
  onClose,
  onAccept,
  onReject,
  onChangeStatus,
  onAssign,
  onAddNote,
  onRequestFill
}) {
  const isOpen = !!order;
  const [note, setNote] = useState('');
  useEffect(() => {
    setNote('');
  }, [order?.id]);
  if (!order) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "bo-scrim",
      onClick: onClose
    }), /*#__PURE__*/React.createElement("aside", {
      className: "bo-drawer"
    }));
  }
  const o = order;
  const statusOrder = ['pending', 'accepted', 'filled'];
  const isTerminal = o.status === 'rejected';
  const sIdx = isTerminal ? 2 : statusOrder.indexOf(o.status);
  const timeline = [{
    label: '客戶送出委託',
    t: o.t
  }, {
    label: '後台已接單',
    t: sIdx >= 1 ? incrTime(o.t, 1) : ''
  }, {
    label: isTerminal ? '失敗' : '完成',
    t: sIdx >= 2 ? incrTime(o.t, 8) : ''
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `bo-scrim ${isOpen ? 'is-open' : ''}`,
    onClick: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: `bo-drawer ${isOpen ? 'is-open' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "bo-drawer__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bo-drawer__title"
  }, "\u59D4\u8A17\u8A73\u60C5"), /*#__PURE__*/React.createElement("div", {
    className: "bo-drawer__sub"
  }, o.id)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(StatusChip, {
    status: o.status
  }), /*#__PURE__*/React.createElement("button", {
    className: "bo-top__icon",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bo-drawer__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bo-section-h"
  }, "\u5BA2\u6236 Client"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: '10px 12px',
      background: 'var(--tw-navy-050)',
      border: '1px solid var(--tw-navy-100)',
      borderRadius: 4,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--tw-navy-200)',
      color: 'var(--tw-navy-800)',
      display: 'grid',
      placeItems: 'center',
      font: '600 13px/1 var(--tw-font-sans)'
    }
  }, o.client.slice(0, 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)'
    }
  }, o.client), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 var(--tw-font-mono)',
      color: 'var(--tw-fg-4)',
      marginTop: 4
    }
  }, o.cid, " \xB7 ", o.account || '未指定帳號')), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 12
  }), " \u806F\u7E6B")), /*#__PURE__*/React.createElement("div", {
    className: "bo-section-h"
  }, "\u59D4\u8A17\u5167\u5BB9 Ticket"), /*#__PURE__*/React.createElement("div", {
    className: "bo-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u4E0B\u55AE\u5E33\u865F"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, o.account || '—'), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u4E0B\u55AE\u9280\u884C"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, o.order_bank || '—'), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u5E02\u5834"), /*#__PURE__*/React.createElement("div", {
    className: "v sans"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: o.market.toLowerCase()
  }, o.market), " ", o.market === 'US' ? '美股 · US Equities' : '台股 · TW Equities'), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u80A1\u7968"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, o.sym, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.6 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)'
    }
  }, "\u2014 ", o.name)), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u65B9\u5411"), /*#__PURE__*/React.createElement("div", {
    className: "v sans"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: o.side
  }, o.side === 'buy' ? 'BUY' : 'SELL'), " ", o.side === 'buy' ? '買進' : '賣出'), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u59D4\u8A17\u985E\u578B"), /*#__PURE__*/React.createElement("div", {
    className: "v sans"
  }, ORDER_TYPE_LABEL[o.type] || o.type), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u59D4\u8A17\u6548\u671F"), /*#__PURE__*/React.createElement("div", {
    className: "v sans"
  }, TIF_LABEL[o.time_in_force || 'rod']), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u6578\u91CF"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, o.qty.toLocaleString(), " \u80A1"), o.price != null ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u59D4\u8A17\u9650\u50F9"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, o.market === 'US' ? 'US$' : 'NT$', " ", o.price.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u9810\u4F30\u91D1\u984D"), /*#__PURE__*/React.createElement("div", {
    className: "v",
    style: {
      fontWeight: 600
    }
  }, o.market === 'US' ? 'US$' : 'NT$', " ", (o.price * o.qty).toLocaleString('en-US', {
    minimumFractionDigits: 2
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u59D4\u8A17\u50F9"), /*#__PURE__*/React.createElement("div", {
    className: "v sans",
    style: {
      color: 'var(--tw-fg-3)'
    }
  }, "\u5E02\u50F9 \xB7 \u4F9D\u5E02\u5834\u6210\u4EA4\u50F9")), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u4E0B\u55AE\u6642\u9593"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, o.t)), o.fill_price != null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bo-section-h"
  }, "\u6210\u4EA4\u56DE\u5831 Execution"), /*#__PURE__*/React.createElement("div", {
    className: "bo-kv",
    style: {
      background: 'var(--tw-buy-050)',
      border: '1px solid var(--tw-buy-100)',
      borderRadius: 4,
      padding: '4px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u6210\u4EA4\u50F9"), /*#__PURE__*/React.createElement("div", {
    className: "v",
    style: {
      fontWeight: 600
    }
  }, o.market === 'US' ? 'US$' : 'NT$', " ", Number(o.fill_price).toFixed(2)), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u6210\u4EA4\u6578\u91CF"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, Number(o.fill_qty ?? o.qty).toLocaleString(), " \u80A1"), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u6210\u4EA4\u91D1\u984D"), /*#__PURE__*/React.createElement("div", {
    className: "v",
    style: {
      fontWeight: 600
    }
  }, o.market === 'US' ? 'US$' : 'NT$', " ", (Number(o.fill_price) * Number(o.fill_qty ?? o.qty)).toLocaleString('en-US', {
    minimumFractionDigits: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u6210\u4EA4\u6642\u9593"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, (o.fill_time || '').slice(0, 16).replace('T', ' ') || '—')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary",
    onClick: () => onRequestFill(o)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: 12
  }), " \u4FEE\u6539\u6210\u4EA4\u56DE\u5831"))), /*#__PURE__*/React.createElement("div", {
    className: "bo-section-h"
  }, "\u8CA0\u8CAC\u4EBA Owner"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: o.owner || '',
    onChange: e => onAssign(o.id, e.target.value || null),
    style: {
      flex: 1,
      padding: '7px 10px',
      borderRadius: 4,
      border: '1px solid var(--tw-border)',
      background: 'white',
      font: '500 13px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 \u672A\u6307\u6D3E \u2014"), STAFF.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, s))), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary",
    onClick: () => onAssign(o.id, 'Sylvia Yi')
  }, "\u6307\u6D3E\u7D66\u6211")), !isTerminal && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bo-section-h"
  }, "\u66F4\u65B0\u72C0\u614B Update status"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, statusOrder.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: `bo-btn ${o.status === s ? 'bo-btn--primary' : 'bo-btn--secondary'}`,
    disabled: o.status === s,
    onClick: () => s === 'filled' ? onRequestFill(o) : onChangeStatus(o.id, s)
  }, i + 1, ". ", STATUS_LABEL[s])), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--reject",
    onClick: () => onChangeStatus(o.id, 'rejected')
  }, "\u6A19\u8A18\u5931\u6557"))), /*#__PURE__*/React.createElement("div", {
    className: "bo-section-h"
  }, "\u8655\u7406\u9032\u5EA6 Timeline"), /*#__PURE__*/React.createElement("ol", {
    className: "bo-timeline"
  }, timeline.map((t, i) => {
    const done = i < sIdx || i === sIdx && (o.status === 'filled' || o.status === 'rejected');
    const active = i === sIdx && o.status !== 'filled' && o.status !== 'rejected';
    const cls = done ? 'is-done' : active ? 'is-active' : 'is-todo';
    const isFailStep = i === 2 && isTerminal;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: cls
    }, /*#__PURE__*/React.createElement("div", {
      className: "dot",
      style: isFailStep ? {
        background: 'var(--tw-sell-600)',
        borderColor: 'var(--tw-sell-600)'
      } : {}
    }, done ? /*#__PURE__*/React.createElement(Icon, {
      name: isFailStep ? 'x' : 'check',
      size: 10
    }) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "lbl"
    }, t.label), /*#__PURE__*/React.createElement("div", {
      className: "t"
    }, t.t || (active ? '進行中…' : '尚未處理'))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "bo-section-h"
  }, "\u5167\u90E8\u5099\u8A3B Notes"), o.note && /*#__PURE__*/React.createElement("div", {
    className: "bo-note"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bo-note__head"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 12
  }), " ", o.owner || 'System', /*#__PURE__*/React.createElement("span", {
    className: "bo-note__time"
  }, incrTime(o.t, 2))), /*#__PURE__*/React.createElement("div", {
    className: "bo-note__body"
  }, o.note)), /*#__PURE__*/React.createElement("div", {
    className: "bo-note-input"
  }, /*#__PURE__*/React.createElement("textarea", {
    placeholder: "\u65B0\u589E\u5099\u8A3B\u2026 \u4F8B\u5982\uFF1A\u5BA2\u6236\u5DF2\u96FB\u8A71\u78BA\u8A8D\u3001\u7B49\u5F85\u958B\u76E4\u3001\u8207\u5238\u5546\u901A\u8DEF\u78BA\u8A8D\u56DE\u5831\u3002",
    value: note,
    onChange: e => setNote(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--primary",
    disabled: !note.trim(),
    onClick: () => {
      onAddNote(o.id, note);
      setNote('');
    }
  }, "\u65B0\u589E\u5099\u8A3B"))), /*#__PURE__*/React.createElement("div", {
    className: "bo-drawer__foot"
  }, o.status === 'pending' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--reject bo-btn--lg",
    onClick: () => onReject(o.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  }), " \u62D2\u7D55\u59D4\u8A17"), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--accept bo-btn--lg",
    onClick: () => onAccept(o.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }), " \u63A5\u55AE")) : /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--primary bo-btn--lg",
    onClick: onClose
  }, "\u95DC\u9589"))));
}

// Helper: increment a "YYYY-MM-DD HH:MM:SS" timestamp by N minutes
function incrTime(t, mins) {
  if (!t) return '';
  const [date, time] = t.split(' ');
  const [h, m, s] = time.split(':').map(Number);
  const total = h * 60 + m + mins;
  const nh = Math.floor(total / 60) % 24;
  const nm = total % 60;
  return `${date} ${String(nh).padStart(2, '0')}:${String(nm).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
window.OrderDrawer = OrderDrawer;

// ── Fill report modal (成交回報) ──────────────────────────────
// Pads a Date (or now) to the value format datetime-local expects.
function toLocalInput(iso) {
  const d = iso ? new Date(iso) : new Date();
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
}
function FillModal({
  order,
  onClose,
  onConfirm
}) {
  const cur = order.market === 'US' ? 'US$' : 'NT$';
  const [price, setPrice] = useState(order.fill_price != null ? String(order.fill_price) : order.price != null ? String(order.price) : '');
  const [qty, setQty] = useState(String(order.fill_qty ?? order.qty));
  const [time, setTime] = useState(toLocalInput(order.fill_time));
  const [err, setErr] = useState('');
  const submit = () => {
    const p = Number(price),
      q = Number(qty);
    if (!p || p <= 0) {
      setErr('請輸入有效的成交價格。');
      return;
    }
    if (!q || q <= 0) {
      setErr('請輸入有效的成交數量。');
      return;
    }
    onConfirm(order.id, {
      status: 'filled',
      fill_price: p,
      fill_qty: Math.round(q),
      fill_time: new Date(time).toISOString()
    });
  };
  const total = (Number(price) || 0) * (Number(qty) || 0);
  const inputStyle = {
    padding: '9px 12px',
    borderRadius: 4,
    border: '1px solid var(--tw-border)',
    font: '500 14px/1 var(--tw-font-mono)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bo-scrim is-open",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      background: 'white',
      borderRadius: 8,
      width: 400,
      padding: 28,
      boxShadow: 'var(--tw-shadow-3)',
      zIndex: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)',
      marginBottom: 4
    }
  }, "\u6210\u4EA4\u56DE\u5831"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      marginBottom: 18
    }
  }, order.sym, " \xB7 ", order.side === 'buy' ? '買進' : '賣出', " \xB7 \u59D4\u8A17 ", order.qty.toLocaleString(), " \u80A1\u3002\u586B\u5165\u5BE6\u969B\u6210\u4EA4\u8CC7\u8A0A\uFF0C\u5C07\u540C\u6B65\u986F\u793A\u65BC\u5BA2\u6236\u59D4\u8A17\u7D00\u9304\u4E26\u901A\u77E5\u5BA2\u6236\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "\u6210\u4EA4\u50F9\u683C *"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: '1px solid var(--tw-border)',
      borderRadius: 4,
      padding: '0 12px',
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px/1 var(--tw-font-mono)',
      color: 'var(--tw-fg-4)'
    }
  }, cur), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    value: price,
    onChange: e => setPrice(e.target.value),
    autoFocus: true,
    placeholder: "0.00",
    style: {
      ...inputStyle,
      border: 'none',
      padding: '9px 0'
    }
  }))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "\u6210\u4EA4\u6578\u91CF\uFF08\u80A1\uFF09*"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: qty,
    onChange: e => setQty(e.target.value),
    style: inputStyle
  }), Number(qty) > 0 && Number(qty) < order.qty && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-status-pending-fg)'
    }
  }, "\u90E8\u5206\u6210\u4EA4\uFF1A\u59D4\u8A17 ", order.qty.toLocaleString(), " \u80A1\u4E2D\u4E4B ", Number(qty).toLocaleString(), " \u80A1\u3002")), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "\u6210\u4EA4\u6642\u9593 *"), /*#__PURE__*/React.createElement("input", {
    type: "datetime-local",
    value: time,
    onChange: e => setTime(e.target.value),
    style: {
      ...inputStyle,
      fontFamily: 'var(--tw-font-sans)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '10px 12px',
      background: 'var(--tw-buy-050)',
      border: '1px solid var(--tw-buy-100)',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-3)'
    }
  }, "\u6210\u4EA4\u91D1\u984D"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 16px/1 var(--tw-font-mono)',
      color: 'var(--tw-fg-1)'
    }
  }, cur, " ", total.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), err && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-sell-700)',
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 13
  }), " ", err)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary bo-btn--lg",
    onClick: onClose
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--accept bo-btn--lg",
    onClick: submit
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 14
  }), " \u78BA\u8A8D\u6210\u4EA4"))));
}
window.FillModal = FillModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back_office/OrderDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back_office/OrderQueue.jsx
try { (() => {
// ============================================================
// TeraWise Desk — Order Queue (KPIs + filter + bulk + table)
// ============================================================
function OrderQueue({
  orders,
  onOpenOrder,
  openId,
  onAccept,
  onReject,
  onChangeStatus,
  onAssign,
  onRequestFill
}) {
  const [filter, setFilter] = useState('all');
  const [marketFilter, setMarketFilter] = useState('all');
  const [sideFilter, setSideFilter] = useState('all');
  const [selected, setSelected] = useState(new Set());
  const kpi = useMemo(() => ({
    all: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    accepted: orders.filter(o => o.status === 'accepted').length,
    filled: orders.filter(o => o.status === 'filled').length,
    rejected: orders.filter(o => o.status === 'rejected').length
  }), [orders]);
  const filtered = useMemo(() => orders.filter(o => {
    if (filter !== 'all' && o.status !== filter) return false;
    if (marketFilter !== 'all' && o.market !== marketFilter) return false;
    if (sideFilter !== 'all' && o.side !== sideFilter) return false;
    return true;
  }), [orders, filter, marketFilter, sideFilter]);
  const toggle = id => {
    setSelected(prev => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);else n.add(id);
      return n;
    });
  };
  const toggleAll = () => {
    if (selected.size === filtered.length) setSelected(new Set());else setSelected(new Set(filtered.map(o => o.id)));
  };
  const kpiTiles = [{
    id: 'all',
    label: '本日委託 ALL',
    value: kpi.all,
    delta: '',
    color: 'var(--tw-navy-600)'
  }, {
    id: 'pending',
    label: '送出委託',
    value: kpi.pending,
    delta: '待接單',
    color: 'var(--tw-status-pending-fg)',
    urgent: true
  }, {
    id: 'accepted',
    label: '已接單',
    value: kpi.accepted,
    delta: '處理中',
    color: 'var(--tw-status-accepted-fg)'
  }, {
    id: 'filled',
    label: '完成',
    value: kpi.filled,
    delta: '',
    color: 'var(--tw-status-filled-fg)'
  }, {
    id: 'rejected',
    label: '失敗',
    value: kpi.rejected,
    delta: '',
    color: 'var(--tw-status-rejected-fg)'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bo-kpi"
  }, kpiTiles.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: `bo-kpi__tile ${filter === t.id ? 'is-active' : ''}`,
    onClick: () => setFilter(t.id)
  }, /*#__PURE__*/React.createElement("div", {
    className: "bo-kpi__label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bo-kpi__chip",
    style: {
      background: t.color
    }
  }), t.label), /*#__PURE__*/React.createElement("div", {
    className: "bo-kpi__value"
  }, t.value), /*#__PURE__*/React.createElement("div", {
    className: "bo-kpi__delta",
    style: {
      color: t.urgent ? 'var(--tw-status-pending-fg)' : 'var(--tw-fg-4)'
    }
  }, t.delta || '\u00A0')))), /*#__PURE__*/React.createElement("div", {
    className: "bo-filter"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 11px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "\u5E02\u5834"), ['all', 'US', 'TW'].map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    className: `bo-filter__chip ${marketFilter === m ? 'is-on' : ''}`,
    onClick: () => setMarketFilter(m)
  }, m === 'all' ? '全部' : m)), /*#__PURE__*/React.createElement("span", {
    className: "bo-filter__sep"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 11px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "\u65B9\u5411"), [{
    v: 'all',
    l: '全部'
  }, {
    v: 'buy',
    l: 'BUY'
  }, {
    v: 'sell',
    l: 'SELL'
  }].map(o => /*#__PURE__*/React.createElement("button", {
    key: o.v,
    className: `bo-filter__chip ${sideFilter === o.v ? 'is-on' : ''}`,
    onClick: () => setSideFilter(o.v)
  }, o.l)), /*#__PURE__*/React.createElement("div", {
    className: "bo-filter__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bo-filter__sort"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-down",
    size: 12
  }), "\u6392\u5E8F\uFF1A\u4E0B\u55AE\u6642\u9593 \u2193"), /*#__PURE__*/React.createElement("span", {
    className: "bo-filter__sep"
  }), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 12
  }), " \u532F\u51FA CSV")), selected.size > 0 && /*#__PURE__*/React.createElement("div", {
    className: "bo-bulk"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-square",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "bo-bulk__count"
  }, selected.size), /*#__PURE__*/React.createElement("span", null, "\u7B46\u59D4\u8A17\u5DF2\u9078\u53D6"), /*#__PURE__*/React.createElement("div", {
    className: "bo-bulk__spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "bo-bulk__btn buy",
    onClick: () => {
      selected.forEach(onAccept);
      setSelected(new Set());
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }), " \u5168\u90E8\u63A5\u55AE"), /*#__PURE__*/React.createElement("button", {
    className: "bo-bulk__btn",
    onClick: () => {
      selected.forEach(id => onAssign(id, 'Sylvia Yi'));
    }
  }, "\u6307\u6D3E\u7D66\u6211"), /*#__PURE__*/React.createElement("button", {
    className: "bo-bulk__btn",
    onClick: () => setSelected(new Set())
  }, "\u53D6\u6D88\u9078\u53D6")), /*#__PURE__*/React.createElement("div", {
    className: "bo-table-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "bo-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "ck"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: filtered.length > 0 && selected.size === filtered.length,
    ref: el => el && (el.indeterminate = selected.size > 0 && selected.size < filtered.length),
    onChange: toggleAll
  })), /*#__PURE__*/React.createElement("th", null, "\u4E0B\u55AE\u6642\u9593", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 10,
    style: {
      marginLeft: 4
    }
  })), /*#__PURE__*/React.createElement("th", null, "\u59D4\u8A17\u7DE8\u865F"), /*#__PURE__*/React.createElement("th", null, "\u5BA2\u6236"), /*#__PURE__*/React.createElement("th", null, "\u5E02\u5834"), /*#__PURE__*/React.createElement("th", null, "\u80A1\u7968"), /*#__PURE__*/React.createElement("th", null, "\u65B9\u5411"), /*#__PURE__*/React.createElement("th", null, "\u985E\u578B"), /*#__PURE__*/React.createElement("th", {
    className: "r"
  }, "\u6578\u91CF"), /*#__PURE__*/React.createElement("th", {
    className: "r"
  }, "\u50F9\u683C"), /*#__PURE__*/React.createElement("th", null, "\u8CA0\u8CAC\u4EBA"), /*#__PURE__*/React.createElement("th", null, "\u72C0\u614B"), /*#__PURE__*/React.createElement("th", {
    className: "r",
    style: {
      width: 180
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(o => /*#__PURE__*/React.createElement("tr", {
    key: o.id,
    className: `${selected.has(o.id) ? 'is-selected' : ''} ${openId === o.id ? 'is-open' : ''}`,
    onClick: () => onOpenOrder(o.id)
  }, /*#__PURE__*/React.createElement("td", {
    className: "ck",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: selected.has(o.id),
    onChange: () => toggle(o.id)
  })), /*#__PURE__*/React.createElement("td", null, o.t.slice(5, 16)), /*#__PURE__*/React.createElement("td", null, o.id), /*#__PURE__*/React.createElement("td", {
    className: "l"
  }, o.client, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--tw-font-mono)',
      color: 'var(--tw-fg-4)',
      marginLeft: 6
    }
  }, o.cid)), /*#__PURE__*/React.createElement("td", {
    className: "l"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: o.market.toLowerCase()
  }, o.market)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, o.sym)), /*#__PURE__*/React.createElement("td", {
    className: "l"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: o.side
  }, o.side === 'buy' ? 'BUY' : 'SELL')), /*#__PURE__*/React.createElement("td", {
    className: "l"
  }, ORDER_TYPE_SHORT[o.type] || o.type, o.time_in_force ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 10px/1 var(--tw-font-mono)',
      color: 'var(--tw-fg-4)',
      marginLeft: 5
    }
  }, TIF_SHORT[o.time_in_force]) : null), /*#__PURE__*/React.createElement("td", {
    className: "r"
  }, o.qty.toLocaleString()), /*#__PURE__*/React.createElement("td", {
    className: "r"
  }, o.fill_price != null ? Number(o.fill_price).toFixed(2) : o.price != null ? Number(o.price).toFixed(2) : '市價'), /*#__PURE__*/React.createElement("td", {
    className: "l",
    style: {
      color: o.owner ? 'var(--tw-fg-1)' : 'var(--tw-fg-4)'
    }
  }, o.owner || '— 未指派'), /*#__PURE__*/React.createElement("td", {
    className: "l"
  }, /*#__PURE__*/React.createElement(StatusChip, {
    status: o.status
  })), /*#__PURE__*/React.createElement("td", {
    className: "r",
    onClick: e => e.stopPropagation()
  }, o.status === 'pending' ? /*#__PURE__*/React.createElement("div", {
    className: "row-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--accept",
    onClick: () => onAccept(o.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }), " \u63A5\u55AE"), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--reject",
    onClick: () => onReject(o.id)
  }, "\u62D2\u7D55")) : o.status === 'accepted' ? /*#__PURE__*/React.createElement("div", {
    className: "row-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--accept",
    onClick: () => onRequestFill(o)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 12
  }), " \u5B8C\u6210"), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--reject",
    onClick: () => onChangeStatus(o.id, 'rejected')
  }, "\u5931\u6557")) : o.status === 'filled' || o.status === 'rejected' ? /*#__PURE__*/React.createElement("div", {
    className: "row-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary",
    onClick: () => onChangeStatus(o.id, 'accepted')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "undo-2",
    size: 12
  }), " \u64A4\u56DE"), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--ghost",
    onClick: () => onOpenOrder(o.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 12
  }), " \u8A73\u7D30")) : null))), filtered.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "13",
    style: {
      textAlign: 'center',
      padding: '40px 20px',
      color: 'var(--tw-fg-4)'
    }
  }, "\u76EE\u524D\u7BE9\u9078\u689D\u4EF6\u4E0B\u6C92\u6709\u59D4\u8A17\u7D00\u9304\u3002"))))));
}
window.OrderQueue = OrderQueue;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back_office/OrderQueue.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back_office/Sidebar.jsx
try { (() => {
// ============================================================
// TeraWise Desk — Sidebar
// ============================================================
function Sidebar({
  active,
  onChange,
  counts,
  staff,
  onLogout
}) {
  const groups = [{
    head: 'Trading Desk',
    items: [{
      id: 'queue',
      label: '委託佇列 Order Queue',
      icon: 'inbox',
      count: counts.pending
    }, {
      id: 'active',
      label: '處理中 Active',
      icon: 'activity',
      count: counts.active
    }, {
      id: 'history',
      label: '歷史紀錄 History',
      icon: 'archive'
    }]
  }, {
    head: 'Clients',
    items: [{
      id: 'clients',
      label: '客戶 Clients',
      icon: 'users'
    }, {
      id: 'kyc',
      label: 'KYC 審核',
      icon: 'shield-check'
    }]
  }, {
    head: 'Admin',
    items: [{
      id: 'staff',
      label: '員工帳號 Staff',
      icon: 'shield-check'
    }, {
      id: 'reports',
      label: '報表 Reports',
      icon: 'file-text'
    }, {
      id: 'settings',
      label: '設定 Settings',
      icon: 'settings'
    }]
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "bo-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bo-side__brand"
  }, /*#__PURE__*/React.createElement(BrandMark, {
    size: 28
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bo-side__wordmark"
  }, "TeraWise"), /*#__PURE__*/React.createElement("div", {
    className: "bo-side__sub"
  }, "Desk \xB7 \u5F8C\u53F0"))), /*#__PURE__*/React.createElement("nav", {
    className: "bo-side__nav"
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.head
  }, /*#__PURE__*/React.createElement("div", {
    className: "bo-side__head"
  }, g.head), g.items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: `bo-side__item ${active === it.id ? 'is-active' : ''}`,
    onClick: () => onChange(it.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.count ? /*#__PURE__*/React.createElement("span", {
    className: "bo-side__count"
  }, it.count) : null))))), /*#__PURE__*/React.createElement("div", {
    className: "bo-side__user"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bo-side__avatar"
  }, staff?.initials || 'SY'), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bo-side__uname"
  }, staff?.name || 'Sylvia Yi'), /*#__PURE__*/React.createElement("div", {
    className: "bo-side__urole"
  }, staff?.role || 'Trading Operations')), /*#__PURE__*/React.createElement("button", {
    className: "bo-top__icon",
    title: "\u767B\u51FA",
    onClick: onLogout
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 14
  }))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back_office/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back_office/StaffAdmin.jsx
try { (() => {
// ============================================================
// TeraWise Desk — Staff account management (Supabase)
// ============================================================

const ROLES = ['管理員', '一般'];
function StaffAdmin({
  currentProfile
}) {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [createdInfo, setCreatedInfo] = useState(null); // { name, email, pass }

  useEffect(() => {
    loadStaff();
  }, []);
  const loadStaff = async () => {
    setLoading(true);
    const {
      data
    } = await sb.from('profiles').select('*').in('role', ['admin', 'staff']).order('created_at', {
      ascending: true
    });
    setStaffList(data || []);
    setLoading(false);
  };
  const toggleStatus = async id => {
    const s = staffList.find(x => x.id === id);
    const next = s.status === 'active' ? 'inactive' : 'active';
    setStaffList(prev => prev.map(x => x.id === id ? {
      ...x,
      status: next
    } : x));
    await sb.from('profiles').update({
      status: next
    }).eq('id', id);
  };
  const confirmDeactivate = async () => {
    await sb.from('profiles').update({
      status: 'inactive'
    }).eq('id', deleteTarget.id);
    setStaffList(prev => prev.map(x => x.id === deleteTarget.id ? {
      ...x,
      status: 'inactive'
    } : x));
    setDeleteTarget(null);
  };
  if (loading) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      color: 'var(--tw-fg-4)',
      font: '400 13px/1 var(--tw-font-sans)'
    }
  }, "\u8F09\u5165\u4E2D\u2026");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 22px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)'
    }
  }, "\u54E1\u5DE5\u5E33\u865F\u7BA1\u7406"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--tw-text-small)',
      color: 'var(--tw-fg-4)',
      marginTop: 4
    }
  }, "\u5171 ", staffList.length, " \u4F4D\u54E1\u5DE5 \xB7 \u555F\u7528\u4E2D ", staffList.filter(s => s.status === 'active').length, " \u4F4D")), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--primary bo-btn--lg",
    onClick: () => setShowCreate(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-plus",
    size: 14
  }), " \u65B0\u589E\u54E1\u5DE5\u5E33\u865F")), /*#__PURE__*/React.createElement("div", {
    className: "bo-table-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "bo-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u59D3\u540D"), /*#__PURE__*/React.createElement("th", null, "\u8077\u7A31"), /*#__PURE__*/React.createElement("th", null, "\u72C0\u614B"), /*#__PURE__*/React.createElement("th", null, "\u5EFA\u7ACB\u65E5\u671F"), /*#__PURE__*/React.createElement("th", null, "\u6700\u5F8C\u767B\u5165"), /*#__PURE__*/React.createElement("th", {
    className: "r",
    style: {
      width: 200
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, staffList.map(s => {
    const isSelf = s.id === currentProfile?.id;
    return /*#__PURE__*/React.createElement("tr", {
      key: s.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "l"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        flexShrink: 0,
        background: isSelf ? 'var(--tw-navy-800)' : 'var(--tw-ink-100)',
        color: isSelf ? 'white' : 'var(--tw-fg-2)',
        display: 'grid',
        placeItems: 'center',
        font: '600 9px/1 var(--tw-font-sans)'
      }
    }, (s.initials || (s.display_name || '?').slice(0, 2)).toUpperCase()), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: 'var(--tw-fg-1)'
      }
    }, s.display_name, isSelf && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 10px/1 var(--tw-font-sans)',
        color: 'var(--tw-navy-500)',
        marginLeft: 6,
        padding: '2px 6px',
        background: 'var(--tw-navy-100)',
        borderRadius: 2
      }
    }, "\u672C\u4EBA")))), /*#__PURE__*/React.createElement("td", {
      className: "l"
    }, s.role === 'admin' ? '管理員' : '一般'), /*#__PURE__*/React.createElement("td", {
      className: "l"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        font: '600 11px/1 var(--tw-font-sans)',
        padding: '4px 8px',
        borderRadius: 999,
        background: s.status === 'active' ? 'var(--tw-status-filled-bg)' : 'var(--tw-status-cancelled-bg)',
        color: s.status === 'active' ? 'var(--tw-status-filled-fg)' : 'var(--tw-status-cancelled-fg)',
        border: '1px solid',
        borderColor: s.status === 'active' ? 'var(--tw-status-filled-bd)' : 'var(--tw-status-cancelled-bd)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: 'currentColor'
      }
    }), s.status === 'active' ? '啟用中' : '已停用')), /*#__PURE__*/React.createElement("td", null, (s.created_at || '').slice(0, 10)), /*#__PURE__*/React.createElement("td", null, s.last_login ? s.last_login.slice(0, 16).replace('T', ' ') : '—'), /*#__PURE__*/React.createElement("td", {
      className: "r"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row-actions",
      style: {
        opacity: 1
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: `bo-btn ${s.status === 'active' ? 'bo-btn--reject' : 'bo-btn--accept'}`,
      disabled: isSelf,
      style: isSelf ? {
        opacity: 0.4,
        cursor: 'not-allowed'
      } : {},
      onClick: () => !isSelf && toggleStatus(s.id)
    }, s.status === 'active' ? '停用' : '啟用'), /*#__PURE__*/React.createElement("button", {
      className: "bo-btn bo-btn--ghost",
      style: {
        color: 'var(--tw-sell-600)'
      },
      disabled: isSelf,
      onClick: () => !isSelf && setDeleteTarget(s)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash-2",
      size: 12
    })))));
  }), staffList.length === 0 && !loading && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "6",
    style: {
      textAlign: 'center',
      padding: '36px',
      color: 'var(--tw-fg-4)'
    }
  }, "\u5C1A\u7121\u54E1\u5DE5\u8CC7\u6599\u3002"))))), showCreate && /*#__PURE__*/React.createElement(CreateStaffModal, {
    onClose: () => setShowCreate(false),
    onCreate: (member, pass) => {
      setStaffList(prev => [...prev, member]);
      setShowCreate(false);
      setCreatedInfo({
        name: member.display_name,
        pass
      });
    }
  }), createdInfo && /*#__PURE__*/React.createElement(StaffCreatedModal, {
    info: createdInfo,
    onClose: () => setCreatedInfo(null)
  }), deleteTarget && /*#__PURE__*/React.createElement(DeleteConfirmModal, {
    name: deleteTarget.display_name,
    onCancel: () => setDeleteTarget(null),
    onConfirm: confirmDeactivate
  }));
}

// ── Create Staff Modal ────────────────────────────────────
function CreateStaffModal({
  onClose,
  onCreate
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(ROLES[1]); // 一般
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const initials = n => n.trim().split(' ').map(w => w[0] || '').join('').toUpperCase().slice(0, 2) || n.slice(0, 2).toUpperCase();
  const handleCreate = async () => {
    if (!name.trim()) {
      setErr('請填寫姓名。');
      return;
    }
    if (!email.includes('@')) {
      setErr('請輸入有效的 Email。');
      return;
    }
    if (pass.length < 6) {
      setErr('密碼至少需 6 位。');
      return;
    }
    setErr('');
    setLoading(true);
    const sbRole = role === '管理員' ? 'admin' : 'staff';
    const {
      data: authData,
      error: authErr
    } = await createUserAccount(email.trim(), pass, {
      display_name: name.trim(),
      role: sbRole
    });
    if (authErr) {
      setErr('建立失敗：' + authErr.message);
      setLoading(false);
      return;
    }
    const uid = authData?.user?.id;
    if (!uid) {
      setErr('帳號建立失敗，請再試一次。');
      setLoading(false);
      return;
    }
    await new Promise(r => setTimeout(r, 600));
    const {
      data: prof
    } = await sb.from('profiles').select('*').eq('id', uid).single();
    const member = prof || {
      id: uid,
      display_name: name.trim(),
      initials: initials(name),
      role: sbRole,
      status: 'active',
      created_at: new Date().toISOString()
    };
    setLoading(false);
    onCreate(member, pass);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bo-scrim is-open",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      background: 'white',
      borderRadius: 8,
      width: 420,
      padding: 28,
      boxShadow: 'var(--tw-shadow-3)',
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)',
      marginBottom: 20
    }
  }, "\u65B0\u589E\u54E1\u5DE5\u5E33\u865F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [{
    label: '姓名 *',
    val: name,
    set: setName,
    type: 'text',
    ph: 'Kevin Lam'
  }, {
    label: 'Email *',
    val: email,
    set: setEmail,
    type: 'email',
    ph: 'staff@terawisehk.com'
  }, {
    label: '初始密碼 *（至少 6 位）',
    val: pass,
    set: setPass,
    type: 'password',
    ph: '••••••'
  }].map(f => /*#__PURE__*/React.createElement("label", {
    key: f.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, f.label), /*#__PURE__*/React.createElement("input", {
    type: f.type,
    value: f.val,
    onChange: e => f.set(e.target.value),
    placeholder: f.ph,
    style: {
      padding: '9px 12px',
      borderRadius: 4,
      border: '1px solid var(--tw-border)',
      font: '400 14px/1.4 var(--tw-font-sans)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box'
    }
  }))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "\u8077\u7A31"), /*#__PURE__*/React.createElement("select", {
    value: role,
    onChange: e => setRole(e.target.value),
    style: {
      padding: '9px 12px',
      borderRadius: 4,
      border: '1px solid var(--tw-border)',
      font: '400 14px/1.4 var(--tw-font-sans)',
      outline: 'none',
      background: 'white'
    }
  }, ROLES.map(r => /*#__PURE__*/React.createElement("option", {
    key: r,
    value: r
  }, r)))), err && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-sell-700)',
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 13
  }), " ", err)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary bo-btn--lg",
    onClick: onClose,
    disabled: loading
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--primary bo-btn--lg",
    onClick: handleCreate,
    disabled: loading
  }, /*#__PURE__*/React.createElement(Icon, {
    name: loading ? 'loader-2' : 'user-plus',
    size: 13
  }), " ", loading ? '建立中…' : '新增帳號'))));
}

// ── Staff Created Confirmation Modal ──────────────────────
function StaffCreatedModal({
  info,
  onClose
}) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(info.pass).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bo-scrim is-open",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      background: 'white',
      borderRadius: 8,
      width: 380,
      padding: 28,
      boxShadow: 'var(--tw-shadow-3)',
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--tw-status-filled-bg)',
      color: 'var(--tw-status-filled-fg)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-check",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)'
    }
  }, "\u5E33\u865F\u5DF2\u5EFA\u7ACB"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-fg-3)',
      marginTop: 4
    }
  }, "\u54E1\u5DE5\uFF1A", info.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tw-navy-050)',
      border: '1px solid var(--tw-navy-100)',
      borderRadius: 4,
      padding: '12px 14px',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      marginBottom: 8,
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, "\u521D\u59CB\u5BC6\u78BC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 20px/1 var(--tw-font-mono)',
      color: 'var(--tw-fg-1)',
      letterSpacing: '0.08em'
    }
  }, info.pass), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary",
    onClick: copy,
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: copied ? 'check' : 'copy',
    size: 12
  }), " ", copied ? '已複製' : '複製'))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.5 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      marginBottom: 18,
      padding: '10px 12px',
      background: 'var(--tw-status-pending-bg)',
      borderRadius: 4,
      border: '1px solid var(--tw-status-pending-bd)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-triangle",
    size: 13,
    style: {
      verticalAlign: 'middle',
      marginRight: 6,
      color: 'var(--tw-status-pending-fg)'
    }
  }), "\u8ACB\u7ACB\u5373\u544A\u77E5\u54E1\u5DE5\u6B64\u521D\u59CB\u5BC6\u78BC\u4E26\u8981\u6C42\u767B\u5165\u5F8C\u66F4\u6539\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--primary bo-btn--lg",
    onClick: onClose
  }, "\u5B8C\u6210"))));
}
window.StaffAdmin = StaffAdmin;
window.ROLES = ROLES;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back_office/StaffAdmin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back_office/TopBar.jsx
try { (() => {
// ============================================================
// TeraWise Desk — Top bar
// ============================================================
function TopBar({
  crumb,
  profile,
  email
}) {
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
    const onDoc = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [menuOpen]);
  const hh = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  const us = marketStatus('US', now);
  const tw = marketStatus('TW', now);
  const name = profile?.display_name || 'Staff';
  const initials = (profile?.initials || name.slice(0, 2)).toUpperCase();
  return /*#__PURE__*/React.createElement("header", {
    className: "bo-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bo-top__crumb"
  }, /*#__PURE__*/React.createElement("span", null, "\u5F8C\u53F0"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12
  }), /*#__PURE__*/React.createElement("span", null, "Trading Desk"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12
  }), /*#__PURE__*/React.createElement("span", {
    className: "now"
  }, crumb)), /*#__PURE__*/React.createElement("div", {
    className: "bo-top__search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14,
    style: {
      position: 'absolute',
      left: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--tw-fg-4)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "\u641C\u5C0B Order ID, \u5BA2\u6236\u4EE3\u865F, \u80A1\u7968\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bo-top__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bo-top__clocks"
  }, /*#__PURE__*/React.createElement("span", {
    className: `mk ${us.open ? '' : 'closed'}`,
    title: `美股 ${us.label}｜${usHoursTW(now)}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "NYSE"), /*#__PURE__*/React.createElement("span", {
    className: `mk ${tw.open ? '' : 'closed'}`,
    title: `台股 ${tw.label}｜09:00–13:30（台灣）`
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "TWSE"), /*#__PURE__*/React.createElement("span", null, hh, " HKT")), /*#__PURE__*/React.createElement("button", {
    className: "bo-top__icon",
    title: "\u901A\u77E5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "bo-top__icon",
    title: "\u8AAA\u660E"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "help-circle",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenuOpen(o => !o),
    title: name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '4px 6px 4px 4px',
      background: menuOpen ? 'var(--tw-ink-100)' : 'transparent',
      border: 'none',
      borderRadius: 999,
      cursor: 'pointer',
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--tw-navy-800)',
      color: 'white',
      display: 'grid',
      placeItems: 'center',
      font: '600 10px/1 var(--tw-font-sans)'
    }
  }, initials), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 13,
    color: "var(--tw-fg-4)"
  })), menuOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      right: 0,
      minWidth: 200,
      background: 'white',
      border: '1px solid var(--tw-border)',
      borderRadius: 8,
      boxShadow: 'var(--tw-shadow-3)',
      zIndex: 80,
      overflow: 'hidden',
      padding: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px 10px',
      borderBottom: '1px solid var(--tw-border-subtle)',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px/1.2 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1.2 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      marginTop: 3
    }
  }, profile?.role === 'admin' ? '管理員' : '一般'), email && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px/1.3 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      marginTop: 4,
      wordBreak: 'break-all'
    }
  }, email)), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMenuOpen(false);
      setShowPw(true);
    },
    style: menuItemStyle
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "key-round",
    size: 14,
    color: "var(--tw-fg-3)"
  }), " \u4FEE\u6539\u5BC6\u78BC"))), showPw && /*#__PURE__*/React.createElement(ChangePasswordModal, {
    onClose: () => setShowPw(false)
  }));
}
const menuItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  width: '100%',
  padding: '9px 10px',
  background: 'transparent',
  border: 'none',
  borderRadius: 5,
  cursor: 'pointer',
  font: '500 13px/1 var(--tw-font-sans)',
  color: 'var(--tw-fg-1)',
  textAlign: 'left'
};

// ── Change Password Modal ─────────────────────────────────
function ChangePasswordModal({
  onClose
}) {
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const [err, setErr] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const submit = async () => {
    if (pw1.length < 6) {
      setErr('新密碼至少需 6 位。');
      return;
    }
    if (pw1 !== pw2) {
      setErr('兩次輸入的密碼不一致。');
      return;
    }
    setErr('');
    setLoading(true);
    const {
      error
    } = await sb.auth.updateUser({
      password: pw1
    });
    setLoading(false);
    if (error) {
      setErr('修改失敗：' + error.message);
      return;
    }
    setDone(true);
  };
  const inputStyle = {
    padding: '9px 12px',
    borderRadius: 4,
    border: '1px solid var(--tw-border)',
    font: '400 14px/1.4 var(--tw-font-sans)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bo-scrim is-open",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      background: 'white',
      borderRadius: 8,
      width: 400,
      padding: 28,
      boxShadow: 'var(--tw-shadow-3)',
      zIndex: 90
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '8px 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--tw-status-filled-bg)',
      color: 'var(--tw-status-filled-fg)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto 14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)',
      marginBottom: 6
    }
  }, "\u5BC6\u78BC\u5DF2\u66F4\u65B0"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      marginBottom: 20
    }
  }, "\u4E0B\u6B21\u767B\u5165\u8ACB\u4F7F\u7528\u65B0\u5BC6\u78BC\u3002"), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--primary bo-btn--lg",
    onClick: onClose
  }, "\u5B8C\u6210")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)',
      marginBottom: 4
    }
  }, "\u4FEE\u6539\u5BC6\u78BC"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      marginBottom: 20
    }
  }, "\u8ACB\u8F38\u5165\u65B0\u5BC6\u78BC\uFF0C\u81F3\u5C11 6 \u4F4D\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "\u65B0\u5BC6\u78BC"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pw1,
    onChange: e => setPw1(e.target.value),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
    autoComplete: "new-password",
    style: inputStyle
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "\u78BA\u8A8D\u65B0\u5BC6\u78BC"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pw2,
    onChange: e => setPw2(e.target.value),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
    autoComplete: "new-password",
    style: inputStyle,
    onKeyDown: e => e.key === 'Enter' && submit()
  })), err && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-sell-700)',
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 13,
    color: "var(--tw-sell-700)"
  }), " ", err)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--secondary bo-btn--lg",
    onClick: onClose,
    disabled: loading
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    className: "bo-btn bo-btn--primary bo-btn--lg",
    onClick: submit,
    disabled: loading
  }, /*#__PURE__*/React.createElement(Icon, {
    name: loading ? 'loader-2' : 'check',
    size: 13
  }), " ", loading ? '更新中…' : '確認修改')))));
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back_office/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back_office/components.jsx
try { (() => {
// ============================================================
// TeraWise Desk — Back-Office · shared atoms & helpers
// ============================================================
const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;

// Brand mark (same as customer portal, sized for sidebar)
function BrandMark({
  size = 26,
  color = 'var(--tw-gold-500)',
  stem = '#8B4A24'
}) {
  const Row = ({
    by,
    w,
    ty,
    gap
  }) => /*#__PURE__*/React.createElement("g", {
    fill: color
  }, /*#__PURE__*/React.createElement("polygon", {
    points: `32,${by} ${32 - w},${ty + 2} ${32 - gap / 2},${ty}`
  }), /*#__PURE__*/React.createElement("polygon", {
    points: `32,${by} ${32 + w},${ty + 2} ${32 + gap / 2},${ty}`
  }));
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    width: size,
    height: size,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    by: 22,
    w: 8,
    ty: 11,
    gap: 4
  }), /*#__PURE__*/React.createElement(Row, {
    by: 34,
    w: 10,
    ty: 22,
    gap: 5
  }), /*#__PURE__*/React.createElement(Row, {
    by: 46,
    w: 12,
    ty: 33,
    gap: 6
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30.5",
    y: "46",
    width: "3",
    height: "10",
    fill: stem
  }), /*#__PURE__*/React.createElement("rect", {
    x: "19",
    y: "55",
    width: "26",
    height: "2.5",
    fill: stem
  }));
}
function Icon({
  name,
  size = 14,
  color,
  style
}) {
  const iconName = name.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
  const lc = window.lucide;
  if (!lc || !lc[iconName]) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: size,
        height: size,
        ...style
      }
    });
  }
  let svgHtml = '';
  try {
    if (typeof lc.createElement === 'function') {
      // Use Lucide's own API — works regardless of internal data format or version
      const el = lc.createElement(lc[iconName], {
        width: size,
        height: size,
        'stroke-width': 1.5
      });
      svgHtml = el.outerHTML;
    } else {
      // Fallback: icon data is a flat children array [[tag, attrs], ...]
      const kids = Array.isArray(lc[iconName][0]) ? lc[iconName] : lc[iconName][2] || [];
      const childStr = kids.map(child => {
        if (!Array.isArray(child)) return '';
        const [tag, attrs] = child;
        const a = Object.entries(attrs || {}).filter(([k]) => k !== 'key').map(([k, v]) => `${k}="${v}"`).join(' ');
        return `<${tag} ${a}/>`;
      }).join('');
      svgHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${childStr}</svg>`;
    }
  } catch (e) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: size,
        height: size,
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svgHtml
    }
  });
}
const STATUS_LABEL = {
  pending: '送出委託',
  accepted: '已接單',
  filled: '完成',
  rejected: '失敗'
};

// ---- Order type & time-in-force labels ----
const ORDER_TYPE_LABEL = {
  limit: '限價 LIMIT',
  market: '市價 MARKET',
  at_open: '開盤價 @market open price',
  at_close: '收盤價 @market close price'
};
const ORDER_TYPE_SHORT = {
  limit: '限價',
  market: '市價',
  at_open: '@market open',
  at_close: '@market close'
};
const TIF_LABEL = {
  rod: 'ROD 當日有效',
  ioc: 'IOC 立即成交否則取消',
  fok: 'FOK 全部成交否則取消'
};
const TIF_SHORT = {
  rod: 'ROD',
  ioc: 'IOC',
  fok: 'FOK'
};

// ---- Market conventions (mirrors customer portal) ----
const MARKETS = [{
  code: 'TW',
  label: '台灣',
  conv: 'east'
}, {
  code: 'US',
  label: '美國',
  conv: 'west'
}, {
  code: 'CN',
  label: '中國 A股',
  conv: 'east'
}, {
  code: 'HK',
  label: '香港',
  conv: 'east'
}, {
  code: 'JP',
  label: '日本',
  conv: 'jp'
}, {
  code: 'KR',
  label: '韓國',
  conv: 'kr'
}, {
  code: 'UK',
  label: '英國',
  conv: 'west'
}, {
  code: 'EU',
  label: '歐洲',
  conv: 'west'
}, {
  code: 'CA',
  label: '加拿大',
  conv: 'west'
}, {
  code: 'AU',
  label: '澳洲',
  conv: 'west'
}, {
  code: 'SG',
  label: '新加坡',
  conv: 'east'
}, {
  code: 'IN',
  label: '印度',
  conv: 'west'
}];
function getMarketColors(code) {
  const conv = MARKETS.find(m => m.code === code)?.conv ?? 'west';
  switch (conv) {
    case 'east':
      return {
        up: 'var(--tw-red-600)',
        down: 'var(--tw-green-600)'
      };
    case 'jp':
    case 'kr':
      return {
        up: 'var(--tw-red-600)',
        down: 'var(--tw-blue-dn-600)'
      };
    default:
      return {
        up: 'var(--tw-green-600)',
        down: 'var(--tw-red-600)'
      };
  }
}

// Market session status — timezone-aware, DST-correct (see customer portal for notes)
function marketStatus(code, d = new Date()) {
  const tz = code === 'US' ? 'America/New_York' : 'Asia/Taipei';
  const p = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(d).reduce((a, x) => (a[x.type] = x.value, a), {});
  const weekend = p.weekday === 'Sat' || p.weekday === 'Sun';
  const mins = Number(p.hour) % 24 * 60 + Number(p.minute);
  let open = false;
  if (code === 'US') open = !weekend && mins >= 570 && mins < 960; // 09:30–16:00 ET
  else if (code === 'TW') open = !weekend && mins >= 540 && mins < 810; // 09:00–13:30
  return {
    open,
    label: open ? '交易中' : '已收盤'
  };
}
function usHoursTW(d = new Date()) {
  const offName = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    timeZoneName: 'short'
  }).formatToParts(d).find(x => x.type === 'timeZoneName')?.value || '';
  return offName.includes('DT') ? '夏令 21:30–04:00（台灣）' : '冬令 22:30–05:00（台灣）';
}
function StatusChip({
  status
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `bo-chip bo-chip--${status}`
  }, STATUS_LABEL[status]);
}
function Badge({
  tone,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `bo-badge bo-badge--${tone}`
  }, children);
}

// Assignable desk owners for the order-detail "負責人 Owner" select
const STAFF = ['Victor', 'Sylvia Yi', 'David Chen', 'Kevin Lam'];
Object.assign(window, {
  BrandMark,
  Icon,
  StatusChip,
  Badge,
  STATUS_LABEL,
  MARKETS,
  getMarketColors,
  marketStatus,
  usHoursTW,
  STAFF,
  ORDER_TYPE_LABEL,
  ORDER_TYPE_SHORT,
  TIF_LABEL,
  TIF_SHORT
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back_office/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back_office/supabase.js
try { (() => {
// ============================================================
// TeraWise · Supabase Client (Back Office)
// Loaded as a plain <script> before any Babel/JSX files.
// ============================================================
(function () {
  var SUPABASE_URL = 'https://yecijqecmabjtgpwfroy.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_WpuOkrhxrKQWCbgOosVcWQ_VJyJWCVi';
  var createClient = window.supabase.createClient;

  // Main session-aware client
  window.sb = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
      storage: window.localStorage,
      storageKey: 'terawise-bo-auth' // 後台專用，保持登入、避免自動登出
    }
  });

  // Create a new user WITHOUT affecting the current admin session.
  // Uses an ephemeral client instance so signUp doesn't hijack the session.
  window.createUserAccount = function (email, password, metadata) {
    var tmp = createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    });
    return tmp.auth.signUp({
      email: email,
      password: password,
      options: {
        data: metadata || {}
      }
    });
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back_office/supabase.js", error: String((e && e.message) || e) }); }

// ui_kits/customer_portal/App.jsx
try { (() => {
// ============================================================
// TeraWise Trade — Customer Portal App (Supabase Auth)
// ============================================================

function LoadingScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--tw-navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.4)',
      font: '500 14px/1 var(--tw-font-sans)'
    }
  }, "\u8F09\u5165\u4E2D\u2026"));
}
function NoClientScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--tw-navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-x",
    size: 32,
    color: "rgba(255,255,255,0.3)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'white',
      font: '600 16px/1 var(--tw-font-sans)'
    }
  }, "\u5E33\u865F\u5C1A\u672A\u555F\u7528"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.45)',
      font: '400 13px/1.5 var(--tw-font-sans)',
      textAlign: 'center',
      maxWidth: 280
    }
  }, "\u60A8\u7684\u5BA2\u6236\u8CC7\u6599\u5C1A\u672A\u5EFA\u7ACB\uFF0C\u8ACB\u806F\u7E6B\u60A8\u7684\u5C08\u54E1\u3002"), /*#__PURE__*/React.createElement("button", {
    onClick: () => sb.auth.signOut(),
    style: {
      marginTop: 8,
      padding: '8px 20px',
      background: 'var(--tw-navy-700)',
      color: 'white',
      border: 'none',
      borderRadius: 4,
      cursor: 'pointer',
      font: '500 13px/1 var(--tw-font-sans)'
    }
  }, "\u767B\u51FA"));
}
function App() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [client, setClient] = useState(null);
  const [orders, setOrders] = useState([]);
  const [authLoading, setAuthLoading] = useState(true);
  const [route, setRoute] = useState('dashboard');
  const [toast, setToast] = useState(null);

  // ── Auth ──
  useEffect(() => {
    // 單一來源：onAuthStateChange 會在載入時以 INITIAL_SESSION 帶入已儲存的登入狀態，
    // 達成自動登入；TOKEN_REFRESHED 僅更新 token、不重新載入畫面，避免閃爍或被登出。
    const {
      data: {
        subscription
      }
    } = sb.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (!session || event === 'SIGNED_OUT') {
        setProfile(null);
        setClient(null);
        setOrders([]);
        setAuthLoading(false);
        return;
      }
      if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        initUser(session.user.id, session.user.email);
      }
      // TOKEN_REFRESHED：維持現有 session 即可，不重新抓取資料
    });
    return () => subscription.unsubscribe();
  }, []);
  const initUser = async (uid, userEmail) => {
    setAuthLoading(true);
    const {
      data: prof
    } = await sb.from('profiles').select('*').eq('id', uid).single();
    setProfile(prof);
    if (prof?.role === 'client') {
      // Find client by profile_id first, then by email (for pre-registered clients)
      let {
        data: cli
      } = await sb.from('clients').select('*').eq('profile_id', uid).single();
      if (!cli && userEmail) {
        const {
          data: cliByEmail
        } = await sb.from('clients').select('*').eq('email', userEmail).single();
        if (cliByEmail) {
          await sb.from('clients').update({
            profile_id: uid
          }).eq('id', cliByEmail.id);
          cli = {
            ...cliByEmail,
            profile_id: uid
          };
        }
      }
      setClient(cli || null);
      if (cli) await fetchOrders(cli.id);
    }
    setAuthLoading(false);
    sb.from('profiles').update({
      last_login: new Date().toISOString()
    }).eq('id', uid);
  };
  const fetchOrders = async clientId => {
    const {
      data
    } = await sb.from('orders').select('*').eq('client_id', clientId).order('created_at', {
      ascending: false
    });
    if (data) setOrders(data.map(o => ({
      ...o,
      t: (o.created_at || '').slice(0, 19).replace('T', ' '),
      name: o.sym
    })));
  };

  // ── Real-time for this client's orders ──
  useEffect(() => {
    if (!client?.id) return;
    const channel = sb.channel('cp-orders-rt').on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'orders',
      filter: `client_id=eq.${client.id}`
    }, () => fetchOrders(client.id)).subscribe();
    return () => sb.removeChannel(channel);
  }, [client?.id]);

  // ── Submit order ──
  const submit = async ticket => {
    if (!client) return;
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    const orderId = `OR-${date}-${rand}`;
    const {
      error
    } = await sb.from('orders').insert({
      id: orderId,
      client_id: client.id,
      client_name: client.account_holder || profile?.display_name || client.name,
      account: ticket.account || null,
      order_bank: ticket.order_bank || null,
      sym: ticket.symbol,
      market: ticket.market,
      side: ticket.side,
      type: ticket.type,
      time_in_force: ticket.tif || 'rod',
      qty: Number(ticket.qty),
      price: ticket.type === 'limit' ? Number(ticket.price) : null,
      trade_date: ticket.trade_date || null,
      status: 'pending',
      note: ''
    });
    if (!error) {
      await fetchOrders(client.id); // force immediate refresh
      showToast('委託已送出，後台人員將盡快處理。');
      setRoute('dashboard');
    } else {
      showToast('送出失敗：' + error.message);
    }
  };
  const showToast = msg => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  // ── Render guards ──
  if (authLoading) return /*#__PURE__*/React.createElement(LoadingScreen, null);
  if (!session || !profile) {
    return /*#__PURE__*/React.createElement(LoginScreen, {
      onLogin: () => {}
    });
  }
  if (profile.role !== 'client') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100vh',
        background: 'var(--tw-navy-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'white',
        font: '600 16px/1 var(--tw-font-sans)'
      }
    }, "\u8ACB\u4F7F\u7528\u5F8C\u53F0\u7CFB\u7D71\u767B\u5165"), /*#__PURE__*/React.createElement("button", {
      onClick: () => sb.auth.signOut(),
      style: {
        padding: '8px 20px',
        background: 'var(--tw-navy-700)',
        color: 'white',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        font: '500 13px/1 var(--tw-font-sans)'
      }
    }, "\u767B\u51FA"));
  }
  if (!client) return /*#__PURE__*/React.createElement(NoClientScreen, null);
  return /*#__PURE__*/React.createElement("div", {
    className: "tw-app"
  }, /*#__PURE__*/React.createElement(TopNav, {
    route: route,
    onNav: setRoute,
    userName: profile.display_name || client.name,
    onLogout: () => sb.auth.signOut()
  }), /*#__PURE__*/React.createElement("main", {
    className: "tw-main"
  }, route === 'dashboard' && /*#__PURE__*/React.createElement(Dashboard, {
    userName: profile.display_name || client.name,
    orders: orders,
    onPlaceOrder: () => setRoute('order')
  }), route === 'order' && /*#__PURE__*/React.createElement(OrderTicket, {
    clientId: client.id,
    clientName: client.account_holder || client.name,
    accounts: client.accounts || [],
    orderBanks: client.order_banks || [],
    onCancel: () => setRoute('dashboard'),
    onSubmit: submit
  })), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--tw-navy-800)',
      color: 'white',
      padding: '12px 20px',
      borderRadius: 6,
      boxShadow: 'var(--tw-shadow-3)',
      font: '500 13px/1.4 var(--tw-font-sans)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 16,
    color: "var(--tw-buy-400)"
  }), toast));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer_portal/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer_portal/Dashboard.jsx
try { (() => {
// ============================================================
// TeraWise Trade — Dashboard (overview)
// ============================================================
function Dashboard({
  onPlaceOrder,
  userName,
  orders = []
}) {
  const [filter, setFilter] = useState('all');
  const [openOrder, setOpenOrder] = useState(null);
  const filtered = orders.filter(o => {
    if (filter === 'all') return true;
    if (filter === 'open') return ['pending', 'accepted', 'processing'].includes(o.status);
    if (filter === 'done') return ['filled', 'cancelled', 'rejected'].includes(o.status);
    return true;
  });
  const greetHour = new Date().getHours();
  const greeting = greetHour < 12 ? '早安' : greetHour < 18 ? '午安' : '晚安';
  const today = new Date().toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  const usSt = marketStatus('US');
  const twSt = marketStatus('TW');
  return /*#__PURE__*/React.createElement("div", {
    className: "tw-stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, greeting, "\uFF0C", userName, "\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "tw-page-head__sub"
  }, "\u5146\u6613\u89C0\u9EDE\uFF5C", today, " \xB7 \u7F8E\u80A1", usSt.label, " \xB7 \u53F0\u80A1", twSt.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://terawisehk.com/2026q1%e5%85%86%e6%98%93%e8%a7%80%e9%bb%9e/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "file-text"
  }, "\u672C\u9031\u7814\u7A76\u9031\u5831")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "arrow-up-right",
    onClick: onPlaceOrder
  }, "\u5EFA\u7ACB\u65B0\u59D4\u8A17"))), /*#__PURE__*/React.createElement("a", {
    href: "https://lin.ee/ofwCuzI",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 20px',
      background: '#06C755',
      borderRadius: 6,
      textDecoration: 'none',
      color: 'white',
      boxShadow: 'var(--tw-shadow-1)',
      transition: 'filter 80ms ease'
    },
    onMouseEnter: e => e.currentTarget.style.filter = 'brightness(0.92)',
    onMouseLeave: e => e.currentTarget.style.filter = ''
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "32",
    height: "32",
    rx: "8",
    fill: "white",
    fillOpacity: "0.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M26 14.4C26 9.76 21.52 6 16 6C10.48 6 6 9.76 6 14.4C6 18.56 9.6 22.04 14.48 22.68C14.84 22.76 15.32 22.92 15.44 23.24C15.56 23.52 15.52 23.96 15.48 24.24L15.28 25.44C15.2 25.76 15.04 26.68 16 26.28C16.96 25.88 21.2 23.12 23.12 20.92C24.44 19.44 26 17.08 26 14.4Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 12.5H12.5C12.22 12.5 12 12.72 12 13V17C12 17.28 12.22 17.5 12.5 17.5H13.5C13.78 17.5 14 17.28 14 17V13C14 12.72 13.78 12.5 13.5 12.5Z",
    fill: "#06C755"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 12.5H19C18.72 12.5 18.5 12.72 18.5 13V15.5L16.5 12.72C16.44 12.6 16.3 12.5 16.16 12.5H15C14.72 12.5 14.5 12.72 14.5 13V17C14.5 17.28 14.72 17.5 15 17.5H16C16.28 17.5 16.5 17.28 16.5 17V14.5L18.5 17.28C18.56 17.4 18.7 17.5 18.84 17.5H20C20.28 17.5 20.5 17.28 20.5 17V13C20.5 12.72 20.28 12.5 20 12.5Z",
    fill: "#06C755"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 var(--tw-font-sans)'
    }
  }, "\u52A0\u5165 LINE \u5B98\u65B9\u5E33\u865F"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--tw-font-sans)',
      opacity: 0.88,
      marginTop: 3
    }
  }, "\u6BCF\u65E5\u63A5\u6536\u5146\u6613\u89C0\u9EDE\u6700\u65B0\u7814\u7A76\u5831\u544A\u8207\u5E02\u5834\u52D5\u614B")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '600 13px/1 var(--tw-font-sans)',
      opacity: 0.9
    }
  }, "\u7ACB\u5373\u52A0\u5165", /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tw-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-card__head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-card__title"
  }, "\u59D4\u8A17\u7D00\u9304 Orders"), /*#__PURE__*/React.createElement(Segmented, {
    options: [{
      value: 'all',
      label: '全部'
    }, {
      value: 'open',
      label: '處理中'
    }, {
      value: 'done',
      label: '已結案'
    }],
    value: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1 var(--tw-font-mono)',
      color: 'var(--tw-fg-4)'
    }
  }, "\u5171 ", filtered.length, " \u7B46")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tw-icon-btn",
    title: "\u641C\u5C0B"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  })), /*#__PURE__*/React.createElement("button", {
    className: "tw-icon-btn",
    title: "\u7BE9\u9078"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter"
  })), /*#__PURE__*/React.createElement("button", {
    className: "tw-icon-btn",
    title: "\u532F\u51FA"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download"
  })))), /*#__PURE__*/React.createElement("table", {
    className: "tw-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u4E0B\u55AE\u6642\u9593"), /*#__PURE__*/React.createElement("th", null, "\u59D4\u8A17\u7DE8\u865F"), /*#__PURE__*/React.createElement("th", null, "\u5E02\u5834"), /*#__PURE__*/React.createElement("th", null, "\u80A1\u7968"), /*#__PURE__*/React.createElement("th", null, "\u65B9\u5411"), /*#__PURE__*/React.createElement("th", null, "\u985E\u578B"), /*#__PURE__*/React.createElement("th", {
    className: "r"
  }, "\u6578\u91CF"), /*#__PURE__*/React.createElement("th", {
    className: "r"
  }, "\u50F9\u683C"), /*#__PURE__*/React.createElement("th", null, "\u72C0\u614B"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(o => /*#__PURE__*/React.createElement("tr", {
    key: o.id,
    onClick: () => setOpenOrder(o),
    className: openOrder?.id === o.id ? 'is-active' : ''
  }, /*#__PURE__*/React.createElement("td", null, o.t.slice(5, 16)), /*#__PURE__*/React.createElement("td", null, o.id), /*#__PURE__*/React.createElement("td", {
    className: "l"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: o.market.toLowerCase()
  }, o.market)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, o.sym)), /*#__PURE__*/React.createElement("td", {
    className: "l"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: o.side
  }, o.side === 'buy' ? 'BUY' : 'SELL')), /*#__PURE__*/React.createElement("td", {
    className: "l"
  }, ORDER_TYPE_SHORT[o.type] || o.type, o.time_in_force ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tw-fg-4)',
      marginLeft: 4
    }
  }, "\xB7 ", TIF_SHORT[o.time_in_force]) : null), /*#__PURE__*/React.createElement("td", {
    className: "r"
  }, o.qty.toLocaleString()), /*#__PURE__*/React.createElement("td", {
    className: "r"
  }, o.fill_price != null ? Number(o.fill_price).toFixed(2) : o.price != null ? Number(o.price).toFixed(2) : '市價'), /*#__PURE__*/React.createElement("td", {
    className: "l"
  }, /*#__PURE__*/React.createElement(StatusChip, {
    status: o.status
  }))))))), /*#__PURE__*/React.createElement(OrderDetail, {
    order: openOrder,
    onClose: () => setOpenOrder(null)
  }));
}
window.Dashboard = Dashboard;
function OrderDetail({
  order,
  onClose
}) {
  const isOpen = !!order;
  const o = order ?? {};
  const timeline = [{
    status: 'pending',
    label: '客戶送出委託',
    t: o.t
  }, {
    status: 'accepted',
    label: '後台已接單',
    t: o.t && o.t.replace(/(\d\d):(\d\d):(\d\d)/, (m, h, mi, s) => `${h}:${String(Number(mi) + 1).padStart(2, '0')}:${s}`)
  }, {
    status: 'processing',
    label: '送往券商通路',
    t: ''
  }, {
    status: 'filled',
    label: '全數成交',
    t: o.fill_time ? o.fill_time.slice(0, 19).replace('T', ' ') : ''
  }];
  const order_status_index = ['pending', 'accepted', 'processing', 'filled', 'cancelled', 'rejected'].indexOf(o.status);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `tw-scrim ${isOpen ? 'is-open' : ''}`,
    onClick: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: `tw-drawer ${isOpen ? 'is-open' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-drawer__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tw-drawer__title"
  }, "\u59D4\u8A17\u8A73\u60C5"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1.2 var(--tw-font-mono)',
      color: 'var(--tw-fg-4)',
      marginTop: 4
    }
  }, o.id)), /*#__PURE__*/React.createElement("button", {
    className: "tw-icon-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tw-drawer__body"
  }, order && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(StatusChip, {
    status: o.status
  })), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u4E0B\u55AE\u5E33\u865F"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, o.account || '—'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u5E02\u5834"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v is-sans"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: o.market.toLowerCase()
  }, o.market), " ", o.market === 'US' ? '美股' : '台股'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u80A1\u7968"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, o.sym, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tw-fg-4)',
      font: '400 13px/1 var(--tw-font-sans)'
    }
  }, "\u2014 ", o.name)), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u65B9\u5411"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v is-sans"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: o.side
  }, o.side === 'buy' ? 'BUY' : 'SELL'), " ", o.side === 'buy' ? '買進' : '賣出'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u6578\u91CF"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, o.qty?.toLocaleString(), " \u80A1"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u59D4\u8A17\u985E\u578B"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v is-sans"
  }, ORDER_TYPE_LABEL[o.type] || o.type), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u59D4\u8A17\u6548\u671F"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v is-sans"
  }, TIF_LABEL[o.time_in_force || 'rod']), o.price != null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u59D4\u8A17\u9650\u50F9"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, o.market === 'US' ? 'US$' : 'NT$', " ", o.price?.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u4E0B\u55AE\u6642\u9593"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, o.t)), o.fill_price != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: '12px 14px',
      background: 'var(--tw-buy-050)',
      border: '1px solid var(--tw-buy-100)',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--tw-font-sans)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--tw-buy-700)',
      marginBottom: 10
    }
  }, "\u6210\u4EA4\u8CC7\u8A0A Execution"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv",
    style: {
      gridTemplateColumns: '88px 1fr',
      rowGap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u6210\u4EA4\u50F9"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v",
    style: {
      fontWeight: 600
    }
  }, o.market === 'US' ? 'US$' : 'NT$', " ", Number(o.fill_price).toFixed(2)), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u6210\u4EA4\u6578\u91CF"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, Number(o.fill_qty ?? o.qty).toLocaleString(), " \u80A1"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u6210\u4EA4\u91D1\u984D"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v",
    style: {
      fontWeight: 600
    }
  }, o.market === 'US' ? 'US$' : 'NT$', " ", (Number(o.fill_price) * Number(o.fill_qty ?? o.qty)).toLocaleString('en-US', {
    minimumFractionDigits: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u6210\u4EA4\u6642\u9593"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, (o.fill_time || '').slice(0, 16).replace('T', ' ') || '—'))), /*#__PURE__*/React.createElement("hr", {
    className: "tw-hr"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--tw-font-sans)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--tw-fg-4)',
      marginBottom: 12
    }
  }, "\u8655\u7406\u9032\u5EA6 Timeline"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, timeline.map((t, i) => {
    const done = i <= order_status_index;
    const active = i === order_status_index && o.status !== 'filled';
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        gap: 12,
        padding: '10px 0',
        opacity: done ? 1 : 0.45
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: done ? 'var(--tw-buy-600)' : 'var(--tw-ink-200)',
        color: 'white',
        display: 'grid',
        placeItems: 'center',
        font: '600 11px/1 var(--tw-font-mono)',
        flexShrink: 0
      }
    }, done ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 12
    }) : i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 13px/1.4 var(--tw-font-sans)',
        color: 'var(--tw-fg-1)'
      }
    }, t.label), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 11px/1 var(--tw-font-mono)',
        color: 'var(--tw-fg-4)',
        marginTop: 4
      }
    }, t.t || (active ? '進行中…' : ''))));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tw-drawer__foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "phone"
  }, "\u806F\u7E6B\u5C08\u54E1"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "\u95DC\u9589"))));
}
window.OrderDetail = OrderDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer_portal/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer_portal/OrderTicket.jsx
try { (() => {
// ============================================================
// TeraWise Trade — Order ticket (5-step wizard)
// ============================================================
const STEP_LABELS = ['市場與股票', '買賣與類型', '數量與價格', '確認'];

// ── 交易日：產生未來 N 個工作日（排除周六日）──
const WEEKDAY_ZH = ['日', '一', '二', '三', '四', '五', '六'];
function getBusinessDays(n) {
  const days = [];
  const d = new Date();
  while (days.length < n) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {
      const y = d.getFullYear(),
        m = d.getMonth() + 1,
        dt = d.getDate();
      days.push({
        value: `${y}-${String(m).padStart(2, '0')}-${String(dt).padStart(2, '0')}`,
        label: `${y}/${m}/${dt}（周${WEEKDAY_ZH[dow]}）`
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return days;
}
function getDefaultTradeDate() {
  const d = new Date();
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  const m = d.getMonth() + 1,
    dt = d.getDate();
  return `${d.getFullYear()}-${String(m).padStart(2, '0')}-${String(dt).padStart(2, '0')}`;
}
function OrderTicket({
  initial,
  onCancel,
  onSubmit,
  clientId,
  clientName,
  accounts = [],
  orderBanks = []
}) {
  const [step, setStep] = useState(0);
  const [ticket, setTicket] = useState({
    market: 'US',
    symbol: 'AAPL',
    side: 'buy',
    type: 'limit',
    tif: 'rod',
    qty: 100,
    price: '',
    trade_date: getDefaultTradeDate(),
    account: accounts[0] || '',
    order_bank: orderBanks[0] || '',
    ...initial
  });
  const update = patch => setTicket(t => ({
    ...t,
    ...patch
  }));
  const quote = useMemo(() => findSym(ticket.symbol), [ticket.symbol]);
  // 系統目前無即時報價來源：僅限價單以客戶自訂價格估算金額；市價／開收盤單依實際成交價結算。
  const estimate = useMemo(() => {
    if (!TYPE_NEEDS_PRICE(ticket.type)) return null;
    return Number(ticket.price || 0) * Number(ticket.qty || 0);
  }, [ticket]);
  const next = () => setStep(s => Math.min(s + 1, STEP_LABELS.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));
  const needPrice = TYPE_NEEDS_PRICE(ticket.type);
  const stepValid = step === 0 ? !!ticket.account && !!String(ticket.symbol).trim() && !!ticket.order_bank : step === 2 ? Number(ticket.qty) > 0 && (!needPrice || Number(ticket.price) > 0) : true;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tw-page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "\u5EFA\u7ACB\u59D4\u8A17 New order"), /*#__PURE__*/React.createElement("div", {
    className: "tw-page-head__sub"
  }, "\u9001\u51FA\u524D\u5C07\u986F\u793A\u78BA\u8A8D\u9801\u9762\uFF0C\u907F\u514D\u8AA4\u9001\u3002")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "x",
    onClick: onCancel
  }, "\u53D6\u6D88\u4E0B\u55AE")), /*#__PURE__*/React.createElement(Steps, {
    items: STEP_LABELS,
    current: step
  }), /*#__PURE__*/React.createElement("div", {
    className: "tw-grid-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-card__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-card__title"
  }, STEP_LABELS[step]), /*#__PURE__*/React.createElement("div", {
    className: "tw-card__sub"
  }, "STEP ", step + 1, " / ", STEP_LABELS.length)), /*#__PURE__*/React.createElement("div", {
    className: "tw-card__body"
  }, step === 0 && /*#__PURE__*/React.createElement(StepMarketSymbol, {
    ticket: ticket,
    update: update,
    accounts: accounts,
    orderBanks: orderBanks
  }), step === 1 && /*#__PURE__*/React.createElement(StepSideType, {
    ticket: ticket,
    update: update
  }), step === 2 && /*#__PURE__*/React.createElement(StepQtyPrice, {
    ticket: ticket,
    update: update,
    quote: quote
  }), step === 3 && /*#__PURE__*/React.createElement(StepConfirm, {
    ticket: ticket,
    quote: quote,
    estimate: estimate,
    clientName: clientName
  })), /*#__PURE__*/React.createElement("div", {
    className: "tw-card__foot"
  }, step > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: back
  }, "\u8FD4\u56DE\u4E0A\u4E00\u6B65"), step < 3 && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: next,
    disabled: !stepValid
  }, "\u4E0B\u4E00\u6B65"), step === 3 && /*#__PURE__*/React.createElement(Button, {
    variant: ticket.side === 'buy' ? 'buy' : 'sell',
    size: "lg",
    onClick: () => onSubmit(ticket)
  }, "\u78BA\u8A8D\u9001\u51FA \xB7 ", ticket.side === 'buy' ? '買進' : '賣出'))), /*#__PURE__*/React.createElement(SidePreview, {
    ticket: ticket,
    quote: quote,
    estimate: estimate,
    step: step,
    clientName: clientName
  })));
}

// ---------- Step 0: market + symbol ----------
function StepMarketSymbol({
  ticket,
  update,
  accounts = [],
  orderBanks = []
}) {
  const [customMarket, setCustomMarket] = useState('');
  const [showCustom, setShowCustom] = useState(false);
  const handleMarketClick = code => {
    if (code === '__other__') {
      setShowCustom(true);
      return;
    }
    setShowCustom(false);
    update({
      market: code
    });
  };
  const applyCustom = () => {
    const v = customMarket.trim().toUpperCase();
    if (v) {
      update({
        market: v
      });
      setShowCustom(false);
    }
  };

  // Suggestions: US + TW stocks for now (extend per market as needed)
  const suggestions = SAMPLE_SYMBOLS.filter(s => s.market === ticket.market || ticket.market !== 'US' && ticket.market !== 'TW' && false);
  return /*#__PURE__*/React.createElement("div", {
    className: "tw-stack"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u4E0B\u55AE\u5E33\u865F Account",
    required: true,
    hint: "\u9078\u64C7\u672C\u6B21\u59D4\u8A17\u4F7F\u7528\u7684\u5238\u5546\u4EA4\u5272\u5E33\u865F"
  }, accounts.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, accounts.map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    onClick: () => update({
      account: a
    }),
    className: `tw-btn tw-btn--sm ${ticket.account === a ? 'tw-btn--primary' : 'tw-btn--secondary'}`,
    style: {
      fontFamily: 'var(--tw-font-mono)',
      fontWeight: 600,
      padding: '9px 14px',
      height: 'auto',
      ...(ticket.account === a ? {
        boxShadow: '0 0 0 2px var(--tw-navy-800)'
      } : {})
    }
  }, a))) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tw-sell-050)',
      border: '1px solid var(--tw-sell-100)',
      borderRadius: 4,
      padding: '10px 12px',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      font: 'var(--tw-text-small)',
      color: 'var(--tw-sell-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-triangle",
    size: 16,
    color: "var(--tw-sell-700)",
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", null, "\u60A8\u7684\u5E33\u6236\u5C1A\u672A\u8A2D\u5B9A\u4E0B\u55AE\u5E33\u865F\uFF0C\u8ACB\u806F\u7E6B\u60A8\u7684\u5C08\u54E1\u958B\u901A\u5F8C\u518D\u884C\u59D4\u8A17\u3002"))), /*#__PURE__*/React.createElement(Field, {
    label: "\u4E0B\u55AE\u9280\u884C Order Bank",
    required: true,
    hint: "\u9078\u64C7\u672C\u6B21\u59D4\u8A17\u7684\u4E0B\u55AE\u9280\u884C"
  }, orderBanks.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, orderBanks.map(b => /*#__PURE__*/React.createElement("button", {
    key: b,
    onClick: () => update({
      order_bank: b
    }),
    className: `tw-btn tw-btn--sm ${ticket.order_bank === b ? 'tw-btn--primary' : 'tw-btn--secondary'}`,
    style: {
      fontWeight: 600,
      padding: '9px 14px',
      height: 'auto',
      ...(ticket.order_bank === b ? {
        boxShadow: '0 0 0 2px var(--tw-navy-800)'
      } : {})
    }
  }, b))) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tw-sell-050)',
      border: '1px solid var(--tw-sell-100)',
      borderRadius: 4,
      padding: '10px 12px',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      font: 'var(--tw-text-small)',
      color: 'var(--tw-sell-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-triangle",
    size: 16,
    color: "var(--tw-sell-700)",
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", null, "\u60A8\u7684\u5E33\u6236\u5C1A\u672A\u8A2D\u5B9A\u4E0B\u55AE\u9280\u884C\uFF0C\u8ACB\u806F\u7E6B\u60A8\u7684\u5C08\u54E1\u8A2D\u5B9A\u5F8C\u518D\u884C\u59D4\u8A17\u3002"))), /*#__PURE__*/React.createElement(Field, {
    label: "\u5E02\u5834\u5225 Market",
    required: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 8
    }
  }, MARKETS.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.code,
    onClick: () => handleMarketClick(m.code),
    className: `tw-btn ${ticket.market === m.code ? 'tw-btn--primary' : 'tw-btn--secondary'} tw-btn--sm`,
    style: {
      flexDirection: 'column',
      gap: 2,
      padding: '10px 6px',
      height: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--tw-font-mono)'
    }
  }, m.code), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 10px/1.2 var(--tw-font-sans)',
      opacity: 0.75
    }
  }, m.label))), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleMarketClick('__other__'),
    className: `tw-btn tw-btn--sm ${showCustom ? 'tw-btn--primary' : 'tw-btn--secondary'}`,
    style: {
      flexDirection: 'column',
      gap: 2,
      padding: '10px 6px',
      height: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--tw-font-mono)'
    }
  }, "\u5176\u4ED6"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 10px/1.2 var(--tw-font-sans)',
      opacity: 0.75
    }
  }, "Custom"))), showCustom && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "tw-input is-mono",
    value: customMarket,
    onChange: e => setCustomMarket(e.target.value.toUpperCase()),
    placeholder: "\u81EA\u884C\u8F38\u5165\u5E02\u5834\u4EE3\u78BC (e.g. BR, MX, TR)",
    onKeyDown: e => e.key === 'Enter' && applyCustom()
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: applyCustom
  }, "\u78BA\u8A8D")), ticket.market && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 6,
      font: '500 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 13
  }), "\u5DF2\u9078\u53D6\uFF1A", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--tw-fg-1)',
      fontFamily: 'var(--tw-font-mono)'
    }
  }, ticket.market), MARKETS.find(m => m.code === ticket.market)?.label && /*#__PURE__*/React.createElement("span", null, "\u2014 ", MARKETS.find(m => m.code === ticket.market).label))), /*#__PURE__*/React.createElement(Field, {
    label: "\u80A1\u7968\u4EE3\u78BC Symbol",
    required: true,
    hint: "\u8F38\u5165\u4E0A\u5E02\u4EE3\u78BC\uFF0C\u4F8B\u5982 AAPL, NVDA, 2330.TW, 7203.T, 005930.KS"
  }, /*#__PURE__*/React.createElement("input", {
    className: "tw-input is-mono",
    value: ticket.symbol,
    onChange: e => update({
      symbol: e.target.value.toUpperCase()
    }),
    placeholder: "\u8F38\u5165\u80A1\u7968\u4EE3\u78BC"
  })), suggestions.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--tw-font-sans)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--tw-fg-4)',
      marginBottom: 10
    }
  }, "\u5E38\u7528 Quick select"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, suggestions.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.sym,
    onClick: () => update({
      symbol: s.sym
    }),
    className: `tw-btn tw-btn--sm ${ticket.symbol === s.sym ? 'tw-btn--primary' : 'tw-btn--secondary'}`,
    style: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 2,
      height: 'auto',
      padding: '8px 12px',
      minWidth: 100
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tw-font-mono)',
      fontWeight: 600,
      fontSize: 13
    }
  }, s.sym), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      fontFamily: 'var(--tw-font-sans)',
      fontWeight: 400,
      whiteSpace: 'nowrap'
    }
  }, s.name))))));
}

// ---------- Step 1: side + type ----------
function StepSideType({
  ticket,
  update
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tw-stack"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u8CB7\u8CE3\u65B9\u5411 Side",
    required: true
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [{
      value: 'buy',
      label: '買進 BUY',
      tone: 'buy'
    }, {
      value: 'sell',
      label: '賣出 SELL',
      tone: 'sell'
    }],
    value: ticket.side,
    onChange: v => update({
      side: v
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u59D4\u8A17\u985E\u578B Order type",
    required: true,
    hint: "\u9650\u50F9\u55AE\u65BC\u6307\u5B9A\u50F9\u683C\u6216\u66F4\u4F73\u6210\u4EA4\uFF1B\u5E02\u50F9\u55AE\u4EE5\u6700\u4F73\u50F9\u683C\u7ACB\u5373\u6210\u4EA4\uFF1B\u958B\u76E4\uFF0F\u6536\u76E4\u50F9\u65BC\u7576\u65E5\u96C6\u5408\u7AF6\u50F9\u6210\u4EA4"
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [{
      value: 'limit',
      label: '限價'
    }, {
      value: 'market',
      label: '市價'
    }, {
      value: 'at_open',
      label: '開盤價'
    }, {
      value: 'at_close',
      label: '收盤價'
    }],
    value: ticket.type,
    onChange: v => update({
      type: v
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u59D4\u8A17\u6548\u671F Time in force",
    required: true,
    hint: "ROD \u7576\u65E5\u6709\u6548\uFF1BIOC \u7ACB\u5373\u6210\u4EA4\u5426\u5247\u53D6\u6D88\uFF1BFOK \u5168\u90E8\u6210\u4EA4\u5426\u5247\u53D6\u6D88"
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [{
      value: 'rod',
      label: 'ROD 當日'
    }, {
      value: 'ioc',
      label: 'IOC'
    }, {
      value: 'fok',
      label: 'FOK'
    }],
    value: ticket.tif || 'rod',
    onChange: v => update({
      tif: v
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tw-navy-050)',
      border: '1px solid var(--tw-navy-100)',
      borderRadius: 4,
      padding: '12px 14px',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      font: 'var(--tw-text-small)',
      color: 'var(--tw-fg-2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16,
    color: "var(--tw-navy-500)",
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", null, "\u59D4\u8A17\u9001\u51FA\u5F8C\u50C5", /*#__PURE__*/React.createElement("strong", null, "\u5F8C\u53F0\u4EBA\u54E1"), "\u53EF\u5354\u52A9\u53D6\u6D88\uFF0C\u5BA2\u6236\u7AEF\u66AB\u4E0D\u958B\u653E\u81EA\u52A9\u53D6\u6D88\u3002 \u5982\u9700\u53D6\u6D88\u8ACB\u806F\u7E6B\u5C08\u54E1\u3002")));
}

// ---------- Step 2: qty + price ----------
function StepQtyPrice({
  ticket,
  update,
  quote
}) {
  const needsPrice = TYPE_NEEDS_PRICE(ticket.type);
  return /*#__PURE__*/React.createElement("div", {
    className: "tw-stack"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u4EA4\u6613\u65E5 Trade Date",
    required: true
  }, /*#__PURE__*/React.createElement("select", {
    className: "tw-input",
    style: {
      fontFamily: 'var(--tw-font-mono)'
    },
    value: ticket.trade_date || '',
    onChange: e => update({
      trade_date: e.target.value
    })
  }, getBusinessDays(10).map(d => /*#__PURE__*/React.createElement("option", {
    key: d.value,
    value: d.value
  }, d.label)))), quote && /*#__PURE__*/React.createElement("div", {
    className: "tw-quote-strip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sym"
  }, quote.sym), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tw-fg-3)',
      font: '500 12px/1 var(--tw-font-sans)'
    }
  }, quote.name)), /*#__PURE__*/React.createElement("div", {
    className: needsPrice ? 'tw-grid-form-2' : ''
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u6578\u91CF Quantity (\u80A1)",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    className: "tw-input is-mono",
    value: ticket.qty,
    onChange: e => update({
      qty: e.target.value.replace(/[^\d]/g, '')
    })
  })), needsPrice && /*#__PURE__*/React.createElement(Field, {
    label: "\u9650\u50F9 Limit Price",
    required: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-input--prefix-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "prefix"
  }, ticket.market === 'US' ? 'US$' : 'NT$'), /*#__PURE__*/React.createElement("input", {
    className: "tw-input is-mono",
    value: ticket.price,
    onChange: e => update({
      price: e.target.value
    }),
    placeholder: "\u8F38\u5165\u60A8\u7684\u9650\u5B9A\u50F9\u683C"
  })))), !needsPrice && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tw-navy-050)',
      border: '1px solid var(--tw-navy-100)',
      borderRadius: 4,
      padding: '12px 14px',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      font: 'var(--tw-text-small)',
      color: 'var(--tw-fg-2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16,
    color: "var(--tw-navy-500)",
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", null, ORDER_TYPE_SHORT[ticket.type], "\u55AE\u4F9D\u5E02\u5834\u6700\u4F73\u50F9\u683C\u6210\u4EA4\uFF0C\u7121\u9700\u6307\u5B9A\u50F9\u683C\u3002\u5BE6\u969B\u6210\u4EA4\u50F9\u5C07\u65BC\u5F8C\u53F0\u56DE\u5831\u5F8C\u986F\u793A\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 8
    }
  }, [10, 50, 100, 500].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    className: "tw-btn tw-btn--secondary tw-btn--sm",
    onClick: () => update({
      qty: n
    })
  }, n.toLocaleString(), " \u80A1"))));
}

// ---------- Step 3: confirm ----------
function StepConfirm({
  ticket,
  quote,
  estimate,
  clientName
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: ticket.side === 'buy' ? 'var(--tw-buy-050)' : 'var(--tw-sell-050)',
      border: `1px solid ${ticket.side === 'buy' ? 'var(--tw-buy-100)' : 'var(--tw-sell-100)'}`,
      borderLeft: `3px solid ${ticket.side === 'buy' ? 'var(--tw-buy-600)' : 'var(--tw-sell-600)'}`,
      borderRadius: 4,
      padding: '12px 14px',
      marginBottom: 16,
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      font: 'var(--tw-text-small)',
      color: 'var(--tw-fg-1)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-triangle",
    size: 16,
    color: ticket.side === 'buy' ? 'var(--tw-buy-700)' : 'var(--tw-sell-700)'
  }), /*#__PURE__*/React.createElement("div", null, "\u8ACB\u4ED4\u7D30\u6838\u5C0D\u4E0B\u65B9\u59D4\u8A17\u5167\u5BB9\u3002\u9001\u51FA\u5F8C\u5C07\u63D0\u4EA4\u81F3\u5F8C\u53F0\u8655\u7406\uFF0C", /*#__PURE__*/React.createElement("strong", null, "\u7121\u6CD5\u7531\u5BA2\u6236\u7AEF\u81EA\u884C\u53D6\u6D88"), "\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u6236\u540D"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v",
    style: {
      fontWeight: 600
    }
  }, clientName || '—'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u4E0B\u55AE\u5E33\u865F"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, ticket.account || '—'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u4E0B\u55AE\u9280\u884C"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, ticket.order_bank || '—'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u4EA4\u6613\u65E5"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, ticket.trade_date ? ticket.trade_date.replace(/-/g, '/') : '—'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u5E02\u5834"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v is-sans"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: ticket.market.toLowerCase()
  }, ticket.market), ticket.market === 'US' ? '美股 · US Equities' : '台股 · TW Equities'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u80A1\u7968"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, ticket.symbol, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.6 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)'
    }
  }, "\u2014 ", quote?.name ?? '—')), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u65B9\u5411"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v is-sans"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: ticket.side
  }, ticket.side === 'buy' ? 'BUY' : 'SELL'), " ", ticket.side === 'buy' ? '買進' : '賣出'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u6578\u91CF"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, Number(ticket.qty).toLocaleString(), " \u80A1"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u59D4\u8A17\u985E\u578B"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v is-sans"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, ORDER_TYPE_LABEL[ticket.type] || ticket.type)), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u59D4\u8A17\u6548\u671F"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v is-sans"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, TIF_LABEL[ticket.tif || 'rod'])), TYPE_NEEDS_PRICE(ticket.type) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u9650\u50F9"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, ticket.market === 'US' ? 'US$' : 'NT$', " ", Number(ticket.price).toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u9810\u4F30\u91D1\u984D"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v",
    style: {
      fontWeight: 600
    }
  }, estimate == null ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.6 var(--tw-font-sans)',
      color: 'var(--tw-fg-3)'
    }
  }, "\u4F9D\u5E02\u5834\u6210\u4EA4\u50F9\u7D50\u7B97") : `${ticket.market === 'US' ? 'US$' : 'NT$'} ${estimate.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`)));
}

// ---------- Step 4: submitted ----------
function StepSubmitted({
  ticket
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '28px 12px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      margin: '0 auto 16px',
      background: 'var(--tw-buy-100)',
      color: 'var(--tw-buy-700)',
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--tw-text-h3)',
      color: 'var(--tw-fg-1)',
      marginBottom: 6
    }
  }, "\u59D4\u8A17\u5DF2\u9001\u51FA"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--tw-text-small)',
      color: 'var(--tw-fg-3)',
      marginBottom: 20
    }
  }, "\u5F8C\u53F0\u4EBA\u54E1\u5C07\u65BC\u6578\u5206\u9418\u5167\u63A5\u55AE\u4E26\u66F4\u65B0\u72C0\u614B\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 12,
      alignItems: 'center',
      padding: '10px 16px',
      background: 'var(--tw-navy-050)',
      border: '1px solid var(--tw-navy-100)',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      letterSpacing: '0.04em'
    }
  }, "ORDER ID"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 14px/1 var(--tw-font-mono)'
    }
  }, "OR-20250218-0145")));
}

// ---------- Side preview (always-visible summary) ----------
function SidePreview({
  ticket,
  quote,
  estimate,
  step,
  clientName
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tw-card",
    style: {
      alignSelf: 'flex-start',
      position: 'sticky',
      top: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-card__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-card__title"
  }, "\u59D4\u8A17\u9810\u89BD Order preview"), /*#__PURE__*/React.createElement(Badge, {
    tone: ticket.side
  }, ticket.side === 'buy' ? 'BUY' : 'SELL')), /*#__PURE__*/React.createElement("div", {
    className: "tw-card__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-kv",
    style: {
      gridTemplateColumns: '90px 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u6236\u540D"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v",
    style: {
      fontWeight: 600
    }
  }, clientName || '—'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u5E33\u865F"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, ticket.account || '—'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u9280\u884C"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, ticket.order_bank || '—'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u5E02\u5834"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v is-sans"
  }, ticket.market === 'US' ? '美股' : '台股'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u80A1\u7968"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, ticket.symbol || '—'), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u985E\u578B"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v is-sans"
  }, ORDER_TYPE_SHORT[ticket.type] || ticket.type), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u6548\u671F"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v is-sans"
  }, TIF_SHORT[ticket.tif || 'rod']), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u6578\u91CF"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, Number(ticket.qty || 0).toLocaleString(), " \u80A1"), TYPE_NEEDS_PRICE(ticket.type) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__k"
  }, "\u9650\u50F9"), /*#__PURE__*/React.createElement("div", {
    className: "tw-kv__v"
  }, ticket.market === 'US' ? 'US$' : 'NT$', " ", Number(ticket.price || 0).toFixed(2)))), /*#__PURE__*/React.createElement("hr", {
    className: "tw-hr"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, "\u9810\u4F30\u91D1\u984D"), estimate == null ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1.3 var(--tw-font-sans)',
      color: 'var(--tw-fg-3)'
    }
  }, "\u4F9D\u5E02\u5834\u6210\u4EA4\u50F9") : /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 22px/1.1 var(--tw-font-mono)',
      color: 'var(--tw-fg-1)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, ticket.market === 'US' ? 'US$' : 'NT$', " ", estimate.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))));
}
window.OrderTicket = OrderTicket;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer_portal/OrderTicket.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer_portal/TopNav.jsx
try { (() => {
// ============================================================
// TeraWise Trade — Top nav
// ============================================================
function TopNav({
  route,
  onNav,
  userName,
  onLogout
}) {
  const [now, setNow] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPw, setShowPw] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const hh = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  const us = marketStatus('US', now);
  const tw = marketStatus('TW', now);
  const links = [{
    id: 'dashboard',
    label: '總覽 Overview'
  }, {
    id: 'order',
    label: '下單 Trade'
  }];
  const initials = userName ? userName.slice(-2) : 'YC';
  return /*#__PURE__*/React.createElement("header", {
    className: "tw-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-nav__brand"
  }, /*#__PURE__*/React.createElement(BrandMark, {
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    className: "tw-nav__wordmark"
  }, "TeraWise ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7,
      fontWeight: 400
    }
  }, "Trade"))), /*#__PURE__*/React.createElement("div", {
    className: "tw-nav__divider"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "tw-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    className: `tw-nav__link ${route === l.id ? 'is-active' : ''}`,
    onClick: () => onNav(l.id)
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "tw-nav__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tw-nav__clock"
  }, /*#__PURE__*/React.createElement("span", {
    className: `tw-nav__market ${us.open ? '' : 'closed'}`,
    title: `美股交易時間：${usHoursTW(now)}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " NYSE \xB7 ", us.open ? 'OPEN' : 'CLOSED'), /*#__PURE__*/React.createElement("span", {
    className: `tw-nav__market ${tw.open ? '' : 'closed'}`,
    title: "\u53F0\u80A1\u4EA4\u6613\u6642\u9593\uFF1A09:00\u201313:30\uFF08\u53F0\u7063\uFF09"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " TWSE \xB7 ", tw.open ? 'OPEN' : 'CLOSED'), /*#__PURE__*/React.createElement("span", null, hh, " HKT")), /*#__PURE__*/React.createElement("div", {
    className: "tw-nav__profile-wrap",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tw-nav__profile",
    onClick: () => setMenuOpen(o => !o),
    title: "\u5E33\u865F\u9078\u55AE"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-avatar"
  }, initials), /*#__PURE__*/React.createElement("span", null, userName), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    style: {
      opacity: 0.6
    }
  })), menuOpen && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setMenuOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      right: 0,
      minWidth: 180,
      background: 'white',
      borderRadius: 6,
      boxShadow: 'var(--tw-shadow-3)',
      border: '1px solid var(--tw-border)',
      overflow: 'hidden',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMenuOpen(false);
      setShowPw(true);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '11px 14px',
      border: 'none',
      background: 'white',
      cursor: 'pointer',
      font: '500 13px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)',
      textAlign: 'left'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--tw-ink-050)',
    onMouseLeave: e => e.currentTarget.style.background = 'white'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "key",
    size: 14,
    style: {
      opacity: 0.7
    }
  }), " \u66F4\u6539\u5BC6\u78BC"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--tw-border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMenuOpen(false);
      onLogout();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '11px 14px',
      border: 'none',
      background: 'white',
      cursor: 'pointer',
      font: '500 13px/1 var(--tw-font-sans)',
      color: 'var(--tw-sell-700)',
      textAlign: 'left'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--tw-sell-050)',
    onMouseLeave: e => e.currentTarget.style.background = 'white'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 14,
    style: {
      opacity: 0.7
    }
  }), " \u767B\u51FA")))), showPw && /*#__PURE__*/React.createElement(ChangePasswordModal, {
    onClose: () => setShowPw(false)
  }));
}
window.TopNav = TopNav;

// ── Change Password Modal ──────────────────────────────────
function ChangePasswordModal({
  onClose
}) {
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const [err, setErr] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSave = async () => {
    if (pw1.length < 6) {
      setErr('密碼至少需 6 位。');
      return;
    }
    if (pw1 !== pw2) {
      setErr('兩次輸入的密碼不一致。');
      return;
    }
    setErr('');
    setLoading(true);
    const {
      error
    } = await sb.auth.updateUser({
      password: pw1
    });
    if (error) {
      setErr('更新失敗：' + error.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    setDone(true);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(11,22,40,0.45)',
      zIndex: 200
    },
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      background: 'white',
      borderRadius: 8,
      width: 360,
      padding: 28,
      boxShadow: 'var(--tw-shadow-3)',
      zIndex: 210
    }
  }, done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--tw-status-filled-bg)',
      color: 'var(--tw-status-filled-fg)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1.3 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)'
    }
  }, "\u5BC6\u78BC\u5DF2\u66F4\u65B0")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose
  }, "\u5B8C\u6210"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)',
      marginBottom: 20
    }
  }, "\u66F4\u6539\u5BC6\u78BC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "\u65B0\u5BC6\u78BC\uFF08\u81F3\u5C11 6 \u4F4D\uFF09"), /*#__PURE__*/React.createElement("input", {
    className: "tw-input",
    type: "password",
    value: pw1,
    onChange: e => setPw1(e.target.value),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
    autoComplete: "new-password"
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "\u78BA\u8A8D\u65B0\u5BC6\u78BC"), /*#__PURE__*/React.createElement("input", {
    className: "tw-input",
    type: "password",
    value: pw2,
    onChange: e => setPw2(e.target.value),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
    autoComplete: "new-password"
  })), err && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-sell-700)',
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 13
  }), " ", err)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose,
    disabled: loading
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: handleSave,
    disabled: loading
  }, loading ? '更新中…' : '儲存')))));
}
window.ChangePasswordModal = ChangePasswordModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer_portal/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer_portal/components.jsx
try { (() => {
// ============================================================
// TeraWise Trade — Customer Portal · atoms & shared bits
// ============================================================

const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;

// ----- Brand mark (inline SVG of the wheat-leaf, for header use) -----
// Recreated to match the logo: 3 stacked chevron-V wheat rows where each
// row = 2 angled wedge leaves meeting at the bottom, with a notch at top.
// On a brown stem with a horizontal ground bar.
function BrandMark({
  size = 22,
  color = 'var(--tw-gold-500)',
  stem = '#8B4A24'
}) {
  // Each row: a pair of wedge polygons. Params: bottom apex y (by), outer top width (w),
  // top y (ty), gap between inner tops (gap)
  const Row = ({
    by,
    w,
    ty,
    gap
  }) => /*#__PURE__*/React.createElement("g", {
    fill: color
  }, /*#__PURE__*/React.createElement("polygon", {
    points: `32,${by} ${32 - w},${ty + 2} ${32 - gap / 2},${ty}`
  }), /*#__PURE__*/React.createElement("polygon", {
    points: `32,${by} ${32 + w},${ty + 2} ${32 + gap / 2},${ty}`
  }));
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    width: size,
    height: size,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    by: 22,
    w: 8,
    ty: 11,
    gap: 4
  }), /*#__PURE__*/React.createElement(Row, {
    by: 34,
    w: 10,
    ty: 22,
    gap: 5
  }), /*#__PURE__*/React.createElement(Row, {
    by: 46,
    w: 12,
    ty: 33,
    gap: 6
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30.5",
    y: "46",
    width: "3",
    height: "10",
    fill: stem
  }), /*#__PURE__*/React.createElement("rect", {
    x: "19",
    y: "55",
    width: "26",
    height: "2.5",
    fill: stem
  }));
}

// ----- Lucide icon wrapper (uses Lucide's own API — version-agnostic, no React DOM conflict) -----
function Icon({
  name,
  size = 16,
  color,
  style
}) {
  const iconName = name.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
  const lc = window.lucide;
  if (!lc || !lc[iconName]) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: size,
        height: size,
        ...style
      }
    });
  }
  let svgHtml = '';
  try {
    if (typeof lc.createElement === 'function') {
      const el = lc.createElement(lc[iconName], {
        width: size,
        height: size,
        'stroke-width': 1.5
      });
      svgHtml = el.outerHTML;
    } else {
      const kids = Array.isArray(lc[iconName][0]) ? lc[iconName] : lc[iconName][2] || [];
      const childStr = kids.map(child => {
        if (!Array.isArray(child)) return '';
        const [tag, attrs] = child;
        const a = Object.entries(attrs || {}).filter(([k]) => k !== 'key').map(([k, v]) => `${k}="${v}"`).join(' ');
        return `<${tag} ${a}/>`;
      }).join('');
      svgHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${childStr}</svg>`;
    }
  } catch (e) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: size,
        height: size,
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svgHtml
    }
  });
}

// ----- Button -----
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  onClick,
  disabled,
  type = 'button',
  style,
  full
}) {
  const cls = ['tw-btn', `tw-btn--${variant}`, `tw-btn--${size}`, full && 'tw-btn--full', disabled && 'is-disabled'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    className: cls,
    onClick: onClick,
    disabled: disabled,
    style: style
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === 'sm' ? 14 : 16
  }), /*#__PURE__*/React.createElement("span", null, children));
}

// ----- Field wrapper -----
function Field({
  label,
  required,
  hint,
  error,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "tw-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tw-field__label"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "tw-field__req"
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "tw-field__err"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "tw-field__hint"
  }, hint));
}

// ----- Segmented control -----
function Segmented({
  options,
  value,
  onChange,
  tone
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `tw-seg ${tone ? 'tw-seg--' + tone : ''}`
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    className: `tw-seg__btn ${value === o.value ? 'is-on' : ''} ${o.tone ? 'tw-seg__btn--' + o.tone : ''}`,
    onClick: () => onChange(o.value)
  }, o.label)));
}

// ----- Status chip -----
const STATUS_LABEL = {
  pending: '送出委託',
  accepted: '已接單',
  filled: '完成',
  rejected: '失敗'
};
function StatusChip({
  status
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `tw-chip tw-chip--${status}`
  }, STATUS_LABEL[status]);
}

// ----- Order type & time-in-force labels -----
const ORDER_TYPE_LABEL = {
  limit: '限價 LIMIT',
  market: '市價 MARKET',
  at_open: '開盤價 @market open price',
  at_close: '收盤價 @market close price'
};
const ORDER_TYPE_SHORT = {
  limit: '限價',
  market: '市價',
  at_open: '@market open',
  at_close: '@market close'
};
const TIF_LABEL = {
  rod: 'ROD 當日有效',
  ioc: 'IOC 立即成交否則取消',
  fok: 'FOK 全部成交否則取消'
};
const TIF_SHORT = {
  rod: 'ROD',
  ioc: 'IOC',
  fok: 'FOK'
};
// Only limit orders carry a client-specified price
const TYPE_NEEDS_PRICE = t => t === 'limit';

// ----- Attribute badge -----
function Badge({
  tone = 'neutral',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `tw-badge tw-badge--${tone}`
  }, children);
}

// ----- Number cell (tabular) -----
function Num({
  value,
  sign,
  prefix,
  suffix,
  decimals = 2
}) {
  const isNeg = Number(value) < 0;
  const cls = sign ? isNeg ? 'tw-num is-down' : 'tw-num is-up' : 'tw-num';
  const v = typeof value === 'number' ? value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }) : value;
  const explicit = sign && !isNeg ? '+' : '';
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, prefix, explicit, v, suffix);
}

// ----- Step indicator (wizard) -----
function Steps({
  items,
  current
}) {
  return /*#__PURE__*/React.createElement("ol", {
    className: "tw-steps"
  }, items.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s,
    className: `tw-steps__item ${i < current ? 'is-done' : ''} ${i === current ? 'is-active' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "tw-steps__dot"
  }, i < current ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }) : i + 1), /*#__PURE__*/React.createElement("span", {
    className: "tw-steps__label"
  }, s))));
}

// ----- Toast -----
function Toast({
  tone = 'success',
  children,
  onClose
}) {
  useEffect(() => {
    const t = setTimeout(() => onClose && onClose(), 4500);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: `tw-toast tw-toast--${tone}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: tone === 'success' ? 'check-circle-2' : 'alert-triangle',
    size: 18
  }), /*#__PURE__*/React.createElement("div", null, children), /*#__PURE__*/React.createElement("button", {
    className: "tw-toast__close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  })));
}

// ============================================================
// Market color conventions (market-aware up/down)
// ============================================================
const MARKETS = [{
  code: 'TW',
  label: '台灣',
  flag: '🇹🇼',
  conv: 'east'
}, {
  code: 'US',
  label: '美國',
  flag: '🇺🇸',
  conv: 'west'
}, {
  code: 'CN',
  label: '中國 A 股',
  flag: '🇨🇳',
  conv: 'east'
}, {
  code: 'HK',
  label: '香港',
  flag: '🇭🇰',
  conv: 'east'
}, {
  code: 'JP',
  label: '日本',
  flag: '🇯🇵',
  conv: 'jp'
}, {
  code: 'KR',
  label: '韓國',
  flag: '🇰🇷',
  conv: 'kr'
}, {
  code: 'UK',
  label: '英國',
  flag: '🇬🇧',
  conv: 'west'
}, {
  code: 'EU',
  label: '歐洲',
  flag: '🇪🇺',
  conv: 'west'
}, {
  code: 'CA',
  label: '加拿大',
  flag: '🇨🇦',
  conv: 'west'
}, {
  code: 'AU',
  label: '澳洲',
  flag: '🇦🇺',
  conv: 'west'
}, {
  code: 'SG',
  label: '新加坡',
  flag: '🇸🇬',
  conv: 'east'
}, {
  code: 'IN',
  label: '印度',
  flag: '🇮🇳',
  conv: 'west'
}];

// Returns { up: cssColor, down: cssColor } for a given market code
function getMarketColors(marketCode) {
  const m = MARKETS.find(x => x.code === marketCode);
  const conv = m?.conv ?? 'west';
  switch (conv) {
    case 'east':
      return {
        up: 'var(--tw-red-600)',
        down: 'var(--tw-green-600)'
      };
    case 'jp':
      return {
        up: 'var(--tw-red-600)',
        down: 'var(--tw-blue-dn-600)'
      };
    case 'kr':
      return {
        up: 'var(--tw-red-600)',
        down: 'var(--tw-blue-dn-600)'
      };
    default:
      return {
        up: 'var(--tw-green-600)',
        down: 'var(--tw-red-600)'
      };
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
    timeZone: tz,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(d).reduce((a, x) => (a[x.type] = x.value, a), {});
  const weekend = p.weekday === 'Sat' || p.weekday === 'Sun';
  const mins = Number(p.hour) % 24 * 60 + Number(p.minute);
  let open = false;
  if (code === 'US') open = !weekend && mins >= 570 && mins < 960; // 09:30–16:00 ET
  else if (code === 'TW') open = !weekend && mins >= 540 && mins < 810; // 09:00–13:30
  return {
    open,
    label: open ? '交易中' : '已收盤'
  };
}
// 美股交易時間（台灣時間）說明，依夏令/冬令切換
function usHoursTW(d = new Date()) {
  const offName = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    timeZoneName: 'short'
  }).formatToParts(d).find(x => x.type === 'timeZoneName')?.value || '';
  const dst = offName.includes('DT'); // EDT = 夏令
  return dst ? '夏令 21:30–04:00（台灣）' : '冬令 22:30–05:00（台灣）';
}

// Delta chip with market-aware color
function DeltaChip({
  value,
  market
}) {
  const colors = getMarketColors(market);
  const isUp = Number(value) >= 0;
  const color = isUp ? colors.up : colors.down;
  const sign = isUp ? '+' : '';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--tw-font-mono)',
      fontWeight: 600,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      color
    }
  }, sign, typeof value === 'number' ? value.toFixed(2) + '%' : value);
}

// ============================================================
// Login screen
// ============================================================
function LoginScreen({
  onLogin
}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    if (!email.trim() || !pass.trim()) {
      setErr('請填寫 Email 與密碼。');
      return;
    }
    setErr('');
    setLoading(true);
    try {
      const res = await fetch('https://yecijqecmabjtgpwfroy.supabase.co/auth/v1/token?grant_type=password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'sb_publishable_WpuOkrhxrKQWCbgOosVcWQ_VJyJWCVi'
        },
        body: JSON.stringify({
          email: email.trim(),
          password: pass
        })
      });
      const data = await res.json();
      if (!res.ok) {
        setErr(data.error_description || data.msg || data.error || `Error ${res.status}`);
        setLoading(false);
        return;
      }
      await sb.auth.setSession({
        access_token: data.access_token,
        refresh_token: data.refresh_token
      });
    } catch (err) {
      setErr(err.message);
      setLoading(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--tw-navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--tw-font-sans)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 26px/1.1 var(--tw-font-serif)',
      color: 'white',
      marginTop: 12,
      letterSpacing: '-0.01em'
    }
  }, "TeraWise Capital"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10px/1 var(--tw-font-sans)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--tw-gold-400)',
      marginTop: 8
    }
  }, "YOUR MOST RELIABLE PARTNER")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: 6,
      padding: '28px 28px 24px',
      boxShadow: 'var(--tw-shadow-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-1)',
      marginBottom: 4
    }
  }, "\u767B\u5165\u5E33\u865F"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      marginBottom: 22
    }
  }, "TeraWise Trade \u5BA2\u6236\u59D4\u8A17\u5165\u53E3"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    className: "tw-input",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "your@email.com",
    autoComplete: "email"
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--tw-font-sans)',
      color: 'var(--tw-fg-2)'
    }
  }, "\u5BC6\u78BC"), /*#__PURE__*/React.createElement("input", {
    className: "tw-input",
    type: "password",
    value: pass,
    onChange: e => setPass(e.target.value),
    placeholder: "\u8ACB\u8F38\u5165\u5BC6\u78BC",
    autoComplete: "current-password"
  })), err && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-sell-700)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 14
  }), " ", err), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: `tw-btn tw-btn--primary tw-btn--full tw-btn--lg ${loading ? 'is-disabled' : ''}`,
    disabled: loading,
    style: {
      marginTop: 4
    }
  }, loading ? '登入中…' : '登入')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 16,
      borderTop: '1px solid var(--tw-border-subtle)',
      font: '400 12px/1.4 var(--tw-font-sans)',
      color: 'var(--tw-fg-4)',
      textAlign: 'center'
    }
  }, "\u5E33\u865F\u7531\u5C08\u54E1\u4EE3\u70BA\u5EFA\u7ACB\uFF0C\u5FD8\u8A18\u5BC6\u78BC\u8ACB\u806F\u7E6B\u60A8\u7684\u5C08\u54E1\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      textAlign: 'center',
      font: '500 11px/1.4 var(--tw-font-sans)',
      color: 'rgba(255,255,255,0.3)'
    }
  }, "\xA9 2025 TeraWise Capital \xB7 ESTD 2022")));
}

// Expose globally for other Babel scripts
Object.assign(window, {
  BrandMark,
  Icon,
  Button,
  Field,
  Segmented,
  StatusChip,
  Badge,
  Num,
  Steps,
  Toast,
  STATUS_LABEL,
  MARKETS,
  getMarketColors,
  DeltaChip,
  LoginScreen,
  marketStatus,
  usHoursTW,
  ORDER_TYPE_LABEL,
  ORDER_TYPE_SHORT,
  TIF_LABEL,
  TIF_SHORT,
  TYPE_NEEDS_PRICE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer_portal/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer_portal/data.jsx
try { (() => {
// ============================================================
// TeraWise Trade — Sample data (stubbed quotes & orders)
// ============================================================
const SAMPLE_SYMBOLS = [
// US stocks
{
  sym: 'AAPL',
  name: '蘋果 Apple',
  market: 'US',
  last: 227.63,
  chg: 0.84,
  pct: 0.37
}, {
  sym: 'NVDA',
  name: '輝達 NVIDIA',
  market: 'US',
  last: 129.84,
  chg: -2.41,
  pct: -1.83
}, {
  sym: 'MSFT',
  name: '微軟 Microsoft',
  market: 'US',
  last: 416.20,
  chg: 1.52,
  pct: 0.37
}, {
  sym: 'TSLA',
  name: '特斯拉 Tesla',
  market: 'US',
  last: 354.40,
  chg: 5.10,
  pct: 1.46
}, {
  sym: 'AMZN',
  name: '亞馬遜 Amazon',
  market: 'US',
  last: 224.18,
  chg: 0.60,
  pct: 0.27
}, {
  sym: 'GOOGL',
  name: 'Google Alphabet',
  market: 'US',
  last: 196.45,
  chg: -1.20,
  pct: -0.61
}, {
  sym: 'META',
  name: 'Meta 元宇宙',
  market: 'US',
  last: 726.50,
  chg: 8.30,
  pct: 1.16
}, {
  sym: 'NFLX',
  name: '網飛 Netflix',
  market: 'US',
  last: 1025.30,
  chg: 3.80,
  pct: 0.37
}, {
  sym: 'AMD',
  name: '超微半導體 AMD',
  market: 'US',
  last: 118.42,
  chg: -1.58,
  pct: -1.32
}, {
  sym: 'AVGO',
  name: '博通 Broadcom',
  market: 'US',
  last: 244.66,
  chg: 2.10,
  pct: 0.87
},
// TW stocks
{
  sym: '2330.TW',
  name: '台積電 TSMC',
  market: 'TW',
  last: 1135.00,
  chg: 25.00,
  pct: 2.25
}, {
  sym: '2317.TW',
  name: '鴻海 Hon Hai',
  market: 'TW',
  last: 184.50,
  chg: 1.50,
  pct: 0.82
}, {
  sym: '2454.TW',
  name: '聯發科 MediaTek',
  market: 'TW',
  last: 1485.00,
  chg: -10.00,
  pct: -0.67
}, {
  sym: '2303.TW',
  name: '聯電 UMC',
  market: 'TW',
  last: 56.10,
  chg: 0.30,
  pct: 0.54
}, {
  sym: '2308.TW',
  name: '台達電 Delta',
  market: 'TW',
  last: 382.00,
  chg: -3.00,
  pct: -0.78
}, {
  sym: '2412.TW',
  name: '中華電信 Chunghwa',
  market: 'TW',
  last: 120.50,
  chg: 0.50,
  pct: 0.42
}, {
  sym: '2382.TW',
  name: '廣達 Quanta',
  market: 'TW',
  last: 318.00,
  chg: 4.00,
  pct: 1.27
}, {
  sym: '2881.TW',
  name: '富邦金 Fubon',
  market: 'TW',
  last: 102.50,
  chg: -0.50,
  pct: -0.49
}, {
  sym: '2882.TW',
  name: '國泰金 Cathay',
  market: 'TW',
  last: 68.80,
  chg: 0.20,
  pct: 0.29
}, {
  sym: '0050.TW',
  name: '元大台灣50 ETF',
  market: 'TW',
  last: 208.40,
  chg: 2.80,
  pct: 1.36
}];
const findSym = q => SAMPLE_SYMBOLS.find(s => s.sym.toUpperCase() === q.toUpperCase());
window.SAMPLE_SYMBOLS = SAMPLE_SYMBOLS;
window.findSym = findSym;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer_portal/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/customer_portal/supabase.js
try { (() => {
// ============================================================
// TeraWise · Supabase Client (Customer Portal)
// Loaded as a plain <script> before any Babel/JSX files.
// ============================================================
(function () {
  var SUPABASE_URL = 'https://yecijqecmabjtgpwfroy.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_WpuOkrhxrKQWCbgOosVcWQ_VJyJWCVi';
  var createClient = window.supabase.createClient;
  window.sb = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
      storage: window.localStorage,
      storageKey: 'terawise-cp-auth' // 客戶端專用，保持登入、避免自動登出
    }
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/customer_portal/supabase.js", error: String((e && e.message) || e) }); }

})();
