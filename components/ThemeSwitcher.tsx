"use client";

import { useEffect, useRef, useState } from "react";

type Theme = {
  id: string;
  name: string;
  description: string;
  swatches: [string, string, string];
};

const themes: Theme[] = [
  {
    id: "daylight",
    name: "Daylight",
    description: "Terracotta & brass · classic",
    swatches: ["#e0481f", "#c4881f", "#fdfcfa"],
  },
  {
    id: "peacock-lounge",
    name: "Peacock Lounge",
    description: "Teal + peacock blue · luxe",
    swatches: ["#1a7a7a", "#1d5c8c", "#0c3b3b"],
  },
  {
    id: "bumblebee",
    name: "Bumblebee",
    description: "Black & yellow · high voltage",
    swatches: ["#f2c200", "#1a1a1a", "#fdfcfa"],
  },
  {
    id: "royal-indigo",
    name: "Royal Indigo",
    description: "Purple · black · blue · white",
    swatches: ["#4b3f8e", "#2e5aa8", "#fdfcfa"],
  },
  {
    id: "northern-lights",
    name: "Northern Lights",
    description: "Blue & green · aurora",
    swatches: ["#1f9e8e", "#2a7fc1", "#fdfcfa"],
  },
  {
    id: "midnight-violet",
    name: "Midnight Violet",
    description: "Purple & black · after dark",
    swatches: ["#6b3fa0", "#3a2459", "#211c17"],
  },
  {
    id: "crimson-night",
    name: "Crimson Night",
    description: "Red & black · bold",
    swatches: ["#b8202e", "#7a1620", "#211c17"],
  },
  {
    id: "sunset-ember",
    name: "Sunset Ember",
    description: "Orange → rose · warm glow",
    swatches: ["#e8743b", "#c44569", "#fdfcfa"],
  },
  {
    id: "cyber-volt",
    name: "Cyber Volt",
    description: "Lime on black · electric",
    swatches: ["#9fe000", "#3a8c5e", "#211c17"],
  },
  {
    id: "rose-noir",
    name: "Rose Noir",
    description: "Rose + maroon · velvet",
    swatches: ["#b3536a", "#6e2c3e", "#211c17"],
  },
];

const STORAGE_KEY = "dynamic-stone-theme";

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("daylight");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setActive(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const selectTheme = (id: string) => {
    setActive(id);
    document.documentElement.setAttribute("data-theme", id);
    window.localStorage.setItem(STORAGE_KEY, id);
  };

  return (
    <div ref={containerRef} className="fixed bottom-5 left-5 z-50">
      {open && (
        <div className="mb-3 w-72 max-h-[70vh] overflow-y-auto rounded-2xl border border-stone-200 bg-white p-4 shadow-soft">
          <p className="mb-3 px-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Try a theme
          </p>
          <div className="space-y-1">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => selectTheme(theme.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors hover:bg-stone-50 ${
                  active === theme.id ? "bg-stone-100" : ""
                }`}
              >
                <span className="flex shrink-0 -space-x-1.5">
                  {theme.swatches.map((color, i) => (
                    <span
                      key={i}
                      className="h-5 w-5 rounded-full border border-white shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-stone-900">
                    {theme.name}
                    {active === theme.id ? " ✓" : ""}
                  </span>
                  <span className="block truncate text-xs text-stone-500">
                    {theme.description}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Try a theme"
        aria-expanded={open}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-600 text-white shadow-soft transition-transform hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
          <path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8H17a3 3 0 0 0 3-3c0-5-3.6-10.5-8-10.5z" />
        </svg>
      </button>
    </div>
  );
}
