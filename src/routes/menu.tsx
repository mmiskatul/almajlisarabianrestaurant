import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Leaf } from "lucide-react";
import { CtaLink } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { DISH_IMAGE } from "@/components/site/dishImages";
import { CATEGORIES, MENU, RESTAURANT, WA_PICKUP, WA_RESERVE, type CategoryId } from "@/lib/site";
import { cn } from "@/lib/utils";

const title = "Menu — Mandi, Kebabs & Tagine | Almajlis Arabian Restaurant Dhaka";
const description =
  "Explore the full Almajlis menu: lamb mandi, haneeth, charcoal kebabs, clay-pot tagine, mezze, kunafa and Arabic gahwa. Prices in BDT, Gulshan-2 Dhaka.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [filter, setFilter] = useState<CategoryId | "all">("all");
  const shown = CATEGORIES.filter((c) => filter === "all" || c.id === filter);

  return (
    <>
      <section className="bg-charcoal pt-36 pb-20 text-charcoal-foreground">
        <div className="container-x">
          <SectionHeading
            tone="dark"
            eyebrow="Our kitchen"
            title="The Almajlis Menu"
            subtitle="Charcoal, clay and the roasting pit. Every price in BDT, every dish cooked to order."
          />
          <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-gold">
            {RESTAURANT.hours}
          </p>
        </div>
      </section>

      <div className="sticky top-20 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div
          className="container-x flex gap-2 overflow-x-auto py-4"
          role="tablist"
          aria-label="Menu categories"
        >
          {[{ id: "all", label: "All" }, ...CATEGORIES.map((c) => ({ id: c.id, label: c.label }))].map(
            (c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={filter === c.id}
                onClick={() => setFilter(c.id as CategoryId | "all")}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2 text-xs uppercase tracking-[0.16em] transition-colors",
                  filter === c.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {c.label}
              </button>
            ),
          )}
        </div>
      </div>

      <section className="bg-background py-20">
        <div className="container-x space-y-20">
          {shown.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-44">
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
                <h2 className="text-3xl font-light">{cat.label}</h2>
                <p className="text-lg text-primary" dir="rtl" lang="ar">
                  {cat.labelAr}
                </p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{cat.blurb}</p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {MENU.filter((m) => m.category === cat.id).map((item, i) => (
                  <Reveal
                    key={item.id}
                    delay={(i % 2) * 80}
                    as="article"
                    className="scroll-mt-44"
                  >
                    <div
                      id={item.id}
                      className="flex h-full gap-5 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <img
                        src={DISH_IMAGE[item.id]}
                        alt={`${item.name} — ${item.desc}`}
                        width={1024}
                        height={1024}
                        loading="lazy"
                        className="h-28 w-28 shrink-0 rounded-lg object-cover"
                      />
                      <div className="min-w-0">
                        <div className="flex items-baseline justify-between gap-3">
                          <h3 className="text-lg leading-tight">{item.name}</h3>
                          <span className="shrink-0 text-sm text-primary">৳{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground" dir="rtl" lang="ar">
                          {item.nameAr}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                        {item.veg ? (
                          <p className="mt-2 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-primary">
                            <Leaf className="h-3.5 w-3.5" aria-hidden="true" /> Vegetarian
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="container-x mt-16 flex flex-wrap justify-center gap-4">
          <CtaLink href={WA_RESERVE}>Reserve a Table</CtaLink>
          <CtaLink href={WA_PICKUP} variant="ghost">
            Order for Pickup
          </CtaLink>
        </div>
      </section>
    </>
  );
}