# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # next lint
```

No test suite is configured in this repo.

Note: `next.config.mjs` sets `eslint.ignoreDuringBuilds: true`, so `npm run build` will not fail on lint errors — run `npm run lint` separately to check.

## Architecture

Next.js 14 App Router site (TypeScript + Tailwind CSS) for Dynamic Stone Inc., a terrazzo contractor. Single-purpose marketing/lead-gen site, no backend/database/CMS.

- **`app/`** — one route per top-level page (`about`, `services`, `portfolio`, `testimonials`, `faq`, `care-maintenance`, `quote`). `app/layout.tsx` holds the root layout, fonts (Fraunces + Inter via `next/font`), and `LocalBusiness` JSON-LD structured data. `app/sitemap.ts` and `app/robots.ts` generate SEO files from `lib/site-config.ts`.
- **`lib/site-config.ts`** — single source of truth for business info (NAP, phone, email, hours, social) and `navLinks` (including the Services dropdown). Update here, not inline in components, when business details change.
- **`lib/data.ts`** — typed content arrays (testimonials, portfolio items, etc.) consumed by page components and `components/PortfolioGrid.tsx` / `components/TestimonialCard.tsx` / `components/TestimonialCarousel.tsx`.
- **`components/`** — flat directory of shared UI; no subfolders. Notable ones: `Header.tsx`/`Footer.tsx` (site chrome, rendered from `app/layout.tsx`), `QuoteForm.tsx` (posts to a Formspree endpoint — the endpoint URL lives in that file), `TerrazzoPanel.tsx` (CSS-generated placeholder visuals used where real photography is absent), `MaterialGallery.tsx`/`BeforeAfterGallery.tsx`/`PortfolioGrid.tsx` (image-heavy gallery components), `WhatsAppButton.tsx`/`ChatWidget.tsx` (floating contact widgets).
- **`public/images/`** — real project photography, organized into subfolders by material/product line (e.g. `Custom Terrazzo Design/`). Filenames are descriptive (used for SEO), not numeric IDs.
- Path alias `@/*` maps to repo root (see `tsconfig.json`).
- Images use `next/image` with AVIF/WebP output; `next.config.mjs` allowlists remote image hosts (`picsum.photos` placeholder source, legacy WordPress upload path on `dynamicstoneinc.com`).
