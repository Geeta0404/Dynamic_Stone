"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

export default function MaterialGallery({
  images,
  variant = "default",
}: {
  images: GalleryImage[];
  variant?: "default" | "angled";
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  const angled = variant === "angled";

  return (
    <>
      <div className="relative grid grid-cols-3 gap-4 lg:gap-5">
        {angled && (
          <span
            className="pointer-events-none absolute -right-4 -top-4 z-0 hidden h-[40%] w-[40%] rounded-2xl border-2 border-terracotta-300/60 [clip-path:polygon(16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0_100%,0_16px)] lg:block"
            aria-hidden="true"
          />
        )}
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`group relative z-10 aspect-[4/5] overflow-hidden shadow-soft ${
              angled
                ? "ring-1 ring-terracotta-300/30 [clip-path:polygon(16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0_100%,0_16px)]"
                : "rounded-2xl ring-1 ring-terracotta-300/30"
            }`}
            aria-label={`View larger image: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-stone-950/0 transition-colors duration-300 group-hover:bg-stone-950/30">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-stone-900 opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3-3" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </span>
            </span>
          </button>
        ))}

        {/* Floating heritage badge */}
        <div className="absolute -bottom-6 -right-4 z-10 flex items-center gap-3 rounded-2xl border border-terracotta-200 bg-white px-5 py-4 shadow-soft sm:-right-8">
          <span className="font-serif text-3xl font-bold text-terracotta-500">30+</span>
          <span className="max-w-[7rem] text-xs font-semibold uppercase leading-tight tracking-[0.15em] text-stone-600">
            Years of Craftsmanship
          </span>
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/20 bg-stone-900/60 text-cream-50 transition-colors hover:bg-stone-900 sm:right-8 sm:top-8"
            aria-label="Close image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream-100/20 bg-stone-900/60 text-cream-50 transition-colors hover:bg-stone-900 sm:left-6"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream-100/20 bg-stone-900/60 text-cream-50 transition-colors hover:bg-stone-900 sm:right-6"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <p className="absolute bottom-6 left-1/2 max-w-xl -translate-x-1/2 px-4 text-center text-sm text-cream-100/80">
            {images[activeIndex].alt}
          </p>
        </div>
      )}
    </>
  );
}
