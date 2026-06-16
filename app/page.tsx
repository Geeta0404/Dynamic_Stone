import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HeroCarousel from "@/components/HeroCarousel";
import MaterialGallery from "@/components/MaterialGallery";
import { processSteps, testimonials, portfolioItems } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

const heroSlides = [
  {
    src: "/images/Residential and Commercial/project_Lottery Home Lions Bay.jpg",
    alt: "Custom terrazzo great room flooring in a Lions Bay lottery show home",
  },
  {
    src: "/images/Residential and Commercial/project_Whistler - Exterior Steps.jpg",
    alt: "Weather-resistant precast terrazzo exterior steps at a Whistler home",
  },
  {
    src: "/images/Residential and Commercial/project_White Rock Spa.jpg",
    alt: "Custom terrazzo fireplace surround inside a White Rock spa",
  },
  {
    src: "/images/Custom Terrazzo Design/project_BCAA Custom Inset Logo.jpg",
    alt: "Custom terrazzo flooring with an inlaid BCAA logo using coloured aggregate and metal dividers",
  },
];

export const metadata: Metadata = {
  title: "Custom Terrazzo Flooring & Countertops in Vancouver, BC",
  description:
    "Dynamic Stone Inc. has crafted custom terrazzo flooring, countertops, and precast stone for homes and businesses across Vancouver & the Lower Mainland for over 30 years. Get a free quote today.",
};

