import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://unitconvertor.co/sitemap.xml'
      : 'http://localhost:3000/sitemap.xml'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: sitemapUrl,
  }
}
