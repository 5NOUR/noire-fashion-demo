"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { brandConfig } from "@/config/brand";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState<boolean>(
    brandConfig.announcement.enabled,
  );

  if (!isVisible) return null;

  return (
    <div className="relative bg-primary text-primary-foreground text-center text-xs py-2 px-4">
      <p className="tracking-wide">{brandConfig.announcement.text}</p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:opacity-70"
        aria-label="Close announcement"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}
