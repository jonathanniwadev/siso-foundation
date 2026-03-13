import Link from "next/link";

type Doc = {
  title: string;
  description: string;
  fileUrl: string;
  badge: string;
};

const docs: Doc[] = [
  {
    title: "Registration Certificate",
    description:
      "Official proof that SISO Foundation LTD is legally registered and permitted to operate.",
    fileUrl: "/certification/registration-certificate.pdf",
    badge: "Government Registration",
  },
  {
    title: "CBO Certificate",
    description:
      "Community-Based Organization documentation supporting our lawful community operations.",
    fileUrl: "/certification/cbo-certificate.pdf",
    badge: "CBO Certification",
  },
  {
    title: "Stamped Constitution",
    description:
      "Signed and stamped constitution outlining governance, leadership, and accountability structures.",
    fileUrl: "/certification/stamped-constitution.pdf",
    badge: "Stamped Document",
  },
];

export const metadata = {
  title: "Certification | SISO Foundation",
  description:
    "View official SISO Foundation certification documents and proof of lawful registration.",
};

export default function CertificationPage() {
  return (
    <main className="bg-white">
      {/* Small Hero */}
      <section className="bg-gradient-to-b from-zinc-900 via-black to-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200">
              Compliance & Certification
            </p>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Fully registered & certified in Uganda
            </h1>

            <p className="mt-3 text-zinc-300 md:text-base">
              SISO Foundation operates with proper documentation and accountable
              governance. Below are our key official documents for verification.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700"
              >
                Verify with us →
              </Link>

              <Link
                href="/governance"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Governance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-extrabold text-slate-900">
              Legal registration
            </div>
            <p className="mt-2 text-sm text-slate-600">
              We are properly registered and authorized to operate.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-extrabold text-slate-900">
              Governance & accountability
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Guided by a board, secretariat, and documented processes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-extrabold text-slate-900">
              Transparent operations
            </div>
            <p className="mt-2 text-sm text-slate-600">
              We maintain clear documentation for partners and supporters.
            </p>
          </div>
        </div>
      </section>

      {/* Docs */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Certification documents
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            View or download official documents for verification.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {docs.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900">
                {d.badge}
              </p>

              <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                {d.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">{d.description}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={d.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  View →
                </a>

                <a
                  href={d.fileUrl}
                  download
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h3 className="text-lg font-extrabold text-slate-900">
            Need official verification?
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Contact us and we can share additional verification details for
            partners, donors, and stakeholders.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700"
            >
              Contact us →
            </Link>

            <Link
              href="/donate"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
