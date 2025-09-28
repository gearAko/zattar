import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="block border rounded-md hover:shadow-sm transition bg-[var(--surface)] hover:border-[var(--accent)]/30">
      <div className="relative w-full aspect-[4/3] bg-[var(--surface-muted)]">
        {/* next/image requires known sizes; using fill for simplicity */}
        <Image src={product.image} alt={product.title} fill className="object-contain" sizes="(max-width: 768px) 50vw, 25vw" priority={false} />
      </div>
      <div className="p-3">
        <div className="text-sm line-clamp-2 min-h-10 text-[var(--text)]">{product.title}</div>
        <div className="mt-2 font-semibold text-[var(--text-strong)]">{product.price.toLocaleString("ru-RU")} ₸</div>
      </div>
    </Link>
  );
}


