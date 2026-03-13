import Link from "next/link";
import Image from "next/image";

type Program = {
  title: string;
  description: string;
  tags: string[];
};

const programs: Program[] = [
  {
    title: "Reproductive Health & SRHR",
    description:
      "Community education, awareness, and support to improve reproductive health outcomes for youth and women.",
    tags: ["Health", "SRHR", "Community"],
  },
  {
    title: "Skills Development",
    description:
      "Practical skills and mentorship that empower youth with employability and livelihood opportunities.",
    tags: ["Training", "Youth", "Livelihoods"],
  },
  {
    title: "Menstrual Hygiene & Dignity",
    description:
      "Support for menstrual health education and dignity initiatives that keep girls confident and in school.",
    tags: ["MHM", "Dignity", "Education"],
  },
  {
    title: "Women Empowerment",
    description:
      "Programs that strengthen women’s economic resilience through empowerment and community support.",
    tags: ["Women", "Empowerment", "Resilience"],
  },
  {
    title: "Community Outreach",
    description:
      "Targeted outreach activities in vulnerable communities to identify needs and deliver timely support.",
    tags: ["Outreach", "Support", "Impact"],
  },
  {
    title: "Youth Mentorship & Leadership",
    description:
      "Mentorship and leadership development that helps youth become responsible, purpose-driven community leaders.",
    tags: ["Mentorship", "Leadership", "Youth"],
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/programs-hero.jpeg"
            alt="SISO Foundation programs in communities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
              Programs
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Practical programs for real community impact
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
              We deliver community-centered initiatives that improve health,
              expand skills, promote dignity, and strengthen resilience among
              vulnerable youth and women in Uganda.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700"
              >
                Support a Program →
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
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
            Areas of Focus
          </h2>
          <p className="mt-3 text-slate-600">
            Our programs are designed around real community needs. We combine
            awareness, practical support, mentoring, and empowerment to improve
            lives and create sustainable change.
          </p>
        </div>

        {/* Cards */}
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

        {/* Sponsor CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">
                Want to sponsor a specific activity?
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Reach out and we’ll share activity plans, timelines, budgets,
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
