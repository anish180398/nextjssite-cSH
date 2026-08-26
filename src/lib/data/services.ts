import {
  BarChart,
  Code,
  Globe,
  Palette,
  Search,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  benefits: string[];
}

// Single source of truth for /services, /services/[slug], and the homepage
// services teaser — previously duplicated across three separate hardcoded
// arrays (one of which, services-grid.tsx, had drifted to a conflicting
// 4-service list with leftover template copy).
export const services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    slug: "web-development",
    icon: "Code",
    description:
      "Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and user experience.",
    fullDescription:
      "Our web development services encompass everything from simple landing pages to complex web applications. We use cutting-edge technologies like React, Next.js, Node.js, and TypeScript to build scalable, secure, and high-performance websites that drive business growth.",
    features: [
      "Custom Web Applications",
      "E-commerce Platforms",
      "Content Management Systems",
      "API Development & Integration",
      "Performance Optimization",
      "SEO-Friendly Architecture",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
    benefits: [
      "Faster loading times and better user experience",
      "Mobile-responsive design for all devices",
      "Scalable architecture that grows with your business",
      "SEO optimization for better search rankings",
      "Secure and reliable hosting solutions",
      "Ongoing maintenance and support",
    ],
  },
  {
    id: "2",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    icon: "Smartphone",
    description:
      "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter frameworks.",
    fullDescription:
      "We create powerful mobile applications that provide exceptional user experiences across iOS and Android platforms. Whether you need a native app or cross-platform solution, our team delivers high-quality mobile apps that engage users and drive business results.",
    features: [
      "Native iOS & Android Apps",
      "Cross-Platform Development",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "Third-Party Integrations",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
    benefits: [
      "Reach customers on their preferred mobile platform",
      "Improved customer engagement and retention",
      "Seamless integration with device features",
      "Offline capabilities for uninterrupted usage",
      "App store optimization for better visibility",
      "Regular updates and maintenance",
    ],
  },
  {
    id: "3",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: "Palette",
    description:
      "User-centered design solutions that create intuitive interfaces and exceptional user experiences across all platforms.",
    fullDescription:
      "Our UI/UX design services focus on creating beautiful, intuitive, and user-friendly interfaces that enhance user satisfaction and drive conversions. We combine aesthetic appeal with functional design to deliver exceptional digital experiences.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Usability Testing",
      "Design Systems",
      "Responsive Design",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
    benefits: [
      "Improved user satisfaction and engagement",
      "Higher conversion rates and sales",
      "Reduced development costs through proper planning",
      "Consistent brand experience across platforms",
      "Better accessibility for all users",
      "Data-driven design decisions",
    ],
  },
  {
    id: "4",
    title: "SEO & Digital Marketing",
    slug: "seo-digital-marketing",
    icon: "Search",
    description:
      "Comprehensive SEO strategies and digital marketing campaigns to boost your online visibility and drive organic traffic.",
    fullDescription:
      "Our SEO and digital marketing services help businesses increase their online visibility, attract qualified traffic, and convert visitors into customers. We use proven strategies and the latest tools to deliver measurable results.",
    features: [
      "Search Engine Optimization",
      "Pay-Per-Click Advertising",
      "Content Marketing",
      "Social Media Marketing",
      "Email Marketing",
      "Analytics & Reporting",
    ],
    technologies: ["Google Analytics", "Google Ads", "SEMrush", "Ahrefs", "Mailchimp", "HubSpot"],
    benefits: [
      "Increased organic search visibility",
      "Higher quality website traffic",
      "Improved brand awareness and recognition",
      "Better return on marketing investment",
      "Detailed performance tracking and reporting",
      "Long-term sustainable growth",
    ],
  },
  {
    id: "5",
    title: "Digital Strategy & Consulting",
    slug: "digital-strategy-consulting",
    icon: "BarChart",
    description:
      "Strategic consulting to help businesses navigate digital transformation and optimize their online presence.",
    fullDescription:
      "Our digital strategy and consulting services help businesses develop comprehensive digital transformation plans, optimize their technology stack, and achieve their online objectives through strategic planning and expert guidance.",
    features: [
      "Digital Transformation Planning",
      "Technology Stack Optimization",
      "Business Process Analysis",
      "Competitive Analysis",
      "ROI Optimization",
      "Implementation Roadmaps",
    ],
    technologies: ["Google Analytics", "Tableau", "Salesforce", "HubSpot", "Slack", "Asana"],
    benefits: [
      "Clear digital transformation roadmap",
      "Optimized technology investments",
      "Improved operational efficiency",
      "Better decision-making with data insights",
      "Competitive advantage in the market",
      "Measurable business growth",
    ],
  },
  {
    id: "6",
    title: "E-commerce Solutions",
    slug: "ecommerce-solutions",
    icon: "Globe",
    description:
      "Complete e-commerce platforms with payment integration, inventory management, and conversion optimization.",
    fullDescription:
      "We build comprehensive e-commerce solutions that help businesses sell online effectively. From custom shopping carts to full marketplace platforms, our e-commerce solutions are designed to maximize sales and provide excellent customer experiences.",
    features: [
      "Custom E-commerce Platforms",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing Systems",
      "Customer Account Management",
      "Analytics & Reporting",
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "BigCommerce"],
    benefits: [
      "Increased online sales and revenue",
      "Streamlined order management process",
      "Better customer shopping experience",
      "Secure payment processing",
      "Inventory tracking and management",
      "Detailed sales analytics and insights",
    ],
  },
];

export const serviceIconMap: Record<string, LucideIcon> = {
  Code,
  Smartphone,
  Globe,
  Palette,
  Search,
  BarChart,
};

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
