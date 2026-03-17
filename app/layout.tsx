import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Next Step Gießen | Seminare zu Karriere, Finanzen und Berufseinstieg",
  description:
    "Praxisnahe Seminare für Studierende, Absolventen und Berufseinsteiger zu Karriere, Finanzen, Steuern, Thesis, KI und Excel.",
  metadataBase: new URL("https://next-step-giessen.de"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
