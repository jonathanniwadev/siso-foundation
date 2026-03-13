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
    name: "Dr. Richard Obeti",
    title: "Board Chair",
    bio: "Dr. Richard Obeti is the District Health Officer (DHO) of Bunyangabu District with extensive experience in public health leadership, health systems management, and community health programming. He has worked closely with government and development partners to strengthen health service delivery, disease prevention, and community health initiatives. As Board Chair of SISO Foundation, he provides strategic guidance and oversight, ensuring that the organization’s programs align with national health priorities and deliver meaningful impact for vulnerable communities..",
    image: "/team/alex.jpeg",
  },
  {
    name: "Mr. Jonathan Niwagaba",
    title: "Founder & Executive Director",
    bio: "Leads innovation, technology, and strategic direction to advance the mission of SISO Foundation.",
    image: "/team/jonathanniwagaba.jpeg",
  },
  {
    name: "Mr. Nuwamanya Julius Makobore",
    title: "Board Secretary & Legal Advisor",
    bio: "Advocate of the High Court of Uganda with strong experience in legal practice, human rights, and governance.",
    image: "/team/julius.jpeg",
  },
  {
    name: "Judith Kansiime, MPH",
    title: "Board Member",
    bio: "Public health leader with deep experience in women’s health, SRHR, and resource mobilisation.",
    image: "/team/judith.jpeg",
  },
  {
    name: "Bernard Kahigi",
    title: "Board Member & Advisor",
    bio: "Brings extensive experience in child development programming, and resource mobilisation.",
    image: "/team/bernard.jpeg",
  },
  {
    name: "Ms. Rebecca Atuheire",
    title: "Board Member",
    bio: "Senior nursing officer with experience in health advocacy and reproductive health planning.",
    image: "/team/rebecca.jpeg",
  },

  {
    name: "Mbabazi Medard",
    title: "Board Member",
    bio: "Supports community leadership, local coordination, and accountability at grassroots level.",
  },
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
