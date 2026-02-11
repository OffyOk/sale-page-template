import type { MetadataRoute } from "next"

import saleConfig from "@/config/sale.config"

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    return []
  }

  const baseUrl = siteUrl.replace(/\/$/, "")
  const saleSlug = toSlug(saleConfig.productName)

  return [
    {
      url: `${baseUrl}/sale/${saleSlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]
}
