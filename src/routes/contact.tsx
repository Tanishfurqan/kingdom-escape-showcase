import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/site/PageHeader";
import { SITE, waLink } from "@/lib/site";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Directions — Sugriva's Kingdom, Hampi" },
      { name: "description", content: "Reach Sugriva's Kingdom on WhatsApp, phone or email. Directions to our resort near Hampi." },
      { property: "og:title", content: "Contact — Sugriva's Kingdom" },
      { property: "og:image", content: IMG.exterior_day },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Come find us in Kishkindha." sub="The fastest way to book is on WhatsApp — we usually reply within an hour." image={IMG.exterior_day} alt="Resort exterior" />
      <section className="container-x py-20 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-6">
          <a href={waLink("Hi! I'd like to enquire about a stay.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-md bg-[color:var(--whatsapp)] px-6 py-4 text-white font-semibold w-full justify-center hover:opacity-95">
            <Phone size={18} /> WhatsApp {SITE.whatsappDisplay}
          </a>
          <ul className="space-y-4 text-foreground/85">
            <li className="flex items-start gap-3"><MapPin size={18} className="text-primary mt-1" /><span>{SITE.address}</span></li>
            <li className="flex items-start gap-3"><Mail size={18} className="text-primary mt-1" /><a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a></li>
            <li className="flex items-start gap-3"><Instagram size={18} className="text-primary mt-1" /><a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{SITE.instagramHandle}</a></li>
            <li className="flex items-start gap-3"><Clock size={18} className="text-primary mt-1" /><span>Reception 24/7 · Check-in 12:00 · Check-out 11:00</span></li>
          </ul>
          <div className="rounded-md border border-border/60 bg-card p-6">
            <h3 className="font-display text-xl">Getting here</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/75">
              <li><strong>By air:</strong> Hubli (HBX) ~ 3.5 hrs · Bengaluru (BLR) ~ 6.5 hrs</li>
              <li><strong>By train:</strong> Hosapete Junction (HPT) ~ 30 min by taxi</li>
              <li><strong>By road:</strong> Hampi ruins ~ 15 min · Anegundi village 5 min walk</li>
            </ul>
            <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4">Open in Google Maps →</a>
          </div>
        </div>
        <div className="md:col-span-3 rounded-md overflow-hidden border border-border/60 h-[520px] shadow-lg">
          <iframe title="Map to Sugriva's Kingdom" src={SITE.mapEmbed} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </>
  );
}