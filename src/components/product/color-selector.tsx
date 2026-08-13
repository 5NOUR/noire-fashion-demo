"use client";

import { cn } from "@/lib/utils";
import type { ProductColor } from "@/types";

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColor: string;
  onSelect: (color: string) => void;
}

export function ColorSelector({
  colors,
  selectedColor,
  onSelect,
}: ColorSelectorProps) {
  return (
    <div>
      <div className="mb-2">
        <span className="text-sm font-medium">
          Color: {selectedColor || "Select"}
        </span>
      </div>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => onSelect(color.name)}
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
  );
}
