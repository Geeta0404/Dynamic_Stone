"use client";

import { useState } from "react";
import Image from "next/image";

type Value = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

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

export default function ValuesSlider({ values }: { values: Value[] }) {
  const perPage = 2;
  const pageCount = Math.ceil(values.length / perPage);
  const [page, setPage] = useState(0);

  const goTo = (index: number) => {
    setPage((index + pageCount) % pageCount);
  };

  const visible = values.slice(page * perPage, page * perPage + perPage);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {visible.map((value, i) => (
          <div key={value.title} className="group rounded-2xl bg-white/90 p-5 shadow-soft backdrop-blur-sm">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl ring-1 ring-terracotta-300/30">
              <Image
                src={value.image}
                alt={value.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/0 to-transparent" />
              <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 font-serif text-sm font-bold text-terracotta-600 shadow-soft">
                {String(page * perPage + i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-stone-900">
              {value.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            aria-label="Previous values"
            onClick={() => goTo(page - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 shadow-soft transition-colors hover:border-terracotta-400 hover:text-terracotta-600"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next values"
            onClick={() => goTo(page + 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 shadow-soft transition-colors hover:border-terracotta-400 hover:text-terracotta-600"
          >
            <ArrowIcon direction="right" />
          </button>
          <div className="ml-2 flex gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show values ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-8 bg-gradient-to-r from-terracotta-400 to-brass-400"
                    : "w-3 bg-white hover:bg-stone-100"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
