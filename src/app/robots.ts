import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://noire-fashion-demo.vercel.app/sitemap.xml", // استبدلها بالدومين النهائي
  };
}
