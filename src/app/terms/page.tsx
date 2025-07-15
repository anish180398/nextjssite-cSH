import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions for using Reign of Vision's services.",
};

export default function TermsPage() {
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
                  <Scale className="h-12 w-12 text-brand-violet" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of <span className="text-brand-violet">Service</span>
              </h1>
              <p className="text-xl text-brand-white/70 leading-relaxed">
                Please read these terms carefully before using our services.
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
                  <FileText className="h-8 w-8 text-brand-violet mr-3" />
                  Introduction
                </h2>
                <p className="text-brand-white/80 leading-relaxed mb-4">
                  Welcome to Reign of Vision. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-brand-white/80 leading-relaxed">
                  If you do not agree to these Terms, please do not use our services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any changes.
                </p>
              </div>

              {/* Services */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6 flex items-center">
                  <CheckCircle className="h-8 w-8 text-brand-violet mr-3" />
                  Our Services
                </h2>
                
                <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20 mb-6">
                  <h3 className="text-xl font-semibold text-brand-white mb-3">Service Offerings</h3>
                  <p className="text-brand-white/80 leading-relaxed mb-4">
                    Reign of Vision provides digital services including but not limited to:
                  </p>
                  <ul className="text-brand-white/80 space-y-2">
                    <li>• Web development and design</li>
                    <li>• Mobile application development</li>
                    <li>• Digital marketing and SEO</li>
                    <li>• UI/UX design services</li>
                    <li>• Consulting and strategy</li>
                    <li>• Maintenance and support</li>
                  </ul>
                </div>

                <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                  <h3 className="text-xl font-semibold text-brand-white mb-3">Service Availability</h3>
                  <p className="text-brand-white/80 leading-relaxed">
                    We strive to provide reliable and consistent services, but we cannot guarantee uninterrupted or error-free service. We reserve the right to modify, suspend, or discontinue any service at any time without notice.
                  </p>
                </div>
              </div>

              {/* User Responsibilities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6 flex items-center">
                  <AlertTriangle className="h-8 w-8 text-brand-violet mr-3" />
                  User Responsibilities
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">Account Security</h3>
                    <ul className="text-brand-white/80 space-y-2">
                      <li>• Maintain the confidentiality of your account credentials</li>
                      <li>• Notify us immediately of any unauthorized access</li>
                      <li>• Use strong passwords and enable two-factor authentication when available</li>
                      <li>• You are responsible for all activities under your account</li>
                    </ul>
                  </div>

                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">Acceptable Use</h3>
                    <p className="text-brand-white/80 leading-relaxed mb-3">You agree not to use our services to:</p>
                    <ul className="text-brand-white/80 space-y-2">
                      <li>• Violate any applicable laws or regulations</li>
                      <li>• Infringe on intellectual property rights</li>
                      <li>• Distribute malware or harmful content</li>
                      <li>• Engage in fraudulent or deceptive practices</li>
                      <li>• Interfere with our services or other users</li>
                    </ul>
                  </div>

                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">Content Responsibility</h3>
                    <ul className="text-brand-white/80 space-y-2">
                      <li>• Ensure you have rights to all content you provide</li>
                      <li>• Content must be accurate and not misleading</li>
                      <li>• Respect copyright and trademark laws</li>
                      <li>• Obtain necessary permissions for third-party content</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Payment Terms</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">Pricing & Billing</h3>
                    <ul className="text-brand-white/80 space-y-2 text-sm">
                      <li>• Prices are specified in our proposals</li>
                      <li>• Payment schedules vary by project</li>
                      <li>• All prices are in USD unless stated otherwise</li>
                      <li>• Taxes may apply based on location</li>
                    </ul>
                  </div>

                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">Payment Terms</h3>
                    <ul className="text-brand-white/80 space-y-2 text-sm">
                      <li>• Payment is due as specified in agreements</li>
                      <li>• Late payments may incur additional fees</li>
                      <li>• Work may be suspended for non-payment</li>
                      <li>• Refunds are subject to our refund policy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Intellectual Property</h2>
                
                <div className="space-y-6">
                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">Ownership</h3>
                    <p className="text-brand-white/80 leading-relaxed mb-3">
                      Upon full payment, you will own the final deliverables created specifically for your project. However:
                    </p>
                    <ul className="text-brand-white/80 space-y-2">
                      <li>• We retain rights to our development methodologies and processes</li>
                      <li>• Pre-existing tools and frameworks remain our property</li>
                      <li>• We may use project experience for future similar work</li>
                      <li>• Portfolio rights are retained unless specifically agreed otherwise</li>
                    </ul>
                  </div>

                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">License</h3>
                    <p className="text-brand-white/80 leading-relaxed">
                      You grant us a non-exclusive, worldwide license to use, modify, and display your content and materials for the purpose of providing our services and for portfolio/marketing purposes unless otherwise agreed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Warranties & Disclaimers */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Warranties & Disclaimers</h2>
                
                <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20 mb-6">
                  <h3 className="text-xl font-semibold text-brand-white mb-3">Service Warranty</h3>
                  <p className="text-brand-white/80 leading-relaxed mb-3">
                    We warrant that our services will be performed in a professional manner consistent with industry standards. However:
                  </p>
                  <ul className="text-brand-white/80 space-y-2">
                    <li>• We do not warrant that our services will be uninterrupted or error-free</li>
                    <li>• We do not guarantee specific results or outcomes</li>
                    <li>• Third-party services are subject to their own terms and warranties</li>
                    <li>• Bug fixes and corrections are provided for a limited time after delivery</li>
                  </ul>
                </div>

                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="text-xl font-semibold text-brand-white mb-3">Disclaimer</h3>
                  <p className="text-brand-white/80 leading-relaxed">
                    EXCEPT AS EXPRESSLY STATED IN THESE TERMS, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Limitation of Liability</h2>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <p className="text-brand-white/80 leading-relaxed mb-4">
                    IN NO EVENT SHALL REIGN OF VISION BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                  </p>
                  <p className="text-brand-white/80 leading-relaxed">
                    OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                  </p>
                </div>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Termination</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">By You</h3>
                    <ul className="text-brand-white/80 space-y-2 text-sm">
                      <li>• You may terminate services with written notice</li>
                      <li>• Payment for completed work remains due</li>
                      <li>• Materials and access will be provided upon payment</li>
                      <li>• Termination fees may apply per agreement</li>
                    </ul>
                  </div>

                  <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                    <h3 className="text-xl font-semibold text-brand-white mb-3">By Us</h3>
                    <ul className="text-brand-white/80 space-y-2 text-sm">
                      <li>• We may terminate for breach of terms</li>
                      <li>• Non-payment may result in termination</li>
                      <li>• We may terminate with notice for convenience</li>
                      <li>• Completed work will be delivered upon payment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Governing Law</h2>
                
                <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                  <p className="text-brand-white/80 leading-relaxed mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
                  </p>
                  <p className="text-brand-white/80 leading-relaxed">
                    Any disputes arising under these Terms shall be resolved through binding arbitration in San Francisco, California, in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-white mb-6">Contact Information</h2>
                <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                  <p className="text-brand-white/80 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <ul className="text-brand-white/80 space-y-2">
                    <li>• Email: legal@reignofvision.com</li>
                    <li>• Phone: +1 (555) 123-4567</li>
                    <li>• Address: 123 Business Ave, Suite 100, San Francisco, CA 94105</li>
                  </ul>
                </div>
              </div>

              {/* Updates */}
              <div className="bg-brand-violet/10 p-6 rounded-lg border border-brand-violet/20">
                <h2 className="text-xl font-semibold text-brand-white mb-3">Terms Updates</h2>
                <p className="text-brand-white/80 leading-relaxed">
                  We reserve the right to update these Terms of Service at any time. Material changes will be communicated via email or website notice. Your continued use of our services after any changes constitutes acceptance of the new terms.
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
            Ready to Work <span className="text-brand-violet">Together?</span>
          </h2>
          <p className="text-xl text-brand-white/70 mb-8 max-w-2xl mx-auto">
            Now that you understand our terms, let's discuss your project and get started.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-violet hover:bg-brand-violet/90 text-brand-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
} 