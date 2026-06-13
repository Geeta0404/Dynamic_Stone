"use client";

import { useState } from "react";
import Image from "next/image";
import {
  portfolioItems,
  portfolioCategories,
  type PortfolioCategory,
} from "@/lib/data";

type Filter = "All" | PortfolioCategory;

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const filters: Filter[] = ["All", ...portfolioCategories];

  return (
    <div>
      <div
        role="group"
        aria-label="Filter portfolio by category"
        className="flex flex-wrap justify-center gap-3"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`relative overflow-hidden rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
              filter === f
                ? "border-terracotta-500 bg-gradient-to-r from-terracotta-500 to-brass-500 text-cream-50 shadow-soft"
                : "border-stone-300 text-stone-700 hover:-translate-y-0.5 hover:border-terracotta-400 hover:text-terracotta-600 hover:shadow-sm"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <figure
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta-200 hover:shadow-soft fade-in"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terracotta-900/40 via-terracotta-900/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 -translate-y-2">
                {item.category}
              </span>
            </div>
            <figcaption className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
                {item.category}
              </p>
              <h3 className="mt-2 font-serif text-lg font-semibold text-stone-900 transition-colors duration-300 group-hover:text-terracotta-600">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-stone-500">{item.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {item.description}
              </p>
            </figcaption>
            <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-terracotta-500 to-brass-500 transition-transform duration-300 group-hover:scale-x-100" />
          </figure>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-stone-500">
          No projects found in this category yet.
        </p>
      )}
    </div>
  );
}
