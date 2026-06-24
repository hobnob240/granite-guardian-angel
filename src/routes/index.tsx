import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Award, Compass, Hammer, ShieldCheck, Sparkles, Star } from "lucide-react";

import heroImg from "@/assets/hero-kitchen.jpg";
import graniteImg from "@/assets/material-granite.jpg";
import quartzImg from "@/assets/material-quartz.jpg";
import marbleImg from "@/assets/material-marble.jpg";
import porcelainImg from "@/assets/material-porcelain.jpg";
import projectKitchen from "@/assets/project-kitchen-1.jpg";
import projectBath from "@/assets/project-bathroom-1.jpg";
import projectCommercial from "@/assets/project-commercial-1.jpg";
import projectBespoke from "@/assets/project-bespoke-1.jpg";

import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { CtaStrip } from "@/components/site/CtaStrip";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Mannock Granite — Luxury Stone Worktops, Quartz, Marble & Porcelain" },
      {
        name: "description",
        content:
          "Bespoke granite, quartz, marble and porcelain worktops, designed, fabricated and installed by Mannock Granite — 25+ years crafting premium stone surfaces.",
      },
      { property: "og:title", content: "Mannock Granite — Luxury Stone Worktops" },
      {
        property: "og:description",
        content: "25+ years crafting bespoke stone surfaces for premium homes and commercial spaces.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsSection />
      <WhyUs />
      <MaterialsPreview />
      <FeaturedProjects />
      <ProcessPreview />
      <Testimonials />
      <CtaStrip />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[720px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury kitchen with dark veined marble island"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl h-full px-6 lg:px-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Eyebrow>Stone Atelier · Est. 1998</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-[3.25rem] sm:text-7xl lg:text-8xl leading-[0.98] max-w-4xl"
        >
          The art of <em className="italic text-gold-gradient">stone</em>,
          <br />
          crafted for the home.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-foreground/75"
        >
          Bespoke granite, quartz, marble and porcelain worktops — hand-templated,
          precision-fabricated and installed by master stonemasons for the country's
          most considered kitchens and interiors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs tracking-[0.3em] uppercase text-primary-foreground transition-all hover:bg-gold-soft"
          >
            Request a Quote
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-xs tracking-[0.3em] uppercase text-foreground transition-all hover:border-gold hover:text-gold"
          >
            View Portfolio
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-foreground/60"
      >
        <span className="text-[0.6rem] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Member of the Worktop Fabricators Federation",
    "25+ Years of Heritage",
    "NBS Approved Installations",
    "5-Star Houzz Pro",
  ];
  return (
    <section className="border-y border-white/5 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-[0.65rem] tracking-[0.35em] uppercase text-foreground/55">
        {items.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: 25, suffix: "+", label: "Years of Heritage" },
    { value: 1200, suffix: "+", label: "Projects Delivered" },
    { value: 80, suffix: "+", label: "Stones Available" },
    { value: 200, suffix: "mi", label: "Service Radius" },
  ];
  return (
    <section className="px-6 lg:px-12 py-28">
      <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center md:text-left">
            <div className="font-display text-5xl md:text-6xl text-gold-gradient">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const features = [
    { icon: Hammer, title: "Master Craftsmanship", text: "Every piece is hand-finished by stonemasons with two decades behind the wheel." },
    { icon: Compass, title: "Digital Templating", text: "Laser-precise measurement ensures a seam-line you'll never see." },
    { icon: Award, title: "Premium Materials", text: "Hand-selected slabs from the world's most respected quarries." },
    { icon: ShieldCheck, title: "Lifetime Standards", text: "Installed to a standard that outlives the kitchen around it." },
    { icon: Sparkles, title: "Bespoke Detailing", text: "Drainage grooves, mitred edges, integrated sinks — engineered to your brief." },
    { icon: Star, title: "Five-Star Service", text: "From first consultation to aftercare — quiet, considered, complete." },
  ];
  return (
    <section className="px-6 lg:px-12 py-32 relative">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Why Mannock</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05]">
              A quieter kind of <em className="italic text-gold-gradient">luxury</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
              We do one thing — stone — and we do it with the discipline of an atelier and
              the rigour of an engineer. No upsell. No theatrics. Just surfaces that
              quietly outperform every other element in the room.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3 border border-white/5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="bg-background p-10 h-full group transition-colors hover:bg-surface">
                  <Icon className="h-7 w-7 text-gold transition-transform group-hover:scale-110" strokeWidth={1.25} />
                  <h3 className="mt-6 font-display text-2xl">{f.title}</h3>
                  <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MaterialsPreview() {
  const materials = [
    { name: "Granite", img: graniteImg, blurb: "Igneous strength. Mineral depth.", href: "/materials" },
    { name: "Quartz", img: quartzImg, blurb: "Engineered consistency. Endless palette.", href: "/materials" },
    { name: "Marble", img: marbleImg, blurb: "Veined drama. Sculptural presence.", href: "/materials" },
    { name: "Porcelain", img: porcelainImg, blurb: "Slim profile. Vast formats.", href: "/materials" },
  ];

  return (
    <section className="px-6 lg:px-12 py-32 bg-surface/40 border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal><Eyebrow>The Material Library</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05] max-w-xl">
                Four stones. <em className="italic text-gold-gradient">Infinite</em> possibilities.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/materials" className="group inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
              Browse all materials
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <Link to={m.href} className="group block relative overflow-hidden aspect-[3/4] bg-surface">
                <img
                  src={m.img}
                  alt={m.name}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[0.6rem] tracking-[0.35em] uppercase text-gold">Material</div>
                  <h3 className="mt-2 font-display text-3xl">{m.name}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{m.blurb}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-gold transition-transform group-hover:translate-x-1">
                    Explore <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const projects = [
    { img: projectKitchen, title: "Belgravia Townhouse", meta: "Calacatta Quartz · Kitchen", span: "md:col-span-2 md:row-span-2 aspect-[5/4]" },
    { img: projectBath, title: "Highgate Master Suite", meta: "Bookmatched Marble · Bathroom", span: "aspect-[4/5]" },
    { img: projectCommercial, title: "Mayfair Members' Bar", meta: "Nero Marquina · Commercial", span: "aspect-[4/5]" },
    { img: projectBespoke, title: "Cotswolds Retreat", meta: "Honed Limestone · Bespoke", span: "md:col-span-2 aspect-[5/3]" },
  ];

  return (
    <section className="px-6 lg:px-12 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Reveal>
            <Eyebrow>Featured Work</Eyebrow>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05]">
              Projects we're <em className="italic text-gold-gradient">proud of</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:self-end">
            <p className="text-foreground/70 leading-relaxed">
              From private country residences to award-winning hospitality interiors, our work
              is defined by stone selection, joinery precision and an obsession with the
              quietest details.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className={p.span}>
              <Link to="/projects" className="group relative block overflow-hidden bg-surface h-full">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="text-[0.6rem] tracking-[0.35em] uppercase text-gold">{p.meta}</div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{p.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 border border-gold px-7 py-4 text-xs tracking-[0.3em] uppercase text-gold transition-all hover:bg-gold hover:text-primary-foreground"
          >
            View Full Portfolio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessPreview() {
  const steps = [
    "Initial Consultation",
    "Site Visit",
    "Digital Templating",
    "Fabrication",
    "Quality Inspection",
    "Installation",
    "Aftercare",
  ];
  return (
    <section className="px-6 lg:px-12 py-32 bg-surface/40 border-y border-white/5">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
        <div>
          <Reveal><Eyebrow>The Mannock Process</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05]">
              Seven steps. <em className="italic text-gold-gradient">One standard.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-md">
              We've refined our process over a quarter-century — every project follows the
              same considered rhythm, from first conversation to final polish.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/process"
              className="mt-10 inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-gold hover:gap-4 transition-all"
            >
              Walk through our process
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <ol className="space-y-px">
          {steps.map((s, i) => (
            <Reveal key={s} delay={i * 0.05}>
              <li className="flex items-baseline gap-6 py-5 border-b border-white/10 group">
                <span className="font-display text-2xl text-gold w-12">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl md:text-3xl group-hover:translate-x-2 transition-transform">{s}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      quote: "The level of care Mannock brought to our island worktop was extraordinary. It feels less like furniture and more like architecture.",
      author: "Eleanor R.",
      role: "Private Residence, Belgravia",
    },
    {
      quote: "Twenty years building luxury kitchens — these are the only fabricators I now recommend without caveat.",
      author: "James Holloway",
      role: "Holloway & Sons, Kitchen Designers",
    },
    {
      quote: "Every commercial project we hand over hinges on installation quality. Mannock are the reason ours never miss.",
      author: "Sophie Lin",
      role: "Lin Studio Hospitality",
    },
  ];

  return (
    <section className="px-6 lg:px-12 py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal><Eyebrow>Client Voices</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05] max-w-3xl">
            Trusted by designers, architects <em className="italic text-gold-gradient">and homeowners</em>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.author} delay={i * 0.08}>
              <figure className="glass p-8 h-full flex flex-col">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-xl leading-snug flex-1">
                  "{q.quote}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-sm font-medium">{q.author}</div>
                  <div className="text-xs text-muted-foreground mt-1">{q.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
