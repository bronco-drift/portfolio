import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bronco-drift.vercel.app"),
  title: {
    default: "Bronco Drift",
    template: "%s — Bronco Drift",
  },
  description:
    "Independent web work — interfaces, systems, and the occasional side project.",
  openGraph: {
    title: "Bronco Drift",
    description:
      "Independent web work — interfaces, systems, and the occasional side project.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-bg text-ink antialiased">
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
