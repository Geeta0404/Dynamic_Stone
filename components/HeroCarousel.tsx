"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type HeroSlide = {
  src: string;
  alt: string;
};

export default function HeroCarousel({
  slides,
  interval = 6000,
}: {
  slides: HeroSlide[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setActive((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="absolute inset-0 -z-10">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-[6s] ease-out ${
              i === active ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/55 to-stone-950/25" />
      <div className="absolute inset-0 bg-stone-950/20" />

      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-gradient-to-r from-terracotta-300 to-brass-300"
                  : "w-3 bg-cream-50/30 hover:bg-cream-50/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
