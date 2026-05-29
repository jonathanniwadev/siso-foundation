"use client";

import Image from "next/image";
import Link from "next/link";

type BoardMember = {
  name: string;
  title: string;
  bio: string;
  image?: string;
};

const board: BoardMember[] = [
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
    image: "/team/alinda.jpeg",
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
    image: "/team/medard.jpeg",
  }
];

function BoardCard({ member }: { member: BoardMember }) {
  return (
    <article className="flex h-[250px] w-[320px] shrink-0 flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-emerald-100 ring-2 ring-emerald-100">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-lg font-bold text-emerald-700">
              {member.name.charAt(0)}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-extrabold leading-snug text-slate-900">
            {member.name}
          </h3>
          <p className="mt-1 text-sm font-semibold leading-6 text-emerald-700">
            {member.title}
          </p>
        </div>
      </div>

      <p className="mt-5 line-clamp-4 text-sm leading-7 text-slate-600">
        {member.bio}
      </p>
    </article>
  );
}

export default function HomeBoardSection() {
  const loopedBoard = [...board, ...board];

  return (
    <section className="relative bg-slate-50 pb-6 py-5">
      <div className="mx-auto max-w-7xl px-4">
        <div className="-mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
              Leadership
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Our Board of Directors
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              SISO Foundation is guided by a committed board that provides
              oversight, accountability, and strategic direction for our work in
              communities.
            </p>
          </div>

          <div className="mt-3 text-center text-sm text-slate-500">
            Hover over the cards to pause and read.
          </div>

          <div className="relative mt-10 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

            <div className="board-marquee flex w-max gap-6">
              {loopedBoard.map((member, index) => (
                <div key={`${member.name}-${index}`}>
                  <BoardCard member={member} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/governance"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              View Full Governance
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
