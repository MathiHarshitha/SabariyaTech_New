import type { Metadata } from "next";
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
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Software Development Company in Vijayawada",
  description:
    "SabariyaTech builds websites, web applications, AI systems and business software for companies in Vijayawada and across India. 10+ live projects, 8+ happy clients. Start your project today.",
  alternates: { canonical: "/" },
  keywords: [
    "software development company Vijayawada",
    "web development company Vijayawada",
    "IT company Vijayawada",
    "website development Vijayawada",
    "custom software development Andhra Pradesh",
    "web application development",
    "AI development company India",
    "ERP software development",
  ],
  openGraph: {
    title: "Software Development Company in Vijayawada | SabariyaTech",
    description:
      "SabariyaTech builds websites, web applications, AI systems and business software for companies in Vijayawada and across India. Start your project today.",
    url: "/",
  },
  twitter: {
    title: "Software Development Company in Vijayawada | SabariyaTech",
    description:
      "SabariyaTech builds websites, web applications, AI systems and business software for companies in Vijayawada and across India. Start your project today.",
  },
};

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
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
