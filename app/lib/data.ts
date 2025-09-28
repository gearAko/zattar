import { CategoryNode, Product } from "./types";
import categoriesJson from "@/app/mock/categories.json" assert { type: "json" };
import productsJson from "@/app/mock/products.json" assert { type: "json" };

export async function getCategories(): Promise<CategoryNode[]> {
  return categoriesJson as unknown as CategoryNode[];
}

export async function getProducts(): Promise<Product[]> {
  return productsJson as unknown as Product[];
}

export async function findCategoryBySlugPath(slugPath: string[]): Promise<CategoryNode | null> {
  const categories = await getCategories();
  let layer: CategoryNode[] = categories;
  let found: CategoryNode | null = null;
  for (const slug of slugPath) {
    found = layer.find((c) => c.slug === slug) ?? null;
    if (!found) return null;
    layer = found.children;
  }
  return found;
}

export async function getProductsByCategoryPath(slugPath: string[]): Promise<Product[]> {
  const all = await getProducts();
  return all.filter((p) => slugPath.every((slug, idx) => p.category[idx] === slug));
}

export type SortKey = "price" | "popularity" | "new";

export function sortProducts(products: Product[], sort: SortKey): Product[] {
  const cloned = [...products];
  switch (sort) {
    case "price":
      return cloned.sort((a, b) => a.price - b.price);
    case "popularity":
      return cloned.sort((a, b) => b.popularity - a.popularity);
    case "new":
      return cloned.sort((a, b) => {
        const aTime = a.createdAt ? Date.parse(a.createdAt) : (a.isNew ? Number.MAX_SAFE_INTEGER : 0);
        const bTime = b.createdAt ? Date.parse(b.createdAt) : (b.isNew ? Number.MAX_SAFE_INTEGER : 0);
        return bTime - aTime;
      });
    default:
      return cloned;
  }
}


