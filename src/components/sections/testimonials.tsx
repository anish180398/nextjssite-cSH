"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LiquidGlassCard } from "@/components/kokonutui/liquid-glass-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { duration, easing, revealUp } from "@/lib/motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Kryttr transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations. The team delivered a stunning website that perfectly captures our brand identity.",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GreenTech Solutions",
    company: "GreenTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Working with Kryttr was an absolute pleasure. They understood our vision from day one and brought it to life with exceptional skill. The mobile app they developed has been a game-changer for our business.",
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
    content: "Kryttr delivered a complex data visualization platform that exceeded all our requirements. Their technical expertise and project management skills are top-notch. We couldn't be happier with the results.",
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
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealUp}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
            What our <span className="text-primary">clients say</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Don&apos;t just take our word for it — here&apos;s what clients say about working with us.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <LiquidGlassCard glassSize="lg" className="relative overflow-hidden">
            <Quote className="absolute -left-2 -top-2 h-24 w-24 text-primary/10 sm:h-32 sm:w-32" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: duration.base, ease: easing.out }}
                className="relative flex flex-col gap-10 sm:flex-row"
              >
                <div className="sm:w-2/3">
                  <div className="mb-6 flex gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="font-display text-2xl font-medium leading-snug text-foreground md:text-3xl">
                    &ldquo;{currentTestimonial.content}&rdquo;
                  </blockquote>
                </div>

                <div className="flex flex-row items-center gap-4 border-t border-border pt-6 sm:w-1/3 sm:flex-col sm:items-start sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
                    <AvatarFallback>{currentTestimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{currentTestimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{currentTestimonial.role}</div>
                  </div>
                  <span className="mt-auto inline-flex items-center rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted-foreground sm:mt-4">
                    {currentTestimonial.project}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </LiquidGlassCard>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className="flex h-6 w-6 items-center justify-center"
                >
                  <span
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="font-mono text-sm text-muted-foreground">
                {currentIndex + 1} / {testimonials.length}
              </div>
              <Button variant="outline" size="icon" onClick={goToPrevious} aria-label="Previous testimonial">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={goToNext} aria-label="Next testimonial">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

