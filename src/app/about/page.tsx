import { Metadata } from "next";
import Image from "next/image";
import { Target, Users, Lightbulb, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about CodeStreetHive - a passionate team of developers, designers, and digital strategists dedicated to building exceptional web experiences that drive business results.",
  openGraph: {
    title: "About CodeStreetHive - Our Story & Team",
    description: "Meet the talented team behind CodeStreetHive and discover our mission to transform businesses through innovative digital solutions.",
    url: "https://codestreethive.com/about",
  }
};

// Static team members data
const teamMembers = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer with 8+ years of experience building scalable web applications. Passionate about clean code and user experience.",
    avatar: null
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "UI/UX Designer",
    bio: "Creative designer with a keen eye for detail and user-centered design. Specializes in creating intuitive and beautiful digital experiences.",
    avatar: null
  },
  {
    id: "3",
    name: "Mike Rodriguez",
    role: "Digital Strategist",
    bio: "Data-driven marketer who helps businesses grow through strategic digital initiatives and performance optimization.",
    avatar: null
  }
];

function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member) => (
        <div key={member.id} className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">
                {member.name.charAt(0)}
              </span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {member.name}
          </h3>
          <p className="text-blue-600 font-medium mb-3">
            {member.role}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {member.bio}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building Digital Experiences That Matter
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a passionate team of developers, designers, and digital strategists 
              dedicated to creating exceptional web experiences that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    CodeStreetHive was founded in 2021 with a simple mission: to help businesses 
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
                <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600">
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
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600">
                The talented people behind CodeStreetHive
              </p>
            </div>
            
            <TeamGrid />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 