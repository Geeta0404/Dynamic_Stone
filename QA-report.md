# Dynamic Stone Inc — QA Findings Report

**Date:** June 16, 2026  
**Tester:** Claude (Graphics QA Playbook)  
**Pages tested:** Home, About, Services, Services/Flooring Systems, Services/Cast Stone, Portfolio, Testimonials, FAQ & Process, Get a Quote  
**Browser:** Chrome (desktop, localhost:3000)

---

## Findings Table

| # | Severity | Area | What's wrong | How to reproduce | Fix |
|---|----------|------|--------------|------------------|-----|
| 1 | **Major** | Footer — all pages | Footer logo renders as a dim grey circle instead of the terrazzo stone pattern | Scroll to footer on any page | In `components/Footer.tsx` line 21, change the span class from `bg-cream-100/10 ring-1 ring-cream-100/20` → `terrazzo-dark ring-1 ring-terracotta-300/50` (same as the header span on line 42 of `Header.tsx`) |
| 2 | **Major** | Hero carousel — Home | Hero is blank/white for ~2 seconds on initial page load; no placeholder or skeleton | Hard-refresh localhost:3000, watch the first second | Add a `min-h-[85vh] bg-stone-950` placeholder on the HeroCarousel container that shows immediately, so the dark background is visible while images load |
| 3 | **Major** | Footer — all pages | `terrazzo-dark` CSS class applied to the `<footer>` element uses `background-repeat: repeat` (default) and no explicit `background-size`, causing the 8 radial-gradient speck dots to scatter visually at unexpected positions near section edges | View any footer in a full-page screenshot | Add `background-repeat: no-repeat; background-size: 100% 100%;` to `.terrazzo-dark` in `app/globals.css` (same fix already applied to `.terrazzo-bg`) |
| 4 | **Minor** | Services page — subtitle | The subtitle paragraph "Whether you need a full flooring system or a one-of-a-kind cast piece, our process is" ends mid-sentence (visible in the "Two Ways We Bring Terrazzo" section) | Navigate to `/services`, scroll to the "Two Ways" heading | Open `app/services/page.tsx` and complete the subtitle sentence |
| 5 | **Minor** | Quote page — layout | At desktop widths, the right column (form) is shorter than the left column (text + info box + photo), leaving a blank lower-right quadrant | Navigate to `/quote` on a wide viewport, scroll to the bottom of the form | Either add a second project photo below the form on the right, or remove the bottom image from the left so both columns are similar height |
| 6 | **Minor** | All dark sections — animations | Scroll-reveal animations (`opacity: 0 → 1`) fire on IntersectionObserver. When users navigate via anchor link, browser back/forward, or fast keyboard scrolling, content sections can be invisible until scrolled manually | Press Ctrl+Home after the page loads fully; hero briefly shows blank | Add `animation-fill-mode: both` or ensure a fallback class is applied synchronously on mount so content is never permanently invisible |
| 7 | **Minor** | Testimonials page | The page hero/header section is invisible on initial render (blank area at top) | Navigate to `/testimonials` directly; top of page shows blank off-white area | Same root cause as #6 — apply an initial visible state to the page heading section |
| 8 | **Nit** | Footer — all pages | "Site by LaunchPadInc" attribution is truncated at narrower viewport widths (appears as "Site by Padln...") | Resize to ~1024px width | Wrap the right-side copyright row items in a flex container with `gap-2 flex-wrap` so the text wraps gracefully |
| 9 | **Nit** | All pages — floating chat widget | The WhatsApp / chat widget button (bottom-right) overlaps the third portfolio card and last testimonial card on some scroll positions | Scroll the Portfolio or Testimonials grid to the far right/bottom | Set `z-index` on the widget only when open; reduce size or reposition on mobile |

---

## Summary

**Overall state:** The site is visually polished and structurally sound. Navigation, filters, FAQ accordion, the hero carousel (when loaded), and all page content render correctly. No JavaScript errors. The top 3 things to fix first:

1. **Footer logo (Major #1)** — One-line CSS class change. Every visitor sees a grey blob where the Dynamic Stone brand mark should be.  
2. **Terrazzo dots bleed (Major #3)** — Two lines added to globals.css. Currently the scattered dots look like a rendering glitch in dark-background sections and footers.  
3. **Hero blank flash (Major #2)** — The ~2-second white flash on the homepage hero is the first impression. A dark `bg-stone-950` background on the carousel container costs nothing and removes the jarring blank moment.

---

## What I'd Improve Next (beyond immediate defects)

- **No mobile hamburger menu** — at ≤768px the full desktop nav is still rendered. Add a mobile menu toggle (the `useState(open)` in `Header.tsx` is already wired but may need a hamburger button and mobile nav drawer).
- **Real photos** — The TerrazzoPanel placeholders are clever, but replacing them with actual project photos will dramatically increase trust. Follow the `/public/images/` guide in `README.md`.
- **Formspree endpoint** — `QuoteForm.tsx` posts to `FORMSPREE_ENDPOINT` placeholder. No leads will be captured until this is wired to a real form endpoint.
- **Accessibility pass** — SVG icons in dark sections lack `aria-label` or `title`. The portfolio filter buttons don't announce the active state to screen readers (`aria-pressed`).
- **`background-position: no-repeat` on `.terrazzo-dark` section backgrounds** — Once #3 is fixed globally, audit each section that uses a custom `background-image` inline to confirm dots are always contained.
