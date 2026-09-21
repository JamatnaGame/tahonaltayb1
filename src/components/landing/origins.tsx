import { ORIGINS } from "@/data/site";

export function Origins() {
  return (
    <section id="origins" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm text-subtle">من أرضه</p>
          <h2 className="mt-2 font-display text-[length:var(--text-title)] text-fg">
            بر يُسمّى باسم جَبله
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            لا نخلط الأصول في كيس واحد. كل صنف يحمل اسم منطقته وموسمه: هلباء
            بللسمر غير قياضه، وبر السودة غير بر النماص. هذا هو الفرق.
          </p>
        </div>
        <div className="overflow-hidden rounded-[var(--radius-2xl)] bg-surface-2">
          <img
            src="/images/asir-wheat.jpg"
            alt="مدرجات البر في مرتفعات عسير"
            className="aspect-[16/10] w-full object-cover outline-none"
          />
        </div>
      </div>
      <ul className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ORIGINS.map((origin) => (
          <li
            key={origin.name}
            className="rounded-[var(--radius-xl)] bg-surface p-5 shadow-[var(--shadow-border)]"
          >
            <p className="text-xs tracking-wide text-subtle">{origin.region}</p>
            <h3 className="mt-1 font-display text-2xl text-fg">{origin.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{origin.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
