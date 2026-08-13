"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Input } from "@/components/ui/input";
import { useTransition } from "react"; // اختياري لتحسين الأداء أثناء الكتابة

export function SearchPageClient() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isPending, startTransition] = useTransition(); // لضمان سلاسة الكتابة

  // أخذ القيمة مباشرة من الرابط
  const query = searchParams.get("q") || "";

  // دالة لتحديث الرابط بناءً على كتابة المستخدم
  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }

    // استخدام startTransition بيمنع أي تقطيع (Lag) في الـ Input أثناء تحديث الـ URL
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  // فلترة المنتجات بناءً على القيمة الحالية
  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="section-padding">
      <div className="container-wide">
        <SectionHeading title="Search" align="left" />
        <div className="mt-8 max-w-xl">
          <Input
            type="text"
            placeholder="Search products..."
            defaultValue={query} // نستخدم defaultValue بدلاً من value
            onChange={(e) => handleSearch(e.target.value)}
            autoFocus
          />
        </div>
        <p className="text-muted-foreground mt-4">
          {filtered.length} results for &quot;{query}&quot;
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-muted-foreground mt-8">No products found.</p>
        )}
      </div>
    </div>
  );
}
