import { findCategoryBySlugPath, getProductsByCategoryPath, sortProducts, type SortKey, getCategories } from "@/app/lib/data";
import { ProductCard } from "@/app/components/ProductCard";
import { Breadcrumbs, type Crumb } from "@/app/components/Breadcrumbs";
import { SortControl } from "@/app/components/SortControl";
import { Filters } from "@/app/components/Filters";

type Props = { params: { slug: string[] }, searchParams: { sort?: SortKey } };

export default async function CategoryPage({ params, searchParams }: Props) {
  const slugPath = params.slug || [];
  const category = await findCategoryBySlugPath(slugPath);
  if (!category) {
    return <div>Категория не найдена</div>;
  }

  const sort: SortKey = searchParams.sort || "popularity";
  const products = sortProducts(await getProductsByCategoryPath(slugPath), sort);

  // Build breadcrumbs using localized category names from the tree
  const tree = await getCategories();
  const crumbs: Crumb[] = [{ name: "Главная", href: "/" }];
  const acc: string[] = [];
  let layer = tree;
  for (const slug of slugPath) {
    const node = layer.find((c) => c.slug === slug);
    acc.push(slug);
    const href = "/category/" + acc.join("/");
    crumbs.push({ name: node?.name ?? slug, href });
    layer = node?.children ?? [];
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <Breadcrumbs items={crumbs} />
      </div>

      <aside className="col-span-12 md:col-span-3">
        <Filters />
      </aside>

      <section className="col-span-12 md:col-span-9">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold capitalize text-stone-900">{category.name}</h1>
          <SortControl current={sort} slugPath={slugPath} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
