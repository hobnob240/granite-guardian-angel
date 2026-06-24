import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaStrip } from "@/components/site/CtaStrip";
import projectKitchen from "@/assets/project-kitchen-1.jpg";
import projectKitchen2 from "@/assets/project-kitchen-2.jpg";
import projectBath from "@/assets/project-bathroom-1.jpg";
import projectBath2 from "@/assets/project-bathroom-2.jpg";
import projectCommercial from "@/assets/project-commercial-1.jpg";
import projectBespoke from "@/assets/project-bespoke-1.jpg";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Kitchens, Bathrooms & Commercial | Mannock Granite" },
      {
        name: "description",
        content:
          "A portfolio of bespoke stone projects — luxury kitchens, master bathrooms, commercial spaces and bespoke architectural features.",
      },
      { property: "og:title", content: "Project Portfolio — Mannock Granite" },
      { property: "og:description", content: "Filterable gallery of premium stone worktop and feature projects." },
      { property: "og:url", content: "/projects" },
      { property: "og:image", content: projectKitchen },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

type Project = {
  id: string;
  title: string;
  category: "Kitchens" | "Bathrooms" | "Commercial" | "Bespoke";
  material: string;
  location: string;
  description: string;
  img: string;
  span?: string;
};

const projects: Project[] = [
  { id: "1", title: "Belgravia Townhouse", category: "Kitchens", material: "Calacatta Quartz", location: "London SW1", description: "A 4.2m island with mitred waterfall ends and a continuous splashback in matched quartz.", img: projectKitchen, span: "md:row-span-2 md:col-span-2" },
  { id: "2", title: "Highgate Master Suite", category: "Bathrooms", material: "Bookmatched Calacatta Marble", location: "London N6", description: "Bookmatched marble wall, freestanding basin and continuous vanity in honed finish.", img: projectBath },
  { id: "3", title: "Mayfair Members' Bar", category: "Commercial", material: "Nero Marquina", location: "London W1", description: "16m solid stone bar with curved end profile, fabricated and installed in three phases.", img: projectCommercial, span: "md:col-span-2" },
  { id: "4", title: "Cotswolds Retreat", category: "Bespoke", material: "Honed Limestone", location: "Cotswolds", description: "Sculptural fireplace surround and full hearth, hand-finished from a single block.", img: projectBespoke },
  { id: "5", title: "Hampstead Family Kitchen", category: "Kitchens", material: "White Statuario Quartz", location: "London NW3", description: "Family kitchen with seating peninsula, integrated drainage and concealed sockets.", img: projectKitchen2, span: "md:row-span-2" },
  { id: "6", title: "Notting Hill Ensuite", category: "Bathrooms", material: "Travertine Porcelain", location: "London W11", description: "Floor-to-ceiling porcelain in warm beige with brass accents and stone bath surround.", img: projectBath2 },
];

const categories = ["All", "Kitchens", "Bathrooms", "Commercial", "Bespoke"] as const;

function ProjectsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Stone in situ."
        subtitle="A curated selection of recent commissions across residential and commercial work. Filter by space to see how our materials live in the room."
      />

      <div className="px-6 lg:px-12 pb-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4 mb-10">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`relative px-5 py-2.5 text-xs tracking-[0.3em] uppercase transition-colors ${
                    active === c ? "text-gold" : "text-foreground/55 hover:text-foreground"
                  }`}
                >
                  {c}
                  {active === c && (
                    <motion.span
                      layoutId="filter-underline"
                      className="absolute bottom-0 left-3 right-3 h-px bg-gold"
                    />
                  )}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.button
                  layout
                  key={p.id}
                  onClick={() => setOpen(p)}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative overflow-hidden bg-surface text-left ${p.span ?? ""}`}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="text-[0.6rem] tracking-[0.35em] uppercase text-gold">{p.category} · {p.material}</div>
                    <div className="font-display text-2xl mt-2">{p.title}</div>
                    <div className="text-xs text-foreground/60 mt-1">{p.location}</div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] bg-background/85 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong max-w-5xl w-full max-h-[88vh] overflow-y-auto"
            >
              <img src={open.img} alt={open.title} className="w-full aspect-[16/9] object-cover" />
              <div className="p-10">
                <Eyebrow>{open.category}</Eyebrow>
                <h3 className="mt-4 font-display text-4xl">{open.title}</h3>
                <div className="mt-2 text-sm text-foreground/60">{open.location} · {open.material}</div>
                <p className="mt-6 text-foreground/80 leading-relaxed">{open.description}</p>
                <button
                  onClick={() => setOpen(null)}
                  className="mt-8 inline-flex items-center border border-gold px-5 py-2.5 text-[0.7rem] tracking-[0.3em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CtaStrip />
    </>
  );
}
