import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGrid from "@/components/PortfolioGrid";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse residential, commercial, and recreational terrazzo projects completed by Dynamic Stone Inc. across Greater Vancouver.",
};

const beforeAfterPairs = [
  {
    title: "Living Room Floor Restoration",
    location: "Lions Bay, BC",
    before: "/images/Custom Terrazzo Design/project_Precast stepss.jpg",
    after: "/images/Custom Terrazzo Design/project_Precast steps.jpg",
  },
  {
    title: "Entranceway Resurfacing",
    location: "North Vancouver, BC",
    before: "/images/Custom Terrazzo Design/project_Precast stepssss.jpg",
    after: "/images/Custom Terrazzo Design/project_Precast steps3.jpg",
  },
  {
    title: "Exterior Pool Deck",
    location: "West Vancouver, BC",
    before: "/images/Custom Terrazzo Design/project_Precast steps4.jpg",
    after: "/images/Custom Terrazzo Design/project_Precast steps5.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-950">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-terracotta-500/20 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-brass-500/10 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 text-center lg:px-10 lg:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-terracotta-300">
            Portfolio
          </p>
          <h1 className="font-serif text-4xl font-bold capitalize leading-[1.1] text-cream-50 sm:text-5xl">
            Residential, commercial &amp; recreational projects
          </h1>
          <span className="mx-auto mt-6 block h-[3px] w-20 rounded-full bg-gradient-to-r from-terracotta-300 to-brass-300" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/75">
            Every project below was designed, poured, and polished by our team.
            Filter by category to see work most relevant to your space.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-stone-50 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-br from-terracotta-200/40 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <PortfolioGrid />
        </div>
      </section>

      {/* Gallery: Before & After */}
      <section className="bg-stone-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Gallery"
            title="Before & after transformations"
            description="A look at the difference a professional terrazzo restoration or installation can make. Click any image to open it full-size and drag the slider to compare."
            align="center"
            eyebrowClassName="text-terracotta-300"
            titleClassName="text-cream-50"
            descriptionClassName="text-cream-100/70"
          />
          <div className="mt-14">
            <BeforeAfterGallery pairs={beforeAfterPairs} />
          </div>
        </div>
      </section>
    </>
  );
}
