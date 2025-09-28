import Link from "next/link";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="text-sm text-gray-600 flex gap-2 flex-wrap">
      {items.map((c, i) => (
        <span key={c.href + i} className="flex items-center gap-2">
          <Link href={c.href} className="hover:text-stone-900">{c.name}</Link>
          {i < items.length - 1 && <span>{">"}</span>}
        </span>
      ))}
    </nav>
  );
}


