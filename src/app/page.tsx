import { conversions } from '@/lib/conversions'
import { ConverterPage } from '@/components/ConverterPage'

export default function Home() {
  const lengthCategory = conversions.find((c) => c.path === '/length')

  if (!lengthCategory) {
    return <div>Error: Length converter not found.</div>
  }

  return <ConverterPage category={lengthCategory} />
}
