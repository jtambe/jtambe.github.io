import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
      unoptimized: true,
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'www.svgrepo.com',
          },
          {
              protocol: 'https',
              hostname: 'upload.wikimedia.org',
          },
          {
              protocol: 'https',
              hostname: 'dspy.ai',
          },
          {
              protocol: 'https',
              hostname: '1000logos.net',
          },
          {
              protocol: 'https',
              hostname: 'en.wikipedia.org',
          },
          {
              protocol: 'https',
              hostname: 'raw.githubusercontent.com',
          },
          {
              protocol: 'https',
              hostname: 'cdn.jsdelivr.net',
          },
          {
              protocol: 'https',
              hostname: 'www.congress.gov',
          },
          {
              protocol: 'https',
              hostname: 'www.google.com',
          },
          {
              protocol: 'https',
              hostname: 'flagcdn.com',
          },
      ],
  },
};

export default nextConfig;
