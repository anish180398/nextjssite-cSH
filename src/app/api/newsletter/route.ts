import { NextRequest, NextResponse } from "next/server";
import { sendNewsletterEmail, NewsletterFormData } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const data: NewsletterFormData = await request.json();

    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Send email
    const success = await sendNewsletterEmail(data);

    if (success) {
      return NextResponse.json({ 
        message: "Thank you! You've been subscribed to our newsletter." 
      });
    } else {
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
} 