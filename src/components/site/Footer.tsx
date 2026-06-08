import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-ivory/85 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display text-xl">S</span>
            <span className="font-display text-2xl text-[color:var(--ivory)]">{SITE.name}</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[color:var(--ivory)]/70">
            A boutique heritage resort tucked between Hampi's emerald paddy fields and ancient
            granite boulders. Stay slow. Wake to birdsong. Eat under bamboo.
          </p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-[color:var(--ivory)]/85 hover:text-[color:var(--gold)] transition"
          >
            <Instagram size={18} /> {SITE.instagramHandle}
          </a>
        </div>

        <div>
          <h4 className="font-display text-lg text-[color:var(--ivory)] mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-[color:var(--ivory)]/75">
            <li><Link to="/rooms" className="hover:text-[color:var(--gold)]">Rooms & Suites</Link></li>
            <li><Link to="/experiences" className="hover:text-[color:var(--gold)]">Experiences</Link></li>
            <li><Link to="/gallery" className="hover:text-[color:var(--gold)]">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-[color:var(--gold)]">Contact & Directions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-[color:var(--ivory)] mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-[color:var(--ivory)]/75">
            <li className="flex gap-2.5"><MapPin size={16} className="mt-0.5 shrink-0 text-[color:var(--gold)]" /><span>{SITE.address}</span></li>
            <li>
              <a href={waLink("Hi! I'd like to enquire about a stay.")} target="_blank" rel="noopener noreferrer" className="flex gap-2.5 hover:text-[color:var(--gold)]">
                <Phone size={16} className="mt-0.5 shrink-0 text-[color:var(--gold)]" /> {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex gap-2.5 hover:text-[color:var(--gold)]">
                <Mail size={16} className="mt-0.5 shrink-0 text-[color:var(--gold)]" /> {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-[color:var(--ivory)]/55">
          <p>© {new Date().getFullYear()} Sugriva's Kingdom. All rights reserved.</p>
          <p>Hampi · A UNESCO World Heritage Site</p>
        </div>
      </div>
    </footer>
  );
}