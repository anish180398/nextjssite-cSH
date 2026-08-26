"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/motion";

const steps = [
  {
    title: "Discover",
    description:
      "We dig into your business, your users, and your competitors before a single pixel gets drawn — so every decision after this one is grounded in something real.",
  },
  {
    title: "Design",
    description:
      "Wireframes become interfaces, interfaces become systems. We design in the browser, not just in Figma, so what you approve is what actually ships.",
  },
  {
    title: "Build",
    description:
      "Clean, tested, production-grade code — built for the traffic and the team you'll have in two years, not just the demo you need next week.",
  },
  {
    title: "Launch",
    description:
      "Ship, measure, iterate. We stay in the loop after go-live, watching real usage data to sharpen what we built.",
  },
] as const;

function ProcessStep({
  step,
  index,
  progress,
  total,
}: {
  step: (typeof steps)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  total: number;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  // Fade window sits entirely inside this step's own segment (never bleeds
  // into a neighbor's), so only one step is ever partially visible at a
  // time — a quick cut in/out, then a long hold until the next transition.
  const fade = segment * 0.12;
  const keyframes = [start, start + fade, end - fade, end];
  const opacity = useTransform(progress, keyframes, [0, 1, 1, 0]);
  const y = useTransform(progress, keyframes, [16, 0, 0, -16]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:gap-10"
    >
      <span className="font-display text-6xl font-semibold text-primary/25 sm:text-8xl">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="max-w-xl">
        <h3 className="font-display mb-3 text-3xl font-semibold text-foreground sm:text-4xl">
          {step.title}
        </h3>
        <p className="text-lg leading-relaxed text-muted-foreground">{step.description}</p>
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const wrapperRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  if (prefersReducedMotion) {
    return (
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header />
          <div className="mt-16 space-y-14">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-start gap-4 sm:flex-row sm:gap-10">
                <span className="font-display text-6xl font-semibold text-primary/25 sm:text-7xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="max-w-xl">
                  <h3 className="font-display mb-3 text-2xl font-semibold text-foreground sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={wrapperRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden bg-background py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header />

          <div className="relative mt-16 h-[240px] sm:h-[200px]">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.title}
                step={step}
                index={index}
                progress={scrollYProgress}
                total={steps.length}
              />
            ))}
          </div>

          <div className="mt-16 h-1 w-full overflow-hidden rounded-full bg-border">
            <motion.div
              className="h-full origin-left bg-primary"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
          <div className="mt-3 flex justify-between font-mono text-xs text-muted-foreground">
            {steps.map((step) => (
              <span key={step.title}>{step.title}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="flex flex-col items-start gap-4">
      <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm font-semibold text-muted-foreground">
        How We Work
      </span>
      <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
        From idea to <span className="text-primary">launch</span>
      </h2>
    </div>
  );
}
