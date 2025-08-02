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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="h-8 bg-gradient-to-r from-brand-violet/30 to-brand-orange/20 rounded-full w-64 mx-auto lg:mx-0 mb-8 animate-pulse"></div>
              <div className="h-16 bg-gradient-to-r from-brand-white/20 to-brand-white/10 rounded-xl w-full mb-6 animate-pulse"></div>
              <div className="h-6 bg-gradient-to-r from-brand-white/20 to-brand-white/10 rounded-lg w-3/4 mb-8 animate-pulse"></div>
              <div className="flex gap-4">
                <div className="h-12 bg-gradient-to-r from-brand-orange/30 to-brand-violet/20 rounded-xl w-40 animate-pulse"></div>
                <div className="h-12 bg-gradient-to-r from-brand-violet/30 to-brand-orange/20 rounded-xl w-40 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Advanced Grid Pattern with 3D effect */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-violet/5 to-transparent transform skew-y-1"></div>
        
        {/* Enhanced Floating Particles with 3D shadows */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-br from-brand-violet to-brand-orange rounded-full animate-float shadow-2xl shadow-brand-violet/50"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-br from-brand-orange to-brand-violet rounded-full animate-float animation-delay-2000 shadow-xl shadow-brand-orange/40"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-gradient-to-br from-brand-violet to-brand-orange rounded-full animate-float animation-delay-4000 shadow-2xl shadow-brand-violet/60"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-gradient-to-br from-brand-orange to-brand-violet rounded-full animate-float shadow-lg shadow-brand-orange/30"></div>
        
        {/* 3D Gradient Blobs with enhanced depth */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-radial from-brand-violet/20 via-brand-violet/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-radial from-brand-orange/20 via-brand-orange/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-radial from-brand-violet/20 via-brand-violet/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Additional 3D depth layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-conic from-brand-violet/10 via-transparent via-brand-orange/10 to-brand-violet/10 opacity-30 animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content with 3D effects */}
          <div className="text-center lg:text-left transform perspective-1000">
            {/* Enhanced 3D Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 border border-brand-violet/30 backdrop-blur-xl mb-8 shadow-2xl shadow-brand-violet/20 hover:shadow-brand-violet/40 transition-all duration-300 hover:scale-105 transform-gpu">
              <div className="relative">
                <Sparkles className="w-5 h-5 text-brand-orange mr-3 drop-shadow-lg" />
                <div className="absolute inset-0 w-5 h-5 bg-brand-orange/30 rounded-full blur-sm"></div>
              </div>
              <span className="text-sm font-semibold text-brand-white drop-shadow-lg">
                Digital Creative Agency
              </span>
            </div>

            {/* 3D Headline with text shadows */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 transform-gpu">
              <span className="text-brand-white drop-shadow-2xl text-shadow-3d">IDEAS THAT PROVOKE YOUR</span>{" "}
              <span className="bg-gradient-to-r from-brand-violet via-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">COMPETITION</span>
            </h1>

            {/* Enhanced Subtitle with depth */}
            <p className="text-lg sm:text-xl text-brand-white/80 mb-8 max-w-2xl drop-shadow-lg leading-relaxed">
              Crafting Brands, Designing Products, Building Apps—Your Full-Service Partner for Digital Success.
            </p>

            {/* 3D Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand-orange via-brand-orange to-brand-orange/90 hover:from-brand-orange/90 hover:to-brand-orange text-brand-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-orange/50 transform-gpu shadow-xl shadow-brand-orange/30 border border-brand-orange/20"
              >
                <Link href="/contact" className="flex items-center">
                  <span className="drop-shadow-lg">Start Your Project</span>
                  <ArrowRight className="ml-3 h-5 w-5 drop-shadow-lg" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-brand-violet/50 bg-gradient-to-r from-transparent to-brand-violet/10 text-brand-white hover:bg-gradient-to-r hover:from-brand-violet/20 hover:to-brand-violet/30 hover:text-brand-white hover:border-brand-violet px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 transform-gpu"
              >
                <Link href="/portfolio" className="drop-shadow-lg">View Our Work</Link>
              </Button>
            </div>

            {/* 3D Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gradient-to-r border-brand-white/20">
              <div className="text-center lg:text-left group transform-gpu hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-xl">50+</div>
                  <div className="absolute inset-0 text-3xl sm:text-4xl font-bold text-brand-orange/20 blur-sm transform translate-x-1 translate-y-1"></div>
                </div>
                <div className="text-sm text-brand-white/60 drop-shadow-lg mt-1">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left group transform-gpu hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl">98%</div>
                  <div className="absolute inset-0 text-3xl sm:text-4xl font-bold text-brand-violet/20 blur-sm transform translate-x-1 translate-y-1"></div>
                </div>
                <div className="text-sm text-brand-white/60 drop-shadow-lg mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left group transform-gpu hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-xl">24/7</div>
                  <div className="absolute inset-0 text-3xl sm:text-4xl font-bold text-brand-orange/20 blur-sm transform translate-x-1 translate-y-1"></div>
                </div>
                <div className="text-sm text-brand-white/60 drop-shadow-lg mt-1">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced 3D Visual */}
          <div className="relative group perspective-1000">
            {/* 3D Container with multiple depth layers */}
            <div className="relative transform-gpu transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-3">
              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-violet/30 via-brand-orange/20 to-brand-violet/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Shadow layer */}
              <div className="absolute inset-0 bg-brand-dark/40 rounded-2xl transform translate-x-4 translate-y-4 blur-sm"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-brand-dark via-slate-800 to-brand-dark rounded-2xl overflow-hidden border border-brand-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-violet/10 via-transparent to-brand-orange/10"></div>
                <Image 
                  src={HeroImage} 
                  alt="Hero Image" 
                  width={500} 
                  height={500} 
                  className="w-full h-full object-cover shake-up-down relative z-10 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" 
                />
                
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-brand-orange/20 to-brand-violet/20 rounded-full blur-lg"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-brand-violet/20 to-brand-orange/20 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced 3D Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative group">
          <div className="w-8 h-12 border-2 border-brand-violet/60 bg-gradient-to-b from-transparent to-brand-violet/10 rounded-full flex justify-center backdrop-blur-sm shadow-lg shadow-brand-violet/30 group-hover:shadow-brand-violet/50 transition-shadow duration-300">
            <div className="w-1.5 h-4 bg-gradient-to-b from-brand-violet to-brand-orange rounded-full mt-2 animate-pulse shadow-lg shadow-brand-violet/50"></div>
          </div>
          <div className="absolute inset-0 w-8 h-12 border-2 border-brand-violet/20 rounded-full transform translate-x-1 translate-y-1 blur-sm"></div>
        </div>
      </div>
    </section>
  );
}
