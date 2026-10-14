import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, Swoosh } from "@/components/pages/PageHero";
import { CoreServices, CoreServicesCard, Offerings } from "@/components/pages/ServicesDetail";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "SabariyaTech Web, AI & Software Development Services",
  description:
    "Custom web platforms, AI automation, ERP, SaaS and backend infrastructure services from SabariyaTech. End-to-end technology services built for real business growth.",
  alternates: { canonical: "/services" },
  keywords: [
    "software development services India",
    "web development services",
    "AI development services",
    "custom web application development",
    "ERP software development",
    "SaaS development company",
    "SEO services India",
    "cloud infrastructure services",
    "backend development services",
  ],
  openGraph: {
    title: "Web, AI & Software Development Services | SabariyaTech",
    description:
      "Custom web platforms, AI automation, ERP, SaaS and backend infrastructure services from SabariyaTech. Built for real business growth.",
    url: "/services",
  },
  twitter: {
    title: "Web, AI & Software Development Services | SabariyaTech",
    description:
      "Custom web platforms, AI automation, ERP, SaaS and backend infrastructure services from SabariyaTech. Built for real business growth.",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sabariyatech.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://sabariyatech.in/services" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageShell>
      <PageHero
        crumbs={[{ label: "Services" }]}
        title={
          <>
            Services built for <Swoosh>real growth.</Swoosh>
          </>
        }
        lead="Secure web platforms, production-ready AI systems and scalable backend architecture — designed, built and supported by one team."
        actions={
          <>
            <Button href="/contact" size="lg">
              Start a Project
            </Button>
            <Button href="#offerings" size="lg" variant="soft">
              See all services
            </Button>
          </>
        }
        aside={<CoreServicesCard />}
      />
      <CoreServices />
      <Offerings />
      <TechStack />
      <Process />
      <FinalCTA />
    </PageShell>
    </>
  );
}
