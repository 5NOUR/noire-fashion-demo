"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface CartItemProps {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}

export function CartItem({ productId, quantity, size, color }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const product = products.find((p) => p.id === productId);

  if (!product) return null;

  const image = product.images[0];

  return (
    <div className="flex gap-4 py-4">
      <div className="relative w-20 h-24 bg-secondary shrink-0">
        {image && (
          <Image
            src={image}
            alt={product.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium truncate">{product.name}</h3>
        <p className="text-xs text-muted-foreground">
          {size} / {color}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center border border-border">
            <button
              onClick={() =>
                updateQuantity(productId, size, color, quantity - 1)
              }
              className="p-1.5 hover:bg-muted transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="px-3 text-sm min-w-8 text-center">{quantity}</span>
            <button
              onClick={() =>
                updateQuantity(productId, size, color, quantity + 1)
              }
              className="p-1.5 hover:bg-muted transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <p className="text-sm font-medium">
            {formatPrice(product.price * quantity)}
          </p>
        </div>
      </div>
      <button
        onClick={() => removeItem(productId, size, color)}
        className="self-start p-1 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Remove item"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
