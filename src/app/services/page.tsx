import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Palette, 
  Search, 
  BarChart,
  ArrowRight,
  LucideIcon,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Service interface
interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Our Services | Reign of Vision",
  description: "Comprehensive digital solutions including web development, mobile apps, UI/UX design, SEO, and digital strategy consulting.",
  openGraph: {
    title: "Our Services | Reign of Vision",
    description: "Comprehensive digital solutions including web development, mobile apps, UI/UX design, SEO, and digital strategy consulting.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Reign of Vision",
    description: "Comprehensive digital solutions including web development, mobile apps, UI/UX design, SEO, and digital strategy consulting.",
  },
};

// Static services data
const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    slug: 'web-development',
    icon: 'Code',
    description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and user experience.',
  },
  {
    id: '2',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    icon: 'Smartphone',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter frameworks.',
  },
  {
    id: '3',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    icon: 'Palette',
    description: 'User-centered design solutions that create intuitive interfaces and exceptional user experiences across all platforms.',
  },
  {
    id: '4',
    title: 'SEO & Digital Marketing',
    slug: 'seo-digital-marketing',
    icon: 'Search',
    description: 'Comprehensive SEO strategies and digital marketing campaigns to boost your online visibility and drive organic traffic.',
  },
  {
    id: '5',
    title: 'Digital Strategy & Consulting',
    slug: 'digital-strategy-consulting',
    icon: 'BarChart',
    description: 'Strategic consulting to help businesses navigate digital transformation and optimize their online presence.',
  },
  {
    id: '6',
    title: 'E-commerce Solutions',
    slug: 'ecommerce-solutions',
    icon: 'Globe',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and conversion optimization.',
  },
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

