import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronDown,
  Clock,
  Flame,
  ShoppingBag,
  Star,
  UtensilsCrossed,
  Users,
  CalendarHeart,
} from "lucide-react";
import { CtaLink } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ReservationSection } from "@/components/site/ReservationSection";
import { FaqSection } from "@/components/site/FaqSection";
import { CATEGORY_IMAGE, DISH_IMAGE, GALLERY, IMG } from "@/components/site/dishImages";
import { useLang } from "@/lib/i18n";
import {
  CATEGORIES,
  MENU,
  RESTAURANT,
  TESTIMONIALS,
  WA_CATERING,
  WA_PICKUP,
  WA_RESERVE,
} from "@/lib/site";

const title = "Almajlis Arabian Restaurant | Authentic Arabian Dining in Gulshan-2, Dhaka";
const description =
  "Charcoal kebabs, slow-smoked mandi and true Arabian hospitality at Almajlis, Gulshan-2 Dhaka. Open daily 11 AM – 2 AM. Reserve your table on WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const SIGNATURE = [
  "lamb-mandi",
  "mixed-grill",
  "lamb-haneeth",
  "lamb-tagine",
  "shish-tawook",
  "ouzi",
  "kunafa",
  "gahwa",
];

function Index() {
  const { t, lang } = useLang();
  const ar = lang === "ar";
  const dishes = SIGNATURE.map((id) => MENU.find((m) => m.id === id)!).filter(Boolean);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <img
          src={IMG.interior}
          alt="The candlelit dining hall at Almajlis Arabian Restaurant in Gulshan-2, Dhaka"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-veil)" }}
          aria-hidden="true"
        />
        <div className="container-x relative z-10 py-32 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.34em] text-gold sm:text-xs">
              {t("hero_eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-light leading-[1.05] text-charcoal-foreground sm:text-6xl lg:text-7xl">
              {t("hero_title")}
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-charcoal-foreground/80">
              {t("hero_sub")}
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <CtaLink href="/menu">{t("view_menu")}</CtaLink>
              <CtaLink href={WA_RESERVE} variant="outline">
                {t("reserve")}
              </CtaLink>
            </div>
          </Reveal>
        </div>
        <a
          href="#highlights"
          aria-label="Scroll to content"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-charcoal-foreground/70 transition-colors hover:text-gold"
        >
          <ChevronDown className="h-7 w-7 animate-bounce" aria-hidden="true" />
        </a>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" className="bg-charcoal py-14 text-charcoal-foreground">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: UtensilsCrossed, stat: "100+", label: "Arabian dishes on the menu" },
            { icon: Flame, stat: `Est. ${RESTAURANT.established}`, label: "Serving Dhaka ever since" },
            { icon: Clock, stat: "11 AM – 2 AM", label: "Open daily, kitchen till late" },
            { icon: Users, stat: "Majlis seating", label: "Family & group sections" },
          ].map((item, i) => (
            <Reveal
              key={item.stat}
              delay={i * 90}
              className="rounded-xl border border-gold/15 bg-charcoal-foreground/[0.04] p-7 text-center"
            >
              <item.icon className="mx-auto h-6 w-6 text-gold" aria-hidden="true" />
              <p className="mt-4 font-[family-name:var(--font-display)] text-2xl text-charcoal-foreground">
                {item.stat}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-charcoal-foreground/60">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="bg-background py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div
              className="mashrabiya absolute -inset-4 -z-10 rounded-2xl opacity-15"
              aria-hidden="true"
            />
            <img
              src={IMG.founder}
              alt="Abdul Aziz Aishan, Managing Director of Almajlis Arabian Restaurant"
              width={900}
              height={1024}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="start"
              eyebrow={t("our_story")}
              title="A majlis, brought from Arabia to Gulshan"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Almajlis began with a simple conviction: that Dhaka deserved Arabian food cooked the
                way it is cooked at home — lamb buried over embers for haneeth, kebabs minced by
                hand each morning, mandi rice perfumed with saffron and black lime.
              </p>
              <p>
                Our chefs come from Yemeni and Levantine kitchens, and nothing leaves the pass that
                they would not serve at their own table. Around it all is the majlis itself — low
                light, carved screens, gahwa poured the moment you sit down, and the unhurried
                hospitality that makes a meal last.
              </p>
            </div>
            <p className="mt-7 text-sm uppercase tracking-[0.18em] text-primary">
              Abdul Aziz Aishan — Managing Director, Almajlis
            </p>
            <div className="mt-8">
              <CtaLink href="/about" variant="ghost">
                {t("discover_story")}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="bg-secondary/50 py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="From the pass"
            title={t("signature")}
            subtitle="Eight plates that define the Almajlis table — every one of them cooked to order."
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {dishes.map((dish, i) => (
              <Reveal key={dish.id} delay={(i % 4) * 90} as="article">
                <Link
                  to="/menu"
                  hash={dish.id}
                  className="group block h-full overflow-hidden rounded-xl bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={DISH_IMAGE[dish.id]}
                      alt={`${dish.name} served at Almajlis Arabian Restaurant`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-end justify-center bg-charcoal/60 pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
                        {t("view_details")}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-xl">{dish.name}</h3>
                      <span className="shrink-0 text-sm text-primary">৳{dish.price}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground" dir="rtl" lang="ar">
                      {dish.nameAr}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {dish.desc}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaLink href="/menu">{t("explore_menu")}</CtaLink>
          </div>
        </div>
      </section>

      {/* ENJOY US */}
      <section className="bg-background py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Three ways"
            title={t("enjoy")}
            subtitle={RESTAURANT.hours}
          />
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {[
              {
                icon: UtensilsCrossed,
                title: "Dine In",
                desc: "Majlis seating, family sections and private booths under lantern light.",
                cta: "Reserve a Table",
                href: WA_RESERVE,
              },
              {
                icon: ShoppingBag,
                title: "Takeaway",
                desc: "Mandi, grills and mezze packed hot for the drive home across Gulshan.",
                cta: "Order for Pickup",
                href: WA_PICKUP,
              },
              {
                icon: CalendarHeart,
                title: "Catering",
                desc: "Whole ouzi lambs and full Arabian buffets for weddings and corporate events.",
                cta: "Get a Catering Quote",
                href: WA_CATERING,
              },
            ].map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 100}
                className="flex h-full flex-col rounded-xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)]"
              >
                <card.icon className="mx-auto h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-2xl">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {RESTAURANT.hours}
                </p>
                <div className="mt-7">
                  <CtaLink href={card.href} variant="ghost" className="w-full">
                    {card.cta}
                  </CtaLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-charcoal py-24 text-charcoal-foreground">
        <div className="container-x">
          <SectionHeading
            tone="dark"
            eyebrow="The menu"
            title={t("categories")}
            subtitle="Six kitchens under one roof — grill, clay pot, roasting pit, rice, pastry and coffee."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 90}>
                <Link
                  to="/menu"
                  hash={c.id}
                  className="group relative block h-56 overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <img
                    src={CATEGORY_IMAGE[c.id]}
                    alt={`${c.label} at Almajlis`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/60 transition-colors group-hover:bg-charcoal/45" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <h3 className="text-2xl text-charcoal-foreground">{c.label}</h3>
                    <p className="mt-1 text-sm text-gold" dir="rtl" lang="ar">
                      {c.labelAr}
                    </p>
                    <p className="mt-3 text-xs text-charcoal-foreground/70">{c.blurb}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaLink href="/menu" variant="outline">
              {t("explore_menu")}
            </CtaLink>
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="bg-background py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Inside the majlis" title={t("gallery")} />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {GALLERY.slice(0, 8).map((g, i) => (
              <Reveal key={g.alt} delay={(i % 4) * 80}>
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-44 w-full rounded-lg object-cover transition-transform duration-500 hover:scale-[1.03] sm:h-56"
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaLink href="/gallery" variant="ghost">
              {t("view_gallery")}
            </CtaLink>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/50 py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Guest voices"
            title={ar ? "آراء ضيوفنا" : "What Our Guests Say"}
          />
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {TESTIMONIALS.map((r, i) => (
              <Reveal
                key={r.name}
                delay={i * 100}
                className="flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
              >
                <div className="flex gap-1" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-5 grow text-sm leading-relaxed text-muted-foreground italic">
                  “{r.text}”
                </p>
                <p className="mt-6 text-sm font-medium">{r.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-primary">Valuable Guest</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ReservationSection />
      <FaqSection />
    </>
  );
}
