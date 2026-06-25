import { createFileRoute } from "@tanstack/react-router";
import craftImg from "@/assets/craftsmanship.jpg";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { CtaStrip } from "@/components/site/CtaStrip";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Mannock Granite | 25+ Years of British Stonecraft" },
      {
        name: "description",
        content:
          "A family-run stone atelier built on craftsmanship, local expertise and uncompromising installation standards. Meet the team behind Mannock Granite.",
      },
      { property: "og:title", content: "About Mannock Granite" },
      {
        property: "og:description",
        content: "Family-run British stone atelier — heritage, craft, precision.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: craftImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  const values = [
    {
      title: "Heritage",
      text: "Three generations of stonemasons. The bench techniques have not changed in a hundred years — for good reason.",
    },
    {
      title: "Material Honesty",
      text: "We sell stone, not stories. Every slab is walked, photographed and confirmed with you before cutting.",
    },
    {
      title: "Quiet Service",
      text: "No high-pressure sales, no theatre. A studio appointment, a site visit, a fair quote, a perfect install.",
    },
    {
      title: "Local Knowledge",
      text: "We know every kitchen designer, architect and builder in our service area. That trust shortens timelines and tightens finishes.",
    },
  ];

  const team = [
    {
      name: "David Mannock",
      role: "Founder & Master Mason",
      bio: "Forty years on the bench. Personally inspects every commission before it leaves the workshop.",
    },
    {
      name: "Anna Mannock",
      role: "Studio Director",
      bio: "Twenty years pairing materials with interiors. Leads consultation and stone selection.",
    },
    {
      name: "Tom Pereira",
      role: "Fabrication Lead",
      bio: "Runs the CNC and templating teams. Holds the workshop to a tolerance of half a millimetre.",
    },
    {
      name: "Iwan Carter",
      role: "Installation Lead",
      bio: "Twelve-strong installation team across the South. Cleans the kitchen before he leaves.",
    },
  ];

  return (
    <>
      <PageHeader eyebrow="About" title="A studio built around stone." />

      <section className="px-6 lg:px-12 py-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative overflow-hidden">
              <img
                src={craftImg}
                alt="Stonemason hand-finishing a granite slab in the Mannock workshop"
                width={1280}
                height={1024}
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05]">
              Founded in 1998. Still <em className="italic text-gold-gradient">family-run</em>.
            </h2>
            <div className="mt-8 space-y-5 text-foreground/75 leading-relaxed">
              <p>
                Mannock Granite was started by David Mannock in 1998, on the back of two decades
                cutting headstones and ecclesiastical pieces across the South of England. What began
                as a one-man bench is now a fifteen-person atelier — still run by the same family,
                still bench-finished by hand.
              </p>
              <p>
                We work with private clients, kitchen designers, architects and contractors on
                projects from £5,000 single-island worktops to £30,000+ commercial installations.
                The brief is always the same: stone that looks effortless because the effort
                happened upstream of you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 bg-surface/40 border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Our Values</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05]">
                Four principles. <em className="italic text-gold-gradient">Held tightly.</em>
              </h2>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-px bg-white/5 sm:grid-cols-2 border border-white/5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="bg-background p-10 h-full">
                  <div className="font-display text-5xl text-gold-gradient">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                  <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>The Studio</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05]">
                The hands behind the work.
              </h2>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4 border border-white/5">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <div className="bg-background p-10 h-full">
                  <div className="font-display text-2xl">{m.name}</div>
                  <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mt-2">
                    {m.role}
                  </div>
                  <p className="mt-4 text-sm text-foreground/65 leading-relaxed">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 bg-surface/40 border-y border-white/5">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <Eyebrow>Installation Standards</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05]">
              Every install signed off <em className="italic text-gold-gradient">by hand</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-foreground/75 leading-relaxed max-w-2xl mx-auto">
              We work to the NBS specification for natural stone installation and exceed it on
              joinery tolerance, silicone finish and undercabinet protection. Every project is
              photographed, snagged and signed off by the lead mason before sign-off — no
              exceptions, no shortcuts, no callbacks.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
