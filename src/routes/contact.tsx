import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ReservationSection } from "@/components/site/ReservationSection";
import { FaqSection } from "@/components/site/FaqSection";
import { RESTAURANT } from "@/lib/site";

const title = "Contact & Reservations — Gulshan-2, Dhaka | Almajlis";
const description =
  "Reserve a table at Almajlis Arabian Restaurant, 27 C/A Faisal Tower, Road 52, Gulshan-2, Dhaka. Call +880 1830 000233 or book instantly on WhatsApp.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-charcoal pt-36 pb-10 text-charcoal-foreground">
        <div className="container-x">
          <SectionHeading
            tone="dark"
            eyebrow="Find us"
            title="Contact & Reservations"
            subtitle={`${RESTAURANT.address} · ${RESTAURANT.hours}`}
          />
        </div>
      </section>
      <ReservationSection />
      <FaqSection />
    </>
  );
}