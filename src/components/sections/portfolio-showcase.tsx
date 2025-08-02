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
    <section className="relative py-24 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Floating tech elements */}
        <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-brand-orange/20 to-brand-violet/10 rounded-3xl rotate-12 animate-float blur-sm opacity-60"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-br from-brand-violet/20 to-brand-orange/10 rounded-2xl rotate-45 animate-float animation-delay-2000 blur-sm opacity-50"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-brand-orange/15 to-brand-violet/15 rounded-full animate-float animation-delay-4000 blur-lg opacity-40"></div>
        
        {/* 3D Grid overlay with perspective */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5 transform perspective-1000 rotate-x-12"></div>
        
        {/* Dynamic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-conic from-brand-violet/5 via-transparent via-brand-orange/5 to-brand-violet/5 animate-spin-slow"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-brand-violet/10 via-brand-violet/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-brand-orange/10 via-brand-orange/5 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-white mb-6 leading-tight">
              <span className="drop-shadow-2xl">Specialized in </span>
              <span className="bg-gradient-to-r from-brand-orange via-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">New and Next</span>
            </h2>
            
            {/* 3D text shadow effect */}
            <div className="absolute inset-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-orange/10 blur-xl transform translate-x-3 translate-y-3 -z-10">
              Specialized in New and Next
            </div>
          </div>
          
          <p className="text-lg text-brand-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            We stay at the forefront of technology, delivering innovative solutions that push boundaries 
            and set new standards in digital excellence.
          </p>
        </div>

        {/* Enhanced Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
          {specializations.map((spec, index) => {
            const IconComponent = spec.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 border border-brand-white/10 hover:border-brand-orange/40 hover:-translate-y-3 rounded-3xl backdrop-blur-sm transform-gpu"
              >
                {/* Enhanced background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-orange/15 via-brand-violet/15 to-brand-orange/15 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500" />
                
                {/* 3D depth shadow */}
                <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-4 translate-y-4 blur-lg -z-10 opacity-60"></div>
                
                <CardContent className="relative p-10 text-center z-10">
                  {/* Enhanced 3D Icon */}
                  <div className="mb-8">
                    <div className="relative group/icon">
                      <div className="w-24 h-24 bg-gradient-to-br from-brand-orange/25 to-brand-violet/15 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-125 group-hover:from-brand-orange/40 group-hover:to-brand-violet/25 transition-all duration-400 shadow-2xl shadow-brand-orange/30 group-hover:shadow-brand-orange/60">
                        <IconComponent className="w-12 h-12 text-brand-orange group-hover:text-brand-white transition-colors duration-300 drop-shadow-xl" />
                      </div>
                      
                      {/* Enhanced glow effects */}
                      <div className="absolute inset-0 w-24 h-24 bg-brand-orange/30 rounded-3xl blur-xl opacity-0 group-hover/icon:opacity-70 transition-opacity duration-400 mx-auto" />
                      <div className="absolute inset-0 w-24 h-24 bg-brand-violet/20 rounded-3xl blur-2xl opacity-0 group-hover/icon:opacity-50 transition-opacity duration-400 mx-auto" />
                      
                      {/* 3D icon shadow */}
                      <div className="absolute inset-0 w-24 h-24 bg-brand-dark/60 rounded-3xl transform translate-x-3 translate-y-3 blur-lg -z-10 mx-auto"></div>
                    </div>
                  </div>

                  {/* Enhanced title with 3D effect */}
                  <h3 className="text-2xl font-bold text-brand-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:to-brand-violet group-hover:bg-clip-text transition-all duration-300 drop-shadow-xl">
                    {spec.title}
                  </h3>
                  
                  {/* Enhanced description */}
                  <p className="text-brand-white/80 text-base leading-relaxed mb-8 group-hover:text-brand-white/95 transition-colors duration-300 drop-shadow-lg">
                    {spec.description}
                  </p>

                  {/* Enhanced technologies section */}
                  <div className="space-y-4">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent mx-auto"></div>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {spec.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 text-sm font-medium text-brand-violet bg-gradient-to-r from-brand-white/10 to-brand-white/5 rounded-full border border-brand-violet/30 hover:bg-gradient-to-r hover:from-brand-violet/20 hover:to-brand-orange/10 hover:border-brand-violet/50 hover:text-brand-white transition-all duration-300 backdrop-blur-sm shadow-lg shadow-brand-violet/10 hover:shadow-brand-violet/30 transform hover:scale-105"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Featured Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-white mb-4">
              <span className="drop-shadow-xl">Featured </span>
              <span className="bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-xl">Projects</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-orange to-brand-violet rounded-full mx-auto"></div>
          </div>

          {/* Enhanced Carousel Container */}
          <div className="relative">
            {/* Enhanced Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-brand-dark/90 to-brand-dark/70 p-4 rounded-full text-brand-white hover:bg-gradient-to-r hover:from-brand-orange/90 hover:to-brand-orange/70 transition-all duration-300 backdrop-blur-xl border border-brand-white/20 hover:border-brand-orange/50 shadow-2xl shadow-brand-dark/50 hover:scale-110 transform-gpu"
            >
              <ArrowRight className="w-6 h-6 rotate-180 drop-shadow-lg" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-brand-dark/90 to-brand-dark/70 p-4 rounded-full text-brand-white hover:bg-gradient-to-r hover:from-brand-orange/90 hover:to-brand-orange/70 transition-all duration-300 backdrop-blur-xl border border-brand-white/20 hover:border-brand-orange/50 shadow-2xl shadow-brand-dark/50 hover:scale-110 transform-gpu"
            >
              <ArrowRight className="w-6 h-6 drop-shadow-lg" />
            </button>

            {/* Enhanced Carousel Content */}
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {portfolioItems.map((item) => (
                  <div
                    key={item.sys.id}
                    className="w-full flex-shrink-0 px-6"
                  >
                    <div className="group relative overflow-hidden rounded-3xl border-2 border-brand-white/10 hover:border-brand-orange/60 transition-all duration-500 shadow-2xl shadow-brand-dark/50 hover:shadow-brand-orange/20 transform hover:scale-[1.02]">
                      {/* Enhanced image container */}
                      <div className="aspect-video relative">
                        <Image
                          src={`https:${item.fields.coverImage.fields.file.url}`}
                          alt={item.fields.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                        
                        {/* 3D overlay effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-brand-violet/10 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>

                      {/* Enhanced content overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-brand-orange text-sm font-semibold drop-shadow-lg">
                            {item.fields.tags.join(" • ")}
                          </div>
                          <Link href={`/portfolio/${item.fields.slug}`} className="group/link">
                            <div className="p-2 bg-brand-orange/20 rounded-full border border-brand-orange/30 backdrop-blur-sm hover:bg-brand-orange/40 transition-all duration-300 hover:scale-110 transform-gpu">
                              <ExternalLink className="w-5 h-5 text-brand-orange group-hover/link:text-brand-white drop-shadow-lg" />
                            </div>
                          </Link>
                        </div>

                        <h4 className="text-2xl font-bold text-brand-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:to-brand-violet group-hover:bg-clip-text transition-all duration-300 drop-shadow-xl">
                          {item.fields.title}
                        </h4>

                        <p className="text-brand-white/80 text-base line-clamp-2 mb-6 leading-relaxed drop-shadow-lg">
                          {item.fields.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-3">
                          {item.fields.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-brand-orange/20 to-brand-orange/10 text-brand-orange rounded-full border border-brand-orange/30 backdrop-blur-sm shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 transition-all duration-300 hover:scale-105 transform-gpu"
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

            {/* Enhanced Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    index === currentIndex 
                      ? "bg-gradient-to-r from-brand-orange to-brand-violet w-8 shadow-lg shadow-brand-orange/50" 
                      : "bg-brand-white/30 hover:bg-brand-white/50 w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="relative rounded-3xl p-12 bg-gradient-to-br from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 backdrop-blur-xl shadow-2xl shadow-brand-violet/10">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-3xl blur-2xl"></div>
            <div className="absolute inset-0 bg-gradient-conic from-brand-violet/5 via-transparent via-brand-orange/5 to-brand-violet/5 rounded-3xl animate-spin-slow opacity-40"></div>
            
            {/* 3D depth shadow */}
            <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-6 translate-y-6 blur-xl -z-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-white mb-6 drop-shadow-xl">
                Ready to Build Something <span className="bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent">Amazing?</span>
              </h3>
              
              <p className="text-brand-white/80 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg text-lg">
                Let's discuss your project and explore how we can bring your vision to life with 
                cutting-edge technology and innovative design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-brand-orange via-brand-orange to-brand-orange/90 hover:from-brand-orange/90 hover:to-brand-orange text-brand-white font-semibold px-10 py-6 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-orange/50 transform-gpu shadow-xl shadow-brand-orange/30 border border-brand-orange/20"
                >
                  <Link href="/contact" className="flex items-center">
                    <span className="drop-shadow-lg">Start Your Project</span>
                    <ArrowRight className="ml-3 h-5 w-5 drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-brand-violet/50 bg-gradient-to-r from-transparent to-brand-violet/10 text-brand-white hover:bg-gradient-to-r hover:from-brand-violet/20 hover:to-brand-violet/30 hover:border-brand-violet font-semibold px-10 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 transform-gpu"
                >
                  <Link href="/portfolio" className="drop-shadow-lg">View All Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
