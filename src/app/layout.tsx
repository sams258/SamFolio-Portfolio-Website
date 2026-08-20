import type { Metadata } from "next";
import { DM_Serif_Display, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samfolio.se"),
  title: "Samir El Saati — Self-Adaptive Systems & Human-in-the-Loop Design",
  description:
    "MSc Computer Science candidate at Malmö University. Research on systems that adapt within the limits of their own competence and hand control back to a person at the boundary of it. Seeking a funded PhD position.",
  openGraph: {
    title: "Samir El Saati — Self-Adaptive Systems & Human-in-the-Loop Design",
    description:
      "MSc Computer Science candidate at Malmö University. Research on systems that adapt within the limits of their own competence and hand control back to a person at the boundary of it. Seeking a funded PhD position.",
    url: "https://samfolio.se",
    type: "website",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samir El Saati — Self-Adaptive Systems & Human-in-the-Loop Design",
    description:
      "MSc Computer Science candidate at Malmö University. Research on systems that adapt within the limits of their own competence and hand control back to a person at the boundary of it. Seeking a funded PhD position.",
    images: ["/og-image.jpg"],
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
      className={`${dmSerif.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
