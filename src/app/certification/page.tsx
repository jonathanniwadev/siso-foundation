import type { Metadata } from "next";
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
      "Official proof that SISO Foundation Ltd is legally registered and permitted to operate in Uganda.",
    fileUrl: "/certification/registration-certificate.pdf",
    badge: "Government Registration",
  },
  {
    title: "CBO Certificate",
    description:
      "Community-Based Organization documentation supporting our lawful community operations and local engagement.",
    fileUrl: "/certification/cbo-certificate.pdf",
    badge: "CBO Certification",
  },
  {
    title: "Stamped Constitution",
    description:
      "Signed and stamped constitution outlining governance, leadership, accountability, and organizational structure.",
    fileUrl: "/certification/stamped-constitution.pdf",
    badge: "Stamped Document",
  },
];

export const metadata: Metadata = {
  title: "Certification",
  description:
    "View official SISO Foundation certification documents, registration records, and proof of lawful nonprofit operations in Uganda.",
};

export default function CertificationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "SISO Foundation",
    url: "https://sisofoundation.org/certification",
    description:
      "Certification and compliance page for SISO Foundation, a nonprofit organization in Uganda.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "UG",
    },
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Small Hero */}
      <section className="bg-gradient-to-b from-zinc-900 via-black to-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200">
              Compliance & Certification
            </p>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Certified and legally registered in Uganda
            </h1>

            <p className="mt-3 text-zinc-300 md:text-base">
              SISO Foundation is a nonprofit organization in Uganda operating
              with proper documentation, lawful registration, and accountable
              governance. Below are key official documents for verification.
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

            <p className="mt-4 text-sm text-zinc-400">
              Official documents available for partners, donors, and the public
              for verification.
            </p>
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
              We are properly registered and authorized to operate as a
              nonprofit organization in Uganda.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-extrabold text-slate-900">
              Governance & accountability
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Our work is guided by governance structures, documented processes,
              and responsible oversight.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-extrabold text-slate-900">
              Transparent operations
            </div>
            <p className="mt-2 text-sm text-slate-600">
              We maintain clear documentation to support trust, verification,
              and accountability to supporters and partners.
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
            View or download official SISO Foundation documents for verification
            and compliance review.
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
            Contact us and we can share additional verification details with
            partners and donors when needed.
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
