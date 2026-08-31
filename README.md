<p align="center">
  <img src="src/assets/logo_long_100px.svg" alt="Antecedent" height="100" />
</p>

<h3 align="center">Antecedent</h3>
<p align="center">
  A daily tech digest that doesn't just tell you <em>what</em> happened — it tells you <em>how we got here</em>.
</p>

<p align="center">
  <a href="https://antecedent.kyralabs.dev/"><strong>antecedent.kyralabs.dev →</strong></a>
  ·
  <a href="https://github.com/kyra-labs/antecedent-web-app">Repo</a>
</p>

---

## What is Antecedent?

Most news apps give you a headline and a paragraph. Antecedent gives you the same headline, but with the thread that led to it — the earlier events, decisions, and precedents that explain _why this story matters now_, not just that it happened.

Every day, the [Antecedent Pipeline](https://github.com/kyra-labs/antecedent-pipeline) ingests tech news, tracks the companies/people/technologies mentioned as entities over time, and writes a digest that connects today's story to its own history. This repo is the **web app** that reads and presents that digest.

This is a solo, open-source project by [Kyra Labs](https://github.com/kyra-labs).

---

## Features & Flows

### 📰 Home — the latest digest, always

The homepage (`/`) doesn't have a "no digest today" state to design around — it simply renders whatever digest is most recently marked ready. If today's run hasn't finished yet, it naturally falls back to the last completed one. No stale placeholders, no broken states.

### 🗂️ Digest detail — Must Know vs. Also Worth Knowing

Every digest is split into two ranked sections, driven by how the pipeline scored each story:

- **Must Know** — the full event card for each top story:
  - Headline, category badge, and importance score
  - **What happened** — the summary
  - **How we got here** — the historical background behind the story
  - **What changed** / **Why it matters** — bulleted takeaways
  - **Not yet known** — open questions, shown only when the pipeline flagged any
  - A **Historical Context Timeline** — a dated thread of the events that led up to this one
  - **Source links** — every originating article, opening in a new tab
- **Also Worth Knowing** — thinner, collapsible cards for stories that were archived but not fully briefed. Tap a card to expand it in place and reveal its summary — no extra network round-trip, the data's already loaded.

### 🗓️ Archive — every digest, by date

A separate `/archive` route lists all past digests (date, title, reading time) in reverse-chronological order. Tapping any entry opens that day's full digest at `/digest/:id`, rendered through the exact same detail view as the homepage — only the query behind it differs.

### 🌗 Theming

Light/dark mode via a persistent theme toggle. Styling runs entirely on design tokens (CSS custom properties) rather than hardcoded colors, so the whole app re-themes through a single plugin layer.

### 📱 Mobile-first

Layouts, spacing, and navigation are designed mobile-first, with a persistent bottom action bar on small screens rather than a hamburger menu.

### ⏳ Resilient loading, empty & error states

Every data-driven view distinguishes "still loading," "nothing here yet," and "something went wrong" as separate, deliberate UI states — not a single generic spinner or blank screen.

---

## How the pieces fit together

```
                     ┌────────────────────┐
                     │  Antecedent Pipeline │  (separate repo, runs on GitHub Actions cron)
                     │  ingest → entity-track → LLM briefing → Supabase │
                     └─────────┬──────────┘
                               │
                               ▼
                        Supabase Postgres
                               │
              ┌────────────────┼─────────────────┐
              ▼                                   ▼
      getLatestDigest()                   getDigestArchive()
              │                                   │
              ▼                                   ▼
      HomePage  ──┐                        DigestArchivePage
                   │  same DigestDetail            │
      DigestPage ──┘  component, different   ◄─────┘ (tap an entry)
      (/digest/:id)      query behind it
```

`DigestDetail` is the single shared component that renders a full digest — whether it's the latest one on the homepage or a specific past one opened from the archive. Only the query feeding it (`getLatestDigest()` vs. `getDigestById(id)`) changes.

---

## Tech stack (this repo)

| Layer         | Choice                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| Build tool    | Vite                                                                                                                |
| UI            | React + React Router                                                                                                |
| Data          | Supabase JS client (Postgres, nested relational queries — no ORM)                                                   |
| Data fetching | Custom `useAsync` / `useDigest` / `useDigestArchive` hooks (no TanStack Query, no Redux — deliberately kept simple) |
| Styling       | CSS Modules + a token-based theme plugin (no hardcoded colors)                                                      |

## The backend

The digest data itself comes from [**antecedent-pipeline**](https://github.com/kyra-labs/antecedent-pipeline) — a separately-run daily pipeline that:

- Ingests tech news from RSS feeds + the Hacker News API
- Extracts full article text with Trafilatura
- Filters relevance with a two-layer system (deterministic regex before any LLM call)
- Tracks entities (companies, people, technologies) across time in Supabase
- Uses structured, entity-based SQL retrieval (GraphRAG-style — not embeddings) to connect today's stories to their own history
- Runs entirely on GitHub Actions cron, on a strict cost ceiling of well under ₹120/month

This repo only ever _reads_ that data — it has no write path back into the pipeline.

---

## Project structure

```
src/
├── api/                 # supabaseClient.js, queries.js
├── assets/              # logo_long_100px.svg, icons
├── components/
│   ├── layout/           # Layout, Header, Footer, ThemeToggle
│   ├── digest/            # DigestDetail, MustKnowCard, AlsoKnowCard,
│   │                      # HistoricalContextTimeline, SourceLink...
│   ├── digest-list/       # DigestList, DigestListItem
│   └── common/            # LoadingSpinner, ErrorState, EmptyState, Badge
├── pages/                # HomePage, DigestPage, DigestArchivePage, NotFoundPage
├── hooks/                # useAsync, useDigest, useDigestArchive, useTheme
├── styles/               # globals.css (design tokens)
└── utils/                # formatDate.js
```

---

## Getting started

```bash
git clone https://github.com/kyra-labs/antecedent-web-app.git
cd antecedent-web-app
npm install
```

Create a `.env.local` with your Supabase project credentials:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

> ⚠️ The Supabase anon key needs explicit `SELECT` policies (RLS) on every table the app queries. A missing policy returns an _empty_ result, not an error — worth remembering if a page renders nothing but throws nothing either.

```bash
npm run dev
```

---

## Roadmap — deliberately deferred

These were scoped out on purpose rather than dropped, so they're worth knowing about even though they're not in the app yet:

- **Entity/topic browsing** — a dedicated view for exploring everything tracked about one company, person, or technology across the archive
- **Category filtering** — category badges are currently static labels, not filters
- **Clickable timeline entries** — linking a historical timeline entry back to its original digest event (needs a schema change to support)
- **Archive search & date filtering**
- **Push notifications** via Firebase Cloud Messaging (planned on the pipeline side)

---

## Part of Kyra Labs

<a href="https://github.com/kyra-labs">
  <img src="https://raw.githubusercontent.com/kyra-labs/.github/main/profile/assets/kyra-labs-logo.png" alt="Kyra Labs" height="60" />
</a>

Antecedent is built and maintained by [**Kyra Labs**](https://github.com/kyra-labs) — see the org for other projects, including the [Antecedent Pipeline](https://github.com/kyra-labs/antecedent-pipeline) backend.

## License

MIT — see [LICENSE](./LICENSE) for details.
