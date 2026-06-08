import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/site/PageHeader";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Sugriva's Kingdom, Hampi" },
      { name: "description", content: "Temple walks, coracle rides, boulder sunsets and village cycle tours around Hampi." },
      { property: "og:title", content: "Experiences — Sugriva's Kingdom" },
      { property: "og:image", content: IMG.landscape },
      { property: "og:url", content: "/experiences" },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: Experiences,
});

const list = [
  { title: "Temple Trail at Sunrise", desc: "We meet you at first light with chai. Walk Virupaksha, Hemakuta, the Stone Chariot and the musical pillars of Vittala before the day warms." },
  { title: "Coracle Ride on the Tungabhadra", desc: "Drift past granite cliffs, ancient mandapas and bathing ghats in a traditional round basket boat." },
  { title: "Boulder Sunset at Matanga Hill", desc: "Hampi's most cinematic sunset. We pack snacks, you bring a camera." },
  { title: "Anegundi Village Cycle", desc: "Pedal through Kishkindha — banana groves, weaving cooperatives, ancient temples and a home-style lunch." },
  { title: "Royal Enfield Day", desc: "Two wheels through ruins and rice fields. Bikes and helmets arranged on request." },
  { title: "Hampi by Night Storytelling", desc: "After dinner, gather under the bamboo roof for stories from the Ramayana." },
];

function Experiences() {
  return (
    <>
      <PageHeader eyebrow="Experiences" title="Hampi, designed for you." sub="Curated walks, rides, river journeys and stories." image={IMG.landscape} alt="Hampi boulders" />
      <section className="container-x py-20 grid md:grid-cols-2 gap-6">
        {list.map((x, i) => (
          <article key={x.title} className="rounded-md border border-border/60 bg-card p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <p className="eyebrow">0{i + 1}</p>
            <h3 className="mt-3 font-display text-2xl">{x.title}</h3>
            <p className="mt-3 text-foreground/75 leading-relaxed">{x.desc}</p>
            <a href={waLink(`Hi! I'd like to know more about: ${x.title}.`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline underline-offset-4">Enquire on WhatsApp →</a>
          </article>
        ))}
      </section>
    </>
  );
}