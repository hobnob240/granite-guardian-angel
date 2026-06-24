import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5 bg-surface mt-32">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 grid gap-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-gold/60 text-gold">
              <span className="font-display text-xl leading-none">M</span>
            </div>
            <div>
              <div className="font-display text-2xl">Mannock Granite</div>
              <div className="text-[0.65rem] tracking-[0.35em] uppercase text-gold">Stone Atelier</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            A family-run stone atelier crafting bespoke granite, quartz, marble and porcelain
            surfaces for the most discerning kitchens, bathrooms and commercial interiors across
            the United Kingdom.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-5">Explore</div>
          <ul className="space-y-3 text-sm text-foreground/70">
            {[
              ["/materials", "Materials"],
              ["/services", "Services"],
              ["/projects", "Projects"],
              ["/process", "Process"],
              ["/about", "About"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link to={href} className="hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-5">Atelier</div>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <span>Unit 4, Stone Yard<br/>United Kingdom</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold shrink-0" />
              <a href="tel:+441234567890" className="hover:text-gold transition-colors">+44 1234 567 890</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold shrink-0" />
              <a href="mailto:studio@mannockgranite.co.uk" className="hover:text-gold transition-colors">
                studio@mannockgranite.co.uk
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mannock Granite. All rights reserved.</p>
          <p className="tracking-[0.25em] uppercase text-[0.65rem]">Crafted in Stone · Since 1998</p>
        </div>
      </div>
    </footer>
  );
}
