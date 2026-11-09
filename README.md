# portfolio

Personal portfolio site. Astro (static) on Cloudflare Workers static assets.

- Edit content: `src/data/profile.ts`
- Dev server: `pnpm dev` → http://localhost:4321
- Verify before pushing: `pnpm verify` (type check, build, Playwright smoke tests)
- Deploy: push to `main`. Cloudflare Workers Builds builds and deploys it; other branches get preview URLs.
