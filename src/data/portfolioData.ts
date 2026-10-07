export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full-Stack' | '3D & Creative' | 'AI / SaaS' | 'Mobile';
  tags: string[];
  metrics: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  accentColor: string;
  bulletPoints: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  deliverables: string[];
  popular?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Vasu",
    title: "Senior Full-Stack & Creative 3D Engineer",
    subheadline: "Crafting immersive 3D web experiences, robust full-stack architectures, and high-conversion digital products with relentless attention to craft.",
    bio: "I am a full-stack creative engineer with over 6 years of expertise building scalable cloud applications, generative 3D visualizers, and polished design systems. I bridge the gap between high-performance systems engineering and fluid, interactive human-computer interaction.",
    location: "Global / Remote",
    status: "Available for new ventures & contracts",
    email: "suvassuva8@gmail.com",
    phone: "95918135617",
    phoneFormatted: "+91 95918135617",
    github: "https://github.com/suvassuva",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    stats: [
      { label: "Years Experience", value: "6+" },
      { label: "Production Apps", value: "35+" },
      { label: "Open Source Stars", value: "1.2k+" },
      { label: "Client Satisfaction", value: "100%" },
    ]
  },
  techPills: [
    "Next.js 16",
    "React 19",
    "Three.js / R3F",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "GLSL Shaders",
    "Framer Motion"
  ],
  skillCategories: [
    {
      title: "3D & Creative Computing",
      iconName: "Cuboid",
      description: "WebGL, shader programming, spatial geometry, and reactive scene graphs.",
      skills: [
        { name: "Three.js / React Three Fiber", level: 96, highlight: true },
        { name: "GLSL / Custom Shaders", level: 85 },
        { name: "Blender 3D Asset Pipeline", level: 80 },
        { name: "Drei & Canvas Postprocessing", level: 92, highlight: true },
        { name: "Physics (Rapier / Cannon)", level: 82 }
      ]
    },
    {
      title: "Frontend Architecture",
      iconName: "Layout",
      description: "Pixel-perfect interfaces, smooth micro-interactions, and high performance.",
      skills: [
        { name: "Next.js (App Router & SSR)", level: 98, highlight: true },
        { name: "TypeScript & Strict Typing", level: 95, highlight: true },
        { name: "Tailwind CSS v4 & Tokens", level: 96 },
        { name: "Framer Motion & Spring Physics", level: 92 },
        { name: "State (Zustand / TanStack)", level: 94 }
      ]
    },
    {
      title: "Backend & Cloud Systems",
      iconName: "Server",
      description: "Resilient APIs, streaming services, serverless endpoints, and relational databases.",
      skills: [
        { name: "Node.js / Express / Fastify", level: 92 },
        { name: "PostgreSQL / Prisma / Drizzle", level: 90, highlight: true },
        { name: "REST & GraphQL APIs", level: 94 },
        { name: "Redis Caching & Queues", level: 85 },
        { name: "Docker & AWS / Vercel Edge", level: 88 }
      ]
    },
    {
      title: "UI/UX & Design Systems",
      iconName: "Sparkles",
      description: "Design-first thinking, typography, accessibility, and micro-delights.",
      skills: [
        { name: "Figma Component Architecture", level: 90 },
        { name: "Glassmorphism & Dark Aesthetics", level: 96, highlight: true },
        { name: "WCAG Accessibility (a11y)", level: 88 },
        { name: "Responsive Motion Choreography", level: 93 }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "hyperion-3d-studio",
      title: "Hyperion WebGL Engine",
      tagline: "Procedural 3D scene builder & spatial canvas in the browser",
      description: "A production WebGL sandbox enabling creatives to compose multi-light 3D environments, apply PBR materials, and export optimized assets in real time with 60 FPS performance.",
      category: "3D & Creative",
      tags: ["Next.js", "Three.js", "R3F", "GLSL", "TypeScript", "Zustand"],
      metrics: "60 FPS on mobile • 150ms TTFB",
      liveUrl: "https://example.com/hyperion",
      githubUrl: "https://github.com/suvassuva/vasug",
      featured: true,
      accentColor: "#FFB800",
      bulletPoints: [
        "Architected declarative Three.js component tree using React Three Fiber and customized Drei camera rigs",
        "Engineered real-time HDR environment reflections and dynamic bloom shader passes with throttled render loops",
        "Delivered responsive controls with smooth lerping mouse parallax and touch gestures"
      ]
    },
    {
      id: "nexus-ai-orchestrator",
      title: "Nexus Enterprise AI Console",
      tagline: "Autonomous agent execution engine with streaming graph visuals",
      description: "An enterprise workflow automation dashboard that visualizes LLM agent clusters with interactive node networks, token expenditure analytics, and latency telemetry.",
      category: "AI / SaaS",
      tags: ["React 19", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "SSE"],
      metrics: "450k+ daily events • Sub-50ms latency",
      liveUrl: "https://example.com/nexus",
      githubUrl: "https://github.com/suvassuva/vasug",
      featured: true,
      accentColor: "#38BDF8",
      bulletPoints: [
        "Built real-time streaming UI with Server-Sent Events (SSE) and reactive SVG force-directed graphs",
        "Engineered role-based access control, encrypted key vaults, and multi-tenant telemetry dashboards",
        "Decreased initial bundle size by 42% through code-splitting and dynamic route modules"
      ]
    },
    {
      id: "aurora-fintech-exchange",
      title: "Aurora Crypto & Asset Terminal",
      tagline: "High-frequency trade visualization & algorithmic portfolio management",
      description: "A real-time trading interface engineered for algorithmic traders featuring zero-latency WebSockets, custom depth-of-market candles, and interactive order book heatmaps.",
      category: "Full-Stack",
      tags: ["TypeScript", "WebSockets", "Canvas API", "Tailwind CSS", "Redis"],
      metrics: "$12M+ monthly volume • 99.99% uptime",
      liveUrl: "https://example.com/aurora",
      githubUrl: "https://github.com/suvassuva/vasug",
      featured: true,
      accentColor: "#10B981",
      bulletPoints: [
        "Constructed hardware-accelerated 2D canvas charting engine handling 10,000+ data ticks per second",
        "Integrated dual-redundant WebSocket feeds with automatic reconnect backoff and client cache",
        "Achieved 100/100 Lighthouse performance score with zero CLS layout shifts"
      ]
    },
    {
      id: "chronos-design-system",
      title: "Chronos Design System",
      tagline: "Multi-brand component system with accessibility and dark-mode tokens",
      description: "An open-source tokenized design system built with Radix UI, Tailwind CSS, and Framer Motion, power-fueling 12+ digital applications with unified themes.",
      category: "Full-Stack",
      tags: ["React", "Storybook", "Tailwind CSS", "Radix UI", "npm Package"],
      metrics: "12,000+ weekly npm downloads",
      liveUrl: "https://example.com/chronos",
      githubUrl: "https://github.com/suvassuva/vasug",
      featured: false,
      accentColor: "#A855F7",
      bulletPoints: [
        "Published comprehensive component library with 45+ accessible primitives and comprehensive unit test coverage",
        "Engineered dynamic CSS custom property theming engine supporting dark/cyber/light themes",
        "Built automated visual regression testing pipeline via GitHub Actions"
      ]
    }
  ] as Project[],
  services: [
    {
      id: "3d-web",
      title: "Immersive 3D Web Experiences",
      iconName: "Boxes",
      description: "Elevate your brand beyond flat layouts. We craft interactive 3D hero stages, interactive product configurators, and gamified web portals that drive unprecedented dwell times.",
      deliverables: ["Three.js / WebGL Scene Setup", "Interactive Physics & Mouse Parallax", "Optimized 60 FPS Mobile Fallback", "Custom GLSL Shader Effects"],
      popular: true
    },
    {
      id: "fullstack-apps",
      title: "Full-Stack Application Development",
      iconName: "Code2",
      description: "End-to-end web apps engineered for scale. From schema design to edge-rendered frontends, we deliver lightning-fast architectures with bulletproof TypeScript.",
      deliverables: ["Next.js App Router Architecture", "PostgreSQL / Prisma Database Design", "Secure Auth & Stripe Billing", "Automated CI/CD Deployment"],
      popular: false
    },
    {
      id: "landing-pages",
      title: "High-Conversion Landing Pages",
      iconName: "TrendingUp",
      description: "Turn clicks into loyal customers with meticulously choreographed landing pages that tell an unforgettable visual story while maintaining ultra-fast load times.",
      deliverables: ["Fluid Framer Motion Choreography", "Comprehensive SEO Meta & OpenGraph", "Analytics & Conversion Funnels", "Core Web Vitals Optimization"],
      popular: false
    },
    {
      id: "consulting-performance",
      title: "Architecture & Performance Audits",
      iconName: "Gauge",
      description: "Diagnose rendering bottlenecks, memory leaks in 3D canvases, slow API endpoints, and bundle bloat to elevate your existing platform to enterprise grade.",
      deliverables: ["Lighthouse 95+ Audit & Fixes", "Canvas Garbage Collection Tuning", "Bundle Splitting & Edge Caching", "Architectural Modernization Plan"],
      popular: false
    }
  ] as Service[],
  experience: [
    {
      period: "2023 — Present",
      role: "Lead Creative Technologist & Full-Stack Architect",
      company: "Vortex Digital Labs",
      location: "San Francisco, CA (Remote)",
      description: "Lead technical development of spatial web applications, interactive AI portals, and high-load SaaS platforms for global enterprise clients.",
      achievements: [
        "Architected 3D product showcase yielding 38% increase in customer conversions for consumer tech client",
        "Mentored team of 8 frontend and 3D developers across clean code standards and WebGL performance",
        "Pioneered Next.js 15+ migration saving 25% server rendering compute cost"
      ],
      technologies: ["Next.js", "React 19", "Three.js", "TypeScript", "Tailwind CSS", "AWS"]
    },
    {
      period: "2021 — 2023",
      role: "Senior Frontend Engineer",
      company: "Synapse Interactive",
      location: "New York, NY",
      description: "Spearheaded frontend design systems, interactive dashboards, and real-time data streaming architectures.",
      achievements: [
        "Engineered proprietary Canvas visualization library processing 100k data points smoothly",
        "Reduced initial bundle load time from 4.2s to 1.1s through tree-shaking and dynamic imports",
        "Built award-winning interactive annual report experienced by 500,000+ unique visitors"
      ],
      technologies: ["React", "TypeScript", "Framer Motion", "D3.js", "Tailwind CSS", "Node.js"]
    },
    {
      period: "2019 — 2021",
      role: "Full-Stack Software Engineer",
      company: "Apex Studio",
      location: "Austin, TX",
      description: "Built scalable web applications, REST APIs, and responsive mobile-first client experiences.",
      achievements: [
        "Engineered 14 production client websites from wireframe to deployment on Vercel/AWS",
        "Integrated multi-currency Stripe checkout pipelines and automated CRM webhooks",
        "Standardized component library reducing new feature development turnaround by 40%"
      ],
      technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "GraphQL", "Docker"]
    }
  ] as Experience[],
  testimonials: [
    {
      quote: "Vasu transformed our vision into an astonishing 3D web experience. The fluid animations and speed blew our investors away. Truly a master of both creative design and hardcore engineering.",
      author: "Elena Rostova",
      role: "Founder & CEO, Hyperion Spatial",
      avatar: "ER"
    },
    {
      quote: "Rarely do you find an engineer who can write high-performance backend systems and also build award-winning 3D frontend graphics. Vasu is in that top 1% bracket.",
      author: "Marcus Vance",
      role: "VP of Product, Nexus Automations",
      avatar: "MV"
    }
  ]
};
