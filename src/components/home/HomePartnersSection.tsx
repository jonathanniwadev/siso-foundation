import Image from "next/image";

const partners = [
  // {
  //   name: "Kabale Wells of Life Ministries International",
  //   logo: "/partners/kabale-wells.jpeg",
  // },
  {
    name: "Amazing Grace Community Health and Rehabilitation Centre",
    logo: "/partners/amazing-grace.webp",
  },
  {
    name: "Bold for Children",
    logo: "/partners/bold-for-children.webp",
  },
  {
    name: "Research Limited",
    logo: "/partners/research-limited.webp",
  },
  {
    name: "Day Star",
    logo: "/partners/daily-star.webp",
  },
  {
    name: "Youth First Uganda",
    logo: "/partners/youth-first-uganda.webp",
  },
];

export default function HomePartnersSection() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Organizations We Work With
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
            Trusted partnerships that strengthen our impact
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex w-max animate-marquee gap-12 px-6">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex min-w-[160px] items-center justify-center"
              title={partner.name}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={70}
                sizes="140px"
                className="h-14 w-auto object-contain grayscale opacity-80 transition hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
