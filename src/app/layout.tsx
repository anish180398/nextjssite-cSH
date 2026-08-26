import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MotionConfig } from "motion/react";
// Theme will be handled by Zustand store
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import IntroLoader from "@/components/sections/intro-loader";
import { JsonLd } from "@/components/seo/json-ld";
import { ORGANIZATION_ID, WEBSITE_ID, SITE_URL } from "@/lib/seo/schema";
import { services } from "@/lib/data/services";
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
  metadataBase: new URL("https://kryttr.com"),
  openGraph: {
    type: "website",
    url: "https://kryttr.com",
    title: "Kryttr - Digital Agency & Web Development",
    description: "Transform your business with cutting-edge web development, innovative design, and strategic digital solutions. We build digital experiences that drive results.",
    siteName: "Kryttr",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"]
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
  // Add real verification codes here once Search Console / Bing Webmaster /
  // Yandex are set up — omitted rather than shipping placeholder values.
  category: "Technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://kryttr.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
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
        <meta name="theme-color" content="#F11601" />
        <meta name="color-scheme" content="dark light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Kryttr" />
        <meta name="application-name" content="Kryttr" />
        <meta name="msapplication-TileColor" content="#F11601" />
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
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": ORGANIZATION_ID,
            name: "Kryttr",
            url: SITE_URL,
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/icon-512.png`,
              width: 512,
              height: 512,
            },
            image: `${SITE_URL}/og-image.png`,
            description:
              "Transform your business with cutting-edge web development, innovative design, and strategic digital solutions.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chennai",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9514015234",
              contactType: "customer service",
              email: "anish@kryttr.com",
            },
            sameAs: [
              "https://twitter.com/kryttr",
              "https://github.com/kryttr",
              "https://linkedin.com/company/kryttr",
            ],
            foundingDate: "2021",
            numberOfEmployees: "10-50",
            slogan: "Digital experiences that drive results",
            areaServed: {
              "@type": "Place",
              name: "Worldwide",
            },
            knowsAbout: services.map((service) => service.title),
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services",
              itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.description,
                  url: `${SITE_URL}/services/${service.slug}`,
                },
              })),
            },
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": WEBSITE_ID,
            name: "Kryttr",
            url: SITE_URL,
            description:
              "Transform your business with cutting-edge web development, innovative design, and strategic digital solutions.",
            publisher: { "@id": ORGANIZATION_ID },
            inLanguage: "en-US",
          }}
        />
      </body>
    </html>
  );
}
