import {
  ChartColumn,
  Cloud,
  CodeXml,
  Cpu,
  Database,
  Eye,
  Gauge,
  LifeBuoy,
  Lightbulb,
  Layers,
  Map,
  Monitor,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Accent } from "@/lib/accents";

/* ---------------------------------------------------------
   Company
   --------------------------------------------------------- */
export const site = {
  name: "SabariyaTech",
  url: "https://www.sabariyatech.in",
  email: "team@sabariyatech.in",
  phone: "+91 96525 57187",
  phoneHref: "tel:+919652557187",
  address: "Vijayawada, Andhra Pradesh, India",
  city: "Vijayawada",
  tagline: "Turning ideas into impactful technology.",
  description:
    "SabariyaTech builds secure digital platforms, AI-powered systems and scalable infrastructure that help businesses automate, grow and create real impact.",
  footerLine: "Building software for the businesses of tomorrow.",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

/* ---------------------------------------------------------
   Hero
   --------------------------------------------------------- */
// TODO: confirm these figures against current company data before launch
export const heroStats = [
  { value: 3, suffix: "+", label: "Products" },
  { value: 10, suffix: "+", label: "Projects" },
  { value: 8, suffix: "+", label: "Happy Clients" },
];

export const heroCapabilities: { title: string; caption: string; icon: LucideIcon; accent: Accent }[] = [
  { title: "Web Platforms", caption: "Scalable & Secure", icon: Monitor, accent: "blue" },
  { title: "AI & Automation", caption: "Intelligent Solutions", icon: Cpu, accent: "orange" },
  { title: "Business Systems", caption: "ERP, CRM & More", icon: Database, accent: "cyan" },
  { title: "Cloud & Infrastructure", caption: "Reliable & High Performance", icon: Cloud, accent: "indigo" },
];

/* ---------------------------------------------------------
   Clients (real names only — no invented logos)
   --------------------------------------------------------- */
export const clients = [
  { name: "SSR Institute", sector: "Education", mono: "SSR", accent: "blue" as Accent },
  { name: "Bhadradri Papikondalu", sector: "Travel & Tourism", mono: "BP", accent: "orange" as Accent },
  { name: "Viswa Bharathi", sector: "Legal Services", mono: "VB", accent: "indigo" as Accent },
];

/* ---------------------------------------------------------
   Services
   --------------------------------------------------------- */
export const services: { title: string; body: string; icon: LucideIcon; accent: Accent; points: string[] }[] = [
  {
    title: "Web Development",
    body: "Modern, high-performance web applications and SaaS platforms.",
    icon: Monitor,
    accent: "blue",
    points: ["Web apps", "SaaS", "Portals"],
  },
  {
    title: "AI & Automation",
    body: "AI agents, intelligent workflows and automation tools.",
    icon: Cpu,
    accent: "orange",
    points: ["AI agents", "Workflows", "Integrations"],
  },
  {
    title: "Business Systems",
    body: "ERP, CRM, workflow and internal platforms.",
    icon: Database,
    accent: "cyan",
    points: ["ERP", "CRM", "Internal tools"],
  },
  {
    title: "Digital Growth",
    body: "SEO, content and performance marketing for sustainable growth.",
    icon: ChartColumn,
    accent: "indigo",
    points: ["SEO", "Content", "Performance"],
  },
];

/* ---------------------------------------------------------
   Products
   --------------------------------------------------------- */
export type ProductId = "lms-portal" | "restaurant-billing" | "more";

export const products: {
  id: ProductId;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  accent: Accent;
  status: "Live · in use" | "In development" | "Coming soon";
  url?: string;
}[] = [
  {
    id: "lms-portal",
    name: "LMS Portal",
    tagline: "A live learning platform built for institutes.",
    description:
      "We developed and deployed this portal to support structured learning, course management, student progress tracking, quizzes and coding practice. It is actively used by institutes.",
    features: ["Structured courses", "Course management", "Student progress", "Quizzes & coding practice"],
    accent: "blue",
    status: "Live · in use",
    url: "https://portal.ssrinstitute.in/",
  },
  {
    id: "restaurant-billing",
    name: "Restaurant Billing Software",
    tagline: "Restaurant billing software currently in development.",
    description:
      "We are developing this software to help restaurants manage billing and related operations. It is not yet a launched product.",
    features: ["In development"],
    accent: "orange",
    status: "In development",
  },
  {
    id: "more",
    name: "More Products",
    tagline: "We're building more tools to make work simpler and smarter.",
    description: "New tools are in development. Get in touch to hear about them first.",
    features: ["In development", "Early access on request"],
    accent: "red",
    status: "Coming soon",
  },
];

/* ---------------------------------------------------------
   Work
   --------------------------------------------------------- */
export type WorkFilter = "All" | "Education" | "Travel & Tourism" | "Legal Services" | "E-commerce";

// TODO: replace photography with real project screenshots
export const projects: {
  title: string;
  category: Exclude<WorkFilter, "All">;
  description: string;
  url?: string;
  image?: string;
  alt: string;
  scope: string[];
  accent: Accent;
}[] = [
  {
    title: "Bhadradri Papikondalu",
    category: "Travel & Tourism",
    description: "A full-stack booking platform with secure payments and real-time availability.",
    image: "/images/project-logos/Bhadradri papikondalu-logos.png",
    alt: "River winding between forested hills",
    scope: ["Booking", "Payments", "Availability"],
    accent: "orange",
  },
  {
    title: "SSR Institute Website",
    category: "Education",
    description: "Institute website featuring course listings, admissions information and faculty profiles.",
    url: "https://www.ssrinstitute.in/",
    image: "/images/project-logos/ssr-institute-logo.png",
    alt: "SSR Institute logo",
    scope: ["Website", "Admissions", "Faculty"],
    accent: "blue",
  },
  {
    title: "Viswa Bharathi Law",
    category: "Legal Services",
    description: "Professional website for a law associate with modern design and SEO optimization.",
    image: "/images/project-logos/Viswabharathi-logo.webp",
    alt: "Scales of justice on a desk",
    scope: ["Website", "SEO", "Design"],
    accent: "red",
  },
  {
    title: "Rolls & Rattles",
    category: "E-commerce",
    description: "Online store with a product catalogue, secure checkout and doorstep delivery.",
    image: "/images/project-logos/rolls-and-rattles-logo.webp",
    alt: "Rolls & Rattles logo",
    scope: ["Product Catalogue", "Secure Checkout", "Delivery"],
    accent: "red",
  },
];

/* ---------------------------------------------------------
   Process
   --------------------------------------------------------- */
export const processSteps: { n: string; title: string; body: string; icon: LucideIcon; accent: Accent }[] = [
  { n: "01", title: "Discover", body: "Understand your goals and challenges.", icon: Search, accent: "orange" },
  { n: "02", title: "Plan", body: "Strategy, architecture and roadmap.", icon: Map, accent: "blue" },
  { n: "03", title: "Design & Build", body: "Design, develop and integrate.", icon: CodeXml, accent: "indigo" },
  { n: "04", title: "Optimize", body: "Test, refine and improve performance.", icon: Gauge, accent: "orange" },
  { n: "05", title: "Scale", body: "Support, maintain and grow together.", icon: TrendingUp, accent: "blue" },
];

/* ---------------------------------------------------------
   Technology
   --------------------------------------------------------- */
export type TechGroup = "Frontend" | "Backend & Data" | "Cloud & DevOps";

export const techStack: { name: string; icon: string; group: TechGroup; x: number; y: number; invert?: boolean }[] = [
  { name: "React", icon: "/tech/react.svg", group: "Frontend", x: 18, y: 16 },
  { name: "Next.js", icon: "/tech/nextjs.svg", group: "Frontend", x: 45, y: 9 },
  { name: "TypeScript", icon: "/tech/typescript.svg", group: "Frontend", x: 79, y: 15 },
  { name: "Node.js", icon: "/tech/nodejs.svg", group: "Backend & Data", x: 29, y: 34 },
  { name: "FastAPI", icon: "/tech/fastapi.svg", group: "Backend & Data", x: 71, y: 31 },
  { name: "Python", icon: "/tech/python.svg", group: "Backend & Data", x: 11, y: 54 },
  { name: "PostgreSQL", icon: "/tech/postgresql.svg", group: "Backend & Data", x: 89, y: 50 },
  { name: "MongoDB", icon: "/tech/mongodb.svg", group: "Backend & Data", x: 21, y: 86 },
  { name: "Docker", icon: "/tech/docker.svg", group: "Cloud & DevOps", x: 39, y: 71 },
  { name: "AWS", icon: "/tech/aws.svg", group: "Cloud & DevOps", x: 58, y: 90 },
  { name: "Vercel", icon: "/tech/vercel.svg", group: "Cloud & DevOps", x: 85, y: 82 },
];

export const techGroups: { name: TechGroup; dot: string }[] = [
  { name: "Frontend", dot: "bg-brand-cyan" },
  { name: "Backend & Data", dot: "bg-brand-blue" },
  { name: "Cloud & DevOps", dot: "bg-brand-orange" },
];

/* ---------------------------------------------------------
   Why SabariyaTech
   --------------------------------------------------------- */
export const reasons: { title: string; body: string; icon: LucideIcon; accent: Accent }[] = [
  { title: "Business-Focused Solutions", body: "Technology aligned with your goals.", icon: Target, accent: "orange" },
  { title: "Secure & Scalable Architecture", body: "Built for long-term growth.", icon: ShieldCheck, accent: "blue" },
  { title: "Transparent Process", body: "Clear communication at every step.", icon: Eye, accent: "cyan" },
  { title: "Ongoing Support", body: "We stay with you even after launch.", icon: LifeBuoy, accent: "red" },
];

/* ---------------------------------------------------------
   Team
   --------------------------------------------------------- */
export const teamValues: { label: string; icon: LucideIcon; accent: Accent }[] = [
  { label: "Ideas", icon: Lightbulb, accent: "orange" },
  { label: "People", icon: Users, accent: "red" },
  { label: "Technology", icon: Layers, accent: "blue" },
  { label: "Impact", icon: Zap, accent: "cyan" },
];

/* ---------------------------------------------------------
   Testimonials
   --------------------------------------------------------- */
export const testimonials = [
  {
    quote: "We now have an attractive and user-friendly website to present our tourism services. The design captures the travel experience and makes it easier for visitors to explore destinations and tour packages.",
    org: "Bhadradri Papikondalu",
    mono: "BP",
    accent: "orange" as Accent,
  },
  {
    quote: "We now have a structured digital learning portal for our training programs. It brings courses, topics, practice questions, and student progress together in one place, creating a more organized learning experience.",
    org: "SSR Institute",
    mono: "SSR",
    accent: "blue" as Accent,
  },
  {
    quote: "Our new website gives us a professional online presence and presents our legal services clearly. The clean layout makes information easy to navigate and helps visitors learn more about our firm.",
    org: "Sreenivasa Law Firm",
    mono: "SL",
    accent: "red" as Accent,
  },
];

/* ---------------------------------------------------------
   Insights — sample articles, dates are illustrative
   --------------------------------------------------------- */
export const insights = [
  {
    title: "How AI is changing business automation",
    excerpt:
      "From document handling to customer support, where intelligent workflows actually save time — and where they don't.",
    category: "AI & Automation",
    date: "2026-09-18",
    readTime: "6 min read",
    image: "/images/insight-ai.jpg",
    alt: "Abstract visual of artificial intelligence",
    accent: "orange" as Accent,
  },
  {
    title: "Why scalable architecture matters for growing businesses",
    excerpt: "The decisions that keep a product fast and affordable as usage grows.",
    category: "Engineering",
    date: "2026-08-29",
    readTime: "5 min read",
    image: "/images/insight-architecture.jpg",
    alt: "Modern glass office towers",
    accent: "blue" as Accent,
  },
  {
    title: "Digital transformation in the tourism industry",
    excerpt: "How online booking and real-time availability change the guest experience.",
    category: "Tourism",
    date: "2026-08-06",
    readTime: "4 min read",
    image: "/images/insight-tourism.jpg",
    alt: "Mountain valley landscape",
    accent: "cyan" as Accent,
  },
];

/* ---------------------------------------------------------
   Contact + footer
   --------------------------------------------------------- */
export const ctaChecklist = ["Discuss your idea", "Get expert guidance", "Build the right solution", "Grow together"];

export const projectTypes = ["Web platform", "AI & automation", "Business system", "Digital growth", "Not sure yet"];

export const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "LMS Portal", href: "/products#lms-portal" },
      { label: "Restaurant Billing Software", href: "/products#restaurant-billing" },
      { label: "Coming Soon", href: "/products#more" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Platforms", href: "/services#web-platforms" },
      { label: "AI & Automation", href: "/services#ai-automation" },
      { label: "Backend Infrastructure", href: "/services#backend-infrastructure" },
      { label: "SEO & Marketing", href: "/services#offerings" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const socials: { name: "LinkedIn" | "GitHub" | "Instagram" | "YouTube"; href: string }[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/sabariyatech/" },
  { name: "GitHub", href: "https://github.com/SabariyaTech116" },
  { name: "Instagram", href: "https://instagram.com/sabariyatech" },
  { name: "YouTube", href: "https://youtube.com/@sabariyatech" },
];
