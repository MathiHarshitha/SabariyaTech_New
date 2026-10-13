import type { Metadata } from "next";
import { LegalDocument } from "@/components/pages/LegalDocument";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms governing access to and use of SabariyaTech's website, software products, and services.",
  alternates: { canonical: "/terms-and-conditions" },
};

const sections = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "These Terms & Conditions govern access to and use of the SabariyaTech website, software products, and services.",
      "By accessing our website or using our services, you agree to these terms. If you do not agree, you should discontinue use of the relevant service.",
    ],
  },
  {
    heading: "Our Services",
    paragraphs: ["SabariyaTech provides technology-related services that may include:"],
    bullets: [
      "Website and web application development.",
      "Mobile application development.",
      "SaaS products and software tools.",
      "AI-powered solutions and automation.",
      "Business systems and custom integrations.",
      "Technical consulting and digital services.",
      "The availability, scope, and features of individual services or products may vary.",
    ],
  },
  {
    heading: "User Responsibilities",
    paragraphs: ["Users agree to:"],
    bullets: [
      "Provide accurate information when contacting us or registering for our services.",
      "Use our website and products only for lawful purposes.",
      "Maintain the confidentiality of their account credentials.",
      "Avoid unauthorised access, security testing without permission, interference, or attempts to disrupt our systems.",
      "Avoid uploading malicious code or content that infringes another party's rights.",
      "Comply with applicable laws and the terms of any third-party services they use.",
      "We may restrict or suspend access when reasonably necessary to address violations, security risks, or legal requirements.",
    ],
  },
  {
    heading: "Projects and Development Services",
    paragraphs: [
      "Custom development projects will be governed by the agreed proposal, quotation, statement of work, or separate service agreement.",
      "These documents should specify project scope, deliverables, timelines, payment milestones, revision limits, maintenance arrangements, and any applicable acceptance criteria.",
      "Changes to the agreed scope may require additional fees or revised timelines.",
    ],
  },
  {
    heading: "Pricing and Payments",
    paragraphs: [
      "Prices, subscription fees, billing intervals, and payment terms will be communicated through the relevant proposal, product page, or subscription checkout.",
      "Customers are responsible for applicable charges and taxes as specified in their agreement.",
      "Refunds, cancellations, renewals, and subscription termination are governed by the relevant product policy or written agreement. No refund entitlement should be assumed unless provided by the applicable terms or required by law.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "Unless otherwise agreed in writing, SabariyaTech retains ownership of its pre-existing software, reusable components, frameworks, internal tools, branding, and website content.",
      "Ownership and licensing of custom project deliverables will be determined by the applicable client agreement. Where a transfer of ownership is agreed, any conditions, exclusions, and payment requirements should be documented in that agreement.",
      "Users must not reproduce, distribute, reverse engineer, or commercially exploit our proprietary materials except where authorised or permitted by law.",
    ],
  },
  {
    heading: "SaaS Products and Subscriptions",
    paragraphs: [
      "Certain products may require registration, payment, or acceptance of additional product-specific terms.",
      "We may introduce feature changes, maintenance periods, usage limits, or subscription plan changes. Material changes to paid services will be handled in accordance with the applicable subscription agreement and law.",
      "Users are responsible for protecting their credentials and complying with product usage limits.",
    ],
  },
  {
    heading: "AI-Generated Content",
    paragraphs: [
      "AI-powered products may generate text, code, recommendations, or other outputs that contain errors, omissions, or outdated information.",
      "Users are responsible for reviewing and validating generated outputs before relying on them. AI outputs should not be treated as guaranteed accurate, secure, original, or suitable for a particular purpose.",
      "Users must ensure that their inputs and use of outputs comply with applicable laws and third-party rights.",
    ],
  },
  {
    heading: "Third-Party Services",
    paragraphs: [
      "Our products may integrate with external APIs, hosting platforms, payment providers, or other third-party services.",
      "Such services may be governed by separate terms and privacy policies. SabariyaTech is not responsible for independent third-party services beyond the responsibilities imposed by applicable law or our contractual commitments.",
    ],
  },
  {
    heading: "Availability and Maintenance",
    paragraphs: [
      "We aim to maintain reliable services but do not guarantee uninterrupted or error-free operation.",
      "Temporary interruptions may occur due to maintenance, infrastructure issues, security incidents, or circumstances beyond our reasonable control.",
    ],
  },
  {
    heading: "Warranties and Liability",
    paragraphs: [
      "To the extent permitted by applicable law, our website and general informational content are provided without a guarantee that they will always be available, error-free, or suitable for every purpose.",
      "Liability arising from paid services, custom development, or subscriptions will be governed by the applicable agreement and mandatory legal requirements.",
      "Nothing in these terms excludes liability that cannot lawfully be excluded.",
    ],
  },
  {
    heading: "Suspension and Termination",
    paragraphs: [
      "We may suspend or terminate access to a service for material breaches of these terms, unlawful activity, security threats, non-payment, or other grounds specified in the applicable agreement.",
      "Any outstanding payment obligations and provisions intended to survive termination will remain effective as applicable.",
    ],
  },
  {
    heading: "Privacy",
    paragraphs: [
      "Our collection and processing of personal information are described in our Privacy Policy, which forms part of the framework governing use of our website and services.",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms & Conditions as our services evolve or legal requirements change. Updated terms will be published on this page with a revised effective date where appropriate.",
    ],
  },
  {
    heading: "Governing Law and Disputes",
    paragraphs: [
      "These terms are governed by the laws of India, subject to applicable mandatory legal requirements.",
      "Disputes will be addressed through good-faith discussions where practicable. The competent courts and dispute resolution procedures applicable to the relevant agreement will govern any unresolved dispute.",
    ],
  },
  {
    heading: "Contact Information",
    contacts: [
      { label: "Company", value: "SabariyaTech" },
      { label: "Website", value: site.url, href: site.url },
      { label: "Email", value: site.email, href: `mailto:${site.email}` },
      { label: "Address", value: "Vijayawada, Andhra Pradesh, India" },
    ],
  },
];

export default function TermsAndConditionsPage() {
  return <LegalDocument title="Terms & Conditions" effectiveDate="13 October 2026" sections={sections} />;
}
