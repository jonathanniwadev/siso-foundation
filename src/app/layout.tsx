import type { Metadata } from "next";
import "./globals.css";

import SiteNavbar from "@/components/site/SiteNavbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "SISO Foundation | Empowering Youth & Communities in Uganda",
  description:
    "SISO Foundation is a nonprofit organization in Uganda empowering youth and communities through reproductive health programs, skills training, livelihoods, and menstrual hygiene support.",
  keywords: [
    "SISO Foundation",
    "NGO Uganda",
    "youth empowerment Uganda",
    "women empowerment Uganda",
    "menstrual hygiene programs",
    "community development NGO Uganda",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NonProfitOrganization",
    name: "SISO Foundation",
    url: "https://sisofoundation.org",
    description:
      "SISO Foundation supports youth and communities through reproductive health, skills & livelihoods, and menstrual hygiene / women empowerment.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Uganda",
    },
  };

  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <SiteNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
