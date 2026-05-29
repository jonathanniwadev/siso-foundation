import Link from "next/link";
import CopyButton from "@/components/CopyButton";

export const metadata = {
  title: "Contact SISO Foundation | Uganda NGO",
  description:
    "Contact SISO Foundation, a registered NGO in Uganda. Reach us for partnerships, donations, and inquiries about our community programmes.",
};

const EMAIL = "info@sisofoundation.org";

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "SISO Foundation",
    url: "https://sisofoundation.org/contact",
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Murubaya, Kashasha",
      addressRegion: "Rubanda District",
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
              Contact
            </p>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Contact SISO Foundation
            </h1>

            <p className="mt-3 text-zinc-300 md:text-base">
              Reach out to SISO Foundation for partnerships, donations, or any
              inquiries about our community programmes across Western Uganda.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700"
              >
                Email us →
              </a>
            </div>

            <p className="mt-4 text-sm text-zinc-400">
              📍 Murubaya, Kashasha, Rubanda District, Western Uganda
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Send a message
            </h2>

            <p className="mt-2 text-sm text-slate-700">
              Fill in the form and we will respond as soon as possible.
            </p>

            <form
              action={`mailto:${EMAIL}`}
              method="POST"
              encType="text/plain"
              className="mt-6 space-y-5"
            >
              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Full name
                </label>
                <input
                  name="Full name"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Email
                </label>
                <input
                  name="Email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Subject
                </label>
                <select
                  name="Subject"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="">Select a subject</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Donation">Donation</option>
                  <option value="Programmes">Programmes</option>
                  <option value="Media">Media</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Message
                </label>
                <textarea
                  name="Message"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
              >
                Send message
              </button>

              <p className="text-center text-sm text-slate-600">
                Prefer to email directly?{" "}
                <a
                  className="font-semibold text-emerald-700 hover:text-emerald-800"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-4">

            {/* Email */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h3 className="text-lg font-extrabold text-slate-900">Email</h3>
              <p className="mt-2 text-sm text-slate-700">
                Reach us for partnerships, donations or general inquiries.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                We respond within 24–48 hours.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  {EMAIL}
                </a>
                <CopyButton
                  text={EMAIL}
                  label="Copy"
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                />
              </div>
            </div>

            {/* Address */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h3 className="text-lg font-extrabold text-slate-900">
                Office Address
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                SISO Foundation
              </p>
              <p className="text-sm text-slate-700">
                Murubaya, Kashasha, Rubanda District
              </p>
              <p className="text-sm text-slate-700">Western Uganda</p>
              <p className="mt-2 text-sm text-slate-700">
                P.O. Box 460368, Kabale, Uganda
              </p>
            </div>

            {/* Registration */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h3 className="text-lg font-extrabold text-slate-900">
                Registration Details
              </h3>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">URSB Reg. No.</span>
                  <span className="font-semibold">80034455001997</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">CBO Reg. No.</span>
                  <span className="font-semibold">RBD/921/CBO/096/2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Incorporated</span>
                  <span className="font-semibold">12th August 2024</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-lg font-extrabold text-slate-900">
                Quick links
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/donate"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Donate →
                </Link>
                <Link
                  href="/programs"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Programmes →
                </Link>
                <Link
                  href="/governance"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Governance →
                </Link>
                <Link
                  href="/certification"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Certification →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
