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
    title: "Portfolio - Kryttr Digital Agency",
    description: "Discover the innovative digital solutions we've created for our clients across various industries.",
    url: "https://reignofvision.com/portfolio",
  }
};

// Fallback sample items shown only if Contentful returns none.
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
      <div className="flex flex-wrap justify-center gap-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-9 w-24 animate-pulse rounded-full bg-muted" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-video animate-pulse bg-muted" />
            <div className="p-8">
              <div className="mb-4 h-6 w-3/4 animate-pulse rounded bg-muted" />
              <div className="mb-2 h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
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
    console.error("Error fetching portfolio items:", error);
    return <PortfolioGrid items={defaultPortfolioItems} />;
  }
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="lg:col-span-8">
            <span className="mb-6 inline-flex items-center rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Our Creative Journey
            </span>
            <h1 className="font-display mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Where ideas evolved into <span className="text-primary">reality</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Join the journey with us like our other partners and discover how we transform visions into
              exceptional digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 border-t border-border pt-6 lg:col-span-4 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <div className="font-display text-3xl font-semibold text-foreground">50+</div>
              <div className="mt-1 text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-foreground">25+</div>
              <div className="mt-1 text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-foreground">98%</div>
              <div className="mt-1 text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
              Our featured <span className="text-primary">work</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of innovative solutions that have helped businesses achieve their goals.
            </p>
          </div>

          <Suspense fallback={<PortfolioGridSkeleton />}>
            <PortfolioSection />
          </Suspense>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-border bg-card p-12 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display mb-3 text-2xl font-semibold text-foreground sm:text-3xl">
                Ready to start your <span className="text-primary">project?</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Let&apos;s create something amazing together. Contact us to discuss your ideas and turn them into
                reality.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link href="/contact">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
