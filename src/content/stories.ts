export type Story = {
  slug: string;
  title: string;
  date: string; // "2026-03-05"
  location?: string;
  cover?: string; // "/stories/books.jpg" (optional)
  excerpt: string;
  content: string; // markdown
};

export const stories: Story[] = [
  {
    slug: "books-donation-rubaga-primary",
    title: "Book Donation to Rubaga Primary School",
    date: "2026-03-05",
    location: "Rubaga, Kampala",
    cover: "/impact/books1.jpeg",
    excerpt:
      "We donated books to support reading culture and improve learning outcomes for pupils.",
    content: `
## What we did
- Delivered **200+ books** to Rubaga Primary School
- Held a short reading session with learners
- Engaged teachers on reading support

## Why it matters
Reading builds confidence, improves performance, and opens opportunity.

## Next steps
- Follow up with the school in 6 weeks
- Add more books through partnerships
    `,
  },
  {
  slug: "menstrual-health-support-kids-pads",
  title: "Menstrual Health Support for School Girls",
  date: "2026-03-05",
  location: "Kampala, Uganda",
  cover: "/impact/menstrual-1.png",
  excerpt:
    "We supported learners with menstrual hygiene supplies to help them stay in school with dignity and confidence.",
  content: `
## What we did
- Distributed **sanitary pads** to learners
- Shared a short session on **menstrual hygiene management**
- Encouraged learners to seek support from teachers and health workers

## Why it matters
Menstrual health is a dignity and education issue. When girls have the right support, they attend school consistently and participate fully.

## Next steps
- Follow up with the school to assess ongoing needs
- Expand support to more schools through partnerships
  `,
},
];