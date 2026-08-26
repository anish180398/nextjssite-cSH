"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Users, DollarSign, Rocket, Palette } from "lucide-react";
import { revealUp, staggerContainer } from "@/lib/motion";

const values = [
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Benefit from our committed teams who ensure your success is personal. Count on expert guidance and exceptional results throughout your project journey.",
  },
  {
    icon: DollarSign,
    title: "Simplicity and Affordability",
    description: "Find easy-to-use, affordable solutions with our team. Our products make procurement simple and keep projects within budget.",
  },
  {
    icon: Rocket,
    title: "Fail-fast Approach",
    description: "Build only what is necessary to test your core assumptions, gather real user feedback quickly, and pivot or kill features that don't meet your goals.",
  },
  {
    icon: Palette,
    title: "User-Centric Design",
    description: "Experience the difference with our user-focused design — where functionality meets practicality for an enhanced work experience.",
  },
];

export function ValuesSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-16 lg:flex-row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealUp}
            className="lg:w-1/2"
          >
            <h2 className="font-display mb-6 text-2xl font-semibold leading-tight text-foreground sm:text-3xl lg:text-4xl">
              Achieving what matters most to <span className="text-primary">you</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We offer innovative digital services but first and foremost, we believe that building a
              committed partnership with you first is vital in driving your business to fundamentally
              advance in this digital universe.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1)}
            className="divide-y divide-border border-t border-border lg:w-1/2"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} variants={revealUp} className="flex items-start gap-5 py-6">
                  <span className="font-display shrink-0 text-xl font-semibold text-muted-foreground/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl border border-border bg-card p-12 text-center"
        >
          <h3 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
            Ready to experience the <span className="text-primary">difference?</span>
          </h3>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-muted-foreground">
            Let&apos;s discuss how our values-driven approach can help transform your digital presence
            and achieve the results that matter most to your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start Your Journey
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3.5 font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

