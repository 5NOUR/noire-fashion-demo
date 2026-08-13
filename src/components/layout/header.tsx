"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useUIStore } from "@/store/ui-store";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { NavLinks } from "@/components/navigation/nav-links";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { brandConfig } from "@/config/brand";
import { cn } from "@/lib/utils";

export function Header() {
  const { openSearch, openMobileMenu, closeMobileMenu, isMobileMenuOpen } =
    useUIStore();
  const cartItems = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);
  const wishlistCount = useWishlistStore((state) => state.productIds.length);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={openMobileMenu}
          className="md:hidden p-2 -ml-2"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="text-heading text-lg md:text-2xl font-medium tracking-widest"
        >
          {brandConfig.logo.text}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:block">
          <NavLinks />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 md:gap-2">
          <button
            onClick={openSearch}
            className="p-2 hover:bg-muted transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={openCart}
            className="p-2 hover:bg-muted transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <Link
            href="/wishlist"
            className="p-2 hover:bg-muted transition-colors relative"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile menu rendered here for animation */}
      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu onClose={closeMobileMenu} />}
      </AnimatePresence>
    </header>
  );
}
