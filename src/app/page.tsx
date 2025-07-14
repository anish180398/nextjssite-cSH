import { Hero } from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import { ValuesSection } from "@/components/sections/values-section";
import { PortfolioShowcase } from "@/components/sections/portfolio-showcase";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata = {
  title: "Reign of Vision - Digital Innovation Agency",
  description: "Transform your digital dreams into reality with cutting-edge web development, innovative design, and strategic digital marketing.",
  keywords: ["web development", "digital marketing", "UI/UX design", "mobile apps", "SEO"],
  openGraph: {
    title: "Reign of Vision - Digital Innovation Agency",
    description: "Transform your digital dreams into reality with cutting-edge web development, innovative design, and strategic digital marketing.",
    type: "website",
    url: "https://Reign of Vision.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reign of Vision - Digital Innovation Agency",
    description: "Transform your digital dreams into reality with cutting-edge web development, innovative design, and strategic digital marketing.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValuesSection />
      <PortfolioShowcase />
      <Testimonials />
    </main>
  );
}
