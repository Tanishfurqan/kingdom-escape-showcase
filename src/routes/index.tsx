import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Wifi, UtensilsCrossed, Car, Trees, Wind, Sparkles, Instagram } from "lucide-react";
import { IMG } from "@/lib/images";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sugriva's Kingdom Resort — Boutique Stay in Hampi" },
      { name: "description", content: "A boutique heritage resort beside the boulders and paddy fields of Hampi. Private balconies, bamboo dining, easy temple access. Book on WhatsApp." },
      { property: "og:title", content: "Sugriva's Kingdom Resort — Hampi" },
      { property: "og:description", content: "Boutique heritage stay in Hampi. Wake to paddy-field views, dine under bamboo, explore ancient temples." },
      { property: "og:image", content: IMG.exterior_night },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Resort",
          name: SITE.name,
          description: "Boutique heritage resort in Hampi, Karnataka.",
          image: [IMG.exterior_night, IMG.exterior_day, IMG.balconyView],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Anegundi",
            addressRegion: "Karnataka",
            postalCode: "583227",
            addressCountry: "IN",
          },
          telephone: SITE.whatsappDisplay,
          sameAs: [SITE.instagram],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <RoomsTeaser />
      <Dining />
      <Experiences />
      <GalleryStrip />
      <LocationBlock />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={IMG.exterior_night}
        alt="Sugriva's Kingdom Resort facade lit at blue hour, framed by palm trees"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/70" />
      <div className="relative z-10 container-x flex h-full flex-col justify-end pb-20 md:pb-28 text-[color:var(--ivory)]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow text-[color:var(--gold)]"
        >
          Hampi · Karnataka · Est. by the Tungabhadra
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-4xl font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight"
        >
          Where boulders meet <em className="not-italic text-[color:var(--gold)]">paddy fields</em>, and time slows down.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-base md:text-lg text-[color:var(--ivory)]/90"
        >
          A boutique heritage resort moments from the temples of Hampi. Private balconies that
          open to green fields, dining beneath a bamboo sky, and the warmth of Karnataka hospitality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href={waLink("Hi! I'd like to check availability at Sugriva's Kingdom.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition"
          >
            Book on WhatsApp
          </a>
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ivory)]/40 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-[color:var(--ivory)] hover:bg-white/10 transition"
          >
            Explore Rooms
          </Link>
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[color:var(--ivory)]/70 text-[10px] tracking-[0.3em] uppercase">scroll</div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Paddy-field views", "Bamboo dining hall", "Private balconies",
    "Walk to temples", "Coracle rides", "Sunset over boulders",
  ];
  return (
    <div className="border-y border-border/60 bg-[color:var(--sandstone)]/40 overflow-hidden">
      <div className="container-x py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-xs uppercase tracking-[0.22em] text-foreground/70">
        {items.map((i, k) => (
          <span key={k} className="flex items-center gap-3">
            <span>{i}</span>
            {k < items.length - 1 && <span className="text-primary/60">◆</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
      <div className="md:col-span-5 space-y-6">
        <p className="eyebrow">The Kingdom</p>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
          A quiet kingdom of palms, paddy and granite.
        </h2>
        <p className="text-foreground/75 leading-relaxed">
          Named for the monkey-king Sugriva of the Ramayana, our resort sits in the mythical land
          of Kishkindha — just across the Tungabhadra from Hampi's ruins. Whitewashed walls,
          terracotta tiles and bamboo pavilions sit lightly on the land, framed by coconut groves
          and emerald paddy.
        </p>
        <p className="text-foreground/75 leading-relaxed">
          We're built for the slow traveller — the kind who wants temple stones at sunrise,
          a south-Indian thali at noon, and the call of a peacock at dusk.
        </p>
        <div className="pt-4 grid grid-cols-3 gap-6">
          <Stat n="12" l="Rooms & Suites" />
          <Stat n="3 km" l="To Virupaksha" />
          <Stat n="24/7" l="Concierge" />
        </div>
      </div>
      <div className="md:col-span-7 grid grid-cols-2 gap-4">
        <img src={IMG.exterior_day} alt="Resort viewed across paddy fields and palms" className="col-span-2 aspect-[16/10] w-full rounded-md object-cover shadow-lg" loading="lazy" />
        <img src={IMG.bambooEntry} alt="Bamboo and thatch entrance pavilion at dusk" className="aspect-square w-full rounded-md object-cover shadow-lg" loading="lazy" />
        <img src={IMG.landscape} alt="Hampi's iconic granite boulders rising over paddy fields" className="aspect-square w-full rounded-md object-cover shadow-lg" loading="lazy" />
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary">{n}</div>
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

function RoomsTeaser() {
  const rooms = [
    { img: IMG.roomSuite, name: "Heritage Suite", desc: "Spacious king suite with lounge nook and full-height field-facing windows.", price: "From ₹6,500 / night" },
    { img: IMG.roomClassic, name: "Classic King Room", desc: "Warm, intimate room with traditional accents and ensuite walk-in shower.", price: "From ₹4,800 / night" },
    { img: IMG.balconyView, name: "Paddy-View Balcony", desc: "Private terracotta-ceiling balcony opening onto endless green paddy.", price: "Included with stay" },
  ];
  return (
    <section className="bg-[color:var(--sandstone)]/30 py-24 md:py-32 border-y border-border/50">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="eyebrow">Stays</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">Rooms with a view, and a story.</h2>
          </div>
          <Link to="/rooms" className="text-sm font-semibold text-primary hover:underline underline-offset-4">View all rooms →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((r) => (
            <article key={r.name} className="group bg-card rounded-md overflow-hidden shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={r.img} alt={r.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{r.name}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{r.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">{r.price}</span>
                  <a href={waLink(`Hi! I'd like to enquire about the ${r.name}.`)} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80 hover:text-primary">Enquire →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dining() {
  return (
    <section className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
      <div className="md:col-span-7 grid grid-cols-2 gap-4 order-2 md:order-1">
        <img src={IMG.diningHall} alt="Bamboo dining hall lit at dusk with low tables and cushions" className="col-span-2 aspect-[16/9] w-full rounded-md object-cover shadow-lg" loading="lazy" />
        <img src={IMG.diningHall2} alt="Dining hall alternate view with hanging lanterns" className="aspect-[4/3] w-full rounded-md object-cover shadow-lg" loading="lazy" />
        <img src={IMG.bambooEntry} alt="Bamboo pavilion exterior" className="aspect-[4/3] w-full rounded-md object-cover shadow-lg" loading="lazy" />
      </div>
      <div className="md:col-span-5 space-y-6 order-1 md:order-2">
        <p className="eyebrow">The Pavilion</p>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">Dining under a bamboo sky.</h2>
        <p className="text-foreground/75 leading-relaxed">
          Our open-air pavilion is a hand-built bamboo cathedral — low cushioned tables,
          hanging lanterns, and the gentle whir of fans overhead. Sit cross-legged for
          slow Karnataka thalis, fresh dosa breakfasts, and Israeli, continental and
          backpacker classics from the kitchen.
        </p>
        <ul className="grid grid-cols-2 gap-3 text-sm text-foreground/80">
          <li className="flex gap-2"><UtensilsCrossed size={16} className="text-primary mt-0.5" /> Multi-cuisine menu</li>
          <li className="flex gap-2"><Sparkles size={16} className="text-primary mt-0.5" /> Vegetarian-friendly</li>
          <li className="flex gap-2"><Wind size={16} className="text-primary mt-0.5" /> Open-air seating</li>
          <li className="flex gap-2"><Trees size={16} className="text-primary mt-0.5" /> Farm-fresh ingredients</li>
        </ul>
      </div>
    </section>
  );
}

function Experiences() {
  const items = [
    { title: "Temple Trail", desc: "Sunrise walk through Virupaksha, Vittala and the Stone Chariot.", icon: Sparkles },
    { title: "Coracle Rides", desc: "Drift the Tungabhadra in a traditional round basket boat.", icon: Wind },
    { title: "Boulder Sunsets", desc: "Climb to Hemakuta or Matanga hill for the best skies in India.", icon: Trees },
    { title: "Anegundi Cycle", desc: "Ride through Kishkindha villages, banana groves and ancient ruins.", icon: Car },
  ];
  return (
    <section className="bg-[color:var(--ink)] text-[color:var(--ivory)] py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow text-[color:var(--gold)]">Experiences</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">Hampi, beyond the postcards.</h2>
          <p className="mt-4 text-[color:var(--ivory)]/75">We curate days for the curious — temples at dawn, river crossings, boulder hikes and home-cooked meals in nearby villages.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((i) => (
            <div key={i.title} className="rounded-md border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] transition-colors">
              <i.icon size={26} className="text-[color:var(--gold)]" />
              <h3 className="font-display text-xl mt-5 text-[color:var(--ivory)]">{i.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--ivory)]/70 leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryStrip() {
  const pics = [IMG.bathroom, IMG.roomClassic, IMG.balconyView, IMG.landscape, IMG.exterior_day, IMG.diningHall2];
  return (
    <section className="container-x py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">A look around.</h2>
        </div>
        <Link to="/gallery" className="text-sm font-semibold text-primary hover:underline underline-offset-4">Full gallery →</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
        {pics.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Sugriva's Kingdom detail"
            className={`w-full rounded-md object-cover ${i % 5 === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}

function LocationBlock() {
  const amenities = [
    { icon: Wifi, label: "Free Wi-Fi" },
    { icon: Car, label: "Parking on site" },
    { icon: UtensilsCrossed, label: "Multi-cuisine kitchen" },
    { icon: Trees, label: "Garden & lawn" },
    { icon: Wind, label: "AC rooms" },
    { icon: Sparkles, label: "Daily housekeeping" },
  ];
  return (
    <section className="bg-[color:var(--sandstone)]/30 py-24 md:py-32 border-y border-border/50">
      <div className="container-x grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="eyebrow">Find Us</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">In the heart of Kishkindha.</h2>
          <p className="mt-5 text-foreground/75 leading-relaxed flex items-start gap-2">
            <MapPin size={18} className="text-primary mt-1 shrink-0" />
            <span>{SITE.address}</span>
          </p>
          <div className="mt-6 grid grid-cols-2 gap-y-3 gap-x-6">
            {amenities.map((a) => (
              <div key={a.label} className="flex items-center gap-3 text-sm text-foreground/80">
                <a.icon size={18} className="text-primary" />
                {a.label}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Get Directions
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary">
              <Instagram size={16} /> Follow on Instagram
            </a>
          </div>
        </div>
        <div className="rounded-md overflow-hidden shadow-lg border border-border/60 h-[420px]">
          <iframe
            title="Sugriva's Kingdom location map"
            src={SITE.mapEmbed}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { q: "Woke up to peacocks and a balcony full of green paddy. Best stay we had in all of Karnataka.", a: "— Priya & Arjun, Bengaluru" },
    { q: "The bamboo dining hall feels like a film set. Food was incredible — try the dosa.", a: "— Liam, Australia" },
    { q: "Walking distance to Hampi but feels like a hidden retreat. We extended our stay twice.", a: "— Sofía, Spain" },
  ];
  return (
    <section className="container-x py-24 md:py-32">
      <div className="max-w-xl">
        <p className="eyebrow">Guests Say</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">Loved by slow travellers.</h2>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {t.map((x, i) => (
          <figure key={i} className="rounded-md border border-border/60 bg-card p-8 shadow-sm">
            <div className="text-primary text-3xl leading-none font-display">"</div>
            <blockquote className="mt-3 text-foreground/85 leading-relaxed">{x.q}</blockquote>
            <figcaption className="mt-5 text-sm text-muted-foreground">{x.a}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden">
      <img src={IMG.exterior_day} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)]/85 to-[color:var(--ink)]/55" />
      <div className="relative container-x py-24 md:py-32 text-[color:var(--ivory)]">
        <h2 className="max-w-3xl font-display text-4xl md:text-6xl leading-[1.02]">Your Hampi story starts here.</h2>
        <p className="mt-5 max-w-xl text-[color:var(--ivory)]/85">Reach us directly on WhatsApp for best rates, group bookings, or to plan your itinerary.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waLink("Hi! I'd like to book a stay at Sugriva's Kingdom.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Book on WhatsApp
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ivory)]/40 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-[color:var(--ivory)] hover:bg-white/10">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
