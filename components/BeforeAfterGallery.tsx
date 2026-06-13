"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type BeforeAfterPair = {
  title: string;
  location: string;
  before: string;
  after: string;
};

function SliderHandle() {
  return (
    <div className="pointer-events-none absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 shadow-soft ring-2 ring-cream-50/80">
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-stone-700" aria-hidden="true">
        <path
          d="M14 7l5 5-5 5M10 7l-5 5 5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function CompareSlider({
  pair,
  interactive,
  initial = 50,
}: {
  pair: BeforeAfterPair;
  interactive: boolean;
  initial?: number;
}) {
  const [percent, setPercent] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, ratio)));
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => updateFromClientX(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging]);

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl bg-stone-200 ${
        interactive ? "cursor-ew-resize" : ""
      }`}
      onPointerDown={(e) => {
        if (!interactive) return;
        setDragging(true);
        updateFromClientX(e.clientX);
      }}
    >
      {/* After image (clean) — full width base layer */}
      <Image
        src={pair.after}
        alt={`${pair.title} — after`}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="pointer-events-none object-cover"
        draggable={false}
      />
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-gradient-to-r from-terracotta-400 to-terracotta-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-900">
        After
      </span>

      {/* Before image (dirty) — clipped overlay from the left, full-size underneath */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        <Image
          src={pair.before}
          alt={`${pair.title} — before`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover grayscale-[40%] sepia-[15%]"
          draggable={false}
        />
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-stone-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cream-50">
          Before
        </span>
      </div>

      {/* Divider line + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-cream-50/90 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
        style={{ left: `${percent}%` }}
      >
        {interactive && <SliderHandle />}
      </div>
    </div>
  );
}

export default function BeforeAfterGallery({ pairs }: { pairs: BeforeAfterPair[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
        {pairs.map((pair, i) => (
          <button
            key={pair.title}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group block w-full text-left"
            aria-label={`View before and after slider for ${pair.title}`}
          >
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-soft transition-transform duration-500 group-hover:scale-[1.02]">
                <CompareSlider pair={pair} interactive={false} />
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-stone-950/0 transition-colors duration-300 group-hover:bg-stone-950/20">
                <span className="rounded-full bg-cream-50/0 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cream-50 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:bg-stone-950/40 group-hover:opacity-100">
                  Drag to compare
                </span>
              </div>
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-cream-50">
              {pair.title}
            </h3>
            <p className="mt-1 text-sm text-cream-100/60">{pair.location}</p>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/80 p-4 backdrop-blur-sm fade-in"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream-50 text-stone-700 shadow-soft transition-transform hover:scale-105 hover:text-terracotta-600 sm:right-0 sm:top-0 sm:translate-x-1/2 sm:-translate-y-1/2"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <CompareSlider pair={pairs[activeIndex]} interactive initial={50} />
            <div className="mt-4 text-center text-cream-50">
              <h3 className="font-serif text-xl font-semibold">{pairs[activeIndex].title}</h3>
              <p className="mt-1 text-sm text-cream-100/70">{pairs[activeIndex].location}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream-100/50">
                Drag the handle left or right to compare
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
