"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Palette, 
  Search, 
  BarChart,
  ArrowRight,
  LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Service interface
interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  features: string[];
  popular?: boolean;
  price?: string;
}

// Icon mapping for service icons
const iconMap: { [key: string]: LucideIcon } = {
  code: Code,
  smartphone: Smartphone,
  globe: Globe,
  palette: Palette,
  search: Search,
  "bar-chart": BarChart,
};

const services: Service[] = [
  {
    id: "1",
    title: "Branding and Strategy", 
    slug: "branding-and-strategy",
    icon: "code",
    description: "Empower your projects with Reign of Vision's cutting-edge tools. Experience enhanced efficiency in construction management with our sophisticated automated solutions.",
    features: ["React & Next.js", "Node.js Backend", "Database Design", "API Integration"],
    price: "Starting $2,500",
  },
  {
    id: "2",
    title: "Full Stack Development",
    slug: "full-stack-development", 
    icon: "smartphone",
    description: "Minimize complexity, maximize productivity. Reign of Vision's robust features are engineered to streamline your construction process, delivering results that stand out for their excellence.",
    features: ["iOS & Android", "React Native", "App Store Optimization", "Push Notifications"],
    popular: true,
    price: "Starting $5,000",
  },
  {
    id: "3",
    title: "Digital Transformation",
    slug: "digital-transformation",
    icon: "palette", 
    description: "Transform your business with our digital transformation services. We help you leverage technology to drive growth, efficiency, and innovation.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    price: "Starting $3,500",
  },
  {
    id: "4",
    title: "SEO & Digital Marketing",
    slug: "seo-digital-marketing",
    icon: "search",
    description: "Improve your search rankings and drive organic traffic to your website.",
    features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"],
    price: "Starting $1,500",
  }
];

export default function ServicesGrid() {


  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-white mb-6">
            Our <span className="text-brand-violet">Services</span>
          </h2>
          <p className="text-lg text-brand-white/70 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
            From concept to launch, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code;
            return (
              <Card
                key={index}
                className={`relative group hover:shadow-xl transition-all duration-300 border-2 ${
                  service.popular
                    ? "border-brand-violet bg-brand-dark"
                    : "border-brand-white/10 bg-brand-dark hover:border-brand-violet/50"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-brand-violet text-brand-dark font-semibold px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${
                      service.popular 
                        ? "bg-brand-violet/20" 
                        : "bg-brand-violet/10 group-hover:bg-brand-violet/20"
                    } transition-colors duration-300`}>
                      <IconComponent className="h-6 w-6 text-brand-violet" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-brand-violet">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-brand-white mb-2">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-brand-white/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brand-violet rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-brand-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full group/btn ${
                      service.popular
                        ? "bg-brand-violet hover:bg-brand-violet/90 text-brand-dark"
                        : "bg-transparent border-2 border-brand-violet text-brand-violet hover:bg-brand-violet hover:text-brand-dark"
                    } transition-all duration-200`}
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-brand-violet/10 rounded-2xl p-8 border border-brand-violet/20">
            <h3 className="text-2xl font-bold text-brand-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-brand-white/70 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific needs and create a tailored solution 
              that perfectly fits your requirements and budget.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand-violet hover:bg-brand-violet/90 text-brand-dark font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Link href="/contact" className="flex items-center">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 