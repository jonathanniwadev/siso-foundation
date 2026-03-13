import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    body,
    mainImage,
    "author": author->name
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    body,
    mainImage,
    "author": author->name
  }
`;