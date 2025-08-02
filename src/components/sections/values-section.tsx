"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Zap, DollarSign, Rocket, Palette} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Benefit from our committed teams who ensure your success is personal. Count on expert guidance and exceptional results throughout your project journey.",
  },
  {
    icon: DollarSign,
    title: "Simplicity and Affordability",
    description: "Find easy-to-use, affordable solutions with our team. Our products make procurement simple and keep projects within budget.",
  },
  {
    icon: Rocket,
    title: "Fail-fast Approach",
    description: "Build only what is necessary to test your core assumptions, gather real user feedback quickly, and pivot or kill features that don't meet your goals.",
  },
  {
    icon: Palette,
    title: "User-Centric Design",
    description: "Experience the difference with our user-focused design — where functionality meets practicality for an enhanced work experience.",
  }
];

export function ValuesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-brand-violet/20 to-brand-orange/10 rounded-lg rotate-45 animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-brand-orange/20 to-brand-violet/10 rounded-full animate-float animation-delay-2000 blur-sm"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-brand-violet/15 to-brand-orange/15 rounded-xl rotate-12 animate-float animation-delay-4000 blur-sm"></div>
        
        {/* 3D Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent"></div>
        
        {/* Radial gradients for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-brand-violet/10 via-brand-violet/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-radial from-brand-orange/10 via-brand-orange/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          {/* Enhanced Header Section */}
          <div className="lg:w-1/2 text-left">
            <div className="relative">
              {/* 3D Text treatment */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-white mb-6 leading-tight">
                <span className="drop-shadow-2xl">Achieving what matters most to </span>
                <span className="bg-gradient-to-r from-brand-violet via-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">you</span>
              </h2>
              
              {/* Subtle glow effect behind text */}
              <div className="absolute inset-0 text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-violet/10 blur-xl transform translate-x-2 translate-y-2 -z-10">
                Achieving what matters most to you
              </div>
            </div>
            
            <p className="text-lg text-brand-white/80 leading-relaxed drop-shadow-lg">
              We offer innovative digital services but first and foremost, we believe that building a committed partnership with you first is vital in driving your business to fundamentally advance in this digital universe
            </p>
          </div>

          {/* Enhanced Values Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 border border-brand-white/10 hover:border-brand-violet/30 hover:-translate-y-2 rounded-2xl backdrop-blur-sm transform-gpu"
                >
                  {/* 3D Background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />
                  
                  <CardContent className="relative p-8 z-10">
                    {/* Enhanced 3D Icon */}
                    <div className="mb-6">
                      <div className="relative group/icon">
                        <div className="w-18 h-18 bg-gradient-to-br from-brand-violet/20 via-brand-orange/10 to-brand-violet/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:from-brand-violet/30 group-hover:to-brand-orange/20 transition-all duration-300 shadow-lg shadow-brand-violet/20 group-hover:shadow-brand-violet/40">
                          <IconComponent className="w-10 h-10 text-brand-orange group-hover:text-brand-white transition-colors duration-300 drop-shadow-lg" />
                        </div>
                        
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 w-18 h-18 bg-brand-orange/20 rounded-2xl blur-lg opacity-0 group-hover/icon:opacity-60 transition-opacity duration-300" />
                        
                        {/* 3D shadow */}
                        <div className="absolute inset-0 w-18 h-18 bg-brand-dark/40 rounded-2xl transform translate-x-2 translate-y-2 blur-sm -z-10"></div>
                      </div>
                    </div>

                    {/* Enhanced Content */}
                    <h3 className="text-xl font-bold text-brand-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-violet group-hover:to-brand-orange group-hover:bg-clip-text transition-all duration-300 drop-shadow-lg">
                      {value.title}
                    </h3>
                    
                    <p className="text-brand-white/70 leading-relaxed group-hover:text-brand-white/90 transition-colors duration-300 drop-shadow-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Enhanced 3D Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 backdrop-blur-xl shadow-2xl shadow-brand-violet/10">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-3xl blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-conic from-brand-violet/5 via-transparent via-brand-orange/5 to-brand-violet/5 rounded-3xl animate-spin-slow opacity-30"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-white mb-4 drop-shadow-xl">
                Ready to Experience the <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">Difference?</span>
              </h3>
              
              <p className="text-brand-white/80 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                Let's discuss how our values-driven approach can help transform your digital presence 
                and achieve the results that matter most to your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-violet text-brand-white font-semibold rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-violet/50 transform-gpu shadow-xl shadow-brand-violet/30 border border-brand-violet/20"
                >
                  <span className="drop-shadow-lg">Start Your Journey</span>
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-brand-white rounded-full animate-ping"></div>
                  </div>
                </a>
                
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-brand-orange/50 bg-gradient-to-r from-transparent to-brand-orange/10 text-brand-white hover:bg-gradient-to-r hover:from-brand-orange/20 hover:to-brand-orange/30 hover:border-brand-orange font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/30 backdrop-blur-sm shadow-lg shadow-brand-orange/20 transform-gpu"
                >
                  <span className="drop-shadow-lg">Learn More About Us</span>
                </a>
              </div>
            </div>
            
            {/* 3D depth shadow */}
            <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-4 translate-y-4 blur-sm -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
