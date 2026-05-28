"use client";

import Link from "next/link";

export default function HomeDonateSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
          <div className="grid items-center gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-2">
            
            {/* Left side */}
            <div className="text-white">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-emerald-300">
                Partner With Us
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
                Your support helps us create real change
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                SISO Foundation works with vulnerable communities through
                education support, youth empowerment, health outreach,
                child protection and community development initiatives across
                Uganda.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Contact Us →
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right side card */}
            <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
              <div className="rounded-2xl bg-emerald-500 px-5 py-4 text-white">
                <div className="text-lg font-extrabold">
                  Support SISO Foundation
                </div>

                <p className="mt-1 text-sm text-emerald-50">
                  Partner with us to support vulnerable communities across Uganda.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-center text-xl font-bold text-slate-900">
                  Let’s create lasting community impact together
                </h3>

                <p className="mt-4 text-center text-sm leading-7 text-slate-600">
                  To support, collaborate or partner with SISO Foundation,
                  please contact us through our official communication channels.
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                  <p className="text-sm font-semibold text-slate-500">
                    Official Email
                  </p>

                  <a
                    href="mailto:info@sisofoundation.org"
                    className="mt-2 block text-lg font-bold text-emerald-700 hover:underline"
                  >
                    info@sisofoundation.org
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 block w-full rounded-xl bg-emerald-600 px-5 py-4 text-center text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Contact SISO Foundation →
                </Link>

                <p className="mt-4 text-center text-xs text-slate-500">
                  Thank you for supporting our mission of transforming lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
