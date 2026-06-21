import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta-500";

const variants: Record<string, string> = {
  primary:
    "bg-terracotta-600 text-cream-50 hover:bg-terracotta-700 shadow-soft hover:shadow-lg",
  secondary:
    "bg-transparent text-cream-50 border border-cream-100/40 hover:bg-cream-50/10 hover:border-cream-50",
  ghost:
    "border border-stone-300 text-stone-800 hover:border-terracotta-600 hover:text-terracotta-600",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
