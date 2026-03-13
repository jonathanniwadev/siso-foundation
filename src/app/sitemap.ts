import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sisofoundation.org',
      lastModified: new Date(),
    },
    {
      url: 'https://sisofoundation.org/about',
      lastModified: new Date(),
    },
    {
      url: 'https://sisofoundation.org/programs',
      lastModified: new Date(),
    },
    {
      url: 'https://sisofoundation.org/updates',
      lastModified: new Date(),
    },
    {
      url: 'https://sisofoundation.org/governance',
      lastModified: new Date(),
    },
    {
      url: 'https://sisofoundation.org/certification',
      lastModified: new Date(),
    },
    {
      url: 'https://sisofoundation.org/contact',
      lastModified: new Date(),
    }
  ]
}