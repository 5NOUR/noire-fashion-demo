"use client";

import { useEffect } from "react";

const STORAGE_KEY = "noire-recently-viewed";

export function RecentlyViewedTracker({ productId }: { productId: string }) {
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let ids: string[] = [];
    if (stored) {
      try {
        ids = JSON.parse(stored) as string[];
      } catch {
        ids = [];
      }
    }
    // إزالة المنتج إذا كان موجودًا ثم إضافته في المقدمة
    ids = ids.filter((id) => id !== productId);
    ids.unshift(productId);
    // الاحتفاظ بآخر 8 منتجات فقط
    ids = ids.slice(0, 8);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [productId]);

  return null;
}
