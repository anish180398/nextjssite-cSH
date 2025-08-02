import { Metadata } from "next";
import Image from "next/image";
import { Target, Users, Lightbulb, Award, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Reign of Vision - a passionate team of developers, designers, and digital strategists dedicated to building exceptional web experiences that drive business results.",
  openGraph: {
    title: "About Reign of Vision - Our Story & Team",
    description: "Meet the talented team behind Reign of Vision and discover our mission to transform businesses through innovative digital solutions.",
    url: "https://reignofvision.com/about",
  }
};

export default function AboutPage() {
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
              <Sparkles className="w-5 h-5 text-brand-orange mr-3 drop-shadow-lg" />
              <span className="text-sm font-semibold text-brand-white drop-shadow-lg">
                About Our Journey
              </span>
            </div>

            {/* Enhanced hero title */}
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-brand-white drop-shadow-2xl">Building Digital Experiences That </span>
                <span className="bg-gradient-to-r from-brand-violet via-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">Matter</span>
              </h1>
              
              {/* 3D text shadow effect */}
              <div className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-bold text-brand-violet/10 blur-xl transform translate-x-4 translate-y-4 -z-10">
                Building Digital Experiences That Matter
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-brand-white/80 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              We're a passionate team of developers, designers, and digital strategists 
              dedicated to creating exceptional web experiences that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Story Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-16 w-28 h-28 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-full animate-float blur-lg opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-brand-violet/10 to-brand-orange/15 rounded-2xl rotate-12 animate-float animation-delay-3000 blur-xl opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-8">
                  <span className="drop-shadow-xl">Our </span>
                  <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl">Story</span>
                </h2>
                
                <div className="space-y-6 text-brand-white/80 leading-relaxed text-lg">
                  <p className="drop-shadow-sm">
                    Reign of Vision was founded in 2021 with a simple mission: to help businesses 
                    thrive in the digital age through exceptional web development and design. 
                    We believe that great digital experiences shouldn't be a luxury reserved 
                    for large corporations.
                  </p>
                  <p className="drop-shadow-sm">
                    Starting as a small team of passionate developers, we've grown into a 
                    full-service digital agency that has helped over 100+ businesses transform 
                    their online presence and achieve their goals.
                  </p>
                  <p className="drop-shadow-sm">
                    Today, we continue to push the boundaries of what's possible on the web, 
                    combining cutting-edge technology with thoughtful design to create 
                    solutions that not only look great but deliver measurable results.
                  </p>
                </div>

                {/* Enhanced stats */}
                <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-brand-white/10">
                  <div className="text-center group">
                    <div className="text-3xl font-bold bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl mb-2">100+</div>
                    <div className="text-sm text-brand-white/60 drop-shadow-sm">Projects Completed</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-xl mb-2">3+</div>
                    <div className="text-sm text-brand-white/60 drop-shadow-sm">Years Experience</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl mb-2">98%</div>
                    <div className="text-sm text-brand-white/60 drop-shadow-sm">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Enhanced visual element */}
              <div className="relative group perspective-1000">
                <div className="relative transform-gpu transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-3">
                  {/* Background glow */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-brand-violet/30 via-brand-orange/20 to-brand-violet/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Shadow layer */}
                  <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-6 translate-y-6 blur-lg"></div>
                  
                  {/* Main container */}
                  <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-brand-dark via-slate-800 to-brand-dark border border-brand-white/10 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 via-transparent to-brand-orange/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl md:text-9xl transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">🚀</div>
                    </div>
                    
                    {/* Overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-brand-orange/20 to-brand-violet/20 rounded-full blur-lg"></div>
                    <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-brand-violet/20 to-brand-orange/20 rounded-full blur-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-brand-violet/10 to-brand-orange/10 rounded-3xl rotate-45 animate-float blur-xl opacity-30"></div>
          <div className="absolute bottom-20 right-16 w-24 h-24 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-2xl animate-float animation-delay-2000 blur-lg opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                <span className="drop-shadow-xl">Our </span>
                <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl">Values</span>
              </h2>
              <p className="text-lg text-brand-white/80 max-w-2xl mx-auto drop-shadow-lg">
                The principles that guide everything we do
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Results-Driven",
                  description: "We focus on delivering measurable outcomes that drive your business forward."
                },
                {
                  icon: Users,
                  title: "Client-Centric",
                  description: "Your success is our success. We work as an extension of your team."
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "We stay ahead of the curve with the latest technologies and best practices."
                },
                {
                  icon: Award,
                  title: "Quality",
                  description: "We never compromise on quality and attention to detail in our work."
                }
              ].map((value, index) => (
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
                    {/* Enhanced icon */}
                    <div className="relative mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-violet/25 to-brand-orange/15 rounded-2xl group-hover:from-brand-violet/35 group-hover:to-brand-orange/25 transition-all duration-300 shadow-xl shadow-brand-violet/20 group-hover:shadow-brand-violet/40 group-hover:scale-110 transform-gpu">
                        <value.icon className="h-10 w-10 text-brand-violet group-hover:text-brand-white transition-colors duration-300 drop-shadow-lg" />
                      </div>
                      
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 w-20 h-20 bg-brand-violet/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 mx-auto"></div>
                      
                      {/* 3D icon shadow */}
                      <div className="absolute inset-0 w-20 h-20 bg-brand-dark/60 rounded-2xl transform translate-x-2 translate-y-2 blur-md -z-10 mx-auto"></div>
                    </div>

                    <h3 className="text-xl font-bold text-brand-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-violet group-hover:to-brand-orange group-hover:bg-clip-text transition-all duration-300 drop-shadow-lg">
                      {value.title}
                    </h3>
                    
                    <p className="text-brand-white/70 leading-relaxed group-hover:text-brand-white/90 transition-colors duration-300 drop-shadow-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 bg-gradient-to-br from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-brand-violet/10">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-3xl blur-2xl"></div>
              <div className="absolute inset-0 bg-gradient-conic from-brand-violet/5 via-transparent via-brand-orange/5 to-brand-violet/5 rounded-3xl animate-spin-slow opacity-40"></div>
              
              {/* 3D depth shadow */}
              <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-6 translate-y-6 blur-xl -z-10"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6 drop-shadow-xl">
                  Ready to Work <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">Together?</span>
                </h2>
                
                <p className="text-xl text-brand-white/80 mb-10 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
                  Let's discuss your project and see how we can help you achieve your goals.
                </p>
                
                <a
                  href="/contact"
                  className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-orange text-brand-white font-semibold rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-violet/50 transform-gpu shadow-xl shadow-brand-violet/30 border border-brand-violet/20"
                >
                  <span className="drop-shadow-lg">Get In Touch</span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg" />
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-brand-violet/30 rounded-xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
