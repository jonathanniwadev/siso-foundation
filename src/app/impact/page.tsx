// src/app/impact/page.tsx
import Link from "next/link";
import { supabasePublic } from "@/lib/supabasePublic";

export const dynamic = "force-dynamic";

type Story = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
  location: string | null;
  event_date: string | null;
  created_at: string;
};

export default async function ImpactPage() {
  const { data } = await supabasePublic
    .from("stories")
    .select(
      "id,title,slug,excerpt,cover_image_url,location,event_date,created_at,status",
    )
    .eq("status", "published")
    .order("event_date", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });

  const stories: Story[] = (data as any) ?? [];

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-zinc-900 via-black to-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200">
            Impact
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Stories from the field
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Real updates from our work in communities—program activities,
            outreach, and outcomes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        {stories.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-slate-700">
            No impact stories published yet.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((s) => (
              <Link
                key={s.id}
                href={`/impact/${s.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-[16/10] w-full bg-slate-100">
                  {s.cover_image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={s.cover_image_url}
                      alt={s.title}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>

                <div className="p-5">
                  <div className="text-xs text-slate-500">
                    {s.location ? s.location : "SISO Foundation"}
                    {s.event_date
                      ? ` • ${new Date(s.event_date).toDateString()}`
                      : ""}
                  </div>

                  <h2 className="mt-2 text-lg font-extrabold text-slate-900 group-hover:text-emerald-700">
                    {s.title}
                  </h2>

                  <p className="mt-2 text-sm text-slate-600">
                    {s.excerpt ??
                      "Read more about this activity and its impact."}
                  </p>

                  <div className="mt-4 text-sm font-semibold text-emerald-700">
                    Read story →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
