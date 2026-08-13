import type { Metadata } from "next";
import { ShopClient } from "@/components/shop/shop-client";

export const metadata: Metadata = {
  title: "Shop — NOIRÉ",
  description:
    "Browse the NOIRÉ collection. Filter by category, size, color, and price.",
};

export default function ShopPage() {
  return <ShopClient />;
}