function ServiceCard({ service }: { service: Service }) {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;

  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 border border-brand-white/10 hover:border-brand-violet/40 hover:-translate-y-3 rounded-3xl backdrop-blur-sm shadow-xl shadow-brand-dark/30 hover:shadow-brand-violet/20 transform-gpu">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />
      
      {/* 3D depth shadow */}
      <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-4 translate-y-4 blur-lg -z-10 opacity-60"></div>
      
      <CardHeader className="relative p-8 z-10">
        <div className="flex items-start space-x-4 mb-6">
          <div className="relative group/icon">
            <div className="p-4 bg-gradient-to-br from-brand-violet/25 to-brand-orange/15 rounded-2xl group-hover:from-brand-violet/35 group-hover:to-brand-orange/25 transition-all duration-300 shadow-xl shadow-brand-violet/20 group-hover:shadow-brand-violet/40 group-hover:scale-110 transform-gpu">
              <IconComponent className="h-8 w-8 text-brand-violet group-hover:text-brand-white transition-colors duration-300 drop-shadow-lg" />
            </div>
            
            {/* Icon glow effect */}
            <div className="absolute inset-0 p-4 bg-brand-violet/20 rounded-2xl blur-lg opacity-0 group-hover/icon:opacity-60 transition-opacity duration-300"></div>
            
            {/* 3D icon shadow */}
            <div className="absolute inset-0 p-4 bg-brand-dark/60 rounded-2xl transform translate-x-2 translate-y-2 blur-md -z-10"></div>
          </div>
          
          <div className="flex-1">
            <CardTitle className="text-2xl font-bold text-brand-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-violet group-hover:to-brand-orange group-hover:bg-clip-text transition-all duration-300 drop-shadow-lg mb-2">
              {service.title}
            </CardTitle>
          </div>
        </div>
        
        <CardDescription className="text-brand-white/80 leading-relaxed text-base group-hover:text-brand-white/95 transition-colors duration-300 drop-shadow-sm">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative p-8 pt-0 z-10">
        <Button asChild variant="outline" className="group/btn w-full border-2 border-brand-violet/40 bg-gradient-to-r from-transparent to-brand-violet/10 text-brand-white hover:bg-gradient-to-r hover:from-brand-violet/20 hover:to-brand-violet/30 hover:border-brand-violet font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 transform-gpu">
          <Link href={`/services/${service.slug}`} className="flex items-center justify-center space-x-2">
            <span className="drop-shadow-lg">Learn More</span>
            <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300 drop-shadow-lg" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}

function ServicesGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 rounded-3xl p-8 shadow-xl border border-brand-white/10 backdrop-blur-sm">
          <div className="h-20 w-20 bg-gradient-to-br from-brand-violet/30 to-brand-orange/20 rounded-2xl mb-6 animate-pulse"></div>
          <div className="h-8 w-48 bg-gradient-to-r from-brand-white/20 to-brand-white/10 rounded-xl mb-4 animate-pulse"></div>
          <div className="h-6 w-full bg-gradient-to-r from-brand-white/20 to-brand-white/10 rounded-lg mb-2 animate-pulse"></div>
          <div className="h-6 w-3/4 bg-gradient-to-r from-brand-white/20 to-brand-white/10 rounded-lg mb-8 animate-pulse"></div>
          <div className="h-12 w-full bg-gradient-to-r from-brand-violet/30 to-brand-orange/20 rounded-xl animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}

async function ServicesSection() {
  return <ServicesGrid services={services} />;
}

export default function ServicesPage() {
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

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 border border-brand-violet/30 backdrop-blur-xl mb-8 shadow-2xl shadow-brand-violet/20 hover:shadow-brand-violet/40 transition-all duration-300 hover:scale-105 transform-gpu">
              <Sparkles className="w-5 h-5 text-brand-orange mr-3 drop-shadow-lg" />
              <span className="text-sm font-semibold text-brand-white drop-shadow-lg">
                Digital Solutions & Services
              </span>
            </div>

            {/* Enhanced hero title */}
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-brand-white drop-shadow-2xl">Our </span>
                <span className="bg-gradient-to-r from-brand-violet via-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">Services</span>
              </h1>
              
              {/* 3D text shadow effect */}
              <div className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-bold text-brand-violet/10 blur-xl transform translate-x-4 translate-y-4 -z-10">
                Our Services
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-brand-white/80 mb-10 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              We offer comprehensive digital solutions to help your business thrive in the modern digital landscape. 
              From web development to digital marketing, we've got you covered.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing'].map((badge, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="px-4 py-2 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 text-brand-violet border border-brand-violet/30 backdrop-blur-sm shadow-lg shadow-brand-violet/20 hover:shadow-brand-violet/40 transition-all duration-300 hover:scale-105 transform-gpu rounded-full"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="relative py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-16 w-28 h-28 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-full animate-float blur-lg opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-brand-violet/10 to-brand-orange/15 rounded-2xl rotate-12 animate-float animation-delay-3000 blur-xl opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              <span className="drop-shadow-xl">What We </span>
              <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl">Do</span>
            </h2>
            <p className="text-lg text-brand-white/80 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
              Our expert team delivers cutting-edge solutions tailored to your business needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full mx-auto mt-6"></div>
          </div>
          
          <ServicesGrid services={services} />
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-brand-violet/10 to-brand-orange/10 rounded-3xl rotate-45 animate-float blur-xl opacity-30"></div>
          <div className="absolute bottom-20 right-16 w-24 h-24 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-2xl animate-float animation-delay-2000 blur-lg opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
              <span className="drop-shadow-xl">Our </span>
              <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl">Process</span>
            </h2>
            <p className="text-lg text-brand-white/80 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
              We follow a proven methodology to ensure successful project delivery
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business goals and requirements' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and timeline' },
              { step: '03', title: 'Development', description: 'Building your solution with best practices' },
              { step: '04', title: 'Launch', description: 'Deploying and optimizing for success' },
            ].map((process, index) => (
              <div 
                key={index} 
                className="group relative text-center bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 p-8 rounded-2xl border border-brand-white/10 hover:border-brand-violet/40 hover:bg-gradient-to-br hover:from-brand-violet/10 hover:via-transparent hover:to-brand-orange/10 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm shadow-xl shadow-brand-dark/30 hover:shadow-brand-violet/20 transform-gpu"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                
                {/* 3D depth shadow */}
                <div className="absolute inset-0 bg-brand-dark/40 rounded-2xl transform translate-x-3 translate-y-3 blur-lg -z-10 opacity-60"></div>
                
                <div className="relative z-10">
                  {/* Enhanced step number */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-violet via-brand-violet to-brand-violet/90 text-brand-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-brand-violet/30 group-hover:shadow-brand-violet/50">
                      {process.step}
                    </div>
                    
                    {/* Step glow effect */}
                    <div className="absolute inset-0 w-20 h-20 bg-brand-violet/30 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 mx-auto"></div>
                    
                    {/* 3D step shadow */}
                    <div className="absolute inset-0 w-20 h-20 bg-brand-dark/60 rounded-full transform translate-x-2 translate-y-2 blur-md -z-10 mx-auto"></div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-violet group-hover:to-brand-orange group-hover:bg-clip-text transition-all duration-300 drop-shadow-lg">
                    {process.title}
                  </h3>
                  
                  <p className="text-brand-white/70 leading-relaxed group-hover:text-brand-white/90 transition-colors duration-300 drop-shadow-sm">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
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

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative p-12 bg-gradient-to-br from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-brand-violet/10">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-3xl blur-2xl"></div>
              <div className="absolute inset-0 bg-gradient-conic from-brand-violet/5 via-transparent via-brand-orange/5 to-brand-violet/5 rounded-3xl animate-spin-slow opacity-40"></div>
              
              {/* 3D depth shadow */}
              <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-6 translate-y-6 blur-xl -z-10"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6 drop-shadow-xl">
                  Ready to Get <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">Started?</span>
                </h2>
                
                <p className="text-xl text-brand-white/80 mb-10 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
                  Let's discuss your project and see how we can help bring your vision to life.
                </p>
                
                <Button asChild size="lg" className="group bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-orange text-brand-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-violet/50 transform-gpu shadow-xl shadow-brand-violet/30 border border-brand-violet/20">
                  <Link href="/contact" className="flex items-center space-x-3">
                    <span className="drop-shadow-lg">Start Your Project</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg" />
                    
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-brand-violet/30 rounded-xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300"></div>
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
