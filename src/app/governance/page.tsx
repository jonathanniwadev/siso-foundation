// src/app/governance/page.tsx
import Link from "next/link";
import Image from "next/image";

type Principle = { title: string; text: string };
type Doc = { title: string; description: string; href: string };

type Person = {
  name: string;
  title: string; // role
  bio: string;
  image?: string;
};

const principles: Principle[] = [
  {
    title: "Accountability",
    text: "We keep clear records of decisions, activities, and funds used, and we review progress regularly.",
  },
  {
    title: "Transparency",
    text: "We communicate openly about our work, partners, and project updates so supporters can trust the process.",
  },
  {
    title: "Safeguarding",
    text: "We prioritize the safety and dignity of participants—especially children and vulnerable communities.",
  },
  {
    title: "Ethical partnerships",
    text: "We work with partners who align with our mission and values, and we avoid conflicts of interest.",
  },
];

const documents: Doc[] = [
  {
    title: "Constitution",
    description: "Core guiding document for SISO Foundation LTD.",
    href: "/constitution",
  },
  {
    title: "Programs",
    description: "What we do and how we deliver support in communities.",
    href: "/programs",
  },
  {
    title: "Impact",
    description: "How support translates into outcomes and progress.",
    href: "/impact",
  },
];

// ✅ BOARD (use the improved list you gave)
// NOTE: You earlier said Sasha can be removed from board, so I removed her here.
const board: Person[] = [
  {
    name: "Dr. Richard Obeti",
    title: "Board Chair",
    bio: "Dr. Richard Obeti is the District Health Officer (DHO) of Bunyangabu District with extensive experience in public health leadership, health systems management and community health programming. He has worked closely with government and development partners to strengthen health service delivery, disease prevention, and community health initiatives. As Board Chair of SISO Foundation, he provides strategic guidance and oversight, ensuring that the organization’s programs align with national health priorities and deliver meaningful impact for vulnerable communities.",
    image: "/team/alex.jpeg",
  },

  {
    name: "Mr. Nuwamanya Julius Makobore",
    title: "Board Secretary & Legal Advisor",
    bio: "Holds a Bachelor of Laws and a Postgraduate Diploma in Legal Practice from the Law Development Centre. He is an Advocate of the High Court of Uganda with over 10 years of experience in legal practice, specializing in human rights, governance and litigation. As Board Secretary and Legal Advisor for SISO Foundation, he provides legal guidance ensures compliance with regulations and supports governance structures to uphold the organization’s mission and accountability.",
    image: "/team/julius.jpeg",
  },
  {
    name: "Bernard Kahigi",
    title: " Advisor (Resource Mobilisation)",
    bio: "Holds a Postgraduate Diploma in Project Planning. Bernard brings over 20 years of experience managing health and child development programs in refugee and development settings. He provides strategic support in resource mobilization and program development to strengthen the impact of SISO Foundation’s initiatives.",
    image: "/team/bernard.jpeg",
  },
  {
    name: "Judith Kansiime, MPH",
    title: "Board Member",
    bio: "Holds a Master of Public Health, a Bachelor’s degree in Demography, and a Diploma in Clinical Medicine. She is the Executive Director of the Centre for Relief Aid and Development Uganda and brings over 15 years of experience in women’s health, sexual and reproductive health and rights (SRHR), program leadership, and resource mobilization. As a Board Member of SISO Foundation, Judith provides strategic guidance and oversight to ensure that the organization’s programs effectively address the health needs of vulnerable communities and promote sustainable development.",
    image: "/team/judith.jpeg",
  },

  {
    name: "Ms. Rebecca Atuheire",
    title: "Board Member (Health & Planning Committee)",
    bio: "Rebecca Atuheire is a Senior Nursing Officer with over 10 years of experience in health advocacy and reproductive health. She contributes her expertise to the Health and Planning Committee of the board, supporting the development of programs that improve health outcomes and community wellbeing.",
    image: "/team/rebecca.jpeg",
  },

  {
    name: "Mbabazi Medard",
    title: "Board Member (Community / Village Chairperson)",
    bio: "Diploma in Teaching. Represents community leadership and supports local coordination and accountability.",
  },
];

