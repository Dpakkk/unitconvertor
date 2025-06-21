import { ConverterPage } from '@/components/ConverterPage'
import { HomePageContent } from '@/components/HomePageContent'
import { conversions } from '@/lib/conversions'

export default function Home() {
  const lengthCategory = conversions.find((cat) => cat.path === '/length')

  if (!lengthCategory) {
    return <div>Length category not found.</div>
  }

  return (
    <>
      <ConverterPage category={lengthCategory} />
      <HomePageContent />
    </>
  )
}
