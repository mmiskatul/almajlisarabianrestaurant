import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "start";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-start",
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-primary">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-4xl font-light sm:text-5xl",
          tone === "dark" ? "text-charcoal-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <div
        className={cn("rule-gold mt-6 w-24", align === "center" && "mx-auto")}
        aria-hidden="true"
      />
      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            tone === "dark" ? "text-charcoal-foreground/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}