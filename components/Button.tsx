import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta-500";

const variants: Record<string, string> = {
  primary:
    "bg-gradient-to-r from-terracotta-400 to-terracotta-600 text-stone-900 hover:from-terracotta-300 hover:to-terracotta-500 shadow-soft hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-stone-900 text-terracotta-200 border border-terracotta-500/40 hover:bg-stone-800 hover:border-terracotta-400 hover:-translate-y-0.5",
  ghost:
    "border border-stone-300 text-stone-800 hover:border-terracotta-400 hover:text-terracotta-600 hover:-translate-y-0.5",
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
