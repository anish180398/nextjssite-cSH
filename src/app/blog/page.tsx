import { Metadata } from "next";
import { Suspense } from "react";
import { getAllBlogPosts } from "@/lib/contentful";
import { Button } from "@/components/ui/button";
import BlogGrid from "@/components/blog/blog-grid";
import NewsletterSignup from "@/components/ui/newsletter-signup";

// export const metadata: Metadata = {
//   title: "Blog",
//   description: "Stay updated with the latest insights, trends, and best practices in web development, design, and digital strategy from the Reign of Vision team.",
//   openGraph: {
//     title: "Blog - Reign of Vision Digital Agency",
//     description: "Expert insights on web development, design trends, and digital strategy to help your business thrive online.",
//     url: "https://reignofvision.com/blog",
//   }
// };

function BlogGridSkeleton() {
  return (
    <div className="space-y-8">
      {/* Search and Filter Skeleton */}
      <div className="space-y-4">
        <div className="skeleton h-10 w-80 mx-auto rounded-lg bg-brand-white/10"></div>
        <div className="flex gap-2 justify-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="skeleton h-8 w-20 rounded-full bg-brand-white/10"></div>
          ))}
        </div>
      </div>
      
      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-brand-dark rounded-xl shadow-sm border border-brand-white/10 overflow-hidden">
            <div className="skeleton aspect-video bg-brand-white/10"></div>
            <div className="p-6">
              <div className="skeleton h-6 w-3/4 mb-3 rounded-lg bg-brand-white/10"></div>
              <div className="skeleton h-4 w-full mb-2 rounded-lg bg-brand-white/10"></div>
              <div className="skeleton h-4 w-2/3 mb-4 rounded-lg bg-brand-white/10"></div>
              <div className="flex justify-between mb-4">
                <div className="skeleton h-4 w-24 rounded-lg bg-brand-white/10"></div>
                <div className="skeleton h-4 w-16 rounded-lg bg-brand-white/10"></div>
              </div>
              <div className="flex gap-2 mb-4">
                <div className="skeleton h-6 w-16 rounded-full bg-brand-white/10"></div>
                <div className="skeleton h-6 w-20 rounded-full bg-brand-white/10"></div>
              </div>
              <div className="skeleton h-8 w-full rounded-lg bg-brand-white/10"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function BlogSection() {
  let blogPosts: any[] = [];
  
  try {
    blogPosts = await getAllBlogPosts();
    console.log('Blog posts loaded:', blogPosts.length);
  } catch (error) {
    console.error('BlogSection Error:', error);
  }
  
  if (blogPosts.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-6">📝</div>
          <h3 className="text-2xl font-bold text-brand-white mb-4">
            No Blog Posts Yet
          </h3>
          <p className="text-brand-white/70 mb-8">
            We're working on creating valuable content for you. Check back soon for insights on web development, design, and digital strategy.
          </p>
          <Button asChild variant="outline" className="border-brand-violet text-brand-violet hover:bg-brand-violet hover:text-brand-dark">
            <a href="/contact">Get Updates</a>
          </Button>
        </div>
      </div>
    );
  }

  return <BlogGrid posts={blogPosts} />;
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-violet/20 text-brand-white py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-brand-violet">Blog</span>
            </h1>
            <p className="text-xl text-brand-white/80 leading-relaxed">
              Stay updated with the latest insights, trends, and best practices in web development, 
              design, and digital strategy from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Suspense fallback={<BlogGridSkeleton />}>
              <BlogSection />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
} 