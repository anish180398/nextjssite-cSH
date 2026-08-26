"use client";

import { Button } from "@/components/ui/button";
import ShimmerText from "@/components/kokonutui/shimmer-text";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";
import { useCountUp, usePrefersReducedMotion } from "@/lib/motion";

import HeroImage from "@/assets/images/features-image.png";

const lineOne = ["IDEAS", "THAT"];
const lineTwo = ["PROVOKE"];
const lineThree = ["COMPETITION"];

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animatedValue = useCountUp(value, !prefersReducedMotion);

  return (
    <div className="hero-stat">
      <div className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
        {animatedValue}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</div>
    </div>
  );
}

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 120]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    animate(".hero-word", {
      opacity: [0, 1],
      y: [28, 0],
      duration: 500,
      delay: stagger(70),
      ease: "outExpo",
    });

    // Kept short — Lighthouse flagged this group (the LCP candidate on this
    // page) for render delay when it was staggered starting at 500ms.
    animate(".hero-reveal", {
      opacity: [0, 1],
      y: [16, 0],
      duration: 350,
      delay: stagger(60, { start: 80 }),
      ease: "outExpo",
    });
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-24"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.15]" />
      <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-1/3 left-8 hidden h-3 w-3 rounded-full bg-primary/40 lg:block" />
      <div className="absolute bottom-24 left-1/3 hidden h-2 w-2 rotate-45 bg-primary/30 lg:block" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-y-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="lg:col-span-7">
          <div className="hero-reveal mb-8 inline-flex items-center rounded-full border border-border px-4 py-1.5">
            <ShimmerText text="Digital Creative Agency" className="text-sm font-semibold" />
          </div>

          <h1 className="font-display mb-8 text-[13vw] leading-[0.92] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">
              {lineOne.map((word) => (
                <span key={word} className="hero-word mr-3 inline-block last:mr-0">
                  {word}
                </span>
              ))}
            </span>
            <span className="block">
              {lineTwo.map((word) => (
                <span key={word} className="hero-word inline-block text-primary">
                  {word}
                </span>
              ))}
            </span>
            <span className="block">
              {lineThree.map((word) => (
                <span
                  key={word}
                  className="hero-word inline-block text-transparent [-webkit-text-stroke:1.5px_var(--foreground)]"
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>

          <p className="hero-reveal mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Crafting brands, designing products, building apps — your full-service partner for digital success.
          </p>

          <div className="hero-reveal mb-12 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>

          <div className="hero-reveal flex flex-wrap items-start gap-x-8 gap-y-6 border-t border-border pt-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-start gap-8">
                <StatCounter {...stat} />
                {index < stats.length - 1 && (
                  <div className="hidden h-10 w-px bg-border sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-reveal relative lg:col-span-5">
          <motion.div
            style={{ y: imageY, opacity: imageOpacity }}
            className="relative -mr-4 sm:-mr-6 lg:-mr-8 lg:translate-x-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src={HeroImage}
                alt=""
                width={600}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}

