import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Facebook, Linkedin, ArrowRight, Home, ChevronRight, Sparkles, BookOpen, Eye } from "lucide-react";
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
    <div className="flex space-x-3">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 bg-gradient-to-r from-brand-dark/80 to-brand-dark/60 border border-brand-white/20 rounded-xl text-brand-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 transform-gpu backdrop-blur-sm shadow-lg shadow-brand-dark/30"
      >
        <Twitter className="h-5 w-5 drop-shadow-lg" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 bg-gradient-to-r from-brand-dark/80 to-brand-dark/60 border border-brand-white/20 rounded-xl text-brand-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-blue-600/30 hover:border-blue-600/50 transition-all duration-300 hover:scale-110 transform-gpu backdrop-blur-sm shadow-lg shadow-brand-dark/30"
      >
        <Facebook className="h-5 w-5 drop-shadow-lg" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 bg-gradient-to-r from-brand-dark/80 to-brand-dark/60 border border-brand-white/20 rounded-xl text-brand-white hover:bg-gradient-to-r hover:from-blue-700/20 hover:to-blue-700/30 hover:border-blue-700/50 transition-all duration-300 hover:scale-110 transform-gpu backdrop-blur-sm shadow-lg shadow-brand-dark/30"
      >
        <Linkedin className="h-5 w-5 drop-shadow-lg" />
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

  const currentUrl = `https://reignofvision.com/blog/${blogPost.fields.slug}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark">
      {/* Enhanced Breadcrumb Navigation */}
      <nav className="relative pt-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-20 h-20 bg-gradient-to-br from-brand-violet/15 to-brand-orange/10 rounded-full animate-float blur-lg opacity-50"></div>
          <div className="absolute bottom-10 left-16 w-24 h-24 bg-gradient-to-br from-brand-orange/10 to-brand-violet/15 rounded-2xl rotate-12 animate-float animation-delay-2000 blur-sm opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 border-b border-brand-white/10">
          <div className="flex items-center space-x-3 text-sm pb-8">
            <Link href="/" className="group flex items-center px-3 py-2 text-brand-white/70 hover:text-brand-white transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-brand-white/5 hover:to-brand-white/10 backdrop-blur-sm">
              <Home className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="drop-shadow-sm">Home</span>
            </Link>
            <ChevronRight className="h-4 w-4 text-brand-violet drop-shadow-lg" />
            <Link href="/blog" className="px-3 py-2 text-brand-white/70 hover:text-brand-white transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-brand-white/5 hover:to-brand-white/10 backdrop-blur-sm drop-shadow-sm">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4 text-brand-violet drop-shadow-lg" />
            <span className="px-3 py-2 text-brand-white bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 rounded-lg border border-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 drop-shadow-lg truncate max-w-xs">
              {blogPost.fields.title}
            </span>
          </div>
        </div>
      </nav>

      {/* Enhanced Article Header */}
      <article className="relative py-20 overflow-hidden">
        {/* Enhanced 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-brand-violet/20 to-brand-orange/10 rounded-3xl rotate-12 animate-float blur-sm opacity-60"></div>
          <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-br from-brand-orange/20 to-brand-violet/10 rounded-2xl rotate-45 animate-float animation-delay-2000 blur-sm opacity-50"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-brand-violet/15 to-brand-orange/15 rounded-full animate-float animation-delay-4000 blur-lg opacity-40"></div>
          
          <div className="absolute inset-0 bg-gradient-conic from-brand-violet/10 via-transparent via-brand-orange/10 to-brand-violet/10 animate-spin-slow opacity-20"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-violet/15 via-brand-violet/5 to-transparent blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
           

            {/* Enhanced article badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 border border-brand-violet/30 backdrop-blur-xl mb-8 shadow-lg shadow-brand-violet/20">
              <BookOpen className="w-4 h-4 text-brand-orange mr-2 drop-shadow-lg" />
              <span className="text-sm font-semibold text-brand-white drop-shadow-lg">
                Featured Article
              </span>
            </div>
            
            {/* Enhanced Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-brand-white/60 mb-8">
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-brand-dark/80 to-brand-dark/60 rounded-xl border border-brand-white/10 backdrop-blur-sm shadow-lg shadow-brand-dark/30">
                <User className="h-5 w-5 text-brand-violet drop-shadow-lg" />
                <span className="text-brand-white/80 drop-shadow-sm">{blogPost.fields.author || "Reign of Vision"}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-brand-dark/80 to-brand-dark/60 rounded-xl border border-brand-white/10 backdrop-blur-sm shadow-lg shadow-brand-dark/30">
                <Calendar className="h-5 w-5 text-brand-orange drop-shadow-lg" />
                <span className="text-brand-white/80 drop-shadow-sm">{formatDate(blogPost.fields.publishedDate || blogPost.sys.createdAt)}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-brand-dark/80 to-brand-dark/60 rounded-xl border border-brand-white/10 backdrop-blur-sm shadow-lg shadow-brand-dark/30">
                <Clock className="h-5 w-5 text-brand-violet drop-shadow-lg" />
                <span className="text-brand-white/80 drop-shadow-sm">{readingTime}</span>
              </div>
            </div>

            {/* Enhanced Title */}
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-brand-white via-brand-white to-brand-violet bg-clip-text text-transparent drop-shadow-2xl">
                  {blogPost.fields.title}
                </span>
              </h1>
              
              <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-brand-violet/10 blur-xl transform translate-x-3 translate-y-3 -z-10">
                {blogPost.fields.title}
              </div>
            </div>

            {/* Enhanced Excerpt */}
            <p className="text-xl md:text-2xl text-brand-white/80 leading-relaxed mb-10 drop-shadow-lg max-w-4xl">
              {blogPost.fields.excerpt}
            </p>

            {/* Enhanced Tags */}
            {blogPost.fields.tags && blogPost.fields.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-12">
                {blogPost.fields.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 text-brand-violet border border-brand-violet/30 text-sm font-medium rounded-full backdrop-blur-sm shadow-lg shadow-brand-violet/20 hover:shadow-brand-violet/40 transition-all duration-300 hover:scale-105 transform-gpu"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Enhanced Cover Image */}
            {blogPost.fields.coverImage?.fields?.file?.url && (
              <div className="relative group perspective-1000 mb-12">
                <div className="relative transform-gpu transition-transform duration-700 group-hover:rotate-y-3 group-hover:rotate-x-1">
                  {/* Background glow */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-brand-violet/30 via-brand-orange/20 to-brand-violet/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Shadow layer */}
                  <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-6 translate-y-6 blur-lg"></div>
                  
                  {/* Main image container */}
                  <div className="relative aspect-video rounded-3xl overflow-hidden border border-brand-white/10 bg-gradient-to-br from-brand-dark via-slate-800 to-brand-dark">
                    <Image
                      src={`https:${blogPost.fields.coverImage.fields.file.url}`}
                      alt={blogPost.fields.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority
                    />
                    
                    {/* Overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/10 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Enhanced Article Content */}
      <section className="relative py-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-16 w-28 h-28 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-full animate-float blur-lg opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-brand-violet/10 to-brand-orange/15 rounded-2xl rotate-12 animate-float animation-delay-3000 blur-xl opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
              {/* Enhanced Main Content */}
              <div className="lg:col-span-3">
                <div className="relative p-8 bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 border border-brand-white/10 backdrop-blur-sm rounded-3xl shadow-xl shadow-brand-dark/30">
                  {/* Background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-orange/5 rounded-3xl"></div>
                  <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-3 translate-y-3 blur-lg -z-10"></div>
                  
                  <div className="relative z-10 prose prose-lg max-w-none">
                    {blogPost.fields.body ? (
                      <div className="text-brand-white/90 leading-relaxed">
                        <RichText document={blogPost.fields.body} />
                      </div>
                    ) : (
                      <div className="space-y-8">
                        <div>
                          <h2 className="text-3xl font-bold text-brand-white mb-6 drop-shadow-lg">
                            <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">Article Content</span>
                          </h2>
                          <p className="text-brand-white/80 leading-relaxed text-lg drop-shadow-sm">
                            This is a sample blog post content. In a real implementation, this would be populated with rich text content from your CMS.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-brand-white mb-4 drop-shadow-lg">
                            <span className="bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent">Key Insights</span>
                          </h3>
                          <p className="text-brand-white/80 leading-relaxed text-lg drop-shadow-sm">
                            The blog post content would include detailed information about the topic, images, code examples, and other relevant content that provides value to your readers.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Enhanced Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Enhanced Share Section */}
                  <div className="relative p-6 bg-gradient-to-br from-brand-dark/90 via-slate-800/60 to-brand-dark/90 border border-brand-white/10 backdrop-blur-xl rounded-3xl shadow-xl shadow-brand-violet/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-3xl blur-lg"></div>
                    <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-2 translate-y-2 blur-lg -z-10"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-brand-white mb-6 drop-shadow-lg flex items-center gap-2">
                        <Share2 className="w-5 h-5 text-brand-violet" />
                        Share Article
                      </h3>
                      <ShareButtons title={blogPost.fields.title} url={currentUrl} />
                    </div>
                  </div>

                  {/* Enhanced Author Info */}
                  <div className="relative p-6 bg-gradient-to-br from-brand-dark/90 via-slate-800/60 to-brand-dark/90 border border-brand-white/10 backdrop-blur-xl rounded-3xl shadow-xl shadow-brand-violet/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-3xl blur-lg"></div>
                    <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-2 translate-y-2 blur-lg -z-10"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-brand-white mb-4 drop-shadow-lg flex items-center gap-2">
                        <User className="w-5 h-5 text-brand-orange" />
                        About the Author
                      </h3>
                      <p className="text-brand-white/80 leading-relaxed mb-6 drop-shadow-sm">
                        {blogPost.fields.author || "Reign of Vision"} is a passionate developer and writer, sharing insights about web development and digital innovation.
                      </p>
                      <Button asChild size="sm" variant="outline" className="border-2 border-brand-violet/50 bg-gradient-to-r from-transparent to-brand-violet/10 text-brand-white hover:bg-gradient-to-r hover:from-brand-violet/20 hover:to-brand-violet/30 hover:border-brand-violet font-semibold py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 transform-gpu">
                        <Link href="/about" className="drop-shadow-lg">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Related Articles */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-brand-violet/10 to-brand-orange/10 rounded-3xl rotate-45 animate-float blur-xl opacity-30"></div>
          <div className="absolute bottom-20 right-16 w-24 h-24 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-2xl animate-float animation-delay-2000 blur-lg opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 border-t border-brand-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 pt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                <span className="drop-shadow-xl">Related </span>
                <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl">Articles</span>
              </h2>
              <p className="text-lg text-brand-white/80 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
                Continue exploring our latest insights and expert perspectives
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full mx-auto mt-6"></div>
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="border-2 border-brand-violet/50 bg-gradient-to-r from-transparent to-brand-violet/10 text-brand-white hover:bg-gradient-to-r hover:from-brand-violet/20 hover:to-brand-violet/30 hover:border-brand-violet font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 transform-gpu">
                <Link href="/blog" className="flex items-center space-x-3">
                  <span className="drop-shadow-lg">View All Articles</span>
                  <ArrowRight className="h-5 w-5 drop-shadow-lg" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10"></div>
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-brand-violet/10 to-brand-orange/15 rounded-full animate-float blur-2xl opacity-40"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-3xl rotate-12 animate-float animation-delay-2000 blur-xl opacity-50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative p-12 bg-gradient-to-br from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-brand-violet/10">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-3xl blur-2xl"></div>
              <div className="absolute inset-0 bg-gradient-conic from-brand-violet/5 via-transparent via-brand-orange/5 to-brand-violet/5 rounded-3xl animate-spin-slow opacity-40"></div>
              <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-6 translate-y-6 blur-xl -z-10"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 border border-brand-violet/30 backdrop-blur-sm mb-6 shadow-lg shadow-brand-violet/20">
                  <Sparkles className="w-4 h-4 text-brand-orange mr-2" />
                  <span className="text-sm font-semibold text-brand-white drop-shadow-lg">
                    Let's Connect
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6 drop-shadow-xl">
                  Ready to <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">get started?</span>
                </h2>
                
                <p className="text-xl text-brand-white/80 mb-10 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
                  Let's work together to bring your vision to life with our expert team and innovative solutions.
                </p>
                
                <Button asChild size="lg" className="group bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-orange text-brand-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-violet/50 transform-gpu shadow-xl shadow-brand-violet/30 border border-brand-violet/20">
                  <Link href="/contact" className="flex items-center space-x-3">
                    <span className="drop-shadow-lg">Contact Us</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
