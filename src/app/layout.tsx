import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GITHUB_URL, LINKEDIN_URL, siteConfig, summary } from "@/config/site";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const pageTitle = `${siteConfig.name} | Senior Software Engineer | React, Next.js, Node.js, AWS`;

export const viewport: Viewport = {
  themeColor: "#FFFBF8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Ravi Kumar Nersu",
    "Ravi Nersu",
    "Ravi Kumar Nersu portfolio",
    "Senior Software Engineer Hyderabad",
    "React developer Hyderabad",
    "Next.js engineer Hyderabad",
    "Frontend focused full stack engineer",
    "Node.js BFF architecture",
    "TypeScript engineer India",
    "AWS frontend engineer",
    "Web performance engineer",
    "Web accessibility engineer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: pageTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Senior Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/favicon.svg", color: "#C2410C" }],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  referrer: "origin-when-cross-origin",
};

// Person structured data. No phone number and no unverified credentials.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "Senior Software Engineer",
  description: summary,
  image: new URL("/profile-photo.jpg", siteConfig.url).toString(),
  email: `mailto:${siteConfig.email}`,
  sameAs: [GITHUB_URL, LINKEDIN_URL],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "Express.js",
    "BFF Architecture",
    "Microfrontends",
    "Monorepo",
    "REST APIs",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "DynamoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "Accessibility",
    "Web Performance",
    "Core Web Vitals",
    "Playwright",
    "Cypress",
    "Jest",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "KL University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-[#FFFBF8] text-[#1A1A2E] selection:bg-orange-500/20`}
        suppressHydrationWarning
      >
        {/* Gradient background overlays */}
        <div
          className="fixed inset-0 -z-10 bg-gradient-to-br from-[#FFFBF8] via-[#FFF8F5] to-[#FFF2EE]"
          aria-hidden="true"
        />

        <AnalyticsProvider>{children}</AnalyticsProvider>

        <Toaster
          theme="light"
          position="bottom-right"
          richColors
          closeButton
          toastOptions={{
            style: {
              background: "rgba(255, 255, 255, 0.95)",
              border: "1px solid rgba(255, 232, 224, 0.8)",
              backdropFilter: "blur(12px)",
              color: "#1A1A2E",
            },
          }}
        />
      </body>
    </html>
  );
}
