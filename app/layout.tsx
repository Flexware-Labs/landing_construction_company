import type { Metadata } from "next";
import { Inter, Syncopate } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "H&M Project Solutions | Empresa Constructora e Ingeniería Civil en Perú",
    template: "%s | H&M Project Solutions"
  },
  description: "Especialistas en obras civiles, habilitación urbana, demoliciones y diseño arquitectónico en Moyobamba y todo el Perú. Ingeniería de valor y construcción garantizada.",
  keywords: [
    "empresa constructora en Perú",
    "obras civiles en Moyobamba",
    "habilitación urbana Perú",
    "servicios de ingeniería civil",
    "construcción y arquitectura Perú",
    "demoliciones",
    "Moyobamba",
    "San Martín",
    "H&M Project Solutions"
  ],
  metadataBase: new URL("https://hymprojectsolutions.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "H&M Project Solutions | Empresa Constructora e Ingeniería Civil",
    description: "Especialistas en obras civiles, habilitación urbana y diseño arquitectónico de alta complejidad en Moyobamba y el Perú.",
    url: "https://hymprojectsolutions.com",
    siteName: "H&M Project Solutions",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/logotipo_optimized.png",
        width: 1200,
        height: 630,
        alt: "H&M Project Solutions | Ingeniería y Construcción"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "H&M Project Solutions | Ingeniería y Construcción",
    description: "Servicios profesionales de ingeniería civil y obras de infraestructura en Moyobamba y todo el Perú.",
    images: ["/logotipo_optimized.png"]
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${syncopate.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col pt-18">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "H&M Project Solutions",
              "image": "https://hymprojectsolutions.com/logotipo_optimized.png",
              "telephone": "+51983752316",
              "email": "solutionsr@outlook.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jr. El Dorado 145",
                "addressLocality": "Moyobamba",
                "addressRegion": "San Martín",
                "postalCode": "22001",
                "addressCountry": "PE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-6.0336",
                "longitude": "-76.9717"
              },
              "url": "https://hymprojectsolutions.com",
              "sameAs": [
                "https://www.facebook.com/flexware.labs/"
              ],
              "priceRange": "$$$",
              "areaServed": ["Moyobamba", "San Martín", "Perú"],
              "knowsAbout": [
                "Obras civiles",
                "Habilitación urbana",
                "Construcción y reconstrucción",
                "Demoliciones",
                "Ampliaciones y refacciones",
                "Mantenimiento de infraestructura",
                "Diseño arquitectónico",
                "Importación y exportación de materiales y maquinaria"
              ]
            })
          }}
        />
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
