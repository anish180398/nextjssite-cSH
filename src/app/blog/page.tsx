import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { getAllBlogPosts, BlogPost } from "@/lib/contentful";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogGrid from "@/components/blog/blog-grid";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stay updated with the latest insights, trends, and best practices in web development, design, and digital strategy from the CodeStreetHive team.",
  openGraph: {
    title: "Blog - CodeStreetHive Digital Agency",
    description: "Expert insights on web development, design trends, and digital strategy to help your business thrive online.",
    url: "https://codestreethive.com/blog",
  }
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
      <div className="relative aspect-video overflow-hidden">
        {post.fields.coverImage?.fields?.file?.url ? (
          <Image
            src={`https:${post.fields.coverImage.fields.file.url}`}
            alt={post.fields.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="text-4xl">✍️</div>
          </div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.fields.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex flex-col h-full">
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow">
          {post.fields.excerpt}
        </p>
        
        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{post.fields.author || "CodeStreetHive"}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.fields.publishedDate || post.sys.createdAt)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{readingTime}</span>
          </div>
        </div>
        
        {/* Tags */}
        {post.fields.tags && post.fields.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.fields.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {post.fields.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{post.fields.tags.length - 3} more
              </span>
            )}
          </div>
        )}
        
        <Button asChild variant="outline" size="sm" className="w-full group mt-auto">
          <Link href={`/blog/${post.fields.slug}`} className="flex items-center justify-center space-x-2">
            <span>Read More</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function BlogGridWithData({ posts }: { posts: BlogPost[] }) {
  // Default blog posts if Contentful data isn't available
  const defaultBlogPosts: BlogPost[] = [
    {
      sys: { id: "1", createdAt: "2024-01-15", updatedAt: "2024-01-15" },
      fields: {
        title: "The Future of Web Development: Trends to Watch in 2024",
        slug: "future-web-development-trends-2024",
        excerpt: "Explore the cutting-edge technologies and methodologies shaping the future of web development, from AI integration to advanced frameworks.",
        body: {} as any,
        coverImage: {
          sys: { id: "img1" },
          fields: {
            title: "Web Development Trends",
            file: {
              url: "//images.ctfassets.net/placeholder/web-dev-trends.jpg",
              details: { size: 102400, image: { width: 800, height: 600 } },
              fileName: "web-dev-trends.jpg",
              contentType: "image/jpeg"
            }
          }
        },
        author: "Sarah Johnson",
        publishedDate: "2024-01-15",
        tags: ["Web Development", "Technology", "Trends"]
      }
    },
    {
      sys: { id: "2", createdAt: "2024-01-10", updatedAt: "2024-01-10" },
      fields: {
        title: "UI/UX Design Principles That Drive Conversions",
        slug: "ui-ux-design-principles-conversions",
        excerpt: "Learn how thoughtful design choices can significantly impact user behavior and boost your website's conversion rates.",
        body: {} as any,
        coverImage: {
          sys: { id: "img2" },
          fields: {
            title: "UI/UX Design",
            file: {
              url: "//images.ctfassets.net/placeholder/ui-ux-design.jpg",
              details: { size: 102400, image: { width: 800, height: 600 } },
              fileName: "ui-ux-design.jpg",
              contentType: "image/jpeg"
            }
          }
        },
        author: "Mike Chen",
        publishedDate: "2024-01-10",
        tags: ["UI/UX Design", "Conversion", "User Experience"]
      }
    },
    {
      sys: { id: "3", createdAt: "2024-01-05", updatedAt: "2024-01-05" },
      fields: {
        title: "SEO Strategies for Modern Websites",
        slug: "seo-strategies-modern-websites",
        excerpt: "Discover the latest SEO techniques and best practices to improve your website's visibility and ranking in search engines.",
        body: {} as any,
        coverImage: {
          sys: { id: "img3" },
          fields: {
            title: "SEO Strategies",
            file: {
              url: "//images.ctfassets.net/placeholder/seo-strategies.jpg",
              details: { size: 102400, image: { width: 800, height: 600 } },
              fileName: "seo-strategies.jpg",
              contentType: "image/jpeg"
            }
          }
        },
        author: "Emily Davis",
        publishedDate: "2024-01-05",
        tags: ["SEO", "Digital Marketing", "Website Optimization"]
      }
    },
    {
      sys: { id: "4", createdAt: "2023-12-28", updatedAt: "2023-12-28" },
      fields: {
        title: "Building Scalable React Applications",
        slug: "building-scalable-react-applications",
        excerpt: "Best practices and architectural patterns for creating maintainable and scalable React applications that grow with your business.",
        body: {} as any,
        coverImage: {
          sys: { id: "img4" },
          fields: {
            title: "React Applications",
            file: {
              url: "//images.ctfassets.net/placeholder/react-apps.jpg",
              details: { size: 102400, image: { width: 800, height: 600 } },
              fileName: "react-apps.jpg",
              contentType: "image/jpeg"
            }
          }
        },
        author: "David Wilson",
        publishedDate: "2023-12-28",
        tags: ["React", "JavaScript", "Frontend Development"]
      }
    },
    {
      sys: { id: "5", createdAt: "2023-12-20", updatedAt: "2023-12-20" },
      fields: {
        title: "The Power of Mobile-First Design",
        slug: "power-mobile-first-design",
        excerpt: "Why mobile-first design isn't just a trend but a necessity in today's digital landscape, and how to implement it effectively.",
        body: {} as any,
        coverImage: {
          sys: { id: "img5" },
          fields: {
            title: "Mobile First Design",
            file: {
              url: "//images.ctfassets.net/placeholder/mobile-first.jpg",
              details: { size: 102400, image: { width: 800, height: 600 } },
              fileName: "mobile-first.jpg",
              contentType: "image/jpeg"
            }
          }
        },
        author: "Lisa Anderson",
        publishedDate: "2023-12-20",
        tags: ["Mobile Design", "Responsive Design", "UX"]
      }
    },
    {
      sys: { id: "6", createdAt: "2023-12-15", updatedAt: "2023-12-15" },
      fields: {
        title: "API Design Best Practices for Modern Applications",
        slug: "api-design-best-practices",
        excerpt: "Essential guidelines for creating robust, scalable, and developer-friendly APIs that power modern web applications.",
        body: {} as any,
        coverImage: {
          sys: { id: "img6" },
          fields: {
            title: "API Design",
            file: {
              url: "//images.ctfassets.net/placeholder/api-design.jpg",
              details: { size: 102400, image: { width: 800, height: 600 } },
              fileName: "api-design.jpg",
              contentType: "image/jpeg"
            }
          }
        },
        author: "Alex Rodriguez",
        publishedDate: "2023-12-15",
        tags: ["API", "Backend Development", "Architecture"]
      }
    }
  ];

  const displayPosts = posts.length > 0 ? posts : defaultBlogPosts;

  return <BlogGrid posts={displayPosts} />;
}

