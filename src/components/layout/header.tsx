"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, LayoutGrid, Braces, Building2, Globe2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import ParticleButton from "@/components/kokonutui/particle-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import ContactPopup from "@/components/ui/contact-popup";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { duration, easing } from "@/lib/motion";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "All Services",
        href: "/services",
        description: "Everything we build",
        icon: LayoutGrid,
      },
      {
        name: "Technologies",
        href: "/technologies",
        description: "The stack we build with",
        icon: Braces,
      },
      {
        name: "Industries",
        href: "/industries",
        description: "Verticals we specialize in",
        icon: Building2,
      },
      {
        name: "Operated Countries",
        href: "/countries",
        description: "Where we work with clients",
        icon: Globe2,
      },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleContactClick = () => {
    setIsContactPopupOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-1 shrink-0">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: duration.fast }}
                className="flex h-16 w-16 items-center justify-center rounded-lg"
              >
                <Image src={Logo} alt="Kryttr" width={56} height={48} />
              </motion.span>
              <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                Kryttr
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1 rounded-full border border-border bg-card/60 px-1.5 py-1.5">
              {navigation.map((item) => {
                const active = item.children
                  ? item.children.some((child) => pathname.startsWith(child.href))
                  : pathname === item.href;

                if (item.children) {
                  return (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger asChild>
                        <button
                          className={cn(
                            "relative flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                            active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {active && (
                            <motion.span
                              layoutId="nav-active-pill"
                              className="absolute inset-0 rounded-full bg-primary"
                              transition={{ type: "spring", stiffness: 380, damping: 32 }}
                            />
                          )}
                          <span className="relative z-10">{item.name}</span>
                          <ChevronDown className="relative z-10 h-3.5 w-3.5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" sideOffset={12} className="w-72 rounded-2xl p-2">
                        {item.children.map((child) => (
                          <DropdownMenuItem key={child.name} asChild className="rounded-xl p-0">
                            <Link href={child.href} className="flex items-center gap-3 px-3 py-2.5">
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <child.icon className="h-4.5 w-4.5 text-primary" />
                              </span>
                              <span className="flex flex-col">
                                <span className="text-sm font-medium text-foreground">{child.name}</span>
                                <span className="text-xs text-muted-foreground">{child.description}</span>
                              </span>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                      active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <ParticleButton onClick={handleContactClick} size="sm">
                Get Started
              </ParticleButton>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen((v) => !v)}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: duration.base, ease: easing.out }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col gap-1 rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-3 mb-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                          pathname === item.href
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <div className="ml-4 flex flex-col gap-1 border-l border-border pl-3">
                          {item.children
                            .filter((child) => child.href !== item.href)
                            .map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                  "rounded-lg px-4 py-2 text-sm transition-colors",
                                  pathname === child.href
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                )}
                              >
                                {child.name}
                              </Link>
                            ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <ParticleButton onClick={handleContactClick} className="mt-2 w-full">
                    Get Started
                  </ParticleButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
      />
    </>
  );
}

