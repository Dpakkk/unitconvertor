import { conversions } from '@/lib/conversions'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://unitconvertor.co'
      : 'http://localhost:3000'

  const converterUrls = conversions.map((conversion) => {
    return {
      url: `${baseUrl}${conversion.path}`,
      lastModified: new Date(),
    }
  })

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...converterUrls,
  ]
}
