import type { Metadata } from "next";
import "./globals.css";

import SiteNavbar from "@/components/site/SiteNavbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "SISO Foundation",
  description:
    "SISO Foundation supports youth and communities through reproductive health, skills & livelihoods, and menstrual hygiene / women empowerment.",
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
