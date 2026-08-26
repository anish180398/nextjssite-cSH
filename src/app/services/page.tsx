import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, serviceIconMap, type Service } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Our Services | Kryttr",
  description: "Comprehensive digital solutions including web development, mobile apps, UI/UX design, SEO, and digital strategy consulting.",
  openGraph: {
    title: "Our Services | Kryttr",
    description: "Comprehensive digital solutions including web development, mobile apps, UI/UX design, SEO, and digital strategy consulting.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Kryttr",
    description: "Comprehensive digital solutions including web development, mobile apps, UI/UX design, SEO, and digital strategy consulting.",
  },
};

const process = [
  { step: "01", title: "Discovery", description: "Understanding your business goals and requirements" },
  { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
  { step: "03", title: "Development", description: "Building your solution with best practices" },
  { step: "04", title: "Launch", description: "Deploying and optimizing for success" },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = serviceIconMap[service.icon] || serviceIconMap.Code;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col gap-6 py-8 transition-colors hover:bg-muted/40 sm:flex-row sm:items-center sm:px-4"
    >
      <span className="font-display shrink-0 text-2xl font-semibold text-muted-foreground/40 sm:w-14">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="mb-2 text-xl font-semibold text-foreground">{service.title}</h3>
        <p className="leading-relaxed text-muted-foreground">{service.description}</p>
      </div>
      <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">
        Learn more<span className="sr-only"> about {service.title}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="lg:col-span-8">
            <span className="mb-6 inline-flex items-center rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Digital Solutions &amp; Services
            </span>
            <h1 className="font-display mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              We offer comprehensive digital solutions to help your business thrive in the modern digital
              landscape. From web development to digital marketing, we&apos;ve got you covered.
            </p>
          </div>
          <div className="flex flex-col justify-end border-t border-border pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="font-display text-5xl font-semibold text-primary">
              {String(services.length).padStart(2, "0")}
            </div>
            <div className="mt-2 text-muted-foreground">Core service lines, one accountable team.</div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
              What we <span className="text-primary">do</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our expert team delivers cutting-edge solutions tailored to your business needs
            </p>
          </div>

          <div className="divide-y divide-border border-t border-border">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-border sm:block" />
            <div className="space-y-10">
              {process.map((step) => (
                <div key={step.step} className="relative flex items-start gap-6 sm:gap-8">
                  <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-border bg-background font-display text-xl font-semibold text-primary">
                    {step.step}
                  </span>
                  <div className="pt-4">
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-border bg-card p-12 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display mb-3 text-2xl font-semibold text-foreground sm:text-3xl">
                Ready to get <span className="text-primary">started?</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Let&apos;s discuss your project and see how we can help bring your vision to life.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
