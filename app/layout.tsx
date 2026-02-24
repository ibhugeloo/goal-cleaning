import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.goalcleaning.re";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Goal Cleaning — Lavage & Detailing Auto à Saint-Denis, La Réunion",
    template: "%s | Goal Cleaning",
  },
  description:
    "Centre de lavage et detailing automobile à Saint-Denis, La Réunion. Lavage extérieur, intérieur complet, polish, cire de protection. Résultat premium garanti.",
  keywords: [
    "lavage voiture Saint-Denis",
    "detailing auto Réunion",
    "nettoyage voiture 974",
    "car wash Saint-Denis Réunion",
    "lavage auto centre ville",
    "detailing automobile La Réunion",
    "polish voiture Réunion",
    "nettoyage intérieur voiture",
  ],
  authors: [{ name: "Goal Cleaning" }],
  creator: "Goal Cleaning",
  publisher: "Goal Cleaning",
  openGraph: {
    type: "website",
    locale: "fr_RE",
    url: SITE_URL,
    siteName: "Goal Cleaning",
    title: "Goal Cleaning — Lavage & Detailing Auto à Saint-Denis, La Réunion",
    description:
      "Centre de lavage et detailing automobile à Saint-Denis, La Réunion. Lavage extérieur, intérieur complet, polish, cire de protection. Résultat premium garanti.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Goal Cleaning — Centre de detailing auto à Saint-Denis La Réunion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goal Cleaning — Lavage & Detailing Auto à Saint-Denis, La Réunion",
    description:
      "Centre de lavage et detailing automobile à Saint-Denis, La Réunion. Résultat premium garanti.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoWash"],
  name: "Goal Cleaning",
  description:
    "Centre de lavage et detailing automobile premium à Saint-Denis, La Réunion. Lavage extérieur, intérieur complet, cire de protection et polish.",
  url: SITE_URL,
  telephone: "+262692000000",
  email: "contact@goalcleaning.re",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Centre Ville",
    addressLocality: "Saint-Denis",
    addressRegion: "La Réunion",
    postalCode: "97400",
    addressCountry: "RE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -20.8789,
    longitude: 55.4481,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Carte bancaire, Espèces, Virement",
  image: `${SITE_URL}/images/hero-bg.jpg`,
  sameAs: [
    "https://www.facebook.com/goalcleaning",
    "https://www.instagram.com/goalcleaning",
    "https://www.tiktok.com/@goalcleaning",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de lavage automobile",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Lavage Extérieur",
        description:
          "Lavage manuel, nettoyage des jantes, vitres, séchage microfibre, brillant pneus",
        price: "40",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Lavage Complet",
        description:
          "Lavage extérieur + aspiration, nettoyage plastiques, vitres, cire de protection",
        price: "90",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Nettoyage Intérieur",
        description:
          "Aspiration complète, nettoyage plastiques, vitres, dépoussiérage, parfum",
        price: "50",
        priceCurrency: "EUR",
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
    <html lang="fr">
      <body
        className={`${bricolageGrotesque.variable} ${dmSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
