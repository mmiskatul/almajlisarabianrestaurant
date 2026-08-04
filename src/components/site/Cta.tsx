import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const ctaVariants = {
  solid: `${base} bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:brightness-110 hover:-translate-y-0.5`,
  outline: `${base} border border-gold/70 text-gold hover:bg-gold hover:text-charcoal`,
  ghost: `${base} border border-border text-foreground hover:border-primary hover:text-primary`,
};

export function CtaLink({
  href,
  variant = "solid",
  className,
  children,
  ...rest
}: ComponentProps<"a"> & { href: string; variant?: keyof typeof ctaVariants; children: ReactNode }) {
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (external) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(ctaVariants[variant], className)}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={cn(ctaVariants[variant], className)}>
      {children}
    </Link>
  );
}