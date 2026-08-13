"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";

const categories = [
  "All",
  "Outerwear",
  "Essentials",
  "Shirts",
  "Pants",
  "Accessories",
  "Streetwear",
];
const sizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "28",
  "30",
  "32",
  "34",
  "36",
  "One Size",
];
const colors = [
  "Black",
  "White",
  "Grey",
  "Navy",
  "Charcoal",
  "Camel",
  "Ivory",
  "Olive",
  "Burgundy",
  "Indigo",
  "Tan",
  "Sand",
  "Sky Blue",
  "Off-White",
  "Oat",
];
const maxPrice = 400;

export function ShopClient() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [sort, setSort] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((s) => selectedSizes.includes(s.name)),
      );
    }

    if (selectedColors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) => selectedColors.includes(c.name)),
      );
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        result.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        break;
      default:
        result.sort((a, b) => {
          const aScore = (a.featured ? 2 : 0) + (a.bestSeller ? 1 : 0);
          const bScore = (b.featured ? 2 : 0) + (b.bestSeller ? 1 : 0);
          return bScore - aScore;
        });
    }

    return result;
  }, [
    selectedCategories,
    selectedSizes,
    selectedColors,
    priceRange,
    sort,
    searchQuery,
  ]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, maxPrice]);
    setSearchQuery("");
  };

  return (
    <div className="section-padding">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-heading text-3xl md:text-4xl font-medium">
              Shop
            </h1>
            <p className="text-muted-foreground mt-2">
              {filteredProducts.length} products
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 border border-border px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring flex-1 min-w-32"
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 border border-border px-4 py-2 text-sm hover:bg-muted transition-colors md:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-10 border border-border px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Filters Sidebar */}
          <aside
            className={cn(
              "lg:col-span-3",
              showFilters ? "block" : "hidden lg:block",
            )}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => toggleCategory(cat)}
                      className={cn(
                        "block text-sm transition-colors",
                        selectedCategories.includes(cat)
                          ? "text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Price
                </h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min={0}
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Size
                </h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={cn(
                        "border px-3 py-1 text-sm transition-colors",
                        selectedSizes.includes(size)
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary",
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Color
                </h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={cn(
                        "border px-3 py-1 text-sm transition-colors",
                        selectedColors.includes(color)
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary",
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={clearAll}
                className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground"
              >
                Clear all filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No products found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
