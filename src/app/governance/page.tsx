import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Learn about the governance of SISO Foundation, a nonprofit organization in Uganda committed to accountability, transparency, safeguarding, and responsible leadership.",
};

type Principle = { title: string; text: string };
type Doc = { title: string; description: string; href: string };

type Person = {
  name: string;
  title: string;
  bio: string;
  image?: string;
};

const principles: Principle[] = [
  {
    title: "Accountability",
    text: "We maintain clear records of decisions, activities, and use of funds, and we regularly review progress to ensure responsible stewardship.",
  },
  {
    title: "Transparency",
    text: "We communicate openly about our work, partnerships, and project updates so supporters, partners, and communities can trust our processes.",
  },
  {
    title: "Safeguarding",
    text: "We prioritize the safety, dignity, and wellbeing of participants, especially children, youth, women, and vulnerable communities.",
  },
  {
    title: "Ethical Partnerships",
    text: "We work with partners who align with our mission and values, and we seek to avoid conflicts of interest in all engagements.",
  },
];

const documents: Doc[] = [
  {
    title: "Constitution",
    description: "Core guiding document for SISO Foundation Ltd.",
    href: "/constitution",
  },
  {
    title: "Programs",
    description: "What we do and how we deliver support in communities.",
    href: "/programs",
  },
  {
    title: "Impact",
    description:
      "How support translates into outcomes and measurable progress.",
    href: "/impact",
  },
];

const board: Person[] = [
  {
    name: "Dr. Richard Obeti",
    title: "Board Chair",
    bio: "Dr. Richard Obeti is the District Health Officer of Bunyangabu District with extensive experience in public health leadership, health systems management, and community health programming. As Board Chair of SISO Foundation, he provides strategic guidance and oversight to ensure that the organization’s programs align with health priorities and create meaningful impact for vulnerable communities in Uganda.",
    image: "/team/alex.jpeg",
  },
  {
    name: "Mr. Nuwamanya Julius Makobore",
    title: "Board Secretary & Legal Advisor",
    bio: "An Advocate of the High Court of Uganda with over 10 years of experience in legal practice, governance, human rights, and litigation. He provides legal guidance, supports compliance, and strengthens governance structures to uphold the mission and accountability of SISO Foundation.",
    image: "/team/julius.jpeg",
  },
  {
    name: "Bernard Kahigi",
    title: "Advisor (Resource Mobilisation)",
    bio: "Bernard Kahigi holds a Postgraduate Diploma in Project Planning and brings over 20 years of experience managing health and child development programs in refugee and development settings. He provides strategic support in resource mobilization and program development.",
    image: "/team/bernard.jpeg",
  },
  {
    name: "Judith Kansiime, MPH",
    title: "Board Member",
    bio: "Judith Kansiime holds a Master of Public Health and brings over 15 years of experience in women’s health, sexual and reproductive health and rights, program leadership, and resource mobilization. She provides strategic oversight to help ensure SISO Foundation responds effectively to community health needs.",
    image: "/team/judith.jpeg",
  },
  {
    name: "Ms. Rebecca Atuheire",
    title: "Board Member (Health & Planning Committee)",
    bio: "Rebecca Atuheire is a Senior Nursing Officer with over 10 years of experience in health advocacy and reproductive health. She contributes to health planning and helps guide the development of programs that improve community wellbeing.",
    image: "/team/rebecca.jpeg",
  },
  {
    name: "Mbabazi Medard",
    title: "Board Member (Community / Village Chairperson)",
    bio: "Mbabazi Medard holds a Diploma in Teaching and represents community leadership within the board. He supports local coordination, accountability, and grassroots engagement.",
  },
];

