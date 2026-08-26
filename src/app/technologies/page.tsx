import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { technologies, technologyIconMap } from "@/lib/data/technologies";

export const metadata: Metadata = {
  title: "Technologies | Kryttr",
  description: "The core languages, frameworks, and platforms Kryttr builds with — from React and Next.js to native iOS and Android.",
  openGraph: {
    title: "Technologies | Kryttr",
    description: "The core languages, frameworks, and platforms Kryttr builds with.",
    type: "website",
  },
};

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="lg:col-span-8">
            <span className="mb-6 inline-flex items-center rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Our Tech Stack
            </span>
            <h1 className="font-display mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Technologies we <span className="text-primary">build with</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              We pick technology to fit the problem, not the other way around. Here&apos;s the core stack
              we reach for most often, and why.
            </p>
          </div>
          <div className="flex flex-col justify-end border-t border-border pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="font-display text-5xl font-semibold text-primary">
              {String(technologies.length).padStart(2, "0")}
            </div>
            <div className="mt-2 text-muted-foreground">Core technologies across web, mobile, and cloud.</div>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
              The <span className="text-primary">stack</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Every technology here backs at least one of our services — nothing on this list is
              theoretical.
            </p>
          </div>

          <div className="divide-y divide-border border-t border-border">
            {technologies.map((tech, index) => {
              const Icon = technologyIconMap[tech.icon] || technologyIconMap.Braces;
              return (
                <Link
                  key={tech.id}
                  href={`/technologies/${tech.slug}`}
                  className="group flex flex-col gap-6 py-8 transition-colors hover:bg-muted/40 sm:flex-row sm:items-center sm:px-4"
                >
                  <span className="font-display shrink-0 text-2xl font-semibold text-muted-foreground/40 sm:w-14">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {tech.category}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{tech.name}</h3>
                    <p className="leading-relaxed text-muted-foreground">{tech.description}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">
                    Learn more<span className="sr-only"> about {tech.name}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-border bg-card p-12 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display mb-3 text-2xl font-semibold text-foreground sm:text-3xl">
                Not sure what you <span className="text-primary">need?</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Tell us what you&apos;re building and we&apos;ll recommend the right stack for it.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
