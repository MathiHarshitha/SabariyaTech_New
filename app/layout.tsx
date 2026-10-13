import type { Metadata, Viewport } from "next";
import { Caveat, Poppins } from "next/font/google";
import { site } from "@/data/site";
import { MotionProvider } from "@/components/providers/MotionProvider";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-poppins", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], weight: ["600"], variable: "--font-caveat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Software Development Company in Vijayawada`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "SabariyaTech",
    "software development company Vijayawada",
    "web development company Vijayawada",
    "IT company Vijayawada",
    "custom software development",
    "web application development",
    "AI development company",
    "ERP software development",
    "CRM development",
    "SaaS development",
    "technology company Andhra Pradesh",
    "LMS Portal",
    "restaurant billing software",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `${site.name} — Software Development Company in Vijayawada`,
    description: site.description,
    images: [{ url: "/images/hero-mountains.jpg", width: 2000, height: 1333, alt: "SabariyaTech — Software Development Company in Vijayawada" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Software Development Company in Vijayawada`,
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

const organizationLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Benz Circle",
    addressLocality: "Vijayawada",
    addressRegion: "Andhra Pradesh",
    postalCode: "520010",
    addressCountry: "IN",
  },
  logo: `${site.url}/Logo.svg`,
  image: `${site.url}/images/hero-mountains.jpg`,
  description: site.description,
  areaServed: [
    { "@type": "City", name: "Vijayawada" },
    { "@type": "State", name: "Andhra Pradesh" },
    { "@type": "Country", name: "India" },
  ],
  knowsAbout: [
    "Web Application Development",
    "Custom Software Development",
    "AI Development",
    "Machine Learning",
    "ERP Software",
    "SaaS Development",
    "Search Engine Optimization",
    "Cloud Infrastructure",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${poppins.variable} ${caveat.variable}`}>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl bg-navy-900 px-4 py-3 font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      </body>
    </html>
  );
}
