import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Share2, Twitter, Facebook, Linkedin, ArrowRight, Home, ChevronRight } from "lucide-react";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/contentful";
import RichText from "@/components/ui/rich-text";
import { Button } from "@/components/ui/button";
import { formatDate, getReadingTime } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbList, organizationRef, SITE_URL } from "@/lib/seo/schema";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const blogPosts = await getAllBlogPosts();
    return blogPosts.map((post) => ({
      slug: post.fields.slug,
    }));
  } catch (error) {
    console.error("Error generating static params for blog posts:", error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const blogPost = await getBlogPostBySlug(slug);

    if (!blogPost) {
      return {
        title: "Blog Post Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    const imageUrl = blogPost.fields.coverImage?.fields?.file?.url
      ? `https:${blogPost.fields.coverImage.fields.file.url}`
      : undefined;

    return {
      title: blogPost.fields.title,
      description: blogPost.fields.excerpt,
      authors: [{ name: blogPost.fields.author || "Kryttr" }],
      alternates: {
        canonical: `${SITE_URL}/blog/${blogPost.fields.slug}`,
      },
      openGraph: {
        title: blogPost.fields.title,
        description: blogPost.fields.excerpt,
        url: `https://kryttr.com/blog/${blogPost.fields.slug}`,
        type: "article",
        publishedTime: blogPost.fields.publishedDate || blogPost.sys.createdAt,
        images: imageUrl ? [imageUrl] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: blogPost.fields.title,
        description: blogPost.fields.excerpt,
        images: imageUrl ? [imageUrl] : undefined,
      },
    };
  } catch (error) {
    return {
      title: "Blog Post",
      description: "Read the latest insights from Kryttr.",
    };
  }
}

function ShareButtons({ title, url }: { title: string; url: string }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`Check out this article: ${title}`);

  return (
    <div className="flex gap-3">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
      >
        <Twitter className="h-4 w-4" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
      >
        <Facebook className="h-4 w-4" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
      >
        <Linkedin className="h-4 w-4" />
      </a>
    </div>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  let blogPost;

  try {
    blogPost = await getBlogPostBySlug(slug);
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }

  if (!blogPost) {
    notFound();
  }

  const readingTime = blogPost.fields.body
    ? `${getReadingTime(JSON.stringify(blogPost.fields.body))} min read`
    : "5 min read";

  const currentUrl = `https://kryttr.com/blog/${blogPost.fields.slug}`;
  const blogImageUrl = blogPost.fields.coverImage?.fields?.file?.url
    ? `https:${blogPost.fields.coverImage.fields.file.url}`
    : undefined;

  return (
    <div className="min-h-screen bg-background pt-24">
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: blogPost.fields.title, path: `/blog/${blogPost.fields.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blogPost.fields.title,
          description: blogPost.fields.excerpt,
          image: blogImageUrl,
          url: currentUrl,
          datePublished: blogPost.fields.publishedDate || blogPost.sys.createdAt,
          dateModified: blogPost.sys.updatedAt || blogPost.fields.publishedDate,
          author: {
            "@type": "Organization",
            name: blogPost.fields.author || "Kryttr",
          },
          publisher: organizationRef(),
          mainEntityOfPage: { "@type": "WebPage", "@id": currentUrl },
          keywords: blogPost.fields.tags?.join(", "),
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
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="max-w-xs truncate text-foreground">{blogPost.fields.title}</span>
        </nav>
      </div>

      {/* Article header */}
      <article className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="mb-8 inline-flex items-center rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Featured Article
          </span>

          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-primary" />
              {blogPost.fields.author || "Kryttr"}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary" />
              {formatDate(blogPost.fields.publishedDate || blogPost.sys.createdAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              {readingTime}
            </span>
          </div>

          <h1 className="font-display mb-6 text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
            {blogPost.fields.title}
          </h1>

          <p className="mb-8 text-xl leading-relaxed text-muted-foreground">{blogPost.fields.excerpt}</p>

          {blogPost.fields.tags && blogPost.fields.tags.length > 0 && (
            <div className="mb-10 flex flex-wrap gap-2">
              {blogPost.fields.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {blogPost.fields.coverImage?.fields?.file?.url && (
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src={`https:${blogPost.fields.coverImage.fields.file.url}`}
                alt={blogPost.fields.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          )}
        </div>
      </article>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                {blogPost.fields.body ? (
                  <RichText document={blogPost.fields.body} />
                ) : (
                  <div className="space-y-8">
                    <div>
                      <h2 className="font-display mb-4 text-2xl font-semibold text-foreground">Article Content</h2>
                      <p className="leading-relaxed text-muted-foreground">
                        This is a sample blog post content. In a real implementation, this would be
                        populated with rich text content from your CMS.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display mb-3 text-xl font-semibold text-foreground">Key Insights</h3>
                      <p className="leading-relaxed text-muted-foreground">
                        The blog post content would include detailed information about the topic,
                        images, code examples, and other relevant content that provides value to your
                        readers.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                    <Share2 className="h-4 w-4 text-primary" />
                    Share Article
                  </h3>
                  <ShareButtons title={blogPost.fields.title} url={currentUrl} />
                </div>

                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                    <User className="h-4 w-4 text-primary" />
                    About the Author
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {blogPost.fields.author || "Kryttr"} is a passionate developer and writer, sharing
                    insights about web development and digital innovation.
                  </p>
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles CTA */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
            Related <span className="text-primary">Articles</span>
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            Continue exploring our latest insights and expert perspectives
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
