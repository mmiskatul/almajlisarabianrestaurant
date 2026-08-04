import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Good to know"
          title="Frequently Asked"
          subtitle="Everything guests ask us before their first visit to the majlis."
        />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-start text-base font-medium hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}