import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, ContactFormData } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
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

    // Check for required environment variables
    const missingEnvVars = [];
    if (!process.env.AWS_ACCESS_KEY_ID) missingEnvVars.push('AWS_ACCESS_KEY_ID');
    if (!process.env.AWS_SECRET_ACCESS_KEY) missingEnvVars.push('AWS_SECRET_ACCESS_KEY');
    if (!process.env.SES_FROM_EMAIL) missingEnvVars.push('SES_FROM_EMAIL');
    if (!process.env.SES_TO_EMAIL) missingEnvVars.push('SES_TO_EMAIL');

    if (missingEnvVars.length > 0) {
      console.error("Missing environment variables:", missingEnvVars);
      return NextResponse.json(
        { error: "Email service is not properly configured. Please contact support." },
        { status: 500 }
      );
    }

    console.log("Attempting to send email with data:", {
      name: data.name,
      email: data.email,
      hasMessage: !!data.message,
      formType: data.formType
    });

    // Send email
    const success = await sendContactEmail(data);

    if (success) {
      console.log("Email sent successfully");
      return NextResponse.json({ 
        message: "Thank you! Your message has been sent successfully." 
      });
    } else {
      console.error("Email sending failed - sendContactEmail returned false");
      return NextResponse.json(
        { error: "Failed to send message. Please check server logs for details." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
} 