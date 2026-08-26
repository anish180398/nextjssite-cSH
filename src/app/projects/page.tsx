import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllProjects } from "@/lib/contentful";
import { Button } from "@/components/ui/button";
import ProjectsGrid from "@/components/projects/projects-grid";
import ProjectStats from "@/components/projects/project-stats";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbList } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Explore our collection of innovative digital products and solutions built for public users. Discover tools and applications that showcase our technical expertise and creativity.",
  alternates: {
    canonical: "https://kryttr.com/projects",
  },
  openGraph: {
    title: "Products - Kryttr Digital Agency",
    description: "Discover the innovative digital products and solutions we've built for public users across various domains.",
    url: "https://kryttr.com/projects",
  }
};

function ProjectsGridSkeleton() {
  return (
    <div className="space-y-12">
      <div className="flex flex-wrap justify-center gap-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-9 w-24 animate-pulse rounded-full bg-muted" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-video animate-pulse bg-muted" />
            <div className="p-8">
              <div className="mb-4 h-6 w-3/4 animate-pulse rounded bg-muted" />
              <div className="mb-2 h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function ProjectsSection() {
  try {
    const projectItems = await getAllProjects();
    if (projectItems.length > 0) {
      return <ProjectsGrid items={projectItems} />;
    }
    return (
      <div className="py-20 text-center">
        <h3 className="mb-3 text-xl font-semibold text-foreground">No Products Available Yet</h3>
        <p className="text-muted-foreground">
          We&apos;re working on some amazing products. Check back soon to see our latest creations!
        </p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching project items:", error);
    return (
      <div className="py-20 text-center">
        <h3 className="mb-3 text-xl font-semibold text-foreground">Error Loading Products</h3>
        <p className="text-muted-foreground">We encountered an issue loading our products. Please try again later.</p>
      </div>
    );
  }
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <JsonLd data={breadcrumbList([{ name: "Home", path: "/" }, { name: "Products", path: "/projects" }])} />
      {/* Hero */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="lg:col-span-8">
            <span className="mb-6 inline-flex items-center rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Our Product Collection
            </span>
            <h1 className="font-display mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Discover our <span className="text-primary">products</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Explore our collection of innovative digital products and solutions built for public users.
              Discover tools and applications that showcase our technical expertise and creativity.
            </p>
          </div>
          <div className="border-t border-border pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <ProjectStats />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
              Our featured <span className="text-primary">products</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our collection of innovative digital products and tools built for public users and developers.
            </p>
          </div>

          <Suspense fallback={<ProjectsGridSkeleton />}>
            <ProjectsSection />
          </Suspense>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-border bg-card p-12 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display mb-3 text-2xl font-semibold text-foreground sm:text-3xl">
                Ready to start your <span className="text-primary">product?</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Let&apos;s create something amazing together. Contact us to discuss your ideas and turn them into
                reality.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
