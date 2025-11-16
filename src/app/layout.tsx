import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayesh Tambe - Senior Software Engineer Portfolio",
  description: "Explore the portfolio of Jayesh Tambe, a Senior Software Engineer with expertise in cloud-native microservices, AI/ML, and scalable systems.",
  keywords: [
    "Jayesh Tambe",
    "Software Engineer",
    "Python",
    "Portfolio",
    "Cloud-native",
    "Microservices",
    "AI/ML",
    "Kubernetes",
    "AWS",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Jayesh Tambe - Senior Software Engineer Portfolio",
    description: "Explore the portfolio of Jayesh Tambe, a Senior Software Engineer with expertise in cloud-native microservices, AI/ML, and scalable systems.",
    url: "https://jtambe.github.io", // Replace with your actual site URL
    siteName: "Jayesh Tambe Portfolio",
    // images: [
    //   {
    //     url: "https://your-portfolio-site.com/og-image.jpg", // Replace with your Open Graph image URL
    //     width: 1200,
    //     height: 630,
    //     alt: "Jayesh Tambe Portfolio",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayesh Tambe - Senior Software Engineer Portfolio",
    description: "Explore the portfolio of Jayesh Tambe, a Senior Software Engineer with expertise in cloud-native microservices, AI/ML, and scalable systems.",
    // images: ["https://your-portfolio-site.com/twitter-image.jpg"], // Replace with your Twitter card image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
