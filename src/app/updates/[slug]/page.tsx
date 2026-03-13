import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity";
import { postBySlugQuery } from "@/lib/sanityQueries";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

type Post = {
  title: string;
  slug: string;
  publishedAt?: string;
  excerpt?: string;
  body?: any;
  mainImage?: any;
  author?: string;
};

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="mb-5 text-lg leading-8 text-slate-800">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="mb-5 mt-10 text-4xl font-extrabold text-slate-900">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="mb-4 mt-10 text-3xl font-extrabold text-slate-900">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mb-3 mt-8 text-2xl font-bold text-slate-900">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="mb-3 mt-6 text-xl font-bold text-slate-900">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-6 border-l-4 border-emerald-600 pl-4 italic text-slate-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-5 list-disc space-y-2 pl-6 text-lg text-slate-800">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mb-5 list-decimal space-y-2 pl-6 text-lg text-slate-800">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-slate-800">{children}</em>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        className="font-semibold text-emerald-700 underline"
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export const dynamic = "force-dynamic";

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post: Post | null = await client.fetch(postBySlugQuery, { slug });

  if (!post) return notFound();

  return (
    <main className="bg-white">
      <article className="mx-auto max-w-4xl px-4 py-12">
        <Link
          href="/updates"
          className="text-sm font-semibold text-emerald-700 hover:underline"
        >
          ← Back to Updates
        </Link>

        <header className="mt-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-3 text-sm text-slate-600">
            {post.publishedAt
              ? new Date(post.publishedAt).toDateString()
              : ""}
            {post.author ? ` • By ${post.author}` : ""}
          </p>

          {post.mainImage && (
            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
              <Image
                src={urlFor(post.mainImage).width(1400).height(800).url()}
                alt={post.title}
                width={1400}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          )}

          {post.excerpt && (
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              {post.excerpt}
            </p>
          )}
        </header>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
          <PortableText
            value={post.body}
            components={portableTextComponents}
          />
        </div>
      </article>
    </main>
  );
}