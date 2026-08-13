import type { Metadata } from "next";
import { collections } from "@/data/collections";
import { CollectionCard } from "@/components/collections/collection-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Collections — NOIRÉ",
  description:
    "Explore all NOIRÉ collections. From New Arrivals to Essentials, each collection has its own identity.",
};

export default function CollectionsPage() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            title="Collections"
            subtitle="Each collection tells a different story. Discover the pieces that define the NOIRÉ identity."
            align="left"
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <Reveal
              key={collection.id}
              delay={index * 0.05}
              direction={index % 2 === 0 ? "up" : "right"}
            >
              <CollectionCard collection={collection} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
