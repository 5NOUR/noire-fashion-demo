import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";
import type { Product } from "@/types";
import { SectionHeading } from "@/components/shared/section-heading";

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

export function RelatedProducts({
  currentProductId,
  category,
}: RelatedProductsProps) {
  const related = products
    .filter(
      (product) =>
        product.id !== currentProductId && product.category === category,
    )
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="section-padding border-t border-border">
      <div className="container-wide">
        <SectionHeading title="You May Also Like" align="left" />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
