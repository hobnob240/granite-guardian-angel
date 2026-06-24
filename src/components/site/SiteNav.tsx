import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/materials", label: "Materials" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-gold/60 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
              <span className="font-display text-lg leading-none">M</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl text-foreground">Mannock</div>
              <div className="text-[0.6rem] tracking-[0.35em] uppercase text-gold">Granite</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative text-xs tracking-[0.28em] uppercase transition-colors ${
                    active ? "text-gold" : "text-foreground/75 hover:text-gold"
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-gold"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center border border-gold px-5 py-2.5 text-[0.7rem] tracking-[0.3em] uppercase text-gold transition-all hover:bg-gold hover:text-primary-foreground"
          >
            Request Quote
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-strong border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm tracking-[0.25em] uppercase text-foreground/80 hover:text-gold"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex w-fit items-center border border-gold px-5 py-2.5 text-[0.7rem] tracking-[0.3em] uppercase text-gold"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
