import raw from "./products.json";

export type Product = {
  id: string;
  name: string;
  slug: string;
  url: string;
  price: number;
  salePrice: number | null;
  inStock: boolean;
  image: string | null;
  categories: string[];
  hasOptions: boolean;
  rating: number | null;
  sold: number;
};

export const products = raw as Product[];

export function formatPrice(price: number, hasOptions: boolean) {
  const value = Number.isInteger(price) ? `${price}` : price.toFixed(2);
  return hasOptions ? `من ${value} ر.س` : `${value} ر.س`;
}

export function categoryOf(product: Product) {
  return product.categories[0] ?? "أخرى";
}
