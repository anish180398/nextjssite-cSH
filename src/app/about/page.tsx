import { Metadata } from "next";
import Image from "next/image";
import { Target, Users, Lightbulb, Award } from "lucide-react";

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
    <div className="min-h-screen bg-brand-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-violet/10 py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
              Building Digital Experiences That <span className="text-brand-violet">Matter</span>
            </h1>
            <p className="text-xl text-brand-white/80 leading-relaxed">
              We're a passionate team of developers, designers, and digital strategists 
              dedicated to creating exceptional web experiences that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-white mb-6">
                  Our <span className="text-brand-violet">Story</span>
                </h2>
                <div className="space-y-4 text-brand-white/70 leading-relaxed">
                  <p>
                    Reign of Vision was founded in 2021 with a simple mission: to help businesses 
                    thrive in the digital age through exceptional web development and design. 
                    We believe that great digital experiences shouldn't be a luxury reserved 
                    for large corporations.
                  </p>
                  <p>
                    Starting as a small team of passionate developers, we've grown into a 
                    full-service digital agency that has helped over 100+ businesses transform 
                    their online presence and achieve their goals.
                  </p>
                  <p>
                    Today, we continue to push the boundaries of what's possible on the web, 
                    combining cutting-edge technology with thoughtful design to create 
                    solutions that not only look great but deliver measurable results.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-brand-violet/20 to-brand-violet/10 border border-brand-violet/30 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-white mb-4">
                Our <span className="text-brand-violet">Values</span>
              </h2>
              <p className="text-lg text-brand-white/70">
                The principles that guide everything we do
              </p>
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
                <div key={index} className="text-center bg-brand-violet/5 p-6 rounded-xl border border-brand-violet/20 hover:bg-brand-violet/10 transition-colors">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-violet/20 rounded-xl mb-4">
                    <value.icon className="h-8 w-8 text-brand-violet" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-brand-white/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-violet/10 border-t border-brand-violet/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-white mb-4">
              Ready to Work <span className="text-brand-violet">Together?</span>
            </h2>
            <p className="text-xl text-brand-white/70 mb-8">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-brand-violet text-brand-white font-semibold rounded-lg hover:bg-brand-violet/90 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 