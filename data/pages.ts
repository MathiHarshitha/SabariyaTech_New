import {
  Anchor,
  Bot,
  Box,
  Boxes,
  Cloud,
  Compass,
  Gauge,
  GraduationCap,
  HeartHandshake,
  Megaphone,
  Monitor,
  Search,
  Receipt,
  Server,
  ShieldCheck,
  Smartphone,
  Sprout,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Accent } from "@/lib/accents";

/* ---------------------------------------------------------
   About
   --------------------------------------------------------- */
export const about = {
  story:
    "The name Sabariya is inspired by the Sabari River — a river that flows with steady purpose through the landscape. It doesn't rush and it doesn't stop. That is how we want to build: calm, consistent and dependable, so the systems we hand over keep running long after launch.",
  mission: "To build secure, scalable and performance-driven digital systems that businesses can rely on with confidence.",
  vision: "To grow into a structured engineering partner known for stability, long-term thinking and dependable technology solutions.",
};

export const aboutValues: { title: string; body: string; icon: LucideIcon; accent: Accent }[] = [
  { title: "Steady flow", body: "Predictable delivery, clear milestones and no surprises along the way.", icon: Waves, accent: "cyan" },
  { title: "Resilience", body: "Systems designed to handle growth, traffic spikes and change.", icon: ShieldCheck, accent: "blue" },
  { title: "Unwavering support", body: "We stay with you after launch — maintaining, improving and scaling.", icon: HeartHandshake, accent: "orange" },
  { title: "Long-term thinking", body: "Clean architecture today so tomorrow's features are easy to add.", icon: Anchor, accent: "indigo" },
];

/* ---------------------------------------------------------
   Services
   --------------------------------------------------------- */
export const coreServices: {
  id: string;
  title: string;
  body: string;
  icon: LucideIcon;
  accent: Accent;
  deliverables: string[];
}[] = [
  {
    id: "web-platforms",
    title: "Web Platform Development",
    body: "Custom web applications and SaaS platforms built with performance, security and scalability at the core.",
    icon: Monitor,
    accent: "blue",
    deliverables: ["Custom web applications", "SaaS platforms", "Admin dashboards", "Performance optimization"],
  },
  {
    id: "ai-automation",
    title: "AI Systems & Intelligent Automation",
    body: "AI-powered agents and workflow automation that streamline operations and enhance decision-making.",
    icon: Bot,
    accent: "orange",
    deliverables: ["AI agents", "Workflow automation", "AI integrations", "Data-driven systems"],
  },
  {
    id: "backend-infrastructure",
    title: "Scalable Backend Infrastructure",
    body: "Robust backend systems designed to handle growth and maintain reliability at scale.",
    icon: Server,
    accent: "cyan",
    deliverables: ["API development", "System architecture", "Database design", "Performance tuning"],
  },
];

export const offerings: { title: string; body: string; icon: LucideIcon; accent: Accent }[] = [
  { title: "Website Development", body: "High-performance, scalable websites that load fast and rank well.", icon: Monitor, accent: "blue" },
  { title: "App Development", body: "Cross-platform mobile and web applications your users enjoy.", icon: Smartphone, accent: "indigo" },
  { title: "AI Agents", body: "Intelligent assistants and automations that take work off your plate.", icon: Bot, accent: "orange" },
  { title: "SEO & Marketing", body: "Growth-focused digital strategies that bring qualified traffic.", icon: Megaphone, accent: "red" },
  { title: "SaaS Products", body: "Custom, scalable software products built for recurring value.", icon: Boxes, accent: "cyan" },
  { title: "Cloud Infrastructure", body: "Scalable deployment, monitoring and DevOps you can rely on.", icon: Cloud, accent: "blue" },
];

export const supportServices: { title: string; icon: LucideIcon }[] = [
  { title: "Digital Marketing Strategy", icon: Megaphone },
  { title: "Performance Optimization", icon: Gauge },
  { title: "Technical Consulting", icon: Compass },
  { title: "System Audits", icon: Search },
];

/* ---------------------------------------------------------
   Products
   --------------------------------------------------------- */
export type CatalogId = "lms-portal" | "restaurant-billing" | "more";

