export const dynamic = "force-dynamic";

type Donation = {
  id: string;
  created_at: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  amount: number;
  currency: string;
  status: string;
  reference: string;
};

async function getDonations(): Promise<Donation[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/admin/donations`,
    {
      cache: "no-store",
    },
  );

  // If NEXT_PUBLIC_BASE_URL isn't set in dev, fallback to relative in clientless env:
  // We'll also support relative request by using Next internal fetch below in API itself.
  if (!res.ok) return [];
  const data = await res.json();
  return data?.donations ?? [];
}

export default async function AdminDonationsPage() {
  // In dev, NEXT_PUBLIC_BASE_URL may be empty; so we'll call the API relative
  // by directly using fetch('/api/admin/donations') which works on server in Next.
  const res = await fetch("http://localhost:3000/api/admin/donations", {
    cache: "no-store",
  }).catch(() => null);

  const donations: Donation[] =
    (await res?.json().catch(() => null))?.donations ?? [];

  return (
    <main className="min-h-[70vh] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Donations
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              View donation requests saved from the Donate form.
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Donor</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Reference</th>
              </tr>
            </thead>
            <tbody>
              {donations.length === 0 ? (
                <tr>
                  <td className="px-4 py-6 text-slate-500" colSpan={5}>
                    No donations yet.
                  </td>
                </tr>
              ) : (
                donations.map((d) => (
                  <tr key={d.id} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-700">
                      {new Date(d.created_at).toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-slate-900">
                        {d.name || "Anonymous"}
                      </div>
                      <div className="text-xs text-slate-500">
                        {d.email || "—"} • {d.phone || "—"}
                      </div>
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {d.currency} {d.amount}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700">
                        {d.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-slate-700">
                      {d.reference}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Next step: Add actions to mark “paid/failed” after Flutterwave
          callback.
        </p>
      </div>
    </main>
  );
}
