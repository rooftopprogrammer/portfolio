# ravikumarnersu.com

Personal portfolio for Ravi Kumar Nersu — Senior Full-Stack Software Engineer (React, Next.js, Node.js, Python, GenAI).

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

- `public/Ravi-Kumar-Nersu-Senior-Full-Stack-Engineer-Resume.pdf` — the résumé every
  "Download Resume" action points at (`resume.href` in the config). To update it,
  replace the file under the same name and keep `src/config/site.ts` in step
  with it. PDFs are served with `max-age=0, must-revalidate`, so a new copy
  reaches visitors straight away. The old `…-Senior-Software-Engineer-Resume.pdf`
  URL redirects to it (see `next.config.ts`).
- `public/og-image.png` — 1200×630 social card. Regenerate with:

  ```bash
  node scripts/generate-og-image.mjs
  ```

- Favicons are generated from `public/favicon.svg`:

  ```bash
  node scripts/generate-favicons.mjs
  ```

## Design and motion

- Paper/ink palette with one vermilion signal colour and one green for
  improvements; tokens live at the top of `src/app/globals.css`. Every `*-text`
  colour clears WCAG AA; the bright variants are for fills and large type only.
- Type: Bricolage Grotesque (display), Geist (body), Geist Mono (labels).
- Content is fully painted on the first frame. `.rise` and `.reveal` animate
  transform only, so the page stays legible with JavaScript off, in print and
  in full-page screenshots.
- The FinDocs and ClaimPilot demos (`src/components/ai-demos.tsx`) are
  decorative illustrations, run only while on screen, and show a still frame
  under `prefers-reduced-motion: reduce`. Their boxes have fixed heights to
  avoid layout shift — re-check them if you change the demo text.

## Analytics

Client events post to `/api/analytics`, which forwards them to a backend using
server-side environment variables (see `.env.example`). If
`ANALYTICS_BACKEND_URL` or `ANALYTICS_SECRET` is unset, events are accepted and
dropped rather than forwarded unauthenticated.
