"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Product } from "@/types";
import { useWishlistStore } from "@/store/wishlist-store";
import { useCartStore } from "@/store/cart-store";
import { useUIStore } from "@/store/ui-store";
import { cn, formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { productIds, toggleItem } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const openQuickView = useUIStore((state) => state.openQuickView);

  const isWishlisted = productIds.includes(product.id);

  const handleAddToCart = () => {
    const defaultSize =
      product.sizes.find((s) => s.available)?.name || product.sizes[0]?.name;
    const defaultColor = product.colors[0]?.name;
    if (defaultSize && defaultColor) {
      addItem({
        productId: product.id,
        quantity: 1,
        size: defaultSize,
        color: defaultColor,
      });
      openCart();
    }
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/products/${product.slug}`}
        className="block relative overflow-hidden"
      >
        <div className="relative aspect-3/4 overflow-hidden bg-secondary">
          <motion.div
            className="h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={
                isHovered && product.images.length > 1
                  ? product.images[1]
                  : product.images[0]
              }
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </Link>

      {/* Wishlist button */}
      <button
        onClick={() => toggleItem(product.id)}
        className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full transition-all hover:bg-background"
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={cn(
            "h-4 w-4 transition-colors",
            isWishlisted ? "fill-primary text-primary" : "text-foreground",
          )}
        />
      </button>

      {/* Quick actions overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 focus-within:opacity-100 focus-within:translate-y-0">
        <button
          onClick={() => openQuickView(product.id)}
          className="px-4 py-2 bg-background/80 backdrop-blur-sm text-xs uppercase tracking-wider border border-border hover:bg-background"
        >
          <Eye className="h-4 w-4 inline mr-1" />
          Quick View
        </button>
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 bg-primary text-primary-foreground text-xs uppercase tracking-wider hover:bg-primary/90"
        >
          Add to Cart
        </button>
      </div>

      {/* Product info */}
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {product.name}
          </Link>
          <p className="text-sm text-muted-foreground">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>

      {/* Badges */}
      {product.newArrival && (
        <span className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-[10px] uppercase tracking-wider px-2 py-1">
          New
        </span>
      )}
      {product.bestSeller && (
        <span className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-[10px] uppercase tracking-wider px-2 py-1">
          Best Seller
        </span>
      )}
    </div>
  );
}
