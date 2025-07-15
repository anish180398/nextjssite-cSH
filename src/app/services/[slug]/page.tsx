import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronRight,
  Code, 
  Smartphone, 
  Globe, 
  Palette, 
  Search, 
  BarChart,
  Home
} from 'lucide-react';

// Static services data
const services = [
  {
    id: '1',
    title: 'Web Development',
    slug: 'web-development',
    icon: 'Code',
    description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and user experience.',
    fullDescription: 'Our web development services encompass everything from simple landing pages to complex web applications. We use cutting-edge technologies like React, Next.js, Node.js, and TypeScript to build scalable, secure, and high-performance websites that drive business growth.',
    features: [
      'Custom Web Applications',
      'E-commerce Platforms',
      'Content Management Systems',
      'API Development & Integration',
      'Performance Optimization',
      'SEO-Friendly Architecture'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
    benefits: [
      'Faster loading times and better user experience',
      'Mobile-responsive design for all devices',
      'Scalable architecture that grows with your business',
      'SEO optimization for better search rankings',
      'Secure and reliable hosting solutions',
      'Ongoing maintenance and support'
    ]
  },
  {
    id: '2',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    icon: 'Smartphone',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter frameworks.',
    fullDescription: 'We create powerful mobile applications that provide exceptional user experiences across iOS and Android platforms. Whether you need a native app or cross-platform solution, our team delivers high-quality mobile apps that engage users and drive business results.',
    features: [
      'Native iOS & Android Apps',
      'Cross-Platform Development',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'Third-Party Integrations'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
    benefits: [
      'Reach customers on their preferred mobile platform',
      'Improved customer engagement and retention',
      'Seamless integration with device features',
      'Offline capabilities for uninterrupted usage',
      'App store optimization for better visibility',
      'Regular updates and maintenance'
    ]
  },
  {
    id: '3',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    icon: 'Palette',
    description: 'User-centered design solutions that create intuitive interfaces and exceptional user experiences across all platforms.',
    fullDescription: 'Our UI/UX design services focus on creating beautiful, intuitive, and user-friendly interfaces that enhance user satisfaction and drive conversions. We combine aesthetic appeal with functional design to deliver exceptional digital experiences.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Usability Testing',
      'Design Systems',
      'Responsive Design'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
    benefits: [
      'Improved user satisfaction and engagement',
      'Higher conversion rates and sales',
      'Reduced development costs through proper planning',
      'Consistent brand experience across platforms',
      'Better accessibility for all users',
      'Data-driven design decisions'
    ]
  },
  {
    id: '4',
    title: 'SEO & Digital Marketing',
    slug: 'seo-digital-marketing',
    icon: 'Search',
    description: 'Comprehensive SEO strategies and digital marketing campaigns to boost your online visibility and drive organic traffic.',
    fullDescription: 'Our SEO and digital marketing services help businesses increase their online visibility, attract qualified traffic, and convert visitors into customers. We use proven strategies and the latest tools to deliver measurable results.',
    features: [
      'Search Engine Optimization',
      'Pay-Per-Click Advertising',
      'Content Marketing',
      'Social Media Marketing',
      'Email Marketing',
      'Analytics & Reporting'
    ],
    technologies: ['Google Analytics', 'Google Ads', 'SEMrush', 'Ahrefs', 'Mailchimp', 'HubSpot'],
    benefits: [
      'Increased organic search visibility',
      'Higher quality website traffic',
      'Improved brand awareness and recognition',
      'Better return on marketing investment',
      'Detailed performance tracking and reporting',
      'Long-term sustainable growth'
    ]
  },
  {
    id: '5',
    title: 'Digital Strategy & Consulting',
    slug: 'digital-strategy-consulting',
    icon: 'BarChart',
    description: 'Strategic consulting to help businesses navigate digital transformation and optimize their online presence.',
    fullDescription: 'Our digital strategy and consulting services help businesses develop comprehensive digital transformation plans, optimize their technology stack, and achieve their online objectives through strategic planning and expert guidance.',
    features: [
      'Digital Transformation Planning',
      'Technology Stack Optimization',
      'Business Process Analysis',
      'Competitive Analysis',
      'ROI Optimization',
      'Implementation Roadmaps'
    ],
    technologies: ['Google Analytics', 'Tableau', 'Salesforce', 'HubSpot', 'Slack', 'Asana'],
    benefits: [
      'Clear digital transformation roadmap',
      'Optimized technology investments',
      'Improved operational efficiency',
      'Better decision-making with data insights',
      'Competitive advantage in the market',
      'Measurable business growth'
    ]
  },
  {
    id: '6',
    title: 'E-commerce Solutions',
    slug: 'ecommerce-solutions',
    icon: 'Globe',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and conversion optimization.',
    fullDescription: 'We build comprehensive e-commerce solutions that help businesses sell online effectively. From custom shopping carts to full marketplace platforms, our e-commerce solutions are designed to maximize sales and provide excellent customer experiences.',
    features: [
      'Custom E-commerce Platforms',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing Systems',
      'Customer Account Management',
      'Analytics & Reporting'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'BigCommerce'],
    benefits: [
      'Increased online sales and revenue',
      'Streamlined order management process',
      'Better customer shopping experience',
      'Secure payment processing',
      'Inventory tracking and management',
      'Detailed sales analytics and insights'
    ]
  }
];

// Icon mapping
const iconMap = {
  Code,
  Smartphone,
  Globe,
  Palette,
  Search,
  BarChart,
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Reign of Vision Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Reign of Vision Services`,
      description: service.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Reign of Vision Services`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;
  const relatedServices = services.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Breadcrumbs */}
      <section className="bg-brand-dark  pt-32">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-brand-white/70">
            <Link href="/" className="hover:text-brand-violet flex items-center transition-colors">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services" className="hover:text-brand-violet transition-colors">
              Services
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-brand-white">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-violet/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-brand-violet/20 rounded-2xl border border-brand-violet/30">
                <IconComponent className="h-12 w-12 text-brand-violet" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-brand-white/70 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Features */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-brand-violet/10 p-4 rounded-lg border border-brand-violet/20">
                      <CheckCircle className="h-5 w-5 text-brand-violet flex-shrink-0" />
                      <span className="text-brand-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Key Benefits</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-brand-violet/10 p-4 rounded-lg border border-brand-violet/20">
                      <div className="w-6 h-6 bg-brand-violet/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-violet/30">
                        <span className="text-brand-violet text-sm font-semibold">{index + 1}</span>
                      </div>
                      <p className="text-brand-white/90">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Technologies We Use</h2>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, index) => (
                    <Badge key={index} className="px-3 py-1 bg-brand-violet/20 text-brand-violet border border-brand-violet/30 hover:bg-brand-violet/30 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8 bg-brand-dark border-brand-white/10">
                <CardHeader>
                  <CardTitle className="text-brand-white">Ready to Get Started?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-brand-white/70">
                    Let's discuss your project and see how we can help you achieve your goals.
                  </p>
                  <Button asChild className="w-full bg-brand-violet hover:bg-brand-violet/90 text-brand-dark">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-brand-violet text-brand-violet hover:bg-brand-violet hover:text-brand-dark">
                    <Link href="/portfolio">View Our Work</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-brand-dark to-brand-violet/5 border-t border-brand-white/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-white mb-4">Related Services</h2>
              <p className="text-lg text-brand-white/70">Explore our other services that might interest you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => {
                const RelatedIconComponent = iconMap[relatedService.icon as keyof typeof iconMap] || Code;
                return (
                  <Card key={relatedService.id} className="group hover:shadow-xl transition-all duration-300 bg-brand-dark border-brand-white/10 hover:border-brand-violet/50">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 bg-brand-violet/20 rounded-lg group-hover:bg-brand-violet/30 transition-colors border border-brand-violet/30">
                          <RelatedIconComponent className="h-6 w-6 text-brand-violet" />
                        </div>
                        <CardTitle className="text-xl text-brand-white group-hover:text-brand-violet transition-colors">{relatedService.title}</CardTitle>
                      </div>
                      <p className="text-brand-white/70">{relatedService.description}</p>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="outline" className="w-full group border-brand-violet text-brand-violet hover:bg-brand-violet hover:text-brand-dark">
                        <Link href={`/services/${relatedService.slug}`} className="flex items-center justify-center space-x-2">
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-violet/20 to-brand-dark border-t border-brand-violet/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">
            Ready to Transform Your <span className="text-brand-violet">Business?</span>
          </h2>
          <p className="text-xl text-brand-white/70 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life with our {service.title.toLowerCase()} expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-violet hover:bg-brand-violet/90 text-brand-dark">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-brand-violet text-brand-violet hover:bg-brand-violet hover:text-brand-dark">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 