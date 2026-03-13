"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Login failed");

      router.push("/admin/donations");
    } catch (e: any) {
      setError(e?.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[70vh] bg-white">
      <div className="mx-auto max-w-md px-4 py-16">
        <h1 className="text-3xl font-extrabold text-slate-900">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-600">
          Restricted access — SISO Foundation administrators only.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {error && (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-800">
                Email
              </label>
              <input
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin email"
                type="email"
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-800">
                Password
              </label>
              <input
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type="password"
                required
              />
            </div>

            <button
              disabled={loading}
              className="w-full rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
            <button
              onClick={async () => {
                await fetch("/api/admin/logout", { method: "POST" });
                window.location.href = "/admin";
              }}
              className="rounded-lg border px-3 py-2 text-sm hover:bg-zinc-50"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
