import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://jtambe.github.io";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/private"],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}
