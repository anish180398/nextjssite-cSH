import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import { industries, industryIconMap } from "@/lib/data/industries";
import { services } from "@/lib/data/services";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbList, SITE_URL } from "@/lib/seo/schema";

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: `${industry.name} Solutions`,
    description: industry.description,
    alternates: {
      canonical: `${SITE_URL}/industries/${industry.slug}`,
    },
    openGraph: {
      title: `${industry.name} Solutions`,
      description: industry.description,
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const Icon = industryIconMap[industry.icon] || industryIconMap.Briefcase;
  const relatedServices = services.filter((s) => industry.relatedServiceSlugs.includes(s.slug));
  const otherIndustries = industries.filter((i) => i.id !== industry.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-24">
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
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
          <Link href="/industries" className="hover:text-foreground">
            Industries
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{industry.name}</span>
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
                {industry.name}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {industry.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges + solutions */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display mb-8 text-2xl font-semibold text-foreground sm:text-3xl">
                Common <span className="text-primary">challenges</span>
              </h2>
              <div className="space-y-4">
                {industry.challenges.map((challenge) => (
                  <div key={challenge} className="rounded-xl border border-border bg-card p-5">
                    <p className="leading-relaxed text-foreground">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display mb-8 text-2xl font-semibold text-foreground sm:text-3xl">
                How we <span className="text-primary">help</span>
              </h2>
              <div className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <div key={solution} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <p className="leading-relaxed text-foreground">{solution}</p>
                  </div>
                ))}
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
                Relevant <span className="text-primary">services</span>
              </h2>
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

      {/* Other industries */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-xl">
            <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
              Other <span className="text-primary">industries</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {otherIndustries.map((other) => {
              const OtherIcon = industryIconMap[other.icon] || industryIconMap.Briefcase;
              return (
                <Link
                  key={other.id}
                  href={`/industries/${other.slug}`}
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
                Building for <span className="text-primary">{industry.name}?</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Let&apos;s talk about what you&apos;re building and how we can help.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/industries">View All Industries</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
