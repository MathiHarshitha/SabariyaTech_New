import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, Swoosh } from "@/components/pages/PageHero";
import { CatalogTiles, ProductCatalog } from "@/components/pages/ProductCatalog";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Products",
  description: "Institute Portal, LinkFix, AI Editor and more — software products by SabariyaTech that make work simpler for institutes, businesses and teams.",
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
        lead="We build our own products to solve real problems we see again and again — from running an institute to keeping a website healthy and writing better content."
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
