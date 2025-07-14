import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, ExternalLink, Github, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-blue-600 transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-gray-900">{portfolioItem.fields.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section with Project Image */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 group transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Project Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {portfolioItem.fields.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {portfolioItem.fields.excerpt}
                </p>
                
                {/* Project Meta Info */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center text-gray-600">
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
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>View Live Site</span>
                    </a>
                  </Button>
                  <Button variant="outline">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <Github className="h-5 w-5" />
                      <span>View Code</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Image */}
              <div className="relative">
                {portfolioItem.fields.coverImage?.fields?.file?.url ? (
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
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
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center shadow-2xl">
                    <div className="text-6xl">🚀</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
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
                      <h2 className="text-2xl font-semibold text-gray-900">
                        Project Overview
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        This project represents our commitment to delivering exceptional 
                        digital solutions that meet and exceed client expectations. We 
                        focused on creating a user-centric design that balances 
                        aesthetics with functionality.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-gray-900">
                        Key Features
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Responsive design that works on all devices</li>
                        <li>• Modern, intuitive user interface</li>
                        <li>• Optimized performance and fast loading times</li>
                        <li>• SEO-friendly architecture</li>
                        <li>• Secure and scalable backend</li>
                        <li>• Comprehensive testing and quality assurance</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-900">
                        Technologies Used
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        We leveraged cutting-edge technologies and best practices to 
                        ensure the project meets modern web standards and provides 
                        an exceptional user experience.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-gray-900">
                        Results & Impact
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
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
                <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Project Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Category</h4>
                      <p className="text-gray-600 text-sm">
                        {portfolioItem.fields.tags?.[0] || "Web Development"}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Timeline</h4>
                      <p className="text-gray-600 text-sm">3-6 months</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Status</h4>
                      <p className="text-green-600 text-sm font-medium">Completed</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-4">
                      Interested in a similar project?
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Let's discuss how we can help you achieve your goals.
                    </p>
                    
                    <Button asChild className="w-full">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                More Projects
              </h2>
              <p className="text-lg text-gray-600">
                Explore other projects in our portfolio
              </p>
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
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
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to start your project?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Let's create something amazing together. Contact us to discuss your ideas.
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