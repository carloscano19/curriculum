import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carloscanofernandez.com"),
  title: "Carlos Cano Fernández | SEO & GEO Lead",
  description: "Senior specialist in Technical SEO, GEO (Generative Engine Optimization) and data-driven growth strategies.",
  openGraph: {
    title: "Carlos Cano Fernández | SEO & GEO Lead",
    description: "Senior specialist in Technical SEO, GEO (Generative Engine Optimization) and data-driven growth strategies.",
    url: "https://carloscanofernandez.com",
    siteName: "Carlos Cano Fernández CV",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Cano Fernández | SEO & GEO Lead",
    description: "Senior specialist in Technical SEO, GEO (Generative Engine Optimization) and data-driven growth strategies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
