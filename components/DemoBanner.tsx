export default function DemoBanner() {
  if (process.env.NEXT_PUBLIC_SITE_LIVE === "true") return null;

  return (
    <div className="bg-stone-950 py-2 text-center">
      <p className="flex items-center justify-center gap-3 px-6 text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta-300">
        <span className="hidden h-px w-8 bg-current sm:inline-block" aria-hidden="true" />
        Demonstration Website &middot; Prepared By LaunchPadInc &middot; Details To Be Confirmed
        <span className="hidden h-px w-8 bg-current sm:inline-block" aria-hidden="true" />
      </p>
    </div>
  );
}
