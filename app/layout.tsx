import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { organizationSchema } from "@/lib/seo";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://seobusiness.com"),
  title: {
    default: "Enterprise SEO Agency | Data-Driven Organic Growth",
    template: "%s | SEO Business",
  },
  description:
    "Drive organic revenue with proven SEO strategies. Trusted by Fortune 500 brands including Hyatt, Rocket Mortgage, and more. Get your free SEO audit today.",
  keywords: [
    "enterprise seo",
    "technical seo",
    "content strategy",
    "link building",
    "local seo",
    "ecommerce seo",
    "seo agency",
    "organic growth",
  ],
  authors: [{ name: "Mr SEO" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Mr SEO",
    title: "Enterprise SEO Agency | Data-Driven Organic Growth",
    description:
      "Drive organic revenue with proven SEO strategies. Trusted by Fortune 500 brands.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SEO Business - Enterprise SEO Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise SEO Agency | Data-Driven Organic Growth",
    description: "Drive organic revenue with proven SEO strategies.",
    images: ["/og-image.png"],
    creator: "@seobusiness",
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
