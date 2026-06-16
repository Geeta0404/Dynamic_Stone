import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import MaterialGallery from "@/components/MaterialGallery";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Terrazzo flooring and epoxy stone solutions: consultation, design, installation, and restoration for residential and commercial projects across Vancouver & the Lower Mainland.",
};

const serviceAreas = [
  {
    href: "/services/flooring-systems",
    title: "Residential + Commercial Flooring Systems",
    description:
      "Rustic, clear textured, and epoxy stone & quartz flooring systems for kitchens, bathrooms, lobbies, pool decks, driveways, and more — built for decades of heavy use.",
    image: "/images/flooring systems/Rustic Terrazzo.jpg",
    alt: "Rustic terrazzo pool deck flooring installation",
    cta: "Explore Flooring Systems",
  },
  {
    href: "/services/cast-stone-terrazzo-products",
    title: "Cast Stone / Terrazzo Products",
    description:
      "Custom cast terrazzo objects — countertops, tables, feature walls, columns, and precast steps — designed and poured for residential and commercial interiors.",
    image: "/images/Terrazzo Table Top.jpg",
    alt: "Custom cast terrazzo table top",
    cta: "Explore Cast Stone Products",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(45deg,rgba(212,165,116,0.08)_0px,rgba(212,165,116,0.08)_1px,transparent_1px,transparent_32px),repeating-linear-gradient(-45deg,rgba(212,165,116,0.08)_0px,rgba(212,165,116,0.08)_1px,transparent_1px,transparent_32px)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-terracotta-500/20 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-brass-500/10 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-terracotta-300">
              Services
            </p>
            <h1 className="font-serif text-4xl font-bold capitalize leading-[1.1] text-cream-50 sm:text-5xl">
              Terrazzo flooring &amp; epoxy stone solutions in Vancouver &amp; the Lower Mainland
            </h1>
            <span className="mt-6 block h-[3px] w-20 rounded-full bg-gradient-to-r from-terracotta-300 to-brass-300" aria-hidden="true" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-cream-100/75">
              <p>
                Consultation, design, installation, and restoration — built for Greater
                Vancouver homes and businesses.
              </p>
              <p>
                Dynamic Stone Inc. works with you to provide beautiful and long-lasting
                terrazzo and epoxy stone flooring treatments for residential and
                commercial interior and exterior uses. We also design and create custom
                cast stone / terrazzo objects that can be incorporated into a variety of
                architectural surfaces.
              </p>
            </div>
          </div>
          <div className="relative">
            <MaterialGallery
              images={[
                {
                  src: "/images/Homepage_img1.png",
                  alt: "Polished terrazzo entranceway flooring crafted by Dynamic Stone Inc",
                },
                {
                  src: "/images/Homepage_img2.jpg",
                  alt: "Custom terrazzo inlay pattern with contrasting aggregate colours",
                },
                {
                  src: "/images/Homepage_img3.jpg",
                  alt: "Custom cast terrazzo reception desk in a commercial lobby",
                },
                {
                  src: "/images/Homepage_img4.jpg",
                  alt: "Custom terrazzo flooring with inlaid logo using coloured aggregate and metal dividers",
                },
                {
                  src: "/images/Homepage_img5.jpeg",
                  alt: "Custom terrazzo fireplace surround inside a Vancouver-area spa",
                },
                {
                  src: "/images/Homepage_img6.jpg",
                  alt: "Weather-resistant precast terrazzo exterior steps crafted by Dynamic Stone Inc",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="relative overflow-hidden bg-stone-50 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-br from-terracotta-200/40 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="What We Offer"
            title="Two ways we bring terrazzo to your space"
            description="Whether you need a full flooring system or a one-of-a-kind cast piece, our process is the same: consult, design, pour, polish."
            align="center"
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {serviceAreas.map((service, i) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-terracotta-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta-400/40 hover:shadow-soft"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/0 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 font-serif text-sm font-bold text-terracotta-600 shadow-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-serif text-xl font-semibold text-stone-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-terracotta-600 transition-colors group-hover:text-terracotta-700">
                    {service.cta}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-terracotta-400 to-brass-400 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
