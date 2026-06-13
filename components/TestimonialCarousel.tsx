"use client";

import { useCallback, useEffect, useState } from "react";
import type { Testimonial } from "@/lib/data";

function QuoteMark() {
  return (
    <svg viewBox="0 0 32 24" className="h-9 w-12 text-terracotta-400" aria-hidden="true" fill="currentColor">
      <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0L14.4 3.2C9.6 4.4 7.2 7.2 7.2 11.2H12.8V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.2 30.4 0L32 3.2C27.2 4.4 24.8 7.2 24.8 11.2H30.4V24H17.6Z" />
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {direction === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

export default function TestimonialCarousel({
  testimonials,
  interval = 7000,
}: {
  testimonials: Testimonial[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setActive((index + testimonials.length) % testimonials.length);
    },
    [testimonials.length]
  );

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [testimonials.length, interval]);

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative overflow-hidden">
        {testimonials.map((testimonial, i) => (
          <figure
            key={testimonial.name}
            className={`flex flex-col items-center px-4 text-center transition-all duration-500 ease-out sm:px-12 ${
              i === active
                ? "relative opacity-100"
                : "pointer-events-none absolute inset-0 opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <QuoteMark />
            <blockquote className="mt-6 font-serif text-xl leading-relaxed text-cream-50 sm:text-2xl">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6">
              <p className="text-base font-semibold text-terracotta-300">{testimonial.name}</p>
              <p className="text-sm text-cream-100/60">{testimonial.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {testimonials.length > 1 && (
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(active - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/20 text-cream-100/70 transition-colors hover:border-terracotta-300/60 hover:text-terracotta-300"
          >
            <ArrowIcon direction="left" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((testimonial, i) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-gradient-to-r from-terracotta-300 to-brass-300"
                    : "w-3 bg-cream-50/20 hover:bg-cream-50/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(active + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/20 text-cream-100/70 transition-colors hover:border-terracotta-300/60 hover:text-terracotta-300"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      )}
    </div>
  );
}
