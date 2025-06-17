"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Zap, DollarSign, Rocket, Palette} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Benefit from our committed teams who ensure your success is personal. Count on expert guidance and exceptional results throughout your project journey.",
  },
  {
    icon: DollarSign,
    title: "Simplicity and Affordability",
    description: "Find easy-to-use, affordable solutions with our team. Our products make procurement simple and keep projects within budget.",
  },
  {
    icon: Rocket,
    title: "Fail-fast Approach",
    description: "Build only what is necessary to test your core assumptions, gather real user feedback quickly, and pivot or kill features that don’t meet your goals.",
  },
  {
    icon: Palette,
    title: "User-Centric Design",
    description: "Experience the difference with our user-focused design — where functionality meets practicality for an enhanced work experience.",
  }
];

export function ValuesSection() {
  return (
    <section className=" py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-center gap-16">
        {/* Header */}
        <div className="text-left mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-white mb-6">
            Achieving what matters most to <span className="text-brand-yellow">you</span>
          </h2>
          <p className="text-lg text-brand-white/70 max-w-5xl mx-auto">
          We offer innovative digital services but first and foremost, we believe that building a committed partnership with you first is vital in driving your business to fundamentally advance in this digital universe
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-brand-dark hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16  rounded-xl flex items-center justify-center group-hover:bg-brand-yellow/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-brand-orange" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-brand-white mb-4 group-hover:text-brand-yellow transition-colors duration-200">
                    {value.title}
                  </h3>
                  
                  <p className="text-brand-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        
      </div>

        {/* Bottom CTA */}
      <div className="text-center mt-16 ">
          <div className=" p-8 ">
            <h3 className="text-2xl font-bold text-brand-white mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-brand-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss how our values-driven approach can help transform your digital presence 
              and achieve the results that matter most to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Start Your Journey
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark font-semibold rounded-lg transition-all duration-200"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
    </section>
  );
} 