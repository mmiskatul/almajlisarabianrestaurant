import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RESTAURANT, wa } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function ReservationSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const message = [
      "Table reservation request — Almajlis",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email") || "—"}`,
      `Guests: ${get("party")}`,
      `Date: ${get("date")}`,
      `Time: ${get("time")}`,
      `Special requests: ${get("requests") || "—"}`,
    ].join("\n");
    window.open(wa(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const field =
    "mt-2 h-11 rounded-md border-border bg-background focus-visible:ring-primary";

  return (
    <section id="reservations" className="bg-charcoal py-24 text-charcoal-foreground">
      <div className="container-x">
        <SectionHeading
          eyebrow="Reservations"
          title="Reserve Your Majlis"
          tone="dark"
          subtitle="Send us your details and we'll confirm on WhatsApp within minutes."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal className="rounded-xl border border-gold/20 bg-charcoal-foreground/[0.04] p-7 sm:p-9">
            {sent ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-gold" aria-hidden="true" />
                <h3 className="mt-5 text-2xl text-charcoal-foreground">Request sent</h3>
                <p className="mt-3 max-w-sm text-sm text-charcoal-foreground/70">
                  Your reservation details have been opened in WhatsApp. Press send there and our
                  team will confirm your table shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-7 rounded-md border border-gold/60 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-charcoal"
                >
                  Make another booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <Label htmlFor="res-name" className="text-charcoal-foreground/80">
                    Full name
                  </Label>
                  <Input id="res-name" name="name" required autoComplete="name" className={field} />
                </div>
                <div>
                  <Label htmlFor="res-phone" className="text-charcoal-foreground/80">
                    Phone
                  </Label>
                  <Input
                    id="res-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={field}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="res-email" className="text-charcoal-foreground/80">
                    Email
                  </Label>
                  <Input
                    id="res-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={field}
                  />
                </div>
                <div>
                  <Label htmlFor="res-party" className="text-charcoal-foreground/80">
                    Party size
                  </Label>
                  <Input
                    id="res-party"
                    name="party"
                    type="number"
                    min={1}
                    max={60}
                    defaultValue={2}
                    required
                    className={field}
                  />
                </div>
                <div>
                  <Label htmlFor="res-date" className="text-charcoal-foreground/80">
                    Date
                  </Label>
                  <Input id="res-date" name="date" type="date" required className={field} />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="res-time" className="text-charcoal-foreground/80">
                    Time
                  </Label>
                  <Input id="res-time" name="time" type="time" required className={field} />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="res-requests" className="text-charcoal-foreground/80">
                    Special requests
                  </Label>
                  <Textarea
                    id="res-requests"
                    name="requests"
                    rows={4}
                    placeholder="Family section, birthday setup, whole ouzi pre-order…"
                    className="mt-2 rounded-md border-border bg-background focus-visible:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex h-12 items-center justify-center rounded-md bg-primary text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
                >
                  Send reservation via WhatsApp
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120} className="space-y-6">
            <div className="overflow-hidden rounded-xl border border-gold/20">
              <iframe
                title="Almajlis Arabian Restaurant location on Google Maps"
                src={RESTAURANT.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
            <ul className="space-y-5 rounded-xl border border-gold/20 bg-charcoal-foreground/[0.04] p-7 text-sm">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={RESTAURANT.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-foreground/80 hover:text-gold"
                >
                  {RESTAURANT.address}
                </a>
              </li>
              <li className="flex gap-4">
                <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  className="text-charcoal-foreground/80 hover:text-gold"
                >
                  {RESTAURANT.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-4">
                <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={`mailto:${RESTAURANT.email}`}
                  className="break-all text-charcoal-foreground/80 hover:text-gold"
                >
                  {RESTAURANT.email}
                </a>
              </li>
              <li className="flex gap-4">
                <Clock className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-charcoal-foreground/80">{RESTAURANT.hours}</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}