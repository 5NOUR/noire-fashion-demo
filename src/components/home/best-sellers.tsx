import { products } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function BestSellers() {
  const best = products.filter((p) => p.bestSeller).slice(0, 4);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            title="Best Sellers"
            subtitle="The pieces our customers love most."
            align="left"
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {best.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.05}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
