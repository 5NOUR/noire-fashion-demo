import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { collections } from "@/data/collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://noire-fashion-demo.vercel.app/"; // استبدلها بالدومين النهائي

  const staticPages = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/shop`, lastModified: new Date() },
    { url: `${baseUrl}/collections`, lastModified: new Date() },
    { url: `${baseUrl}/lookbook`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/cart`, lastModified: new Date() },
    { url: `${baseUrl}/wishlist`, lastModified: new Date() },
  ];

  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(product.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const collectionPages = collections.map((collection) => ({
    url: `${baseUrl}/collections/${collection.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...collectionPages];
}
