"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import type { Product } from "@/types";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { Button } from "@/components/ui/button";
import { SizeSelector } from "@/components/product/size-selector";
import { ColorSelector } from "@/components/product/color-selector";
import { QuantitySelector } from "@/components/product/quantity-selector";
import { SizeGuide } from "@/components/product/size-guide";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const { productIds, toggleItem } = useWishlistStore();

  const isWishlisted = productIds.includes(product.id);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    addItem({
      productId: product.id,
      quantity,
      size: selectedSize,
      color: selectedColor,
    });
    openCart();
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) return;
    addItem({
      productId: product.id,
      quantity,
      size: selectedSize,
      color: selectedColor,
    });
    // Since there is no real checkout, we open cart as a placeholder
    openCart();
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-heading text-3xl md:text-4xl font-medium">
          {product.name}
        </h1>
        <p className="mt-2 text-xl">{formatPrice(product.price)}</p>
      </div>

      <p className="text-muted-foreground">{product.description}</p>

      <ColorSelector
        colors={product.colors}
        selectedColor={selectedColor}
        onSelect={setSelectedColor}
      />

      <SizeSelector
        sizes={product.sizes}
        selectedSize={selectedSize}
        onSelect={setSelectedSize}
        onOpenGuide={() => setIsSizeGuideOpen(true)}
      />

      <QuantitySelector quantity={quantity} onChange={setQuantity} />

      <div className="flex gap-4">
        <Button
          onClick={handleAddToCart}
          disabled={!selectedSize || !selectedColor}
          className="flex-1"
          size="lg"
        >
          Add to Cart
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={handleBuyNow}
          disabled={!selectedSize || !selectedColor}
        >
          Buy Now
        </Button>
      </div>

      <button
        onClick={() => toggleItem(product.id)}
        className={cn(
          "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
          isWishlisted && "text-primary",
        )}
      >
        <Heart className={cn("h-5 w-5", isWishlisted && "fill-primary")} />
        {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>

      {/* تفاصيل إضافية */}
      <div className="border-t border-border pt-6 space-y-4">
        {product.details && product.details.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
              Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
            Shipping
          </h3>
          <p className="text-sm text-muted-foreground">
            {product.shippingInfo}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
            Returns
          </h3>
          <p className="text-sm text-muted-foreground">
            {product.returnPolicy}
          </p>
        </div>
      </div>

      <SizeGuide
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={product.category}
      />
    </div>
  );
}
