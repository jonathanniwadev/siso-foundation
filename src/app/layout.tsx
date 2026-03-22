import type { Metadata } from "next";
import "./globals.css";

import SiteNavbar from "@/components/site/SiteNavbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "SISO Foundation | Empowering Youth & Communities in Uganda",
  description:
    "SISO Foundation empowers communities through reproductive health education, skills training, and women's empowerment programs.",
  openGraph: {
    title: "SISO Foundation",
    description:
      "Empowering youth and communities in Uganda through health, education, and livelihood programs.",
    url: "https://sisofoundation.org",
    siteName: "SISO Foundation",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
