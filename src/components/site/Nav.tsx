import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { WA_RESERVE, RESTAURANT } from "@/lib/site";

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/menu", label: t("nav_menu") },
    { to: "/about", label: t("nav_about") },
    { to: "/gallery", label: t("nav_gallery") },
    { to: "/contact", label: t("nav_contact") },
  ];

  const solid = scrolled || !overHero || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-charcoal/95 shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-x flex h-20 items-center justify-between gap-4"
      >
        <Link to="/" className="flex flex-col leading-none" aria-label={RESTAURANT.name}>
          <span className="font-[family-name:var(--font-display)] text-2xl tracking-[0.18em] text-gold">
            ALMAJLIS
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.34em] text-charcoal-foreground/60">
            Arabian Restaurant
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal-foreground/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            aria-label={lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
            className="rounded-md border border-gold/50 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-charcoal"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>

          <a
            href={WA_RESERVE}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t("reserve")}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-md p-2 text-charcoal-foreground lg:hidden"
          >
            {open ? <Menu className="hidden" /> : null}
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-gold/15 bg-charcoal transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <ul className="container-x flex flex-col py-4">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="block py-3 text-sm uppercase tracking-[0.2em] text-charcoal-foreground/85"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={WA_RESERVE}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reserve a table on WhatsApp"
      className="fixed bottom-5 end-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-105 sm:hidden"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}