# Dynamic Stone Inc. — Website

A modern, responsive Next.js (App Router + TypeScript + Tailwind CSS) website for
Dynamic Stone Inc., built to address the items in the LaunchPadInc site audit.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's included

- **Home** — hero, "What is Terrazzo" explainer, process strip, featured projects,
  testimonials preview, CTA
- **About** — heritage story, milestone timeline, values
- **Portfolio** — single filterable grid (Residential / Commercial / Recreational),
  replacing the old separate "Gallery" and "Projects" pages
- **Testimonials** — dedicated page with attributable client quotes
- **FAQ & Process** — step-by-step process plus an FAQ accordion (with FAQ schema)
- **Get a Quote** — contact form, plus phone/email/service-area info
- Sticky header with a "Get a Quote" CTA on every page
- Footer with NAP info, hours, and Instagram link — **no admin login link**
- `LocalBusiness` JSON-LD structured data (in `app/layout.tsx`)
- `app/sitemap.ts` and `app/robots.ts` for SEO
- Responsive image handling via `next/image` config (AVIF/WebP)

## Before going live

1. **Contact form** — `components/QuoteForm.tsx` posts to a Formspree endpoint.
   Create a free form at [formspree.io](https://formspree.io) and replace
   `FORMSPREE_ENDPOINT` with your real endpoint URL.

2. **Real photos** — Visual placeholders are CSS-generated "terrazzo" panels
   (`components/TerrazzoPanel.tsx`) so the site looks finished without stock photos.
   Replace these with real project photos using `next/image`:
   - Save photos to `/public/images/` with **descriptive filenames**
     (e.g. `kitsilano-kitchen-terrazzo-countertop.jpg`)
   - Use the `alt` text already written for each item in `lib/data.ts`
   - Compress/convert to WebP or AVIF before uploading (or let `next/image` do it
     automatically when using local imports)

3. **Business details** — Update `lib/site-config.ts` with your real phone number,
   email, address, coordinates, hours, and Instagram handle. The `geo` coordinates
   in `app/layout.tsx` are placeholders for Vancouver and should be set to your
   exact location.

4. **Google Business Profile** — Claim/verify your listing at
   [business.google.com](https://business.google.com) using the same NAP
   (name, address, phone) as `lib/site-config.ts`.

5. **Domain & hosting** — Deploy to Vercel, Netlify, or your preferred host. Update
   `siteConfig.url` in `lib/site-config.ts` to your production domain.

6. **WordPress login** — This site has no CMS admin login exposed anywhere
   (issue #9 from the audit is resolved by design — there's no `wp-login.php`).

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- next/font (Fraunces + Inter)
