import { Hero } from "@/components/sections/hero";
import { ValuesSection } from "@/components/sections/values-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesTeaser } from "@/components/sections/services-teaser";
import { PortfolioShowcase } from "@/components/sections/portfolio-showcase";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata = {
  title: "Kryttr - Digital Innovation Agency",
  description: "Transform your digital dreams into reality with cutting-edge web development, innovative design, and strategic digital marketing.",
  keywords: ["web development", "digital marketing", "UI/UX design", "mobile apps", "SEO"],
  openGraph: {
    title: "Kryttr - Digital Innovation Agency",
    description: "Transform your digital dreams into reality with cutting-edge web development, innovative design, and strategic digital marketing.",
    type: "website",
    url: "https://reignofvision.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kryttr - Digital Innovation Agency",
    description: "Transform your digital dreams into reality with cutting-edge web development, innovative design, and strategic digital marketing.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValuesSection />
      <ProcessSection />
      <ServicesTeaser />
      <PortfolioShowcase />
      <Testimonials />
    </main>
  );
}
