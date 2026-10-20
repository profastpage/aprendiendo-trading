import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aprendiendotrading.com"),
  title: "Aprendiendo Trading | Academia Institucional & Especialistas en Oro (XAU/USD)",
  description: "Aprende trading cuantitativo e institucional en Oro (XAU/USD). Curso completo por $99 USD, señales VIP y nuestro indicador oficial de reversión en Exness.",
  keywords: [
    "aprender trading",
    "curso de trading oro",
    "xauusd trading",
    "smart money concepts oro",
    "señales de trading xauusd",
    "exness partner",
    "academia trading institucional",
    "estrategia oro m5 m15",
    "aprendiendo trading"
  ],
  authors: [{ name: "Aprendiendo Trading Academy", url: "https://aprendiendotrading.com" }],
  creator: "FastPagePro",
  publisher: "Aprendiendo Trading",
  alternates: {
    canonical: "https://aprendiendotrading.com",
  },
  openGraph: {
    title: "Aprendiendo Trading — Domina el Oro con Smart Money",
    description: "Curso profesional de Oro ($99 USD) + Señales VIP en Exness + Indicador exclusivo.",
    url: "https://aprendiendotrading.com",
    siteName: "Aprendiendo Trading",
    locale: "es_LA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprendiendo Trading | Especialistas en Oro",
    description: "Curso profesional $99 USD y Señales VIP en Exness.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://aprendiendotrading.com/#organization",
        "name": "Aprendiendo Trading",
        "url": "https://aprendiendotrading.com",
        "logo": "https://aprendiendotrading.com/favicon.ico",
        "description": "Academia institucional de formación en trading de Oro (XAU/USD) y análisis cuantitativo.",
        "sameAs": [
          "https://www.exness.com"
        ]
      },
      {
        "@type": "Course",
        "@id": "https://aprendiendotrading.com/#course",
        "name": "Gold Sniper Pro: Especialización en Oro (XAU/USD)",
        "description": "Metodología institucional de Smart Money Concepts, Order Blocks, Liquidity Sweeps y gestión cuantitativa de riesgo en Oro.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Aprendiendo Trading",
          "sameAs": "https://aprendiendotrading.com"
        },
        "offers": {
          "@type": "Offer",
          "price": "99.00",
          "priceCurrency": "USD",
          "category": "Paid",
          "availability": "https://schema.org/InStock",
          "url": "https://aprendiendotrading.com/curso"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "142"
        }
      }
    ]
  };

  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#060911] text-gray-100 antialiased selection:bg-amber-500 selection:text-black pb-16 lg:pb-0">
        {children}
        {/* Global Floating WhatsApp Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
