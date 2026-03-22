import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SISO Foundation, a nonprofit organization in Uganda working to empower youth and communities through reproductive health, skills development, menstrual hygiene, and women empowerment programs.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/about-main.jpeg"
            alt="SISO Foundation working with communities in Uganda"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
              About SISO Foundation
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Empowering youth and communities in Uganda through health,
              dignity, and opportunity
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
              SISO Foundation is a nonprofit organization in Uganda working with
              vulnerable youths and women through reproductive health programs,
              skills development, menstrual hygiene support, and empowerment
              initiatives that create practical and lasting change.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700"
              >
                Donate Now →
              </Link>

              <Link
                href="/programs"
                className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-8">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
            Who we are
          </h2>

          <p className="mt-2 text-slate-600">
            We exist to improve the health and socio-economic wellbeing of
            vulnerable youths and women in Uganda through community-centered
            nonprofit programs, partnerships, and empowerment initiatives.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>

            <p className="mt-3 text-slate-600">
              A society where people live healthier, dignified, and fulfilling
              lives.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>

            <p className="mt-3 text-slate-600">
              To contribute to the health and socio-economic wellbeing of
              vulnerable youths and women in Uganda through practical community
              programs, empowerment initiatives, and sustainable support
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Our Core Values
            </h2>

            <p className="mt-2 text-slate-600">
              These values guide how we serve communities, work with partners,
              and remain accountable to supporters.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              title="Compassion"
              text="We serve with empathy, care, and respect for every person."
            />

            <ValueCard
              title="Accountability"
              text="We take responsibility for our decisions and use of resources."
            />

            <ValueCard
              title="Transparency"
              text="We communicate openly and honestly with communities and partners."
            />

            <ValueCard
              title="Integrity"
              text="We uphold ethical conduct and always do what is right."
            />

            <ValueCard
              title="Dignity"
              text="We believe every person deserves respect and opportunity."
            />

            <ValueCard
              title="Community First"
              text="Our programs are designed around real community needs."
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              What We Do
            </h2>

            <p className="mt-3 text-slate-600">
              SISO Foundation supports vulnerable communities in Uganda through
              reproductive health programs, youth skills development, women
              empowerment, and community-based solutions that promote resilience
              and dignity.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/impact"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                See Our Impact
              </Link>

              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              Programs & Focus Areas
            </h3>

            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                <span>
                  <b>Health & reproductive health</b> — improving access,
                  awareness, and support for vulnerable communities in Uganda.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                <span>
                  <b>Skills development</b> — empowering youth with practical
                  training and livelihood opportunities.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                <span>
                  <b>Women empowerment</b> — strengthening dignity, confidence,
                  and livelihoods for women and girls.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                <span>
                  <b>Community resilience</b> — building sustainable,
                  community-led solutions for long-term impact.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Support our mission
                </h2>

                <p className="mt-2 text-slate-600">
                  Your support helps us expand health programs, skills training,
                  and empowerment initiatives for vulnerable communities in
                  Uganda.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/donate"
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700"
                >
                  Donate Now →
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-base font-bold text-slate-900">{title}</div>
      <div className="mt-2 text-sm leading-7 text-slate-600">{text}</div>
    </div>
  );
}
