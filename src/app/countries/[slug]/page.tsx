import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Home, Clock, ShieldCheck, Wrench } from "lucide-react";
import { countries, countryIconMap } from "@/lib/data/countries";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbList, organizationRef, SITE_URL } from "@/lib/seo/schema";

export async function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);

  if (!country) {
    return { title: "Country Not Found" };
  }

  // hreflang alternates across every country page plus the untargeted default.
  const languageAlternates: Record<string, string> = { "x-default": SITE_URL };
  for (const c of countries) {
    languageAlternates[c.hreflang] = `${SITE_URL}/countries/${c.slug}`;
  }

  return {
    title: country.heroTagline,
    description: country.overview,
    keywords: country.keywords,
    alternates: {
      canonical: `${SITE_URL}/countries/${country.slug}`,
      languages: languageAlternates,
    },
    openGraph: {
      title: `${country.heroTagline} | Kryttr`,
      description: country.overview,
      type: "website",
    },
  };
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);

  if (!country) {
    notFound();
  }

  const Icon = countryIconMap[country.icon] || countryIconMap.Flag;
  const relatedServices = services.filter((s) => country.relatedServiceSlugs.includes(s.slug));
  const relatedIndustries = industries.filter((i) => country.relatedIndustrySlugs.includes(i.slug));
  const otherCountries = countries.filter((c) => c.id !== country.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-24">
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Operated Countries", path: "/countries" },
          { name: country.name, path: `/countries/${country.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Digital development services for ${country.name}`,
          description: country.overview,
          provider: organizationRef(),
          areaServed: { "@type": "Country", name: country.name },
          url: `${SITE_URL}/countries/${country.slug}`,
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
          <Link href="/countries" className="hover:text-foreground">
            Operated Countries
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{country.name}</span>
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
                {country.region}
              </div>
              <h1 className="font-display mb-4 text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
                {country.heroTagline}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {country.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working with us + compliance + platforms */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">Working across time zones</h2>
              <p className="leading-relaxed text-muted-foreground">{country.workingHoursNote}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">What we build with in mind</h2>
              <ul className="space-y-2">
                {country.complianceNotes.map((note) => (
                  <li key={note} className="text-sm leading-relaxed text-muted-foreground">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">Platforms we reach for</h2>
              <div className="flex flex-wrap gap-2">
                {country.relevantPlatforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <p className="leading-relaxed text-foreground">{country.businessNote}</p>
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-xl">
              <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
                Services for <span className="text-primary">{country.name}</span>
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

      {/* Related industries */}
      {relatedIndustries.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-xl">
              <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
                Relevant <span className="text-primary">industries</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedIndustries.map((industry) => (
                <div key={industry.id} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-2 font-semibold text-foreground">{industry.name}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{industry.description}</p>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Learn more<span className="sr-only"> about {industry.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other countries */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-xl">
            <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
              Other <span className="text-primary">countries</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {otherCountries.map((other) => {
              const OtherIcon = countryIconMap[other.icon] || countryIconMap.Flag;
              return (
                <Link
                  key={other.id}
                  href={`/countries/${other.slug}`}
                  className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <OtherIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{other.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{other.heroTagline}</p>
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
                Building a business in <span className="text-primary">{country.name}?</span>
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
                <Link href="/countries">View All Countries</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