export const catalog: {
  id: CatalogId;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  audience: string;
  icon: LucideIcon;
  accent: Accent;
  status: "Live · in use" | "In development" | "Coming soon";
  url?: string;
}[] = [
  {
    id: "lms-portal",
    name: "LMS Portal",
    tagline: "A live learning platform built for institutes.",
    description:
      "We developed and deployed this portal to support structured learning, course management, student progress tracking, quizzes and coding practice. Its learning workflows are actively used by institutes.",
    features: [
      "Structured course delivery",
      "Course management",
      "Student progress tracking",
      "Quizzes & coding practice",
    ],
    audience: "Institutes and their learners",
    icon: GraduationCap,
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
    audience: "Restaurants",
    icon: Receipt,
    accent: "orange",
    status: "In development",
  },
  {
    id: "more",
    name: "More Products",
    tagline: "We're building more tools to make work simpler and smarter.",
    description: "New tools are in development. Get in touch to hear about them first or to suggest a problem worth solving.",
    features: ["In development", "Early access on request"],
    audience: "Businesses and teams of every size",
    icon: Box,
    accent: "red",
    status: "Coming soon",
  },
];

/* ---------------------------------------------------------
   Projects
   --------------------------------------------------------- */
export type Sector =
  | "Tourism"
  | "Education"
  | "Legal"
  | "Hospitality"
  | "Healthcare"
  | "Real Estate"
  | "E-commerce"
  | "Design";

export const portfolio: {
  title: string;
  sector: Sector;
  description: string;
  features: string[];
  url?: string;
  accent: Accent;
  image?: string;
  status?: "In development";
}[] = [
  {
    title: "Bhadradri Papikondalu",
    sector: "Tourism",
    description: "Premium real estate and tourism portal showcasing properties and destinations.",
    features: ["Property listings", "Virtual tours", "Booking system"],
    url: "https://www.bhadradripapikondalu.com/",
    accent: "orange",
    image: "/images/project-logos/Bhadradri papikondalu-logos.png",
  },
  {
    title: "Mana Papikondalu",
    sector: "Tourism",
    description: "Tourism platform for the Papikondalu region with packages and travel guides.",
    features: ["Tour packages", "Online booking", "Travel guides"],
    url: "https://www.manapapikondalu.com/",
    accent: "cyan",
    image: "/images/project-logos/papikondalu-logo.webp",
  },
  {
    title: "Viswa Bharathi Law",
    sector: "Legal",
    description: "Professional law firm website with practice areas, attorney profiles and consultation booking.",
    features: ["Practice areas", "Attorney profiles", "Consultation booking"],
    url: "https://viswabharathilaw.edu.in/",
    accent: "red",
    image: "/images/project-logos/Viswabharathi-logo.webp",
  },
  {
    title: "SSR Institute",
    sector: "Education",
    description: "Institute website with course listings, admissions and faculty profiles.",
    features: ["Course listings", "Admissions portal", "Faculty profiles"],
    url: "https://www.ssrinstitute.in/",
    accent: "blue",
    image: "/images/project-logos/ssr-institute-logo.png",
  },
  {
    title: "Anantha Education",
    sector: "Education",
    description: "Education group website with programme showcase, admissions and a student portal.",
    features: ["Programme showcase", "Admissions system", "Student portal"],
    url: "https://anantha.edu.in/wp/",
    accent: "indigo",
    image: "/images/project-logos/Anantha Logo.webp",
  },
  {
    title: "SSR MTM Hotel",
    sector: "Hospitality",
    description: "Hotel website with room listings, amenities and guest management.",
    features: ["Room listings", "Amenities showcase", "Guest management"],
    url: "https://ssrmtm.com/",
    accent: "orange",
    image: "/images/project-logos/SSRMTM-LOGO.jpeg",
  },
  {
    title: "OneWrap",
    sector: "Design",
    description: "Studio website with portfolio, service packages and client collaboration.",
    features: ["Portfolio showcase", "Service packages", "Client collaboration"],
    url: "https://www.onewrap.in/",
    accent: "indigo",
    image: "/images/project-logos/Onewrap-logo.avif",
  },
  {
    title: "Sreenivas Legal Solutions",
    sector: "Legal",
    description: "Legal services platform for consultations, documents and case tracking.",
    features: ["Legal consultation", "Document management", "Case tracking"],
    url: "https://www.sreenivaslegalsolutions.in/",
    accent: "blue",
    image: "/images/project-logos/sreenivas-legal-solutions-logo.webp",
  },
  {
    title: "SLS IT Skillup",
    sector: "Education",
    description: "IT training platform with a course catalogue, hands-on projects and career guidance.",
    features: ["Course catalogue", "Hands-on projects", "Career guidance"],
    url: "https://slsitskillup.vercel.app/",
    accent: "cyan",
    image: "/images/project-logos/SLSIT-Logo.png",
  },
  {
    title: "Rolls & Rattles",
    sector: "E-commerce",
    description: "Online store with product catalogue, secure checkout and doorstep delivery.",
    features: ["Product catalogue", "Secure checkout", "Doorstep delivery"],
    url: "https://rollsandrattles.in/",
    accent: "red",
    image: "/images/project-logos/rolls-and-rattles-logo.webp",
  },
  {
    title: "Sri Geetha Eye Hospitals",
    sector: "Healthcare",
    description: "Hospital website with departments, doctor profiles and appointment booking.",
    features: ["Departments", "Doctor profiles", "Appointment booking"],
    url: "https://srigeethaeyehospitals.com/",
    accent: "cyan",
    image: "/images/project-logos/sri-geetha-eye-hospitals-logo.webp",
  },
  {
    title: "Vijay Developer",
    sector: "Real Estate",
    description: "Real estate & construction website with layouts, amenities and site-visit booking.",
    features: ["Project layouts", "Amenities showcase", "Site visit booking"],
    url: "https://vijayadeveloper.com/",
    accent: "orange",
    image: "/images/project-logos/vijaya-developer-logo.webp",
  },
  {
    title: "Chaitanya Dental Care",
    sector: "Healthcare",
    description: "Project currently in development.",
    features: [],
    accent: "cyan",
    image: "/images/project-logos/Chaitanyadentalcare-logo.avif",
    status: "In development",
  },
];

