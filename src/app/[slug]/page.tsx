import { conversions, Unit, ConversionCategory } from '@/lib/conversions'
import { notFound, redirect } from 'next/navigation'
import { ConverterPage } from '@/components/ConverterPage'
import { LengthPageContent } from '@/components/LengthPageContent'
import { WeightPageContent } from '@/components/WeightPageContent'
import { TemperaturePageContent } from '@/components/TemperaturePageContent'
import { AreaPageContent } from '@/components/AreaPageContent'
import { VolumePageContent } from '@/components/VolumePageContent'
import { TimePageContent } from '@/components/TimePageContent'
import { Metadata } from 'next'
import levenshtein from 'js-levenshtein'

// Gets the "clean" name for a unit, to be used for matching.
// e.g., "Gallon (US)" -> "gallon", "Square Foot" -> "square foot"
const getCleanUnitName = (name: string) => {
  return name
    .toLowerCase()
    .replace(/ \(.+\)$/, '')
    .trim()
}

// Creates a URL-friendly slug from a unit name.
// e.g., "Gallon (US)" -> "gallon-us", "Square Foot" -> "square-foot"
const getUnitSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/ \(/g, '-')
    .replace(/\)/g, '')
    .replace(/ /g, '-')
}

// Helper function to find a unit by its name, symbol, or alias.
const findUnit = (unitIdentifier: string, fuzzy = false) => {
  const normalizedIdentifier = unitIdentifier.toLowerCase().replace(/-/g, '')
  let bestMatch: {
    unit: Unit
    category: ConversionCategory
    distance: number
  } | null = null

  for (const category of conversions) {
    for (const unit of category.units) {
      const cleanUnitName = getCleanUnitName(unit.name) // "gallon"
      const unitSymbol = unit.symbol.toLowerCase()

      const candidates = [
        cleanUnitName,
        `${cleanUnitName}s`, // plural
        unitSymbol,
      ]

      // Add common abbreviations for multi-word units
      if (cleanUnitName.startsWith('square')) {
        const parts = cleanUnitName.split(' ')
        candidates.push(`sq${parts[1]}`) // "sqmeter"
        candidates.push(`sq-${parts[1]}`) // "sq-meter" - handled by normalizer
      }
      if (cleanUnitName.startsWith('fluid')) {
        candidates.push(`fl${cleanUnitName.split(' ')[1]}`) // "flounce"
      }

      for (const candidate of candidates) {
        if (!candidate) continue
        const distance = levenshtein(normalizedIdentifier, candidate)

        // Exact match is always best
        if (distance === 0) {
          return { unit, category, distance: 0 }
        }

        // If fuzzy matching, find the closest candidate
        if (fuzzy) {
          if (!bestMatch || distance < bestMatch.distance) {
            bestMatch = { unit, category, distance }
          }
        }
      }
    }
  }

  // Only return a fuzzy match if it's reasonably close
  if (bestMatch && bestMatch.distance < 3) {
    return bestMatch
  }

  return null
}

function capitalize(str: string) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  // Case 1: Metadata for specific conversion pages e.g. /25-km-to-miles
  if (slug.includes('-to-')) {
    const parts = slug.split('-to-')
    if (parts.length !== 2) return { title: 'Unit Converter' }

    const fromPart = parts[0]
    const toUnitIdentifier = parts[1]

    const fromValueMatch = fromPart.match(/^(\d*\.?\d+)/)
    const fromValue = fromValueMatch ? parseFloat(fromValueMatch[1]) : 1
    const fromUnitIdentifier = fromValueMatch
      ? fromPart.substring(fromValueMatch[1].length).replace(/^-/, '')
      : fromPart

    const fromData = findUnit(fromUnitIdentifier)
    const toData = findUnit(toUnitIdentifier)

    if (fromData && toData && fromData.category.name === toData.category.name) {
      const fromUnitName = capitalize(fromData.unit.name)
      const toUnitName = capitalize(toData.unit.name)
      const title = `${fromValue} ${fromUnitName} to ${toUnitName}`
      const description = `Easily convert ${fromValue} ${fromUnitName} to ${toUnitName} with our free online unit converter. Get the answer for ${fromValue} ${fromUnitName} to ${toUnitName} conversion.`

      return {
        title: title,
        description,
      }
    }
  }

  // Case 2: Metadata for existing category pages e.g. /length-converter
  const categoryData = conversions.find((c) => c.path.substring(1) === slug)
  if (categoryData) {
    const title = `${categoryData.name} Converter`
    const description = `Convert units of ${categoryData.name.toLowerCase()} such as miles, kilometers, meters, and more with our free online converter.`
    return {
      title: title,
      description,
    }
  }

  // Fallback metadata
  return {
    title: 'Unit Converter',
  }
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Case 1: Handle specific conversion slugs like /25-km-to-miles
  if (slug.includes('-to-')) {
    const parts = slug.split('-to-')
    if (parts.length === 2) {
      const fromPart = parts[0]
      const toUnitIdentifier = parts[1]

      const fromValueMatch = fromPart.match(/^(\d*\.?\d+)/)
      const fromValue = fromValueMatch ? parseFloat(fromValueMatch[1]) : 1
      const fromUnitIdentifier = fromValueMatch
        ? fromPart.substring(fromValueMatch[1].length).replace(/^-/, '')
        : fromPart

      const fromData = findUnit(fromUnitIdentifier, true)
      const toData = findUnit(toUnitIdentifier, true)

      if (
        fromData &&
        toData &&
        fromData.category.name === toData.category.name
      ) {
        // We need to redirect if a fuzzy match was used, or if the slug
        // doesn't match the canonical slug format.
        const canonicalSlug = `${fromValue}-${getUnitSlug(
          fromData.unit.name,
        )}-to-${getUnitSlug(toData.unit.name)}`

        const needsRedirect =
          fromData.distance > 0 || toData.distance > 0 || slug !== canonicalSlug

        if (needsRedirect) {
          return redirect(`/${canonicalSlug}`)
        }

        // If URL is correct, render the page
        const categoryData = fromData.category
        return (
          <>
            <ConverterPage
              category={categoryData}
              initialFromValue={fromValue.toString()}
              initialFromUnit={fromData.unit.symbol}
              initialToUnit={toData.unit.symbol}
            />
            {categoryData.name === 'Length' && <LengthPageContent />}
            {categoryData.name === 'Weight' && <WeightPageContent />}
            {categoryData.name === 'Temperature' && <TemperaturePageContent />}
            {categoryData.name === 'Area' && <AreaPageContent />}
            {categoryData.name === 'Volume' && <VolumePageContent />}
            {categoryData.name === 'Time' && <TimePageContent />}
          </>
        )
      }
    }
  }

  // Case 2: Handle existing category slugs like /length-converter
  const categoryData = conversions.find((c) => c.path.substring(1) === slug)
  if (categoryData) {
    return (
      <>
        <ConverterPage category={categoryData} />
        {categoryData.name === 'Length' && <LengthPageContent />}
        {categoryData.name === 'Weight' && <WeightPageContent />}
        {categoryData.name === 'Temperature' && <TemperaturePageContent />}
        {categoryData.name === 'Area' && <AreaPageContent />}
        {categoryData.name === 'Volume' && <VolumePageContent />}
        {categoryData.name === 'Time' && <TimePageContent />}
      </>
    )
  }

  // Fallback to notFound if the slug doesn't match any known pattern
  return notFound()
}
