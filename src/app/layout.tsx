import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header";
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
    "Senior Software Engineer",
    "Full Stack Developer",
    "Python",
    "C#",
    ".NET Core",
    "Portfolio",
    "Cloud-native",
    "Microservices",
    "AI/ML",
    "Kubernetes",
    "AWS",
    "Azure",
    "React",
    "Next.js",
  ],
  alternates: {
    canonical: "https://jtambe.github.io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Jayesh Tambe - Senior Software Engineer Portfolio",
    description: "Senior Software Engineer with 15 years of expertise in cloud-native microservices, AI/ML solutions, and scalable systems.",
    url: "https://jtambe.github.io",
    siteName: "Jayesh Tambe Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayesh Tambe - Senior Software Engineer Portfolio",
    description: "Senior Software Engineer with 15 years of expertise in cloud-native microservices, AI/ML solutions, and scalable systems.",
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
        <Header />
        {children}
      </body>
    </html>
  );
}
