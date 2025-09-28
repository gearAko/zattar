"use client";
import Link from "next/link";
import { useState } from "react";

const cities = ["Алматы", "Астана", "Шымкент", "Караганда"];

export function Header() {
  const [city, setCity] = useState<string>(() => {
    if (typeof window === "undefined") return cities[0];
    return localStorage.getItem("city") || cities[0];
  });

  return (
    <header className="w-full border-b bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold text-[var(--accent)]">zattar</Link>
        <div className="flex items-center gap-3">
          <label className="text-sm text-gray-600">Город</label>
          <select
            className="border rounded px-2 py-1 text-sm bg-[var(--surface)] text-[var(--text)]"
            value={city}
            onChange={(e) => {
              const value = e.target.value;
              setCity(value);
              try { localStorage.setItem("city", value); } catch {}
            }}
            aria-label="Выбор города"
          >
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        {/* <nav className="hidden md:flex items-center gap-6 text-sm text-stone-700">
          <Link href="/" className="hover:text-stone-900">Главная</Link>
          <Link href="/category/electronics/laptops" className="hover:text-stone-900">Ноутбуки</Link>
          <Link href="/category/electronics/phones" className="hover:text-stone-900">Смартфоны</Link>
        </nav> */}
      </div>
    </header>
  );
}


