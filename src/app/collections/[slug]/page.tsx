import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { collections } from "@/data/collections";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import Link from "next/link";
import Image from "next/image";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) return { title: "Collection Not Found" };
  return {
    title: `${collection.name} — NOIRÉ`,
    description: collection.description,
  };
}

export async function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    notFound();
  }

  const collectionProducts = products.filter((p) =>
    collection.products.includes(p.id),
  );

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-100 overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container-wide relative z-10 flex h-full flex-col justify-end pb-12">
          <Reveal>
            <Link
              href="/collections"
              className="text-white/80 text-sm hover:text-white transition-colors"
            >
              ← All Collections
            </Link>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading mt-2">
              {collection.name}
            </h1>
            <p className="text-white/80 mt-2 max-w-xl">
              {collection.description}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Products */}
      <div className="section-padding">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              title={`${collectionProducts.length} Pieces`}
              subtitle="Explore the collection."
              align="left"
            />
          </Reveal>
          {collectionProducts.length === 0 ? (
            <p className="text-muted-foreground mt-6">
              No products in this collection yet.
            </p>
          ) : (
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
              {collectionProducts.map((product, index) => (
                <Reveal key={product.id} delay={index * 0.05}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
