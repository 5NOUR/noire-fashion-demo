"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";
import { SectionHeading } from "@/components/shared/section-heading";

const STORAGE_KEY = "noire-recently-viewed";

export function RecentlyViewed() {
  const [recentIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    try {
      const ids = JSON.parse(stored) as string[];
      return ids;
    } catch {
      return [];
    }
  });

  const recentProducts = recentIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 4);

  if (recentProducts.length === 0) return null;

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <SectionHeading title="Recently Viewed" align="left" />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {recentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
