import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { SearchOverlay } from "@/components/search/search-overlay";
import { QuickViewModal } from "@/components/product/quick-view-modal";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NOIRÉ — Luxury Contemporary Fashion",
    template: "%s | NOIRÉ",
  },
  description:
    "Discover NOIRÉ — a luxury contemporary fashion brand. Explore our new collection of tailored pieces, outerwear, and accessories.",
  openGraph: {
    title: "NOIRÉ — Luxury Contemporary Fashion",
    description:
      "Discover NOIRÉ — a luxury contemporary fashion brand. Explore our new collection of tailored pieces, outerwear, and accessories.",
    url: "https://noire-demo.vercel.app",
    siteName: "NOIRÉ",
    images: [
      {
        url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "NOIRÉ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOIRÉ — Luxury Contemporary Fashion",
    description: "Discover NOIRÉ — a luxury contemporary fashion brand.",
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
        <SearchOverlay />
        <QuickViewModal />
      </body>
    </html>
  );
}
