import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ChevronRight, Home } from "lucide-react";
import { services, serviceIconMap } from "@/lib/data/services";
import { ServiceTableOfContents } from "@/components/services/service-toc";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbList, organizationRef, SITE_URL } from "@/lib/seo/schema";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
    },
  };
}

const tocItems = [
  { id: "features", label: "What we offer" },
  { id: "benefits", label: "Key benefits" },
  { id: "technologies", label: "Technologies" },
];

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = serviceIconMap[service.icon] || serviceIconMap.Code;
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-24">
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.fullDescription,
          serviceType: service.title,
          provider: organizationRef(),
          areaServed: { "@type": "Place", name: "Worldwide" },
          url: `${SITE_URL}/services/${service.slug}`,
        }}
      />
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 py-6 text-sm text-muted-foreground">
          <Link href="/" className="flex items-center gap-1.5 hover:text-foreground">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/services" className="hover:text-foreground">
            Services
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{service.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <Icon className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="font-display mb-4 text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {service.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="space-y-16 lg:col-span-2">
              {/* Features */}
              <div id="features" className="scroll-mt-24">
                <h2 className="font-display mb-8 text-2xl font-semibold text-foreground sm:text-3xl">
                  What we <span className="text-primary">offer</span>
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card p-5"
                    >
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div id="benefits" className="scroll-mt-24">
                <h2 className="font-display mb-8 text-2xl font-semibold text-foreground sm:text-3xl">
                  Key <span className="text-primary">benefits</span>
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={benefit} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-semibold text-primary">
                        {index + 1}
                      </span>
                      <p className="leading-relaxed text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div id="technologies" className="scroll-mt-24">
                <h2 className="font-display mb-8 text-2xl font-semibold text-foreground sm:text-3xl">
                  Technologies we <span className="text-primary">use</span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-4 py-2 font-mono text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <ServiceTableOfContents items={tocItems} />
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display mb-3 text-xl font-semibold text-foreground">
                    Ready to get started?
                  </h3>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    Let&apos;s discuss your project and see how we can help you achieve your goals.
                  </p>
                  <Button asChild className="mb-3 w-full">
                    <Link href="/contact">
                      Get a Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/portfolio">View Our Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-xl">
              <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
                Related <span className="text-primary">services</span>
              </h2>
              <p className="text-lg text-muted-foreground">Explore our other services that might interest you</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedServices.map((relatedService) => {
                const RelatedIcon = serviceIconMap[relatedService.icon] || serviceIconMap.Code;
                return (
                  <div key={relatedService.id} className="rounded-2xl border border-border bg-card p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <RelatedIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{relatedService.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {relatedService.description}
                    </p>
                    <Link
                      href={`/services/${relatedService.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Learn more<span className="sr-only"> about {relatedService.title}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-border bg-card p-12 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display mb-3 text-2xl font-semibold text-foreground sm:text-3xl">
                Ready to transform your <span className="text-primary">business?</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Let&apos;s work together to bring your vision to life with our {service.title.toLowerCase()} expertise.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
