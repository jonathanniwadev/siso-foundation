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
    "SISO Foundation is a registered NGO in Uganda delivering health outreach, vocational skills training, child protection, human rights and environmental programmes across Western Uganda.",
};

const focus = [
  {
    title: "Health and Wellness",
    desc: "Community health outreach, maternal health, immunisation and school health services across six districts in Western Uganda.",
  },
  {
    title: "Skills Development",
    desc: "Vocational training and economic empowerment for youth from vulnerable communities — equipping graduates with tools, certification and startup support.",
  },
  {
    title: "Child Protection",
    desc: "Feeding programmes, welfare support and referral services for street-connected children and vulnerable families.",
  },
  {
    title: "Human Rights",
    desc: "Community sensitisation, advocacy and civic education promoting the rights of women, children and persons with disabilities.",
  },
  {
    title: "Environmental Conservation",
    desc: "Tree planting, conservation education and community-based environmental stewardship activities.",
  },
  {
    title: "Emergency Response",
    desc: "Humanitarian assistance for communities affected by food insecurity, displacement and other acute crises.",
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
                alt="SISO Foundation community health outreach in Uganda"
                width={800}
                height={900}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -right-4 top-6 hidden overflow-hidden rounded-2xl border-4 border-white shadow-xl md:block">
              <Image
                src="/hero/about-small.webp"
                alt="SISO Foundation vocational training and community programmes"
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
              Transforming lives across Western Uganda through health, skills
              and community empowerment
            </h1>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-base leading-8 text-slate-700">
                SISO Foundation is a registered Ugandan NGO headquartered in
                Murubaya, Kashasha, Rubanda District. We work to improve the
                health and socio-economic wellbeing of vulnerable youth and
                women through training, skilling, capacity building and
                community empowerment.
              </p>

              <div className="my-6 h-px bg-slate-200" />

              <p className="text-base leading-8 text-slate-700">
                In 2025, we reached over 7,950 people across six districts
                through integrated programmes in healthcare, child protection,
                skills development, human rights and environmental conservation.
                All our work is independently audited and transparently
                reported.
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
      {/* <HomeLatestUpdates /> */}
      <HomeBoardSection />
      <HomeDonateSection />

      {/* Focus Areas */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Our Programmes & Focus Areas
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Six integrated programme areas delivering measurable impact
              across Western Uganda.
            </p>
          </div>

          <Link
            href="/programs"
            className="hidden rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 md:inline-flex"
          >
            View Programmes
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            View Programmes
          </Link>
        </div>
      </section>
    </main>
  );
}
