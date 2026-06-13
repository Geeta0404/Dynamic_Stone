import type { Metadata } from "next";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a free, no-obligation quote for your terrazzo flooring, countertop, or restoration project in Greater Vancouver.",
};

export default function QuotePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-600">
            Get a Quote
          </p>
          <h1 className="font-serif text-4xl font-semibold capitalize leading-[1.1] text-stone-900 sm:text-5xl">
            Tell us about your project.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Fill out the form and we'll get back to you within one business day with
            next steps — usually a short call or site visit to scope the work
            accurately.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <div>
              <p className="text-sm font-semibold text-stone-900">Prefer to talk?</p>
              <a
                href={siteConfig.phoneHref}
                className="text-lg font-semibold text-terracotta-600 hover:text-terracotta-700"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-900">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-stone-600 hover:text-terracotta-600"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-900">Service area</p>
              <p className="text-sm text-stone-600">
                Vancouver &amp; the Lower Mainland — Burnaby, Richmond, North &amp; West
                Vancouver, Surrey, and the Fraser Valley.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-900">Business hours</p>
              <ul className="mt-1 space-y-0.5 text-sm text-stone-600">
                {siteConfig.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative mt-8 hidden aspect-[3/2] w-full overflow-hidden rounded-2xl lg:block">
            <Image
              src="/images/terrece.jpg"
              alt="Custom terrazzo fireplace surround inside a White Rock spa"
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-soft sm:p-10">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
