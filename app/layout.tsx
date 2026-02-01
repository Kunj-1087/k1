/**
 * File: app/layout.tsx
 * Function: Root Layout
 * Purpose: Defines the global structure of the application, including fonts, metadata, and global providers.
 * Linked to: 
 * - app/styles/globals.css (Global styles)
 * - app/providers.tsx (Theme provider)
 * - app/components/global/Navbar.tsx (Navigation bar)
 * - app/components/global/Footer.tsx (Footer)
 */

import "@/app/styles/globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { incognito } from "./assets/font/font";
import { gitlabmono } from "./assets/font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Kunj Nakrani | Data Science & Full-Stack Developer",
  description:
    "Kunj Nakrani is a Tech Learner, Data Science enthusiast and Full-Stack Developer building the future.",
  url: "https://kunjnakrani.vercel.app", // Placeholder URL
  ogImage:
    "https://github.com/Kunj-1087.png", // Keeping placeholder but pointing to user controlled resource ideally
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "kunjnakrani.com",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    "google-site-verification": "IzcWMgn5Qjf-LCtA337KTGjivsf9bmod_1pZ-jxYQh8",
  },
  icons: {
    icon: "/kn-logo.png",
    shortcut: "/kn-logo.png",
    apple: "/kn-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
    </html>
  );
}
