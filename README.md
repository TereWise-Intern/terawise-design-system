# TeraWise Capital — Design System

> **兆易觀點｜Your Most Reliable Partner** — A Hong Kong-based financial advisory firm (founded 2022, terawisehk.com) building a professional **TW + US equities order-routing platform**. This design system covers both the **customer-facing trading portal** and the **internal back-office for order management**.

---

## Sources reviewed

| Source | Notes |
| --- | --- |
| `uploads/logo.png` → `assets/logo.png` | Primary brand mark: stacked gold wheat-leaf icon on a brown stem, serif wordmark "TeraWise Capital", arc-set tagline **YOUR MOST RELIABLE PARTNER**, "ESTD 2022". |
| `uploads/weekly_report_20250210.pdf` → `reference/` | Weekly research report "**兆易觀點｜Global Weekly Report**" by Sylvia Yi (sylvia.yi@terawisehk.com). Establishes voice, vocabulary, market coverage (US/TW/CN/JP equities + bonds + FX + commodities). |
| `uploads/weekly_report_20250217.pdf` → `reference/` | Second weekly report; same template. |
| Brief from product owner | Trading portal flow + back-office requirements; aesthetic reference: Bloomberg Terminal / 投行 / 券商後台. Traditional Chinese throughout. |

> **No codebase, Figma file, or live URL was provided.** All visual decisions are extrapolated from the logo, the weekly reports, and the stated aesthetic direction (Bloomberg-terminal / investment-bank look). If a real codebase or Figma exists, re-attach it via the Import menu and we'll reconcile.

---

## Products covered

1. **TeraWise Trade — Customer Portal** (`ui_kits/customer_portal/`) Web app where retail clients submit TW / US equity orders: market select → symbol → buy/sell → quantity → market/limit price → confirm → submit. Order status board with lifecycle chips.
2. **TeraWise Desk — Back-Office Console** (`ui_kits/back_office/`) Internal staff console: order queue (list + filter + search + sort), accept/reject orders, update fulfillment status, assign owner, leave notes. High-density, terminal-style.

---

## Folder index

```
README.md                 ← you are here
SKILL.md                  ← skill entrypoint (use this when downloaded as an Agent Skill)
colors_and_type.css       ← single source of truth for tokens (CSS custom properties)
assets/                   ← logo, marks, illustrations, sample symbols list
fonts/                    ← (none locally — webfonts loaded from Google; see CAVEATS)
reference/                ← original weekly-report PDFs
preview/                  ← cards rendered on the Design System tab
ui_kits/
  customer_portal/        ← Trade portal: dashboard, 5-step order ticket, order list + drawer
  back_office/            ← Desk console: KPI queue, filter bar, sortable table, detail drawer
screenshots/              ← reference screenshots from QA
```

---

## CONTENT FUNDAMENTALS

The brand publishes weekly market research and runs a brokerage-style trading desk — both contexts shape the writing style.

**Language.** Traditional Chinese (**繁體中文**) throughout the product UI. Latin/English used for ticker symbols, financial acronyms (CPI, PMI, YTM, FOMC), and product/brand chrome. Bilingual labels are common in headers: "兆易觀點｜Global Weekly Report".

**Voice — professional analyst.** Reports speak in third person, present tense, observation → implication structure. They never use "you" or "I"; the implicit subject is the market or "我們". Example pattern from the weekly: *"美國經濟保持穩健 ⋯ 雖然數據降溫，但已連續七個月維持在榮枯線上方"* — measured, evidence-led, slight cautious bias.

**Voice — product UI.** In customer-facing flows, address the user as **「您」** (formal you). Use action verbs that are unambiguous in finance: **下單 / 委託 / 確認 / 送出 / 取消**. Avoid casual phrasing ("快速賺錢", "好康") — those break trust in a trading context. Buttons are imperative and short: **「送出委託」**, **「取消委託」**, **「確認下單」**.

**Voice — back-office.** Even more clinical. Status verbs in past or in-progress aspect: **「已接單」**, **「處理中」**, **「已完成」**. Owner field uses real names or handles, never nicknames. Notes are factual ("客戶電話確認", "等待開盤"); no emoji, no exclamation marks.

**Casing.** English headlines use **Title Case** ("Global Weekly Report", "Order Confirmation"). Code/ticker symbols are **UPPERCASE** (AAPL, 2330.TW). Numeric units are lowercase with a space ("4.3 %", "5.05 %"), matching the report style.

**Numbers.** Always tabular (mono font). Percentage uses 2 decimals ("0.24%"); price uses 2 decimals for US ("182.43"), and TW format varies by tick; quantity is whole-share with comma thousands separator ("1,200 股"). Up/down deltas always carry an explicit sign ("+1.63%", "−0.29%"). Currency prefix matches market (US$, NT$, HK$).

