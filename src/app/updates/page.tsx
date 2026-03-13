import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity";
import { postsQuery } from "@/lib/sanityQueries";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

type Post = {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  excerpt?: string;
  mainImage?: any;
};

export const dynamic = "force-dynamic";

export default async function UpdatesPage() {
  const posts: Post[] = await client.fetch(postsQuery);

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-5xl font-extrabold text-white">
            News & Field Updates
          </h1>
          <p className="mt-4 text-zinc-300">
            Follow what SISO Foundation is doing in communities.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/updates/${post.slug}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              {/* IMAGE */}
              <div className="relative h-60 w-full bg-slate-100">
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage).width(800).height(500).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* TEXT */}
              <div className="p-6">

                <p className="text-sm text-slate-500">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toDateString()
                    : ""}
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  {post.title}
                </h2>

                <p className="mt-2 text-slate-600">
                  {post.excerpt || "Read the full story from SISO Foundation."}
                </p>

                <p className="mt-4 font-semibold text-emerald-700">
                  Read more →
                </p>

              </div>
            </Link>
          ))}

        </div>
      </section>

    </main>
  );
}