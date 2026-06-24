import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaStrip } from "@/components/site/CtaStrip";
import projectKitchen from "@/assets/project-kitchen-1.jpg";
import projectBath from "@/assets/project-bathroom-1.jpg";
import projectCommercial from "@/assets/project-commercial-1.jpg";
import projectBespoke from "@/assets/project-bespoke-1.jpg";
import projectKitchen2 from "@/assets/project-kitchen-2.jpg";
import projectBath2 from "@/assets/project-bathroom-2.jpg";
import craftImg from "@/assets/craftsmanship.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Worktops, Vanities, Splashbacks & Fabrication | Mannock Granite" },
      {
        name: "description",
        content:
          "From kitchen worktops to commercial fabrication, templating and installation — every Mannock Granite service is delivered by master stonemasons.",
      },
      { property: "og:title", content: "Stonework Services — Mannock Granite" },
      { property: "og:description", content: "Worktops, vanities, splashbacks, commercial, bespoke, fabrication, templating and installation." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: projectKitchen },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

type Service = {
  title: string;
  blurb: string;
  benefits: string[];
  img: string;
};

const services: Service[] = [
  {
    title: "Kitchen Worktops",
    blurb: "Islands, runs and breakfast bars in granite, quartz, marble and porcelain — templated, fabricated and installed to a finish you'll never want to cover.",
    benefits: ["Mitred 40mm waterfall edges", "Integrated drainage grooves", "Undermount and integrated sink cut-outs"],
    img: projectKitchen,
  },
  {
    title: "Bathroom Vanity Tops",
    blurb: "Vanities, dressing tables and shower trays in matching stone for a single, considered material story.",
    benefits: ["Bookmatched veining", "Tap and basin precision cut-outs", "Honed or polished finishes"],
    img: projectBath,
  },
  {
    title: "Splashbacks",
    blurb: "Continuous splashbacks and full-height feature walls in the same slab as your worktop — no grout, no joins, no compromise.",
    benefits: ["Single-slab fabrication", "Behind-hob or whole-wall coverage", "Heat-tolerant material guidance"],
    img: projectKitchen2,
  },
  {
    title: "Commercial Projects",
    blurb: "Bars, reception counters, hospitality suites and high-traffic environments delivered to programme.",
    benefits: ["Phased install for trading sites", "M&E coordination with main contractor", "Volume slab sourcing"],
    img: projectCommercial,
  },
  {
    title: "Bespoke Stone Features",
    blurb: "Fireplaces, dining tables, shelving, sculptural pieces — anything that can be drawn can be cut.",
    benefits: ["CAD-led design service", "Hand-finished edging", "Single-mason commissions"],
    img: projectBespoke,
  },
  {
    title: "Fabrication",
    blurb: "Our workshop runs five-axis CNC alongside hand-finishing benches — for tolerances measured in fractions of a millimetre.",
    benefits: ["Five-axis CNC + waterjet", "In-house polishing", "Slab-level QA before despatch"],
    img: craftImg,
  },
  {
    title: "Digital Templating",
    blurb: "Laser-precise digital templates capture every wall, return and out-of-square — eliminating site surprises.",
    benefits: ["Sub-millimetre accuracy", "Same-week scheduling", "Coordination with kitchen fitters"],
    img: projectBath2,
  },
  {
    title: "Installation",
    blurb: "Two-mason teams arrive with everything they need. Worktops in by lunch, sinks plumbed, kitchen left immaculate.",
    benefits: ["Same-day installation", "Cabinet protection during fit", "Silicone finishing to standard"],
    img: projectKitchen,
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Stonework, end to end."
        subtitle="From the first conversation to the final polish, every stage of your project is delivered by Mannock — never subcontracted, never compromised."
      />

      <section className="px-6 lg:px-12 pb-20">
        <div className="mx-auto max-w-7xl space-y-6">
          {services.map((s, i) => (
            <ServiceRow key={s.title} service={s} index={i} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}

function ServiceRow({ service: s, index, reverse }: { service: Service; index: number; reverse: boolean }) {
  return (
    <Reveal>
      <article className={`group relative grid md:grid-cols-2 gap-0 border border-white/10 bg-surface/30 overflow-hidden transition-colors hover:bg-surface/60`}>
        <div className={`relative overflow-hidden aspect-[4/3] md:aspect-auto ${reverse ? "md:order-2" : ""}`}>
          <img
            src={s.img}
            alt={s.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
          <div className="absolute top-5 left-5 text-[0.6rem] tracking-[0.35em] uppercase text-gold glass px-3 py-1.5">
            0{index + 1}
          </div>
        </div>

        <div className="p-10 lg:p-14 flex flex-col justify-center">
          <h2 className="font-display text-3xl md:text-4xl leading-[1.05]">{s.title}</h2>
          <p className="mt-4 text-foreground/75 leading-relaxed">{s.blurb}</p>

          <ul className="mt-6 space-y-2.5">
            {s.benefits.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-foreground/80">
                <span className="mt-2 h-px w-5 bg-gold shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold hover:gap-3 transition-all"
          >
            Enquire about {s.title}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
