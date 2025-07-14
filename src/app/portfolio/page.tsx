import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPortfolioItems, PortfolioItem } from "@/lib/contentful";
import { Button } from "@/components/ui/button";
import PortfolioGrid from "@/components/portfolio/portfolio-grid";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description: "Explore our portfolio of successful projects including web applications, mobile apps, and digital solutions. See how we've helped businesses achieve their goals.",
  openGraph: {
    title: "Portfolio - Reign of Vision Digital Agency",
    description: "Discover the innovative digital solutions we've created for our clients across various industries.",
    url: "https://Reign of Vision.com/portfolio",
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
    <div className="space-y-8">
      {/* Filter Skeleton */}
      <div className="flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="skeleton h-8 w-20 rounded-full"></div>
        ))}
      </div>
      
      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="skeleton aspect-video"></div>
            <div className="p-6">
              <div className="skeleton h-6 w-3/4 mb-3 rounded-lg"></div>
              <div className="skeleton h-4 w-full mb-2 rounded-lg"></div>
              <div className="skeleton h-4 w-2/3 mb-4 rounded-lg"></div>
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
    <div className="min-h-screen bg-brand-white dark:bg-brand-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-br text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Where Ideas Evolved into Reality
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
            Join the journey with us like our other partners
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-brand-white dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Suspense fallback={<PortfolioGridSkeleton />}>
              <PortfolioSection />
            </Suspense>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to start your project?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's create something amazing together. Contact us to discuss your ideas.
            </p>
            <Button asChild size="lg" className="bg-brand-violet hover:bg-brand-primary/80">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 