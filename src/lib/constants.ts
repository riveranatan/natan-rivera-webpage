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
  github: "https://github.com/riveranatan",
  linkedin: "https://linkedin.com/in/natan-rivera",
  instagram: "https://www.instagram.com/riveranatan/",
  youtube: "https://www.youtube.com/@NatanRiveraESA",
  facebook: "https://www.facebook.com/natan.riveraalas",
  email: "mailto:natan.rivera@fit-instinct.com",
} as const;

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  images?: string[];
  github?: string;
  live?: string;
  status: "live" | "building" | "archived";
}

export const PROJECTS: Project[] = [
  {
    title: "WORKA",
    description:
      "All-in-one AI fitness coach app. Solo-built from ground up — React Native/Expo mobile app, TypeScript backend, AI coaching agent with LangGraph, wearable integrations (Apple Watch, Apple Health, BLE sensors). 22 paying users.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "LangGraph",
      "AI Agent",
      "BLE",
      "Apple Watch",
      "Apple Health",
    ],
    image: "/images/worka.png",
    images: [
      "/images/worka/workadashboard.PNG",
      "/images/worka/workahrresult.PNG",
      "/images/worka/workarun.PNG",
    ],
    live: "https://workaapp.io",
    status: "live",
  },
  {
    title: "Fit Instinct",
    description:
      "Co-founded and co-own this fitness studio brand with my brother. Built the website, booking flow, free trial funnel, and sales pipeline. Currently vertically integrating with biometric tracking (Uptivo) and planning expansion.",
    tags: ["Next.js", "React", "Uptivo", "Framer Motion", "Bootstrap"],
    image: "/images/fitinstinct.png",
    images: [
      "/images/fitinstinct/fitinstinct_background.jpg",
      "/images/fitinstinct/boxsession.jpg",
      "/images/fitinstinct/coach.jpg",
    ],
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
      "TypeScript",
      "Real-time",
      "Hardware",
    ],
    image: "/images/ANTScreen.PNG",
    images: [
      "/images/ANTScreen.PNG",
      "/images/raspberryPI.jpg",
    ],
    status: "building",
  },
  {
    title: "CuentasClara",
    description:
      "Free financial tracking tool for Salvadorans — a budgeting platform similar to Monarch for managing income and expenses. Built to solve the lack of accessible personal finance tools in Central America.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Fintech"],
    image: "/images/cuentaclara.png",
    live: "https://cuentaclara.io",
    status: "live",
  },
  {
    title: "Noah AI — Second Brain",
    description:
      "AI-powered note organizer inspired by Cursor but for notes. Built agentic functions with LangGraph, RAG pipeline with vector embeddings (Milvus), and a knowledge graph (Neo4j) for automatic note linking and retrieval.",
    tags: ["LangGraph", "RAG", "Milvus", "Neo4j", "Python", "AI Agents"],
    image: "/images/noah-ai.png",
    images: [
      "/images/noah/noah.PNG",
      "/images/noah/noahagent.png",
    ],
    status: "archived",
  },
];

export interface EngineeringProject {
  title: string;
  role: string;
  description: string;
  scope: string[];
}

export const ENGINEERING_PROJECTS: EngineeringProject[] = [
  {
    title: "AESC 30GWh Gigafactory",
    role: "MEP Assistant Project Manager",
    description:
      "South Carolina — EV battery gigafactory for AESC. Led mechanical scope across a massive advanced manufacturing facility.",
    scope: [
      "Mechanical Systems for Central Utility Plant",
      "Fire Protection (all buildings)",
      "Building Control Systems",
      "Process Mechanical Systems",
    ],
  },
  {
    title: "Rivian Manufacturing Facility",
    role: "MEP Assistant Project Manager",
    description:
      "Normal, Illinois — MEP buildout for Rivian's manufacturing and storage expansion.",
    scope: [
      "Mechanical Buildout",
      "Electrical Buildout",
      "Manufacturing Space",
      "Storage Facilities",
    ],
  },
  {
    title: "Data Center — Confidential",
    role: "MEP Assistant Project Manager",
    description:
      "Confidential client — MEP scope for hyperscale data center infrastructure.",
    scope: ["MEP Systems", "Critical Infrastructure"],
  },
];
