import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Buckeye Gym | Old-School Strength Gym in Tallmadge, OH";
const description = "Train at Buckeye Gym, a family-owned, old-school gym in Tallmadge, Ohio. Serious equipment, flexible memberships, personal training, and no contracts.";
const url = "https://buckeyegym.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  applicationName: "Buckeye Gym",
  title: { default: title, template: "%s | Buckeye Gym" },
  description,
  alternates: { canonical: "/" },
  category: "fitness",
  keywords: ["Buckeye Gym", "gym in Tallmadge Ohio", "old-school gym", "strength training", "bodybuilding gym", "personal training Tallmadge", "day pass gym"],
  authors: [{ name: "Buckeye Gym", url }],
  creator: "Buckeye Gym",
  publisher: "Buckeye Gym",
  formatDetection: { address: false, email: false, telephone: false },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/icon.png",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title, description, type: "website", url, siteName: "Buckeye Gym", locale: "en_US", images: [{ url: "/og.png", width: 1731, height: 909, alt: "Buckeye Gym — Built for the work in Tallmadge, Ohio" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  other: { "geo.region": "US-OH", "geo.placename": "Tallmadge", "geo.position": "41.102357;-81.435034", ICBM: "41.102357, -81.435034" },
};

export const viewport: Viewport = { themeColor: "#0b0b0b", colorScheme: "dark", width: "device-width", initialScale: 1 };

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": `${url}/#gym`,
  name: "Buckeye Gym",
  url,
  image: `${url}/og.png`,
  logo: `${url}/icon.png`,
  telephone: "+1-330-633-3084",
  email: "rkpropst11@yahoo.com",
  priceRange: "$10–$42.70",
  address: { "@type": "PostalAddress", streetAddress: "137 East Ave, Suite 102", addressLocality: "Tallmadge", addressRegion: "OH", postalCode: "44278", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 41.102357, longitude: -81.435034 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "04:30", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "16:00" },
  ],
  sameAs: ["https://www.instagram.com/buckeye_gym_/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preload" as="font" type="font/woff2" href="/fonts/shrikhand-400-latin.woff2" crossOrigin=""/><link rel="preload" as="font" type="font/woff2" href="/fonts/barlow-condensed-700-latin.woff2" crossOrigin=""/></head><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}/></body></html>;
}
