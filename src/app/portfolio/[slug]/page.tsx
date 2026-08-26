import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, ArrowRight, Home, ChevronRight } from "lucide-react";
import { getPortfolioItemBySlug, getAllPortfolioItems } from "@/lib/contentful";
import RichText from "@/components/ui/rich-text";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface PortfolioPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const portfolioItems = await getAllPortfolioItems();
    return portfolioItems.map((item) => ({
      slug: item.fields.slug,
    }));
  } catch (error) {
    console.error("Error generating static params for portfolio:", error);
    return [];
  }
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const portfolioItem = await getPortfolioItemBySlug(slug);

    if (!portfolioItem) {
      return {
        title: "Project Not Found",
        description: "The requested project could not be found.",
      };
    }

    const imageUrl = portfolioItem.fields.coverImage?.fields?.file?.url
      ? `https:${portfolioItem.fields.coverImage.fields.file.url}`
      : undefined;

    return {
      title: portfolioItem.fields.title,
      description: portfolioItem.fields.excerpt,
      openGraph: {
        title: portfolioItem.fields.title,
        description: portfolioItem.fields.excerpt,
        url: `https://reignofvision.com/portfolio/${portfolioItem.fields.slug}`,
        type: "article",
        images: imageUrl ? [imageUrl] : undefined,
      },
    };
  } catch (error) {
    return {
      title: "Portfolio Project",
      description: "Discover our latest digital solutions and projects.",
    };
  }
}

const fallbackFeatures = [
  "Responsive design that works on all devices",
  "Modern, intuitive user interface",
  "Optimized performance and fast loading times",
  "SEO-friendly architecture",
  "Secure and scalable backend",
  "Comprehensive testing and quality assurance",
];

export default async function PortfolioItemPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  let portfolioItem;

  try {
    portfolioItem = await getPortfolioItemBySlug(slug);
  } catch (error) {
    console.error("Error fetching portfolio item:", error);
  }

  if (!portfolioItem) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 py-6 text-sm text-muted-foreground">
          <Link href="/" className="flex items-center gap-1.5 hover:text-foreground">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/portfolio" className="hover:text-foreground">
            Portfolio
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{portfolioItem.fields.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="mb-10 inline-flex items-center gap-2 text-sm text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-6 inline-flex items-center rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Case Study
              </span>
              <h1 className="font-display mb-6 text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
                {portfolioItem.fields.title}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{portfolioItem.fields.excerpt}</p>

              <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                {formatDate(portfolioItem.sys.createdAt)}
              </div>

              {portfolioItem.fields.tags && portfolioItem.fields.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {portfolioItem.fields.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
              {portfolioItem.fields.coverImage?.fields?.file?.url ? (
                <Image
                  src={`https:${portfolioItem.fields.coverImage.fields.file.url}`}
                  alt={portfolioItem.fields.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center text-6xl">🚀</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                {portfolioItem.fields.body ? (
                  <RichText document={portfolioItem.fields.body} />
                ) : (
                  <div className="space-y-10">
                    <div>
                      <h2 className="font-display mb-4 text-2xl font-semibold text-foreground">
                        Project <span className="text-primary">Overview</span>
                      </h2>
                      <p className="leading-relaxed text-muted-foreground">
                        This project represents our commitment to delivering exceptional digital solutions that
                        meet and exceed client expectations. We focused on creating a user-centric design that
                        balances aesthetics with functionality.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-display mb-4 text-xl font-semibold text-foreground">Key Features</h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {fallbackFeatures.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 rounded-lg border border-border p-3">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display mb-4 text-xl font-semibold text-foreground">Results &amp; Impact</h3>
                      <p className="leading-relaxed text-muted-foreground">
                        The successful implementation of this project resulted in improved user engagement,
                        increased conversion rates, and enhanced overall business performance for our client.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display mb-6 text-xl font-semibold text-foreground">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Category</div>
                    <div className="mt-1 text-foreground">{portfolioItem.fields.tags?.[0] || "Web Development"}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Timeline</div>
                    <div className="mt-1 text-foreground">3-6 months</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Status</div>
                    <span className="mt-1 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Completed
                    </span>
                  </div>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="mb-2 font-semibold text-foreground">Interested in a similar project?</h4>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    Let&apos;s discuss how we can help you achieve your goals.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Get In Touch
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
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
                Ready to start your <span className="text-primary">project?</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Let&apos;s create something amazing together. Contact us to discuss your ideas and bring your
                vision to life.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
