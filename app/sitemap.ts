import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/cast-stone-terrazzo-products",
    "/services/flooring-systems",
    "/portfolio",
    "/testimonials",
    "/faq",
    "/care-maintenance",
    "/quote",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}
