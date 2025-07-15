import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Reign of Vision protects your privacy and handles your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-violet/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-brand-violet hover:text-brand-violet/80 mb-8 group transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-brand-violet/20 rounded-2xl">
                  <Shield className="h-12 w-12 text-brand-violet" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy <span className="text-brand-violet">Policy</span>
              </h1>
              <p className="text-xl text-brand-white/70 leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-brand-white/60 mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6 flex items-center">
                  <Eye className="h-8 w-8 text-brand-violet mr-3" />
                  Introduction
                </h2>
                <p className="text-brand-white/80 leading-relaxed mb-4">
                  At Reign of Vision, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-brand-white/80 leading-relaxed">
                  By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this policy, please do not access or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6 flex items-center">
                  <Users className="h-8 w-8 text-brand-violet mr-3" />
                  Information We Collect
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">Personal Information</h3>
                    <ul className="text-brand-white/80 space-y-2">
                      <li>• Name and contact information (email, phone, address)</li>
                      <li>• Company information and job title</li>
                      <li>• Payment and billing information</li>
                      <li>• Communication preferences</li>
                    </ul>
                  </div>

                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">Technical Information</h3>
                    <ul className="text-brand-white/80 space-y-2">
                      <li>• IP address and location data</li>
                      <li>• Browser type and version</li>
                      <li>• Device information and operating system</li>
                      <li>• Website usage data and analytics</li>
                    </ul>
                  </div>

                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">Project Information</h3>
                    <ul className="text-brand-white/80 space-y-2">
                      <li>• Project requirements and specifications</li>
                      <li>• Files and content you provide</li>
                      <li>• Communication history and feedback</li>
                      <li>• Project timeline and milestones</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6 flex items-center">
                  <Lock className="h-8 w-8 text-brand-violet mr-3" />
                  How We Use Your Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">Service Delivery</h3>
                    <ul className="text-brand-white/80 space-y-2 text-sm">
                      <li>• Provide and maintain our services</li>
                      <li>• Process and fulfill project requests</li>
                      <li>• Communicate about your projects</li>
                      <li>• Provide customer support</li>
                    </ul>
                  </div>

                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">Business Operations</h3>
                    <ul className="text-brand-white/80 space-y-2 text-sm">
                      <li>• Process payments and billing</li>
                      <li>• Analyze and improve our services</li>
                      <li>• Send marketing communications</li>
                      <li>• Comply with legal obligations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Data Security</h2>
                <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                  <p className="text-brand-white/80 leading-relaxed mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="text-brand-white/80 space-y-2">
                    <li>• SSL encryption for data transmission</li>
                    <li>• Secure servers and databases</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Employee training on data protection</li>
                    <li>• Access controls and authentication</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Your Rights</h2>
                <div className="space-y-4">
                  <div className="bg-brand-violet/10 p-4 rounded-lg border border-brand-violet/20">
                    <h3 className="text-lg font-semibold text-brand-white mb-2">Access and Correction</h3>
                    <p className="text-brand-white/80 text-sm">You can request access to your personal information and ask us to correct any inaccuracies.</p>
                  </div>
                  <div className="bg-brand-violet/10 p-4 rounded-lg border border-brand-violet/20">
                    <h3 className="text-lg font-semibold text-brand-white mb-2">Data Portability</h3>
                    <p className="text-brand-white/80 text-sm">You can request a copy of your personal information in a structured, machine-readable format.</p>
                  </div>
                  <div className="bg-brand-violet/10 p-4 rounded-lg border border-brand-violet/20">
                    <h3 className="text-lg font-semibold text-brand-white mb-2">Deletion</h3>
                    <p className="text-brand-white/80 text-sm">You can request that we delete your personal information, subject to legal requirements.</p>
                  </div>
                  <div className="bg-brand-violet/10 p-4 rounded-lg border border-brand-violet/20">
                    <h3 className="text-lg font-semibold text-brand-white mb-2">Opt-out</h3>
                    <p className="text-brand-white/80 text-sm">You can opt out of marketing communications at any time.</p>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Cookies and Tracking</h2>
                <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                  <p className="text-brand-white/80 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to improve your experience on our website. These technologies help us:
                  </p>
                  <ul className="text-brand-white/80 space-y-2 mb-4">
                    <li>• Remember your preferences and settings</li>
                    <li>• Analyze website traffic and usage patterns</li>
                    <li>• Provide personalized content and advertisements</li>
                    <li>• Improve website performance and functionality</li>
                  </ul>
                  <p className="text-brand-white/80 leading-relaxed">
                    You can control cookies through your browser settings, but disabling them may affect website functionality.
                  </p>
                </div>
              </div>

              {/* Third-Party Services */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Third-Party Services</h2>
                <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                  <p className="text-brand-white/80 leading-relaxed mb-4">
                    We may use third-party services to help operate our business, including:
                  </p>
                  <ul className="text-brand-white/80 space-y-2 mb-4">
                    <li>• Analytics providers (Google Analytics)</li>
                    <li>• Payment processors</li>
                    <li>• Email marketing platforms</li>
                    <li>• Content delivery networks</li>
                    <li>• Customer support tools</li>
                  </ul>
                  <p className="text-brand-white/80 leading-relaxed">
                    These third parties have their own privacy policies and are responsible for their own data practices.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Contact Us</h2>
                <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                  <p className="text-brand-white/80 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <ul className="text-brand-white/80 space-y-2">
                    <li>• Email: privacy@reignofvision.com</li>
                    <li>• Phone: +1 (555) 123-4567</li>
                    <li>• Address: 123 Business Ave, Suite 100, San Francisco, CA 94105</li>
                  </ul>
                </div>
              </div>

              {/* Updates */}
              <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                <h2 className="text-xl font-semibold text-brand-white mb-3">Policy Updates</h2>
                <p className="text-brand-white/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the new policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-violet/20 to-brand-dark border-t border-brand-violet/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">
            Questions About Our <span className="text-brand-violet">Privacy Policy?</span>
          </h2>
          <p className="text-xl text-brand-white/70 mb-8 max-w-2xl mx-auto">
            We're here to help. Contact us if you have any questions about how we handle your data.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-violet hover:bg-brand-violet/90 text-brand-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
} 