import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Governance | SISO Foundation Uganda",
  description:
    "Meet the Board of Directors and Management Team of SISO Foundation, a registered NGO in Uganda committed to accountability, transparency and responsible leadership.",
};

type Principle = { title: string; text: string };
type Doc = { title: string; description: string; href: string };
type Person = {
  name: string;
  title: string;
  qualifications: string;
  bio: string;
  image?: string;
};

const principles: Principle[] = [
  {
    title: "Accountability",
    text: "We maintain clear records of decisions, activities and use of funds, and we regularly review progress to ensure responsible stewardship of all resources entrusted to us.",
  },
  {
    title: "Transparency",
    text: "We communicate openly about our work, partnerships and project updates so that supporters, partners and communities can trust our processes and decisions.",
  },
  {
    title: "Safeguarding",
    text: "We prioritise the safety, dignity and wellbeing of all programme participants, especially children, youth, women and vulnerable community members.",
  },
  {
    title: "Integrity",
    text: "We uphold the highest standards of ethical conduct in all our operations, partnerships and use of donor funds, and we do what we say we will do.",
  },
];

const documents: Doc[] = [
  {
    title: "Constitution",
    description: "Core guiding document for SISO Foundation.",
    href: "/constitution",
  },
  {
    title: "Programmes",
    description: "What we do and how we deliver impact in communities.",
    href: "/programs",
  },
  {
    title: "Certification",
    description: "Our legal registration certificates and compliance documents.",
    href: "/certification",
  },
];

const board: Person[] = [
  {
    name: "Ms. Tusiime Eresi Biira",
    title: "Chairperson",
    qualifications: "Bachelor of Biomedical Laboratory Technology | Lab Officer, Kisoro Hospital",
    bio: "Ms. Tusiime Eresi Biira chairs the Board of Directors of SISO Foundation. With a background in biomedical laboratory technology and frontline health service delivery at Kisoro Hospital, she brings both technical health expertise and practical community understanding to her governance role. She provides strategic leadership and ensures the Foundation's programmes remain aligned with community health priorities.",
    image: "/team/tusiime.jpeg",
  },
  {
    name: "Ms. Akiding Elizabeth Joanita",
    title: "Board Secretary",
    qualifications: "Bachelor of Laws (LLB), Makerere University",
    bio: "Ms. Akiding Elizabeth Joanita serves as Board Secretary of SISO Foundation. A trained lawyer from Makerere University, she provides legal guidance, supports regulatory compliance and ensures that governance documentation, board resolutions and institutional records are maintained to the highest professional standards.",
    image: "/team/elizabeth.jpeg",
  },
  {
    name: "Jonathan Niwagaba",
    title: "Executive Director (ex-officio)",
    qualifications: "BSc Computer Science, ISBAT University | Diploma in Software Engineering, ISBAT University  ",
    bio: "Jonathan Niwagaba is the Founder and Executive Director of SISO Foundation. With a background in software engineering and computer science, he leads the Foundation's strategic direction, donor partnerships and programme operations. He serves on the Board in an ex-officio capacity, bridging governance and day-to-day management.",
    image: "/team/jonathanniwagaba.webp",
  },
  {
    name: "Alinda Joshua Brian",
    title: "Treasurer",
    qualifications: "Bachelor of Arts in Economics, Makerere University",
    bio: "Alinda Joshua Brian serves as Treasurer of SISO Foundation's Board of Directors. With a degree in Economics from Makerere University, he oversees the financial oversight function of the Board, ensuring that the Foundation's resources are managed responsibly and that financial reporting meets donor and regulatory requirements.",
    image: "/team/brian.webp",
  },
  {
    name: "Judith Kansiime",
    title: "Advisor",
    qualifications: "Master of Public Health (MPH), Uganda Christian University | Bachelor of Population Studies, Kyambogo University | Diploma in Clinical Medicine and Community Health, Fort Portal College of Health Sciences",
    bio: "Judith Kansiime brings extensive expertise in public health, population studies and clinical medicine to her advisory role on the SISO Foundation Board. She provides strategic guidance on health programme design, community health priorities and evidence-based programme development.",
    image: "/team/judith.webp",
  },
  {
    name: "Mbabazi Medard",
    title: "Local Government Representative",
    qualifications: "Diploma in Teaching, Kyambogo University | LC1 Chairperson, Kitahurira Village, Rubanda District",
    bio: "Mbabazi Medard represents local government and community leadership on the SISO Foundation Board. As LC1 Chairperson for Kitahurira Village, he brings grassroots community knowledge, facilitates local coordination and ensures the Foundation's programmes remain accountable and responsive to the communities it serves.",
    image: "/team/mbabazi.jpeg",
  },
];

