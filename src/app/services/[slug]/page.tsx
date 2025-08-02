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
  Home,
  Sparkles
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
    <div className="min-h-screen bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark">
      {/* Enhanced Breadcrumbs */}
      <section className="relative pt-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-20 h-20 bg-gradient-to-br from-brand-violet/15 to-brand-orange/10 rounded-full animate-float blur-lg opacity-50"></div>
          <div className="absolute bottom-10 left-16 w-24 h-24 bg-gradient-to-br from-brand-orange/10 to-brand-violet/15 rounded-2xl rotate-12 animate-float animation-delay-2000 blur-sm opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <nav className="flex items-center space-x-3 text-sm">
            <Link href="/" className="group flex items-center px-3 py-2 text-brand-white/70 hover:text-brand-white transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-brand-white/5 hover:to-brand-white/10 backdrop-blur-sm">
              <Home className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="drop-shadow-sm">Home</span>
            </Link>
            <ChevronRight className="h-4 w-4 text-brand-violet drop-shadow-lg" />
            <Link href="/services" className="px-3 py-2 text-brand-white/70 hover:text-brand-white transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-brand-white/5 hover:to-brand-white/10 backdrop-blur-sm drop-shadow-sm">
              Services
            </Link>
            <ChevronRight className="h-4 w-4 text-brand-violet drop-shadow-lg" />
            <span className="px-3 py-2 text-brand-white bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 rounded-lg border border-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 drop-shadow-lg">
              {service.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Enhanced Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Enhanced 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-brand-violet/20 to-brand-orange/10 rounded-3xl rotate-12 animate-float blur-sm opacity-60"></div>
          <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-br from-brand-orange/20 to-brand-violet/10 rounded-2xl rotate-45 animate-float animation-delay-2000 blur-sm opacity-50"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-brand-violet/15 to-brand-orange/15 rounded-full animate-float animation-delay-4000 blur-lg opacity-40"></div>
          
          <div className="absolute inset-0 bg-gradient-conic from-brand-violet/10 via-transparent via-brand-orange/10 to-brand-violet/10 animate-spin-slow opacity-30"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-violet/15 via-brand-violet/5 to-transparent blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced service badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 border border-brand-violet/30 backdrop-blur-xl mb-8 shadow-2xl shadow-brand-violet/20 hover:shadow-brand-violet/40 transition-all duration-300 hover:scale-105 transform-gpu">
              <Sparkles className="w-5 h-5 text-brand-orange mr-3 drop-shadow-lg" />
              <span className="text-sm font-semibold text-brand-white drop-shadow-lg">
                Professional Service
              </span>
            </div>

            {/* Enhanced icon */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="p-6 bg-gradient-to-br from-brand-violet/25 to-brand-orange/15 rounded-3xl border border-brand-violet/30 group-hover:from-brand-violet/35 group-hover:to-brand-orange/25 transition-all duration-300 shadow-2xl shadow-brand-violet/30 group-hover:shadow-brand-violet/50 group-hover:scale-110 transform-gpu backdrop-blur-sm">
                  <IconComponent className="h-16 w-16 text-brand-violet group-hover:text-brand-white transition-colors duration-300 drop-shadow-xl" />
                </div>
                
                <div className="absolute inset-0 p-6 bg-brand-violet/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-400"></div>
                <div className="absolute inset-0 p-6 bg-brand-dark/40 rounded-3xl transform translate-x-4 translate-y-4 blur-lg -z-10"></div>
              </div>
            </div>

            {/* Enhanced title */}
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-brand-white via-brand-white to-brand-violet bg-clip-text text-transparent drop-shadow-2xl">
                  {service.title}
                </span>
              </h1>
              
              <div className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-bold text-brand-violet/10 blur-xl transform translate-x-4 translate-y-4 -z-10">
                {service.title}
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-brand-white/80 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-16 w-28 h-28 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-full animate-float blur-lg opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-brand-violet/10 to-brand-orange/15 rounded-2xl rotate-12 animate-float animation-delay-3000 blur-xl opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Enhanced Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Enhanced Features */}
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-8">
                  <span className="drop-shadow-xl">What We </span>
                  <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl">Offer</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full mb-10"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="group flex items-center space-x-4 bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 p-6 rounded-2xl border border-brand-white/10 hover:border-brand-violet/40 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm shadow-lg shadow-brand-dark/30 hover:shadow-brand-violet/20 transform-gpu"
                    >
                      <div className="relative">
                        <div className="p-2 bg-gradient-to-br from-brand-violet/25 to-brand-orange/15 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-violet/20">
                          <CheckCircle className="h-6 w-6 text-brand-violet group-hover:text-brand-white transition-colors duration-300 drop-shadow-lg" />
                        </div>
                        <div className="absolute inset-0 p-2 bg-brand-violet/20 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      </div>
                      <span className="text-brand-white/90 group-hover:text-brand-white transition-colors duration-300 drop-shadow-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Key Benefits */}
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-8">
                  <span className="drop-shadow-xl">Key </span>
                  <span className="bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-xl">Benefits</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-orange to-brand-violet rounded-full mb-10"></div>
                
                <div className="space-y-6">
                  {service.benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="group flex items-start space-x-4 bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 p-6 rounded-2xl border border-brand-white/10 hover:border-brand-violet/40 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm shadow-lg shadow-brand-dark/30 hover:shadow-brand-violet/20 transform-gpu"
                    >
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-violet/25 to-brand-orange/15 rounded-full flex items-center justify-center border border-brand-violet/30 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-violet/20">
                          <span className="text-brand-violet text-lg font-bold group-hover:text-brand-white transition-colors duration-300 drop-shadow-lg">{index + 1}</span>
                        </div>
                        <div className="absolute inset-0 w-10 h-10 bg-brand-violet/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      </div>
                      <p className="text-brand-white/90 group-hover:text-brand-white transition-colors duration-300 drop-shadow-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Technologies */}
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-8">
                  <span className="drop-shadow-xl">Technologies We </span>
                  <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl">Use</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full mb-10"></div>
                
                <div className="flex flex-wrap gap-4">
                  {service.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      className="px-4 py-2 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 text-brand-violet border border-brand-violet/30 hover:bg-gradient-to-r hover:from-brand-violet/30 hover:to-brand-orange/20 hover:border-brand-violet/50 hover:text-brand-white transition-all duration-300 backdrop-blur-sm shadow-lg shadow-brand-violet/20 hover:shadow-brand-violet/40 hover:scale-105 transform-gpu rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="relative bg-gradient-to-br from-brand-dark/90 via-slate-800/60 to-brand-dark/90 border border-brand-white/10 backdrop-blur-xl shadow-2xl shadow-brand-violet/10 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-3xl blur-2xl"></div>
                  <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-3 translate-y-3 blur-lg -z-10"></div>
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl font-bold text-brand-white drop-shadow-lg flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-brand-violet" />
                      Ready to Get Started?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-6">
                    <p className="text-brand-white/80 leading-relaxed drop-shadow-sm">
                      Let's discuss your project and see how we can help you achieve your goals.
                    </p>
                    
                    <Button asChild className="group w-full bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-orange text-brand-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-violet/40 shadow-lg shadow-brand-violet/30 transform-gpu">
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        <span className="drop-shadow-lg">Get a Quote</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                    
                    <Button asChild variant="outline" className="w-full border-2 border-brand-orange/50 bg-gradient-to-r from-transparent to-brand-orange/10 text-brand-white hover:bg-gradient-to-r hover:from-brand-orange/20 hover:to-brand-orange/30 hover:border-brand-orange font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-orange/30 backdrop-blur-sm shadow-lg shadow-brand-orange/20 transform-gpu">
                      <Link href="/portfolio" className="drop-shadow-lg">View Our Work</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Related Services */}
      {relatedServices.length > 0 && (
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-brand-violet/10 to-brand-orange/10 rounded-3xl rotate-45 animate-float blur-xl opacity-30"></div>
            <div className="absolute bottom-20 right-16 w-24 h-24 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-2xl animate-float animation-delay-2000 blur-lg opacity-40"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                <span className="drop-shadow-xl">Related </span>
                <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl">Services</span>
              </h2>
              <p className="text-lg text-brand-white/80 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
                Explore our other services that might interest you
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => {
                const RelatedIconComponent = iconMap[relatedService.icon as keyof typeof iconMap] || Code;
                return (
                  <Card 
                    key={relatedService.id} 
                    className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 border border-brand-white/10 hover:border-brand-violet/40 hover:-translate-y-3 rounded-3xl backdrop-blur-sm shadow-xl shadow-brand-dark/30 hover:shadow-brand-violet/20 transform-gpu"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />
                    <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-4 translate-y-4 blur-lg -z-10 opacity-60"></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="relative group/icon">
                          <div className="p-4 bg-gradient-to-br from-brand-violet/25 to-brand-orange/15 rounded-2xl group-hover:from-brand-violet/35 group-hover:to-brand-orange/25 transition-all duration-300 shadow-xl shadow-brand-violet/20 group-hover:shadow-brand-violet/40 group-hover:scale-110 transform-gpu border border-brand-violet/30">
                            <RelatedIconComponent className="h-8 w-8 text-brand-violet group-hover:text-brand-white transition-colors duration-300 drop-shadow-lg" />
                          </div>
                          <div className="absolute inset-0 p-4 bg-brand-violet/20 rounded-2xl blur-lg opacity-0 group-hover/icon:opacity-60 transition-opacity duration-300"></div>
                        </div>
                        <CardTitle className="text-xl font-bold text-brand-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-violet group-hover:to-brand-orange group-hover:bg-clip-text transition-all duration-300 drop-shadow-lg">
                          {relatedService.title}
                        </CardTitle>
                      </div>
                      <p className="text-brand-white/80 leading-relaxed group-hover:text-brand-white/95 transition-colors duration-300 drop-shadow-sm">
                        {relatedService.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <Button asChild variant="outline" className="group/btn w-full border-2 border-brand-violet/40 bg-gradient-to-r from-transparent to-brand-violet/10 text-brand-white hover:bg-gradient-to-r hover:from-brand-violet/20 hover:to-brand-violet/30 hover:border-brand-violet font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 transform-gpu">
                        <Link href={`/services/${relatedService.slug}`} className="flex items-center justify-center space-x-2">
                          <span className="drop-shadow-lg">Learn More</span>
                          <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300 drop-shadow-lg" />
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

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10"></div>
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-brand-violet/10 to-brand-orange/15 rounded-full animate-float blur-2xl opacity-40"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-3xl rotate-12 animate-float animation-delay-2000 blur-xl opacity-50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 bg-gradient-to-br from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-brand-violet/10">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-3xl blur-2xl"></div>
              <div className="absolute inset-0 bg-gradient-conic from-brand-violet/5 via-transparent via-brand-orange/5 to-brand-violet/5 rounded-3xl animate-spin-slow opacity-40"></div>
              <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-6 translate-y-6 blur-xl -z-10"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6 drop-shadow-xl">
                  Ready to Transform Your <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">Business?</span>
                </h2>
                
                <p className="text-xl text-brand-white/80 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                  Let's work together to bring your vision to life with our {service.title.toLowerCase()} expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" className="group bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-orange text-brand-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-violet/50 transform-gpu shadow-xl shadow-brand-violet/30 border border-brand-violet/20">
                    <Link href="/contact" className="flex items-center gap-2">
                      <span className="drop-shadow-lg">Start Your Project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                  
                  <Button asChild size="lg" variant="outline" className="border-2 border-brand-orange/50 bg-gradient-to-r from-transparent to-brand-orange/10 text-brand-white hover:bg-gradient-to-r hover:from-brand-orange/20 hover:to-brand-orange/30 hover:border-brand-orange font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/30 backdrop-blur-sm shadow-lg shadow-brand-orange/20 transform-gpu">
                    <Link href="/services" className="drop-shadow-lg">View All Services</Link>
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
