import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, Swoosh } from "@/components/pages/PageHero";
import { TeamGrid, TeamMosaic, TeamValues } from "@/components/pages/TeamGrid";
import { CareersBand } from "@/components/pages/CareersBand";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the SabariyaTech team — engineers, AI/ML specialists, data scientists, SEO and video experts based in Vijayawada.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
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
  );
}
