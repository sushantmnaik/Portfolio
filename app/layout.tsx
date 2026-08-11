import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Script from "next/script";

const siteUrl = "https://sushantnaik.vercel.app";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
 metadataBase: new URL(siteUrl),

  title: {
    default: "Sushant Naik | Developer & Creator",
    template: "%s | Sushant Naik",
  },

  description:
    "Sushant Naik is a developer and creator specializing in web development, JavaScript, React, Next.js, Python, AI-powered applications, and creative digital projects.",

  keywords: [
    "Sushant Naik",
    "Sushant Naik developer",
    "Sushant Naik portfolio",
    "web developer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "TypeScript developer",
    "Python developer",
    "AI developer",
    "web development",
    "software developer",
  ],

  authors: [
    {
      name: "Sushant Naik",
      url: siteUrl,
    },
  ],

  creator: "Sushant Naik",
  publisher: "Sushant Naik",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Sushant Naik",
    title: "Sushant Naik | Developer & Creator",
    description:
      "Portfolio of Sushant Naik — developer, creator, and builder of web applications, AI projects, and digital experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sushant Naik — Developer & Creator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sushant Naik | Developer & Creator",
    description:
      "Developer, creator and builder of web applications, AI projects and digital experiences.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
