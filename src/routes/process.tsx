import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaStrip } from "@/components/site/CtaStrip";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Process — From Consultation to Aftercare | Mannock Granite" },
      {
        name: "description",
        content:
          "The Mannock Granite process — consultation, site visit, digital templating, fabrication, quality inspection, installation and aftercare.",
      },
      { property: "og:title", content: "Our Process — Mannock Granite" },
      { property: "og:description", content: "Seven steps. One standard. A look behind every Mannock commission." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
});

const steps = [
  { title: "Initial Consultation", text: "An hour at the studio or on a call. We discuss your space, your stone shortlist and your timeline. No obligation, no upsell." },
  { title: "Site Visit", text: "We come to you to walk the kitchen, take dimensions and understand the architectural context — light, cabinetry, traffic flow." },
  { title: "Digital Templating", text: "Once cabinets are in, we return with laser templating equipment. Sub-millimetre accuracy that catches every out-of-square wall." },
  { title: "Fabrication", text: "Your slab is cut in our workshop on a five-axis CNC, then hand-finished by a single mason from start to finish." },
  { title: "Quality Inspection", text: "Every commission is inspected against the original drawing, photographed for record and signed off by David himself before it leaves." },
  { title: "Installation", text: "A two-mason team installs on a single day. Cabinets are protected, sinks are plumbed, silicone is finished by hand, kitchen left immaculate." },
  { title: "Aftercare", text: "30-day post-install check, 12-month re-seal reminder, lifetime advice on care and patina. We don't disappear after invoice." },
];

function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Process"
        title="Seven steps. One standard."
        subtitle="The same considered rhythm, applied to every commission — from a single bathroom vanity to a sixteen-metre commercial bar."
      />

      <section className="px-6 lg:px-12 py-20">
        <div className="mx-auto max-w-4xl relative">
          <div className="absolute left-[28px] md:left-[44px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent" />

          <ol className="space-y-16">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <li className="relative pl-20 md:pl-32">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-1 flex h-14 w-14 md:h-[88px] md:w-[88px] items-center justify-center border border-gold/50 bg-background"
                  >
                    <span className="font-display text-xl md:text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                  </motion.div>

                  <div>
                    <h3 className="font-display text-3xl md:text-4xl">{s.title}</h3>
                    <p className="mt-4 text-foreground/75 leading-relaxed max-w-2xl">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-20 bg-surface/40 border-y border-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>Typical Timeline</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05]">
              From quote to <em className="italic text-gold-gradient">install</em>, in around four weeks.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              Most residential projects move from initial enquiry to installed worktop in three to four weeks. Bespoke and commercial commissions are
              programmed individually and reviewed weekly with you.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
