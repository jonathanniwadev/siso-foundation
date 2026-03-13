"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/updates", label: "Updates" },
  { href: "/governance", label: "Governance" },
  { href: "/certification", label: "Certification" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 backdrop-blur transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm" : "bg-white/85"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 ${
          scrolled ? "py-1.5" : "py-3"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/sisologo.jpeg"
            alt="SISO Foundation"
            width={scrolled ? 38 : 46}
            height={scrolled ? 38 : 46}
            className="rounded-full object-cover transition-all duration-300"
          />

          <div className="leading-tight">
            <div
              className={`font-extrabold tracking-tight text-slate-900 transition-all duration-300 ${
                scrolled ? "text-sm" : "text-base"
              }`}
            >
              SISO Foundation
            </div>
            <div
              className={`text-slate-500 transition-all duration-300 ${
                scrolled ? "text-[11px]" : "text-xs"
              }`}
            >
              Uganda
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`font-semibold text-slate-700 transition-all duration-300 hover:text-slate-900 ${
                scrolled ? "text-[13px]" : "text-sm"
              }`}
            >
              {n.label}
            </Link>
          ))}

          <Link
            href="/donate"
            className={`rounded-xl bg-emerald-600 font-bold text-white transition-all duration-300 hover:bg-emerald-700 ${
              scrolled ? "px-3 py-1.5 text-[13px]" : "px-4 py-2 text-sm"
            }`}
          >
            Donate
          </Link>
        </nav>

        <div className="md:hidden">
          <Link
            href="/donate"
            className={`rounded-xl bg-emerald-600 font-bold text-white transition-all duration-300 hover:bg-emerald-700 ${
              scrolled ? "px-3 py-1.5 text-[13px]" : "px-4 py-2 text-sm"
            }`}
          >
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}