import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Eye } from "lucide-react";
import { getAllPortfolioItems, PortfolioItem } from "@/lib/contentful";
import { Button } from "@/components/ui/button";
import PortfolioGrid from "@/components/portfolio/portfolio-grid";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description: "Explore our portfolio of successful projects including web applications, mobile apps, and digital solutions. See how we've helped businesses achieve their goals.",
  openGraph: {
    title: "Portfolio - Reign of Vision Digital Agency",
    description: "Discover the innovative digital solutions we've created for our clients across various industries.",
    url: "https://reignofvision.com/portfolio",
  }
};

// Default portfolio items if Contentful data isn't available
const defaultPortfolioItems: PortfolioItem[] = [
  {
    sys: { id: "1", createdAt: "", updatedAt: "" },
    fields: {
      title: "E-commerce Platform Redesign",
      slug: "ecommerce-platform-redesign",
      excerpt: "Complete redesign and development of a modern e-commerce platform with improved user experience and conversion rates.",
      body: {} as any,
      coverImage: {
        sys: { id: "img1" },
        fields: {
          title: "E-commerce Platform",
          file: {
            url: "//images.ctfassets.net/placeholder/ecommerce-project.jpg",
            details: { size: 102400, image: { width: 800, height: 600 } },
            fileName: "ecommerce-project.jpg",
            contentType: "image/jpeg"
          }
        }
      },
      tags: ["E-commerce", "React", "UI/UX Design"]
    }
  },
  {
    sys: { id: "2", createdAt: "", updatedAt: "" },
    fields: {
      title: "Mobile Banking App",
      slug: "mobile-banking-app",
      excerpt: "Secure and intuitive mobile banking application with biometric authentication and real-time transaction monitoring.",
      body: {} as any,
      coverImage: {
        sys: { id: "img2" },
        fields: {
          title: "Mobile Banking App",
          file: {
            url: "//images.ctfassets.net/placeholder/banking-app.jpg",
            details: { size: 102400, image: { width: 800, height: 600 } },
            fileName: "banking-app.jpg",
            contentType: "image/jpeg"
          }
        }
      },
      tags: ["Mobile App", "React Native", "Fintech"]
    }
  },
  {
    sys: { id: "3", createdAt: "", updatedAt: "" },
    fields: {
      title: "Healthcare Management System",
      slug: "healthcare-management-system",
      excerpt: "Comprehensive healthcare management platform for clinics with patient records, appointment scheduling, and telemedicine features.",
      body: {} as any,
      coverImage: {
        sys: { id: "img3" },
        fields: {
          title: "Healthcare Management System",
          file: {
            url: "//images.ctfassets.net/placeholder/healthcare-system.jpg",
            details: { size: 102400, image: { width: 800, height: 600 } },
            fileName: "healthcare-system.jpg",
            contentType: "image/jpeg"
          }
        }
      },
      tags: ["Web App", "Healthcare", "Vue.js"]
    }
  },
  {
    sys: { id: "4", createdAt: "", updatedAt: "" },
    fields: {
      title: "Real Estate Portal",
      slug: "real-estate-portal",
      excerpt: "Modern real estate portal with advanced search, virtual tours, and integrated CRM for real estate agencies.",
      body: {} as any,
      coverImage: {
        sys: { id: "img4" },
        fields: {
          title: "Real Estate Portal",
          file: {
            url: "//images.ctfassets.net/placeholder/real-estate-portal.jpg",
            details: { size: 102400, image: { width: 800, height: 600 } },
            fileName: "real-estate-portal.jpg",
            contentType: "image/jpeg"
          }
        }
      },
      tags: ["Web Development", "Real Estate", "Next.js"]
    }
  },
  {
    sys: { id: "5", createdAt: "", updatedAt: "" },
    fields: {
      title: "Food Delivery App",
      slug: "food-delivery-app",
      excerpt: "Complete food delivery ecosystem with customer app, restaurant dashboard, and delivery driver app with real-time tracking.",
      body: {} as any,
      coverImage: {
        sys: { id: "img5" },
        fields: {
          title: "Food Delivery App",
          file: {
            url: "//images.ctfassets.net/placeholder/food-delivery-app.jpg",
            details: { size: 102400, image: { width: 800, height: 600 } },
            fileName: "food-delivery-app.jpg",
            contentType: "image/jpeg"
          }
        }
      },
      tags: ["Mobile App", "Flutter", "Food Tech"]
    }
  },
  {
    sys: { id: "6", createdAt: "", updatedAt: "" },
    fields: {
      title: "Corporate Website Redesign",
      slug: "corporate-website-redesign",
      excerpt: "Modern corporate website with improved performance, SEO optimization, and content management system.",
      body: {} as any,
      coverImage: {
        sys: { id: "img6" },
        fields: {
          title: "Corporate Website",
          file: {
            url: "//images.ctfassets.net/placeholder/corporate-website.jpg",
            details: { size: 102400, image: { width: 800, height: 600 } },
            fileName: "corporate-website.jpg",
            contentType: "image/jpeg"
          }
        }
      },
      tags: ["Web Design", "Corporate", "WordPress"]
    }
  }
];

