import Link from "next/link";
import { getCategories } from "@/app/lib/data";

export async function CategoryMenu() {
  const categories = await getCategories();

  return (
    <div className="w-full border-b bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-2">
        <ul className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)]">
          {categories.map((c1) => (
            <li key={c1.id} className="group relative">
              <Link href={`/category/${c1.slug}`} className="hover:text-[var(--accent)] font-medium">{c1.name}</Link>
              {c1.children.length > 0 && (
                <div className="absolute left-0 top-full z-10 hidden group-hover:block pt-2">
                  <div className="bg-[var(--surface)] shadow border min-w-64 p-4">
                    <div className="grid grid-cols-2 gap-6">
                    {c1.children.map((c2) => (
                      <div key={c2.id}>
                        <div className="font-semibold mb-2">
                          <Link href={`/category/${c1.slug}/${c2.slug}`} className="hover:text-[var(--accent)]">{c2.name}</Link>
                        </div>
                        <ul className="space-y-1">
                          {c2.children.map((c3) => (
                            <li key={c3.id}>
                              <Link href={`/category/${c1.slug}/${c2.slug}/${c3.slug}`} className="text-[var(--text-muted)] hover:text-[var(--accent)]">
                                {c3.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


