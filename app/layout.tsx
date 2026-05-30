import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { I18nProvider } from "@/components/i18n-provider";
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

const NO_FLASH_SCRIPT = `
(function(){try{
  var s = localStorage.getItem('theme');
  var t = s || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = t;
  var l = localStorage.getItem('locale');
  if (l === 'es' || l === 'en') document.documentElement.lang = l;
}catch(e){}})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script
          // No-flash theme + locale init; runs before paint.
          dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }}
        />
      </head>
      <body className="bg-bg text-ink antialiased">
        <I18nProvider>
          <SiteNav />
          {children}
          <SiteFooter />
        </I18nProvider>
      </body>
    </html>
  );
}
