import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="terrazzo-dark text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full terrazzo-dark ring-1 ring-terracotta-300/50" />
            <span className="font-serif text-lg font-semibold text-cream-50">
              {siteConfig.shortName}
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream-100/70">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-terracotta-300">
                {link.label}
              </Link>
            ))}
            <Link href="/quote" className="transition-colors hover:text-terracotta-300">
              Get a Quote
            </Link>
          </nav>

          <div className="flex items-center gap-5 text-sm text-cream-100/70">
            <a href={siteConfig.phoneHref} className="transition-colors hover:text-terracotta-300">
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-terracotta-300"
              aria-label="Dynamic Stone Inc on Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-1 border-t border-cream-100/10 pt-4 text-xs text-cream-100/60 sm:flex-row sm:items-baseline sm:justify-center sm:gap-6 sm:text-center">
          <span className="font-semibold uppercase tracking-[0.15em] text-terracotta-300">Hours</span>
          {siteConfig.hours.map((h) => (
            <span key={h.day}>
              {h.day}: {h.time}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-cream-100/10 pt-4 text-xs text-cream-100/50 sm:flex-row sm:flex-wrap">
          <p>
            © {year} {siteConfig.name} · Crafting terrazzo in Vancouver since {siteConfig.founded}.
          </p>
          <p className="shrink-0 pr-20">Site by LaunchPadInc</p>
        </div>
      </div>
    </footer>
  );
}
