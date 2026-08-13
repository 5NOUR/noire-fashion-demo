import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function FeaturedCollection() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                title="Featured Pieces"
                subtitle="Curated selections that embody the NOIRÉ philosophy."
                align="left"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted-foreground max-w-md">
                Each piece is designed with intention — from the weight of the
                fabric to the fall of the silhouette. These are the items our
                clients return to, season after season.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button asChild variant="link" className="mt-6 px-0">
                <Link href="/shop">View All Products →</Link>
              </Button>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal direction="left">
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop"
                  alt="Featured Collection"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {featured.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.05}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
