import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, Swoosh } from "@/components/pages/PageHero";
import { CoreServices, CoreServicesCard, Offerings } from "@/components/pages/ServicesDetail";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web platform development, AI systems & automation, scalable backend infrastructure, app development, SEO and cloud — end-to-end services from SabariyaTech.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
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
  );
}
