import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity";
import { postsQuery } from "@/lib/sanityQueries";

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

export default async function HomeLatestUpdates() {
  const allPosts: Post[] = await client.fetch(postsQuery);
  const posts = allPosts.slice(0, 3);

  if (!posts.length) return null;

  const labels = ["Education", "Community", "Healthy Life"];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
            Latest Updates
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Every Community Deserves the Opportunity to Thrive
          </h2>

          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Stories from the field showing how SISO Foundation is creating
            impact through education, health, and empowerment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="border-t-4 border-emerald-600" />

              <div className="px-6 pt-5 text-center">
                <span className="inline-flex rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
                  {labels[index] ?? "Update"}
                </span>
              </div>

              <div className="px-6 pt-6 text-center">
                <h3 className="text-2xl font-extrabold leading-tight text-slate-900">
                  {post.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  {post.excerpt ||
                    "Read the latest field update from SISO Foundation."}
                </p>
              </div>

              <div className="mt-6">
                {post.mainImage ? (
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).width(900).height(700).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-72 items-center justify-center bg-slate-100 text-slate-400">
                    No image
                  </div>
                )}
              </div>

              <div className="px-6 py-5">
                <Link
                  href={`/updates/${post.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Read More
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/updates"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
          >
            View All Updates
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
