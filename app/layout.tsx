import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "buckeyegym.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "Buckeye Gym | Old-School Strength Gym in Tallmadge, OH";
  const description = "A family-owned, old-school strength gym in Tallmadge, Ohio. Serious equipment, flexible memberships, and no hidden fees.";
  return {
    metadataBase: base, title, description, icons: { icon: "/favicon.svg" },
    openGraph: { title, description, type: "website", url: base, images: [{ url: new URL("/og.png", base), width: 1200, height: 630, alt: "Buckeye Gym — Built for the work." }] },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/og.png", base)] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
