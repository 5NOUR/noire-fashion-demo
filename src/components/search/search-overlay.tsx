"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Search } from "lucide-react";
import { useUIStore } from "@/store/ui-store";
import { useState } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useUIStore();
  const router = useRouter();

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <SearchOverlayContent onClose={closeSearch} router={router} />
      )}
    </AnimatePresence>
  );
}

function SearchOverlayContent({
  onClose,
  router,
}: {
  onClose: () => void;
  router: ReturnType<typeof useRouter>;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof products>([]);

  const handleInputChange = (value: string) => {
    setQuery(value);
    if (value.trim().length > 1) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(value.toLowerCase()) ||
          product.category.toLowerCase().includes(value.toLowerCase()),
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      onClose();
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-90 bg-background"
    >
      <div className="container-wide h-full flex flex-col">
        <div className="flex items-center justify-between h-16 md:h-20">
          <span className="text-heading text-xl font-medium">Search</span>
          <button onClick={onClose} className="p-2" aria-label="Close search">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-10 max-w-3xl mx-auto w-full">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full h-14 pl-12 pr-4 text-xl bg-transparent border-b-2 border-foreground focus:outline-none placeholder:text-muted-foreground"
              autoFocus
            />
          </div>

          {query.trim().length > 1 && (
            <div className="mt-8">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Results ({results.length})
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={onClose}
                    className="group"
                  >
                    <div className="relative aspect-3/4 overflow-hidden bg-secondary">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatPrice(product.price)}
                    </p>
                  </Link>
                ))}
              </div>
              <Link
                href={`/search?q=${encodeURIComponent(query)}`}
                onClick={onClose}
                className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-muted-foreground"
              >
                View all results
              </Link>
            </div>
          )}

          {query.trim().length <= 1 && (
            <div className="mt-8">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Trending Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Coat", "Hoodie", "Silk", "Denim", "Blazer"].map((term) => (
                  <button
                    key={term}
                    onClick={() => handleInputChange(term)}
                    className="border border-border px-4 py-2 text-sm hover:bg-muted transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
