import { conversions } from '@/lib/conversions'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.unitconvertor.co'

  const staticPages = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
  ]

  const categoryPages = conversions.map((category) => ({
    url: `${baseUrl}${
      category.path === '/length-converter' ? '' : category.path
    }`,
    lastModified: new Date(),
  }))

  const conversionPages: MetadataRoute.Sitemap = []
  const popularValues = [1, 5, 10, 25, 50, 100, 500, 1000]

  conversions.forEach((category) => {
    for (let i = 0; i < category.units.length; i++) {
      for (let j = 0; j < category.units.length; j++) {
        if (i === j) continue // Skip conversion to the same unit

        const fromUnit = category.units[i]
        const toUnit = category.units[j]

        // Add a few popular values for each conversion pair
        popularValues.slice(0, 3).forEach((value) => {
          conversionPages.push({
            url: `${baseUrl}/${value}-${fromUnit.name.toLowerCase()}-to-${toUnit.name.toLowerCase()}`,
            lastModified: new Date(),
          })
        })
      }
    }
  })

  return [...staticPages, ...categoryPages, ...conversionPages]
}
