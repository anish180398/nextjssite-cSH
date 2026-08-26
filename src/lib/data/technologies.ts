import {
  Braces,
  Cloud,
  Database,
  FlameKindling,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface Technology {
  id: string;
  name: string;
  slug: string;
  category: string;
  icon: string;
  description: string;
  overview: string;
  useCases: string[];
  relatedServiceSlugs: string[];
}

// Curated from the real stacks already listed per-service in services.ts —
// not every tool we use (e.g. Figma, HubSpot), just the core languages/
// frameworks worth their own landing page, mirroring how services.ts is the
// single source of truth for /services.
export const technologies: Technology[] = [
  {
    id: "1",
    name: "React",
    slug: "react",
    category: "Frontend",
    icon: "Braces",
    description: "A component-based JavaScript library for building fast, interactive user interfaces.",
    overview:
      "React is our default choice for building interfaces that need to stay fast and maintainable as they grow. Its component model lets us break complex products into reusable, testable pieces, and its huge ecosystem means we rarely have to build core infrastructure from scratch.",
    useCases: [
      "Single-page applications and dashboards",
      "Design systems and reusable component libraries",
      "Progressive enhancement of existing sites",
    ],
    relatedServiceSlugs: ["web-development"],
  },
  {
    id: "2",
    name: "Next.js",
    slug: "nextjs",
    category: "Frontend",
    icon: "Braces",
    description: "The React framework we build most production sites on, for routing, rendering, and performance out of the box.",
    overview:
      "Next.js gives us server-side rendering, static generation, and file-based routing without hand-rolling build tooling. For client work, that translates into faster initial page loads, better SEO by default, and a shorter path from first commit to a production deploy.",
    useCases: [
      "Marketing sites that need strong SEO",
      "E-commerce storefronts",
      "Full-stack apps with API routes built in",
    ],
    relatedServiceSlugs: ["web-development", "ecommerce-solutions"],
  },
  {
    id: "3",
    name: "TypeScript",
    slug: "typescript",
    category: "Language",
    icon: "Braces",
    description: "Typed JavaScript that catches whole classes of bugs before code ever ships.",
    overview:
      "We write TypeScript by default on new projects. The upfront cost of typing data models and API contracts pays off many times over once a codebase has more than one contributor or needs to survive past the first release.",
    useCases: [
      "Large codebases maintained by multiple developers",
      "API contracts shared between frontend and backend",
      "Refactoring legacy JavaScript safely",
    ],
    relatedServiceSlugs: ["web-development"],
  },
  {
    id: "4",
    name: "Node.js",
    slug: "nodejs",
    category: "Backend",
    icon: "Server",
    description: "A JavaScript runtime for building APIs and backend services.",
    overview:
      "Node lets teams share language and tooling between frontend and backend, which speeds up hiring and code review alike. We use it for REST and GraphQL APIs, background jobs, and the server-side half of our Next.js applications.",
    useCases: [
      "REST and GraphQL APIs",
      "Real-time features via WebSockets",
      "Background processing and scheduled jobs",
    ],
    relatedServiceSlugs: ["web-development"],
  },
  {
    id: "5",
    name: "PostgreSQL",
    slug: "postgresql",
    category: "Database",
    icon: "Database",
    description: "Our default relational database for anything with structured, related data.",
    overview:
      "When data has clear relationships — users, orders, permissions — we reach for Postgres. It's battle-tested, handles complex queries well, and scales further than most projects ever need before an architecture change is worth considering.",
    useCases: [
      "Transactional systems (orders, payments, bookings)",
      "Multi-tenant SaaS data models",
      "Reporting and analytics queries",
    ],
    relatedServiceSlugs: ["web-development", "ecommerce-solutions"],
  },
  {
    id: "6",
    name: "MongoDB",
    slug: "mongodb",
    category: "Database",
    icon: "Database",
    description: "A document database we use when data shape varies or changes quickly.",
    overview:
      "For content-heavy or rapidly-evolving data models — think CMS content, activity feeds, or early-stage products where the schema is still settling — MongoDB's flexibility means fewer migrations and faster iteration.",
    useCases: [
      "Content management and catalog data",
      "Activity feeds and event logs",
      "Early-stage products with evolving data models",
    ],
    relatedServiceSlugs: ["web-development"],
  },
  {
    id: "7",
    name: "React Native",
    slug: "react-native",
    category: "Mobile",
    icon: "Smartphone",
    description: "Cross-platform mobile development that shares code between iOS and Android.",
    overview:
      "For most client apps, React Native lets us ship one codebase to both app stores while still dropping into native modules when a feature needs it. That usually means a faster build and a smaller long-term maintenance bill than two separate native codebases.",
    useCases: [
      "Consumer apps launching on iOS and Android together",
      "MVPs that need to validate quickly on both platforms",
      "Apps sharing business logic with an existing React web app",
    ],
    relatedServiceSlugs: ["mobile-app-development"],
  },
  {
    id: "8",
    name: "Flutter",
    slug: "flutter",
    category: "Mobile",
    icon: "Smartphone",
    description: "Google's cross-platform toolkit for pixel-consistent apps across devices.",
    overview:
      "When a design system needs to look and animate identically across every device — not just functionally match — Flutter's rendering approach gives us tighter control than most cross-platform alternatives.",
    useCases: [
      "Apps with highly custom, animation-heavy UI",
      "Products also targeting desktop or web from one codebase",
      "Teams standardizing on Dart across a product suite",
    ],
    relatedServiceSlugs: ["mobile-app-development"],
  },
  {
    id: "9",
    name: "Swift",
    slug: "swift",
    category: "Mobile",
    icon: "Smartphone",
    description: "Native iOS development for when an app needs the full platform toolkit.",
    overview:
      "Some apps genuinely need native: deep integration with iOS-only frameworks, best-in-class performance, or day-one support for new Apple platform features. We build fully native in Swift when that's the right call rather than the default one.",
    useCases: [
      "Apps leaning heavily on iOS-specific APIs (ARKit, HealthKit, etc.)",
      "Performance-critical apps (camera, audio, real-time processing)",
      "Apple-ecosystem products (widgets, watchOS, Shortcuts)",
    ],
    relatedServiceSlugs: ["mobile-app-development"],
  },
  {
    id: "10",
    name: "Kotlin",
    slug: "kotlin",
    category: "Mobile",
    icon: "Smartphone",
    description: "Native Android development, the same way we approach native iOS with Swift.",
    overview:
      "For Android apps that need tight platform integration or top-tier performance, we build native in Kotlin — Google's recommended language for the platform — rather than forcing a cross-platform layer where it doesn't fit.",
    useCases: [
      "Apps requiring deep Android platform integration",
      "Performance-sensitive apps (camera, background services)",
      "Android-first products with no near-term iOS plans",
    ],
    relatedServiceSlugs: ["mobile-app-development"],
  },
  {
    id: "11",
    name: "AWS",
    slug: "aws",
    category: "Cloud",
    icon: "Cloud",
    description: "Our default cloud provider for hosting, storage, and infrastructure.",
    overview:
      "We use AWS for everything from a single small app server to full multi-region infrastructure — compute, object storage, managed databases, and CDN — sized to what the project actually needs rather than over-provisioned from day one.",
    useCases: [
      "Application hosting and auto-scaling",
      "Object storage and media delivery (S3 + CloudFront)",
      "Managed databases and background job queues",
    ],
    relatedServiceSlugs: ["web-development", "mobile-app-development"],
  },
  {
    id: "12",
    name: "Firebase",
    slug: "firebase",
    category: "Cloud",
    icon: "FlameKindling",
    description: "A managed backend for apps that need auth, a database, and push notifications fast.",
    overview:
      "For mobile apps and MVPs where speed to launch matters more than infrastructure control, Firebase bundles authentication, a realtime database, and push notifications behind a single SDK — which usually means weeks, not months, to a working backend.",
    useCases: [
      "MVPs and early-stage products",
      "Apps needing real-time sync (chat, live data)",
      "Push notifications and user authentication",
    ],
    relatedServiceSlugs: ["mobile-app-development"],
  },
];

export const technologyIconMap: Record<string, LucideIcon> = {
  Braces,
  Server,
  Database,
  Smartphone,
  Cloud,
  FlameKindling,
};

export function getTechnologyBySlug(slug: string): Technology | undefined {
  return technologies.find((technology) => technology.slug === slug);
}
