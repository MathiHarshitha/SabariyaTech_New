import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, Swoosh } from "@/components/pages/PageHero";
import { Culture, HiringCard, HiringProcess, Openings } from "@/components/pages/CareersContent";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Tech Jobs & Careers in Vijayawada",
  description:
    "Join SabariyaTech in Vijayawada. We're hiring for tech and digital marketing roles. Explore open positions, our engineering culture and our simple four-step hiring process.",
  alternates: { canonical: "/careers" },
  keywords: [
    "tech jobs Vijayawada",
    "software developer jobs Vijayawada",
    "digital marketing jobs Vijayawada",
    "IT careers Andhra Pradesh",
    "SabariyaTech careers",
    "software company jobs Vijayawada",
  ],
  openGraph: {
    title: "Tech Jobs & Careers in Vijayawada | SabariyaTech",
    description:
      "Join SabariyaTech in Vijayawada. We're hiring for tech and digital marketing roles. Explore open positions and our engineering culture.",
    url: "/careers",
  },
  twitter: {
    title: "Tech Jobs & Careers in Vijayawada | SabariyaTech",
    description:
      "Join SabariyaTech in Vijayawada. We're hiring for tech and digital marketing roles. Explore open positions and our engineering culture.",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sabariyatech.in" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://sabariyatech.in/careers" },
  ],
};

export default function CareersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageShell>
      <PageHero
        crumbs={[{ label: "Careers" }]}
        title={
          <>
            Build what&apos;s next <Swoosh>with us.</Swoosh>
          </>
        }
        lead="Join a growing team building secure platforms, AI systems and digital products for real businesses. Own your work, learn fast and grow with us."
        actions={
          <>
            <Button href="#openings" size="lg">
              View open roles
            </Button>
            <Button href={`mailto:${site.email}?subject=${encodeURIComponent("Job application")}`} size="lg" variant="soft">
              Send your CV
            </Button>
          </>
        }
        aside={<HiringCard />}
      />
      <Culture />
      <Openings />
      <HiringProcess />
    </PageShell>
    </>
  );
}
