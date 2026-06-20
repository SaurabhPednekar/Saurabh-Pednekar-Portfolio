import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/lib/data";

const siteUrl = "https://saurabh-pednekar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Master Data Management Developer`,
    template: `%s · ${profile.name}`,
  },
  description:
    "Saurabh Pednekar — Master Data Management Developer specializing in STIBO STEP, Informatica MDM, and Reltio. Building scalable enterprise data solutions, data governance, and integration.",
  keywords: [
    "Master Data Management",
    "MDM Developer",
    "STIBO STEP",
    "Informatica MDM",
    "Reltio",
    "Data Governance",
    "Data Quality",
    "Enterprise Data",
    "Saurabh Pednekar",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — Master Data Management Developer`,
    description:
      "Building scalable enterprise data solutions using STIBO STEP, Informatica MDM, and Reltio.",
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — MDM Developer`,
    description:
      "Building scalable enterprise data solutions using STIBO STEP, Informatica MDM, and Reltio.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#05070e",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Master Data Management Developer",
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
  knowsAbout: [
    "STIBO STEP",
    "Informatica MDM",
    "Reltio",
    "Data Governance",
    "Data Quality",
    "Enterprise Integration",
  ],
  sameAs: [profile.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
