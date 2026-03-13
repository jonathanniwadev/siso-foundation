"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Slide = {
  src: string;
  title: string;
  subtitle: string;
};

export default function HeroCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      {
        src: "/hero/1.jpg",
        title: "Let’s Change the World\nWith Your Support.",
        subtitle:
          "Our mission is to empower youth and communities through reproductive health, skills development, women empowerment, and menstrual hygiene support.",
      },
      {
        src: "/hero/2.jpg",
        title: "Health. Skills.\nDignity for All.",
        subtitle:
          "Together we build stronger communities — one program, one family, one youth at a time.",
      },
      {
        src: "/hero/3.jpg",
        title: "Your Donation\nCreates Impact.",
        subtitle:
          "Support programs that keep girls in school and help youth gain skills for livelihood.",
      },
    ],
    [],
  );

  const [index, setIndex] = useState(0);

  const current = slides[index];

  function prev() {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  }
  function next() {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  }

  // Auto slide (optional)
  useEffect(() => {
    const t = setInterval(() => next(), 7000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ backgroundImage: `url(${current.src})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      Top info bar
      <div className="absolute left-0 right-0 top-0 z-20 border-b border-white/10 bg-black/20 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-xs text-white/80">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>📍 Kampala, Uganda</span>
            <span>✉️ info@sisofoundation.org</span>
          </div>

          <div className="flex items-center gap-3">
            <a className="hover:text-white" href="#" aria-label="Facebook">
              f
            </a>
            <a className="hover:text-white" href="#" aria-label="Twitter">
              x
            </a>
            <a className="hover:text-white" href="#" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="whitespace-pre-line text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            {current.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
            {current.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700"
            >
              Donate Now →
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      {/* Slider arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white hover:bg-white/15"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white hover:bg-white/15"
        aria-label="Next slide"
      >
        ›
      </button>
      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-emerald-400" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
