import type { Testimonial } from "@/lib/data";

function QuoteMark() {
  return (
    <svg viewBox="0 0 32 24" className="h-7 w-9 text-terracotta-300" aria-hidden="true" fill="currentColor">
      <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0L14.4 3.2C9.6 4.4 7.2 7.2 7.2 11.2H12.8V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.2 30.4 0L32 3.2C27.2 4.4 24.8 7.2 24.8 11.2H30.4V24H17.6Z" />
    </svg>
  );
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta-200 hover:shadow-soft">
      <span
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-terracotta-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative">
        <span className="inline-flex transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110">
          <QuoteMark />
        </span>
        <blockquote className="mt-4 text-base leading-relaxed text-stone-700">
          “{testimonial.quote}”
        </blockquote>
      </div>
      <figcaption className="relative mt-6 border-t border-stone-100 pt-4 transition-colors duration-300 group-hover:border-terracotta-100">
        <p className="font-serif text-base font-semibold text-stone-900">{testimonial.name}</p>
        <p className="text-sm text-stone-500">{testimonial.role}</p>
      </figcaption>
      <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-terracotta-400 to-brass-400 transition-transform duration-300 group-hover:scale-x-100" />
    </figure>
  );
}
