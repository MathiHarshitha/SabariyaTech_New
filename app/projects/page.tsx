import type { Metadata } from "next";
import { liveProjectCount, portfolio, team } from "@/data/pages";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, StatRow, Swoosh } from "@/components/pages/PageHero";
import { ProjectsGrid } from "@/components/pages/ProjectsGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "SabariyaTech Software Portfolio & Client Projects",
  description:
    "13 client websites and platforms built by SabariyaTech across tourism, education, legal, healthcare, hospitality, real estate and e-commerce. See our live work.",
  alternates: { canonical: "/projects" },
  keywords: [
    "web development portfolio Vijayawada",
    "software projects portfolio",
    "client projects SabariyaTech",
    "website development case studies",
    "web development Andhra Pradesh",
    "software company portfolio India",
  ],
  openGraph: {
    title: "Software Portfolio & Client Projects | SabariyaTech",
    description:
      "13 client websites and platforms built across tourism, education, legal, healthcare, hospitality, real estate and e-commerce. See our live work.",
    url: "/projects",
  },
  twitter: {
    title: "Software Portfolio & Client Projects | SabariyaTech",
    description:
      "13 client websites and platforms built across tourism, education, legal, healthcare, hospitality, real estate and e-commerce. See our live work.",
  },
};

const industries = new Set(portfolio.map((p) => p.sector)).size;

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sabariyatech.in" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://sabariyatech.in/projects" },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageShell>
      <PageHero
        crumbs={[{ label: "Projects" }]}
        title={
          <>
            Real projects. Real <Swoosh>results.</Swoosh>
          </>
        }
        lead="We work with businesses, institutes and startups across industries. Explore our live work and projects currently in development."
        actions={
          <>
            <Button href="/contact" size="lg">
              Start a Similar Project
            </Button>
            <Button href="#portfolio" size="lg" variant="soft">
              Browse projects
            </Button>
          </>
        }
        aside={
          <div className="bg-navy-section relative overflow-hidden rounded-[32px] p-4 shadow-[0_50px_100px_-40px_rgb(7_26_53/0.6)] sm:p-5">
            <p className="px-1 pb-4 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">At a glance</p>
            <StatRow
              light
              stats={[
                { value: `${liveProjectCount}`, label: "Live client projects" },
                { value: `${industries}`, label: "Industries served" },
                { value: `${team.length}`, label: "Specialists on the team" },
              ]}
            />
            <ul className="mt-4 flex flex-wrap gap-2">
              {portfolio.slice(0, 8).map((p) => (
                <li key={p.title} className="rounded-full bg-white/[0.07] px-3 py-1.5 text-[12.5px] text-white/75">
                  {p.title}
                </li>
              ))}
              <li className="rounded-full bg-brand-orange px-3 py-1.5 text-[12.5px] font-semibold text-white">+{portfolio.length - 8} more</li>
            </ul>
          </div>
        }
      />
      <ProjectsGrid />
      <FinalCTA />
    </PageShell>
    </>
  );
}
