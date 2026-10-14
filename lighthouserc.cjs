// Lighthouse CI: accessibility and SEO must be 100 on every route; performance warns below 85.
// The app reads live Supabase data (VITE_SUPABASE_* at build time), served by `vite preview` so
// client routes resolve.
// LH_DIGEST_ID (set in CI from the newest ready digest) adds an archive detail page.
// LH_PORT: preview port (default 4173), for running next to other local servers.
const port = process.env.LH_PORT || '4173';
const base = `http://127.0.0.1:${port}`;
const routes = ['/', '/archive', '/no-such-page'];
if (process.env.LH_DIGEST_ID) routes.push(`/archive/${process.env.LH_DIGEST_ID}`);

module.exports = {
  ci: {
    collect: {
      startServerCommand: `pnpm exec vite preview --port ${port} --strictPort --host 127.0.0.1`,
      startServerReadyPattern: 'Local',
      url: routes.map((route) => base + route),
      numberOfRuns: 1,
      settings: { chromeFlags: '--no-sandbox --headless=new' },
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:seo': ['error', { minScore: 1 }],
        // Machines vary; the PR compares performance against the baseline. Warn on big drops.
        'categories:performance': ['warn', { minScore: 0.85 }],
      },
    },
    upload: { target: 'filesystem', outputDir: './.lighthouseci/reports' },
  },
};
