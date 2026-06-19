import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_URL, ADDRESS_LINE1, ADDRESS_LINE2, socials } from "@/lib/data";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "B4 Builders | Construction & Interiors in Bangalore",
    template: "%s | B4 Builders Bangalore",
  },
  description:
    "B4 Builders is an end-to-end construction and interiors company in Bangalore. We build in lime and RCC — traditional eco-friendly homes, modern turnkey villas, and full interior fit-outs. Design to handover.",
  keywords: [
    "construction company Bangalore",
    "home builders Bangalore",
    "traditional construction Bangalore",
    "lime construction Bangalore",
    "Madras Terrace Bangalore",
    "RCC construction Bangalore",
    "turnkey villa Bangalore",
    "house construction Bangalore",
    "interior design Bangalore",
    "construction cost Bangalore",
    "heritage restoration Bangalore",
    "eco-friendly construction Bangalore",
    "building contractor Bangalore",
    "residential construction Bangalore",
  ],
  authors: [{ name: "B4 Builders", url: SITE_URL }],
  creator: "B4 Builders",
  publisher: "B4 Builders",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "B4 Builders",
    title: "B4 Builders | Construction & Interiors in Bangalore",
    description:
      "End-to-end construction and interiors in Bangalore — in lime or concrete, design to handover.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "B4 Builders — Construction & Interiors in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B4 Builders | Construction & Interiors in Bangalore",
    description: "End-to-end construction and interiors in Bangalore — in lime or concrete, design to handover.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": SITE_URL,
  name: "B4 Builders",
  description:
    "End-to-end construction and interiors company in Bengaluru. Traditional/eco-friendly and modern/conventional construction, full interior fit-outs, design to handover.",
  url: SITE_URL,
  telephone: "+919035817133",
  email: "b4builders1@gmail.com",
  foundingDate: "2022",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_LINE1,
    addressLocality: "Bengaluru",
    postalCode: "560102",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9136,
    longitude: 77.6412,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: socials.map((s) => s.href),
  areaServed: [
    { "@type": "City", name: "Bengaluru" },
    { "@type": "State", name: "Karnataka" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction & Interior Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Traditional & Eco-Friendly Construction",
          description:
            "Lime mortar masonry, surkhee plastering, Madras Terrace roofing, heritage restoration.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Modern & Conventional Construction",
          description:
            "RCC framed structures, turnkey villas, renovations, and modern exterior finishes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interiors",
          description:
            "Full interior fit-outs, modular kitchens, wardrobes, flooring, lighting, and plumbing.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${fraunces.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
