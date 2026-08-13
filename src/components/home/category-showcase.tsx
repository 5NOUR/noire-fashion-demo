import Link from "next/link";
import Image from "next/image";
import { collections } from "@/data/collections";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function CategoryShowcase() {
  const displayedCollections = collections.slice(0, 4);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            title="Shop by Category"
            subtitle="Explore the collections."
            align="left"
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedCollections.map((collection, index) => (
            <Reveal key={collection.id} delay={index * 0.05}>
              <Link
                href={`/collections/${collection.slug}`}
                className="group block relative overflow-hidden"
              >
                <div className="relative aspect-3/4 overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-heading tracking-wide">
                    {collection.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {collection.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
