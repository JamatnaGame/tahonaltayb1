import { FAQS } from "@/data/site";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-bg-deep px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-subtle">أسئلة يتكرر طرحها</p>
        <h2 className="mt-2 font-display text-[length:var(--text-title)] text-fg">
          قبل أن تطلب
        </h2>
        <div className="mt-8 divide-y divide-border overflow-hidden rounded-[var(--radius-xl)] bg-surface shadow-[var(--shadow-border)]">
          {FAQS.map((item) => (
            <details key={item.q} className="group px-5 py-1">
              <summary className="cursor-pointer list-none py-4 font-medium text-fg marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-subtle transition-transform duration-[var(--motion-fast)] group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
