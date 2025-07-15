"use client";

import { useState } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { ContactFormData } from "@/lib/email";
import { User, Mail, MessageSquare, Building, Phone, Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    subject: "",
    formType: "Contact Page"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          subject: "",
          formType: "Contact Page"
        });
      } else {
        setError(result.error || "Failed to send message");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={cn("p-6 bg-green-500/10 border border-green-500/20 rounded-lg", className)}>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-6 w-6 text-green-400" />
          </div>
          <h3 className="text-lg font-semibold text-brand-white">
            Thank you for your message!
          </h3>
        </div>
        <p className="text-brand-white/70 mb-4">
          We've received your message and will get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-brand-violet text-brand-violet hover:bg-brand-violet hover:text-brand-dark"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-white mb-2">
          Full Name *
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-brand-white/50" />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 bg-brand-dark border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/50 focus:ring-2 focus:ring-brand-violet focus:border-brand-violet transition-colors"
            placeholder="Enter your full name"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-white mb-2">
          Email Address *
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-brand-white/50" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 bg-brand-dark border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/50 focus:ring-2 focus:ring-brand-violet focus:border-brand-violet transition-colors"
            placeholder="Enter your email address"
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-brand-white mb-2">
          Company Name
        </label>
        <div className="relative">
          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-brand-white/50" />
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 bg-brand-dark border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/50 focus:ring-2 focus:ring-brand-violet focus:border-brand-violet transition-colors"
            placeholder="Enter your company name"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-white mb-2">
          Phone Number
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-brand-white/50" />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 bg-brand-dark border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/50 focus:ring-2 focus:ring-brand-violet focus:border-brand-violet transition-colors"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-brand-white mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-brand-dark border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/50 focus:ring-2 focus:ring-brand-violet focus:border-brand-violet transition-colors"
          placeholder="What's this about?"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-white mb-2">
          Message *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-brand-white/50" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full pl-10 pr-4 py-3 bg-brand-dark border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/50 focus:ring-2 focus:ring-brand-violet focus:border-brand-violet transition-colors resize-none"
            placeholder="Tell us about your project, goals, and how we can help you..."
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-violet hover:bg-brand-violet/90 text-brand-dark font-semibold py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
            <span>Sending Message...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <Send className="h-5 w-5" />
            <span>Send Message</span>
          </div>
        )}
      </Button>
    </form>
  );
} 