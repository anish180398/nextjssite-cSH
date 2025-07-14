"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wrench, Rocket, Sparkles, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, ExternalLink, Code, Palette, Smartphone, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllPortfolioItems, PortfolioItem } from "@/lib/contentful";

const specializations = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications with cutting-edge technologies.",
    icon: Code,
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that deliver exceptional user experiences.",
    icon: Palette,
    technologies: ["Figma", "Adobe XD", "Webflow", "Framer"],
  },
  {
    title: "Mobile Development",
    description: "Developing native and cross-platform mobile apps for iOS and Android.",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    title: "Digital Marketing",
    description: "Driving growth through data-driven digital marketing strategies.",
    icon: Globe,
    technologies: ["SEO", "Analytics", "Social Media", "PPC"],
  },
];

const featuredProjects = [
  {
    title: "EcoTech Solutions",
    category: "E-commerce Platform",
    description: "A sustainable technology marketplace with advanced filtering and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Next.js", "Stripe", "AI/ML"],
    link: "/portfolio/ecotech-solutions",
  },
  {
    title: "HealthCare Connect",
    category: "Healthcare App",
    description: "Telemedicine platform connecting patients with healthcare providers seamlessly.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    tags: ["React Native", "WebRTC", "HIPAA"],
    link: "/portfolio/healthcare-connect",
  },
  {
    title: "FinanceFlow",
    category: "Fintech Dashboard",
    description: "Advanced financial analytics dashboard with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "D3.js", "API"],
    link: "/portfolio/financeflow",
  },
];

export function PortfolioShowcase() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      const items = await getAllPortfolioItems();
      setPortfolioItems(items);
    };
    fetchPortfolioItems();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [portfolioItems.length]);

  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-white mb-6">
            Specialized in <span className="text-brand-orange">New and Next</span>
          </h2>
          <p className="text-lg text-brand-white/70 max-w-3xl mx-auto">
            We stay at the forefront of technology, delivering innovative solutions that push boundaries 
            and set new standards in digital excellence.
          </p>
        </div>

        {/* Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-20">
          {specializations.map((spec, index) => {
            const IconComponent = spec.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-brand-dark  hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-brand-orange/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-brand-orange" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-brand-white mb-2 group-hover:text-brand-orange transition-colors duration-200">
                    {spec.title}
                  </h3>
                  
                  <p className="text-brand-white/70 text-md mb-4">
                    {spec.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 justify-center">
                    {spec.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-sm font-medium text-brand-violet"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Projects Section */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-white text-center mb-12">
            Featured <span className="text-brand-orange">Projects</span>
          </h3>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-brand-dark/80 p-2 rounded-full text-brand-white hover:bg-brand-orange transition-colors"
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-brand-dark/80 p-2 rounded-full text-brand-white hover:bg-brand-orange transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Carousel Content */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {portfolioItems.map((item) => (
                  <div
                    key={item.sys.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-white/10 hover:border-brand-orange/50">
                      <div className="aspect-video relative">
                        <Image
                          src={`https:${item.fields.coverImage.fields.file.url}`}
                          alt={item.fields.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-60"></div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-dark to-transparent">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-brand-orange text-sm font-medium">
                            {item.fields.tags.join(" • ")}
                          </div>
                          <Link href={`/portfolio/${item.fields.slug}`}>
                            <ExternalLink className="w-4 h-4 text-brand-orange" />
                          </Link>
                        </div>

                        <h4 className="text-xl font-bold text-brand-white mb-3 group-hover:text-brand-orange transition-colors duration-200">
                          {item.fields.title}
                        </h4>

                        <p className="text-brand-white/70 text-sm line-clamp-2 mb-4">
                          {item.fields.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.fields.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs font-medium bg-brand-orange/10 text-brand-orange rounded-full border border-brand-orange/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-brand-orange w-6" 
                      : "bg-brand-white/30 hover:bg-brand-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className=" rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-brand-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-brand-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and explore how we can bring your vision to life with 
              cutting-edge technology and innovative design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-brand-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Link href="/contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-brand-white px-8 py-4 rounded-lg transition-all duration-200"
              >
                <Link href="/portfolio">View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 