export default function HomePage() {
  const featuredTestimonials = testimonials.slice(0, 3);
  const featuredWork = portfolioItems.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="group relative isolate flex min-h-[85vh] items-center overflow-hidden">
        <HeroCarousel slides={heroSlides} />
        <div className="mx-auto w-full max-w-5xl px-6 py-24 text-center lg:px-10">
          <div className="fade-in">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brass-300">
              Vancouver, BC · Est. {siteConfig.founded}
            </p>
            <h1 className="font-serif text-4xl font-bold capitalize leading-[1.1] text-cream-50 sm:text-5xl lg:text-7xl">
              Terrazzo, crafted to last a lifetime.
            </h1>
            <span className="mx-auto mt-6 block h-[3px] w-20 rounded-full bg-gradient-to-r from-terracotta-300 to-brass-300" aria-hidden="true" />
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream-100/80">
              Three decades of custom terrazzo flooring, countertops, and surfaces —
              built once, admired for generations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/quote">Get a Free Quote</Button>
              <Button href="/portfolio" variant="secondary">
                View Our Work
              </Button>
            </div>
            <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-terracotta-300/20 bg-cream-50/10 px-6 py-5 backdrop-blur-sm transition-colors hover:bg-cream-50/15 hover:border-terracotta-300/40">
                <dd className="font-serif text-3xl font-bold text-terracotta-300 sm:text-4xl">30+</dd>
                <dt className="mt-1 text-sm text-cream-100/70">Years of experience</dt>
              </div>
              <div className="rounded-2xl border border-terracotta-300/20 bg-cream-50/10 px-6 py-5 backdrop-blur-sm transition-colors hover:bg-cream-50/15 hover:border-terracotta-300/40">
                <dd className="font-serif text-3xl font-bold text-terracotta-300 sm:text-4xl">450+</dd>
                <dt className="mt-1 text-sm text-cream-100/70">Projects completed</dt>
              </div>
              <div className="rounded-2xl border border-terracotta-300/20 bg-cream-50/10 px-6 py-5 backdrop-blur-sm transition-colors hover:bg-cream-50/15 hover:border-terracotta-300/40">
                <dd className="font-serif text-xl font-bold text-terracotta-300 sm:text-2xl">
                  Lower Mainland
                </dd>
                <dt className="mt-1 text-sm text-cream-100/70">Service area</dt>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* What is Terrazzo */}
      <section className="relative overflow-hidden bg-stone-50 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-terracotta-200/40 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="The Material"
                title="What is terrazzo, and why does it last for decades?"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
                <p>
                  Terrazzo is a composite surface made by setting fragments of marble,
                  quartz, granite, or glass into a binder, then grinding and polishing
                  the result to a smooth, seamless finish. The technique dates back
                  centuries, and for good reason — it produces one of the most durable,
                  low-maintenance surfaces available.
                </p>
                <p>
                  Unlike tile or laminate, terrazzo has no grout lines to stain or
                  crack, and its colour and pattern run through the full thickness of
                  the material — so it keeps its appearance for the life of the
                  building. We design every mix to match your space, from subtle
                  neutral tones to bold custom palettes.
                </p>
              </div>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-terracotta-200 pt-6 sm:grid-cols-3">
                <div>
                  <dt className="font-serif text-2xl font-bold text-terracotta-600">Marble</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-stone-500">Quartz &amp; Glass</dd>
                </div>
                <div>
                  <dt className="font-serif text-2xl font-bold text-terracotta-600">Seamless</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-stone-500">No Grout Lines</dd>
                </div>
                <div>
                  <dt className="font-serif text-2xl font-bold text-terracotta-600">Lifetime</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-stone-500">Colour Through</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/faq" variant="primary">
                  Learn More About Our Process
                </Button>
                <Button href="/portfolio" variant="ghost">
                  View Our Work
                </Button>
              </div>
            </div>
            <MaterialGallery
              images={[
                {
                  src: "/images/Homepage_img1.png",
                  alt: "Polished terrazzo entranceway flooring in a North Vancouver condominium building",
                },
                {
                  src: "/images/Homepage_img2.jpg",
                  alt: "Custom yin yang pattern inlaid in terrazzo flooring with contrasting aggregate colours",
                },
                {
                  src: "/images/Homepage_img3.jpg",
                  alt: "Custom cast terrazzo reception desk in a commercial lobby",
                },
                {
                  src: "/images/Homepage_img4.jpg",
                  alt: "Custom terrazzo flooring with an inlaid BCAA logo using coloured aggregate and metal dividers",
                },
                {
                  src: "/images/Homepage_img5.jpeg",
                  alt: "Custom terrazzo fireplace surround inside a White Rock spa",
                },
                {
                  src: "/images/Homepage_img6.jpg",
                  alt: "Weather-resistant precast terrazzo exterior steps at a Whistler home",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="relative overflow-hidden bg-stone-950 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(45deg,rgba(212,165,116,0.08)_0px,rgba(212,165,116,0.08)_1px,transparent_1px,transparent_32px),repeating-linear-gradient(-45deg,rgba(212,165,116,0.08)_0px,rgba(212,165,116,0.08)_1px,transparent_1px,transparent_32px)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="How We Work"
            title="A clear process, from first call to final polish"
            description="Every project follows the same careful sequence — refined over thirty years — so you always know what's happening and what comes next."
            align="center"
            eyebrowClassName="text-terracotta-300"
            titleClassName="text-cream-50"
            descriptionClassName="text-cream-100/70"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-2xl border border-cream-100/10 bg-stone-900 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta-400/40 hover:shadow-soft"
              >
                <span
                  className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-terracotta-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="relative font-serif text-4xl font-semibold text-terracotta-400/40 transition-colors duration-300 group-hover:text-terracotta-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative mt-4 font-serif text-lg font-semibold text-cream-50">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-cream-100/70">
                  {step.description}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-terracotta-400 to-brass-400 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/faq" variant="primary">
              See Full FAQ &amp; Process
            </Button>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-stone-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected Projects"
              title="Recent terrazzo projects across Vancouver & the Lower Mainland"
            />
            <Button href="/portfolio" variant="primary">
              View Full Portfolio
            </Button>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featuredWork.map((item) => (
              <Link
                key={item.id}
                href="/portfolio"
                className="group block overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500">{item.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-stone-950 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(45deg,rgba(212,165,116,0.08)_0px,rgba(212,165,116,0.08)_1px,transparent_1px,transparent_32px),repeating-linear-gradient(-45deg,rgba(212,165,116,0.08)_0px,rgba(212,165,116,0.08)_1px,transparent_1px,transparent_32px)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Client Stories"
            title="Trusted by homeowners, contractors, and developers"
            align="center"
            eyebrowClassName="text-terracotta-300"
            titleClassName="text-cream-50"
          />
          <div className="mt-14">
            <TestimonialCarousel testimonials={featuredTestimonials} />
          </div>
          <div className="mt-12 text-center">
            <Button href="/testimonials" variant="primary">
              Read All Testimonials
            </Button>
          </div>
        </div>
      </section>

    </>
  );
}
