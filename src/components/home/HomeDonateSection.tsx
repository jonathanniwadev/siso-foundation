"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const amounts = [10, 50, 100];

export default function HomeDonateSection() {
  const [amount, setAmount] = useState<number | string>("");
  const router = useRouter();

  const handleDonate = () => {
    if (!amount) return;
    router.push(`/donate?amount=${amount}`);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
          <div className="grid items-center gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-2">
            {/* Left side */}
            <div className="text-white">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-emerald-300">
                Donate Now
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
                Your support helps us create real change
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                Every contribution supports our work in reproductive health,
                menstrual hygiene, skills development, and community
                empowerment. Together, we can reach more young people and
                families with practical support and opportunity.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Donate Now →
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
                <div className="text-lg font-extrabold">Choose an amount</div>
                <p className="mt-1 text-sm text-emerald-50">
                  Support our programs and community outreach.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-center text-xl font-bold text-slate-900">
                  Your support can make a meaningful difference
                </h3>

                {/* preset amounts */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => setAmount(a)}
                      className="rounded-xl border border-slate-200 px-3 py-4 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      ${a}
                    </button>
                  ))}
                </div>

                {/* custom amount */}
                <input
                  type="number"
                  placeholder="Custom amount ($)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-4 text-slate-700 outline-none focus:border-emerald-500"
                />

                {/* donate button */}
                <button
                  onClick={handleDonate}
                  className="mt-6 w-full rounded-xl bg-emerald-600 px-5 py-4 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Continue to Donate →
                </button>

                <p className="mt-4 text-center text-xs text-slate-500">
                  Secure donation process through the SISO Foundation donate
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
