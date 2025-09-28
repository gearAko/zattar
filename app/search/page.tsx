import { getProducts } from "@/app/lib/data";
import { ProductCard } from "@/app/components/ProductCard";
import { Breadcrumbs, type Crumb } from "@/app/components/Breadcrumbs";

type Props = { searchParams: { q?: string } };

export default async function SearchPage({ searchParams }: Props) {
  const q = (searchParams.q || "").trim();
  const all = await getProducts();
  const filtered = q
    ? all.filter((p) =>
        [p.title, p.slug].some((s) => s.toLowerCase().includes(q.toLowerCase()))
      )
    : all.slice(0, 24);

  const crumbs: Crumb[] = [
    { name: "Главная", href: "/" },
    { name: "Поиск", href: "/search" },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumbs items={crumbs} />
      <h1 className="text-xl font-semibold text-[var(--text-strong)]">Результаты поиска {q && `“${q}”`}</h1>
      {q && (
        <div className="text-sm text-[var(--text-muted)]">Найдено: {filtered.length}</div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}