export const liveProjectCount = portfolio.filter((project) => Boolean(project.url)).length;

/* ---------------------------------------------------------
   Team
   --------------------------------------------------------- */
export type Member = {
  slug: string;
  name: string;
  role: string;
  image: string;
  short: string;
  about: string;
  tags: string[];
  skills: string[];
  accent: Accent;
  linkedin?: string;
};

export const team: Member[] = [
  {
    slug: "posibabu-yalla",
    name: "Posibabu Yalla",
    role: "Founder",
    image: "/team/Posibabu_Yalla.jpeg",
    short: "Founder of SabariyaTech — driving the technical vision and architecture behind every product we build.",
    about:
      "Founder of SabariyaTech. Focused on scalable systems, clean code and long-term engineering excellence, he drives the technical vision and architecture behind every product SabariyaTech builds — leading the team in delivering production-ready solutions for clients across multiple industries.",
    tags: ["System Architecture", "Full Stack", "DevOps"],
    skills: ["System Architecture", "Next.js", "React", "Node.js", "TypeScript", "Cloud Infrastructure", "API Design", "DevOps", "Database Design", "Performance Optimization"],
    accent: "orange",
    linkedin: "https://www.linkedin.com/in/posibabu-yalla-a05746305/",
  },
  {
    slug: "harshitha-mathi",
    name: "Harshitha Mathi",
    role: "Full Stack Developer",
    image: "/team/harshitha.png",
    short: "Crafting high-performance web experiences with a focus on clean, scalable code.",
    about:
      "Crafting high-performance web experiences with a focus on clean, scalable code. Harshitha bridges the gap between design and engineering — building fast, accessible and visually compelling web applications, translating client needs into working code and managing timelines and deliverables so every project runs smoothly.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design", "Responsive Design", "JavaScript", "HTML/CSS", "Project Management", "Git"],
    accent: "blue",
    linkedin: "https://www.linkedin.com/in/harshithamathi/",
  },
  {
    slug: "jogi-naidu-surla",
    name: "Jogi Naidu Surla",
    role: "Data Scientist",
    image: "/team/jogi.png",
    short: "Turning raw data into actionable insights that drive smarter business decisions.",
    about:
      "Turning raw data into actionable insights that drive smarter business decisions. Jogi specialises in data pipelines, predictive models and analytics dashboards, using statistical analysis and machine learning to find patterns in complex datasets.",
    tags: ["Python", "ML", "Data Analysis"],
    skills: ["Python", "Data Analysis", "Machine Learning", "Pandas", "NumPy", "SQL", "Data Visualization", "Statistical Modeling", "Scikit-learn", "Jupyter"],
    accent: "cyan",
  },
  {
    slug: "pavan-ayithireddy",
    name: "Pavan Ayithireddy",
    role: "AI/ML Engineer",
    image: "/team/pavan.png",
    short: "Building intelligent systems and machine learning pipelines for real-world impact.",
    about:
      "Building intelligent systems and machine learning pipelines for real-world impact. Pavan focuses on production-grade ML — model training, fine-tuning and deploying AI agents that streamline business automation.",
    tags: ["LLMs", "PyTorch", "AI Agents"],
    skills: ["Python", "TensorFlow", "PyTorch", "LLMs", "NLP", "Computer Vision", "Deep Learning", "AI Agents", "LangChain", "Model Deployment"],
    accent: "indigo",
  },
  {
    slug: "bharath-yalla",
    name: "Bharath Yalla",
    role: "AI/ML Engineer",
    image: "/team/bharath.png",
    short: "Developing AI-powered solutions that automate and enhance business workflows.",
    about:
      "Developing AI-powered solutions that automate and enhance business workflows. Bharath builds intelligent automation systems and AI-integrated applications, designing ML solutions that reduce manual effort and deliver measurable value to clients.",
    tags: ["Deep Learning", "RAG", "MLOps"],
    skills: ["Python", "Machine Learning", "Deep Learning", "AI Automation", "RAG Systems", "OpenAI API", "Vector Databases", "FastAPI", "Docker", "MLOps"],
    accent: "orange",
  },
  {
    slug: "umamahesh",
    name: "UmaMahesh",
    role: "SEO Specialist",
    image: "/team/umamahesh.png",
    short: "Driving organic growth through data-driven SEO strategies and content optimization.",
    about:
      "Driving organic growth through data-driven SEO strategies and content optimization. UmaMahesh improves website visibility through technical and on-page optimization and content strategy, helping businesses earn sustainable, qualified traffic.",
    tags: ["On-Page SEO", "Analytics", "Content"],
    skills: ["On-Page SEO", "Technical SEO", "Keyword Research", "Google Analytics", "Search Console", "Content Strategy", "Link Building", "Local SEO", "SEO Audits", "Digital Marketing"],
    accent: "red",
  },
  {
    slug: "durga-prasad-tamarana",
    name: "Durga Prasad Tamarana",
    role: "Video Editor",
    image: "/team/prasad.png",
    short: "Creating compelling visual stories that communicate brand identity and value.",
    about:
      "Creating compelling visual stories that communicate brand identity and value. Durga Prasad turns raw footage and ideas into polished video — from promotional videos and product demos to social reels and explainer content.",
    tags: ["Premiere Pro", "After Effects", "Motion"],
    skills: ["Video Editing", "Adobe Premiere Pro", "After Effects", "Motion Graphics", "Color Grading", "Sound Design", "Reels & Shorts", "Brand Videos", "Storytelling", "DaVinci Resolve"],
    accent: "blue",
  },
  {
    slug: "sai-kiran-avusula",
    name: "Sai Kiran Avusula",
    role: "Project Consultant",
    image: "/team/Sai%20Kiran%20Avusula.png",
    short: "Project Consultant at SabariyaTech.",
    about:
      "Sai Kiran Avusula is a Project Consultant at SabariyaTech. Connect with him on LinkedIn for further professional details.",
    tags: ["Project Consulting"],
    skills: ["Project Consulting" ,  "Process Improvement", "Communication Skills", "Team Collaboration", "Problem Solving"],
    accent: "indigo",
    linkedin: "https://www.linkedin.com/in/sai-kiran-avusula-096655290/",
  },
];

