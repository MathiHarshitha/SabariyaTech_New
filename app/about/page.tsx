import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, Swoosh } from "@/components/pages/PageHero";
import { RiverCard, Story, TeamStrip, Values } from "@/components/pages/AboutContent";
import { WhyUs } from "@/components/sections/WhyUs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "SabariyaTech is a Vijayawada-based technology company building secure, scalable and performance-driven digital systems — inspired by the steady flow of the Sabari River.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
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
  );
}
