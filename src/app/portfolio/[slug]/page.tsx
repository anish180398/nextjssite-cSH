import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, ExternalLink, Github, ArrowRight, Home, ChevronRight, Sparkles, Eye } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark">
      {/* Enhanced Breadcrumb Navigation */}
      <nav className="relative pt-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-20 h-20 bg-gradient-to-br from-brand-violet/15 to-brand-orange/10 rounded-full animate-float blur-lg opacity-50"></div>
          <div className="absolute bottom-10 left-16 w-24 h-24 bg-gradient-to-br from-brand-orange/10 to-brand-violet/15 rounded-2xl rotate-12 animate-float animation-delay-2000 blur-sm opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 text-sm pb-8">
            <Link href="/" className="group flex items-center px-3 py-2 text-brand-white/70 hover:text-brand-white transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-brand-white/5 hover:to-brand-white/10 backdrop-blur-sm">
              <Home className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="drop-shadow-sm">Home</span>
            </Link>
            <ChevronRight className="h-4 w-4 text-brand-violet drop-shadow-lg" />
            <Link href="/portfolio" className="px-3 py-2 text-brand-white/70 hover:text-brand-white transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-brand-white/5 hover:to-brand-white/10 backdrop-blur-sm drop-shadow-sm">
              Portfolio
            </Link>
            <ChevronRight className="h-4 w-4 text-brand-violet drop-shadow-lg" />
            <span className="px-3 py-2 text-brand-white bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 rounded-lg border border-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 drop-shadow-lg">
              {portfolioItem.fields.title}
            </span>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section with Project Image */}
      <section className="relative py-20 overflow-hidden">
        {/* Enhanced 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-brand-violet/20 to-brand-orange/10 rounded-3xl rotate-12 animate-float blur-sm opacity-60"></div>
          <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-br from-brand-orange/20 to-brand-violet/10 rounded-2xl rotate-45 animate-float animation-delay-2000 blur-sm opacity-50"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-brand-violet/15 to-brand-orange/15 rounded-full animate-float animation-delay-4000 blur-lg opacity-40"></div>
          
          <div className="absolute inset-0 bg-gradient-conic from-brand-violet/10 via-transparent via-brand-orange/10 to-brand-violet/10 animate-spin-slow opacity-20"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-violet/15 via-brand-violet/5 to-transparent blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced back link */}
            <Link
              href="/portfolio"
              className="group inline-flex items-center px-4 py-2 text-brand-violet hover:text-brand-white mb-12 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 hover:from-brand-violet/30 hover:to-brand-orange/20 rounded-xl border border-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 transition-all duration-300 hover:scale-105 transform-gpu"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300 drop-shadow-lg" />
              <span className="drop-shadow-sm font-medium">Back to Portfolio</span>
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Enhanced Project Info */}
              <div>
                {/* Enhanced project badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 border border-brand-violet/30 backdrop-blur-xl mb-8 shadow-lg shadow-brand-violet/20">
                  <Eye className="w-4 h-4 text-brand-orange mr-2 drop-shadow-lg" />
                  <span className="text-sm font-semibold text-brand-white drop-shadow-lg">
                    Case Study
                  </span>
                </div>

                {/* Enhanced title */}
                <div className="relative mb-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-brand-white via-brand-white to-brand-violet bg-clip-text text-transparent drop-shadow-2xl">
                      {portfolioItem.fields.title}
                    </span>
                  </h1>
                  
                  <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-brand-violet/10 blur-xl transform translate-x-3 translate-y-3 -z-10">
                    {portfolioItem.fields.title}
                  </div>
                </div>

                <p className="text-xl md:text-2xl text-brand-white/80 leading-relaxed mb-10 drop-shadow-lg">
                  {portfolioItem.fields.excerpt}
                </p>
                
                {/* Enhanced Project Meta Info */}
                <div className="flex flex-wrap gap-6 mb-10">
                  <div className="flex items-center px-4 py-2 bg-gradient-to-r from-brand-dark/80 to-brand-dark/60 rounded-xl border border-brand-white/10 backdrop-blur-sm shadow-lg shadow-brand-dark/30">
                    <Calendar className="h-5 w-5 mr-3 text-brand-violet drop-shadow-lg" />
                    <span className="text-brand-white/80 drop-shadow-sm">{formatDate(portfolioItem.sys.createdAt)}</span>
                  </div>
                </div>

                {/* Enhanced Tags */}
                {portfolioItem.fields.tags && portfolioItem.fields.tags.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-10">
                    {portfolioItem.fields.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 text-brand-violet border border-brand-violet/30 text-sm font-medium rounded-full backdrop-blur-sm shadow-lg shadow-brand-violet/20 hover:shadow-brand-violet/40 transition-all duration-300 hover:scale-105 transform-gpu"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Enhanced Project Image */}
              <div className="relative group perspective-1000">
                <div className="relative transform-gpu transition-transform duration-700 group-hover:rotate-y-6 group-hover:rotate-x-2">
                  {/* Background glow */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-brand-violet/30 via-brand-orange/20 to-brand-violet/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Shadow layer */}
                  <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-6 translate-y-6 blur-lg"></div>
                  
                  {/* Main image container */}
                  {portfolioItem.fields.coverImage?.fields?.file?.url ? (
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-brand-white/10 bg-gradient-to-br from-brand-dark via-slate-800 to-brand-dark">
                      <Image
                        src={`https:${portfolioItem.fields.coverImage.fields.file.url}`}
                        alt={portfolioItem.fields.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      
                      {/* Overlay effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/10 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    </div>
                  ) : (
                    <div className="relative aspect-video bg-gradient-to-br from-brand-dark via-slate-800 to-brand-dark rounded-3xl flex items-center justify-center shadow-2xl border border-brand-violet/30 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 to-brand-orange/20"></div>
                      <div className="relative text-8xl transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">🚀</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Project Details */}
      <section className="relative py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-16 w-28 h-28 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-full animate-float blur-lg opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-brand-violet/10 to-brand-orange/15 rounded-2xl rotate-12 animate-float animation-delay-3000 blur-xl opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Enhanced Main Content */}
              <div className="lg:col-span-2">
                <div className="relative p-8 bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 border border-brand-white/10 backdrop-blur-sm rounded-3xl shadow-xl shadow-brand-dark/30">
                  {/* Background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-orange/5 rounded-3xl"></div>
                  <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-3 translate-y-3 blur-lg -z-10"></div>
                  
                  <div className="relative z-10 prose prose-lg max-w-none">
                    {portfolioItem.fields.body ? (
                      <div className="text-brand-white/90 leading-relaxed">
                        <RichText document={portfolioItem.fields.body} />
                      </div>
                    ) : (
                      <div className="space-y-8">
                        <div>
                          <h2 className="text-3xl font-bold text-brand-white mb-6 drop-shadow-lg">
                            <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">Project Overview</span>
                          </h2>
                          <p className="text-brand-white/80 leading-relaxed text-lg drop-shadow-sm">
                            This project represents our commitment to delivering exceptional 
                            digital solutions that meet and exceed client expectations. We 
                            focused on creating a user-centric design that balances 
                            aesthetics with functionality.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-brand-white mb-6 drop-shadow-lg">
                            <span className="bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent">Key Features</span>
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              "Responsive design that works on all devices",
                              "Modern, intuitive user interface", 
                              "Optimized performance and fast loading times",
                              "SEO-friendly architecture",
                              "Secure and scalable backend",
                              "Comprehensive testing and quality assurance"
                            ].map((feature, index) => (
                              <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-brand-white/5 to-brand-white/10 rounded-xl border border-brand-white/10">
                                <div className="w-2 h-2 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full"></div>
                                <span className="text-brand-white/80 drop-shadow-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-brand-white mb-6 drop-shadow-lg">
                            <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">Technologies Used</span>
                          </h3>
                          <p className="text-brand-white/80 leading-relaxed text-lg drop-shadow-sm">
                            We leveraged cutting-edge technologies and best practices to 
                            ensure the project meets modern web standards and provides 
                            an exceptional user experience.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-brand-white mb-6 drop-shadow-lg">
                            <span className="bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent">Results & Impact</span>
                          </h3>
                          <p className="text-brand-white/80 leading-relaxed text-lg drop-shadow-sm">
                            The successful implementation of this project resulted in 
                            improved user engagement, increased conversion rates, and 
                            enhanced overall business performance for our client.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Enhanced Project Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="relative p-8 bg-gradient-to-br from-brand-dark/90 via-slate-800/60 to-brand-dark/90 border border-brand-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-brand-violet/10">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-3xl blur-xl"></div>
                    <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-3 translate-y-3 blur-lg -z-10"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-brand-white mb-8 drop-shadow-lg flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-brand-violet" />
                        Project Details
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="p-4 bg-gradient-to-r from-brand-white/5 to-brand-white/10 rounded-xl border border-brand-white/10">
                          <h4 className="font-semibold text-brand-white mb-2 drop-shadow-lg">Category</h4>
                          <p className="text-brand-white/80 drop-shadow-sm">
                            {portfolioItem.fields.tags?.[0] || "Web Development"}
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-r from-brand-white/5 to-brand-white/10 rounded-xl border border-brand-white/10">
                          <h4 className="font-semibold text-brand-white mb-2 drop-shadow-lg">Timeline</h4>
                          <p className="text-brand-white/80 drop-shadow-sm">3-6 months</p>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-r from-brand-white/5 to-brand-white/10 rounded-xl border border-brand-white/10">
                          <h4 className="font-semibold text-brand-white mb-2 drop-shadow-lg">Status</h4>
                          <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 text-brand-violet border border-brand-violet/30 text-sm font-medium rounded-full">
                            ✓ Completed
                          </span>
                        </div>
                      </div>

                      <div className="mt-10 pt-8 border-t border-brand-white/10">
                        <h4 className="font-semibold text-brand-white mb-4 drop-shadow-lg">
                          Interested in a similar project?
                        </h4>
                        <p className="text-brand-white/80 text-sm mb-6 leading-relaxed drop-shadow-sm">
                          Let's discuss how we can help you achieve your goals.
                        </p>
                        
                        <Button asChild className="group w-full bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-orange text-brand-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-violet/40 shadow-lg shadow-brand-violet/30 transform-gpu">
                          <Link href="/contact" className="flex items-center justify-center gap-2">
                            <span className="drop-shadow-lg">Get In Touch</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Related Projects */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-brand-violet/10 to-brand-orange/10 rounded-3xl rotate-45 animate-float blur-xl opacity-30"></div>
          <div className="absolute bottom-20 right-16 w-24 h-24 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-2xl animate-float animation-delay-2000 blur-lg opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                <span className="drop-shadow-xl">More </span>
                <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl">Projects</span>
              </h2>
              <p className="text-lg text-brand-white/80 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
                Explore other innovative solutions in our portfolio
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full mx-auto mt-6"></div>
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="border-2 border-brand-violet/50 bg-gradient-to-r from-transparent to-brand-violet/10 text-brand-white hover:bg-gradient-to-r hover:from-brand-violet/20 hover:to-brand-violet/30 hover:border-brand-violet font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 transform-gpu">
                <Link href="/portfolio" className="flex items-center space-x-3">
                  <span className="drop-shadow-lg">View All Projects</span>
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
                    Ready to Start?
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6 drop-shadow-xl">
                  Ready to start your <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">project?</span>
                </h2>
                
                <p className="text-xl text-brand-white/80 mb-10 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
                  Let's create something amazing together. Contact us to discuss your ideas and bring your vision to life.
                </p>
                
                <Button asChild size="lg" className="group bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-orange text-brand-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-violet/50 transform-gpu shadow-xl shadow-brand-violet/30 border border-brand-violet/20">
                  <Link href="/contact" className="flex items-center space-x-3">
                    <span className="drop-shadow-lg">Start Your Project</span>
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
