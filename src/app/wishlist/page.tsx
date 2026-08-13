import type { Metadata } from "next";
import { WishlistPageClient } from "@/components/wishlist/wishlist-page-client";
export const metadata: Metadata = {
  title: "Wishlist — NOIRÉ",
  description: "Your saved items. Keep track of pieces you love.",
};

export default function WishlistPage() {
  return <WishlistPageClient />;
}
