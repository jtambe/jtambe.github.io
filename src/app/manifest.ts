import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Jay Tambe - AVP Software Engineering | Cloud & AI/ML Leader",
        short_name: "Jay Tambe",
        description:
            "Associate Vice President of Software Engineering with 15 years of expertise in cloud architecture, team leadership, AI/ML innovation, and scalable systems.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait-primary",
        background_color: "#ffffff",
        theme_color: "#1d4ed8",
        categories: ["technology", "business"],
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
                purpose: "any",
            },
        ],
    };
}
