"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/data";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
              isOpen
                ? "border-terracotta-200 shadow-soft"
                : "border-stone-200 hover:border-stone-300"
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span
                  className={`font-serif text-base font-semibold sm:text-lg ${
                    isOpen ? "text-terracotta-600" : "text-stone-900"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    isOpen
                      ? "bg-gradient-to-br from-terracotta-400 to-terracotta-600 text-stone-900"
                      : "bg-stone-100 text-stone-500"
                  }`}
                  aria-hidden="true"
                >
                  <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
                  <span
                    className={`absolute h-0.5 w-3.5 rounded-full bg-current transition-transform duration-300 ${
                      isOpen ? "rotate-0 scale-x-0" : "rotate-90"
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-stone-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-stone-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
