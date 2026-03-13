export default function HeroStats() {
  const stats = [
    { value: "500+", label: "Girls Supported" },
    { value: "20+", label: "Community Outreaches" },
    { value: "4", label: "Focus Areas" },
    { value: "100+", label: "Lives Reached" },
  ];

  return (
    <section className="relative z-20 -mt-10 md:-mt-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 md:grid-cols-4 md:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 text-center md:p-8">
                <div className="text-3xl font-extrabold text-emerald-700 md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-600 md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
