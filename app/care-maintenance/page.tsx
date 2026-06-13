import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Care & Maintenance",
  description:
    "How to clean, seal, and care for your terrazzo floors and countertops — daily care tips, a resealing schedule, and dos and don'ts from Dynamic Stone Inc., Vancouver's terrazzo specialists.",
};

const cleaningTips = [
  {
    title: "Daily & weekly cleaning",
    description:
      "Sweep or dust-mop regularly to remove grit that can dull the surface over time. For a deeper clean, damp-mop with warm water and a few drops of a pH-neutral cleaner — avoid anything acidic or abrasive.",
  },
  {
    title: "Spills & stains",
    description:
      "Wipe up spills promptly, especially oils, wine, and citrus juices. A soft cloth and pH-neutral cleaner handle most marks. For stubborn stains, a terrazzo-safe poultice can lift the stain without damaging the surface.",
  },
  {
    title: "What to avoid",
    description:
      "Skip vinegar, bleach, ammonia, and other acidic or highly alkaline cleaners — they break down sealers and etch the surface over time. Avoid steel wool or abrasive scrub pads, which can scratch a polished finish.",
  },
];

const sealingSchedule = [
  {
    setting: "Interior, low traffic",
    interval: "Every 3–5 years",
    notes: "Bathrooms, foyers, and feature floors with light foot traffic.",
  },
  {
    setting: "Interior, high traffic",
    interval: "Every 1–2 years",
    notes: "Commercial lobbies, retail spaces, and busy kitchens.",
  },
  {
    setting: "Exterior surfaces",
    interval: "Every 2–4 years",
    notes: "Pool decks, patios, steps, and driveways exposed to U.V. and weather.",
  },
];

const doDont = {
  dos: [
    "Use felt pads under furniture legs to prevent scratches.",
    "Place mats at entrances to reduce grit tracked onto the floor.",
    "Clean spills as they happen, especially acidic liquids.",
    "Schedule a resealing assessment if water stops beading on the surface.",
  ],
  donts: [
    "Don't use vinegar, bleach, or ammonia-based cleaners.",
    "Don't drag heavy furniture or equipment across the surface.",
    "Don't use steel wool, wire brushes, or abrasive scouring pads.",
    "Don't let standing water or de-icing salts sit on exterior terrazzo.",
  ],
};

export default function CareMaintenancePage() {
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
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center lg:px-10 lg:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-terracotta-300">
            Care &amp; Maintenance
          </p>
          <h1 className="font-serif text-4xl font-bold capitalize leading-[1.1] text-cream-50 sm:text-5xl">
            Keeping your terrazzo beautiful for decades
          </h1>
          <span className="mx-auto mt-6 block h-[3px] w-20 rounded-full bg-gradient-to-r from-terracotta-300 to-brass-300" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/75">
            Terrazzo is one of the lowest-maintenance surfaces you can choose —
            but a little routine care goes a long way. Here's how to clean,
            protect, and reseal your floors and countertops, based on what
            we've learned over 30 years of installing terrazzo across
            Vancouver &amp; the Lower Mainland.
          </p>
        </div>
      </section>

      {/* Cleaning tips */}
      <section className="relative overflow-hidden bg-stone-50 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-br from-terracotta-200/40 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Everyday Care"
            title="Cleaning tips for a lasting shine"
            description="Most terrazzo care comes down to routine sweeping and the right cleaning products. Here's what we recommend."
            align="center"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cleaningTips.map((tip, i) => (
              <div
                key={tip.title}
                className="group relative overflow-hidden rounded-2xl border border-terracotta-200/60 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta-400/40 hover:shadow-soft"
              >
                <span
                  className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-terracotta-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="relative font-serif text-4xl font-semibold text-terracotta-200 transition-colors duration-300 group-hover:text-terracotta-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative mt-4 font-serif text-lg font-semibold text-stone-900">
                  {tip.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-stone-600">
                  {tip.description}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-terracotta-400 to-brass-400 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sealing schedule */}
      <section className="relative overflow-hidden bg-stone-950 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-terracotta-500/20 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-brass-500/10 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Sealing & Resealing"
            title="A simple resealing schedule"
            description="Sealing protects terrazzo from stains and moisture. How often you'll need to reseal depends on location and traffic — here's a general guide. We'll confirm the right schedule for your specific installation."
            align="center"
            eyebrowClassName="text-terracotta-300"
            titleClassName="text-cream-50"
            descriptionClassName="text-cream-100/70"
          />
          <div className="mt-14 overflow-hidden rounded-2xl border border-cream-100/10 bg-stone-900 shadow-soft">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-950/60 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta-300">
                <tr>
                  <th className="px-6 py-4">Setting</th>
                  <th className="px-6 py-4">Recommended interval</th>
                  <th className="px-6 py-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-100/10">
                {sealingSchedule.map((row) => (
                  <tr key={row.setting}>
                    <td className="px-6 py-4 font-semibold text-cream-50">{row.setting}</td>
                    <td className="px-6 py-4 text-terracotta-300 font-medium">{row.interval}</td>
                    <td className="px-6 py-4 text-cream-100/70">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-cream-100/60">
            Not sure if it's time to reseal? A simple test: if water no longer
            beads on the surface and instead soaks in, it's time.
          </p>
        </div>
      </section>

      {/* Dos and don'ts */}
      <section className="relative overflow-hidden bg-stone-50 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-gradient-to-br from-terracotta-200/40 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Quick Reference"
            title="Do's and don'ts"
            align="center"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-terracotta-200/60 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta-400/40 hover:shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-stone-900">Do</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600">
                {doDont.dos.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br from-terracotta-400 to-brass-400 text-xs font-bold text-stone-900">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-terracotta-400 to-brass-400 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-terracotta-200/60 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta-400/40 hover:shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-stone-900">Don't</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600">
                {doDont.donts.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-stone-300 text-xs font-bold text-stone-500">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-terracotta-400 to-brass-400 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-stone-600">
              Every completed project comes with a care guide tailored to your
              specific terrazzo system. If you're not sure how to handle a
              stain or whether it's time to reseal, just reach out — we're
              happy to help.
            </p>
            <div className="mt-6">
              <Button href="/quote">Get a Free Quote</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
