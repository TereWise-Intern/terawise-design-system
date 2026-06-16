# TeraWise Desk — Back-Office Console (UI kit)

Internal staff console. Higher density than the customer portal — left sidebar, full-height order queue, filter bar, multi-select status updates, detail drawer.

## Files

- `index.html` — entry. Loads React + Babel + all components below.
- `App.jsx` — shell + sidebar routing (orders / customers / settings).
- `Sidebar.jsx` — collapsible 240-px module switcher with brand lockup at top, user at bottom.
- `TopBar.jsx` — slim 48-px top bar with breadcrumb, search, market clocks.
- `OrderQueue.jsx` — main view: KPI tiles, filter chips, sortable table, bulk-update toolbar.
- `OrderDrawer.jsx` — order detail panel: client info, ticket, timeline, accept / reject / status update, internal notes.
- `components.jsx` — shared atoms (reuses pattern from customer portal but with admin-density tweaks).

## Conventions

- Density: 32 px row height in tables, 12-14 px font, mono numerals everywhere.
- Buttons use the same primary/secondary/buy/sell pattern, but the dominant action on the queue is **「接單 / 拒絕」** at the row level.
- Customer-cancelled orders are not possible in the current product; the cancel action is **back-office only** (per product brief).
- Notes are factual, no emoji, plain text only.
