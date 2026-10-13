import type { Metadata } from "next";
import { LegalDocument } from "@/components/pages/LegalDocument";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how SabariyaTech collects, uses, stores, discloses and protects personal information when you use our website, products and services.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | SabariyaTech",
    description: "Learn how SabariyaTech collects, uses, stores, discloses and protects personal information when you use our website, products and services.",
    url: "/privacy-policy",
  },
  twitter: {
    title: "Privacy Policy | SabariyaTech",
    description: "Learn how SabariyaTech collects, uses, stores, discloses and protects personal information when you use our website, products and services.",
  },
};

const sections = [
  {
    heading: "Introduction",
    paragraphs: [
      "SabariyaTech respects your privacy and is committed to protecting the personal information shared with us. This Privacy Policy explains how we collect, use, store, disclose, and protect information when visitors access our website, contact us, or use our software products and services.",
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: ["We may collect the following categories of information:"],
    bullets: [
      "Contact information: Name, email address, phone number, company name, and information submitted through contact forms.",
      "Project information: Requirements, documents, technical specifications, and other materials shared when requesting our services.",
      "Account information: Login details, account identifiers, and subscription information when using our products.",
      "Technical information: IP address, browser type, device information, pages visited, and website usage data.",
      "Payment information: Transaction references and payment status processed through third-party payment providers.",
      "We collect only the information reasonably necessary for the relevant purpose.",
    ],
  },
  {
    heading: "How We Use Information",
    paragraphs: ["We use collected information to:"],
    bullets: [
      "Respond to enquiries and provide requested services.",
      "Develop, operate, and maintain websites, applications, and software products.",
      "Manage customer accounts, subscriptions, and billing.",
      "Improve website performance, security, and user experience.",
      "Provide customer support and communicate important service updates.",
      "Prevent fraud, investigate security incidents, and meet applicable legal obligations.",
    ],
  },
  {
    heading: "AI-Powered Products",
    paragraphs: [
      "Some SabariyaTech products may use artificial intelligence to process user-submitted prompts, text, code, URLs, or other inputs.",
      "Information submitted to these products may be processed by third-party AI providers where required to deliver the requested functionality. The relevant product documentation should identify applicable providers and data handling practices.",
      "Users should avoid submitting passwords, payment card details, confidential business information, or other sensitive data unless the product specifically supports such processing with appropriate safeguards.",
      "AI-generated results may be inaccurate and should be reviewed before use.",
    ],
  },
  {
    heading: "Cookies and Analytics",
    paragraphs: [
      "Our website may use cookies and similar technologies to maintain functionality, understand website traffic, improve performance, and measure marketing effectiveness.",
      "Visitors can manage cookies through their browser settings and any consent controls provided on our website. Disabling certain cookies may affect website functionality.",
    ],
  },
  {
    heading: "Sharing of Information",
    paragraphs: [
      "We do not sell personal information to third parties.",
      "We may share relevant information with trusted service providers, including hosting providers, analytics platforms, payment processors, email services, and AI providers, when necessary to operate our website or deliver our services.",
      "Information may also be disclosed where required by law or when necessary to protect our legal rights and the security of our services.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We use reasonable technical and organisational safeguards designed to protect information against unauthorised access, alteration, disclosure, and destruction.",
      "However, no internet transmission or storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: [
      "We retain information for as long as necessary to fulfil the purposes described in this policy, provide our services, resolve disputes, maintain required business records, and comply with applicable laws.",
      "When information is no longer required, we take appropriate steps to delete or anonymise it, subject to applicable legal obligations.",
    ],
  },
  {
    heading: "Your Privacy Rights",
    paragraphs: [
      "Subject to applicable law, you may have the right to request access to information about your personal data, correction of inaccurate information, deletion where applicable, withdrawal of consent, or assistance with privacy-related grievances.",
      "Requests can be submitted using the contact details below. We may need to verify your identity before processing a request.",
    ],
  },
  {
    heading: "Third-Party Websites",
    paragraphs: [
      "Our website may contain links to third-party websites or services. Their privacy practices are governed by their own policies, and we encourage visitors to review those policies before sharing information.",
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      "Our general website and software services are not intentionally designed to collect children's personal information without an appropriate legal basis and required safeguards. If we become aware that personal information has been collected improperly, we will take appropriate steps in accordance with applicable law.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy to reflect changes to our services, technology, or legal obligations. The revised version will be published on this page with an updated effective date where appropriate.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: ["For privacy-related questions or requests, contact:"],
    contacts: [
      { label: "Company", value: "SabariyaTech" },
      { label: "Website", value: site.url, href: site.url },
      { label: "Email", value: site.email, href: `mailto:${site.email}` },
      { label: "Address", value: "Vijayawada, Andhra Pradesh, India" },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return <LegalDocument title="Privacy Policy" effectiveDate="13 October 2026" sections={sections} />;
}
