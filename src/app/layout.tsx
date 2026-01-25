import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFBF8" },
    { media: "(prefers-color-scheme: dark)", color: "#FFFBF8" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    // Primary name variations - main focus
    "Ravi Kumar Nersu",
    "Ravi Nersu",
    "Ravi Kumar Nersu portfolio",
    "Ravi Nersu developer",
    "ravikumarnersu",
    // Specific role + name combinations
    "Ravi Kumar Nersu software engineer",
    "Ravi Nersu full stack developer",
    "Ravi Kumar Nersu React developer",
    "Ravi Kumar Nersu LTIMindtree",
    // Location-specific name searches
    "Ravi Kumar Nersu Hyderabad",
    "Ravi Nersu India",
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
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/og-image.png"],
    creator: "@ravikumarnersu",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#FF6B35",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "google-site-verification-code", // Replace with actual code when available
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  sameAs: [
    "https://github.com/ravikumarnersu",
    "https://www.linkedin.com/in/ravi-kumar-nersu-8a00b3163",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Full Stack Development",
    "Microservices",
    "AWS",
    "Docker",
    "Kubernetes",
  ],
  worksFor: {
    "@type": "Organization",
    name: "LTIMindtree",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "KL University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "India",
  },
  email: "raviknersu96@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
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
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#FFFBF8] via-[#FFF8F5] to-[#FFF2EE]" />
        <div className="fixed inset-0 -z-10 bg-gradient-to-bl from-transparent via-transparent to-purple-500/5" />
        
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
        <Toaster
          theme="light"
          position="bottom-right"
          richColors
          closeButton
          toastOptions={{
            style: {
              background: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(255, 232, 224, 0.8)',
              backdropFilter: 'blur(12px)',
              color: '#1A1A2E',
            },
          }}
        />
      </body>
    </html>
  );
}
