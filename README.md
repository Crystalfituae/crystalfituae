# crystalfituae.com — new static site

Fast rebuild of the WordPress/Elementor site as a static [Astro](https://astro.build) site.
Same design and the same URLs; no WordPress, no PHP, no jQuery or sliders.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321 (live preview while editing)
npm run build     # production build -> dist/
npm run preview   # serve dist/ locally
```

The first build processes ~1,000 photos into WebP sizes (about 3–4 minutes); later builds reuse the cache.

## Where things are

| What | Where |
|---|---|
| Projects (one folder each: `index.md` + `img/`) | `src/content/projects/<slug>/` |
| Project fields (title, order, tile size, categories, gallery…) | front-matter of `index.md`, schema in `src/content.config.ts` |
| Pages | `src/pages/` (`index`, `about-us`, `services`, `contact`, `portfolio`, `projects-metro`, categories, project template) |
| Phone, e-mail, socials, menu, "Other cases", logo lists | `src/data/site.ts` |
| Styles | `src/styles/*.css` |
| Static page photos | `src/assets/` |
| Admin panel (Decap CMS) | `public/admin/` → `/admin/` |
| Redirects / cache headers | `public/_redirects`, `public/_headers` |

## Adding a project by hand

1. Copy any folder in `src/content/projects/`, rename it to the new URL slug.
2. Put photos (any size, JPG/PNG) into `img/`, edit `index.md`.
3. `order: 0` puts it first in the portfolio; `size: quarter` makes a narrow tile.

Photos are resized/converted to WebP automatically during the build.

## Contact form

Uses [Web3Forms](https://web3forms.com) (free, one access key per inbox):

| Env variable | Inbox | Receives |
|---|---|---|
| `PUBLIC_WEB3FORMS_KEY` | info@crystalfituae.com | every enquiry |
| `PUBLIC_WEB3FORMS_KEY_COPY` | kg@crystalfituae.com | copy of enquiries with topic **Project Inquiry** |

The visitor chooses the topic (*Project Inquiry* / *Collaborations*); it becomes the e-mail subject.
Set both variables in the hosting settings (see `.env.example`).

## Deploy (Cloudflare Pages)

Build command `npm run build`, output directory `dist`, Node 20+, env `PUBLIC_WEB3FORMS_KEY` and `PUBLIC_WEB3FORMS_KEY_COPY`.
