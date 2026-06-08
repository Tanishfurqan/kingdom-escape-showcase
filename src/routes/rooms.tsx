import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { waLink } from "@/lib/site";
import { PageHeader } from "@/components/site/PageHeader";
import { BedDouble, Bath, Trees, Wind, Wifi, Tv } from "lucide-react";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Sugriva's Kingdom, Hampi" },
      { name: "description", content: "Heritage suites and classic king rooms — private balconies overlooking paddy fields in Hampi." },
      { property: "og:title", content: "Rooms & Suites — Sugriva's Kingdom" },
      { property: "og:description", content: "Private balconies, warm interiors, modern bathrooms." },
      { property: "og:image", content: IMG.roomSuite },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: Rooms,
});

const rooms = [
  { name: "Heritage Suite", img: IMG.roomSuite, price: "₹6,500", occupancy: "2 adults + 1 child", desc: "Our flagship suite: high-ceilinged sanctuary in warm ivory, king bed, quiet lounge nook and full-height windows opening onto our gardens.", features: ["King bed", "Lounge area", "Garden view", "Air conditioning", "Walk-in shower", "Free Wi-Fi"] },
  { name: "Classic King Room", img: IMG.roomClassic, price: "₹4,800", occupancy: "2 adults", desc: "Intimate and warm, with a sculpted wooden bed, brass wall sconces and a soft red runner. Glows beautifully at night.", features: ["King bed", "Warm-toned interiors", "Ensuite bath", "Air conditioning", "Daily housekeeping", "Free Wi-Fi"] },
  { name: "Paddy-View Balcony", img: IMG.balconyView, price: "Included", occupancy: "Every room", desc: "Every room opens onto a private terracotta-ceilinged balcony with a view of emerald paddy and palms.", features: ["Private terrace", "Paddy & palm views", "Terracotta ceiling", "Outdoor seating"] },
];

function Rooms() {
  return (
    <>
      <PageHeader eyebrow="Stays" title="Rooms & Suites" sub="Twelve rooms, each opening onto green paddy fields and the silhouettes of Hampi's hills." image={IMG.roomSuite} alt="Heritage suite" />
      <section className="container-x py-20 md:py-28 space-y-24">
        {rooms.map((r, i) => (
          <article key={r.name} className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="md:col-span-7">
              <img src={r.img} alt={r.name} className="w-full aspect-[4/3] object-cover rounded-md shadow-lg" loading="lazy" />
            </div>
            <div className="md:col-span-5 space-y-5">
              <p className="eyebrow">0{i + 1} · {r.occupancy}</p>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">{r.name}</h2>
              <p className="text-foreground/75 leading-relaxed">{r.desc}</p>
              <ul className="grid grid-cols-2 gap-2 text-sm text-foreground/80">
                {r.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" />{f}</li>
                ))}
              </ul>
              <div className="flex items-end justify-between border-t border-border/60 pt-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Starting at</div>
                  <div className="font-display text-3xl text-primary mt-1">{r.price}{r.price !== "Included" && <span className="text-sm text-muted-foreground"> / night</span>}</div>
                </div>
                <a href={waLink(`Hi! I'd like to book the ${r.name}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Book on WhatsApp</a>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="bg-[color:var(--sandstone)]/30 border-y border-border/50 py-20">
        <div className="container-x">
          <p className="eyebrow">In-room</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Every room comes with</h2>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[{i:BedDouble,t:"King beds & crisp cotton"},{i:Bath,t:"Modern walk-in showers"},{i:Trees,t:"Private paddy-view balcony"},{i:Wind,t:"AC + ceiling fans"},{i:Wifi,t:"Complimentary Wi-Fi"},{i:Tv,t:"Smart TV in select rooms"}].map((a)=>(
              <div key={a.t} className="flex items-start gap-4 p-6 rounded-md border border-border/60 bg-card">
                <a.i className="text-primary mt-0.5" size={22} />
                <div className="font-medium">{a.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-x py-20">
        <h2 className="font-display text-3xl">Bathrooms designed for comfort.</h2>
        <p className="mt-3 max-w-xl text-foreground/70">Glass walk-in showers, modern fittings, stone-textured tiles — clean and contemporary against our heritage interiors.</p>
        <img src={IMG.bathroom} alt="Modern walk-in glass shower bathroom" className="mt-10 w-full max-w-3xl rounded-md shadow-lg" loading="lazy" />
      </section>
    </>
  );
}