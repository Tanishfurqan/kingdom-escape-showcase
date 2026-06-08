export function PageHeader({ eyebrow, title, sub, image, alt }: { eyebrow: string; title: string; sub?: string; image: string; alt: string }) {
  return (
    <section className="relative h-[60svh] min-h-[420px] w-full overflow-hidden">
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
      <div className="relative z-10 container-x flex h-full flex-col justify-end pb-14 text-[color:var(--ivory)]">
        <p className="eyebrow text-[color:var(--gold)]">{eyebrow}</p>
        <h1 className="mt-3 font-display text-5xl md:text-7xl leading-[0.95]">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl text-[color:var(--ivory)]/85">{sub}</p>}
      </div>
    </section>
  );
}