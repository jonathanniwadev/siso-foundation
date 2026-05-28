"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function DonateClient() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState<string | null>(null);
  const paymentStatus = searchParams.get("payment");

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  }

  const bankDetails = [
    { label: "Bank", value: "Absa Bank Uganda" },
    { label: "Account Name", value: "SISO Foundation" },
    { label: "Account Number", value: "6010102691" },
    { label: "Branch", value: "Kampala Road" },
    { label: "Sort Code", value: "013447" },
    { label: "SWIFT Code", value: "BARCUGKX" },
  ];

  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-black via-zinc-950 to-zinc-900 py-14">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* Left column */}
          <div className="pt-2">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Donate to SISO Foundation
            </h1>

            <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-300">
              Your donation helps SISO Foundation deliver health outreach,
              vocational skills training, child protection and community
              empowerment programmes across Western Uganda.
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5 text-sm text-emerald-100">
              <div className="font-semibold text-white">
                Why your support matters
              </div>
              <p className="mt-2 leading-7 text-emerald-100/90">
                SISO Foundation has reached over 1,500 people across Western
                Uganda, trained 40 youth in vocational skills and delivered
                health services in six districts. Every contribution directly
                funds programmes that transform lives.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-zinc-200">
              <div className="text-sm font-semibold text-white">
                How to donate
              </div>
              <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-300">
                <li>Transfer to our Absa Bank account using the details on the right.</li>
                <li>Send us your name and transfer reference via email.</li>
                <li>We will send you a donation acknowledgement letter within 48 hours.</li>
              </ol>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-white mb-3">
                Contact Us
              </div>
              <div className="space-y-2 text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">Email:</span>
                  <a
                    href="mailto:info@sisofoundation.org"
                    className="text-emerald-400 hover:underline"
                  >
                    info@sisofoundation.org
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">Phone:</span>
                  <a
                    href="tel:+256740344518"
                    className="text-emerald-400 hover:underline"
                  >
                    +256 740 344 518
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — bank details */}
          <div className="rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/10 md:p-8">

            {paymentStatus === "completed" && (
              <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                <div className="font-semibold">
                  Thank you. Your donation was received.
                </div>
              </div>
            )}

            <h2 className="text-xl font-bold text-zinc-900">
              Bank Transfer Details
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Transfer directly to our Absa Bank account. Click any value to copy it.
            </p>

            <div className="mt-6 space-y-3">
              {bankDetails.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3"
                >
                  <div>
                    <div className="text-xs font-medium text-zinc-500">
                      {label}
                    </div>
                    <div className="mt-0.5 text-sm font-semibold text-zinc-900">
                      {value}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(value, label)}
                    className="ml-4 rounded-lg bg-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-300 transition"
                  >
                    {copied === label ? "Copied!" : "Copy"}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
              <div className="font-semibold">After transferring:</div>
              <p className="mt-1 text-emerald-800">
                Please send your name, amount and transfer reference to{" "}
                <a
                  href="mailto:info@sisofoundation.org"
                  className="font-semibold underline"
                >
                  info@sisofoundation.org
                </a>
                . We will send you an official acknowledgement letter.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
              <div className="font-semibold text-zinc-900">
                International Donors
              </div>
              <p className="mt-1">
                Use the SWIFT code{" "}
                <span className="font-mono font-semibold">BARCUGKX</span> for
                international wire transfers to our Absa Bank Uganda account.
                For USD, EUR, GBP or other currencies, please contact us at{" "}
                <a
                  href="mailto:info@sisofoundation.org"
                  className="font-semibold underline"
                >
                  info@sisofoundation.org
                </a>{" "}
                and we will provide full correspondent bank details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