function BlogGridSkeleton() {
  return (
    <div className="space-y-8">
      {/* Search and Filter Skeleton */}
      <div className="space-y-4">
        <div className="skeleton h-10 w-80 mx-auto rounded-lg"></div>
        <div className="flex gap-2 justify-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="skeleton h-8 w-20 rounded-full"></div>
          ))}
        </div>
      </div>
      
      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="skeleton aspect-video"></div>
            <div className="p-6">
              <div className="skeleton h-6 w-3/4 mb-3 rounded-lg"></div>
              <div className="skeleton h-4 w-full mb-2 rounded-lg"></div>
              <div className="skeleton h-4 w-2/3 mb-4 rounded-lg"></div>
              <div className="flex justify-between mb-4">
                <div className="skeleton h-4 w-24 rounded-lg"></div>
                <div className="skeleton h-4 w-16 rounded-lg"></div>
              </div>
              <div className="flex gap-2 mb-4">
                <div className="skeleton h-6 w-16 rounded-full"></div>
                <div className="skeleton h-6 w-20 rounded-full"></div>
              </div>
              <div className="skeleton h-8 w-full rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function BlogSection() {
  const blogPosts = await getAllBlogPosts();
  return <BlogGridWithData posts={blogPosts} />;
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Stay updated with the latest insights, trends, and best practices in web development, 
              design, and digital strategy from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Suspense fallback={<BlogGridSkeleton />}>
              <BlogSection />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay in the Loop
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get notified when we publish new articles and insights about web development and design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button size="lg">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 