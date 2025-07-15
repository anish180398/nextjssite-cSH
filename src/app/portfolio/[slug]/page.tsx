import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, ExternalLink, Github, ArrowRight, Home, ChevronRight } from "lucide-react";
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
        title: `${portfolioItem.fields.title} - Reign of Vision Portfolio`,
        description: portfolioItem.fields.excerpt,
        url: `https://Reign of Vision.com/portfolio/${portfolioItem.fields.slug}`,
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
    <div className="min-h-screen bg-brand-dark">
      {/* Breadcrumb Navigation */}
      <nav className="bg-brand-dark  pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-brand-white/70 pb-4">
            <Link href="/" className="hover:text-brand-violet transition-colors flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/portfolio" className="hover:text-brand-violet transition-colors">
              Portfolio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-brand-white">{portfolioItem.fields.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section with Project Image */}
      <section className="py-12 bg-gradient-to-br from-brand-dark to-brand-violet/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-brand-violet hover:text-brand-violet/80 mb-8 group transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Project Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
                  {portfolioItem.fields.title}
                </h1>
                <p className="text-xl text-brand-white/70 leading-relaxed mb-8">
                  {portfolioItem.fields.excerpt}
                </p>
                
                {/* Project Meta Info */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center text-brand-white/60">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{formatDate(portfolioItem.sys.createdAt)}</span>
                  </div>
                </div>

                {/* Tags */}
                {portfolioItem.fields.tags && portfolioItem.fields.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {portfolioItem.fields.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-brand-violet/20 text-brand-violet border border-brand-violet/30 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
              
                
              </div>

              {/* Project Image */}
              <div className="relative">
                {portfolioItem.fields.coverImage?.fields?.file?.url ? (
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-brand-white/10">
                    <Image
                      src={`https:${portfolioItem.fields.coverImage.fields.file.url}`}
                      alt={portfolioItem.fields.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-brand-violet/20 to-brand-violet/10 rounded-xl flex items-center justify-center shadow-2xl border border-brand-violet/30">
                    <div className="text-6xl">🚀</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  {portfolioItem.fields.body ? (
                    <RichText document={portfolioItem.fields.body} />
                  ) : (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold text-brand-white">
                        Project Overview
                      </h2>
                      <p className="text-brand-white/70 leading-relaxed">
                        This project represents our commitment to delivering exceptional 
                        digital solutions that meet and exceed client expectations. We 
                        focused on creating a user-centric design that balances 
                        aesthetics with functionality.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-brand-white">
                        Key Features
                      </h3>
                      <ul className="space-y-2 text-brand-white/70">
                        <li>• Responsive design that works on all devices</li>
                        <li>• Modern, intuitive user interface</li>
                        <li>• Optimized performance and fast loading times</li>
                        <li>• SEO-friendly architecture</li>
                        <li>• Secure and scalable backend</li>
                        <li>• Comprehensive testing and quality assurance</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-brand-white">
                        Technologies Used
                      </h3>
                      <p className="text-brand-white/70 leading-relaxed">
                        We leveraged cutting-edge technologies and best practices to 
                        ensure the project meets modern web standards and provides 
                        an exceptional user experience.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-brand-white">
                        Results & Impact
                      </h3>
                      <p className="text-brand-white/70 leading-relaxed">
                        The successful implementation of this project resulted in 
                        improved user engagement, increased conversion rates, and 
                        enhanced overall business performance for our client.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-brand-violet/10 rounded-xl p-6 sticky top-8 border border-brand-violet/20">
                  <h3 className="text-lg font-semibold text-brand-white mb-4">
                    Project Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-brand-white mb-1">Category</h4>
                      <p className="text-brand-white/70 text-sm">
                        {portfolioItem.fields.tags?.[0] || "Web Development"}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-brand-white mb-1">Timeline</h4>
                      <p className="text-brand-white/70 text-sm">3-6 months</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-brand-white mb-1">Status</h4>
                      <p className="text-brand-violet text-sm font-medium">Completed</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-brand-white/10">
                    <h4 className="font-medium text-brand-white mb-4">
                      Interested in a similar project?
                    </h4>
                    <p className="text-brand-white/70 text-sm mb-4">
                      Let's discuss how we can help you achieve your goals.
                    </p>
                    
                    <Button asChild className="w-full bg-brand-violet hover:bg-brand-violet/90 text-brand-dark">
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

      {/* Related Projects */}
      <section className="py-20 bg-gradient-to-br from-brand-dark to-brand-violet/5 border-t border-brand-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-white mb-4">
                More <span className="text-brand-violet">Projects</span>
              </h2>
              <p className="text-lg text-brand-white/70">
                Explore other projects in our portfolio
              </p>
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="border-brand-violet text-brand-violet hover:bg-brand-violet hover:text-brand-dark">
                <Link href="/portfolio" className="flex items-center space-x-2">
                  <span>View All Projects</span>
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
              Ready to start your <span className="text-brand-violet">project?</span>
            </h2>
            <p className="text-xl text-brand-white/70 mb-8">
              Let's create something amazing together. Contact us to discuss your ideas.
            </p>
            <Button asChild size="lg" className="bg-brand-violet hover:bg-brand-violet/90 text-brand-dark">
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