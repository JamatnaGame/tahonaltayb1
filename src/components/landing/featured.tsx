import { ArrowUpLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice, products } from "@/data/catalog";
import { FEATURED_SLUGS, STORE_URL } from "@/data/site";
import { ProductCard } from "./product-card";

export function Featured() {
  const featured = FEATURED_SLUGS.map((slug) =>
    products.find((p) => p.slug === slug),
  ).filter((p) => p != null);

  return (
    <section className="bg-bg-deep px-4 py-20 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-subtle">مختارات الطاحون</p>
          <h2 className="mt-2 font-display text-[length:var(--text-title)] text-fg">
            من أجود ما في البيت
          </h2>
        </div>
        <Button asChild variant="outline">
          <a href={STORE_URL} target="_blank" rel="noreferrer">
            كل المتجر
            <ArrowUpLeft />
          </a>
        </Button>
      </div>
      <ul className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              priceLabel={formatPrice(product.price, product.hasOptions)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
