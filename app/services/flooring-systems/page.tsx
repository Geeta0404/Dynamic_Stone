import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ApplicationIcon from "@/components/ApplicationIcon";
import MaterialGallery from "@/components/MaterialGallery";
import Button from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Flooring Systems",
  description:
    "Rustic terrazzo, clear textured terrazzo, and epoxy stone & coloured quartz flooring systems for residential, commercial, and recreational spaces in Vancouver & the Lower Mainland.",
  alternates: { canonical: "/services/flooring-systems" },
};

const systems = [
  {
    title: "Rustic Terrazzo",
    description:
      "This textured system is quite often used indoors, but was primarily developed for outdoor use because of its durability, slip resistance, and ease of maintenance.",
    useCase: "Ideal for pool decks, patios, driveways, walkways, and entryways where grip underfoot matters as much as good looks.",
    suitability: "Indoor & outdoor",
    durability: "Resists frost, UV, and heavy foot traffic for 25+ years with minimal upkeep.",
    image: "/images/flooring systems/Rustic Terrazzo.jpg",
    alt: "Rustic terrazzo pool deck, West Vancouver, BC",
    caption: "Rustic Terrazzo Pool, West Vancouver, BC",
  },
  {
    title: "Clear Textured Terrazzo",
    description:
      "Natural river stones are visible through the clear resin they are set into. This system is used indoors only.",
    useCase: "A favourite for feature floors, lobbies, and showrooms where the natural stone aggregate becomes part of the design.",
    suitability: "Indoor only",
    durability: "Highly scratch- and stain-resistant; the clear resin keeps its clarity and shine for decades under normal indoor wear.",
    image: "/images/flooring systems/Clear Textured Terrazzo.jpg",
    alt: "Clear textured terrazzo with natural river stones",
    caption: "Clear Textured Terrazzo, river stone aggregate",
  },
  {
    title: "Epoxy Stone & Coloured Quartz",
    description:
      "Natural stones and/or coloured quartz set in a durable epoxy resin, applied over a variety of substrates for a distinctive textured finish.",
    useCase: "Well suited to garage floors, basements, balconies, sundecks, and commercial entrances that need a tough, decorative surface.",
    suitability: "Indoor & outdoor",
    durability: "Built to last; exterior installations may need a fresh resin coat every 2–4 years depending on U.V. exposure.",
    image: "/images/flooring systems/Epoxy Stone & Coloured Quartz Flooring.jpg",
    alt: "Epoxy stone and coloured quartz flooring",
    caption: "Epoxy Stone & Coloured Quartz Flooring",
  },
];

const designLogos = [
  {
    image: "/images/flooring systems/Custom terrazzo floor logos1.jpg",
    alt: "Custom terrazzo floor logo for a pharmacy",
  },
  {
    image: "/images/flooring systems/Custom terrazzo floor logos2.jpg",
    alt: "Custom terrazzo floor pattern and inlay design",
  },
  {
    image: "/images/flooring systems/Custom terrazzo floor logos3.jpg",
    alt: "Custom BCAA logo inlaid in terrazzo flooring",
  },
];

const applications = [
  {
    category: "Residential",
    items: [
      "Kitchens",
      "Bathrooms",
      "Rec rooms",
      "Foyers",
      "Sun rooms",
      "Balconies",
      "Decks",
      "Pool decks",
      "Steps",
      "Walkways",
      "Feature walls",
      "Driveways",
      "Garage floors",
    ],
  },
  {
    category: "Commercial",
    items: ["Shopping malls", "Retail stores", "Offices", "Lobbies"],
  },
  {
    category: "Recreational",
    items: ["Health clubs", "Pool areas", "Locker rooms", "Spa areas"],
  },
];

