"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setEmail("");
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError(result.error || "Failed to subscribe");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-brand-white mb-4">
        Stay in the <span className="text-brand-violet">Loop</span>
      </h2>
      <p className="text-xl text-brand-white/70 mb-8">
        Get notified when we publish new articles and insights about web development and design.
      </p>
      
      {isSuccess ? (
        <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-lg max-w-md mx-auto">
          <p className="text-green-400 font-medium">
            🎉 Thank you for subscribing! Check your email for confirmation.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-brand-white/20 rounded-lg bg-brand-dark/50 text-brand-white placeholder-brand-white/50 focus:ring-2 focus:ring-brand-violet focus:border-brand-violet"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              size="lg" 
              className="bg-brand-violet hover:bg-brand-violet/90 text-brand-dark disabled:opacity-50"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg max-w-md mx-auto">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}
        </form>
      )}
      
      <p className="text-sm text-brand-white/60 mt-4">
        No spam, unsubscribe at any time.
      </p>
    </div>
  );
} 