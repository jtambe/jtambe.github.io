import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Jayesh Tambe - Senior Software Engineer Portfolio",
        short_name: "Jayesh Tambe",
        description:
            "Senior Software Engineer with 15 years of expertise in cloud-native microservices, AI/ML solutions, and scalable systems.",
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
