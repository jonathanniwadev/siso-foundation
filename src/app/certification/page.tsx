import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certification | SISO Foundation Uganda",
  description:
    "SISO Foundation is a legally registered NGO in Uganda. View our registration details and contact us to verify our certification documents.",
};

export default function CertificationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "SISO Foundation",
    url: "https://sisofoundation.org/certification",
    description:
      "Certification and compliance page for SISO Foundation, a registered NGO in Uganda.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Murubaya, Kashasha",
      addressRegion: "Rubanda District",
      addressCountry: "UG",
    },
  };

  const registrations = [
    {
      badge: "National Registration",
      title: "URSB Registration Certificate",
      description:
        "SISO Foundation Ltd is incorporated and registered with the Uganda Registration Services Bureau (URSB) as a legal entity authorised to operate in Uganda.",
      detail: "Registration No. 80034455001997",
      date: "Incorporated: 12th August 2024",
    },
    {
      badge: "Community Registration",
      title: "CBO Certificate — Rubanda District",
      description:
        "SISO Foundation is registered as a Community Based Organisation with Rubanda District Local Government, authorising lawful community operations and local engagement.",
      detail: "CBO Reg. No. RBD/921/CBO/096/2024",
      date: "Registered: 30th September 2024",
    },
    {
      badge: "Governance Document",
      title: "Constitution",
      description:
        "SISO Foundation operates under a signed and stamped constitution that governs its leadership, accountability structures, membership and programme activities.",
      detail: "Available on request",
      date: "Contact us to request a copy",
    },
  ];

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
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
              SISO Foundation is a registered NGO in Uganda operating with
              lawful documentation, accountable governance and transparent
              operations. Our registration details are publicly available and
              all certification documents can be provided to partners and
              donors on request.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700"
              >
                Request documents →
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
              Legally registered
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Registered with URSB (national) and Rubanda District Local
              Government (community level) since 2024.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-extrabold text-slate-900">
              Governed with accountability
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Led by a six-member Board of Directors with legal, health and
              community expertise ensuring responsible oversight.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-extrabold text-slate-900">
              Transparent operations
            </div>
            <p className="mt-2 text-sm text-slate-600">
              We maintain clear documentation to support trust, verification
              and accountability to supporters, partners and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Registration details */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Registration and Compliance Details
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            SISO Foundation operates transparently under Ugandan law. All
            documents are available to partners, donors and government
            authorities on request.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {registrations.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900">
                {r.badge}
              </p>
              <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                {r.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{r.description}</p>
              <div className="mt-4 space-y-1">
                <p className="text-sm font-semibold text-slate-900">
                  {r.detail}
                </p>
                <p className="text-xs text-slate-500">{r.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration numbers */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h3 className="text-lg font-extrabold text-slate-900">
            Official Registration Numbers
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            These registration numbers can be verified directly with the
            relevant Ugandan government authorities.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "URSB Reg. No.", value: "80034455001997" },
              { label: "CBO Reg. No.", value: "RBD/921/CBO/096/2024" },
              { label: "Incorporated", value: "12th August 2024" },
              { label: "CBO Registered", value: "30th September 2024" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl bg-white border border-slate-200 p-4 shadow-sm"
              >
                <div className="text-xs font-medium text-slate-500">
                  {label}
                </div>
                <div className="mt-1 text-sm font-bold text-slate-900">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-lg font-extrabold text-slate-900">
            Need official verification or documentation?
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Partners, donors and government authorities may request copies of
            our registration certificates or constitution by contacting us
            directly at{" "}
            <a
              href="mailto:info@sisofoundation.org"
              className="font-semibold text-emerald-700 hover:text-emerald-800"
            >
              info@sisofoundation.org
            </a>
            . We respond within 24–48 hours.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700"
            >
              Contact us →
            </Link>
            <Link
              href="/governance"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              View Governance
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
