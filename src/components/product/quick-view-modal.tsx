"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useUIStore } from "@/store/ui-store";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function QuickViewModal() {
  const { quickViewProductId, closeQuickView } = useUIStore();
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const { productIds, toggleItem } = useWishlistStore();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === quickViewProductId);

  const isWishlisted = product ? productIds.includes(product.id) : false;

  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      addItem({
        productId: product.id,
        quantity,
        size: selectedSize,
        color: selectedColor,
      });
      closeQuickView();
      openCart();
    }
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/50"
            onClick={closeQuickView}
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 z-110 mx-auto w-full max-w-2xl bg-background border-t border-border p-6 md:p-8 max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={closeQuickView}
              className="absolute top-4 right-4 p-2 hover:bg-muted"
              aria-label="Close quick view"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* صورة المنتج */}
              <div className="relative aspect-3/4 overflow-hidden bg-secondary">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* تفاصيل المنتج */}
              <div className="flex flex-col">
                <h2 className="text-heading text-2xl font-medium">
                  {product.name}
                </h2>
                <p className="mt-2 text-lg">{formatPrice(product.price)}</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {product.description}
                </p>

                {/* اختيار اللون */}
                <div className="mt-6">
                  <span className="text-sm font-medium">Color: </span>
                  <span className="text-sm text-muted-foreground">
                    {selectedColor || "Select a color"}
                  </span>
                  <div className="mt-2 flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={cn(
                          "w-8 h-8 rounded-full border-2 transition-all",
                          selectedColor === color.name
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-border hover:border-muted-foreground",
                        )}
                        style={{ backgroundColor: color.hex }}
                        aria-label={`Select color ${color.name}`}
                      />
                    ))}
                  </div>
                </div>

                {/* اختيار المقاس */}
                <div className="mt-6">
                  <span className="text-sm font-medium">Size: </span>
                  <span className="text-sm text-muted-foreground">
                    {selectedSize || "Select a size"}
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size.name}
                        onClick={() => setSelectedSize(size.name)}
                        disabled={!size.available}
                        className={cn(
                          "border px-4 py-2 text-sm transition-colors",
                          selectedSize === size.name
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary",
                          !size.available && "opacity-50 cursor-not-allowed",
                        )}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* الكمية والأزرار */}
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center border border-border">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-muted"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 text-sm">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-muted"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <Button
                    onClick={handleAddToCart}
                    disabled={!selectedSize || !selectedColor}
                    className="flex-1"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => toggleItem(product.id)}
                    aria-label="Toggle wishlist"
                  >
                    <Heart
                      className={cn(
                        "h-4 w-4",
                        isWishlisted && "fill-primary text-primary",
                      )}
                    />
                  </Button>
                </div>

                <div className="mt-6 text-xs text-muted-foreground space-y-1">
                  <p>{product.shippingInfo}</p>
                  <p>{product.returnPolicy}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
