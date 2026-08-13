"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

export function QuantitySelector({
  quantity,
  onChange,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center border border-border w-fit">
      <button
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="p-3 hover:bg-muted transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="px-6 text-sm font-medium">{quantity}</span>
      <button
        onClick={() => onChange(quantity + 1)}
        className="p-3 hover:bg-muted transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