**Emoji & decoration.** **None.** No emoji anywhere — both research reports and the trading product treat decoration as noise. Iconography is restricted to the system icon set (line-style, see ICONOGRAPHY).

**Tone summary.** *Calm, factual, restrained.* The brand promise is **"Your Most Reliable Partner"** — every word should pass the test "would a private-bank relationship manager say this to a client?"

---

## VISUAL FOUNDATIONS

The design language is **broker-terminal modern**: dense, monospaced data, restrained chrome, navy + bone-white primary, gold accents lifted from the wheat-leaf logo, and a strict semantic palette for buy/sell/status. The result should feel closer to Goldman Sachs Marquee or Interactive Brokers than to a fintech consumer app.

### Colors

| Family | Use |
| --- | --- |
| **Navy** (`--tw-navy-800` `#0F2540` ⇢ `--tw-navy-900` `#0A1A2F`) | Top nav, brand surfaces, terminal backgrounds, primary CTAs in marketing surfaces. |
| **Bone / Ink neutrals** (`--tw-ink-050` ⇢ `--tw-ink-900`) | Page bg, surfaces, text, borders. Cool gray, not warm. |
| **Gold** (`--tw-gold-600` `#B4831C`) | Lifted from logo; used **sparingly** — brand chip, premium-tier badges, key delineators. Never as a primary CTA. |
| **Buy / Bull green** (`--tw-buy-600` `#137C49`) | BUY action, positive deltas, "已完成". |
| **Sell / Bear red** (`--tw-sell-600` `#B22229`) | SELL action, negative deltas, "已拒絕". |
| **Status amber / blue / neutral** | Per order lifecycle — see token file. |

Western up=green / down=red convention is the default (the platform serves US equities too). A market-aware toggle could flip semantics for 台股 users who prefer 紅漲綠跌 — flagged for product to decide.

### Typography

- **Display / brand voice:** *Source Serif 4* — a transitional serif that visually rhymes with the logo's "TeraWise Capital" wordmark. Used for marketing surfaces, dashboard hero numbers (rare).
- **UI sans (Latin):** *Inter* — neutral, screen-tuned, broad weight range.
- **UI sans (繁中):** *Noto Sans TC* — pairs cleanly with Inter, matches stroke contrast at body sizes.
- **Tabular numerals:** *JetBrains Mono* — always used for prices, quantities, P/L, order IDs, timestamps. `font-variant-numeric: tabular-nums` everywhere a column of numbers appears.
- Body size **14px** in dense surfaces, **16px** for marketing/landing. **24px minimum** on slides. Headings stay tight: -0.01em letter-spacing on display sizes.

### Spacing & layout

- **4px base** scale (1/2/3/4/5/6/7/8/9/10 → 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 px).
- Trading surfaces are **information-dense**: 24-32 px page gutter, 12-16 px stack rhythm inside cards, 8-12 px row height in tables.
- Marketing / first-time customer surfaces breathe more: 48-80 px section padding.
- Layouts are **grid-based, left-aligned**. No center-aligned text outside of slide titles and the splash hero.
- Sticky top nav, sticky filter bars, fixed action row in the order ticket — typical of trading dashboards.

### Borders, corners & elevation

- **Small radii** — `2px` for badges, `4px` for buttons & inputs, `6px` for cards, `8px` for dialogs. Pill shape reserved for status chips.
- **1px hairline borders** everywhere — color: `--tw-border` `#DCE2EA` on light, `--tw-navy-600` `#1E3F62` on dark. Borders > shadows for separation.
- **Shadows are restrained**: 3-layer scale, low spread, no soft glow. `shadow-1` for resting cards, `shadow-popover` for menus. No "glassmorphism", no neumorphism.
- Cards: white surface, 1px `--tw-border`, 6px radius, `shadow-1`. On hover, border darkens to `--tw-border-strong`; never elevate on hover.

### Backgrounds

- **No gradients on UI chrome.** A single very subtle navy gradient (`--tw-navy-900` → `--tw-navy-800`) may be used on marketing hero and splash, otherwise solid.
- **No imagery in trading surfaces.** The product is data; pictures of skyscrapers, smiling traders, or stock-tickers-on-glass-walls would feel cliché. Marketing pages can use restrained photography (cool-toned, slight grain, no warm filters).
- **No textures, no patterns, no illustrations** in the product UI. The one exception: the wheat-leaf mark may appear as a watermark at very low opacity on print artefacts (statements, confirmations).

### Motion

