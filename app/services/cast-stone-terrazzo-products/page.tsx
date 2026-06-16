import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import MaterialGallery from "@/components/MaterialGallery";

export const metadata: Metadata = {
  title: "Cast Stone / Terrazzo Products",
  description:
    "Custom cast stone and terrazzo products — countertops, tables, feature walls, columns, and precast steps — designed and crafted in Vancouver, BC.",
};

const applications = [
  {
    title: "Feature Walls & Columns",
    description:
      "A myriad of stylistic and colour enhancements can be incorporated into a variety of architectural surfaces, from accent walls to structural columns.",
    image: "/images/Custom Terrazzo Design/project_Textured Contrast Feature.jpg",
    alt: "Custom terrazzo feature wall coating",
  },
  {
    title: "Restaurant / Bar Tables & Counter Tops",
    description:
      "From traditional to trendy, subtle to bold — every counter top and table is poured to capture your concept in this versatile medium.",
    image: "/images/Residential and Commercial/project_White Rock Spa.jpg",
    alt: "Custom terrazzo spa fireplace surround in White Rock",
  },
  {
    title: "Furniture Pieces & Conference Tables",
    description:
      "Lightweight composite cast stone pieces, resilient and freight-friendly — we can arrange shipping to your door, anywhere in the Lower Mainland.",
    image: "/images/Custom Terrazzo Design/project_Custom Design.jpg",
    alt: "Custom terrazzo architectural surface detail",
  },
];

const stepSystems = [
  {
    name: "Open Terrazzo",
    description: "Un-grouted aggregate finish with a naturally textured surface.",
  },
  {
    name: "Rustic Terrazzo",
    description: "Stone with grout — durable and slip-resistant for high-traffic areas.",
  },
  {
    name: "Polished Terrazzo",
    description: "Ground and polished to a smooth, seamless interior finish.",
  },
];

export default function CastStoneProductsPage() {
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
              Architectural Surfaces
            </p>
            <h1 className="font-serif text-4xl font-bold capitalize leading-[1.1] text-cream-50 sm:text-5xl">
              Cast Stone / Terrazzo Products
            </h1>
            <span className="mt-6 block h-[3px] w-20 rounded-full bg-gradient-to-r from-terracotta-300 to-brass-300" aria-hidden="true" />
            <p className="mt-6 text-lg leading-relaxed text-cream-100/75">
              A myriad of stylistic and colour enhancements can be incorporated into a
              variety of architectural surfaces — feature walls, columns, restaurant
              and bar tables, counter tops, furniture pieces, and conference tables.
            </p>
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

      {/* Applications grid - temporarily hidden (Feature Walls & Columns, Restaurant / Bar Tables & Counter Tops, Furniture Pieces & Conference Tables)
      <section className="bg-stone-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            {applications.map((app) => (
              <div
                key={app.title}
                className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-stone-900">
                    {app.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Terrazzo Counter Tops */}
      <section className="relative overflow-hidden bg-stone-50 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-br from-terracotta-200/40 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative pb-6 pl-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-soft lg:aspect-square">
                <Image
                  src="/images/Terrazzo Table Top.jpg"
                  alt="Custom terrazzo table top"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 hidden max-w-[80%] rounded-2xl bg-white p-5 shadow-soft sm:block">
                <p className="font-serif text-lg font-semibold text-stone-900">
                  Terrazzo Table Top
                </p>
                <p className="mt-1 text-sm text-stone-500">Custom aggregates &amp; matrix colour</p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Custom Surfaces"
                title="Terrazzo counter tops"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
                <p>
                  There is virtually no limit to the beautiful effects that can be
                  achieved for your one-of-a-kind counter top when selecting your own
                  aggregates and matrix colour. From traditional to trendy, from subtle
                  to bold, you&apos;ll be sure to capture your concept with this
                  versatile medium.
                </p>
                <p>
                  Avoid the cost and time of producing a custom mold by choosing from
                  our standard modules. We have developed a variable counter top form
                  that will work for most kitchen and bathroom requirements. The depth
                  is a constant 25.5&quot; for kitchens and 22.5&quot; for bath. Once
                  the pour has hardened, all surfaces are ground and polished.
                </p>
                <p>
                  100% recycled glass aggregates are readily available to provide a
                  unique sustainable material for your next green build design project.
                  These lightweight composite pieces are resilient and freight friendly
                  — we can arrange for shipping to your door.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precast Steps */}
      <section className="relative overflow-hidden bg-stone-950 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(45deg,rgba(212,165,116,0.08)_0px,rgba(212,165,116,0.08)_1px,transparent_1px,transparent_32px),repeating-linear-gradient(-45deg,rgba(212,165,116,0.08)_0px,rgba(212,165,116,0.08)_1px,transparent_1px,transparent_32px)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Custom Formed / Precast"
                title="Precast steps & step treads"
                eyebrowClassName="text-terracotta-300"
                titleClassName="text-cream-50"
              />
              <p className="mt-6 text-base leading-relaxed text-cream-100/75">
                Our precast step treads come in many colours and can be polished smooth
                for interior use or left textured with a slip-resistant finish for
                exterior use. Terrazzo step treads create a seamless textural and
                visual flow from flooring area to stairway. Our standard step treads
                are 1&apos; wide and 2.5&quot; thick but can be customized to a
                multitude of sizes, thicknesses, and colours. Standard lead times are
                approximately 2 to 3 weeks.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-300">
                Three systems available
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {stepSystems.map((system) => (
                  <div
                    key={system.name}
                    className="group relative overflow-hidden rounded-2xl border border-cream-100/10 bg-stone-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-terracotta-400/40 hover:shadow-soft"
                  >
                    <h3 className="font-serif text-base font-semibold text-cream-50 transition-colors duration-300 group-hover:text-terracotta-300">
                      {system.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream-100/70">
                      {system.description}
                    </p>
                    <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-terracotta-400 to-brass-400 transition-transform duration-300 group-hover:scale-x-100" />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative pb-6 pr-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-soft">
                <Image
                  src="/images/Cast Stone -Terrazzo Products/Precast Terrazzo Steps.jpg"
                  alt="Precast terrazzo exterior steps"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 hidden max-w-[80%] rounded-2xl bg-white p-5 shadow-soft sm:block">
                <p className="font-serif text-lg font-semibold text-stone-900">
                  Precast Terrazzo Steps
                </p>
                <p className="mt-1 text-sm text-stone-500">2–3 week standard lead time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
