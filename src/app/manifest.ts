import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Jayesh Tambe | Senior Software Engineer",
        short_name: "Jayesh Tambe",
        description:
            "Portfolio of Jayesh Tambe — Senior Software Engineer specializing in cloud-native microservices, AWS, and Kubernetes.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#1d4ed8",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
