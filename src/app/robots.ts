import type { MetadataRoute } from "next";

// Trial/preview deployment — block all crawlers until the site is ready
// for a real public launch.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
