export function Craft() {
  const steps = [
    {
      n: "01",
      title: "انتقاء الأصل",
      text: "بر باسم منطقته وموسمه، من مزارعي المرتفعات لا من خلطات مجهولة.",
    },
    {
      n: "02",
      title: "طحن الحبة كاملة",
      text: "القشرة والجنين واللب معاً — رغيف أثقل طعماً وأغنى غذاءً.",
    },
    {
      n: "03",
      title: "خلطات على القياس",
      text: "من سبعة حبوب إلى خلطات السكر والدايت والخالية من الجلوتين.",
    },
  ] as const;

  return (
    <section id="craft" className="scroll-mt-24 bg-ink px-4 py-20 text-cream sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[var(--radius-2xl)]">
          <img
            src="/images/mill-workshop.jpg"
            alt="طاحون حجري في ضوء النهار"
            className="aspect-[4/3] w-full object-cover outline-none"
          />
        </div>
        <div>
          <p className="text-sm text-cream/60">كيف نطحن</p>
          <h2 className="mt-2 font-display text-[length:var(--text-title)] text-cream">
            الطاحون بيت، ليس رفّ سوبرماركت
          </h2>
          <p className="mt-4 text-cream/75">
            أهلاً بك في طاحون الطيب حيث تُطحن الأصالة ليفوح عبق الجودة. لا نقدّم
            منتجاً جاهزاً من مصنع بعيد — نقدّم تجربة الجبل في كيس باسمه.
          </p>
          <ol className="mt-8 space-y-6">
            {steps.map((step) => (
              <li key={step.n} className="flex gap-4">
                <span className="font-display text-2xl text-cream/40">{step.n}</span>
                <div>
                  <h3 className="font-display text-xl text-cream">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream/70">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
