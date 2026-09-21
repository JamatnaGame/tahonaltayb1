import { PILLARS } from "@/data/site";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((item) => (
          <article key={item.title} className="bg-surface px-6 py-8">
            <h2 className="font-display text-xl text-fg">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
