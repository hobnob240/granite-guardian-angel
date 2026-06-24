import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaStrip } from "@/components/site/CtaStrip";
import graniteImg from "@/assets/material-granite.jpg";
import quartzImg from "@/assets/material-quartz.jpg";
import marbleImg from "@/assets/material-marble.jpg";
import porcelainImg from "@/assets/material-porcelain.jpg";

export const Route = createFileRoute("/materials")({
  component: MaterialsPage,
  head: () => ({
    meta: [
      { title: "Materials — Granite, Quartz, Marble & Porcelain | Mannock Granite" },
      {
        name: "description",
        content:
          "Explore Mannock Granite's curated stone catalogue — granite, quartz, marble and porcelain worktops with full benefits, maintenance and colour guidance.",
      },
      { property: "og:title", content: "Stone Materials — Mannock Granite" },
      { property: "og:description", content: "A curated catalogue of premium stone worktop materials." },
      { property: "og:url", content: "/materials" },
      { property: "og:image", content: marbleImg },
    ],
    links: [{ rel: "canonical", href: "/materials" }],
  }),
});

type Material = {
  name: string;
  tagline: string;
  img: string;
  benefits: string[];
  durability: string;
  maintenance: string;
  colours: string[];
  applications: string[];
};

const materials: Material[] = [
  {
    name: "Granite",
    tagline: "Igneous strength. Mineral depth.",
    img: graniteImg,
    benefits: ["Exceptionally hard, heat- and scratch-resistant", "Each slab one-of-one", "Centuries of architectural pedigree"],
    durability: "Mohs 6–7. Resistant to heat, knives and most kitchen wear. Sealed correctly, performs for decades.",
    maintenance: "Re-seal annually. Wipe with neutral pH cleaner. Avoid acidic citrus left on the surface.",
    colours: ["Nero Assoluto", "Star Galaxy", "Verde Ubatuba", "Blue Pearl", "Ivory Brown"],
    applications: ["Kitchen worktops", "Outdoor BBQ counters", "Heavy-use commercial bars"],
  },
  {
    name: "Quartz",
    tagline: "Engineered consistency. Endless palette.",
    img: quartzImg,
    benefits: ["Non-porous — never needs sealing", "Consistent pattern across slabs", "Backed by 10–25 year warranties"],
    durability: "93% natural quartz, 7% polymer resin. Stain, scratch and bacteria-resistant. Less heat-tolerant than stone.",
    maintenance: "Soap and water. No sealing required. Use a trivet for hot pans.",
    colours: ["Calacatta Classique", "Statuario", "Pure White", "Concrete Grey", "Charcoal Soapstone"],
    applications: ["Family kitchens", "Bathroom vanities", "Reception counters"],
  },
  {
    name: "Marble",
    tagline: "Veined drama. Sculptural presence.",
    img: marbleImg,
    benefits: ["Unmatched veining and depth", "Patinas beautifully with age", "Cool to the touch — perfect for pastry"],
    durability: "Softer than granite (Mohs 3–4). Develops a lived-in patina over time — a feature for many, a consideration for some.",
    maintenance: "Seal regularly. Blot spills immediately, especially acids. Embrace the etch.",
    colours: ["Calacatta Oro", "Statuario Venato", "Carrara", "Nero Marquina", "Arabescato"],
    applications: ["Statement islands", "Bathroom walls and floors", "Bespoke furniture and shelving"],
  },
  {
    name: "Porcelain",
    tagline: "Slim profile. Vast formats.",
    img: porcelainImg,
    benefits: ["UV-stable — ideal indoor and out", "Available in 12mm slim slabs", "Visually mimics stone, concrete or metal"],
    durability: "Sintered at 1200°C. Highly resistant to heat, UV, staining and scratching. Excellent for outdoor kitchens.",
    maintenance: "Effectively maintenance-free. Standard household cleaners. No sealing.",
    colours: ["Calacatta Statuario", "Pietra Grey", "Travertino", "Cement Beige", "Onyx Nero"],
    applications: ["Outdoor kitchens", "Cladding and feature walls", "Large-format flooring"],
  },
];

function MaterialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Material Library"
        title="Four stones. Infinite possibilities."
        subtitle="Every commission begins with the material. Walk through our four core stones — their characters, their care, and where they shine."
      />

      <div className="px-6 lg:px-12 pb-12">
        <div className="mx-auto max-w-7xl space-y-32">
          {materials.map((m, i) => (
            <MaterialBlock key={m.name} material={m} reverse={i % 2 === 1} index={i} />
          ))}
        </div>
      </div>

      <CtaStrip />
    </>
  );
}

function MaterialBlock({ material: m, reverse, index }: { material: Material; reverse: boolean; index: number }) {
  return (
    <article className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <Reveal>
        <div className="relative overflow-hidden group">
          <img
            src={m.img}
            alt={`${m.name} stone sample`}
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-[1400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
          <div className="absolute top-6 left-6 text-[0.6rem] tracking-[0.35em] uppercase text-gold glass px-3 py-1.5">
            0{index + 1} / 04
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <Eyebrow>{m.name}</Eyebrow>
        <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.0]">{m.name}.</h2>
        <p className="mt-4 font-display italic text-2xl text-gold-gradient">{m.tagline}</p>

        <ul className="mt-10 space-y-3">
          {m.benefits.map((b) => (
            <li key={b} className="flex gap-3 text-foreground/80">
              <span className="mt-2 h-px w-6 bg-gold shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <Spec label="Durability" text={m.durability} />
          <Spec label="Maintenance" text={m.maintenance} />
        </div>

        <div className="mt-10">
          <div className="eyebrow mb-4">Popular Colours</div>
          <div className="flex flex-wrap gap-2">
            {m.colours.map((c) => (
              <span key={c} className="text-xs px-3 py-1.5 border border-white/15 text-foreground/80">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="eyebrow mb-4">Best For</div>
          <ul className="space-y-2 text-sm text-foreground/75">
            {m.applications.map((a) => <li key={a}>— {a}</li>)}
          </ul>
        </div>
      </Reveal>
    </article>
  );
}

function Spec({ label, text }: { label: string; text: string }) {
  return (
    <div className="glass p-5">
      <div className="eyebrow mb-2">{label}</div>
      <p className="text-sm text-foreground/75 leading-relaxed">{text}</p>
    </div>
  );
}
