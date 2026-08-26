import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MotionConfig } from "motion/react";
// Theme will be handled by Zustand store
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import IntroLoader from "@/components/sections/intro-loader";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Applied to <html> before hydration so the persisted/system theme renders
// with zero flash-of-wrong-theme (mirrors the Zustand store's own logic).
const noFlashThemeScript = `(function(){try{var s=localStorage.getItem('reign-of-vision-theme');var t='dark';if(s){var parsed=JSON.parse(s).state;if(parsed&&parsed.theme)t=parsed.theme;}if(t==='system'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(t);root.setAttribute('data-theme',t);}catch(e){document.documentElement.classList.add('dark');}})();`;

export const metadata: Metadata = {
  title: {
    default: "Kryttr - Digital Agency & Web Development",
    template: "%s | Kryttr"
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
  authors: [{ name: "Kryttr Team" }],
  creator: "Kryttr",
  publisher: "Kryttr",
  metadataBase: new URL("https://reignofvision.com"),
  openGraph: {
    type: "website",
    url: "https://reignofvision.com",
    title: "Kryttr - Digital Agency & Web Development",
    description: "Transform your business with cutting-edge web development, innovative design, and strategic digital solutions. We build digital experiences that drive results.",
    siteName: "Kryttr",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kryttr - Digital Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Kryttr",
    creator: "@Kryttr",
    title: "Kryttr - Digital Agency & Web Development",
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
    <html
      lang="en"
      className={`${ubuntu.variable} ${ubuntuMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.ctfassets.net" />
        <link rel="dns-prefetch" href="https://cdn.contentful.com" />
        <meta name="theme-color" content="#C6FF3D" />
        <meta name="color-scheme" content="dark light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Kryttr" />
        <meta name="application-name" content="Kryttr" />
        <meta name="msapplication-TileColor" content="#C6FF3D" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col bg-brand-dark text-brand-white"
        suppressHydrationWarning
      >
        <div className="grain-overlay" aria-hidden="true" />
        <MotionConfig reducedMotion="user">
          <Header />
          <IntroLoader />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionConfig>
        
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
              "name": "Kryttr",
              "url": "https://reignofvision.com",
              "logo": "https://reignofvision.com/logo.png",
              "description": "Transform your business with cutting-edge web development, innovative design, and strategic digital solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9514015234",
                "contactType": "customer service",
                "email": "anish@kryttr.com"
              },
              "sameAs": [
                "https://twitter.com/Reignofvision",
                "https://github.com/Reignofvision",
                "https://linkedin.com/company/Reignofvision"
              ],
              "founder": {
                "@type": "Person",
                "name": "Kryttr Team"
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
