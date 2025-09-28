import Link from "next/link";
import Image from "next/image";
import { getCategories, getProducts } from "./lib/data";
import { ProductCard } from "./components/ProductCard";

export default async function Home() {
  const categories = await getCategories();
  const products = (await getProducts()).slice(0, 8);

  return (
    <div className="space-y-10">
      <section className="rounded-md border bg-[var(--surface)] overflow-hidden">
        <div className="relative w-full h-44 md:h-56">
          <Image src="https://placehold.co/1200x360/png?text=Promo" alt="Промо баннер" fill className="object-cover" />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3 text-[var(--text-strong)]">Популярные категории</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => (
            <Link key={c.id} href={`/category/${c.slug}`} className="rounded-md border bg-[var(--surface)] p-4 hover:shadow-sm text-[var(--text)]">
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3 text-[var(--text-strong)]">Популярные товары</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />)
          )}
        </div>
      </section>
    </div>
  );
}
