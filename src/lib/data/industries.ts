import {
  Briefcase,
  Building2,
  HeartPulse,
  Landmark,
  ShoppingCart,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  relatedServiceSlugs: string[];
}

// Mirrors the verticals already represented in our own portfolio/project
// categories (E-commerce, FinTech, Healthcare, Real Estate, Food Tech,
// Corporate) rather than an invented list — same "single source of truth,
// grounded in real site data" approach as services.ts/technologies.ts.
export const industries: Industry[] = [
  {
    id: "1",
    name: "E-commerce & Retail",
    slug: "ecommerce-retail",
    icon: "ShoppingCart",
    description: "Storefronts, checkout flows, and inventory systems built to convert and scale.",
    overview:
      "Retail moves fast and margins are thin, so the technical bar is high: pages need to load quickly, checkout needs to work every time, and the platform needs to survive a traffic spike on the one day it matters most. We build and tune e-commerce platforms with all three in mind.",
    challenges: [
      "Cart abandonment driven by slow or confusing checkout flows",
      "Inventory and pricing data that falls out of sync across channels",
      "Traffic spikes during sales events overwhelming under-provisioned infrastructure",
    ],
    solutions: [
      "Custom storefronts and checkout optimization",
      "Payment gateway and inventory system integration",
      "Performance tuning for high-traffic sales periods",
    ],
    relatedServiceSlugs: ["ecommerce-solutions", "web-development"],
  },
  {
    id: "2",
    name: "FinTech & Banking",
    slug: "fintech-banking",
    icon: "Landmark",
    description: "Secure, compliant applications for payments, banking, and financial data.",
    overview:
      "Financial products carry a different risk profile than most software: real money, sensitive data, and regulatory scrutiny. We design for security and auditability from the first architecture decision, not as a pass added before launch.",
    challenges: [
      "Handling sensitive financial data securely and compliantly",
      "Building trust through reliable, error-free transaction handling",
      "Integrating with banking APIs and payment networks",
    ],
    solutions: [
      "Secure authentication and encrypted data handling",
      "Payment and banking API integration",
      "Real-time transaction monitoring and reporting",
    ],
    relatedServiceSlugs: ["web-development", "mobile-app-development"],
  },
  {
    id: "3",
    name: "Healthcare",
    slug: "healthcare",
    icon: "HeartPulse",
    description: "Patient-facing and clinical software built around privacy and reliability.",
    overview:
      "Healthcare software has to work for people on their worst days, which means clear interfaces, dependable uptime, and careful handling of patient data. We build with that responsibility in mind, not as an afterthought to a feature list.",
    challenges: [
      "Protecting sensitive patient data across every system it touches",
      "Designing interfaces usable by patients and clinicians under stress",
      "Coordinating scheduling, records, and communication in one platform",
    ],
    solutions: [
      "Patient management and appointment scheduling systems",
      "Telemedicine and secure communication features",
      "Records systems designed around data privacy",
    ],
    relatedServiceSlugs: ["web-development", "ui-ux-design"],
  },
  {
    id: "4",
    name: "Real Estate & PropTech",
    slug: "real-estate-proptech",
    icon: "Building2",
    description: "Listing portals, virtual tours, and CRM tools for agencies and marketplaces.",
    overview:
      "Real estate platforms live or die on search — helping the right buyer find the right listing fast. We focus on fast, filterable search experiences and the CRM/back-office tools that keep agencies running behind them.",
    challenges: [
      "Making large listing inventories fast to search and filter",
      "Presenting properties compellingly without a site visit",
      "Connecting listings, leads, and agents in one workflow",
    ],
    solutions: [
      "Advanced search, filtering, and map-based listing portals",
      "Virtual tour and rich media integration",
      "CRM integration for lead and agent management",
    ],
    relatedServiceSlugs: ["web-development", "ui-ux-design"],
  },
  {
    id: "5",
    name: "Food & Delivery",
    slug: "food-delivery",
    icon: "UtensilsCrossed",
    description: "Ordering, delivery tracking, and restaurant-facing tools for food platforms.",
    overview:
      "Food and delivery products are really three products in one — a customer app, a restaurant or merchant dashboard, and a driver experience — all needing to agree on the same order in real time. We build all three sides as one coherent system.",
    challenges: [
      "Keeping customer, restaurant, and driver apps in sync in real time",
      "Handling live order tracking without drift or delay",
      "Managing menu, pricing, and availability across many merchants",
    ],
    solutions: [
      "Real-time order tracking and status updates",
      "Merchant dashboards for menu and order management",
      "Driver apps with live location and routing",
    ],
    relatedServiceSlugs: ["mobile-app-development", "web-development"],
  },
  {
    id: "6",
    name: "Corporate & Enterprise",
    slug: "corporate-enterprise",
    icon: "Briefcase",
    description: "Corporate sites, internal tools, and content platforms built for scale and upkeep.",
    overview:
      "Enterprise sites and internal tools are judged less on flash and more on whether they still work cleanly two years and three content editors later. We build with maintainability and clear content ownership as first-class requirements.",
    challenges: [
      "Corporate sites that become difficult to update without developer help",
      "Internal tools bolted together from spreadsheets and email",
      "Brand and content consistency across many pages and stakeholders",
    ],
    solutions: [
      "Content management systems built for non-technical editors",
      "Custom internal tools and workflow dashboards",
      "SEO-friendly architecture for corporate and marketing sites",
    ],
    relatedServiceSlugs: ["web-development", "digital-strategy-consulting"],
  },
];

export const industryIconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  Landmark,
  HeartPulse,
  Building2,
  UtensilsCrossed,
  Briefcase,
};

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
