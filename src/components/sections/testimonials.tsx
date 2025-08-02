"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Reign of Vision transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations. The team delivered a stunning website that perfectly captures our brand identity.",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GreenTech Solutions",
    company: "GreenTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Working with Reign of Vision was an absolute pleasure. They understood our vision from day one and brought it to life with exceptional skill. The mobile app they developed has been a game-changer for our business.",
    rating: 5,
    project: "Mobile App Development"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, Fashion Forward",
    company: "Fashion Forward",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The UI/UX design work was phenomenal. Our conversion rates increased by 40% after the redesign. The team's creativity and technical expertise are unmatched. Highly recommend their services!",
    rating: 5,
    project: "UI/UX Redesign"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO, DataFlow Analytics",
    company: "DataFlow Analytics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Reign of Vision delivered a complex data visualization platform that exceeded all our requirements. Their technical expertise and project management skills are top-notch. We couldn't be happier with the results.",
    rating: 5,
    project: "Data Platform"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Owner, Wellness Studio",
    company: "Wellness Studio",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content: "From concept to launch, the team was professional, responsive, and incredibly talented. Our new booking system has streamlined our operations and improved customer satisfaction significantly.",
    rating: 5,
    project: "Booking System"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-24 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Floating testimonial elements */}
        <div className="absolute top-20 left-10 w-28 h-28 bg-gradient-to-br from-brand-violet/15 to-brand-orange/10 rounded-full animate-float blur-lg opacity-60"></div>
        <div className="absolute top-60 right-16 w-20 h-20 bg-gradient-to-br from-brand-orange/20 to-brand-violet/10 rounded-2xl rotate-45 animate-float animation-delay-2000 blur-sm opacity-50"></div>
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-gradient-to-br from-brand-violet/10 to-brand-orange/15 rounded-3xl rotate-12 animate-float animation-delay-4000 blur-xl opacity-40"></div>
        
        {/* Quote patterns */}
        <div className="absolute top-32 right-1/4 opacity-5">
          <Quote className="w-32 h-32 text-brand-violet transform rotate-12" />
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-5">
          <Quote className="w-24 h-24 text-brand-orange transform -rotate-12" />
        </div>
        
        {/* Dynamic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-conic from-brand-violet/5 via-transparent via-brand-orange/5 to-brand-violet/5 animate-spin-slow"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-violet/8 via-brand-violet/3 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-gradient-radial from-brand-orange/8 via-brand-orange/3 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-white mb-6 leading-tight">
              <span className="drop-shadow-2xl">What Our </span>
              <span className="bg-gradient-to-r from-brand-violet via-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">Clients Say</span>
            </h2>
            
            {/* 3D text shadow effect */}
            <div className="absolute inset-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-violet/10 blur-xl transform translate-x-3 translate-y-3 -z-10">
              What Our Clients Say
            </div>
          </div>
          
          <p className="text-lg text-brand-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Enhanced Main Testimonial Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative perspective-1000">
            {/* 3D Card container */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-brand-dark/90 via-slate-800/60 to-brand-dark/90 border-2 border-brand-white/10 hover:border-brand-violet/50 transition-all duration-700 rounded-3xl backdrop-blur-xl shadow-2xl shadow-brand-violet/10 hover:shadow-brand-violet/20 transform-gpu hover:scale-[1.02]">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500" />
              
              {/* 3D depth shadow */}
              <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-6 translate-y-6 blur-xl -z-10 opacity-60"></div>
              
              <CardContent className="relative p-10 md:p-16 z-10">
                {/* Enhanced Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="relative">
                    <Quote className="w-20 h-20 text-brand-violet drop-shadow-2xl" />
                    <div className="absolute inset-0 w-20 h-20 bg-brand-violet/20 rounded-full blur-xl"></div>
                  </div>
                </div>

                {/* Enhanced Stars */}
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center gap-1 p-3 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 rounded-full backdrop-blur-sm border border-brand-violet/20">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <div key={i} className="relative">
                        <Star className="w-6 h-6 text-brand-violet fill-current drop-shadow-lg" />
                        <div className="absolute inset-0 w-6 h-6 bg-brand-violet/30 rounded-full blur-sm opacity-50"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Testimonial Content */}
                <blockquote className="text-xl md:text-2xl lg:text-3xl text-brand-white text-center leading-relaxed mb-12 font-medium drop-shadow-xl">
                  <span className="text-brand-violet text-4xl font-serif">"</span>
                  {currentTestimonial.content}
                  <span className="text-brand-violet text-4xl font-serif">"</span>
                </blockquote>

                {/* Enhanced Author Info */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
                  <div className="relative group/avatar">
                   
                    
                    {/* Avatar glow effect */}
                    <div className="absolute inset-0 w-20 h-20 bg-brand-violet/30 rounded-full blur-lg opacity-0 group-hover/avatar:opacity-60 transition-opacity duration-300"></div>
                    
                    {/* 3D shadow for avatar */}
                    <div className="absolute inset-0 w-20 h-20 bg-brand-dark/60 rounded-full transform translate-x-2 translate-y-2 blur-md -z-10"></div>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <div className="font-bold text-brand-white text-xl mb-1 drop-shadow-lg">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-brand-white/80 text-base mb-1 drop-shadow-sm">
                      {currentTestimonial.role}
                    </div>
                    <div className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent text-base font-semibold drop-shadow-lg">
                      {currentTestimonial.company}
                    </div>
                  </div>
                </div>

                {/* Enhanced Project Badge */}
                <div className="text-center">
                  <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 border border-brand-violet/30 text-brand-violet text-base font-semibold backdrop-blur-sm shadow-lg shadow-brand-violet/20 hover:shadow-brand-violet/40 transition-all duration-300 hover:scale-105 transform-gpu">
                    <div className="w-2 h-2 bg-brand-violet rounded-full mr-3 animate-pulse"></div>
                    Project: {currentTestimonial.project}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Navigation Controls */}
        <div className="flex items-center justify-center space-x-6 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="group w-16 h-16 rounded-full border-2 border-brand-violet/40 bg-gradient-to-r from-brand-dark/80 to-brand-dark/60 text-brand-violet hover:bg-gradient-to-r hover:from-brand-violet hover:to-brand-violet hover:text-brand-white transition-all duration-300 backdrop-blur-sm shadow-xl shadow-brand-violet/20 hover:shadow-brand-violet/40 hover:scale-110 transform-gpu"
          >
            <ChevronLeft className="w-6 h-6 drop-shadow-lg group-hover:-translate-x-1 transition-transform duration-300" />
          </Button>

          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 border border-brand-violet/20 backdrop-blur-sm">
            <div className="text-brand-white font-semibold text-sm drop-shadow-lg">
              {currentIndex + 1} / {testimonials.length}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="group w-16 h-16 rounded-full border-2 border-brand-violet/40 bg-gradient-to-r from-brand-dark/80 to-brand-dark/60 text-brand-violet hover:bg-gradient-to-r hover:from-brand-violet hover:to-brand-violet hover:text-brand-white transition-all duration-300 backdrop-blur-sm shadow-xl shadow-brand-violet/20 hover:shadow-brand-violet/40 hover:scale-110 transform-gpu"
          >
            <ChevronRight className="w-6 h-6 drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 transform hover:scale-125 ${
                index === currentIndex
                  ? "w-12 h-4 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full shadow-lg shadow-brand-violet/50"
                  : "w-4 h-4 bg-brand-white/30 hover:bg-brand-white/50 rounded-full shadow-md hover:shadow-brand-white/30"
              }`}
            />
          ))}
        </div>

        {/* Additional Client Logos Section */}
        <div className="text-center">
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-brand-dark/60 via-slate-800/40 to-brand-dark/60 border border-brand-white/10 backdrop-blur-xl shadow-xl shadow-brand-violet/5">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/5 via-transparent to-brand-orange/5 rounded-3xl blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-brand-white mb-4 drop-shadow-lg">
                Trusted by <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">Leading Companies</span>
              </h3>
              
              <p className="text-brand-white/70 mb-6 drop-shadow-sm">
                Join our growing list of satisfied clients who have transformed their digital presence with us.
              </p>
              
              <div className="flex items-center justify-center">
                <a
                  href="/testimonials"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 text-brand-white font-semibold rounded-xl border border-brand-violet/30 hover:from-brand-violet/30 hover:to-brand-orange/20 hover:border-brand-violet/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-lg shadow-brand-violet/20 hover:shadow-brand-violet/40 transform-gpu"
                >
                  <span className="drop-shadow-lg">View All Testimonials</span>
                  <ChevronRight className="ml-2 w-4 h-4 drop-shadow-lg" />
                </a>
              </div>
            </div>
            
            {/* 3D depth shadow */}
            <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-4 translate-y-4 blur-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
