"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import HeroImage from "@/assets/images/features-image.png";
export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="h-8 bg-brand-violet/20 rounded w-64 mx-auto lg:mx-0 mb-8 animate-pulse"></div>
              <div className="h-16 bg-brand-white/20 rounded w-full mb-6 animate-pulse"></div>
              <div className="h-6 bg-brand-white/20 rounded w-3/4 mb-8 animate-pulse"></div>
              <div className="flex gap-4">
                <div className="h-12 bg-brand-violet/20 rounded w-40 animate-pulse"></div>
                <div className="h-12 bg-brand-violet/20 rounded w-40 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-brand-violet rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-brand-violet rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-brand-violet rounded-full animate-float animation-delay-4000"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-brand-violet rounded-full animate-float"></div>
        
        {/* Gradient Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-violet rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-violet rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-violet rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-violet/10 border border-brand-violet/20 mb-8">
              <Sparkles className="w-4 h-4 text-brand-orange mr-2" />
              <span className="text-sm font-medium text-brand-white">
                Digital Creative Agency
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-brand-white">IDEAS THAT PROVOKE YOUR</span>{" "}
              <span className="text-brand-violet">COMPETITION</span>
            
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-brand-white/70 mb-8 max-w-2xl">
            Crafting Brands, Designing Products, Building Apps—Your Full-Service Partner for Digital Success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-brand-orange dark:bg-brand-orange hover:bg-brand-orange/90 text-brand-white font-semibold px-8 py-4 dark:text-white rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
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
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-brand-white/10">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-brand-orange">50+</div>
                <div className="text-sm text-brand-white/60">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-brand-orange">98%</div>
                <div className="text-sm text-brand-white/60">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-brand-orange">24/7</div>
                <div className="text-sm text-brand-white/60">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <Image src={HeroImage} alt="Hero Image" width={500} height={500} className="w-full h-full object-cover shake-up-down" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-violet rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-violet rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 