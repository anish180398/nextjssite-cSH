import { Metadata } from "next";
import Link from "next/link";
import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react";
import { AboutStats } from "@/components/sections/about-stats";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Kryttr - a passionate team of developers, designers, and digital strategists dedicated to building exceptional web experiences that drive business results.",
  openGraph: {
    title: "About Kryttr - Our Story & Team",
    description: "Meet the talented team behind Kryttr and discover our mission to transform businesses through innovative digital solutions.",
    url: "https://reignofvision.com/about",
  }
};

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that drive your business forward.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We work as an extension of your team.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of the curve with the latest technologies and best practices.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We never compromise on quality and attention to detail in our work.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="lg:col-span-8">
            <span className="mb-6 inline-flex items-center rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              About Our Journey
            </span>
            <h1 className="font-display mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Building digital experiences that <span className="text-primary">matter</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              We&apos;re a passionate team of developers, designers, and digital strategists
              dedicated to creating exceptional web experiences that drive real business results.
            </p>
          </div>
          <div className="flex flex-col justify-end border-t border-border pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="font-display text-5xl font-semibold text-primary">2021</div>
            <div className="mt-2 text-muted-foreground">
              The year we started building — now a full-service partner to 100+ businesses.
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display sticky top-24 text-2xl font-semibold text-foreground sm:text-3xl">
                Our <span className="text-primary">Story</span>
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-8">
              <p>
                Kryttr was founded in 2021 with a simple mission: to help businesses
                thrive in the digital age through exceptional web development and design.
                We believe that great digital experiences shouldn&apos;t be a luxury reserved
                for large corporations.
              </p>
              <p>
                Starting as a small team of passionate developers, we&apos;ve grown into a
                full-service digital agency that has helped over 100+ businesses transform
                their online presence and achieve their goals.
              </p>
              <p>
                Today, we continue to push the boundaries of what&apos;s possible on the web,
                combining cutting-edge technology with thoughtful design to create
                solutions that not only look great but deliver measurable results.
              </p>
            </div>
          </div>

          <AboutStats />
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="divide-y divide-border border-t border-border">
            {values.map((value, index) => (
              <div key={value.title} className="flex items-start gap-6 py-8">
                <span className="font-display shrink-0 text-2xl font-semibold text-muted-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-border bg-card p-12 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display mb-3 text-2xl font-semibold text-foreground sm:text-3xl">
                Ready to work <span className="text-primary">together?</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Let&apos;s discuss your project and see how we can help you achieve your goals.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
