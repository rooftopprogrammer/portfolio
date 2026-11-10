import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },

  reactStrictMode: true,
  compress: true,
  generateEtags: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  trailingSlash: false,

  // Old résumé links (LinkedIn, emails, job portals) keep working.
  async redirects() {
    return [
      {
        source: "/Ravi-Kumar-Nersu-Senior-Software-Engineer-Resume.pdf",
        destination: "/Ravi-Kumar-Nersu-Senior-Full-Stack-Engineer-Resume.pdf",
        permanent: false,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
      {
        // Public files keep fixed names, so they are not immutable: a day of
        // freshness, then revalidate in the background.
        source: "/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      {
        // The résumé keeps one filename across updates, so browsers must
        // re-check it instead of holding a stale copy for a year.
        source: "/(.*)\\.pdf",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
