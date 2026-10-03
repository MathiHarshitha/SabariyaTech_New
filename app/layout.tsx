import type { Metadata, Viewport } from "next";
import { Caveat, Inter, Sora } from "next/font/google";
import { site } from "@/data/site";
import { MotionProvider } from "@/components/providers/MotionProvider";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], weight: ["600"], variable: "--font-caveat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Turning ideas into impactful technology`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "SabariyaTech",
    "software development",
    "web development",
    "AI automation",
    "ERP",
    "CRM",
    "SaaS",
    "LinkFix",
    "AI Editor",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `${site.name} — Turning ideas into impactful technology`,
    description: site.description,
    images: [{ url: "/images/hero-mountains.jpg", width: 2000, height: 1333, alt: "Mountains at sunrise above the clouds" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Turning ideas into impactful technology`,
    description: site.description,
    images: ["/images/hero-mountains.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#071A35",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  logo: `${site.url}/brand/logo-mark.png`,
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sora.variable} ${inter.variable} ${caveat.variable}`}>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl bg-navy-900 px-4 py-3 font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