const management: Person[] = [
  {
    name: "Jonathan Niwagaba",
    title: "Executive Director",
    qualifications: "Diploma in Software Engineering, ISBAT University | BSc Computer Science, ISBAT University",
    bio: "Jonathan Niwagaba founded SISO Foundation and leads its overall strategy, partnerships and programme operations. He oversees all management functions and is responsible for the Foundation's institutional growth, donor relationships and long-term sustainability.",
    image: "/team/jonathanniwagaba.webp",
  },
  {
    name: "Atukunda Brian",
    title: "Finance Manager",
    qualifications: "Bachelor of Commerce, Makerere University",
    bio: "Atukunda Brian manages the financial operations of SISO Foundation, including budgeting, financial reporting, accounts management and audit preparation. He ensures that all financial management meets donor requirements and complies with applicable accounting standards.",
    image: "/team/brian.webp",
  },
  {
    name: "Bernard Kahigi",
    title: "Programme / Impact Manager",
    qualifications: "Master of Public Health (MPH), Bishop Stuart University | BA Social Sciences, Makerere University | Diploma in Project Planning and Management, UMI",
    bio: "Bernard Kahigi oversees programme planning, implementation, monitoring and impact reporting across all SISO Foundation programmes. With a background spanning public health, social sciences and project management, he ensures that programmes are evidence-based, effectively delivered and properly documented.",
    image: "/team/kahigi.webp",
  },
  {
    name: "Ssukwe Stuart",
    title: "Administrator",
    qualifications: "Bachelor of Software Engineering, Makerere University",
    bio: "Ssukwe Stuart manages the day-to-day administrative operations of SISO Foundation, including office management, records keeping, staff coordination and organisational systems. His background in software engineering also supports the Foundation's digital and technology needs.",
    image: "/team/stuart.jpeg",
  },
  {
    name: "Mfitundinda Samuel",
    title: "Community Mobiliser",
    qualifications: "Bachelor of Nursing Science, Metropolitan University | Nursing Officer, Muko General Hospital",
    bio: "Mfitundinda Samuel leads community engagement, mobilisation and outreach activities for SISO Foundation. His nursing background and frontline health experience enable him to connect with communities effectively and coordinate the Foundation's community health and welfare programmes.",
    image: "/team/samuel.jpeg",
  },
  {
    name: "Kyarikunda Diana",
    title: "Monitoring & Evaluation Officer",
    qualifications: "Vocational Training — Plumbing",
    bio: "Kyarikunda Diana supports monitoring and evaluation activities across SISO Foundation's programmes. She tracks programme activities, collects field data and contributes to the measurement of outcomes and impact to strengthen organisational learning and accountability.",
    image: "/team/dianah.webp",
  },
  {
    name: "Naomi Beinomugisha",
    title: "Communications Officer",
    qualifications: "BA Industrial Art and Design, Kyambogo University",
    bio: "Naomi Beinomugisha manages SISO Foundation's communications, digital presence and stakeholder engagement. With a background in art and design, she develops content, coordinates outreach materials and helps strengthen the Foundation's visibility and public profile.",
    image: "/team/naomi.webp",
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
          <p className="mt-3 text-xs font-medium text-slate-500 leading-relaxed">
            {p.qualifications}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.bio}</p>
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
      "Governance page for SISO Foundation, a registered NGO in Uganda committed to accountability, transparency, safeguarding and responsible leadership.",
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
              SISO Foundation is a registered NGO in Uganda committed to
              responsible leadership, clear oversight, transparency and ethical
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
            These principles guide our leadership, decision-making, management
            and reporting as we work with communities, donors and partners.
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
              Leadership and oversight
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Strategic and administrative decisions are made with documented
              processes and regular Board review to ensure alignment with our
              mission and community benefit.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-extrabold text-slate-900">
              Financial stewardship
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              All donations and organisational resources are managed with
              accurate records, responsible use and transparent reporting.
              Annual accounts are independently audited by Matrix & Company,
              Certified Public Accountants, Mbarara.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-extrabold text-slate-900">
              Risk and safeguarding
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              We promote safe practices, respectful engagement and careful
              handling of sensitive information to protect all participants and
              vulnerable community members.
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
            what guides our work and how support translates into impact.
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
              oversight and accountability for SISO Foundation.
            </p>
          </div>
          <PeopleGrid items={board} />
        </div>

        {/* Management */}
        <div className="mt-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Management Team
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The management team drives day-to-day operations, programme
              delivery, administration, communications and organisational
              learning.
            </p>
          </div>
          <PeopleGrid items={management} />
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Want to partner with SISO Foundation?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Reach out and we will discuss shared goals, accountability and
                how we can work together to create impact across Western Uganda.
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
