"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { CartItem } from "@/components/cart/cart-item";

export function CartDrawer() {
  const { items, isOpen, closeCart } = useCartStore();

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 bg-black/40"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed right-0 top-0 z-80 h-full w-full max-w-md bg-white border-l border-gray-200 flex flex-col" // solid white background
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-heading text-xl font-medium">
                Your Bag ({cartItems.length})
              </h2>
              <button
                onClick={closeCart}
                className="p-2"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6 text-center">
                <p className="text-muted-foreground">Your bag is empty.</p>
                <button
                  onClick={closeCart}
                  className="text-sm underline underline-offset-4 hover:text-foreground"
                >
                  Continue shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-0 divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <CartItem
                      key={`${item.productId}-${item.size}-${item.color}`}
                      productId={item.productId}
                      quantity={item.quantity}
                      size={item.size}
                      color={item.color}
                    />
                  ))}
                </div>

                <div className="border-t border-gray-200 p-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Shipping calculated at checkout.
                  </p>
                  <button className="w-full bg-black text-white py-3 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
