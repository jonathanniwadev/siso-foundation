"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type DonateForm = {
  name: string;
  email: string;
  phone: string;
  amount: string;
  currency: string;
  message: string;
};

const CURRENCIES = ["UGX", "USD", "KES", "EUR", "GBP"] as const;

export default function DonateClient() {
  const searchParams = useSearchParams();

  const [form, setForm] = useState<DonateForm>({
    name: "",
    email: "",
    phone: "",
    amount: "",
    currency: "UGX",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const paymentStatus = searchParams.get("payment");
  const paymentReference = searchParams.get("reference");

  const amountNumber = useMemo(() => Number(form.amount), [form.amount]);
  const isAmountValid =
    form.amount.trim().length > 0 &&
    !Number.isNaN(amountNumber) &&
    amountNumber > 0;

  function onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    if (!isAmountValid) {
      setErrorMsg("Please enter a valid amount greater than 0.");
      return;
    }

    if (!form.currency) {
      setErrorMsg("Please select a currency.");
      return;
    }

    if (!form.email.trim() && !form.phone.trim()) {
      setErrorMsg("Please provide at least an email or phone number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim() || null,
          email: form.email.trim() || null,
          phone: form.phone.trim() || null,
          amount: amountNumber,
          currency: form.currency,
          message: form.message.trim() || null,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        throw new Error(
          data?.error || `Failed to create donation (HTTP ${res.status}).`,
        );
      }

      if (!data?.payment_url) {
        throw new Error("Payment link was not returned.");
      }

      window.location.href = data.payment_url;
    } catch (err: any) {
      setErrorMsg(err?.message ?? "Network error. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-black via-zinc-950 to-zinc-900 py-14">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="pt-2">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Donate
            </h1>

            <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-300">
              Your support helps SISO Foundation deliver reproductive health
              programs, skills development, and community empowerment across
              Uganda.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-zinc-200">
              <div className="text-sm font-semibold text-white">
                What happens next?
              </div>

              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-300">
                <li>You submit your donation details.</li>
                <li>We create a donation reference in our system.</li>
                <li>You are redirected securely to payment.</li>
                <li>
                  After payment, your donation status is updated automatically.
                </li>
              </ol>

              <p className="mt-3 text-xs text-zinc-400">
                Donations are processed securely through our payment partner.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/10 md:p-8">
            {paymentStatus === "completed" && (
              <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                <div className="font-semibold">
                  Thank you. Your donation was completed successfully.
                </div>
                {paymentReference && (
                  <div className="mt-1">
                    Reference:{" "}
                    <span className="font-mono">{paymentReference}</span>
                  </div>
                )}
              </div>
            )}

            {paymentStatus === "failed" && (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                Payment failed. Please try again.
              </div>
            )}

            {paymentStatus === "reversed" && (
              <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                This payment was reversed.
              </div>
            )}

            {paymentStatus === "invalid" && (
              <div className="mb-4 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-800">
                Payment was not completed.
              </div>
            )}

            {paymentStatus === "cancelled" && (
              <div className="mb-4 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-800">
                Payment was cancelled before completion.
              </div>
            )}

            {paymentStatus === "error" && (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                We could not confirm that payment. Please contact support if
                money was deducted.
              </div>
            )}

            {errorMsg && (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-zinc-900">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                    placeholder="Optional"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-zinc-900">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                    placeholder="+256 7xx xxx xxx"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-900">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                  placeholder="Optional"
                  autoComplete="email"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-zinc-900">
                    Amount <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="amount"
                    value={form.amount}
                    onChange={onChange}
                    inputMode="decimal"
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                    placeholder="e.g. 50000"
                    required
                  />
                  {!isAmountValid && form.amount.length > 0 && (
                    <p className="mt-2 text-xs text-red-600">
                      Enter a number greater than 0.
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-zinc-900">
                    Currency <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="currency"
                    value={form.currency}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                    required
                  >
                    {CURRENCIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-900">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                  placeholder="Optional message…"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Redirecting..." : "Continue to Secure Payment"}
              </button>

              <p className="text-center text-xs text-zinc-500">
                Payments are processed securely by our payment partner.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
