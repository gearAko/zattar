"use client";
import { useRouter } from "next/navigation";
import { type SortKey } from "@/app/lib/data";

export function SortControl({ current, slugPath }: { current: SortKey; slugPath: string[] }) {
  const router = useRouter();
  const options: { key: SortKey; label: string }[] = [
    { key: "price", label: "По цене" },
    { key: "popularity", label: "По популярности" },
    { key: "new", label: "По новизне" },
  ];

  return (
    <label className="text-sm inline-flex items-center gap-2">
      <span className="text-[var(--text-muted)]">Сортировка:</span>
      <select
        value={current}
        onChange={(e) => router.push(`/category/${slugPath.join("/")}?sort=${e.target.value}`)}
        className="border rounded px-2 py-1 bg-[var(--surface)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        aria-label="Сортировка товаров"
      >
        {options.map((o) => (
          <option value={o.key} key={o.key}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}


