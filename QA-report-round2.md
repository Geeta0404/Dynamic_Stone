# Dynamic Stone Inc — QA Round 2 Report

**Date:** June 17, 2026  
**Scope:** Full re-sweep of all pages after fixes applied from Round 1  
**Browser:** Chrome desktop, localhost:3000

---

## Previously Fixed — All Confirmed Passing ✅

| # | Original Finding | Status |
|---|-----------------|--------|
| R1-1 | Footer logo was grey circle | ✅ Fixed — terrazzo pattern now matches header |
| R1-2 | Hero carousel white flash on load | ✅ Fixed — loads dark immediately via `bg-stone-950` |
| R1-3 | Terrazzo dots bleeding at footer edges | ✅ Fixed — `background-size: 100% 100%; background-repeat: no-repeat` applied |
| R1-7 | Testimonials page blank top area | ✅ Passes — heading section renders visible immediately |
| R1-8 | "Site by LaunchPadInc" truncated | ✅ Fixed — `flex-wrap` + `shrink-0` + `pr-20` keeps text clear of WhatsApp button |
| R1-9 | Chat widget side-by-side overlap | ✅ Fixed — stacked vertically (`bottom-24 right-5`) |

---

## Round 2 Findings

| # | Severity | Page | What's wrong | How to reproduce | Fix |
|---|----------|------|--------------|------------------|-----|
| 1 | **Minor** | Home — "What is Terrazzo" | The "30+ YEARS OF CRAFTSMANSHIP" badge (bottom-right of the MaterialGallery) is clipped by the chat widget button at the scroll position where they overlap horizontally | Scroll the home page slowly until the badge appears at the bottom-right of the viewport | In `MaterialGallery.tsx`, add `mr-20` to the badge container so it stays left of the fixed chat button |
| 2 | **Minor** | Quote — desktop layout | Right column (form) ends ~300px above the bottom of the left column (info box + photo), leaving a large blank white area at bottom-right | Navigate to `/quote` on a 1366px viewport, scroll to bottom | Either remove the project photo from the left column so both columns are similar height, or add a second photo / a CTA card below the form on the right |

---

## Summary

The site is in strong shape. All six findings from Round 1 that had code fixes are confirmed resolved. Two minor cosmetic issues remain:

1. **Badge clipping (Minor #1)** — The chat widget overlaps the "CRAFTSMANSHIP" badge in the home hero section when the user scrolls to that position. One-line fix in `MaterialGallery.tsx`.
2. **Quote page column gap (Minor #2)** — Pre-existing layout imbalance: the form finishes early, leaving blank space on the right. Low priority until real content decisions are made about the page.

No regressions were introduced by the Round 1 fixes. All navigation links, carousels, accordions, and filter buttons work correctly. Footer logo, hours, and copyright attribution are consistent across all pages.
