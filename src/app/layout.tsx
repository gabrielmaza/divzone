import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalytics from "../utils/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DivZone - Multipurpose themes",
  description:
    "Experience revolutionary web templates with the latest design standards, cutting-edge technology, and unmatched performance.",
  keywords:
    "multipurpose themes, web templates, design standards, cutting-edge technology, performance",
  author: "DivZone",
  ogImageUrl: "../../public/img/social/og_divzone_devices.jpg",
  ogWebsiteUrl: "https://div.zone",
  ogType: "website",
  ogName: "DivZone",
  ogLocale: "en_EN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImageUrl} />
        <meta property="og:url" content={metadata.ogWebsiteUrl} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:site_name" content={metadata.ogName} />
        <meta property="og:locale" content={metadata.ogLocale} />
      </Head>
      <body
        className={`bg-gray-900 ${inter.className}`}
        style={{ scrollBehavior: "smooth" }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