/* ---------------------------------------------------------
   Careers
   --------------------------------------------------------- */
export const culture: { title: string; body: string; icon: LucideIcon; accent: Accent }[] = [
  { title: "Structured engineering culture", body: "Clean architecture, code reviews and a process that keeps quality high.", icon: Wrench, accent: "blue" },
  { title: "Ownership & responsibility", body: "Every team member contributes meaningfully to real client projects.", icon: ShieldCheck, accent: "orange" },
  { title: "Growth-oriented environment", body: "Work on evolving, scalable systems and grow a long-term career.", icon: Sprout, accent: "cyan" },
];

export const openings: { title: string; type: string; location: string; body: string; points: string[] }[] = [
  {
    title: "Digital Marketing Expert",
    type: "Full-time",
    location: "Vijayawada",
    body: "We're looking for a Digital Marketing Expert to drive growth and engagement for SabariyaTech and our clients.",
    points: ["Plan and run campaigns across digital channels", "Own SEO, social and performance marketing", "Report on results and keep improving them"],
  },
];

export const hiringSteps = [
  { title: "Application review", body: "We review your resume and background." },
  { title: "Initial discussion", body: "A conversation about your experience." },
  { title: "Skill assessment", body: "We evaluate your relevant skills." },
  { title: "Final conversation", body: "Meet the team and discuss next steps." },
];
