"use client";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import { duration, easing, revealUp } from "@/lib/motion";

const footerNavigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ],
  explore: [
    { name: "Technologies", href: "/technologies" },
    { name: "Industries", href: "/industries" },
    { name: "Operated Countries", href: "/countries" },
    { name: "Projects", href: "/projects" },
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
      href: "https://twitter.com/kryttr",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/kryttr",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/kryttr",
      icon: Linkedin,
    },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Subscription failed");

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={revealUp}
          className="grid grid-cols-1 lg:grid-cols-4 gap-12"
        >
          {/* Company info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                <Image src={Logo} alt="Kryttr" width={22} height={22} />
              </span>
              <span className="font-display text-lg font-semibold text-foreground">Kryttr</span>
            </div>

            <p className="max-w-md text-muted-foreground leading-relaxed">
              We craft exceptional digital experiences that drive business growth.
              From web development to digital strategy, we&apos;re your technology partner.
            </p>

            <div className="space-y-1">
              <a
                href="mailto:anish@kryttr.com"
                className="flex items-center gap-3 rounded-lg px-2 py-2 -mx-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                <Mail className="h-4 w-4 text-primary" />
                anish@kryttr.com
              </a>
              <a
                href="tel:+919514015234"
                className="flex items-center gap-3 rounded-lg px-2 py-2 -mx-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                <Phone className="h-4 w-4 text-primary" />
                +91 9514015234
              </a>
              <div className="flex items-center gap-3 px-2 py-2 -mx-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Chennai, India
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-1 lg:grid-cols-1">
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">Company</h3>
              <ul className="space-y-2.5">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">Explore</h3>
              <ul className="space-y-2.5">
                {footerNavigation.explore.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">Support</h3>
              <ul className="space-y-2.5">
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter + social */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">Stay updated</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Subscribe for the latest updates and insights.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="mt-4 space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-ring"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    "Subscribing..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Subscribe
                    </>
                  )}
                </button>
                {status === "success" && (
                  <p className="text-xs text-primary">Subscribed — check your inbox.</p>
                )}
                {status === "error" && (
                  <p className="text-xs text-destructive">Something went wrong, try again.</p>
                )}
              </form>
            </div>

            <div className="flex gap-3">
              {footerNavigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${item.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 overflow-hidden">
          <span
            aria-hidden="true"
            className="font-display block select-none whitespace-nowrap text-[18vw] font-semibold leading-none text-foreground/5"
          >
            KRYTTR
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: duration.slow, ease: easing.out }}
          className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row"
        >
          <p>© {new Date().getFullYear()} Kryttr. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

