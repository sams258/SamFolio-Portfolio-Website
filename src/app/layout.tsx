import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Header at the top */}
        <Header />

        {/* Main content area */}
        <main>{children}</main>
        <Analytics />
        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
