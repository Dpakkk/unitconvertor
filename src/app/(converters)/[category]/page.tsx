import { conversions } from '@/lib/conversions'
import { notFound } from 'next/navigation'
import { UnitConverter } from '@/components/UnitConverter'
import { Metadata } from 'next'

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
    <main className="container mx-auto p-4">
      <h2 className="mb-4 text-2xl font-bold">{categoryData.name}</h2>
      <UnitConverter category={categoryData} />
    </main>
  )
}
