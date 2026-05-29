import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Programmes | SISO Foundation Uganda",
  description:
    "Explore SISO Foundation's community programmes in Uganda — health outreach, skills development, child protection, human rights, environmental conservation and emergency response across Western Uganda.",
};

type Program = {
  title: string;
  description: string;
  tags: string[];
  stat?: string;
  statLabel?: string;
};

const programs: Program[] = [
  {
    title: "Health and Wellness",
    description:
      "Community health outreach, maternal and child health services, immunisation campaigns and school health programmes delivered across six districts in Western Uganda. In 2025 we supported over 400 patients and immunised 320 children against preventable diseases.",
    tags: ["Health", "Outreach", "Immunisation"],
    stat: "400+",
    statLabel: "Patients Supported",
  },
  {
    title: "Skills Development and Economic Empowerment",
    description:
      "Vocational and practical skills training for youth from vulnerable communities. Graduates receive tools, certification and startup support to enable them to earn a sustainable income. In 2025 we trained 40 youth through the Skills for Development Project in partnership with Youth First Uganda.",
    tags: ["Skills", "Youth", "Livelihoods"],
    stat: "40+",
    statLabel: "Youth Trained",
  },
  {
    title: "Child Protection and Feeding",
    description:
      "Welfare support, feeding programmes and referral services for street-connected children and vulnerable families. In 2025 we supported approximately 100 street-connected children through feeding and protection interventions in partnership with Lords Children and Elderly Compassion.",
    tags: ["Children", "Protection", "Feeding"],
    stat: "100+",
    statLabel: "Children Supported",
  },
  {
    title: "Human Rights Protection",
    description:
      "Community sensitisation, advocacy and civic education promoting the rights of women, children and persons with disabilities. We work with local leaders and community structures to raise awareness, address violations and strengthen access to justice.",
    tags: ["Human Rights", "Advocacy", "Community"],
  },
  {
    title: "Environmental Conservation",
    description:
      "Tree planting, conservation education and community-based environmental stewardship activities across Western Uganda. We work with communities to protect natural resources and promote sustainable land use practices.",
    tags: ["Environment", "Conservation", "Sustainability"],
  },
  {
    title: "Emergency Response",
    description:
      "Humanitarian assistance for communities affected by food insecurity, displacement and other acute crises. In 2025 we delivered emergency feeding support in Kisoro District, responding to identified food insecurity among vulnerable families.",
    tags: ["Emergency", "Humanitarian", "Food Security"],
  },
];

const expansion = [
  {
    title: "Reproductive Health",
    description:
      "SISO Foundation is actively seeking grants and partnerships to expand into reproductive health education and community-based sexual and reproductive health and rights (SRHR) programmes across Western Uganda.",
    tags: ["SRHR", "Health", "Future"],
  },
  {
    title: "Menstrual Hygiene and Dignity",
    description:
      "We are working to secure funding for menstrual hygiene management (MHM) programmes that will support girls to stay in school, access menstrual products and receive dignity-centred health education.",
    tags: ["MHM", "Girls", "Education"],
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/programs-hero.webp"
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
              Programmes
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Community programmes creating real impact in Uganda
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
              SISO Foundation delivers six integrated community programmes
              across Western Uganda — improving health, building skills,
              protecting children and strengthening resilience among vulnerable
              communities.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700"
              >
                Support a Programme →
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
            Our Programmes and Focus Areas
          </h2>
          <p className="mt-3 text-slate-600">
            In 2025, SISO Foundation implemented six community-based programmes
            across the districts of Rubanda, Kabale, Kisoro, Kanungu, Kabarole
            and Mbarara, reaching over 1,500 beneficiaries. All programmes are
            independently audited and transparently reported.
          </p>
        </div>

        {/* Programme Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-1.5 w-14 rounded-full bg-emerald-600" />

              <div className="mt-5 text-lg font-extrabold text-slate-900">
                {p.title}
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {p.description}
              </p>

              {p.stat && (
                <div className="mt-5 rounded-xl bg-emerald-50 px-4 py-3">
                  <div className="text-2xl font-extrabold text-emerald-700">
                    {p.stat}
                  </div>
                  <div className="text-xs font-medium text-emerald-600">
                    {p.statLabel}
                  </div>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Get involved →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Areas of Expansion */}
        <div className="mt-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Areas of Expansion
            </h2>
            <p className="mt-3 text-slate-600">
              SISO Foundation is actively seeking grants and partnerships to
              expand into the following programme areas. If you are interested
              in funding or partnering with us, please get in touch.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {expansion.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-dashed border-emerald-300 bg-emerald-50 p-7"
              >
                <div className="h-1.5 w-14 rounded-full bg-emerald-300" />

                <div className="mt-5 text-lg font-extrabold text-slate-900">
                  {p.title}
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-emerald-200 bg-white px-2.5 py-1 text-xs font-semibold text-emerald-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    Fund this programme →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">
                Want to sponsor a specific programme?
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Reach out and we will share activity plans, timelines, budgets
                and exactly how your support will be used — clearly and
                transparently.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Contact us
              </Link>

              <Link
                href="/donate"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Donate now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
