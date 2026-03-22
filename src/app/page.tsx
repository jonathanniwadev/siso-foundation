import type { Metadata } from "next";
import HeroCarousel from "@/components/home/HeroCarousel";
import HeroStats from "@/components/home/HeroStats";
import HomeLatestUpdates from "@/components/home/HomeLatestUpdates";
import HomePartnersSection from "@/components/home/HomePartnersSection";
import HomeBoardSection from "@/components/home/HomeBoardSection";
import HomeDonateSection from "@/components/home/HomeDonateSection";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description:
    "SISO Foundation is a nonprofit organization in Uganda empowering youth and communities through reproductive health, menstrual hygiene, women empowerment, and skills development programs.",
};

const focus = [
  {
    title: "Reproductive Health",
    desc: "Education, awareness, and support for reproductive health in Uganda.",
  },
  {
    title: "Skills Development",
    desc: "Practical training and livelihood support for youth and vulnerable communities.",
  },
  {
    title: "Menstrual Hygiene",
    desc: "Dignity support, school-based initiatives, and menstrual health awareness.",
  },
  {
    title: "Women Empowerment",
    desc: "Mentorship, support systems, and opportunities that strengthen women and families.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroCarousel />
      <HeroStats />

      {/* About Us section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/hero/about-main.webp"
                alt="SISO Foundation supporting communities in Uganda"
                width={800}
                height={900}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -right-4 top-6 hidden overflow-hidden rounded-2xl border-4 border-white shadow-xl md:block">
              <Image
                src="/hero/about-small.webp"
                alt="Community outreach and support by SISO Foundation"
                width={220}
                height={220}
                className="h-auto w-full object-cover"
                sizes="220px"
              />
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
              About Us
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Empowering youth and communities in Uganda through health,
              dignity, and opportunity
            </h1>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-base leading-8 text-slate-700">
                SISO Foundation is a Uganda-based nonprofit organization working
                to improve the lives of young people, women, and vulnerable
                communities through practical programs in reproductive health,
                menstrual hygiene, skills development, and empowerment.
              </p>

              <div className="my-6 h-px bg-slate-200" />

              <p className="text-base leading-8 text-slate-700">
                Our work responds to real community needs through awareness,
                support services, mentorship, and grassroots outreach. Through
                partnerships and local action, we aim to create lasting impact
                where it matters most.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
              >
                Read More
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomePartnersSection />
      <HomeLatestUpdates />
      <HomeBoardSection />
      <HomeDonateSection />

      {/* Focus Areas */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Our Programs & Focus Areas
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our key programs in Uganda focus on health, skills development,
              and empowering vulnerable communities.
            </p>
          </div>

          <Link
            href="/programs"
            className="hidden rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 md:inline-flex"
          >
            View Programs
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {focus.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link
            href="/programs"
            className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            View Programs
          </Link>
        </div>
      </section>
    </main>
  );
}
