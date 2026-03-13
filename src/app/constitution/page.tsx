import Link from "next/link";

export const metadata = {
  title: "Constitution | SISO Foundation",
  description: "Read and download the SISO Foundation constitution.",
};

export default function ConstitutionPage() {
  const pdfUrl = "/docs/siso-constitution.pdf";

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-zinc-900 via-black to-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200">
              Governance Document
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              SISO Foundation Constitution
            </h1>

            <p className="mt-4 text-zinc-300 md:text-lg">
              This document outlines our governance structure, leadership,
              membership, decision-making, accountability, and operational
              guidelines.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700"
              >
                View PDF →
              </a>

              <a
                href={pdfUrl}
                download
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Download
              </a>

              <Link
                href="/governance"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Back to Governance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="flex items-center justify-between gap-3 px-2 pb-3">
            <div className="text-sm font-semibold text-slate-900">
              Preview (PDF)
            </div>
            <div className="flex gap-2">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50"
              >
                Open in new tab
              </a>
              <a
                href={pdfUrl}
                download
                className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
              >
                Download
              </a>
            </div>
          </div>

          <iframe
            src={pdfUrl}
            className="h-[75vh] w-full rounded-xl border border-slate-200"
            title="SISO Constitution PDF"
          />
        </div>

        <p className="mt-4 text-xs text-slate-500">
          If the preview doesn’t load on some phones, use “Open in new tab” or
          “Download”.
        </p>
      </section>
    </main>
  );
}
