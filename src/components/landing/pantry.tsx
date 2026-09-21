import { products, formatPrice } from "@/data/catalog";
import { STORE_URL } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ArrowUpLeft } from "lucide-react";

const SLUGS = ["عسل-سدر-1-كيلو", "عسل-سمر-1-كيلو", "سمن-غنم-منجور-1-كيلو"] as const;

export function Pantry() {
  const items = SLUGS.map((slug) => products.find((p) => p.slug === slug)).filter(
    (p) => p != null,
  );

  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[var(--radius-2xl)] bg-surface-2">
          <img
            src="/images/honey-ghee.jpg"
            alt="عسل بلدي وسمن غنم"
            className="aspect-[4/3] w-full object-cover outline-none"
          />
        </div>
        <div>
          <p className="text-sm text-subtle">بيت المؤونة</p>
          <h2 className="mt-2 font-display text-[length:var(--text-title)] text-fg">
            عسل سدر وسمر، وسمن غنم منجور
          </h2>
          <p className="mt-4 text-muted">
            إلى جانب البر: عسل السدر والسمر وسمن الغنم — مؤونة المجلس والمائدة
            من المصدر نفسه.
          </p>
          <ul className="mt-6 space-y-3">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[var(--radius-lg)] bg-surface px-4 py-3.5 shadow-[var(--shadow-border)] transition-colors duration-[var(--motion-quick)] hover:bg-surface-2"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-sm text-muted">
                    {formatPrice(item.price, item.hasOptions)}
                    {!item.inStock ? " · نفد" : ""}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-6">
            <a href={`${STORE_URL}categories/1622566/السمن-والعسل`} target="_blank" rel="noreferrer">
              قسم السمن والعسل
              <ArrowUpLeft />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
