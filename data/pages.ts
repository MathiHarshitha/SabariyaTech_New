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
  Link2,
  Megaphone,
  Monitor,
  PenLine,
  Search,
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
export type CatalogId = "linkfix" | "ai-editor" | "institute-portal" | "more";

export const catalog: {
  id: CatalogId;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  audience: string;
  icon: LucideIcon;
  accent: Accent;
  status: "Available" | "Coming soon";
}[] = [
  {
    id: "institute-portal",
    name: "Institute Portal",
    tagline: "One portal to run your school, college or training institute.",
    description:
      "Admissions, students, staff, attendance, fees, exams and online learning — together in a single, secure portal with separate logins for admins, faculty, students and parents.",
    features: [
      "Online admissions & enquiries",
      "Student & staff records",
      "Attendance & timetables",
      "Fee collection & receipts",
      "Exams, results & certificates",
      "Courses, quizzes & study material",
    ],
    audience: "Schools · Colleges · Coaching & training institutes",
    icon: GraduationCap,
    accent: "indigo",
    // TODO: confirm availability and final feature list with the product team
    status: "Available",
  },
  {
    id: "linkfix",
    name: "LinkFix",
    tagline: "WordPress link management & website optimization tool.",
    description:
      "Find broken links, manage redirects and keep your WordPress site healthy from a single dashboard — so visitors and search engines never hit a dead end.",
    features: ["Broken link scanning", "Redirect management", "Site health overview", "Scheduled scans", "Exportable reports"],
    audience: "WordPress site owners · Agencies · Content teams",
    icon: Link2,
    accent: "orange",
    status: "Available",
  },
  {
    id: "ai-editor",
    name: "AI Editor",
    tagline: "AI-powered content creation platform.",
    description:
      "Draft, rewrite and refine content with an assistant that works alongside you in the editor — keeping your tone while saving hours every week.",
    features: ["In-editor AI assistant", "Rewrite & tone controls", "Outlines and SEO keywords", "Translation", "Draft history"],
    audience: "Marketers · Writers · Content teams",
    icon: PenLine,
    accent: "cyan",
    status: "Available",
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
   Projects — live client work
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
  url: string;
  accent: Accent;
  image?: string;
}[] = [
  {
    title: "Bhadradri Papikondalu",
    sector: "Tourism",
    description: "Premium real estate and tourism portal showcasing properties and destinations.",
    features: ["Property listings", "Virtual tours", "Booking system"],
    url: "https://www.bhadradripapikondalu.com/",
    accent: "orange",
    image: "/images/work-papikondalu.jpg",
  },
  {
    title: "Mana Papikondalu",
    sector: "Tourism",
    description: "Tourism platform for the Papikondalu region with packages and travel guides.",
    features: ["Tour packages", "Online booking", "Travel guides"],
    url: "https://www.manapapikondalu.com/",
    accent: "cyan",
  },
  {
    title: "Viswa Bharathi Law",
    sector: "Legal",
    description: "Professional law firm website with practice areas, attorney profiles and consultation booking.",
    features: ["Practice areas", "Attorney profiles", "Consultation booking"],
    url: "https://viswabharathilaw.edu.in/",
    accent: "red",
    image: "/images/work-law.jpg",
  },
  {
    title: "SSR Institute",
    sector: "Education",
    description: "Institute website with course listings, admissions and faculty profiles.",
    features: ["Course listings", "Admissions portal", "Faculty profiles"],
    url: "https://www.ssrinstitute.in/",
    accent: "blue",
    image: "/images/work-lms.jpg",
  },
  {
    title: "Anantha Education",
    sector: "Education",
    description: "Education group website with programme showcase, admissions and a student portal.",
    features: ["Programme showcase", "Admissions system", "Student portal"],
    url: "https://anantha.edu.in/wp/",
    accent: "indigo",
    image: "/images/work-school.jpg",
  },
  {
    title: "SSR MTM Hotel",
    sector: "Hospitality",
    description: "Hotel website with room listings, amenities and guest management.",
    features: ["Room listings", "Amenities showcase", "Guest management"],
    url: "https://ssrmtm.com/",
    accent: "orange",
  },
  {
    title: "OneWrap",
    sector: "Design",
    description: "Studio website with portfolio, service packages and client collaboration.",
    features: ["Portfolio showcase", "Service packages", "Client collaboration"],
    url: "https://www.onewrap.in/",
    accent: "indigo",
  },
  {
    title: "Sreenivas Legal Solutions",
    sector: "Legal",
    description: "Legal services platform for consultations, documents and case tracking.",
    features: ["Legal consultation", "Document management", "Case tracking"],
    url: "https://www.sreenivaslegalsolutions.in/",
    accent: "blue",
  },
  {
    title: "SLS IT Skillup",
    sector: "Education",
    description: "IT training platform with a course catalogue, hands-on projects and career guidance.",
    features: ["Course catalogue", "Hands-on projects", "Career guidance"],
    url: "https://slsitskillup.vercel.app/",
    accent: "cyan",
  },
  {
    title: "Rolls & Rattles",
    sector: "E-commerce",
    description: "Online store with product catalogue, secure checkout and doorstep delivery.",
    features: ["Product catalogue", "Secure checkout", "Doorstep delivery"],
    url: "https://rollsandrattles.in/",
    accent: "red",
  },
  {
    title: "Sri Geetha Eye Hospitals",
    sector: "Healthcare",
    description: "Hospital website with departments, doctor profiles and appointment booking.",
    features: ["Departments", "Doctor profiles", "Appointment booking"],
    url: "https://srigeethaeyehospitals.com/",
    accent: "cyan",
  },
  {
    title: "Vijay Developer",
    sector: "Real Estate",
    description: "Real estate & construction website with layouts, amenities and site-visit booking.",
    features: ["Project layouts", "Amenities showcase", "Site visit booking"],
    url: "https://vijayadeveloper.com/",
    accent: "orange",
  },
];

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
    role: "Technical Head",
    image: "/team/posibabu.png",
    short: "Leading the technical vision and architecture behind every product we build.",
    about:
      "Leading the technical vision and architecture behind every product SabariyaTech builds. Focused on scalable systems, clean code and long-term engineering excellence, he drives engineering strategy and leads the team in delivering production-ready solutions for clients across multiple industries.",
    tags: ["System Architecture", "Full Stack", "DevOps"],
    skills: ["System Architecture", "Next.js", "React", "Node.js", "TypeScript", "Cloud Infrastructure", "API Design", "DevOps", "Database Design", "Performance Optimization"],
    accent: "orange",
    linkedin: "https://www.linkedin.com/in/posibabu-yalla-a05746305/",
  },
  {
    slug: "harshitha-mathi",
    name: "Harshitha Mathi",
    role: "Web Developer & Project Engineer",
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
