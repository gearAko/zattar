export function Filters() {
  const sections = [
    { title: "Бренд", items: ["Brand A", "Brand B", "Brand C"] },
    { title: "Состояние", items: ["Новый", "Б/У"] },
  ];
  return (
    <div className="space-y-3">
      {sections.map((s) => (
        <details key={s.title} className="rounded border bg-white" open>
          <summary className="cursor-pointer select-none px-4 py-2 font-medium text-stone-800">{s.title}</summary>
          <div className="px-4 pb-3 pt-1 space-y-1">
            {s.items.map((it) => (
              <label className="flex items-center gap-2 text-sm text-stone-800" key={it}>
                <input type="checkbox" className="size-4" />
                <span>{it}</span>
              </label>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}


