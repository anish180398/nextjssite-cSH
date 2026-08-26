"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ExternalLink, Check, Code, Palette, Smartphone, Globe, Phone, FileText, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getAllPortfolioItems, PortfolioItem } from "@/lib/contentful";
import { duration, easing, revealUp, staggerContainer } from "@/lib/motion";

const specializations = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications with cutting-edge technologies.",
    icon: Code,
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that deliver exceptional user experiences.",
    icon: Palette,
    technologies: ["Figma", "Adobe XD", "Webflow", "Framer"],
  },
  {
    title: "Mobile Development",
    description: "Developing native and cross-platform mobile apps for iOS and Android.",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    title: "Digital Marketing",
    description: "Driving growth through data-driven digital marketing strategies.",
    icon: Globe,
    technologies: ["SEO", "Analytics", "Social Media", "PPC"],
  },
];

const whyUs = [
  {
    title: "Real expertise",
    description:
      "Every engineer and designer on your project has shipped production work in the stack you're using — not just studied it.",
  },
  {
    title: "A proven process",
    description:
      "Discover, design, build, launch. The same four-step process on every project, so you always know what's next.",
  },
  {
    title: "Direct communication",
    description:
      "One point of contact and weekly updates — no relay races through account managers to get an answer.",
  },
  {
    title: "Transparent pricing",
    description: "Fixed-scope quotes with no surprise change orders. You know the number before we start.",
  },
];

const gettingStarted = [
  {
    icon: Phone,
    title: "Book an intro call",
    description:
      "Tell us about your goals, timeline, and budget. We'll figure out together whether we're the right fit.",
  },
  {
    icon: FileText,
    title: "Get a clear proposal",
    description:
      "Within days, you'll have a scope, timeline, and fixed quote — no surprises buried in fine print.",
  },
  {
    icon: Rocket,
    title: "Kick off and track progress",
    description: "Once you sign off, we start. Weekly check-ins keep you in the loop from first commit to launch.",
  },
];

export function PortfolioShowcase() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      const items = await getAllPortfolioItems();
      setPortfolioItems(items);
    };
    fetchPortfolioItems();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (portfolioItems.length < 2) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [portfolioItems.length]);

  const currentItem = portfolioItems[currentIndex];

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealUp}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
            Specialized in <span className="text-primary">new and next</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We stay at the forefront of technology, delivering innovative solutions that push boundaries
            and set new standards in digital excellence.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1)}
          className="mb-24 divide-y divide-border border-t border-border"
        >
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                variants={revealUp}
                className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center"
              >
                <span className="font-display shrink-0 text-2xl font-semibold text-muted-foreground/40 sm:w-14">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{spec.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{spec.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:max-w-xs sm:justify-end">
                  {spec.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {currentItem && (
          <div className="mb-20">
            <div className="mb-10 flex items-end justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                Featured <span className="text-primary">Projects</span>
              </h3>
              <span className="font-mono text-sm text-muted-foreground">
                {String(currentIndex + 1).padStart(2, "0")} / {String(portfolioItems.length).padStart(2, "0")}
              </span>
            </div>

            <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border lg:grid-cols-12">
              <div className="relative aspect-video overflow-hidden lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentItem.sys.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: duration.base, ease: easing.out }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={`https:${currentItem.fields.coverImage.fields.file.url}`}
                      alt={currentItem.fields.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-col justify-between border-t border-border p-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentItem.sys.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: duration.base, ease: easing.out }}
                  >
                    <div className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
                      {currentItem.fields.tags.join(" · ")}
                    </div>
                    <Link
                      href={`/portfolio/${currentItem.fields.slug}`}
                      className="group/link mb-4 inline-flex items-start gap-2"
                    >
                      <h4 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                        {currentItem.fields.title}
                      </h4>
                      <ExternalLink className="mt-2 h-4 w-4 shrink-0 text-foreground transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                    <p className="leading-relaxed text-muted-foreground">{currentItem.fields.excerpt}</p>
                  </motion.div>
                </AnimatePresence>

                {portfolioItems.length > 1 && (
                  <div className="mt-10 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {portfolioItems.map((item, index) => (
                        <button
                          key={item.sys.id}
                          onClick={() => setCurrentIndex(index)}
                          aria-label={`Go to project ${index + 1}`}
                          className="flex h-6 w-6 items-center justify-center"
                        >
                          <span
                            className={`h-2 rounded-full transition-all ${
                              index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevSlide}
                        aria-label="Previous project"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/40"
                      >
                        <ArrowLeft className="h-4 w-4 text-foreground" />
                      </button>
                      <button
                        onClick={nextSlide}
                        aria-label="Next project"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/40"
                      >
                        <ArrowRight className="h-4 w-4 text-foreground" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1)}
          className="mb-20"
        >
          <motion.h2
            variants={revealUp}
            className="font-display mb-12 max-w-2xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
          >
            Why teams choose to work with <span className="text-primary">us</span>
          </motion.h2>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {whyUs.map((item) => (
              <motion.div key={item.title} variants={revealUp} className="flex gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary">
                  <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="rounded-3xl border border-border bg-card p-12 text-center">
          <h3 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
            Ready to build something <span className="text-primary">amazing?</span>
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Let&apos;s discuss your project and explore how we can bring your vision to life with
            cutting-edge technology and innovative design.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1)}
          className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12"
        >
          <motion.div variants={revealUp} className="lg:col-span-4">
            <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              How we <span className="text-primary">get started</span>
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
              No lengthy procurement process — just a conversation, a clear quote, and a kickoff date.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Book a Call</Link>
            </Button>
          </motion.div>

          <div className="relative lg:col-span-8">
            <div className="absolute left-6 top-2 bottom-2 hidden border-l border-dashed border-border sm:block" />
            <div className="space-y-10">
              {gettingStarted.map((step, index) => (
                <motion.div key={step.title} variants={revealUp} className="relative flex gap-6">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      Step {index + 1}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

