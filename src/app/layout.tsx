import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Samfolio - Portfolio of Sam</title>
        <meta
          name="description"
          content="Welcome to Samfolio, the professional portfolio of Sam. Explore projects, skills, and achievements in web development and design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Samfolio - Portfolio of Sam" />
        <meta
          property="og:description"
          content="Welcome to Samfolio, showcasing projects, skills, and achievements."
        />
        <meta property="og:url" content="https://samfolio.se" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Samfolio - Portfolio of Sam" />
        <meta
          name="twitter:description"
          content="Explore projects, skills, and achievements on Samfolio."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon1.ico" />
      </head>
      <body>
        {/* Header at the top */}
        <Header />

        {/* Main content area */}
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
