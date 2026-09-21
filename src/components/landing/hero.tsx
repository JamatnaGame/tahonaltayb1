import { ArrowUpLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SLOGAN, STORE_URL, WHATSAPP_URL } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[min(92vh,52rem)] overflow-hidden bg-ink text-cream">
      <img
        src="/images/asir-wheat.jpg"
        alt="سنابل بر في مرتفعات عسير"
        className="absolute inset-0 size-full object-cover object-center outline-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
      <div className="relative mx-auto flex min-h-[min(92vh,52rem)] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
        <p className="mb-4 text-sm text-cream/80">
          طاحون حجري · بر بلدي وعضوي
        </p>
        <h1 className="max-w-3xl font-display text-[length:var(--text-display)] leading-[1.15] text-cream">
          طاحون الطيب
        </h1>
        <p className="mt-4 max-w-xl font-display text-2xl leading-snug text-cream/90 sm:text-3xl">
          {SLOGAN}
        </p>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg">
          بر الجبال السعودية يُطحن عندك طازجاً — من السودة والنماص وبللسمر
          والباحة إلى خلطات الخبز والعسل البلدي.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild variant="inverse" size="lg">
            <a href={STORE_URL} target="_blank" rel="noreferrer">
              تسوق من المتجر
              <ArrowUpLeft />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-cream/20 text-cream hover:bg-cream/10">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              اسأل على واتساب
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
