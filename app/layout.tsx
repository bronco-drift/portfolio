import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { TelemetryBar } from "@/components/telemetry-bar";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bronco-drift.vercel.app"),
  title: {
    default: "Bronco Drift — Studio Log",
    template: "%s · Bronco Drift",
  },
  description:
    "An independent design and engineering practice. Refined interfaces, systems built to be lived in, and the occasional cartographic detour.",
  openGraph: {
    title: "Bronco Drift — Studio Log",
    description:
      "An independent design and engineering practice. Refined interfaces and systems on the web.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${mono.variable} ${display.variable}`}
    >
      <body className="bg-ink text-smoke antialiased selection:bg-ember selection:text-ink">
        <TelemetryBar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
