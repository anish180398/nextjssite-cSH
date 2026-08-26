"use client";

import { useState } from "react";
import { Send, User, Mail, Building, Phone, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactFormData } from "@/lib/email";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    subject: "",
    formType: "Contact Popup"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
            subject: "",
            formType: "Contact Popup"
          });
          onClose();
        }, 3000);
      } else {
        setError(result.error || "Failed to send message");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-semibold">
            Get in <span className="text-primary">Touch</span>
          </DialogTitle>
          <DialogDescription>Let&apos;s discuss your project</DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-4 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Message Sent!</h3>
            <p className="text-muted-foreground">
              Thank you for reaching out. We&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <label htmlFor="popup-name" className="mb-2 block text-sm font-medium text-foreground">
                Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  id="popup-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder-muted-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="popup-email" className="mb-2 block text-sm font-medium text-foreground">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  id="popup-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder-muted-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="popup-company" className="mb-2 block text-sm font-medium text-foreground">
                Company
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  id="popup-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder-muted-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div>
              <label htmlFor="popup-phone" className="mb-2 block text-sm font-medium text-foreground">
                Phone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="tel"
                  id="popup-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder-muted-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="popup-subject" className="mb-2 block text-sm font-medium text-foreground">
                Subject
              </label>
              <input
                type="text"
                id="popup-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder-muted-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="popup-message" className="mb-2 block text-sm font-medium text-foreground">
                Message *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <textarea
                  id="popup-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder-muted-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>

            {error && (
              <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-3">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </div>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