export default function FlooringSystemsPage() {
  return (
    <>
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
              Flooring Systems · Vancouver &amp; the Lower Mainland
            </p>
            <h1 className="font-serif text-4xl font-bold capitalize leading-[1.1] text-cream-50 sm:text-5xl">
              2,000 years ago the Romans used ox blood to achieve colour.
            </h1>
            <span className="mt-6 block h-[3px] w-20 rounded-full bg-gradient-to-r from-terracotta-300 to-brass-300" aria-hidden="true" />
            <p className="mt-6 text-lg leading-relaxed text-cream-100/75">
              Today, modern technology in the form of polymer resins allows for
              unlimited colours and improved performance characteristics — installed
              by a Vancouver-based team with 30+ years of experience and 450+
              completed projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/quote">Get a Free Quote</Button>
              <Button href={siteConfig.phoneHref} variant="secondary">
                Call {siteConfig.phone}
              </Button>
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

      {/* Types of terrazzo */}
      <section className="relative overflow-hidden bg-stone-50 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-br from-terracotta-200/40 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Types of Terrazzo" title="Three systems, built for the way you'll use the space" align="center" />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {systems.map((system) => (
              <div
                key={system.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-terracotta-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta-400/40 hover:shadow-soft"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={system.image}
                    alt={system.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-serif text-xl font-semibold text-stone-900">
                    {system.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {system.description}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {system.useCase}
                  </p>
                  <dl className="mt-5 space-y-2 border-t border-stone-100 pt-4 text-xs">
                    <div className="flex justify-between gap-4">
                      <dt className="font-semibold uppercase tracking-[0.15em] text-terracotta-600">Best for</dt>
                      <dd className="text-right text-stone-600">{system.suitability}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold uppercase tracking-[0.15em] text-terracotta-600">Durability</dt>
                      <dd className="mt-1 leading-relaxed text-stone-600">{system.durability}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-400">
                    {system.caption}
                  </p>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-terracotta-400 to-brass-400 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designs & logos */}
      <section className="relative overflow-hidden bg-stone-50 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-terracotta-200/40 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Designs, Logos & Sustainability"
            title="Intricate, lasting designs — built on a greener mix"
            description="Our flooring systems provide a broad colour palette and fluid design potential. Finishes can range from conventional and subtle to design-forward and bold, depending on the hues, patterns, and textures you choose. We use 100% recycled glass aggregates as a standard option across our terrazzo systems, diverting waste glass from landfill while adding sparkle and colour depth to the finished floor. For LEED-focused commercial and institutional projects, recycled-content terrazzo can contribute toward materials and resources credits — ask us about documentation for your green building submission."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {designLogos.map((logo) => (
              <div
                key={logo.image}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft"
              >
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-stone-400">
            Custom terrazzo floor logos
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="relative overflow-hidden bg-stone-950 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(45deg,rgba(212,165,116,0.08)_0px,rgba(212,165,116,0.08)_1px,transparent_1px,transparent_32px),repeating-linear-gradient(-45deg,rgba(212,165,116,0.08)_0px,rgba(212,165,116,0.08)_1px,transparent_1px,transparent_32px)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Where It Works"
            title="Applications across Vancouver & the Lower Mainland"
            align="center"
            eyebrowClassName="text-terracotta-300"
            titleClassName="text-cream-50"
          />
          <div className="mt-14 space-y-16">
            {applications.map((group) => (
              <div key={group.category}>
                <div className="mb-8 flex items-center gap-4">
                  <h3 className="font-serif text-xl font-semibold text-cream-50 sm:text-2xl">
                    {group.category}
                  </h3>
                  <span className="h-px flex-1 bg-cream-100/10" />
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8 lg:gap-y-16">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="group relative mt-7 flex flex-col items-center rounded-2xl border border-cream-100/10 bg-stone-900 px-6 pb-9 pt-11 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta-400/40 hover:shadow-soft"
                    >
                      <span className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-terracotta-400 to-terracotta-600 text-stone-900 shadow-soft transition-all duration-300 group-hover:scale-110">
                        <ApplicationIcon name={item} className="h-7 w-7" />
                      </span>
                      <h4 className="my-4 font-serif text-base font-semibold text-cream-50">
                        {item}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
