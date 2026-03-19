import HeroCarousel from "@/components/home/HeroCarousel";
import HeroStats from "@/components/home/HeroStats";
import HomeLatestUpdates from "@/components/home/HomeLatestUpdates";
import HomePartnersSection from "@/components/home/HomePartnersSection";
import HomeBoardSection from "@/components/home/HomeBoardSection";
import HomeDonateSection from "@/components/home/HomeDonateSection";
import Link from "next/link";
import Image from "next/image";

const focus = [
  { title: "Reproductive Health", desc: "Education, awareness and support." },
  {
    title: "Skills Development",
    desc: "Practical training for youth livelihoods.",
  },
  {
    title: "Menstrual Hygiene",
    desc: "Dignity packs and school-based programs.",
  },
  {
    title: "Women Empowerment",
    desc: "Mentorship and community support systems.",
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
                src="/hero/about-main.jpeg"
                alt="SISO Foundation supporting communities"
                width={800}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="absolute -right-4 top-6 hidden overflow-hidden rounded-2xl border-4 border-white shadow-xl md:block">
              <Image
                src="/hero/about-small.jpeg"
                alt="Community support and giving"
                width={220}
                height={220}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
              About Us
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              We empower youth and communities through health, education, and
              opportunity
            </h2>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-base leading-8 text-slate-700">
                At SISO Foundation, we work to improve the lives of young
                people, women, and vulnerable communities through practical
                programs in reproductive health, menstrual hygiene, skills
                development, and empowerment. We believe that every person
                deserves dignity, support, and the chance to build a better
                future.
              </p>

              <div className="my-6 h-px bg-slate-200" />

              <p className="text-base leading-8 text-slate-700">
                Our work focuses on real community needs by combining awareness,
                support services, mentorship, and field outreach. Through
                partnerships and grassroots action, we aim to create lasting
                impact where it matters most.
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

      Focus Areas
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Our Focus Areas
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Practical programs that create real impact in communities.
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