// ✅ SECRETARIAT (the roles you gave)
const secretariat: Person[] = [
  {
    name: "Mr. Jonathan Niwagaba",
    title: "Founder & Executive Director",
    bio: "Jonathan Niwagaba is the Founder and Executive Director of SISO Foundation. He holds a Bachelor’s degree in Computer Science and is passionate about using technology and innovation to advance social impact. He has experience designing digital solutions and applications that support community development, improve service delivery, and strengthen organizational efficiency. At SISO Foundation, he provides strategic leadership, oversees program development, and builds partnerships that support the organization’s mission of improving the health and socio-economic wellbeing of vulnerable youth and women in Uganda.",
    image: "/team/jonathanniwagaba.jpeg",
  },
  {
    name: "Atukunda Brian",
    title: "Finance & Administration Officer",
    bio: "Atukunda Brian serves as the Finance and Administration Officer at SISO Foundation. He holds a Bachelor of Commerce and has professional experience in accounting, financial reporting, and administrative coordination. With practical experience in accounts management, tax compliance, and financial documentation, he supports transparent financial management, budgeting, and operational efficiency within the organization.",
    image: "/team/brian.jpeg",
  },
  {
    name: "Alinda Joshua Brian",
    title: "Programs & Research Officer",
    bio: "Alinda Joshua Brian serves as the Programs and Research Officer at SISO Foundation. He holds a Bachelor of Arts in Economics and contributes to program planning, research and community development initiatives. He supports the design and implementation of projects, data analysis and program documentation to help strengthen evidence-based interventions that improve the wellbeing of vulnerable youth and women.",
    image: "/team/alindajoshua.jpeg",
  },

  {
    name: "Diana Kyarikunda",
    title: "Secretary",
    bio: "Serves as the Secretary, supporting administrative coordination, documentation and organizational communication. She assists in maintaining records, facilitating internal operations and ensuring smooth coordination between the board, secretariat, and program teams to support the effective implementation of the foundation’s activities",
    image: "/team/dianah.jpeg",
  },

  {
    name: "Sasha Ana Aheebwomugisha",
    title: "Communications & Partnerships Officer",
    bio: "Sasha Ana Aheebwomugisha supports communications and partnership engagement at SISO Foundation. She contributes to strengthening the organization’s visibility, digital presence, and collaboration with partners and stakeholders. With a background in software engineering, she leverages technology and digital platforms to enhance communication, outreach, and the impact of the foundation’s programs.",
    image: "/team/sasha.jpeg",
  },

  {
    name: "Ssukwe Stuart",
    title: "Monitoring & Evaluation Officer",
    bio: "Ssukwe Stuart serves as the Monitoring and Evaluation Officer at SISO Foundation. He supports the tracking of program activities, measures outcomes and impact, and strengthens data-driven learning across the organization. His work contributes to improving program effectiveness, accountability, and transparent reporting to partners and stakeholders.",
    image: "/team/stuart.jpeg",
  },
  {
    name: "Naomi Beinomugisha",
    title: "Program Officer",
    bio: "Naomi Beinomugisha serves as a Program Officer at SISO Foundation, supporting the planning and implementation of community-based programs. She works closely with communities and partners to coordinate activities, promote engagement, and ensure effective delivery of initiatives that improve health, skills development, and empowerment for vulnerable youth and women.",
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
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-zinc-900 via-black to-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200">
              Governance
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Trust is built through strong governance
            </h1>
            <p className="mt-4 text-zinc-300 md:text-lg">
              SISO Foundation is committed to responsible leadership, clear
              oversight, and transparency in how we work with communities and
              supporters.
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
            These principles guide decisions, management, and how we report our
            work.
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
              Administrative decisions are made with oversight and documented
              processes. Key activities are reviewed to ensure alignment with
              mission and community benefit.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-extrabold text-slate-900">
              Financial stewardship
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Donations and funds are used for program delivery and operations.
              We aim for accurate records, receipts, and reporting for
              accountability.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-extrabold text-slate-900">
              Risk & safeguarding
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              We protect participants by promoting safe practices, respectful
              engagement, and careful handling of sensitive information.
            </p>
          </div>
        </div>

        {/* Documents */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h3 className="text-lg font-extrabold text-slate-900">
            Key documents
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Read how we are structured and what guides our work.
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

        {/* ✅ Board */}
        <div className="mt-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Board of Directors
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The board provides strategic leadership, oversight, and
              accountability for SISO Foundation.
            </p>
          </div>
          <PeopleGrid items={board} />
        </div>

        {/* ✅ Secretariat */}
        <div className="mt-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Secretariat
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The secretariat supports day-to-day operations and program
              delivery.
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
                Reach out and we’ll discuss shared goals, accountability, and
                how we can work together.
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
