# Jacksonville (FL) Chapter of The Links, Incorporated

Static site for the Jacksonville Chapter, built with [Astro](https://astro.build). No CMS or backend — every page is prerendered to plain HTML.

## Requirements

- Node.js `>=22.12.0` (see `.nvmrc`)

## Setup

```bash
npm install
cp .env.example .env   # then fill in PUBLIC_MEMBERS_PASSWORD
```

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the local dev server at `localhost:4321` with hot reload |
| `npm run build` | Type-check and build the production site to `dist/` |
| `npm run preview` | Serve the built `dist/` output locally, to sanity-check a production build |
| `npx astro check` | Type-check `.astro` files without building |

## Project structure

```
src/
  components/   Header, Footer, nav, cards, and other reusable UI pieces
  data/site.ts  Central content: nav structure, program facet copy, member rosters, contact info
  layouts/      Shared page shell (SEO meta, header/footer, scroll-reveal script)
  pages/        One file per route — file path maps directly to the URL
  styles/       Global CSS (color palette, type scale, shared utility classes)
public/         Static assets served as-is (favicon, etc.)
```

Most day-to-day copy edits (member names, program descriptions, contact info, nav links) live in `src/data/site.ts`, not scattered across page files.

## Placeholder content

A few things are intentionally placeholder pending real assets/copy from the chapter — each is clearly marked in the UI:

- **All photography** — green-gradient blocks watermarked "Placeholder," each labeled with what real photo belongs there. Replace by swapping `<PlaceholderImage>` usages for real `<img>`/`<Image>` tags once photos are supplied.
- **Fundraisers page** — two sample event cards; real event data should replace the array in `src/pages/fundraisers.astro`.
- **Members Only → Handbook / Calendar** — stub pages; the current live site keeps this content password-protected so it wasn't available to migrate.
- **Contact form** — UI only, not yet wired to a backend (e.g. Formspree, Netlify Forms). The `mailto:` link works today as a fallback.
- **Members Only password gate** — cosmetic UI only. Static sites can't enforce real access control; real member content should sit behind actual server-side auth before anything sensitive is published there.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `PUBLIC_MEMBERS_PASSWORD` | Yes | The password checked by the Members Only page gate (`/members-only`). |

Set this in a local `.env` file for development (`cp .env.example .env`). **In Vercel**, add it under **Project → Settings → Environment Variables** (name `PUBLIC_MEMBERS_PASSWORD`, any environment) — it must be set there for the deployed site to have a working gate, since it's not committed to the repo. Redeploy after adding/changing it.

⚠️ Because this is a static site, the `PUBLIC_` prefix is required for Astro to expose the value to the page's client-side script — which also means the password is compiled into the page's JS bundle and visible to anyone who views page source. It deters casual browsing only; it is not real access control. See the note in `src/pages/members-only/index.astro`.

## Deployment (Vercel)

This is a zero-config Astro static site — Vercel auto-detects the Astro framework preset from `package.json`, so no `vercel.json` is required. To connect it:

1. In the [Vercel dashboard](https://vercel.com/new), click **Add New → Project**.
2. Import this GitHub repository (`Dc-4nderson/JacksonvilleLinks_Site`).
3. Vercel should auto-fill:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build` (or leave default)
   - **Output Directory:** `dist`
4. Deploy. Every push to `main` will trigger a production deploy; pushes to other branches (including PR branches) get their own preview URL automatically.
5. Once deployed, add the chapter's custom domain under **Project → Settings → Domains**.

No environment variables are required for the current build.
