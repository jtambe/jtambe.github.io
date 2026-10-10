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
  title: "Jay Tambe - Associate Vice President, Software Engineering | Cloud & AI/ML Leader",
  description: "Explore the portfolio of Jay Tambe, Associate Vice President of Software Engineering with 15 years of expertise in cloud architecture, team leadership, AI/ML innovation, and scalable systems.",
  keywords: [
    "Jay Tambe",
    "Jayesh Tambe",
    "Associate Vice President",
    "AVP Software Engineering",
    "Engineering Leadership",
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
    "Technical Leadership",
    "Cloud Architecture",
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
    title: "Jay Tambe - Associate Vice President, Software Engineering",
    description: "Associate Vice President of Software Engineering with 15 years of leadership experience in cloud architecture, team development, AI/ML innovation, and scalable systems.",
    url: "https://jtambe.github.io",
    siteName: "Jayesh Tambe Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayesh Tambe - AVP Software Engineering",
    description: "Associate Vice President of Software Engineering with 15 years of leadership experience in cloud-native architecture, AI/ML solutions, and scalable systems.",
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
