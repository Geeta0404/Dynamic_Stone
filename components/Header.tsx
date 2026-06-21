"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpenHref, setMobileOpenHref] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileOpenHref(null);
  }, [pathname]);

  const isActive = (href: string, children?: { href: string }[]) => {
    if (pathname === href) return true;
    if (children) return children.some((c) => pathname === c.href);
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-terracotta-500/10 bg-stone-950/95 backdrop-blur-md shadow-sm"
          : "border-transparent bg-stone-950"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full logo-badge ring-1 ring-terracotta-300/50" />
          <span className="font-serif text-xl font-semibold tracking-tight text-cream-50">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-terracotta-300 ${
                    isActive(link.href, link.children)
                      ? "text-terracotta-300"
                      : "text-cream-100/80"
                  }`}
                >
                  {link.label}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 rounded-2xl border border-terracotta-500/15 bg-stone-900 p-2 opacity-0 shadow-soft transition-all duration-200 group-hover:visible group-hover:translate-y-3 group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-stone-800 hover:text-terracotta-300 ${
                        pathname === child.href ? "text-terracotta-300" : "text-cream-100/80"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-terracotta-300 ${
                  pathname === link.href ? "text-terracotta-300" : "text-cream-100/80"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={siteConfig.phoneHref}
            className="text-sm font-medium text-cream-100/80 hover:text-terracotta-300"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-terracotta-400 to-terracotta-600 px-6 py-2.5 text-sm font-medium text-stone-900 shadow-soft transition-all hover:from-terracotta-300 hover:to-terracotta-500 hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/20 lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-cream-50 transition-all ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-cream-50 transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 bg-cream-50 transition-all ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-terracotta-500/10 bg-stone-950 px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className={`py-2 text-base font-medium ${
                        isActive(link.href, link.children)
                          ? "text-terracotta-300"
                          : "text-cream-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${link.label} submenu`}
                      onClick={() =>
                        setMobileOpenHref((v) => (v === link.href ? null : link.href))
                      }
                      className="p-2 text-cream-100/60"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileOpenHref === link.href ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {mobileOpenHref === link.href && (
                    <div className="ml-4 flex flex-col gap-1 border-l border-cream-100/10 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`py-2 text-sm font-medium ${
                            pathname === child.href ? "text-terracotta-300" : "text-cream-100/70"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 text-base font-medium ${
                    pathname === link.href ? "text-terracotta-300" : "text-cream-100"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a href={siteConfig.phoneHref} className="py-2 text-base font-medium text-cream-100">
              {siteConfig.phone}
            </a>
            <Link
              href="/quote"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-terracotta-400 to-terracotta-600 px-6 py-3 text-sm font-medium text-stone-900"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
