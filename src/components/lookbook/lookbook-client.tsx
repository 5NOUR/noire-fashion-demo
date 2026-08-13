"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import type { LookbookItem } from "@/types";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

interface LookbookClientProps {
  items: LookbookItem[];
}

export function LookbookClient({ items }: LookbookClientProps) {
  const [activeItem, setActiveItem] = useState<LookbookItem | null>(null);

  return (
    <div className="section-padding">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            title="Lookbook"
            subtitle="A visual exploration of form, fabric, and shadow."
            align="left"
          />
        </Reveal>

        <div className="mt-12 space-y-16">
          {items.map((item, index) => (
            <div key={item.id} className="relative">
              <Reveal direction={index % 2 === 0 ? "left" : "right"}>
                <div className="relative aspect-16/10 md:aspect-21/9 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                    <h3 className="text-white text-2xl md:text-4xl font-heading tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-white/80 mt-1">{item.description}</p>
                  </div>
                </div>
              </Reveal>

              {/* Hotspots */}
              {item.position && (
                <button
                  className="absolute p-2 bg-white/90 rounded-full shadow-lg hover:scale-110 transition-transform"
                  style={{
                    left: `${item.position.x}%`,
                    top: `${item.position.y}%`,
                  }}
                  onClick={() => setActiveItem(item)}
                  aria-label={`View products for ${item.title}`}
                >
                  <Plus className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Modal showing products from selected look */}
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-120 bg-black/60 flex items-end md:items-center justify-center"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="bg-background w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-heading text-2xl font-medium">
                  Shop the Look
                </h3>
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-2 hover:bg-muted"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {activeItem.productIds && activeItem.productIds.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {activeItem.productIds.map((productId) => {
                    const product = products.find((p) => p.id === productId);
                    return product ? (
                      <ProductCard key={product.id} product={product} />
                    ) : null;
                  })}
                </div>
              ) : (
                <p className="text-muted-foreground">No products linked.</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
