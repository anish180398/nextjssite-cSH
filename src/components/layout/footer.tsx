"use client";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const footerNavigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Sitemap", href: "/sitemap.xml" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/reignofvision",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/reignofvision",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/reignofvision",
      icon: Linkedin,
    },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate newsletter subscription
    setTimeout(() => {
      setEmail("");
      setIsSubmitting(false);
      // You can add actual newsletter subscription logic here
    }, 1000);
  };

  return (
    <footer className="relative bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark text-brand-white border-t border-brand-violet/20 overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-brand-violet/15 to-brand-orange/10 rounded-3xl rotate-12 animate-float blur-sm opacity-60"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-brand-orange/20 to-brand-violet/10 rounded-2xl rotate-45 animate-float animation-delay-2000 blur-sm opacity-50"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-brand-violet/10 to-brand-orange/15 rounded-full animate-float animation-delay-4000 blur-lg opacity-40"></div>
        
        {/* 3D Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-3"></div>
        
        {/* Dynamic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-conic from-brand-violet/5 via-transparent via-brand-orange/5 to-brand-violet/5 animate-spin-slow"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-brand-violet/8 via-brand-violet/3 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-brand-orange/8 via-brand-orange/3 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative group">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-violet/25 to-brand-orange/15 rounded-2xl flex items-center justify-center group-hover:from-brand-violet/35 group-hover:to-brand-orange/25 transition-all duration-300 shadow-xl shadow-brand-violet/20 group-hover:shadow-brand-violet/40">
                    <Image src={Logo} alt="Reign of Vision" width={40} height={40} className="drop-shadow-lg" />
                  </div>
                  
                  {/* Logo glow effect */}
                  <div className="absolute inset-0 w-16 h-16 bg-brand-violet/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  
                  {/* 3D shadow */}
                  <div className="absolute inset-0 w-16 h-16 bg-brand-dark/40 rounded-2xl transform translate-x-2 translate-y-2 blur-md -z-10"></div>
                </div>
                
                <span className="text-2xl font-bold bg-gradient-to-r from-brand-white via-brand-white to-brand-violet bg-clip-text text-transparent drop-shadow-xl">
                  Reign of Vision
                </span>
              </div>
              
              <p className="text-brand-white/80 text-lg leading-relaxed mb-8 drop-shadow-lg max-w-md">
                We craft exceptional digital experiences that drive business growth.
                From web development to digital strategy, we're your technology partner.
              </p>
            </div>

            {/* Enhanced Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-brand-white mb-4 drop-shadow-lg">
                Get in <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">Touch</span>
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:hello@reignofvision.com"
                  className="group flex items-center space-x-3 text-brand-white/80 hover:text-brand-white transition-all duration-300 p-3 rounded-xl hover:bg-gradient-to-r hover:from-brand-white/5 hover:to-brand-white/10 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-violet/20 to-brand-orange/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-violet/20">
                    <Mail className="h-5 w-5 text-brand-violet drop-shadow-lg" />
                  </div>
                  <span className="drop-shadow-sm">hello@reignofvision.com</span>
                </a>
                
                <a
                  href="tel:+919514015234"
                  className="group flex items-center space-x-3 text-brand-white/80 hover:text-brand-white transition-all duration-300 p-3 rounded-xl hover:bg-gradient-to-r hover:from-brand-white/5 hover:to-brand-white/10 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-orange/20 to-brand-violet/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-orange/20">
                    <Phone className="h-5 w-5 text-brand-orange drop-shadow-lg" />
                  </div>
                  <span className="drop-shadow-sm">+91 9514015234</span>
                </a>
                
                <div className="group flex items-center space-x-3 text-brand-white/80 p-3 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-violet/20 to-brand-orange/10 rounded-xl flex items-center justify-center shadow-lg shadow-brand-violet/20">
                    <MapPin className="h-5 w-5 text-brand-violet drop-shadow-lg" />
                  </div>
                  <span className="drop-shadow-sm">India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-brand-white mb-6 drop-shadow-lg">
                <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">Company</span>
              </h3>
              <ul className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group text-brand-white/70 hover:text-brand-white transition-all duration-300 block p-2 rounded-lg hover:bg-gradient-to-r hover:from-brand-white/5 hover:to-brand-white/10 backdrop-blur-sm transform hover:translate-x-2"
                    >
                      <span className="drop-shadow-sm">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-white mb-6 drop-shadow-lg">
                <span className="bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent">Support</span>
              </h3>
              <ul className="space-y-3">
                {footerNavigation.support && footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group text-brand-white/70 hover:text-brand-white transition-all duration-300 block p-2 rounded-lg hover:bg-gradient-to-r hover:from-brand-white/5 hover:to-brand-white/10 backdrop-blur-sm transform hover:translate-x-2"
                    >
                      <span className="drop-shadow-sm">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enhanced Newsletter & Social */}
          <div className="space-y-8">
            <div className="relative">
              <div className="p-6 bg-gradient-to-br from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 rounded-2xl backdrop-blur-xl shadow-xl shadow-brand-violet/10">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/5 via-transparent to-brand-orange/5 rounded-2xl blur-lg"></div>
                
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-brand-white mb-4 drop-shadow-lg flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-brand-violet" />
                    <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">Stay Updated</span>
                  </h3>
                  
                  <p className="text-brand-white/70 mb-6 drop-shadow-sm leading-relaxed">
                    Subscribe to our newsletter for the latest updates and insights.
                  </p>
                  
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-gradient-to-r from-brand-dark/80 to-brand-dark/60 border border-brand-white/20 rounded-xl text-brand-white placeholder-brand-white/50 focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-brand-violet backdrop-blur-sm shadow-lg shadow-brand-dark/30 transition-all duration-300"
                        required
                      />
                      
                      {/* Input glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 to-brand-orange/5 rounded-xl opacity-0 focus-within:opacity-50 transition-opacity duration-300 blur-lg pointer-events-none"></div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full px-6 py-3 bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-orange text-brand-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-violet/40 shadow-lg shadow-brand-violet/30 transform-gpu disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-brand-white/30 border-t-brand-white rounded-full animate-spin"></div>
                            <span className="drop-shadow-lg">Subscribing...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            <span className="drop-shadow-lg">Subscribe</span>
                          </>
                        )}
                      </div>
                      
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-brand-violet/30 rounded-xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300"></div>
                    </button>
                  </form>
                </div>
                
                {/* 3D depth shadow */}
                <div className="absolute inset-0 bg-brand-dark/40 rounded-2xl transform translate-x-3 translate-y-3 blur-lg -z-10"></div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-brand-white mb-6 drop-shadow-lg">
                <span className="bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent">Follow Us</span>
              </h3>
              <div className="flex space-x-4">
                {footerNavigation.social.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      aria-label={`Follow us on ${item.name}`}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-white/10 to-brand-white/5 border border-brand-white/20 rounded-xl flex items-center justify-center text-brand-white/70 hover:text-brand-white hover:bg-gradient-to-br hover:from-brand-violet/20 hover:to-brand-orange/10 hover:border-brand-violet/40 transition-all duration-300 hover:scale-110 transform-gpu shadow-lg shadow-brand-dark/30 backdrop-blur-sm">
                        <Icon className="h-6 w-6 drop-shadow-lg" />
                      </div>
                      
                      {/* Social icon glow effect */}
                      <div className="absolute inset-0 w-12 h-12 bg-brand-violet/20 rounded-xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300"></div>
                      
                      {/* 3D shadow */}
                      <div className="absolute inset-0 w-12 h-12 bg-brand-dark/40 rounded-xl transform translate-x-1 translate-y-1 blur-sm -z-10"></div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gradient-to-r border-brand-violet/20">
          <div className="relative p-6 bg-gradient-to-r from-brand-dark/60 via-slate-800/40 to-brand-dark/60 border border-brand-white/5 rounded-2xl backdrop-blur-sm shadow-lg shadow-brand-dark/20">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/3 via-transparent to-brand-orange/3 rounded-2xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-brand-white/70 drop-shadow-sm">
                © {new Date().getFullYear()} <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent font-semibold">Reign of Vision</span>. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6">
                <Link
                  href="/privacy"
                  className="text-brand-white/70 hover:text-brand-white transition-all duration-300 drop-shadow-sm hover:drop-shadow-lg transform hover:scale-105"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-brand-white/70 hover:text-brand-white transition-all duration-300 drop-shadow-sm hover:drop-shadow-lg transform hover:scale-105"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
