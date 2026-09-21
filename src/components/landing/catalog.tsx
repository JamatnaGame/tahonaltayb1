import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice, products } from "@/data/catalog";
import { CATEGORIES } from "@/data/site";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";

const PAGE = 12;

export function Catalog() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]["id"]>("all");
  const [shown, setShown] = useState(PAGE);

  const filtered = useMemo(() => {
    const q = query.trim();
    return products.filter((p) => {
      const matchCat =
        cat === "all" ||
        p.categories.includes(
          CATEGORIES.find((c) => c.id === cat)?.match ?? "",
        );
      const matchQ = !q || p.name.includes(q);
      return matchCat && matchQ;
    });
  }, [query, cat]);

  const visible = filtered.slice(0, shown);

  return (
    <section id="products" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-subtle">المتجر</p>
        <h2 className="mt-2 font-display text-[length:var(--text-title)] text-fg">
          واحد وتسعون صنفاً من الطاحون
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          بر، خلطات، جريش، دخن، شوفان، سمن وعسل. الطلب يفتح صفحة المنتج في متجر
          زد مباشرة.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <div className="relative max-w-md">
            <Search className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-subtle" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShown(PAGE);
              }}
              placeholder="ابحث عن بر، خلطة، عسل…"
              className="h-12 w-full rounded-[var(--radius-lg)] bg-surface pr-11 pl-4 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setCat(item.id);
                  setShown(PAGE);
                }}
                className={cn(
                  "h-10 rounded-full px-4 text-sm transition-colors duration-[var(--motion-quick)]",
                  cat === item.id
                    ? "bg-primary text-primary-fg"
                    : "bg-surface text-muted shadow-[var(--shadow-border)] hover:text-fg",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-muted">لا توجد منتجات مطابقة للبحث.</p>
        ) : (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((product) => (
              <li key={product.id}>
                <ProductCard
                  product={product}
                  priceLabel={formatPrice(product.price, product.hasOptions)}
                />
              </li>
            ))}
          </ul>
        )}

        {shown < filtered.length ? (
          <div className="mt-10 flex justify-center">
            <Button variant="outline" onClick={() => setShown((n) => n + PAGE)}>
              عرض المزيد ({filtered.length - shown})
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
