# CLAUDE.md — antecedent-web-app

Standing instructions for Claude Code sessions in this repo (antecedent.kyralabs.dev). Owner: Mohammed Thalha (YamTee), Kyra Labs.

## What this is

React 19 + Vite 8 single-page app: today's tech digest with historical context. Data from Supabase (`src/api/`). Routes: `/` (latest digest), `/archive`, `/archive/:id`, `*` (404). Built on the Kyra Labs Material 3 Expressive library **@kyralabs/m3exp-web 1.0.0** (`@kyralabs/m3e-tokens`, `m3e-css`, `m3e-react` from npm, `^1.0.0`). Library repo: kyra-labs/m3exp-web. Its `DECISIONS.md` and `CLAUDE.md` define the design rules.

## Commands

pnpm 12.11.2 (`packageManager`), Node ≥ 22.12 (`.nvmrc` 24). Needs `.env.local` with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (see `.env.example`); `supabaseClient.js` throws without them.

- `pnpm dev`, `pnpm build` → `dist/`. Both run `pnpm gen` first: the theme from `src/brand.mjs` and the icon subset from `src/icons.txt`, into `src/styles/generated/` (git-ignored).
- `pnpm lint` (ESLint), `pnpm lint:css` (stylelint, tokens only), `pnpm lighthouse` (accessibility must be 100; set `LH_DIGEST_ID` to also audit a detail page).

## Rules

- **Library first.** Use m3e-react components (Button, IconButton, IconToggleButton, ToggleButton, Card/CardAction, ShortNavigationBar, LoadingIndicator, Icon) or m3e-css classes (top app bar, divider). React Aria's `RouterProvider` (`src/components/common/AriaRouter.jsx`) makes library links navigate client-side.
- **Tokens only.** No hard-coded colours, sizes, durations, easings or radii in CSS: `var(--m3e-…)` only. stylelint enforces it with the library's own plugin (`tools/lint/`). Breakpoints are the M3 window size classes (600 / 840 / 1200 / 1600 px); media queries can't use custom properties.
- **Icons** go through Material Symbols (`<Icon name>`). Add the name to `src/icons.txt`; never use inline SVG or text glyphs for system icons.
- **Theme**: Kyra red `#d84848`, `fidelity` (`src/brand.mjs`). Dark by default, toggled with `data-theme` and kept in `localStorage` (`ThemeProvider`). `index.html` applies it before first paint.
- **Don't change the library from here.** Write up library bugs for the owner (see below) instead of working around them silently.
- **Copy, routes and behaviour** stay as they are unless the owner asks; call out every deliberate change in the PR.
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
- Sister sites converted the same way: kyralabs.dev (kyra-labs/website), spenzia.kyralabs.dev (kyra-labs/spenzia-website), yamtee.dev (YamTee/portfolio).

## Known gaps / follow-ups

- Legacy components not reachable from any route (`components/archive`, `article`, `entity`, `digest/{CategoryFilter,DigestFeed,SourceLink,StoryCard}`, `common/LoadingSpinner`, the unrouted pages) still use pre-M3 CSS and are excluded from stylelint. Convert them when the article and entity routes come back.
- The search helper says "Search by headline or date", but search matches headlines only (unchanged behaviour).
- No `<meta name="description">` (SEO 83); the head was kept as it was.
- Library gaps hit here: no text field or filter-chip component; the top app bar title must be a heading (no plain-title option); nav items always use `aria-current="page"`.
