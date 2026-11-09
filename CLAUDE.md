# portfolio

Static Astro site deployed to Cloudflare Workers (static assets, `wrangler.jsonc`, no Worker code).

## Commands
- `pnpm dev` — dev server on :4321
- `pnpm check` — astro/TypeScript check
- `pnpm test:e2e` — Playwright smoke tests (builds + previews automatically)
- `pnpm verify` — all of the above; run before saying a change is done

## Layout
- Content: `src/data/profile.ts` (edit text here, not in components)
- Pages: `src/pages/` (`404.astro` is served for unknown paths)
- Global styles and color tokens: `src/layouts/Base.astro`

## Rules
- Keep it static. Adding SSR or an adapter needs a reason; ask first.
- Every visual change must still pass the mobile project in Playwright (no horizontal scroll).
- Deploys happen from `main` via Cloudflare Workers Builds; never run `wrangler deploy` by hand unless asked.
