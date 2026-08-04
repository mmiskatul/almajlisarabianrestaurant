import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { CtaLink } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { GALLERY } from "@/components/site/dishImages";
import { WA_RESERVE } from "@/lib/site";

const title = "Gallery — Interiors & Dishes | Almajlis Arabian Restaurant Dhaka";
const description =
  "Step inside Almajlis: lantern-lit majlis seating, carved mashrabiya screens, whole ouzi lamb, charcoal grills and Arabic gahwa in Gulshan-2, Dhaka.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <section className="bg-charcoal pt-36 pb-16 text-charcoal-foreground">
        <div className="container-x">
          <SectionHeading
            tone="dark"
            eyebrow="Inside the majlis"
            title="Gallery"
            subtitle="Lantern light, carved screens and platters built for sharing."
          />
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-x columns-1 gap-5 sm:columns-2 lg:columns-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.alt} delay={(i % 3) * 80} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open larger image: ${g.alt}`}
                className="group block w-full overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i % 3 === 0 ? "aspect-4/5" : "aspect-square"
                  }`}
                />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="container-x mt-14 text-center">
          <CtaLink href={WA_RESERVE}>Reserve a Table</CtaLink>
        </div>
      </section>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY[active]?.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-6"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close image"
            className="absolute top-6 end-6 rounded-md border border-gold/40 p-2 text-gold"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={GALLERY[active]?.src}
            alt={GALLERY[active]?.alt}
            className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain"
          />
        </div>
      ) : null}
    </>
  );
}