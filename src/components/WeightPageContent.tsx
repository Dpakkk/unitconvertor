import React from 'react'
import Link from 'next/link'

function Table({
  headers,
  rows,
}: {
  headers: string[]
  rows: (string | React.ReactNode)[][]
}) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
          {rows.map((row, i) => (
            <tr
              key={i}
              className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-6 py-4 text-sm whitespace-nowrap text-gray-900 dark:text-white"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function WeightPageContent() {
  const popularConversions = {
    headers: ['From Unit', 'To Unit', 'Conversion Factor'],
    rows: [
      ['Gram (g)', 'Ounce (oz)', '0.035274'],
      ['Ounce (oz)', 'Gram (g)', '28.3495'],
      ['Kilogram (kg)', 'Pound (lb)', '2.20462'],
      ['Pound (lb)', 'Kilogram (kg)', '0.453592'],
      ['Milligram (mg)', 'Gram (g)', '0.001'],
      ['Gram (g)', 'Milligram (mg)', '1000'],
      ['Pound (lb)', 'Ounce (oz)', '16'],
      ['Ounce (oz)', 'Pound (lb)', '0.0625'],
    ],
  }

  const commonUnits = {
    headers: ['System', 'Unit Name', 'Symbol', 'Approximate Real-World Scale'],
    rows: [
      ['Metric (SI)', 'Microgram', 'µg', 'A few grains of sand'],
      ['Metric (SI)', 'Milligram', 'mg', 'A single grain of salt'],
      ['Metric (SI)', 'Gram', 'g', 'A paperclip'],
      ['Metric (SI)', 'Kilogram', 'kg', 'A bag of sugar'],
      ['Imperial/US', 'Ounce', 'oz', 'A slice of bread'],
      ['Imperial/US', 'Pound', 'lb', 'A bag of flour'],
      ['Specialized', 'Carat', 'ct', 'Used for gemstones (200 mg)'],
      [
        'Specialized',
        'Troy Ounce',
        'troy oz',
        'Used for precious metals (31.1 g)',
      ],
    ],
  }

  return (
    <div className="container mx-auto mt-16 px-4">
      <div className="space-y-12">
        <section>
          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            Weight Conversion: Kilograms, Pounds, Ounces & More
          </h2>
          <p className="text-muted-foreground max-w-4xl text-lg">
            From perfecting a delicate recipe in the kitchen to ensuring precise
            medication dosages in healthcare, or calculating shipping costs for
            international freight, accurate weight conversion is a daily
            necessity. Our comprehensive Weight Converter simplifies these
            essential tasks, providing reliable and instant results for every
            scenario.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Why Convert Weight? The Critical Role of Accurate Measurement
          </h2>
          <p className="text-muted-foreground">
            Weight measurement is fundamental in physics and everyday life,
            influencing everything from cooking recipes to industrial
            production. People convert weight units for a multitude of reasons,
            including international trade, scientific research, and ensuring
            accuracy in various tasks.
          </p>
          <p className="text-muted-foreground">
            Whether you&apos;re a home baker adjusting a recipe from grams to
            ounces, a fitness enthusiast tracking progress in kilograms and
            pounds, or a professional in science or logistics, precise weight
            conversion is indispensable. Our intuitive Weight Converter is
            designed to make every measurement seamless and accurate.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Common Weight Units by System
          </h2>
          <p className="text-muted-foreground mb-4">
            To truly master weight conversions, it&apos;s helpful to understand
            the difference between mass and weight. Mass is the amount of matter
            an object contains (e.g., kilograms), while weight is the
            gravitational force on it. In everyday use, these terms are
            interchangeable, and our tool helps you convert all common units of
            mass.
          </p>
          <Table headers={commonUnits.headers} rows={commonUnits.rows} />
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Your Most Asked-For Weight Conversions
          </h2>
          <p className="text-muted-foreground mb-4">
            Here are the most common weight conversion pairs, along with their
            conversion factors. Our tool handles these, and many more, with
            ease.
          </p>
          <Table
            headers={popularConversions.headers}
            rows={popularConversions.rows}
          />
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            FAQs about Weight Conversion
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                How many grams are in an ounce for baking?
              </p>
              <p className="text-muted-foreground mt-1">
                There are approximately 28.35 grams in one ounce. To convert,
                multiply the ounce value by 28.35. For example, 4 oz of butter
                is about 113.4 grams.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                How do I convert 150 lbs to kg for my workout?
              </p>
              <p className="text-muted-foreground mt-1">
                To convert pounds to kilograms, multiply the pound value by
                0.453592. So, 150 lbs is approximately 68.04 kg.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                What is the formula for converting milligrams to grams?
              </p>
              <p className="text-muted-foreground mt-1">
                To convert milligrams (mg) to grams (g), you divide the
                milligram value by 1,000. For example, 500 mg is equal to 0.5 g.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Explore Our Full Suite of Unit Conversion Tools
          </h2>
          <p className="text-muted-foreground">
            Weight is just one piece of the puzzle! UnitConvertor.co is your
            comprehensive hub for all kinds of measurements. Explore our other
            powerful and easy-to-use tools:
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <Link
              href="/length"
              className="bg-card text-card-foreground hover:bg-accent rounded-lg border p-4 transition-colors"
            >
              Length Conversion
            </Link>
            <Link
              href="/temperature"
              className="bg-card text-card-foreground hover:bg-accent rounded-lg border p-4 transition-colors"
            >
              Temperature Conversion
            </Link>
            <Link
              href="/area"
              className="bg-card text-card-foreground hover:bg-accent rounded-lg border p-4 transition-colors"
            >
              Area Conversion
            </Link>
            <Link
              href="/volume"
              className="bg-card text-card-foreground hover:bg-accent rounded-lg border p-4 transition-colors"
            >
              Volume Conversion
            </Link>
            <Link
              href="/time"
              className="bg-card text-card-foreground hover:bg-accent rounded-lg border p-4 transition-colors"
            >
              Time Conversion
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
