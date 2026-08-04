import { Link } from "@tanstack/react-router";
import { Facebook, Ghost, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { RESTAURANT } from "@/lib/site";

export function Footer() {
  const links = [
    { to: "/about", label: "About" },
    { to: "/menu", label: "Menu" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Reservations" },
    { to: "/contact", label: "FAQ" },
  ];

  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="mashrabiya h-3 w-full opacity-25" aria-hidden="true" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-[family-name:var(--font-display)] text-3xl tracking-[0.18em] text-gold">
            ALMAJLIS
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-charcoal-foreground/70">
            Dhaka's home of authentic Arabian dining — charcoal kebabs, slow-smoked mandi and the
            unhurried warmth of a true majlis.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={RESTAURANT.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Almajlis on Instagram"
              className="rounded-md border border-gold/30 p-2.5 text-gold transition-colors hover:bg-gold hover:text-charcoal"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={RESTAURANT.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Almajlis on Facebook"
              className="rounded-md border border-gold/30 p-2.5 text-gold transition-colors hover:bg-gold hover:text-charcoal"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={RESTAURANT.social.snapchat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Almajlis on Snapchat"
              className="rounded-md border border-gold/30 p-2.5 text-gold transition-colors hover:bg-gold hover:text-charcoal"
            >
              <Ghost className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.28em] text-gold">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-charcoal-foreground/75">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.28em] text-gold">Visit Us</h3>
          <ul className="mt-5 space-y-4 text-sm text-charcoal-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{RESTAURANT.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`tel:${RESTAURANT.phone}`} className="hover:text-gold">
                {RESTAURANT.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${RESTAURANT.email}`} className="break-all hover:text-gold">
                {RESTAURANT.email}
              </a>
            </li>
            <li className="text-charcoal-foreground/60">{RESTAURANT.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-charcoal-foreground/10">
        <p className="container-x py-6 text-center text-xs text-charcoal-foreground/50">
          © {new Date().getFullYear()} {RESTAURANT.name} · {RESTAURANT.nameAr}
        </p>
      </div>
    </footer>
  );
}