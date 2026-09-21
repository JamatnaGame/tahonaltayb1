import { ArrowUpLeft } from "lucide-react";
import type { Product } from "@/data/catalog";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  priceLabel,
}: {
  product: Product;
  priceLabel: string;
}) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-[var(--motion-fast)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-border-hover)]"
    >
      <div className="relative aspect-square overflow-hidden bg-surface-2">
        <img
          src={product.image ?? "/images/millstone.jpg"}
          alt={product.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="size-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.03]"
        />
        {!product.inStock ? (
          <span className="absolute top-3 right-3 rounded-md bg-ink/80 px-2.5 py-1 text-xs text-cream">
            غير متوفر
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs text-subtle">{product.categories[0] ?? "المتجر"}</p>
        <h3 className="text-sm font-medium leading-snug text-fg">{product.name}</h3>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-sm text-muted">{priceLabel}</span>
          <span
            className={cn(
              "inline-flex items-center gap-1 text-xs text-primary",
              "opacity-80 group-hover:opacity-100",
            )}
          >
            اطلب
            <ArrowUpLeft className="size-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}
