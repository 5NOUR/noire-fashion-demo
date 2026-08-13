"use client";

import { cn } from "@/lib/utils";
import type { ProductSize } from "@/types";

interface SizeSelectorProps {
  sizes: ProductSize[];
  selectedSize: string;
  onSelect: (size: string) => void;
  onOpenGuide: () => void;
}

export function SizeSelector({
  sizes,
  selectedSize,
  onSelect,
  onOpenGuide,
}: SizeSelectorProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">
          Size: {selectedSize || "Select"}
        </span>
        <button
          onClick={onOpenGuide}
          className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Size Guide
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size.name}
            onClick={() => onSelect(size.name)}
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
  );
}
