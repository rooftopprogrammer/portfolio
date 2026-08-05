# ravikumarnersu.com

Personal portfolio for Ravi Kumar Nersu — Senior Software Engineer, frontend-focused full stack.

Live: <https://www.ravikumarnersu.com/>

## Stack

- Next.js 16 (App Router) with React 19 and TypeScript
- Tailwind CSS v4
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

The site runs at <http://localhost:3000>.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type check |

## Content is data, not markup

Every user-facing claim — positioning, experience, projects, skills, metrics,
contact links and the résumé path — lives in [`src/config/site.ts`](src/config/site.ts).
Sections, SEO metadata and the Person JSON-LD all read from that one file so
employer names, dates and metrics cannot drift apart.

**Change content there, not in components.**

## Assets

- `public/Ravi-Kumar-Nersu-Senior-Software-Engineer-Resume.pdf` — the résumé every
  "Download Resume" action points at. Referenced via `resume.href` in the config.
- `public/og-image.png` — 1200×630 social card. Regenerate with:

  ```bash
  node scripts/generate-og-image.mjs
  ```

- Favicons are generated from `public/favicon.svg`:

  ```bash
  node scripts/generate-favicons.mjs
  ```

## Accessibility and motion

- Content is fully opaque at first paint. `.reveal` applies a transform offset
  only, so the page stays legible with JavaScript disabled, in print and in
  full-page screenshots.
- `RevealObserver` is progressive enhancement and honours
  `prefers-reduced-motion: reduce`.
- Text colours are held to WCAG AA. `--orange-accent` (`#C2410C`) is the
  text- and button-safe orange; `--orange-brand` (`#FF6B35`) is decorative only.

## Analytics

Client events post to `/api/analytics`, which forwards them to a backend using
server-side environment variables (see `.env.example`). If
`ANALYTICS_BACKEND_URL` or `ANALYTICS_SECRET` is unset, events are accepted and
dropped rather than forwarded unauthenticated.
