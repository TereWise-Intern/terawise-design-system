# TeraWise Trade — Customer Portal (UI kit)

Web-app prototype where retail clients submit TW / US equity orders.

**Click-through flow:** Dashboard → Order Ticket (5-step wizard) → Confirmation → Order list with live status chips.

## Files

- `index.html` — entry. Loads React + Babel + all components below.
- `App.jsx` — shell + routing between screens (no real router; useState).
- `TopNav.jsx` — fixed header with brand lockup, market clock, profile menu.
- `Dashboard.jsx` — landing: watchlist, recent orders, "Place Order" entry.
- `OrderTicket.jsx` — 5-step wizard (market → symbol → side → qty → price/type).
- `OrderConfirm.jsx` — pre-submit confirmation card.
- `OrderList.jsx` — open + historical orders with status chips and detail drawer.
- `components.jsx` — atoms: Button, Field, Segmented, StatusChip, Badge, NumberCell.

## Component coverage

Atoms: button (primary / secondary / ghost / buy / sell / sizes), input, select, segmented control, status chip, attribute badge, number cell, key-value row, divider.
Molecules: top nav, sidebar item, watchlist row, order row, step indicator, confirmation card, drawer, toast.
Screens: dashboard, order ticket (5 steps), confirmation, order list.

The components are cosmetic recreations — no real broker API, no real quotes. Quotes are stubbed sample data.
