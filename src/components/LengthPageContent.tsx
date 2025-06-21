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

export function LengthPageContent() {
  const popularConversions = {
    headers: ['From Unit', 'To Unit', 'Conversion Factor'],
    rows: [
      ['Inch (in)', 'Centimeter (cm)', '2.54'],
      ['Centimeter (cm)', 'Inch (in)', '0.3937'],
      ['Foot (ft)', 'Meter (m)', '0.3048'],
      ['Meter (m)', 'Foot (ft)', '3.28084'],
      ['Mile (mi)', 'Kilometer (km)', '1.60934'],
      ['Kilometer (km)', 'Mile (mi)', '0.62137'],
      ['Yard (yd)', 'Meter (m)', '0.9144'],
      ['Meter (m)', 'Yard (yd)', '1.09361'],
    ],
  }

  const commonUnits = {
    headers: ['System', 'Unit Name', 'Symbol', 'Approximate Real-World Scale'],
    rows: [
      ['Metric (SI)', 'Millimeter', 'mm', 'Thickness of a credit card'],
      ['Metric (SI)', 'Centimeter', 'cm', 'Width of a fingernail'],
      ['Metric (SI)', 'Meter', 'm', 'Height of a doorway'],
      ['Metric (SI)', 'Kilometer', 'km', 'A 10-minute walk'],
      ['Imperial/US', 'Inch', 'in', 'Length of a thumb'],
      ['Imperial/US', 'Foot', 'ft', 'Length of an adult foot'],
      ['Imperial/US', 'Yard', 'yd', 'Length of a baseball bat'],
      ['Imperial/US', 'Mile', 'mi', 'A 20-minute walk'],
      ['Astronomical', 'Light-year', 'ly', 'Distance light travels in a year'],
    ],
  }
  return (
    <div className="container mx-auto mt-16 px-4">
      <div className="space-y-12">
        <section>
          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            Effortless Length Conversion for Any Unit
          </h2>
          <p className="text-muted-foreground max-w-4xl text-lg">
            Instantly convert any length unit – from inches to centimeters,
            miles to kilometers, and everything in between. Our precise tool
            makes complex calculations simple and fast, empowering you with
            accurate measurements for any project or purpose.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Why Convert Length? Bridging the Gap Between Measurements
          </h2>
          <p className="text-muted-foreground">
            Length conversion is the process of translating a measurement from
            one unit to another, like changing inches into centimeters.
            It&apos;s a skill we all use, and it&apos;s essential in our
            interconnected world. From measuring a room for new furniture to
            understanding distances on a map, length conversion is everywhere.
          </p>
          <p className="text-muted-foreground">
            The primary reason we need conversion tools is the coexistence of
            different measurement systems. The metric system (SI) is used by
            most of the world, while the United States and a few other countries
            use the imperial or US customary system. Our converter helps you
            seamlessly navigate between them.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Understanding Length Units: Metric vs. Imperial
          </h2>
          <p className="text-muted-foreground mb-4">
            The world of measurement is broadly divided into two systems: the
            Metric System (SI) and the Imperial/US Customary System. The metric
            system is based on powers of ten, making conversions
            straightforward. In contrast, imperial units like inches, feet, and
            miles evolved from older traditions. Our tool handles both, ensuring
            you always get the right measurement.
          </p>
          <Table headers={commonUnits.headers} rows={commonUnits.rows} />
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Your Most Asked-For Length Conversions
          </h2>
          <p className="text-muted-foreground mb-4">
            Based on what people search for most, here are the most common
            length conversion pairs. Our tool makes these, and many more,
            effortless.
          </p>
          <Table
            headers={popularConversions.headers}
            rows={popularConversions.rows}
          />
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            FAQs about Length Conversion
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">What is 32 cm in inches?</p>
              <p className="text-muted-foreground mt-1">
                There are approximately 12.6 inches in 32 centimeters. To
                convert, you divide the centimeter value by 2.54.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                What is the smallest unit of length?
              </p>
              <p className="text-muted-foreground mt-1">
                The smallest theoretical unit is Planck Length, used in quantum
                physics. In practical terms, units like angstroms or picometers
                are used for atomic-scale measurements.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">How do you convert cm to inches?</p>
              <p className="text-muted-foreground mt-1">
                To convert centimeters to inches, you divide the number of
                centimeters by 2.54. For example, 10 cm ÷ 2.54 ≈ 3.94 inches.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Explore Our Full Suite of Unit Conversion Tools
          </h2>
          <p className="text-muted-foreground">
            Length is just the beginning! UnitConvertor.co is your comprehensive
            hub for all kinds of measurements. Explore our other powerful and
            easy-to-use tools:
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <Link
              href="/weight"
              className="bg-card text-card-foreground hover:bg-accent rounded-lg border p-4 transition-colors"
            >
              Weight Conversion
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