const secretariat: Person[] = [
  {
    name: "Mr. Jonathan Niwagaba",
    title: "Founder & Executive Director",
    bio: "Jonathan Niwagaba is the Founder and Executive Director of SISO Foundation. With a background in Computer Science, he is passionate about using technology and innovation to strengthen community development, improve service delivery, and support the organization’s strategic leadership and partnerships.",
    image: "/team/jonathanniwagaba.jpeg",
  },
  {
    name: "Atukunda Brian",
    title: "Finance & Administration Officer",
    bio: "Atukunda Brian serves as the Finance and Administration Officer at SISO Foundation. He supports transparent financial management, budgeting, reporting, and administrative efficiency within the organization.",
    image: "/team/brian.jpeg",
  },
  {
    name: "Alinda Joshua Brian",
    title: "Programs & Research Officer",
    bio: "Alinda Joshua Brian supports program planning, research, data analysis, and program documentation to strengthen evidence-based interventions for vulnerable youth and women.",
    image: "/team/alindajoshua.jpeg",
  },
  {
    name: "Diana Kyarikunda",
    title: "Secretary",
    bio: "Diana Kyarikunda supports administrative coordination, documentation, and communication. She helps maintain records and ensures smooth coordination between the board, secretariat, and program teams.",
    image: "/team/dianah.jpeg",
  },
  {
    name: "Sasha Ana Aheebwomugisha",
    title: "Communications & Partnerships Officer",
    bio: "Sasha Ana Aheebwomugisha supports communications, partnerships, digital visibility, and stakeholder engagement. She helps strengthen outreach and collaboration using technology and digital platforms.",
    image: "/team/sasha.jpeg",
  },
  {
    name: "Ssukwe Stuart",
    title: "Monitoring & Evaluation Officer",
    bio: "Ssukwe Stuart supports monitoring and evaluation, tracks program activities, and helps measure outcomes and impact to strengthen accountability and learning across the organization.",
    image: "/team/stuart.jpeg",
  },
  {
    name: "Naomi Beinomugisha",
    title: "Program Officer",
    bio: "Naomi Beinomugisha supports the planning and implementation of community-based programs. She works closely with communities and partners to coordinate activities and improve delivery of health, skills, and empowerment initiatives.",
    image: "/team/naomi.jpeg",
  },
];

function PeopleGrid({ items }: { items: Person[] }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <div
          key={p.name}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-emerald-100 ring-1 ring-emerald-200">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm font-bold text-emerald-700">
                  {p.name.charAt(0)}
                </div>
              )}
            </div>

            <div>
              <div className="text-base font-extrabold text-slate-900">
                {p.name}
              </div>
              <div className="mt-1 text-sm font-semibold text-emerald-700">
                {p.title}
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">{p.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default function GovernancePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "SISO Foundation",
    url: "https://sisofoundation.org/governance",
    description:
      "Governance page for SISO Foundation, a nonprofit organization in Uganda committed to accountability, transparency, safeguarding, and responsible leadership.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "UG",
    },
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-zinc-900 via-black to-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200">
              Governance
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Governance and accountability at SISO Foundation
            </h1>

            <p className="mt-4 text-zinc-300 md:text-lg">
              SISO Foundation is a nonprofit organization in Uganda committed to
              responsible leadership, clear oversight, transparency, and ethical
              stewardship in how we serve communities and work with supporters.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700"
              >
                Contact the team →
              </Link>

              <Link
                href="/donate"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        {/* Principles */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Our governance principles
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            These principles guide our leadership, decision-making, management,
            and reporting as we work with communities, donors, and partners in
            Uganda.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-lg font-extrabold text-slate-900">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Oversight */}
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-extrabold text-slate-900">
              Leadership & oversight
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Administrative and strategic decisions are made with oversight,
              documented processes, and regular review to ensure alignment with
              our mission and community benefit.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-extrabold text-slate-900">
              Financial stewardship
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Donations and organizational resources are managed with an
              emphasis on accurate records, accountability, responsible use, and
              transparent reporting.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-extrabold text-slate-900">
              Risk & safeguarding
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              We promote safe practices, respectful engagement, and careful
              handling of sensitive information to protect participants and
              vulnerable communities.
            </p>
          </div>
        </div>

        {/* Documents */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h3 className="text-lg font-extrabold text-slate-900">
            Key documents and related pages
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Explore the pages that explain how SISO Foundation is structured,
            what guides our work, and how support translates into impact.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {documents.map((d) => (
              <Link
                key={d.title}
                href={d.href}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:bg-white"
              >
                <div className="text-sm font-extrabold text-slate-900">
                  {d.title}
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  {d.description}
                </div>
                <div className="mt-4 text-sm font-semibold text-emerald-700">
                  Open →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Board */}
        <div className="mt-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Board of Directors
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The Board of Directors provides strategic leadership, governance,
              oversight, and accountability for SISO Foundation.
            </p>
          </div>

          <PeopleGrid items={board} />
        </div>

        {/* Secretariat */}
        <div className="mt-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Secretariat
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The secretariat supports day-to-day operations, program delivery,
              administration, communication, and organizational learning.
            </p>
          </div>

          <PeopleGrid items={secretariat} />
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Want to partner with SISO Foundation?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Reach out and we’ll discuss shared goals, accountability,
                transparency, and how we can work together to create impact in
                Uganda.
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
                href="/about"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                About SISO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
