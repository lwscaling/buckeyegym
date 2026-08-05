import type { Metadata } from "next";
import "./globals.css";

const title = "Buckeye Gym | Old-School Strength Gym in Tallmadge, OH";
const description = "A family-owned, old-school strength gym in Tallmadge, Ohio. Serious equipment, flexible memberships, and no hidden fees.";

export const metadata: Metadata = {
  metadataBase: new URL("https://buckeyegym.com"),
  title,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: { title, description, type: "website", url: "https://buckeyegym.com", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Buckeye Gym — Built for the work." }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
