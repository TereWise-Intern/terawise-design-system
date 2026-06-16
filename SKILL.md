---
name: terawise-design
description: Use this skill to generate well-branded interfaces and assets for TeraWise Capital (兆易) — a Hong Kong financial advisory firm building a TW + US equities order-routing platform with both a customer trading portal and an internal back-office console. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files. Pay special attention to:

- `README.md` — full brand, content and visual foundations, plus the folder index.
- `colors_and_type.css` — single source of truth for tokens. Always link this stylesheet first.
- `assets/logo.png` — the brand mark. Don't redraw it.
- `ui_kits/customer_portal/` — high-fidelity recreation of the client-facing trading portal (5-step order ticket, status board).
- `ui_kits/back_office/` — high-fidelity recreation of the staff console (KPI tiles, filter bar, sortable order queue, detail drawer).
- `preview/` — small card files that show the design system at a glance.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out into your output and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Tight rules to follow

- **Language:** All UI copy in Traditional Chinese (繁體中文) by default. Latin/English for tickers and finance acronyms.
- **Voice:** Professional, restrained, factual. Address customers as **「您」**. Never use emoji. Buttons are imperative verbs (送出委託 / 確認下單 / 取消).
- **Color:** Navy + bone neutral + sparing gold. Green = buy/up, red = sell/down (Western convention). Status chips per the lifecycle palette in `colors_and_type.css`.
- **Numbers:** Always tabular mono (`JetBrains Mono`, `font-variant-numeric: tabular-nums`). Sign-explicit deltas.
- **Density:** Customer portal is medium-density (14 px body); back-office is high-density (12-13 px body, 32 px row height).
- **Iconography:** Lucide, 1.5 px stroke, currentColor. No emoji ever.
- **No decoration:** No gradients on chrome, no textures, no illustrations, no glassmorphism, no bouncy animations. Borders > shadows.
- **Cancellation rule:** Customers cannot self-cancel orders. Only the back-office can cancel — surface this in the customer-side confirm flow.

## Quick starts

```html
<!-- minimal page using the design tokens -->
<link rel="stylesheet" href="colors_and_type.css">
<!-- if you also want the customer-portal styled components: -->
<link rel="stylesheet" href="ui_kits/customer_portal/styles.css">
```

Lucide icons:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="trending-up"></i>
<script>lucide.createIcons();</script>
```
