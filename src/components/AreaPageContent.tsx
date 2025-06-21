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

export function AreaPageContent() {
  const popularConversions = {
    headers: ['From Unit', 'To Unit', 'Conversion Factor'],
    rows: [
      ['Square Foot (ft²)', 'Square Meter (m²)', '0.092903'],
      ['Square Meter (m²)', 'Square Foot (ft²)', '10.7639'],
      ['Acre (ac)', 'Hectare (ha)', '0.404686'],
      ['Hectare (ha)', 'Acre (ac)', '2.47105'],
      ['Square Yard (yd²)', 'Square Meter (m²)', '0.836127'],
      ['Square Meter (m²)', 'Square Yard (yd²)', '1.19599'],
    ],
  }

  const commonUnits = {
    headers: ['System', 'Unit Name', 'Symbol', 'Approximate Real-World Scale'],
    rows: [
      ['Metric (SI)', 'Square Meter', 'm²', 'Floor area of a small bathroom'],
      ['Metric (SI)', 'Hectare', 'ha', 'Area of a football (soccer) field'],
      ['Metric (SI)', 'Square Kilometer', 'km²', 'Area of a small town'],
      ['Imperial/US', 'Square Foot', 'ft²', 'Area of a typical floor tile'],
      ['Imperial/US', 'Acre', 'ac', 'Area of an American football field'],
      [
        'Imperial/US',
        'Square Mile',
        'mi²',
        'Area of a large park or small city',
      ],
    ],
  }

  return (
    <div className="container mx-auto mt-16 px-4">
      <div className="space-y-12">
        <section>
          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            Area Conversion: Square Meters, Acres, Hectares & More
          </h2>
          <p className="text-muted-foreground max-w-4xl text-lg">
            Whether you&apos;re measuring a plot of land for a new home,
            calculating materials for a renovation project, or interpreting
            scientific data, understanding and converting area units is a
            fundamental task. Our intuitive Area Converter simplifies these
            essential calculations, providing reliable and instant results for
            every scenario.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Why Convert Area? Navigating a World of Different Dimensions
          </h2>
          <p className="text-muted-foreground">
            Area conversion is translating a measurement of surface space from
            one unit to another. It&apos;s essential for real estate,
            construction, agriculture, and even crafting. Whether valuing
            property in acres and hectares, or calculating flooring needs in
            square feet and meters, precise conversion is key. Our tool bridges
            the gap between different systems, like metric and imperial, making
            your work seamless.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Understanding Area Units: Metric vs. Imperial Explained
          </h2>
          <p className="text-muted-foreground mb-4">
            The world of area measurement is dominated by units from the Metric
            (SI) and Imperial/US Customary systems. Metric units like the square
            meter (m²) are based on powers of ten. Imperial units like the acre
            (ac) and square foot (ft²) evolved from older traditions. Our tool
            handles both, ensuring you always get the right measurement.
          </p>
          <Table headers={commonUnits.headers} rows={commonUnits.rows} />
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Your Most Asked-For Area Conversions
          </h2>
          <p className="text-muted-foreground mb-4">
            Here are the most common area conversion pairs, along with their
            conversion factors. Our tool makes these, and many more, effortless.
          </p>
          <Table
            headers={popularConversions.headers}
            rows={popularConversions.rows}
          />
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            FAQs about Area Conversion
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                How many square feet are in an acre?
              </p>
              <p className="text-muted-foreground mt-1">
                One acre is exactly 43,560 square feet. This is a common
                conversion used in real estate and land measurement in the U.S.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                What is the difference between an acre and a hectare?
              </p>
              <p className="text-muted-foreground mt-1">
                An acre is an imperial unit (about 4,047 m²), while a hectare is
                a metric unit (10,000 m²). One hectare is approximately 2.47
                acres.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                How do I convert square meters to square feet for flooring?
              </p>
              <p className="text-muted-foreground mt-1">
                To convert square meters to square feet, multiply by 10.764. For
                example, a 20 square meter room is 20 × 10.764 = 215.28 square
                feet.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Explore Our Full Suite of Unit Conversion Tools
          </h2>
          <p className="text-muted-foreground">
            Area is just one piece of the puzzle! UnitConvertor.co is your
            comprehensive hub for all kinds of measurements.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <Link
              href="/length"
              className="bg-card text-card-foreground hover:bg-accent rounded-lg border p-4 transition-colors"
            >
              Length Conversion
            </Link>
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
