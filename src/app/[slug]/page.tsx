import { conversions } from '@/lib/conversions'
import { notFound } from 'next/navigation'
import { ConverterPage } from '@/components/ConverterPage'
import { LengthPageContent } from '@/components/LengthPageContent'
import { WeightPageContent } from '@/components/WeightPageContent'
import { TemperaturePageContent } from '@/components/TemperaturePageContent'
import { AreaPageContent } from '@/components/AreaPageContent'
import { VolumePageContent } from '@/components/VolumePageContent'
import { TimePageContent } from '@/components/TimePageContent'
import { Metadata } from 'next'

// Helper function to find a unit by its name (singular/plural) or symbol.
const findUnit = (unitIdentifier: string) => {
  const normalizedIdentifier = unitIdentifier.toLowerCase()
  for (const category of conversions) {
    for (const unit of category.units) {
      const unitName = unit.name.toLowerCase()
      const unitSymbol = unit.symbol.toLowerCase()
      // Check symbol: 'km' === 'km'
      if (unitSymbol === normalizedIdentifier) {
        return { unit, category }
      }
      // Check name: 'mile' === 'mile', or plural form: 'miles' === 'mile' + 's'
      if (
        unitName === normalizedIdentifier ||
        unitName + 's' === normalizedIdentifier
      ) {
        return { unit, category }
      }
    }
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

      const fromData = findUnit(fromUnitIdentifier)
      const toData = findUnit(toUnitIdentifier)

      if (
        fromData &&
        toData &&
        fromData.category.name === toData.category.name
      ) {
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
