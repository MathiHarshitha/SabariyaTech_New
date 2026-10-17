import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, Swoosh } from "@/components/pages/PageHero";
import { CatalogTiles, ProductCatalog } from "@/components/pages/ProductCatalog";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Software Product Development & SaaS Products | SabariyaTech",
  description:
    "Explore SabariyaTech's live LMS Portal for institutes and restaurant billing software in development. Purpose-built tools that solve real problems for real businesses.",
  alternates: { canonical: "/products" },
  keywords: [
    "LMS portal India",
    "learning management system for institutes",
    "restaurant billing software",
    "SaaS products India",
    "SabariyaTech products",
    "education software India",
  ],
  openGraph: {
    title: "LMS Portal & Software Products | SabariyaTech",
    description:
      "Explore SabariyaTech's live LMS Portal for institutes and restaurant billing software in development. Purpose-built tools that solve real problems.",
    url: "/products",
  },
  twitter: {
    title: "LMS Portal & Software Products | SabariyaTech",
    description:
      "Explore SabariyaTech's live LMS Portal for institutes and restaurant billing software in development. Purpose-built tools that solve real problems.",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sabariyatech.in" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.sabariyatech.in/products" },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageShell>
      <PageHero
        crumbs={[{ label: "Products" }]}
        title={
          <>
            Tools that make work <Swoosh>simpler.</Swoosh>
          </>
        }
        lead="We build products around real workflows, including a live learning platform used by institutes and restaurant billing software in development."
        actions={
          <>
            <Button href="#catalog" size="lg">
              Explore products
            </Button>
            <Button href="/contact" size="lg" variant="soft">
              Request a demo
            </Button>
          </>
        }
        aside={<CatalogTiles />}
      />
      <ProductCatalog />
      <FinalCTA />
    </PageShell>
    </>
  );
}
