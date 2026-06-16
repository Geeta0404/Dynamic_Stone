import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ValuesSlider from "@/components/ValuesSlider";
import MaterialGallery from "@/components/MaterialGallery";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Three decades of terrazzo craftsmanship in Vancouver. Learn the story, values, and people behind Dynamic Stone Inc.",
};

const values = [
  {
    title: "Craft over shortcuts",
    description:
      "Every mix, pour, and polish is done by hand by people who have spent years perfecting the trade. We don't rush cure times or skip steps.",
    image: "/images/Homepage_img1.png",
    alt: "Close-up of a hand-polished terrazzo surface showing marble and quartz aggregate",
  },
  {
    title: "Honest communication",
    description:
      "You'll always know the timeline, the cost, and what to expect — before, during, and after the project.",
    image: "/images/Homepage_img2.jpg",
    alt: "Dynamic Stone Inc team reviewing a terrazzo project plan on site",
  },
  {
    title: "Built for the long term",
    description:
      "We design every surface to perform for decades, not just to look good on installation day.",
    image: "/images/Homepage_img3.jpg",
    alt: "Custom terrazzo flooring installed in a Vancouver home, built to last for decades",
  },
  {
    title: "Local, accountable, reachable",
    description:
      "We're a Vancouver-based team. If something needs attention after the job is done, we're a phone call away.",
    image: "/images/Homepage_img4.jpg",
    alt: "Dynamic Stone Inc crew on a terrazzo job site in Vancouver, BC",
  },
];

const timeline = [
  {
    year: "1996",
    title: "Founded in Vancouver",
    description:
      "Dynamic Stone Inc. opens its doors with a small crew and a commitment to old-world terrazzo craftsmanship.",
  },
  {
    year: "2004",
    title: "First major commercial contracts",
    description:
      "Growing word-of-mouth leads to flooring projects in office lobbies and retail spaces across the Lower Mainland.",
  },
  {
    year: "2013",
    title: "Expanded into custom countertops",
    description:
      "We bring terrazzo's durability and design flexibility to kitchens and bathrooms with bespoke countertop work.",
  },
  {
    year: "2021",
    title: "Recreational & institutional projects",
    description:
      "Arenas, pools, and community centres turn to Dynamic Stone for flooring that withstands decades of heavy use.",
  },
  {
    year: "Today",
    title: "30 years, 450+ projects",
    description:
      "Still family-run, still hands-on — bringing the same care to every project, large or small.",
  },
];

export default function AboutPage() {
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
              Our Story
            </p>
            <h1 className="font-serif text-4xl font-bold capitalize leading-[1.1] text-cream-50 sm:text-5xl">
              Three decades of terrazzo, made in Vancouver.
            </h1>
            <span className="mt-6 block h-[3px] w-20 rounded-full bg-gradient-to-r from-terracotta-300 to-brass-300" aria-hidden="true" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-cream-100/75">
              <p>
                Dynamic Stone Inc. started in {siteConfig.founded} with a simple idea:
                terrazzo done properly — mixed, poured, and polished with the same care
                whether it is a single bathroom floor or an entire office tower lobby.
              </p>
              <p>
                Three decades later, that idea has not changed. We are still a
                Vancouver-based, hands-on team. Many of our clients come back to us for
                a second or third project, and a good number found us because a
                contractor or building manager recommended our work from a job we did
                years earlier.
              </p>
              <p>
                We have poured terrazzo in heritage homes in Shaughnessy, restaurant bars
                in Mount Pleasant, gymnasium floors in Burnaby, and lobby floors in
                Coal Harbour high-rises. Every project gets the same attention to
                detail — because the work has to look right for the next forty years,
                not just the next photo.
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
            <div className="absolute -bottom-6 -left-4 z-10 flex items-center gap-3 rounded-2xl border border-terracotta-200 bg-white px-5 py-4 shadow-soft sm:-left-8">
              <span className="font-serif text-3xl font-bold text-terracotta-500">
                {siteConfig.founded}
              </span>
              <span className="max-w-[7rem] text-xs font-semibold uppercase leading-tight tracking-[0.15em] text-stone-600">
                Founded in Vancouver
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden bg-stone-50 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-br from-terracotta-200/40 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Milestones"
            title="Three decades, in brief"
            align="center"
          />
          <div className="relative mt-16">
            {/* Connecting line */}
            <span
              className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-terracotta-300 to-transparent lg:block"
              aria-hidden="true"
            />
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-8 lg:pl-0 lg:text-center">
                  {/* Marker */}
                  <span className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-terracotta-400 to-terracotta-600 ring-4 ring-stone-50 lg:relative lg:left-auto lg:top-auto lg:mx-auto lg:mb-5" />
                  <p className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-600">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-stone-50 py-20 lg:py-28">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/Homepage_img1.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-50/60" />
        </div>
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-terracotta-200/40 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="What We Believe"
                title="The values behind every project"
              />
              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Thirty years in business comes down to a handful of principles
                we do not compromise on — no matter how big or small the job.
                Click through to see what guides our work, from the first
                site visit to the final polish.
              </p>
              <ol className="mt-8 space-y-4">
                {values.map((value, i) => (
                  <li key={value.title} className="flex items-center gap-4">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-to-br from-terracotta-400 to-terracotta-600 font-serif text-sm font-bold text-stone-900">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-lg font-semibold text-stone-900">
                      {value.title}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <ValuesSlider values={values} />
          </div>
        </div>
      </section>

    </>
  );
}
