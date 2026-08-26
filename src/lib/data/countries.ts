import {
  Flag,
  Landmark,
  Building2,
  Sunrise,
  Cog,
  Compass,
  Mountain,
  type LucideIcon,
} from "lucide-react";

export interface Country {
  id: string;
  name: string;
  slug: string;
  icon: string;
  region: string;
  /** BCP-47 locale used for this page's hreflang alternate. */
  hreflang: string;
  heroTagline: string;
  overview: string;
  workingHoursNote: string;
  complianceNotes: string[];
  relevantPlatforms: string[];
  businessNote: string;
  relatedServiceSlugs: string[];
  relatedIndustrySlugs: string[];
  keywords: string[];
}

// Deliberately a short, curated list (not hundreds of thin city/state pages —
// see best-practice notes this was built against) covering the markets we
// actually get inbound interest from. Every field below is a genuine,
// checkable statement (timezone geography, real regulation names, real
// platforms) — no fabricated local reviews, team bios, or client counts per
// country, since we don't have dedicated local offices or verified per-country
// client data to back that up honestly.
export const countries: Country[] = [
  {
    id: "1",
    name: "United States",
    slug: "united-states",
    icon: "Flag",
    region: "North America",
    hreflang: "en-US",
    heroTagline: "Web & product development for U.S. businesses",
    overview:
      "We work with U.S. companies who want a development partner that moves at startup speed without an on-shore price tag — from early-stage MVPs to scaling e-commerce and SaaS platforms.",
    workingHoursNote:
      "Our workday runs into the U.S. morning, so most requests get a same-day turnaround instead of a 24-hour wait for a reply.",
    complianceNotes: [
      "WCAG 2.1 AA accessibility — ADA-related web accessibility lawsuits have made this a real business risk, not just a nice-to-have",
      "CCPA/CPRA-aware data handling for products with California users",
      "PCI-DSS practices for anything that touches card payments",
    ],
    relevantPlatforms: ["Shopify & Shopify Plus", "Stripe", "AWS", "HubSpot"],
    businessNote:
      "U.S. clients tend to move fast and want a clear proposal and fixed scope before kickoff — that's exactly how we run every engagement.",
    relatedServiceSlugs: ["ecommerce-solutions", "web-development", "seo-digital-marketing"],
    relatedIndustrySlugs: ["ecommerce-retail", "fintech-banking"],
    keywords: [
      "web development company USA",
      "digital agency United States",
      "US software development partner",
      "ecommerce development USA",
      "hire developers for US business",
    ],
  },
  {
    id: "2",
    name: "United Kingdom",
    slug: "united-kingdom",
    icon: "Landmark",
    region: "Europe",
    hreflang: "en-GB",
    heroTagline: "Digital development & design for UK businesses",
    overview:
      "From fintech startups to regional retailers moving online, we build the web platforms, apps, and internal tools UK businesses need to grow, without the overhead of hiring a local dev team.",
    workingHoursNote:
      "There's a solid block of overlap with UK business hours in our afternoon — enough for a live call most days without either side working unsociable hours.",
    complianceNotes: [
      "UK GDPR and PECR-conscious handling of customer data and cookie consent",
      "Making Tax Digital-compatible records for VAT-registered e-commerce clients",
      "WCAG 2.1 AA, the same standard referenced directly in UK public sector accessibility regulations",
    ],
    relevantPlatforms: ["Shopify", "Stripe & GoCardless", "Xero integrations"],
    businessNote:
      "UK clients we work with tend to value a clearly written proposal and a fixed scope over an open-ended 'figure it out as we go' engagement.",
    relatedServiceSlugs: ["web-development", "ecommerce-solutions", "digital-strategy-consulting"],
    relatedIndustrySlugs: ["fintech-banking", "ecommerce-retail"],
    keywords: [
      "web development company UK",
      "digital agency United Kingdom",
      "UK software development partner",
      "London web development outsourcing",
    ],
  },
  {
    id: "3",
    name: "India",
    slug: "india",
    icon: "Building2",
    region: "Asia-Pacific",
    hreflang: "en-IN",
    heroTagline: "Web, app & e-commerce development for Indian businesses",
    overview:
      "We're based in Chennai, so working with Indian businesses means no time zone gap, no overnight replies, and an in-person working session when that's genuinely more useful than a call.",
    workingHoursNote:
      "Same time zone as our team — meetings, reviews, and support happen in real time during the same business day.",
    complianceNotes: [
      "DPDP Act, 2023-conscious data handling as the rules come into force",
      "GST-compliant invoicing built into e-commerce and billing systems",
      "UPI and other India-first payment rails alongside standard card payments",
    ],
    relevantPlatforms: ["Razorpay & UPI", "WhatsApp Business API", "Shopify & WooCommerce"],
    businessNote:
      "Being local means we can sit down with a founder in person when it speeds things up, not just over a video call.",
    relatedServiceSlugs: ["ecommerce-solutions", "mobile-app-development", "web-development"],
    relatedIndustrySlugs: ["ecommerce-retail", "food-delivery", "real-estate-proptech"],
    keywords: [
      "web development company India",
      "app development company Chennai",
      "Indian digital agency",
      "ecommerce development India",
    ],
  },
  {
    id: "4",
    name: "Germany",
    slug: "germany",
    icon: "Cog",
    region: "Europe",
    hreflang: "en-DE",
    heroTagline: "Digital product development for German businesses",
    overview:
      "Whether it's a Mittelstand manufacturer digitizing an internal process or a startup building its first product, we build software with the precision and documentation German engineering teams expect.",
    workingHoursNote:
      "Our afternoon overlaps with the German business day, leaving room for a live call before either side signs off for the day.",
    complianceNotes: [
      "GDPR (DSGVO)-conscious data handling, built with Germany's notably strict enforcement culture in mind",
      "Impressum-ready site structure — a legal notice requirement specific to German (and wider DACH) web law",
      "WCAG 2.1 AA accessibility, aligned with Germany's BFSG going into effect for consumer-facing digital products",
    ],
    relevantPlatforms: ["Shopify", "Stripe", "SAP-adjacent integrations"],
    businessNote:
      "German clients tend to want a detailed, written spec before development starts — we scope thoroughly up front rather than leaving details for later.",
    relatedServiceSlugs: ["web-development", "digital-strategy-consulting", "ecommerce-solutions"],
    relatedIndustrySlugs: ["corporate-enterprise", "ecommerce-retail"],
    keywords: [
      "web development company Germany",
      "digital agentur Germany software partner",
      "German ecommerce development",
      "Mittelstand digital transformation partner",
    ],
  },
  {
    id: "5",
    name: "Australia",
    slug: "australia",
    icon: "Compass",
    region: "Asia-Pacific",
    hreflang: "en-AU",
    heroTagline: "Web & e-commerce development for Australian businesses",
    overview:
      "We work with Australian retailers, startups, and service businesses who want senior development work without paying Sydney or Melbourne agency rates.",
    workingHoursNote:
      "Our morning lines up with the Australian afternoon, giving same-day responses on most requests despite the distance.",
    complianceNotes: [
      "Australian Privacy Principles (Privacy Act 1988)-conscious data handling",
      "Australian Consumer Law considerations for e-commerce terms, refunds, and guarantees messaging",
      "WCAG 2.1 AA accessibility, referenced in Australia's own Disability Discrimination Act guidance",
    ],
    relevantPlatforms: ["Shopify", "Stripe & Afterpay", "Xero integrations"],
    businessNote:
      "Australian clients we've worked with value direct, plain-spoken communication over heavily formal proposals — we match that tone.",
    relatedServiceSlugs: ["ecommerce-solutions", "web-development", "seo-digital-marketing"],
    relatedIndustrySlugs: ["ecommerce-retail", "real-estate-proptech"],
    keywords: [
      "web development company Australia",
      "digital agency Australia",
      "ecommerce development Sydney Melbourne",
      "Australian software development partner",
    ],
  },
  {
    id: "6",
    name: "Canada",
    slug: "canada",
    icon: "Mountain",
    region: "North America",
    hreflang: "en-CA",
    heroTagline: "Web & product development for Canadian businesses",
    overview:
      "From Toronto SaaS startups to retailers across the country, we build and ship products for Canadian businesses at a cost that on-shore agency rates usually can't match.",
    workingHoursNote:
      "Our workday runs into Canadian business hours coast to coast, so most requests still get a same-day reply.",
    complianceNotes: [
      "PIPEDA-conscious handling of customer data, plus awareness of provincial rules like Quebec's Law 25",
      "Bilingual-ready content structure (English/French) for businesses that need it",
      "PCI-DSS practices for anything touching card payments",
    ],
    relevantPlatforms: ["Shopify", "Stripe", "AWS"],
    businessNote:
      "Canadian clients tend to appreciate a straightforward, no-surprises proposal — we quote scope and price clearly up front.",
    relatedServiceSlugs: ["web-development", "ecommerce-solutions", "mobile-app-development"],
    relatedIndustrySlugs: ["ecommerce-retail", "healthcare"],
    keywords: [
      "web development company Canada",
      "digital agency Canada",
      "Toronto software development partner",
      "Canadian ecommerce development",
    ],
  },
  {
    id: "7",
    name: "Japan",
    slug: "japan",
    icon: "Sunrise",
    region: "Asia-Pacific",
    hreflang: "en-JP",
    heroTagline: "Web & product development for Japanese businesses",
    overview:
      "We work with Japanese businesses and their international teams who need meticulous, detail-oriented development — the same standard of polish and QA rigor Japanese product teams expect internally.",
    workingHoursNote:
      "Our morning overlaps with the Japanese afternoon, which is usually enough for a same-day exchange on active projects.",
    complianceNotes: [
      "APPI (Act on Protection of Personal Information)-conscious data handling",
      "Multi-byte character and vertical-text-aware front-end work where a product needs genuine Japanese-language support",
      "Mobile-first builds, reflecting how much of Japan's web traffic is mobile-first",
    ],
    relevantPlatforms: ["Stripe", "LINE integrations", "AWS"],
    businessNote:
      "Japanese clients tend to value thorough QA and attention to small details over moving fast and breaking things — that matches how we ship anyway.",
    relatedServiceSlugs: ["web-development", "mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["corporate-enterprise", "ecommerce-retail"],
    keywords: [
      "web development company Japan",
      "digital agency Japan",
      "Japanese software development partner",
      "ecommerce development Japan",
    ],
  },
];

export const countryIconMap: Record<string, LucideIcon> = {
  Flag,
  Landmark,
  Building2,
  Sunrise,
  Cog,
  Compass,
  Mountain,
};

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((country) => country.slug === slug);
}
