import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ChevronRight, Home } from "lucide-react";
import { technologies, technologyIconMap } from "@/lib/data/technologies";
import { services } from "@/lib/data/services";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbList, SITE_URL } from "@/lib/seo/schema";

export async function generateStaticParams() {
  return technologies.map((tech) => ({ slug: tech.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tech = technologies.find((t) => t.slug === slug);

  if (!tech) {
    return { title: "Technology Not Found" };
  }

  return {
    title: `${tech.name} Development`,
    description: tech.description,
    alternates: {
      canonical: `${SITE_URL}/technologies/${tech.slug}`,
    },
    openGraph: {
      title: `${tech.name} Development`,
      description: tech.description,
      type: "website",
    },
  };
}

export default async function TechnologyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tech = technologies.find((t) => t.slug === slug);

  if (!tech) {
    notFound();
  }

  const Icon = technologyIconMap[tech.icon] || technologyIconMap.Braces;
  const relatedServices = services.filter((s) => tech.relatedServiceSlugs.includes(s.slug));
  const otherTechnologies = technologies.filter((t) => t.id !== tech.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-24">
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Technologies", path: "/technologies" },
          { name: tech.name, path: `/technologies/${tech.slug}` },
        ])}
      />
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 py-6 text-sm text-muted-foreground">
          <Link href="/" className="flex items-center gap-1.5 hover:text-foreground">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/technologies" className="hover:text-foreground">
            Technologies
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{tech.name}</span>
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
              <div className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {tech.category}
              </div>
              <h1 className="font-display mb-4 text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
                {tech.name}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {tech.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display mb-8 text-2xl font-semibold text-foreground sm:text-3xl">
                Where we <span className="text-primary">use it</span>
              </h2>
              <div className="space-y-4">
                {tech.useCases.map((useCase, index) => (
                  <div key={useCase} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <p className="leading-relaxed text-foreground">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display mb-3 text-xl font-semibold text-foreground">
                  Building with {tech.name}?
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Let&apos;s talk about your project and how our {tech.name} experience can help.
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
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-xl">
              <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
                Related <span className="text-primary">services</span>
              </h2>
              <p className="text-lg text-muted-foreground">The services where {tech.name} shows up most.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedServices.map((service) => (
                <div key={service.id} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-2 font-semibold text-foreground">{service.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Learn more<span className="sr-only"> about {service.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other technologies */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-xl">
            <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
              Other <span className="text-primary">technologies</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {otherTechnologies.map((other) => {
              const OtherIcon = technologyIconMap[other.icon] || technologyIconMap.Braces;
              return (
                <Link
                  key={other.id}
                  href={`/technologies/${other.slug}`}
                  className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <OtherIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{other.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{other.description}</p>
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
                Ready to build with <span className="text-primary">{tech.name}?</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Let&apos;s discuss your project and see if {tech.name} is the right fit.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/technologies">View All Technologies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
