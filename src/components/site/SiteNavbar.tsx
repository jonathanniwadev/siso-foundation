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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/sisologo.jpeg"
            alt="SISO Foundation"
            width={scrolled ? 38 : 46}
            height={scrolled ? 38 : 46}
            className="rounded-full object-cover transition-all duration-300"
          />

          <div className="min-w-0 leading-tight">
            <div
              className={`truncate font-extrabold tracking-tight text-slate-900 transition-all duration-300 ${
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

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/donate"
            className={`rounded-xl bg-emerald-600 font-bold text-white transition-all duration-300 hover:bg-emerald-700 ${
              scrolled ? "px-3 py-1.5 text-[13px]" : "px-4 py-2 text-sm"
            }`}
          >
            Donate
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800 shadow-sm transition hover:bg-slate-50"
          >
            <span className="sr-only">Toggle menu</span>

            <span
              className={`absolute h-0.5 w-5 rounded bg-slate-800 transition-all duration-300 ${
                mobileOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded bg-slate-800 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded bg-slate-800 transition-all duration-300 ${
                mobileOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
          {nav.map((n, index) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
              style={{
                transitionDelay: mobileOpen ? `${index * 40}ms` : "0ms",
              }}
            >
              {n.label}
            </Link>
          ))}

          <Link
            href="/donate"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-xl bg-emerald-600 px-4 py-3 text-center font-bold text-white transition hover:bg-emerald-700"
          >
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
