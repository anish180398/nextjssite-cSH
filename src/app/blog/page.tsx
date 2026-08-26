import { Metadata } from "next";
import { Suspense } from "react";
import { getAllBlogPosts } from "@/lib/contentful";
import { Button } from "@/components/ui/button";
import BlogGrid from "@/components/blog/blog-grid";
import NewsletterSignup from "@/components/ui/newsletter-signup";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stay updated with the latest insights, trends, and best practices in web development, design, and digital strategy from the Kryttr team.",
  openGraph: {
    title: "Blog - Kryttr Digital Agency",
    description: "Expert insights on web development, design trends, and digital strategy to help your business thrive online.",
    url: "https://reignofvision.com/blog",
  }
};

function BlogGridSkeleton() {
  return (
    <div className="space-y-12">
      <div className="mx-auto h-12 w-96 max-w-full animate-pulse rounded-xl bg-muted" />
      <div className="flex flex-wrap justify-center gap-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-9 w-24 animate-pulse rounded-full bg-muted" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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

async function BlogSection() {
  let blogPosts: Awaited<ReturnType<typeof getAllBlogPosts>> = [];

  try {
    blogPosts = await getAllBlogPosts();
  } catch (error) {
    console.error("BlogSection Error:", error);
  }

  if (blogPosts.length === 0) {
    return (
      <div className="mx-auto max-w-lg py-20 text-center">
        <h3 className="mb-4 text-2xl font-semibold text-foreground">No Blog Posts Yet</h3>
        <p className="mb-8 leading-relaxed text-muted-foreground">
          We&apos;re working on creating valuable content for you. Check back soon for insights on web
          development, design, and digital strategy.
        </p>
        <Button asChild variant="outline">
          <a href="/contact">Get Updates</a>
        </Button>
      </div>
    );
  }

  return <BlogGrid posts={blogPosts} />;
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="lg:col-span-8">
            <span className="mb-6 inline-flex items-center rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Knowledge &amp; Insights
            </span>
            <h1 className="font-display mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Stay updated with the latest insights, trends, and best practices in web development,
              design, and digital strategy from our expert team.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 border-t border-border pt-6 lg:col-span-4 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <div className="font-display text-3xl font-semibold text-foreground">50+</div>
              <div className="mt-1 text-sm text-muted-foreground">Articles Published</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-foreground">10k+</div>
              <div className="mt-1 text-sm text-muted-foreground">Monthly Readers</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-foreground">15+</div>
              <div className="mt-1 text-sm text-muted-foreground">Expert Authors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
              Latest <span className="text-primary">Articles</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover insights, tutorials, and industry trends that help you stay ahead in the digital world.
            </p>
          </div>

          <Suspense fallback={<BlogGridSkeleton />}>
            <BlogSection />
          </Suspense>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 rounded-3xl border border-border bg-card p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-6 inline-flex items-center rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Stay Connected
              </span>
              <h3 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
                Never miss an <span className="text-primary">update</span>
              </h3>
              <p className="max-w-xl text-muted-foreground">
                Get the latest insights, tutorials, and industry news delivered directly to your inbox.
              </p>
            </div>

            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
}
