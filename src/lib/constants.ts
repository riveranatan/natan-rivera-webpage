export const SITE_CONFIG = {
  name: "Natan Rivera",
  title: "Natan Rivera — Engineer, Builder, Athlete",
  description:
    "Software engineer, MEP project manager, and national record holder. Building AI products, fitness tech, and tools for Latin America.",
  url: "https://natanrivera.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/natanrivera",
  linkedin: "https://linkedin.com/in/natanrivera",
  instagram: "https://instagram.com/natanrivera",
  youtube: "https://youtube.com/@natanrivera",
  facebook: "https://facebook.com/natanrivera",
  email: "mailto:hello@natanrivera.com",
} as const;

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
  status: "live" | "building" | "archived";
}

export const PROJECTS: Project[] = [
  {
    title: "WORKA",
    description:
      "All-in-one AI fitness coach app. Solo-built from ground up — React Native/Expo mobile app, TypeScript backend, AI coaching agent with LangGraph, wearable integrations (Apple Health, BLE sensors). 22 paying users.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "LangGraph",
      "AI Agent",
      "BLE",
      "Apple Health",
    ],
    image: "/images/worka.png",
    live: "https://workaapp.io",
    status: "live",
  },
  {
    title: "Fit Instinct",
    description:
      "Fitness studio website and online sales system. Built the site, booking flow for free trial classes, and the sales pipeline. Next.js with biometric data integration via Uptivo.",
    tags: ["Next.js", "React", "Uptivo", "Framer Motion", "Bootstrap"],
    image: "/images/fitinstinct.png",
    live: "https://fit-instinct.com",
    status: "live",
  },
  {
    title: "BLE Heart Rate Platform",
    description:
      "Vertically integrated heart rate tracking system — BLE/ANT+ sensors on Raspberry Pi feeding real-time workout data into our own CRM. Full stack ownership from sensor to dashboard, no third-party dependencies.",
    tags: [
      "Raspberry Pi",
      "BLE",
      "ANT+",
      "Python",
      "Real-time",
      "Hardware",
    ],
    image: "/images/hr-platform.png",
    status: "building",
  },
  {
    title: "CuentasClara",
    description:
      "Free financial tracking tool for Salvadorans — a budgeting platform similar to Monarch for managing income and expenses. Built to solve the lack of accessible personal finance tools in Central America.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Fintech"],
    image: "/images/cuentasclara.png",
    live: "https://cuentasclara.io",
    status: "live",
  },
  {
    title: "Noah AI — Second Brain",
    description:
      "AI-powered note organizer inspired by Cursor but for notes. Built agentic functions with LangGraph, RAG pipeline with vector embeddings (Milvus), and a knowledge graph (Neo4j) for automatic note linking and retrieval.",
    tags: ["LangGraph", "RAG", "Milvus", "Neo4j", "Python", "AI Agents"],
    image: "/images/noah-ai.png",
    status: "archived",
  },
];
