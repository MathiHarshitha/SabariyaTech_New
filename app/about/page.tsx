import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, Swoosh } from "@/components/pages/PageHero";
import { RiverCard, Story, TeamStrip, Values } from "@/components/pages/AboutContent";
import { WhyUs } from "@/components/sections/WhyUs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About SabariyaTech | Software Development Company",
  description:
    "SabariyaTech builds secure, scalable web platforms, AI systems and business software for long-term growth — inspired by the Sabari River.",
  alternates: { canonical: "/about" },
  keywords: [
    "about SabariyaTech",
    "SabariyaTech software company",
    "software company Andhra Pradesh",
    "technology company India",
    "web development company India",
  ],
  openGraph: {
    title: "About SabariyaTech | Software Development Company",
    description:
      "SabariyaTech builds secure, scalable web platforms, AI systems and business software for long-term growth.",
    url: "/about",
  },
  twitter: {
    title: "About SabariyaTech | Software Development Company",
    description:
      "SabariyaTech builds secure, scalable web platforms, AI systems and business software for long-term growth.",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sabariyatech.in" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://sabariyatech.in/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageShell>
      <PageHero
        crumbs={[{ label: "About" }]}
        title={
          <>
            Flowing with <Swoosh>steady purpose.</Swoosh>
          </>
        }
        lead="We build stable systems and scalable infrastructure for long-term growth — secure web platforms, production-ready AI and backend architecture you can rely on."
        actions={
          <>
            <Button href="/team" size="lg">
              Meet the team
            </Button>
            <Button href="/services" size="lg" variant="soft">
              What we do
            </Button>
          </>
        }
        aside={<RiverCard />}
      />
      <Story />
      <Values />
      <WhyUs />
      <TeamStrip />
      <FinalCTA />
    </PageShell>
    </>
  );
}
