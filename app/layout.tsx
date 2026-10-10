import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://mayur-portfolio-2ea4a.web.app";
const description =
  "Mayur Wagh — MERN Full Stack Developer with 3+ years building production web apps with React, Next.js, Node.js, Express and MongoDB. Projects, experience and resume.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mayur Wagh — MERN Full Stack Developer",
  description,
  authors: [{ name: "Mayur Wagh", url: siteUrl }],
  keywords: [
    "Mayur Wagh",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Nashik",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mayur Wagh — MERN Full Stack Developer",
    description,
    siteName: "Mayur Wagh",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mayur Wagh — MERN Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayur Wagh — MERN Full Stack Developer",
    description,
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0d0f10",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mayur Wagh",
  jobTitle: "MERN Full Stack Developer",
  address: { "@type": "PostalAddress", addressLocality: "Nashik", addressRegion: "Maharashtra", addressCountry: "IN" },
  email: "mailto:mswagh98@gmail.com",
  url: siteUrl,
  sameAs: ["https://www.linkedin.com/in/mayur--wagh/", "https://github.com/Mayurwagh98"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
