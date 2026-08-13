"use client";

import Link from "next/link";
import { useWishlistStore } from "@/store/wishlist-store";
import { useCartStore } from "@/store/cart-store";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function WishlistPageClient() {
  const { productIds, clearWishlist } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  const wishlistProducts = productIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const handleAddAllToCart = () => {
    wishlistProducts.forEach((product) => {
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
      }
    });
    openCart();
  };

  if (wishlistProducts.length === 0) {
    return (
      <div className="section-padding">
        <div className="container-narrow text-center">
          <SectionHeading title="Your wishlist is empty" align="center" />
          <p className="text-muted-foreground mt-4">
            Save your favorite pieces for later.
          </p>
          <Button asChild className="mt-8">
            <Link href="/shop">Discover Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <SectionHeading
            title={`Wishlist (${wishlistProducts.length})`}
            align="left"
          />
          <div className="flex gap-4">
            <Button onClick={handleAddAllToCart}>Add All to Cart</Button>
            <Button variant="outline" onClick={clearWishlist}>
              Clear Wishlist
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