function PortfolioGridSkeleton() {
  return (
    <div className="space-y-12">
      {/* Enhanced Filter Skeleton */}
      <div className="flex flex-wrap justify-center gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-10 w-24 bg-gradient-to-r from-brand-violet/30 to-brand-orange/20 rounded-full animate-pulse"></div>
        ))}
      </div>
      
      {/* Enhanced Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="group relative bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 rounded-3xl shadow-xl border border-brand-white/10 backdrop-blur-sm overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-brand-violet/20 to-brand-orange/10 animate-pulse"></div>
            <div className="p-8">
              <div className="h-8 w-3/4 bg-gradient-to-r from-brand-white/20 to-brand-white/10 rounded-xl mb-4 animate-pulse"></div>
              <div className="h-6 w-full bg-gradient-to-r from-brand-white/20 to-brand-white/10 rounded-lg mb-3 animate-pulse"></div>
              <div className="h-6 w-2/3 bg-gradient-to-r from-brand-white/20 to-brand-white/10 rounded-lg mb-6 animate-pulse"></div>
              <div className="flex gap-3 mb-6">
                <div className="h-8 w-20 bg-gradient-to-r from-brand-violet/30 to-brand-orange/20 rounded-full animate-pulse"></div>
                <div className="h-8 w-24 bg-gradient-to-r from-brand-orange/30 to-brand-violet/20 rounded-full animate-pulse"></div>
              </div>
              <div className="h-12 w-full bg-gradient-to-r from-brand-violet/30 to-brand-orange/20 rounded-xl animate-pulse"></div>
            </div>
            
            {/* 3D depth shadow */}
            <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-3 translate-y-3 blur-lg -z-10 opacity-60"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function PortfolioSection() {
  try {
    const portfolioItems = await getAllPortfolioItems();
    const displayItems = portfolioItems.length > 0 ? portfolioItems : defaultPortfolioItems;
    return <PortfolioGrid items={displayItems} />;
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return <PortfolioGrid items={defaultPortfolioItems} />;
  }
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Enhanced 3D Background Elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-brand-violet/20 to-brand-orange/10 rounded-3xl rotate-12 animate-float blur-sm opacity-60"></div>
          <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-br from-brand-orange/20 to-brand-violet/10 rounded-2xl rotate-45 animate-float animation-delay-2000 blur-sm opacity-50"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-brand-violet/15 to-brand-orange/15 rounded-full animate-float animation-delay-4000 blur-lg opacity-40"></div>
          
          {/* 3D Grid overlay */}
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
          
          {/* Dynamic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-conic from-brand-violet/10 via-transparent via-brand-orange/10 to-brand-violet/10 animate-spin-slow opacity-30"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-violet/15 via-brand-violet/5 to-transparent blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 border border-brand-violet/30 backdrop-blur-xl mb-8 shadow-2xl shadow-brand-violet/20 hover:shadow-brand-violet/40 transition-all duration-300 hover:scale-105 transform-gpu">
              <Eye className="w-5 h-5 text-brand-orange mr-3 drop-shadow-lg" />
              <span className="text-sm font-semibold text-brand-white drop-shadow-lg">
                Our Creative Journey
              </span>
            </div>

            {/* Enhanced hero title */}
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-brand-white drop-shadow-2xl">Where Ideas Evolved into </span>
                <span className="bg-gradient-to-r from-brand-violet via-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">Reality</span>
              </h1>
              
              {/* 3D text shadow effect */}
              <div className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-bold text-brand-violet/10 blur-xl transform translate-x-4 translate-y-4 -z-10">
                Where Ideas Evolved into Reality
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-brand-white/80 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Join the journey with us like our other partners and discover how we transform visions into exceptional digital experiences.
            </p>

            {/* Enhanced stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-brand-white/10 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="text-3xl font-bold bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl mb-2">50+</div>
                <div className="text-sm text-brand-white/60 drop-shadow-sm">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-xl mb-2">25+</div>
                <div className="text-sm text-brand-white/60 drop-shadow-sm">Happy Clients</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl mb-2">98%</div>
                <div className="text-sm text-brand-white/60 drop-shadow-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Grid */}
      <section className="relative py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-16 w-28 h-28 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-full animate-float blur-lg opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-brand-violet/10 to-brand-orange/15 rounded-2xl rotate-12 animate-float animation-delay-3000 blur-xl opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced section header */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                <span className="drop-shadow-xl">Our Featured </span>
                <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl">Work</span>
              </h2>
              <p className="text-lg text-brand-white/80 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
                Explore our portfolio of innovative solutions that have helped businesses achieve their digital transformation goals.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full mx-auto mt-6"></div>
            </div>

            <Suspense fallback={<PortfolioGridSkeleton />}>
              <PortfolioSection />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10"></div>
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-brand-violet/10 to-brand-orange/15 rounded-full animate-float blur-2xl opacity-40"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-3xl rotate-12 animate-float animation-delay-2000 blur-xl opacity-50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative p-12 bg-gradient-to-br from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-brand-violet/10">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-3xl blur-2xl"></div>
              <div className="absolute inset-0 bg-gradient-conic from-brand-violet/5 via-transparent via-brand-orange/5 to-brand-violet/5 rounded-3xl animate-spin-slow opacity-40"></div>
              
              {/* 3D depth shadow */}
              <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-6 translate-y-6 blur-xl -z-10"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 border border-brand-violet/30 backdrop-blur-sm mb-6 shadow-lg shadow-brand-violet/20">
                  <Sparkles className="w-4 h-4 text-brand-orange mr-2" />
                  <span className="text-sm font-semibold text-brand-white drop-shadow-lg">
                    Start Your Journey
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6 drop-shadow-xl">
                  Ready to start your <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">project?</span>
                </h2>
                
                <p className="text-xl text-brand-white/80 mb-10 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
                  Let's create something amazing together. Contact us to discuss your ideas and turn them into reality.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" className="group bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-orange text-brand-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-violet/50 transform-gpu shadow-xl shadow-brand-violet/30 border border-brand-violet/20">
                    <Link href="/contact" className="flex items-center space-x-3">
                      <span className="drop-shadow-lg">Get Started</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg" />
                      
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-brand-violet/30 rounded-xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300"></div>
                    </Link>
                  </Button>

                  <Button asChild size="lg" variant="outline" className="border-2 border-brand-orange/50 bg-gradient-to-r from-transparent to-brand-orange/10 text-brand-white hover:bg-gradient-to-r hover:from-brand-orange/20 hover:to-brand-orange/30 hover:border-brand-orange font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/30 backdrop-blur-sm shadow-lg shadow-brand-orange/20 transform-gpu">
                    <Link href="/services" className="drop-shadow-lg">View Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
