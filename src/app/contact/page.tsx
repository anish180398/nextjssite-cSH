import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Sparkles, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ui/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Reign of Vision for your next digital project. We're here to help bring your vision to life with expert web development and design services.",
  openGraph: {
    title: "Contact Reign of Vision - Let's Build Something Amazing",
    description: "Ready to start your next digital project? Contact our team of experts for web development, design, and digital strategy services.",
    url: "https://reignofvision.com/contact",
  }
};

export default function ContactPage() {
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
              <MessageCircle className="w-5 h-5 text-brand-orange mr-3 drop-shadow-lg" />
              <span className="text-sm font-semibold text-brand-white drop-shadow-lg">
                Get In Touch
              </span>
            </div>

            {/* Enhanced hero title */}
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-brand-white drop-shadow-2xl">Let's Build Something </span>
                <span className="bg-gradient-to-r from-brand-violet via-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">Amazing</span>
                <span className="text-brand-white drop-shadow-2xl"> Together</span>
              </h1>
              
              {/* 3D text shadow effect */}
              <div className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-bold text-brand-violet/10 blur-xl transform translate-x-4 translate-y-4 -z-10">
                Let's Build Something Amazing Together
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-brand-white/80 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Ready to transform your digital presence? We're here to help you 
              every step of the way. Get in touch and let's discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form & Info Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-16 w-28 h-28 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-full animate-float blur-lg opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-brand-violet/10 to-brand-orange/15 rounded-2xl rotate-12 animate-float animation-delay-3000 blur-xl opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <div className="relative">
              <div className="relative p-8 bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 border border-brand-white/10 backdrop-blur-sm rounded-3xl shadow-2xl shadow-brand-violet/10">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-orange/5 rounded-3xl"></div>
                <div className="absolute inset-0 bg-brand-dark/40 rounded-3xl transform translate-x-4 translate-y-4 blur-lg -z-10"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-brand-white mb-8 drop-shadow-lg">
                    Send us a <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent">message</span>
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-brand-white mb-6 drop-shadow-lg">
                  Get in <span className="bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent">touch</span>
                </h2>
                <p className="text-brand-white/80 text-lg leading-relaxed mb-8 drop-shadow-sm">
                  Have a project in mind? We'd love to hear about it. Send us a message 
                  and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Enhanced Contact Details */}
              <div className="space-y-8">
                {[
                  {
                    icon: Mail,
                    title: "Email us",
                    description: "Send us an email and we'll respond within 24 hours.",
                    contact: "hello@reignofvision.com",
                    href: "mailto:hello@reignofvision.com"
                  },
                  {
                    icon: Phone,
                    title: "Call us",
                    description: "Prefer to talk? Give us a call during business hours.",
                    contact: "+91 9514015234",
                    href: "tel:+919514015234"
                  },
                  {
                    icon: MapPin,
                    title: "Visit us",
                    description: "We're based in the heart of India.",
                    contact: "Chennai, India",
                    href: null
                  },
                  {
                    icon: Clock,
                    title: "Business hours",
                    description: null,
                    contact: "Monday - Friday: 9:00 AM - 6:00 PM IST",
                    href: null
                  }
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="relative p-6 bg-gradient-to-br from-brand-dark/80 via-slate-800/50 to-brand-dark/80 border border-brand-white/10 backdrop-blur-sm rounded-2xl shadow-lg shadow-brand-dark/30 hover:shadow-brand-violet/20 transition-all duration-300 hover:-translate-y-1 transform-gpu">
                      {/* Background effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      <div className="absolute inset-0 bg-brand-dark/40 rounded-2xl transform translate-x-2 translate-y-2 blur-lg -z-10 opacity-60"></div>
                      
                      <div className="relative z-10 flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-brand-violet/25 to-brand-orange/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-violet/20 group-hover:shadow-brand-violet/40">
                            <item.icon className="h-7 w-7 text-brand-violet group-hover:text-brand-white transition-colors duration-300 drop-shadow-lg" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-brand-white mb-2 drop-shadow-lg">
                            {item.title}
                          </h3>
                          {item.description && (
                            <p className="text-brand-white/70 mb-3 drop-shadow-sm leading-relaxed">
                              {item.description}
                            </p>
                          )}
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-brand-violet hover:text-brand-orange font-semibold transition-colors duration-300 drop-shadow-lg hover:drop-shadow-xl"
                            >
                              {item.contact}
                            </a>
                          ) : item.title === "Business hours" ? (
                            <div className="text-brand-white/80 space-y-1 drop-shadow-sm">
                              <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                              <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                              <p>Sunday: Closed</p>
                            </div>
                          ) : (
                            <div className="text-brand-white/80 drop-shadow-sm">
                              {item.contact}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/5 via-transparent to-brand-orange/5"></div>
          <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-brand-violet/10 to-brand-orange/10 rounded-3xl rotate-45 animate-float blur-xl opacity-30"></div>
          <div className="absolute bottom-20 right-16 w-24 h-24 bg-gradient-to-br from-brand-orange/15 to-brand-violet/10 rounded-2xl animate-float animation-delay-2000 blur-lg opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                <span className="drop-shadow-xl">Frequently Asked </span>
                <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl">Questions</span>
              </h2>
              <p className="text-lg text-brand-white/80 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
                Quick answers to common questions about our services and process.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full mx-auto mt-6"></div>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while more complex applications can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation."
                },
                {
                  question: "Do you work with clients remotely?",
                  answer: "Absolutely! We work with clients worldwide and have perfected our remote collaboration process. We use modern tools and maintain regular communication to ensure your project stays on track."
                },
                {
                  question: "What's your typical process for new projects?",
                  answer: "We start with a discovery call to understand your needs, followed by a detailed proposal. Once approved, we move through design, development, testing, and launch phases with regular check-ins throughout."
                },
                {
                  question: "Do you provide ongoing support after launch?",
                  answer: "Yes! We offer various support and maintenance packages to keep your website secure, updated, and performing optimally. We're here to help you succeed long-term."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative p-8 bg-gradient-to-br from-brand-dark/90 via-slate-800/50 to-brand-dark/90 border border-brand-white/10 backdrop-blur-sm rounded-2xl shadow-lg shadow-brand-dark/30 hover:shadow-brand-violet/20 transition-all duration-300 hover:-translate-y-1 transform-gpu">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-brand-dark/40 rounded-2xl transform translate-x-3 translate-y-3 blur-lg -z-10 opacity-60"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-brand-white mb-4 drop-shadow-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-violet group-hover:to-brand-orange group-hover:bg-clip-text transition-all duration-300">
                        {faq.question}
                      </h3>
                      <p className="text-brand-white/80 leading-relaxed drop-shadow-sm group-hover:text-brand-white/95 transition-colors duration-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
