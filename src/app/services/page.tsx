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
  LucideIcon
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
    <Card className="group hover:shadow-lg transition-all duration-300 border-brand-white/10 hover:border-brand-violet/50 shadow-md bg-brand-dark hover:shadow-brand-violet/20 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-brand-violet/20 rounded-lg group-hover:bg-brand-violet/30 transition-colors">
            <IconComponent className="h-6 w-6 text-brand-violet" />
          </div>
          <CardTitle className="text-xl text-brand-white group-hover:text-brand-violet transition-colors">{service.title}</CardTitle>
        </div>
        <CardDescription className="text-brand-white/70 leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="outline" className="w-full group border-brand-violet/30 text-brand-violet hover:bg-brand-violet hover:text-brand-white">
          <Link href={`/services/${service.slug}`} className="flex items-center justify-center space-x-2">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}

function ServicesGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-brand-dark rounded-xl p-8 shadow-sm border border-brand-white/10">
          <div className="skeleton h-16 w-16 mb-4 rounded-xl"></div>
          <div className="skeleton h-6 w-32 mb-3 rounded-lg"></div>
          <div className="skeleton h-4 w-full mb-2 rounded-lg"></div>
          <div className="skeleton h-4 w-3/4 mb-6 rounded-lg"></div>
          <div className="skeleton h-10 w-full rounded-lg"></div>
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
    <div className="min-h-screen bg-brand-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-violet/10 py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
              Our <span className="text-brand-violet">Services</span>
            </h1>
            <p className="text-xl text-brand-white/80 mb-8 leading-relaxed">
              We offer comprehensive digital solutions to help your business thrive in the modern digital landscape. 
              From web development to digital marketing, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="px-3 py-1 bg-brand-violet/20 text-brand-violet border border-brand-violet/30">Web Development</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-brand-violet/20 text-brand-violet border border-brand-violet/30">Mobile Apps</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-brand-violet/20 text-brand-violet border border-brand-violet/30">UI/UX Design</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-brand-violet/20 text-brand-violet border border-brand-violet/30">Digital Marketing</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">
              What We <span className="text-brand-violet">Do</span>
            </h2>
            <p className="text-lg text-brand-white/70 max-w-2xl mx-auto">
              Our expert team delivers cutting-edge solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">
              Our <span className="text-brand-violet">Process</span>
            </h2>
            <p className="text-lg text-brand-white/70 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business goals and requirements' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and timeline' },
              { step: '03', title: 'Development', description: 'Building your solution with best practices' },
              { step: '04', title: 'Launch', description: 'Deploying and optimizing for success' },
            ].map((process, index) => (
              <div key={index} className="text-center bg-brand-violet/5 p-6 rounded-xl border border-brand-violet/20 hover:bg-brand-violet/10 transition-colors">
                <div className="w-16 h-16 bg-brand-violet text-brand-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-brand-white mb-2">
                  {process.title}
                </h3>
                <p className="text-brand-white/70">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-violet/10 border-t border-brand-violet/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">
              Ready to Get <span className="text-brand-violet">Started?</span>
            </h2>
            <p className="text-xl text-brand-white/70 mb-8">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <Button asChild size="lg" className="bg-brand-violet hover:bg-brand-violet/90 text-brand-white">
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