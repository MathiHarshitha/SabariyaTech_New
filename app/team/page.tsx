import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, Swoosh } from "@/components/pages/PageHero";
import { TeamGrid, TeamMosaic, TeamValues } from "@/components/pages/TeamGrid";
import { CareersBand } from "@/components/pages/CareersBand";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Meet SabariyaTech Development Team in Vijayawada",
  description:
    "Meet the SabariyaTech team — web developers, AI/ML engineers, data scientists, SEO specialists and video editors based in Vijayawada, Andhra Pradesh.",
  alternates: { canonical: "/team" },
  keywords: [
    "SabariyaTech team",
    "software developers Vijayawada",
    "AI engineers Vijayawada",
    "web development team Andhra Pradesh",
    "tech team India",
  ],
  openGraph: {
    title: "Meet Our Development Team in Vijayawada | SabariyaTech",
    description:
      "Web developers, AI/ML engineers, data scientists, SEO specialists and video editors — the SabariyaTech team based in Vijayawada, Andhra Pradesh.",
    url: "/team",
  },
  twitter: {
    title: "Meet Our Development Team in Vijayawada | SabariyaTech",
    description:
      "Web developers, AI/ML engineers, data scientists, SEO specialists and video editors — the SabariyaTech team based in Vijayawada, Andhra Pradesh.",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sabariyatech.in" },
    { "@type": "ListItem", position: 2, name: "Team", item: "https://sabariyatech.in/team" },
  ],
};

export default function TeamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageShell>
      <PageHero
        crumbs={[{ label: "Team" }]}
        title={
          <>
            The people behind <Swoosh>the work.</Swoosh>
          </>
        }
        lead="A passionate team of developers, data scientists, designers and strategists working together to build what's next."
        actions={
          <>
            <Button href="#full-team" size="lg">
              Meet everyone
            </Button>
            <Button href="/careers" size="lg" variant="soft">
              Join the team
            </Button>
          </>
        }
        aside={<TeamMosaic />}
      />
      <TeamGrid />
      <TeamValues />
      <CareersBand />
    </PageShell>
    </>
  );
}
