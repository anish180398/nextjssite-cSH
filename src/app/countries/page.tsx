import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { countries, countryIconMap } from "@/lib/data/countries";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbList, itemList } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Operated Countries",
  description:
    "The countries Kryttr works with — United States, United Kingdom, India, Germany, Australia, Canada, and Japan. Remote digital development with real regional awareness.",
  keywords: [
    "digital agency countries served",
    "international web development company",
    "outsourced software development by country",
  ],
  alternates: {
    canonical: "https://kryttr.com/countries",
  },
  openGraph: {
    title: "Operated Countries | Kryttr",
    description: "The countries Kryttr works with, and what working with us looks like from each one.",
    type: "website",
  },
};

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <JsonLd data={breadcrumbList([{ name: "Home", path: "/" }, { name: "Operated Countries", path: "/countries" }])} />
      <JsonLd
        data={itemList(
          "Operated Countries",
          countries.map((c) => ({ name: c.name, path: `/countries/${c.slug}`, description: c.heroTagline }))
        )}
      />

      {/* Hero */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="lg:col-span-8">
            <span className="mb-6 inline-flex items-center rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Where We Work
            </span>
            <h1 className="font-display mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Operated <span className="text-primary">Countries</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              We work remotely with businesses across these countries — each with its own working-hours
              overlap, relevant regulations, and market context we design around.
            </p>
          </div>
          <div className="flex flex-col justify-end border-t border-border pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="font-display text-5xl font-semibold text-primary">
              {String(countries.length).padStart(2, "0")}
            </div>
            <div className="mt-2 text-muted-foreground">Countries with dedicated regional context.</div>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
              Businesses we <span className="text-primary">work with</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Pick your country to see how we work with businesses there.
            </p>
          </div>

          <div className="divide-y divide-border border-t border-border">
            {countries.map((country, index) => {
              const Icon = countryIconMap[country.icon] || countryIconMap.Flag;
              return (
                <Link
                  key={country.id}
                  href={`/countries/${country.slug}`}
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
                      {country.region}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{country.name}</h3>
                    <p className="leading-relaxed text-muted-foreground">{country.heroTagline}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">
                    Learn more<span className="sr-only"> about working with us from {country.name}</span>
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
                Don&apos;t see your <span className="text-primary">country?</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                We work with businesses well beyond this list — get in touch and tell us about your project.
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