- **80ms** for state changes (hover, focus rings, chip color swap).
- **160ms** ease-out for menus, popovers, drawer slide-in.
- **240ms** for page-level transitions (route change, modal in/out).
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (standard productivity easing). **No bounce, no spring.** No "delightful" microinteractions — this is money.
- Number changes (live prices) should **tween** numerically, not flash. Brief color flash (green/red) for ≤300 ms is acceptable to signal direction.

### Interaction states

| State | Treatment |
| --- | --- |
| **Hover** (button) | Background shifts one step darker (`navy-800` → `navy-700`); no scale, no shadow change. |
| **Hover** (row in table) | Background `--tw-ink-050`. Cursor `pointer` only if clickable. |
| **Press / active** | One additional step darker. No shrink animation. |
| **Focus** | 2px outline in `--tw-border-focus` `#2C5582`, 2px offset. Always visible (financial software must be keyboard-navigable). |
| **Disabled** | `--tw-ink-300` foreground, `--tw-ink-100` bg, no border change, `cursor: not-allowed`. |
| **Loading** | Inline 14px spinner in `--tw-navy-500`; never block the whole page — show on the affected element only. |

### Transparency & blur

- Used **rarely**. The only acceptable uses: (1) modal scrim at `rgba(10, 26, 47, 0.4)`, (2) sticky table headers with a 4-6 px backdrop blur fade when content scrolls under. Never on cards or panels.

### Imagery vibe (when used at all)

- Cool-toned, photographic, slight grain. Subjects: skylines at dusk, deep-focus close-ups of paper documents, abstract market charts. **Never people pointing at screens, never gold coins.** Photography is reserved for marketing surfaces; the product itself stays text-and-data.

### Layout rules (fixed elements)

- Top nav: fixed at top, 56 px on customer portal, 48 px on back-office (denser).
- Back-office: collapsible 240 px left sidebar with module switcher; main content fills.
- Customer portal: max-width 1200 px content well, centered, with 32 px gutter.

---

## ICONOGRAPHY

> No icon set was provided in the source materials. We adopt **Lucide** as the system icon library — a clean, line-only, 1.5 px stroke set that matches the restrained Bloomberg-terminal feel and is CDN-available.

- **Library:** [Lucide](https://lucide.dev/) — loaded from `unpkg.com/lucide@latest`. Icons are SVG, inline, currentColor-tinted.
- **Sizing:** 16 px in dense tables, 18 px in buttons, 20 px in nav, 24 px in empty-state callouts.
- **Stroke:** 1.5 px (Lucide default). Never fill icons.
- **Color:** Inherits text color. Status icons (filled / rejected) borrow status semantic colors.
- **Emoji:** **Never used.** Same goes for unicode block-letter icons (✓ ✗ ⚠ ❌). Use Lucide equivalents (`check`, `x`, `alert-triangle`, `x-circle`).
- **Custom marks:** The logo (`assets/logo.png`) is used as a brand element only — header lockup, splash screen, printed confirmation footer. A monogram version (just the wheat-leaf, no wordmark) is referenced as `assets/mark.svg` for favicon / app-icon / small chips.

> **Substitution flag:** Lucide was chosen as the closest CDN match. If TeraWise has a proprietary icon set in their codebase, swap by replacing the Lucide CDN link with the project's SVG sprite.

---

## CAVEATS (please review)

1. **Font substitutions.** No font files were provided. We substitute:
   - Wordmark serif (logo) → **Source Serif 4** (closest free transitional serif). If TeraWise has a licensed face (Sabon, Mercury, Lyon, etc.), please share.
   - Body sans → **Inter** + **Noto Sans TC** (Google Fonts). Common pairing; safe substitution.
   - Mono → **JetBrains Mono**. Substitutable with IBM Plex Mono, Roboto Mono if preferred.
2. **No codebase or Figma was provided.** The UI kit recreations are extrapolations from the brief + brand mark + report aesthetic, not pixel-perfect ports.
3. **Up/down color convention.** Defaulted to Western green-up / red-down because the platform serves US equities. If 台股 customers expect 紅漲綠跌, we should expose a per-market or per-user toggle.
4. **Iconography.** Lucide substitution flagged above.
5. **Marketing imagery.** No real photography assets exist — UI kits use placeholders where photography would normally live.

---

## ASK

Please review the **Design System** tab (cards rendered from `preview/`) and the two UI kits, and tell us:

- **Brand fonts** — if you have licensed faces for the wordmark/body/mono, share them and we'll swap.
- **Up/down convention** — green-up vs. red-up default for the TW market view.
- **Logo variants** — do you have an SVG (vector) version, a horizontal lockup, and a knock-out version for dark backgrounds?
- **Icon library** — is there an existing set in the codebase, or is Lucide an acceptable production choice?
- **Real product copy** — any drafted UI strings, error messages, or legal/disclaimer text we should incorporate verbatim?
