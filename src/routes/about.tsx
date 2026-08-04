import { createFileRoute } from "@tanstack/react-router";
import { CtaLink } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { IMG } from "@/components/site/dishImages";
import { RESTAURANT, WA_RESERVE } from "@/lib/site";

const title = "Our Story — Arabian Hospitality in Dhaka | Almajlis";
const description =
  "How Almajlis brought Yemeni and Levantine cooking to Gulshan-2: hand-minced kebabs, pit-smoked mandi and the hospitality of a true Arabian majlis.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[52vh] items-center justify-center overflow-hidden pt-24">
        <img
          src={IMG.booth}
          alt="Carved mashrabiya booth inside Almajlis Arabian Restaurant"
          width={1024}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-veil)" }}
          aria-hidden="true"
        />
        <div className="container-x relative z-10 py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.34em] text-gold">Since {RESTAURANT.established}</p>
          <h1 className="mt-5 text-5xl font-light text-charcoal-foreground sm:text-6xl">
            Our Story
          </h1>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
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
            <SectionHeading align="start" eyebrow="The founder" title="A table that never rushes" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                In Arabia, the majlis is the room where guests are received — where coffee is poured
                before a word is spoken and no one is hurried out. Almajlis was built to give Dhaka
                that room, with the food that belongs in it.
              </p>
              <p>
                Our lamb is buried over embers for haneeth and left for six hours. Our kebabs are
                minced by hand every morning, never machine-ground. Our mandi rice is layered with
                saffron, black lime and the smoke of the pit beneath it. Nothing is shortcut, because
                the shortcut always tastes like one.
              </p>
              <p>
                Guests tell us Almajlis is the only genuinely Arabic restaurant in Bangladesh. We
                take that seriously — and we keep cooking as though the guests from home are the
                ones judging.
              </p>
            </div>
            <p className="mt-7 text-sm uppercase tracking-[0.18em] text-primary">
              Abdul Aziz Aishan — Managing Director, Almajlis
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-charcoal-foreground">
        <div className="container-x">
          <SectionHeading
            tone="dark"
            eyebrow="What we stand on"
            title="Three unbreakable rules"
          />
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {[
              {
                h: "100% Halal",
                p: "Every cut of meat and poultry is certified halal, prepared in a fully halal kitchen.",
              },
              {
                h: "Cooked to order",
                p: "Grills fired on request, tagines sealed fresh, bread pulled from the stone oven at your table's pace.",
              },
              {
                h: "Arabian hospitality",
                p: "Gahwa and dates the moment you're seated — and no one ever asked to leave.",
              },
            ].map((v, i) => (
              <Reveal
                key={v.h}
                delay={i * 100}
                className="rounded-xl border border-gold/20 bg-charcoal-foreground/[0.04] p-8"
              >
                <h3 className="text-2xl text-charcoal-foreground">{v.h}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-foreground/70">{v.p}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <CtaLink href="/menu">View Menu</CtaLink>
            <CtaLink href={WA_RESERVE} variant="outline">
              Reserve a Table
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}