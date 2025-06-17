"use client";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

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
      href: "https://twitter.com/codestreethive",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/codestreethive",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/codestreethive",
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
    <footer className="bg-brand-dark text-brand-white border-t border-brand-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-brand-yellow flex items-center justify-center">
                <span className="text-brand-dark font-bold text-sm">CSH</span>
              </div>
              <span className="text-xl font-bold text-brand-white">CodeStreetHive</span>
            </div>
            <p className="text-brand-white/70 text-sm leading-relaxed">
              We craft exceptional digital experiences that drive business growth.
              From web development to digital strategy, we're your technology partner.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-brand-white/70">
                <Mail className="h-4 w-4 text-brand-yellow" />
                <a
                  href="mailto:hello@codestreethive.com"
                  className="hover:text-brand-yellow transition-colors"
                >
                  hello@codestreethive.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-brand-white/70">
                <Phone className="h-4 w-4 text-brand-yellow" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-brand-yellow transition-colors"
                >
                  +91 9514015234
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-brand-white/70">
                <MapPin className="h-4 w-4 text-brand-yellow" />
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-brand-yellow uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-brand-white/70 hover:text-brand-yellow transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-brand-yellow uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-2">
                {footerNavigation.support && footerNavigation?.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-brand-white/70 hover:text-brand-yellow transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-brand-yellow uppercase tracking-wider mb-4">
                Stay Updated
              </h3>
              <p className="text-sm text-brand-white/70 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-brand-dark border border-brand-white/20 rounded-md text-brand-white placeholder-brand-white/50 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-brand-yellow text-brand-dark font-semibold rounded-md hover:bg-brand-yellow/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-brand-dark disabled:opacity-50"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-brand-yellow uppercase tracking-wider mb-4">
                Follow Us
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
                      className="text-brand-white/70 hover:text-brand-yellow transition-colors"
                      aria-label={`Follow us on ${item.name}`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-brand-white/70">
              © {new Date().getFullYear()} CodeStreetHive. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-brand-white/70 hover:text-brand-yellow transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-brand-white/70 hover:text-brand-yellow transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 