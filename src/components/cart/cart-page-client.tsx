"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { CartItem } from "@/components/cart/cart-item";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";

export function CartPageClient() {
  const { items, clearCart } = useCartStore();

  const cartItems = items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return { ...item, product };
    })
    .filter((item) => item.product);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.quantity,
    0,
  );
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="section-padding">
        <div className="container-narrow text-center">
          <SectionHeading title="Your bag is empty" align="center" />
          <p className="text-muted-foreground mt-4">
            Discover our latest collection and find something you love.
          </p>
          <Button asChild className="mt-8">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-wide">
        <SectionHeading title="Your Bag" align="left" />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 divide-y divide-border">
            {cartItems.map((item) => (
              <CartItem
                key={`${item.productId}-${item.size}-${item.color}`}
                productId={item.productId}
                quantity={item.quantity}
                size={item.size}
                color={item.color}
              />
            ))}
            <div className="pt-4">
              <button
                onClick={clearCart}
                className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
              >
                Clear all items
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="border border-border p-6 space-y-4">
              <h2 className="text-heading text-xl font-medium">
                Order Summary
              </h2>
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              <div className="border-t border-border pt-4 flex justify-between font-medium">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <Button className="w-full mt-4" size="lg">
                Proceed to Checkout
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Taxes included. Demo checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
