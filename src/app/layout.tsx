import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Reign of Vision - Digital Agency & Web Development",
    template: "%s | Reign of Vision"
  },
  description: "Transform your business with cutting-edge web development, innovative design, and strategic digital solutions. We build digital experiences that drive results.",
  keywords: [
    "web development",
    "digital agency",
    "mobile apps",
    "UI/UX design",
    "SEO",
    "digital marketing",
    "e-commerce",
    "Next.js",
    "React",
    "TypeScript"
  ],
  authors: [{ name: "Reign of Vision Team" }],
  creator: "Reign of Vision",
  publisher: "Reign of Vision",
  metadataBase: new URL("https://reignofvision.com"),
  openGraph: {
    type: "website",
    url: "https://reignofvision.com",
    title: "Reign of Vision - Digital Agency & Web Development",
    description: "Transform your business with cutting-edge web development, innovative design, and strategic digital solutions. We build digital experiences that drive results.",
    siteName: "Reign of Vision",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reign of Vision - Digital Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Reign of Vision",
    creator: "@Reign of Vision",
    title: "Reign of Vision - Digital Agency & Web Development",
    description: "Transform your business with cutting-edge web development, innovative design, and strategic digital solutions.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://reignofvision.com",
    languages: {
      'en-US': 'https://reignofvision.com',
      'es-ES': 'https://reignofvision.com/es',
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.ctfassets.net" />
        <link rel="dns-prefetch" href="https://cdn.contentful.com" />
        <meta name="theme-color" content="#940DE7" />
        <meta name="color-scheme" content="dark light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Reign of Vision" />
        <meta name="application-name" content="Reign of Vision" />
        <meta name="msapplication-TileColor" content="#940DE7" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-brand-dark text-brand-white`}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="dark" storageKey="Reign of Vision-theme">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        
        {/* Google Analytics */}
        {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Reign of Vision",
              "url": "https://Reign of Vision.com",
              "logo": "https://Reign of Vision.com/logo.png",
              "description": "Transform your business with cutting-edge web development, innovative design, and strategic digital solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-234-567-8900",
                "contactType": "customer service",
                "email": "hello@Reign of Vision.com"
              },
              "sameAs": [
                "https://twitter.com/Reign of Vision",
                "https://github.com/Reign of Vision",
                "https://linkedin.com/company/Reign of Vision"
              ],
              "founder": {
                "@type": "Person",
                "name": "Reign of Vision Team"
              },
              "foundingDate": "2021",
              "numberOfEmployees": "10-50",
              "industry": "Technology",
              "serviceArea": {
                "@type": "Place",
                "name": "Worldwide"
              },
              "offers": {
                "@type": "Service",
                "serviceType": "Web Development",
                "description": "Custom web development and digital solutions"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
