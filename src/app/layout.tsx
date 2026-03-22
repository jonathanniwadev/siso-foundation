import type { Metadata } from "next";
import "./globals.css";

import SiteNavbar from "@/components/site/SiteNavbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: {
    default: "SISO Foundation Uganda",
    template: "%s | SISO Foundation Uganda",
  },
  description:
    "SISO Foundation is a Uganda-based nonprofit organization empowering youth and communities through reproductive health, skills development, menstrual hygiene, and women empowerment programs.",
  keywords: [
    "SISO Foundation",
    "SISO Foundation Uganda",
    "NGO in Uganda",
    "nonprofit Uganda",
    "charity Uganda",
    "youth empowerment Uganda",
    "women empowerment Uganda",
    "menstrual hygiene Uganda",
    "reproductive health Uganda",
    "skills development Uganda",
    "donate to NGO in Uganda",
  ],
  metadataBase: new URL("https://sisofoundation.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SISO Foundation Uganda",
    description:
      "Empowering youth and communities in Uganda through reproductive health, education, skills development, and livelihood programs.",
    url: "https://sisofoundation.org",
    siteName: "SISO Foundation",
    locale: "en_UG",
    type: "website",
    images: [
      {
        url: "/sisologo.jpeg",
        width: 800,
        height: 800,
        alt: "SISO Foundation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SISO Foundation Uganda",
    description:
      "Empowering youth and communities in Uganda through health, education, and livelihood support.",
    images: ["/sisologo.jpeg"],
  },
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "nonprofit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "SISO Foundation",
    url: "https://sisofoundation.org",
    logo: "https://sisofoundation.org/sisologo.jpeg",
    description:
      "SISO Foundation is a nonprofit organization in Uganda supporting youth and communities through reproductive health, skills development, menstrual hygiene, and women empowerment programs.",
    areaServed: "Uganda",
    address: {
      "@type": "PostalAddress",
      addressCountry: "UG",
    },
  };

  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
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
