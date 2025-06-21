import { conversions } from '@/lib/conversions'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ConverterPage } from '@/components/ConverterPage'
import { LengthPageContent } from '@/components/LengthPageContent'
import { WeightPageContent } from '@/components/WeightPageContent'
import { TemperaturePageContent } from '@/components/TemperaturePageContent'
import { AreaPageContent } from '@/components/AreaPageContent'
import { VolumePageContent } from '@/components/VolumePageContent'
import { TimePageContent } from '@/components/TimePageContent'

type Props = {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryData = conversions.find((c) => c.path === `/${params.category}`)

  if (!categoryData) {
    return {
      title: 'Not Found',
      description: 'This page does not exist.',
    }
  }

  return {
    title: `${categoryData.name} Converter`,
    description: `Convert ${categoryData.name} units instantly.`,
  }
}

// Main component for the category page
export default function CategoryPage({ params }: Props) {
  const categoryData = conversions.find((c) => c.path === `/${params.category}`)

  if (!categoryData) {
    notFound()
  }

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
