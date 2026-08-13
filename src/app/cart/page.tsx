import type { Metadata } from "next";
import { CartPageClient } from "@/components/cart/cart-page-client";

export const metadata: Metadata = {
  title: "Your Bag — NOIRÉ",
  description: "Review your selected items and proceed to checkout.",
};

export default function CartPage() {
  return <CartPageClient />;
}
