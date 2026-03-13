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
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <SiteNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
