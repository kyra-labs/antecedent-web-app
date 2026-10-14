# CLAUDE.md — antecedent-web-app

Standing instructions for Claude Code sessions in this repo (antecedent.kyralabs.dev). Owner: Mohammed Thalha (YamTee), Kyra Labs.

## What this is

React 19 + Vite 8 single-page app: today's tech digest with historical context. Data from Supabase (`src/api/`). Routes: `/` (latest digest), `/archive`, `/archive/:id`, `*` (404). Built on the Kyra Labs Material 3 Expressive library **@kyralabs/m3exp-web 1.1** (`@kyralabs/m3e-tokens`, `m3e-css`, `m3e-react`, `m3e-elements` from npm, `^1.1.0`). Library repo: kyra-labs/m3exp-web. Its `DECISIONS.md` and `CLAUDE.md` define the design rules.

## Commands

pnpm 12.11.2 (`packageManager`), Node ≥ 22.12; `.nvmrc` is pinned to **24.21.0** (2026-10-15: on Node 24.22.0, Cloudflare Workers Builds' Corepack setup of pnpm 12 fails with "Cannot find module …/corepack/v1/pnpm/12.11.2/bin/pnpm.cjs" before install; 24.21.0 is the last version that built. Only bump it after a Workers build passes on the new version). Needs `.env.local` with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (see `.env.example`); `supabaseClient.js` throws without them.

- `pnpm dev`, `pnpm build` → `dist/`. Both run `pnpm gen` first: the theme from `src/brand.mjs` and the icon subset from `src/icons.txt`, into `src/styles/generated/` (git-ignored).
- `pnpm lint` (ESLint), `pnpm lint:css` (stylelint, tokens only), `pnpm lighthouse` (accessibility and SEO must be 100, performance warns below 85; set `LH_DIGEST_ID` to also audit a detail page, `LH_PORT` to move the preview off 4173).

## Rules

- **Library first.** Use m3e-react components (Button, IconButton, IconToggleButton, ToggleButton, Card/CardAction, ShortNavigationBar, LoadingIndicator, Icon) or m3e-css classes (top app bar, divider). React Aria's `RouterProvider` (`src/components/common/AriaRouter.jsx`) makes library links navigate client-side. Plain-HTML m3e-css pieces (the app bar NavLinks, `m3e-state-layer` buttons) get the press ripple from `@kyralabs/m3e-elements/ripple.js`, imported once in `src/main.jsx`; m3e-react components ripple on their own.
- **Layout: Google-app pane hierarchy.** App bar, navigation bar and footer on `surface`; page content in panes (global `.pane` in `globals.css`) on `surface-container-low` with `--m3e-sys-shape-corner-extra-large(-increased from 840px)` corners: the digest's header, "Must know" and "Also worth knowing" (`.panes` column), the archive (one pane), the 404 and page-level empty/error states. Cards inside a pane step up to `surface-container-high` (the pane sets the card container tokens). The digest title and the archive h1 use display; section titles use headline.
- **Motion**: `--m3e-sys-motion-*` spring tokens, transform and opacity only (no layout shift), all inside `prefers-reduced-motion: no-preference`. `.pageReveal` is a short rise (fast spatial spring) with a 149 ms fade (fast effects spring) per route, panes staggered by short1/short2; archive items rise with a short stagger; interactive cards (archive items, "Also worth knowing" rows) lift on hover. Keep entrances short and measure: they show up in LCP (a transform-only entrance made the digest intro the LCP element, 3.2 → 3.6–3.9 s on mobile).
- **Tokens only.** No hard-coded colours, sizes, durations, easings or radii in CSS: `var(--m3e-…)` only. stylelint enforces it with the library's own plugin (`tools/lint/`). Breakpoints are the M3 window size classes (600 / 840 / 1200 / 1600 px); media queries can't use custom properties.
- **Icons** go through Material Symbols (`<Icon name>`). Add the name to `src/icons.txt`; never use inline SVG or text glyphs for system icons.
- **Theme**: Kyra red `#d84848`, `fidelity`, with core colours neutral + neutralVariant `#808080` (grey surfaces, text and outlines) and tertiary `#c8862a` (amber) — palette C, chosen by the owner on 2026-10-15 (`src/brand.mjs`). With `fidelity`, `neutralVariant` must be set too or secondary text and outlines stay red-tinted. Don't use tertiary-container for decorative badges (the section numbers use secondary-container). Dark by default, toggled with `data-theme` and kept in `localStorage` (`ThemeProvider`). `index.html` applies it before first paint.
- **Don't change the library from here.** Write up library bugs for the owner (see below) instead of working around them silently.
- **Copy, routes and behaviour** stay as they are unless the owner asks; call out every deliberate change in the PR. The head keeps `<meta name="description">` (the footer tagline) and `public/robots.txt` exists (without it the SPA fallback answers `/robots.txt` with index.html): Lighthouse SEO must stay 100.
- **Client-rendered SPA**: with JavaScript off the page is blank (no prerendering); the static-site JS checks of the sister sites (`check:js`, `check:no-js`) don't apply here.
- **Hosting**: Netlify today (`netlify.toml`: `pnpm build`, `dist`, SPA fallback). The planned move is to Cloudflare Workers static assets (`wrangler.jsonc`: Worker `antecedent-web-app`, `single-page-application`, `previews: {}`). Keep both working. The Supabase vars must exist in each host's build environment.
- **Workflow**: branch → draft PR → CI green → tick "CI green" in the description, mark ready, post a self-review comment. The owner merges, never Claude. Commits end with `Co-Authored-By: Claude …`. `gh` needs `export PATH="$PATH:/c/Program Files/GitHub CLI"`. Never touch `.hallmark/` or `.agents/`.
- CI needs the repository secrets `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.

## Decisions (2026-10-13, owner's answers)

- Built from `main`. An older hand-written M3 restyle (purple `#6750A4`, Fontsource Google Sans Flex, 76 files) sits **uncommitted** on branch `feature/m3exp` in the main checkout. It was left untouched and isn't used.
- Kyra red theme; Google Sans Flex only (Newsreader serif / IBM Plex Sans and their Google Fonts request removed).
- CI audits real Supabase data (repository secrets), not fixtures.
- npm → pnpm, matching the other Kyra Labs sites.

## History

- **2026-10-13, M3 Expressive conversion** (branch `m4/m3e-react`): small top app bar + IconToggleButton theme switch + `ShortNavigationBar` on compact windows; cards, toggle buttons, buttons and LoadingIndicator from m3e-react; outlined text field from tokens. Fixed along the way:
  - an empty search/filter result removed the search box and filters, so the archive couldn't be recovered;
  - pagination could go to page 0 and wasn't keyboard-reachable;
  - the date filter's `aria-pressed` was hard-coded;
  - the logo had no `alt`, and Home was always `aria-current`;
  - the masthead date was hard-coded to 2026-08-26;
  - "Also worth knowing" cards didn't expand;
  - production deep links returned 404 (no SPA fallback).
  Lighthouse accessibility went from 93 to 100 on every route.
- **2026-10-15, "look like Google's apps"** (branch `m5/google-feel`): @kyralabs 1.1.0, palette C, press ripple on plain-HTML components, pane layout, headline section titles, spring entrance and card hover lift, SEO 100 (meta description, robots.txt) asserted in CI, the page-level loader fills the window so the footer no longer jumps when the digest arrives (CLS). The same change went to kyralabs.dev, Spenzia and the portfolio.
- Sister sites converted the same way: kyralabs.dev (kyra-labs/website), spenzia.kyralabs.dev (kyra-labs/spenzia-website), yamtee.dev (YamTee/portfolio).

## Known gaps / follow-ups

- Legacy components not reachable from any route (`components/archive`, `article`, `entity`, `digest/{CategoryFilter,DigestFeed,SourceLink,StoryCard}`, `common/LoadingSpinner`, the unrouted pages) still use pre-M3 CSS and are excluded from stylelint. Convert them when the article and entity routes come back.
- The search helper says "Search by headline or date", but search matches headlines only (unchanged behaviour).
- `/no-such-page` answers HTTP 200 with the in-app 404 view (soft 404) because of the SPA fallback on every host.
- Library gaps hit here: no text field or filter-chip component; the top app bar title must be a heading (no plain-title option); nav items always use `aria-current="page"`.
