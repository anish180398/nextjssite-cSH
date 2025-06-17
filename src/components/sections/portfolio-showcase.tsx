"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wrench, Rocket, Sparkles, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, ExternalLink, Code, Palette, Smartphone, Globe } from "lucide-react";


const specializations = [
  {
    icon: Wrench,
    title: "Branding and Strategy",
    description: "Empower your projects with CodeStreetHive's cutting-edge tools. Experience enhanced efficiency in construction management with our sophisticated automated solutions.",
    technologies: ["Branding", "Strategy", "Marketing", "SEO"],
    color: "from-brand-yellow/20 to-brand-yellow/10",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Minimize complexity, maximize productivity. CodeStreetHive's robust features are engineered to streamline your construction process, delivering results that stand out for their excellence.",
    technologies: ["Full Stack Development", "Product Development", "MVP Development"],
    color: "from-brand-yellow/20 to-brand-yellow/10",
  },
  {
    icon: Sparkles,
    title: "Digital Transformation",
    description: "Transform your business with our digital transformation services. We help you leverage technology to drive growth, efficiency, and innovation.",
    technologies: ["Digital Transformation", "Product Development", "Digital Transformation",],
    color: "from-brand-yellow/20 to-brand-yellow/10",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing ",
    description: "Improve your search rankings and drive organic traffic to your website.",
    technologies: ["SEO", "Digital Marketing", "Social Media", "Content Strategy"],
    color: "from-brand-yellow/20 to-brand-yellow/10",
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
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-white mb-6">
            Specialized in <span className="text-brand-yellow">New and Next</span>
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
                className="group hover:shadow-xl transition-all duration-300  hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-16 h-16  rounded-xl flex items-center justify-center mx-auto group-hover:bg-brand-yellow/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-brand-orange" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-brand-white mb-2 group-hover:text-brand-yellow transition-colors duration-200">
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
                        className="px-2 py-1 text-sm font-medium  text-brand-yellow"
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

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-white text-center mb-12">
            Featured <span className="text-brand-yellow">Projects</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-brand-dark border-2 border-brand-white/10 hover:border-brand-yellow/50"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-brand-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-brand-dark rounded-full flex items-center justify-center shadow-md border border-brand-white/20">
                      <ExternalLink className="w-4 h-4 text-brand-yellow" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Category */}
                  <div className="text-brand-yellow text-sm font-medium mb-2">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-brand-white mb-3 group-hover:text-brand-yellow transition-colors duration-200">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-brand-white/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-medium bg-brand-yellow/10 text-brand-yellow rounded-full border border-brand-yellow/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-2 border-brand-yellow/30 text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark transition-all duration-200"
                  >
                    <Link href={project.link} className="flex items-center justify-center">
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-brand-yellow/10 rounded-2xl p-8 border border-brand-yellow/20">
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
                className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
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
                className="border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark px-8 py-4 rounded-lg transition-all duration-200"
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