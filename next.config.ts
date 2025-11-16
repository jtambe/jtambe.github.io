import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  images: {
      domains: [
          "www.svgrepo.com", // Python logo
          "upload.wikimedia.org", // PostgreSQL logo
          "dspy.ai", // DSPy logo
          "1000logos.net", // Databricks
          "en.wikipedia.org", // Sklearn logo
      ],
  },
};

export default nextConfig;
