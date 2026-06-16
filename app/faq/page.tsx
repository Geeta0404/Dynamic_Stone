import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import { faqItems, processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ & Process",
  description:
    "Answers to common questions about terrazzo, plus a step-by-step look at how Dynamic Stone Inc. plans and completes every project.",
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero / Process */}
      <section className="relative overflow-hidden bg-stone-950 py-16 lg:py-24">
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
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Process"
            title="How a project comes together"
            description="From the first conversation to the final walkthrough, here's exactly what to expect when you work with us."
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
        </div>
      </section>

      <section className="relative overflow-hidden bg-stone-50 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-br from-terracotta-200/40 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Quick answers to the questions we hear most. Don't see yours? Get in touch and we'll be happy to help."
            align="center"
          />
          <div className="mt-12">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
