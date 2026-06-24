import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";

export function CtaStrip() {
  return (
    <section className="relative px-6 lg:px-12 py-32">
      <div className="mx-auto max-w-6xl glass-strong p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <Reveal>
          <Eyebrow>Begin the Conversation</Eyebrow>
        </Reveal>
        <div className="relative mt-6 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-2xl">
              Commission a surface <em className="text-gold-gradient not-italic">made to last</em> a generation.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 border border-gold px-7 py-4 text-xs tracking-[0.3em] uppercase text-gold transition-all hover:bg-gold hover:text-primary-foreground"
            >
              Request a Quote
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
