import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Only the canonical root page is listed. URL fragments such as #experience are
 * not independently indexable, so they are deliberately excluded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
