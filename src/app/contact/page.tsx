import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ui/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbList, faqPage } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Kryttr for your next digital project. We're here to help bring your vision to life with expert web development and design services.",
  alternates: {
    canonical: "https://kryttr.com/contact",
  },
  openGraph: {
    title: "Contact Kryttr - Let's Build Something Amazing",
    description: "Ready to start your next digital project? Contact our team of experts for web development, design, and digital strategy services.",
    url: "https://kryttr.com/contact",
  }
};

const contactDetails = [
  {
    icon: Mail,
    title: "Email us",
    description: "Send us an email and we'll respond within 24 hours.",
    contact: "anish@kryttr.com",
    href: "mailto:anish@kryttr.com",
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Prefer to talk? Give us a call during business hours.",
    contact: "+91 9514015234",
    href: "tel:+919514015234",
  },
  {
    icon: MapPin,
    title: "Visit us",
    description: "We're based in the heart of India.",
    contact: "Chennai, India",
    href: null,
  },
  {
    icon: Clock,
    title: "Business hours",
    description: null,
    contact: "Monday - Friday: 9:00 AM - 6:00 PM IST",
    href: null,
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while more complex applications can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with clients remotely?",
    answer: "Absolutely! We work with clients worldwide and have perfected our remote collaboration process. We use modern tools and maintain regular communication to ensure your project stays on track.",
  },
  {
    question: "What's your typical process for new projects?",
    answer: "We start with a discovery call to understand your needs, followed by a detailed proposal. Once approved, we move through design, development, testing, and launch phases with regular check-ins throughout.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! We offer various support and maintenance packages to keep your website secure, updated, and performing optimally. We're here to help you succeed long-term.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <JsonLd data={breadcrumbList([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <JsonLd data={faqPage(faqs)} />
      {/* Hero */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="lg:col-span-8">
            <span className="mb-6 inline-flex items-center rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Get In Touch
            </span>
            <h1 className="font-display mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s build something <span className="text-primary">amazing</span> together
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Ready to transform your digital presence? We&apos;re here to help you every step of the way.
              Get in touch and let&apos;s discuss your project.
            </p>
          </div>
          <div className="flex flex-col justify-end border-t border-border pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="font-display text-5xl font-semibold text-primary">24hr</div>
            <div className="mt-2 text-muted-foreground">Average response time on new inquiries.</div>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8">
              <h2 className="font-display mb-8 text-2xl font-semibold text-foreground">
                Send us a <span className="text-primary">message</span>
              </h2>
              <ContactForm />
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="font-display mb-4 text-2xl font-semibold text-foreground">
                  Get in <span className="text-primary">touch</span>
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll
                  get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactDetails.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                      {item.description && (
                        <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      )}
                      {item.href ? (
                        <a href={item.href} className="font-medium text-primary">
                          {item.contact}
                        </a>
                      ) : item.title === "Business hours" ? (
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                          <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                          <p>Sunday: Closed</p>
                        </div>
                      ) : (
                        <div className="text-muted-foreground">{item.contact}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <h2 className="font-display mb-4 text-2xl font-semibold text-foreground sm:text-3xl">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-border bg-card p-8">
                <h3 className="mb-3 text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
