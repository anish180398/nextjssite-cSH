import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Facebook, Linkedin, ArrowRight, Home, ChevronRight } from "lucide-react";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/contentful";
import RichText from "@/components/ui/rich-text";
import { Button } from "@/components/ui/button";
import { formatDate, getReadingTime } from "@/lib/utils";

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
      authors: [{ name: blogPost.fields.author || "Reign of Vision" }],
      openGraph: {
        title: `${blogPost.fields.title} - Reign of Vision Blog`,
        description: blogPost.fields.excerpt,
        url: `https://reignofvision.com/blog/${blogPost.fields.slug}`,
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
      description: "Read the latest insights from Reign of Vision.",
    };
  }
}

function ShareButtons({ title, url }: { title: string; url: string }) {
  const shareText = `Check out this article: ${title}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(shareText);

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-600 font-medium">Share:</span>
      <div className="flex space-x-2">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
        >
          <Twitter className="h-4 w-4" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-lg transition-colors"
        >
          <Facebook className="h-4 w-4" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
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

  const currentUrl = `https://reignofvision.com/blog/${blogPost.fields.slug}`;

  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Breadcrumb Navigation */}
      <nav className="bg-brand-dark border-b border-brand-white/10 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-brand-white/70 pb-4">
            <Link href="/" className="hover:text-brand-violet transition-colors flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-brand-violet transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-brand-white truncate">{blogPost.fields.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12 bg-gradient-to-br from-brand-dark to-brand-violet/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-brand-violet hover:text-brand-violet/80 mb-8 group transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-brand-white/60 mb-6">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{blogPost.fields.author || "Reign of Vision"}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(blogPost.fields.publishedDate || blogPost.sys.createdAt)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{readingTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-brand-white mb-6 leading-tight">
              {blogPost.fields.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-brand-white/70 leading-relaxed mb-8">
              {blogPost.fields.excerpt}
            </p>

            {/* Tags */}
            {blogPost.fields.tags && blogPost.fields.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {blogPost.fields.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-brand-violet/20 text-brand-violet border border-brand-violet/30 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Cover Image */}
            {blogPost.fields.coverImage?.fields?.file?.url && (
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8 border border-brand-white/10">
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
        </div>
      </article>

      {/* Article Content */}
      <section className="py-12 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  {blogPost.fields.body ? (
                    <RichText document={blogPost.fields.body} />
                  ) : (
                    <div className="space-y-6">
                      <p className="text-brand-white/80 leading-relaxed">
                        This is a sample blog post content. In a real implementation, this would be populated with rich text content from your CMS.
                      </p>
                      <p className="text-brand-white/80 leading-relaxed">
                        The blog post content would include detailed information about the topic, images, code examples, and other relevant content that provides value to your readers.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Share Section */}
                  <div className="bg-brand-violet/10 rounded-xl p-6 border border-brand-violet/20">
                    <h3 className="text-lg font-semibold text-brand-white mb-4">Share this article</h3>
                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline" className="border-brand-violet/30 text-brand-violet hover:bg-brand-violet hover:text-brand-dark">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-brand-violet/30 text-brand-violet hover:bg-brand-violet hover:text-brand-dark">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-brand-violet/30 text-brand-violet hover:bg-brand-violet hover:text-brand-dark">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="bg-brand-violet/10 rounded-xl p-6 border border-brand-violet/20">
                    <h3 className="text-lg font-semibold text-brand-white mb-2">About the Author</h3>
                    <p className="text-brand-white/70 text-sm mb-4">
                      {blogPost.fields.author || "Reign of Vision"} is a passionate developer and writer, sharing insights about web development and digital innovation.
                    </p>
                    <Button asChild size="sm" variant="outline" className="border-brand-violet/30 text-brand-violet hover:bg-brand-violet hover:text-brand-dark">
                      <Link href="/about">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gradient-to-br from-brand-dark to-brand-violet/5 border-t border-brand-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-white mb-4">
                Related <span className="text-brand-violet">Articles</span>
              </h2>
              <p className="text-lg text-brand-white/70">
                Continue exploring our latest insights
              </p>
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="border-brand-violet text-brand-violet hover:bg-brand-violet hover:text-brand-dark">
                <Link href="/blog" className="flex items-center space-x-2">
                  <span>View All Articles</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-violet/20 to-brand-dark border-t border-brand-violet/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-brand-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to <span className="text-brand-violet">get started?</span>
            </h2>
            <p className="text-xl text-brand-white/70 mb-8">
              Let's work together to bring your vision to life with our expert team.
            </p>
            <Button asChild size="lg" className="bg-brand-violet hover:bg-brand-violet/90 text-brand-dark">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Contact Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 