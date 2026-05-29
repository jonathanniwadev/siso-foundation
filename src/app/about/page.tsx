import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | SISO Foundation Uganda",
  description:
    "Learn about SISO Foundation, a registered NGO in Uganda delivering health outreach, skills development, child protection, human rights and environmental programmes across Western Uganda.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/about-main.webp"
            alt="SISO Foundation community programmes in Western Uganda"
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
              Transforming lives across Western Uganda through health, skills
              and community empowerment
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
              SISO Foundation is a registered Ugandan NGO working to improve
              the health and socio-economic wellbeing of vulnerable youth and
              communities through integrated programmes in healthcare, skills
              development, child protection, human rights and environmental
              conservation.
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
                View Programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
            Who we are
          </h2>
          <p className="mt-3 text-slate-600">
            SISO Foundation is a non-governmental organisation incorporated
            under the laws of Uganda on 12th August 2024 and registered as a
            Community Based Organisation with Rubanda District Local Government
            on 30th September 2024. We are headquartered in Murubaya, Kashasha,
            Rubanda District, Western Uganda.
          </p>
          <p className="mt-3 text-slate-600">
            The name SISO comes from the Ruyankole-Rukiga phrase meaning
            &ldquo;give and receive&rdquo; — reflecting our belief that genuine
            community development is built on mutual exchange, trust and shared
            responsibility.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>
            <p className="mt-3 text-slate-600">
              A society where people live healthier, dignified and fulfilling
              lives.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-3 text-slate-600">
              To contribute to the health and socio-economic wellbeing of
              vulnerable youth and women in Uganda through practical community
              programmes, empowerment initiatives and sustainable support
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
              These values guide how we serve communities, work with partners
              and remain accountable to supporters.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              title="Compassion"
              text="We serve with empathy, care and genuine respect for every person and community we work with."
            />
            <ValueCard
              title="Accountability"
              text="We take full responsibility for our decisions, actions and use of resources. All accounts are independently audited."
            />
            <ValueCard
              title="Right to Basic Needs"
              text="We believe every person has a fundamental right to health, education, safety and economic opportunity."
            />
            <ValueCard
              title="Transparency"
              text="We communicate openly and honestly about our work, finances and results with communities, donors and partners."
            />
            <ValueCard
              title="Integrity"
              text="We uphold the highest ethical standards in all our operations, partnerships and stewardship of donor funds."
            />
            <ValueCard
              title="Community Ownership"
              text="Our programmes are designed with and for communities — not imposed upon them. Local voices shape everything we do."
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
              In 2025, SISO Foundation implemented a range of community-based
              programmes aimed at improving the health, wellbeing and
              socio-economic conditions of vulnerable communities across Western
              Uganda. These programmes were implemented across the districts of
              Rubanda, Kabale, Kisoro, Kanungu, Kabarole and Mbarara, reaching
              over 1,500 beneficiaries during the reporting period.
            </p>
            <p className="mt-3 text-slate-600">
              Through partnerships with local organisations, community leaders
              and individual supporters, SISO Foundation continues to strengthen
              its impact through practical, community-driven interventions
              designed to respond to identified local needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/programs"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                View Programmes
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
              Our Six Programme Areas
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>
                  <b>Health and Wellness</b> — community health outreach,
                  immunisation and maternal health services across six
                  districts.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>
                  <b>Skills Development and Economic Empowerment</b> —
                  vocational training and livelihood support for vulnerable
                  youth.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>
                  <b>Child Protection and Feeding</b> — welfare support and
                  feeding programmes for street-connected children and
                  vulnerable families.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>
                  <b>Human Rights Protection</b> — community sensitisation,
                  advocacy and civic education.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>
                  <b>Environmental Conservation</b> — tree planting and
                  community-based environmental stewardship.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>
                  <b>Emergency Response</b> — humanitarian assistance for
                  communities affected by food insecurity and displacement.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Areas of Expansion */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Areas of Expansion
            </h2>
            <p className="mt-2 text-slate-600">
              SISO Foundation is actively seeking grants and partnerships to
              expand into the following areas. If you are interested in funding
              or partnering with us, please get in touch.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-dashed border-emerald-300 bg-white p-8">
              <h3 className="text-lg font-bold text-slate-900">
                Reproductive Health
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Community-based sexual and reproductive health and rights (SRHR)
                education and support services for youth and women across
                Western Uganda.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Fund this programme →
              </Link>
            </div>
            <div className="rounded-2xl border border-dashed border-emerald-300 bg-white p-8">
              <h3 className="text-lg font-bold text-slate-900">
                Menstrual Hygiene and Dignity
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                School-based menstrual hygiene management (MHM) programmes that
                support girls to stay in school, access menstrual products and
                receive dignity-centred health education.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Fund this programme →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Legal Status</h2>
          <p className="mt-3 text-sm text-slate-600">
            SISO Foundation is a legally registered organisation operating
            transparently under Ugandan law.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "URSB Reg. No.", value: "80034455001997" },
              { label: "CBO Reg. No.", value: "RBD/921/CBO/096/2024" },
              { label: "Incorporated", value: "12th August 2024" },
              { label: "Headquarters", value: "Rubanda District, Uganda" },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl bg-slate-50 p-4">
                <div className="text-xs font-medium text-slate-500">{label}</div>
                <div className="mt-1 text-sm font-semibold text-slate-900">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 pb-14 md:pb-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Support our mission
                </h2>
                <p className="mt-2 text-slate-600">
                  Your support helps SISO Foundation expand health programmes,
                  skills training and community empowerment initiatives across
                  Western Uganda.
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
