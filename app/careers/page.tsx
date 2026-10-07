import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, Swoosh } from "@/components/pages/PageHero";
import { Culture, HiringCard, HiringProcess, Openings } from "@/components/pages/CareersContent";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join SabariyaTech in Vijayawada. See open roles, our culture and a simple four-step hiring process.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
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
  );
}
