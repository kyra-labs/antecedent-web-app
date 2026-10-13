// Lighthouse CI: accessibility must be 100 on every route. The app reads live Supabase data
// (VITE_SUPABASE_* at build time), served by `vite preview` so client routes resolve.
// LH_DIGEST_ID (set in CI from the newest ready digest) adds an archive detail page.
const base = 'http://127.0.0.1:4173';
const routes = ['/', '/archive', '/no-such-page'];
if (process.env.LH_DIGEST_ID) routes.push(`/archive/${process.env.LH_DIGEST_ID}`);

module.exports = {
  ci: {
    collect: {
      startServerCommand: 'pnpm exec vite preview --port 4173 --strictPort --host 127.0.0.1',
      startServerReadyPattern: 'Local',
      url: routes.map((route) => base + route),
      numberOfRuns: 1,
      settings: { chromeFlags: '--no-sandbox --headless=new' },
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 1 }],
      },
    },
    upload: { target: 'filesystem', outputDir: './.lighthouseci/reports' },
  },
};
