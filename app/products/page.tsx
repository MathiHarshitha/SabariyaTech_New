import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, Swoosh } from "@/components/pages/PageHero";
import { CatalogTiles, ProductCatalog } from "@/components/pages/ProductCatalog";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the live LMS Portal and restaurant billing software in development by SabariyaTech.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
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
  );
}
