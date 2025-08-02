"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import ContactPopup from "@/components/ui/contact-popup";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    setIsContactPopupOpen(true);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform-gpu ${
          isScrolled
            ? "bg-gradient-to-r from-brand-dark/95 via-slate-900/90 to-brand-dark/95 backdrop-blur-xl shadow-2xl shadow-brand-violet/10 border-b border-gradient-to-r border-brand-violet/20"
            : "bg-transparent"
        }`}
      >
        {/* Enhanced background effects for scrolled state */}
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/5 via-transparent to-brand-orange/5 backdrop-blur-xl"></div>
        )}
        
        <nav className="relative z-10 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Enhanced Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="group flex items-center gap-3 text-2xl font-bold transition-all duration-300 hover:scale-105 transform-gpu"
              >
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-violet/20 to-brand-orange/10 rounded-2xl flex items-center justify-center group-hover:from-brand-violet/30 group-hover:to-brand-orange/20 transition-all duration-300 shadow-lg shadow-brand-violet/20 group-hover:shadow-brand-violet/40">
                    <Image
                      src={Logo}
                      alt="Reign of Vision"
                      width={32}
                      height={32}
                      className="drop-shadow-lg"
                    />
                  </div>
                  
                  {/* Logo glow effect */}
                  <div className="absolute inset-0 w-14 h-14 bg-brand-violet/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  
                  {/* 3D shadow */}
                  <div className="absolute inset-0 w-14 h-14 bg-brand-dark/40 rounded-2xl transform translate-x-2 translate-y-2 blur-md -z-10"></div>
                </div>
                
                <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-white via-brand-white to-brand-violet bg-clip-text text-transparent group-hover:from-brand-violet group-hover:to-brand-orange transition-all duration-300 drop-shadow-xl">
                  Reign of Vision
                </h1>
              </Link>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-brand-dark/60 to-brand-dark/40 backdrop-blur-xl rounded-2xl border border-brand-white/10 px-6 py-3 shadow-xl shadow-brand-dark/30">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl group transform-gpu hover:scale-105 ${
                      pathname === item.href
                        ? "text-brand-white bg-gradient-to-r from-brand-violet/30 to-brand-orange/20 shadow-lg shadow-brand-violet/30"
                        : "text-brand-white/80 hover:text-brand-white hover:bg-gradient-to-r hover:from-brand-white/10 hover:to-brand-white/5"
                    }`}
                  >
                    <span className="relative z-10 drop-shadow-lg">{item.name}</span>
                    
                    {/* Active indicator */}
                    {pathname === item.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 rounded-xl blur-sm opacity-60"></div>
                    )}
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-brand-white/10 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Enhanced Theme Toggle & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-r from-brand-dark/60 to-brand-dark/40 backdrop-blur-xl rounded-xl border border-brand-white/10 shadow-lg shadow-brand-dark/20">
                <ThemeToggle />
              </div>
              
              <Button
                onClick={handleContactClick}
                className="group bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-orange text-brand-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-violet/50 transform-gpu shadow-xl shadow-brand-violet/30 border border-brand-violet/20"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 group-hover:animate-spin transition-transform duration-300" />
                  <span className="drop-shadow-lg">Get Started</span>
                </div>
                
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-brand-violet/30 rounded-xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300"></div>
              </Button>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-brand-dark/60 to-brand-dark/40 backdrop-blur-xl rounded-xl border border-brand-white/10 shadow-lg shadow-brand-dark/20">
                <ThemeToggle />
              </div>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group p-3 bg-gradient-to-r from-brand-dark/80 to-brand-dark/60 backdrop-blur-xl rounded-xl border border-brand-white/20 text-brand-white hover:border-brand-violet/40 hover:bg-gradient-to-r hover:from-brand-violet/20 hover:to-brand-orange/10 transition-all duration-300 shadow-lg shadow-brand-dark/30 hover:shadow-brand-violet/30 transform hover:scale-110 transform-gpu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative">
                  {isOpen ? (
                    <X className="block h-6 w-6 drop-shadow-lg group-hover:rotate-90 transition-transform duration-300" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  )}
                  
                  {/* Icon glow effect */}
                  <div className="absolute inset-0 w-6 h-6 bg-brand-violet/30 rounded blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 transform-gpu animate-in slide-in-from-top duration-300">
              <div className="relative bg-gradient-to-br from-brand-dark/95 via-slate-800/90 to-brand-dark/95 backdrop-blur-xl border border-brand-white/10 rounded-2xl shadow-2xl shadow-brand-violet/20 overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-orange/5"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-radial from-brand-violet/10 to-transparent blur-2xl"></div>
                
                <div className="relative z-10 px-6 py-6 space-y-2">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group block px-4 py-3 text-base font-semibold transition-all duration-300 rounded-xl transform-gpu hover:scale-105 ${
                        pathname === item.href
                          ? "text-brand-white bg-gradient-to-r from-brand-violet/30 to-brand-orange/20 shadow-lg shadow-brand-violet/30"
                          : "text-brand-white/80 hover:text-brand-white hover:bg-gradient-to-r hover:from-brand-white/10 hover:to-brand-white/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      <div className="relative">
                        <span className="drop-shadow-lg">{item.name}</span>
                        
                        {/* Active indicator */}
                        {pathname === item.href && (
                          <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/20 to-brand-orange/10 rounded-xl blur-sm opacity-60"></div>
                        )}
                        
                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-brand-white/10 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                      </div>
                    </Link>
                  ))}
                  
                  <div className="pt-4 border-t border-brand-white/10">
                    <Button
                      onClick={handleContactClick}
                      className="group w-full bg-gradient-to-r from-brand-violet via-brand-violet to-brand-violet/90 hover:from-brand-violet/90 hover:to-brand-orange text-brand-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-violet/40 shadow-lg shadow-brand-violet/30 transform-gpu"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5 group-hover:animate-spin transition-transform duration-300" />
                        <span className="drop-shadow-lg">Get Started</span>
                      </div>
                      
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-brand-violet/30 rounded-xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300"></div>
                    </Button>
                  </div>
                </div>
                
                {/* 3D depth shadow */}
                <div className="absolute inset-0 bg-brand-dark/40 rounded-2xl transform translate-x-2 translate-y-2 blur-lg -z-10"></div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
      />
    </>
  );
}
