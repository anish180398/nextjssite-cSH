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
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-white mb-6">
            What Our <span className="text-brand-violet">Clients Say</span>
          </h2>
          <p className="text-lg text-brand-white/70 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="relative overflow-hidden bg-brand-dark border-2 border-brand-white/10 hover:border-brand-violet/50 transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-brand-violet" />
              </div>

              {/* Stars */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-violet fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-brand-white text-center leading-relaxed mb-8 font-medium">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <Avatar className="w-16 h-16 border-2 border-brand-violet/30">
                  <AvatarImage 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-brand-violet text-brand-dark font-semibold text-lg">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-center">
                  <div className="font-bold text-brand-white text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-brand-white/70 text-sm">
                    {currentTestimonial.role}
                  </div>
                  <div className="text-brand-violet text-sm font-medium">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>

              {/* Project Badge */}
              <div className="text-center mt-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-sm font-medium">
                  Project: {currentTestimonial.project}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="w-12 h-12 rounded-full border-2 border-brand-violet/30 text-brand-violet hover:bg-brand-violet hover:text-brand-dark transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="w-12 h-12 rounded-full border-2 border-brand-violet/30 text-brand-violet hover:bg-brand-violet hover:text-brand-dark transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-brand-violet scale-125"
                  : "bg-brand-white/30 hover:bg-brand-white/50"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid (Hidden on mobile, shown on larger screens) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-300 bg-brand-dark border-2 ${
                index === currentIndex % 3
                  ? "border-brand-violet"
                  : "border-brand-white/10 hover:border-brand-violet/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-brand-violet text-brand-dark font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-brand-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-brand-white/70 text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                
                <p className="text-brand-white/80 text-sm line-clamp-3">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-violet fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 