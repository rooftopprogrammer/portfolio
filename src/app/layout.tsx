import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LINKEDIN_URL, siteConfig, summary } from "@/config/site";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { Toaster } from "sonner";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const pageTitle = siteConfig.seoTitle;

export const viewport: Viewport = {
  themeColor: "#F6F4EE",
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
    "Senior Full-Stack Engineer Hyderabad",
    "Senior Software Engineer Hyderabad",
    "React Next.js engineer",
    "Node.js NestJS Python developer",
    "GenAI engineer RAG",
    "LLM agents LangGraph MCP",
    "Backend-for-Frontend BFF",
    "Web performance Core Web Vitals",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // NOTE: no `alternates.canonical` here. Next resolves it against
  // `trailingSlash: false` and strips the trailing slash, which would disagree
  // with the sitemap. The canonical <link> is emitted verbatim in <head> below.
  openGraph: {
    type: "website",
    locale: "en_US",
    // `url` is emitted in <head> instead, for the same trailing-slash reason.
    title: pageTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
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
    other: [{ rel: "mask-icon", url: "/favicon.svg", color: "#FF5B36" }],
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
  jobTitle: siteConfig.title,
  description: summary,
  image: new URL("/profile-photo.jpg", siteConfig.url).toString(),
  email: `mailto:${siteConfig.email}`,
  sameAs: [LINKEDIN_URL],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Python",
    "FastAPI",
    "Backend-for-Frontend",
    "Microfrontends",
    "GraphQL",
    "PostgreSQL",
    "Retrieval-Augmented Generation",
    "LLM agents",
    "LangGraph",
    "Model Context Protocol",
    "Azure OpenAI",
    "AWS",
    "Web Performance",
    "Core Web Vitals",
    "Accessibility",
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
        {/* Emitted by hand so the trailing slash survives — see metadata above. */}
        <link rel="canonical" href={siteConfig.url} />
        {/* Lets CSS hold scroll-in animations back only when JS will run them. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <meta property="og:url" content={siteConfig.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >

        <AnalyticsProvider>{children}</AnalyticsProvider>

        <Toaster
          theme="dark"
          position="bottom-right"
          closeButton
          toastOptions={{
            style: {
              background: "#15171C",
              border: "1px solid #2B2F39",
              color: "#F3F1EA",
            },
          }}
        />
      </body>
    </html>
  );
}
