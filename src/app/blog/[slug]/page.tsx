import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Facebook, Linkedin, ArrowRight } from "lucide-react";
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
        url: `https://Reign of Vision.com/blog/${blogPost.fields.slug}`,
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

  const currentUrl = `https://Reign of Vision.com/blog/${blogPost.fields.slug}`;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 truncate">{blogPost.fields.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 group transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blogPost.fields.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {blogPost.fields.excerpt}
            </p>

            {/* Tags */}
            {blogPost.fields.tags && blogPost.fields.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {blogPost.fields.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share Buttons */}
            <div className="border-t border-b border-gray-200 py-4 mb-8">
              <ShareButtons title={blogPost.fields.title} url={currentUrl} />
            </div>
          </div>
        </div>
      </article>

      {/* Featured Image */}
      {blogPost.fields.coverImage?.fields?.file?.url && (
        <section className="mb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={`https:${blogPost.fields.coverImage.fields.file.url}`}
                  alt={blogPost.fields.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-12 bg-white">
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
                      <p className="text-gray-600 leading-relaxed">
                        This is a sample blog post that demonstrates the structure and layout 
                        of our blog articles. The content would typically be rich text from 
                        Contentful, including headings, paragraphs, images, and other formatting.
                      </p>
                      
                      <h2 className="text-2xl font-semibold text-gray-900">
                        Key Insights
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        Our blog posts provide valuable insights into the latest trends, 
                        best practices, and innovative solutions in web development and 
                        digital strategy. Each article is carefully crafted to provide 
                        actionable advice and practical knowledge.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-gray-900">
                        What You'll Learn
                      </h3>
                      <ul className="space-y-2 text-gray-600 list-disc list-inside">
                        <li>Industry best practices and proven methodologies</li>
                        <li>Cutting-edge technologies and tools</li>
                        <li>Real-world case studies and examples</li>
                        <li>Expert tips and tricks from our experienced team</li>
                        <li>Future trends and predictions</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-900">
                        Conclusion
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        We hope this article has provided you with valuable insights and 
                        actionable strategies. Stay tuned for more expert content and 
                        feel free to reach out if you have any questions or need help 
                        with your digital projects.
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Share Buttons */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <ShareButtons title={blogPost.fields.title} url={currentUrl} />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  {/* Author Info */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {blogPost.fields.author || "Reign of Vision Team"}
                        </h4>
                        <p className="text-sm text-gray-600">Expert Developer</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Our team of experienced developers and designers are passionate 
                      about creating innovative digital solutions and sharing knowledge 
                      with the community.
                    </p>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Stay Updated
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get notified when we publish new articles and insights.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Button size="sm" className="w-full">
                        Subscribe
                      </Button>
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-xl p-6">
                    <h3 className="font-semibold mb-3">
                      Need Help With Your Project?
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      Let's discuss how we can help you achieve your digital goals.
                    </p>
                    <Button asChild size="sm" variant="secondary" className="w-full">
                      <Link href="/contact">
                        Get In Touch
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                More Articles
              </h2>
              <p className="text-lg text-gray-600">
                Explore more insights and expert advice
              </p>
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
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
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Let's work together to create something exceptional. 
              Contact us to start your project.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 