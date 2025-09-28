"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function SearchBar() {
  const [q, setQ] = useState("");
  const router = useRouter();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <div className="w-full border-b bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <form onSubmit={onSubmit} className="flex gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Поиск товаров"
            className="flex-1 rounded border px-3 py-2 text-sm bg-[var(--surface)] text-[var(--text)]"
            aria-label="Строка поиска"
          />
          <button className="rounded px-4 py-2 text-sm border text-[var(--surface)] bg-[var(--accent)]">Найти</button>
        </form>
      </div>
    </div>
  );
}


