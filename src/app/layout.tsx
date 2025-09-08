import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plott Labs - Enterprise-Grade Incident Response",
  description: "Enterprise-Grade Incident Response, Delivered in the Cloud. Simplify dispatch operations with our integrated CAD, Map, Mobile, and Analytics platform.",
  keywords: [
    "CAD software",
    "computer-aided dispatch",
    "incident response software",
    "emergency response platform",
    "public safety software",
    "dispatch system",
    "first responder technology",
    "cloud-based CAD",
    "SaaS for emergency services",
    "Plott Labs CAD",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/plottlabs-icon--16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/plottlabs-icon--32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
