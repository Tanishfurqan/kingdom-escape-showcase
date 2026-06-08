import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sugriva's Kingdom, Hampi" },
      { name: "description", content: "Photos of our resort, rooms, bamboo dining and the Hampi landscape." },
      { property: "og:title", content: "Gallery — Sugriva's Kingdom" },
      { property: "og:description", content: "Inside our boutique Hampi resort." },
      { property: "og:image", content: IMG.exterior_night },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const sections = [
  { title: "The Resort", desc: "Whitewashed walls, terracotta tiles, palms, paddy.", pics: [
    { src: IMG.exterior_night, alt: "Resort facade lit at blue hour" },
    { src: IMG.exterior_day, alt: "Resort exterior framed by palms" },
    { src: IMG.bambooEntry, alt: "Bamboo entrance pavilion at dusk" },
  ]},
  { title: "Rooms & Suites", desc: "Warm interiors and quiet corners.", pics: [
    { src: IMG.roomSuite, alt: "Spacious suite with lounge nook" },
    { src: IMG.roomClassic, alt: "Warm-lit classic king room" },
    { src: IMG.bathroom, alt: "Walk-in glass shower bathroom" },
  ]},
  { title: "Dining Pavilion", desc: "A bamboo cathedral lit by lanterns.", pics: [
    { src: IMG.diningHall, alt: "Bamboo dining hall, low tables" },
    { src: IMG.diningHall2, alt: "Dining hall with hanging lanterns" },
  ]},
  { title: "Views & Surroundings", desc: "Paddy, palms and the boulders of Hampi.", pics: [
    { src: IMG.balconyView, alt: "Balcony view over paddy fields" },
    { src: IMG.landscape, alt: "Hampi boulder hills above paddy" },
  ]},
];

function Gallery() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title="A look around the kingdom." sub="Every photograph is shot on the property — no stock." image={IMG.diningHall} alt="Bamboo dining hall" />
      <div className="container-x py-20 space-y-20">
        {sections.map((s) => (
          <section key={s.title}>
            <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
              <h2 className="font-display text-3xl md:text-4xl">{s.title}</h2>
              <p className="text-sm text-muted-foreground max-w-md">{s.desc}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
              {s.pics.map((p, i) => (
                <figure key={i} className={`overflow-hidden rounded-md shadow-sm border border-border/40 ${i === 0 && s.pics.length > 2 ? "col-span-2 md:row-span-2" : ""}`}>
                  <img src={p.src} alt={p.alt} className={`w-full ${i === 0 && s.pics.length > 2 ? "aspect-[16/10] md:h-full md:aspect-auto" : "aspect-[4/3]"} object-cover hover:scale-105 transition-transform duration-700`} loading="lazy" />
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}