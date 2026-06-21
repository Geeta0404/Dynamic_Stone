import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const isLive = process.env.NEXT_PUBLIC_SITE_LIVE === "true";

export default function robots(): MetadataRoute.Robots {
  if (!isLive) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/wp-admin", "/wp-login.php"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
