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
      {/* CTA bar */}
      <div className="border-b border-cream-100/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 lg:flex-row lg:px-10">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-terracotta-600 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-cream-50 transition-colors hover:bg-terracotta-700"
          >
            Call {siteConfig.phone}
          </a>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-cream-100/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-cream-50 transition-colors hover:bg-cream-50/10 hover:border-cream-50"
          >
            Request A Quote
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full logo-badge ring-1 ring-terracotta-300/50" />
              <span className="font-serif text-lg font-semibold text-cream-50">
                {siteConfig.shortName}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/60">
              {siteConfig.description}
            </p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-cream-100/60 transition-colors hover:text-terracotta-300"
              aria-label="Dynamic Stone Inc on Instagram"
            >
              <InstagramIcon />
            </a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-300">
              Explore
            </p>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-cream-100/70">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-terracotta-300">
                  {link.label}
                </Link>
              ))}
              <Link href="/quote" className="transition-colors hover:text-terracotta-300">
                Get a Quote
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-300">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-cream-100/70">
              <a href={siteConfig.phoneHref} className="transition-colors hover:text-terracotta-300">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-terracotta-300">
                {siteConfig.email}
              </a>
              <p>{siteConfig.address.serviceArea}</p>
            </div>
            <div className="mt-5 flex flex-col gap-1 text-xs text-cream-100/50">
              <span className="font-semibold uppercase tracking-[0.15em] text-cream-100/70">Hours</span>
              {siteConfig.hours.map((h) => (
                <span key={h.day}>
                  {h.day}: {h.time}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-cream-100/10 pt-6 text-xs text-cream-100/50 sm:flex-row sm:flex-wrap">
          <p>
            © {year} {siteConfig.name} · Crafting terrazzo in Vancouver since {siteConfig.founded}.
          </p>
          <p className="shrink-0 sm:pr-20">Site by LaunchPadInc</p>
        </div>
      </div>
    </footer>
  );
}
