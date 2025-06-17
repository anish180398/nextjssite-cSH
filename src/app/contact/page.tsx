import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ui/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with CodeStreetHive for your next digital project. We're here to help bring your vision to life with expert web development and design services.",
  openGraph: {
    title: "Contact CodeStreetHive - Let's Build Something Amazing",
    description: "Ready to start your next digital project? Contact our team of experts for web development, design, and digital strategy services.",
    url: "https://codestreethive.com/contact",
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Ready to transform your digital presence? We're here to help you 
              every step of the way. Get in touch and let's discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get in touch
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Have a project in mind? We'd love to hear about it. Send us a message 
                  and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email us
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Send us an email and we'll respond within 24 hours.
                    </p>
                    <a
                      href="mailto:hello@codestreethive.com"
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      hello@codestreethive.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Call us
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Prefer to talk? Give us a call during business hours.
                    </p>
                    <a
                      href="tel:+1234567890"
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Visit us
                    </h3>
                    <p className="text-gray-600 mb-2">
                      We're based in the heart of San Francisco.
                    </p>
                    <address className="text-gray-700 not-italic">
                      San Francisco, CA<br />
                      United States
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Business hours
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions about our services and process.
              </p>
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
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 