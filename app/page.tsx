import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { WhyUs } from "@/components/sections/WhyUs";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Insights } from "@/components/sections/Insights";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <Products />
        <Work />
        <Process />
        <TechStack />
        <WhyUs />
        <Team />
        <Testimonials />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
