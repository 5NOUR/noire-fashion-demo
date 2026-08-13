import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/types";

interface CollectionCardProps {
  collection: Collection;
  index: number;
}

export function CollectionCard({ collection, index }: CollectionCardProps) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group block relative overflow-hidden"
    >
      <div
        className={`relative w-full ${
          index % 2 === 0 ? "aspect-3/4" : "aspect-4/5"
        } overflow-hidden bg-secondary`}
      >
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-white text-2xl md:text-3xl font-heading tracking-wide">
            {collection.name}
          </h3>
          <p className="text-white/80 text-sm mt-1 max-w-xs">
            {collection.description}
          </p>
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider">
        {collection.products.length} items
      </div>
    </Link>
  );
}
