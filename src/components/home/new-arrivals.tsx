import { products } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NewArrivals() {
  const newItems = products.filter((p) => p.newArrival).slice(0, 3);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <Reveal>
            <SectionHeading
              title="New Arrivals"
              subtitle="Fresh drops this week."
              align="left"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild variant="outline">
              <Link href="/shop">Shop All</Link>
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newItems.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.1}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
