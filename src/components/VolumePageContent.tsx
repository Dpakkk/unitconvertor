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

export function VolumePageContent() {
  const popularConversions = {
    headers: ['From Unit', 'To Unit', 'Conversion Factor'],
    rows: [
      ['Liter (L)', 'Gallon (US)', '0.264172'],
      ['Gallon (US)', 'Liter (L)', '3.78541'],
      ['Milliliter (mL)', 'Fluid Ounce (US)', '0.033814'],
      ['Fluid Ounce (US)', 'Milliliter (mL)', '29.5735'],
      ['Cubic Meter (m³)', 'Cubic Foot (ft³)', '35.3147'],
      ['Cubic Foot (ft³)', 'Cubic Meter (m³)', '0.0283168'],
    ],
  }

  const commonUnits = {
    headers: ['System', 'Unit Name', 'Symbol', 'Approximate Real-World Scale'],
    rows: [
      ['Metric (SI)', 'Milliliter', 'mL', 'A small spoon of liquid'],
      ['Metric (SI)', 'Liter', 'L', 'A standard soda bottle'],
      ['Metric (SI)', 'Cubic Meter', 'm³', 'A large refrigerator'],
      ['Imperial/US', 'Fluid Ounce', 'fl oz', 'A shot glass'],
      ['Imperial/US', 'Cup', 'c', 'A standard kitchen cup'],
      ['Imperial/US', 'Gallon', 'gal', 'A large milk jug'],
      ['Imperial/US', 'Cubic Foot', 'ft³', 'A basketball'],
    ],
  }

  return (
    <div className="container mx-auto mt-16 px-4">
      <div className="space-y-12">
        <section>
          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            Volume Conversion: Liters, Gallons, Cubic Meters & More
          </h2>
          <p className="text-muted-foreground max-w-4xl text-lg">
            Whether you&apos;re following a recipe from abroad, filling a
            swimming pool, or calculating the capacity of a storage tank,
            understanding and converting volume units is a fundamental task. Our
            intuitive Volume Converter simplifies these essential calculations,
            providing reliable and instant results for every scenario.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Why Convert Volume? Navigating Different Capacities
          </h2>
          <p className="text-muted-foreground">
            Volume conversion is translating a measurement of three-dimensional
            space from one unit to another. It&apos;s essential for cooking,
            home and garden projects, science, and industry. Whether you&apos;re
            converting milliliters to cups for a recipe or cubic meters for a
            construction project, precision is crucial. Our tool makes these
            calculations seamless.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Understanding Volume Units: Metric vs. Imperial Explained
          </h2>
          <p className="text-muted-foreground mb-4">
            The world of volume is dominated by units from the Metric (SI) and
            Imperial/US Customary systems. Metric units like the liter (L) are
            based on powers of ten. Imperial units like the gallon (gal) and
            fluid ounce (fl oz) evolved from older traditions. Our tool handles
            both with ease.
          </p>
          <Table headers={commonUnits.headers} rows={commonUnits.rows} />
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            How Volume Conversion Works: Simple Principles
          </h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              While our converter does the heavy lifting, knowing the basic
              principles can help you understand the relationships between
              different volume units:
            </p>
            <p>
              To convert from a <span className="font-semibold">larger</span>{' '}
              unit to a <span className="font-semibold">smaller</span> unit, you{' '}
              <span className="text-primary/80 font-semibold">multiply</span> by
              the conversion factor (e.g., gallons to quarts, multiply by 4). To
              convert from a <span className="font-semibold">smaller</span> unit
              to a <span className="font-semibold">larger</span> unit, you{' '}
              <span className="text-primary/80 font-semibold">divide</span> by
              the conversion factor (e.g., milliliters to liters, divide by
              1,000).
            </p>
            <p>Let&apos;s look at some quick examples:</p>
            <div className="space-y-2">
              <div className="rounded-lg border bg-gray-50 p-3 dark:bg-gray-800/50">
                <p className="font-mono text-sm">
                  <span className="font-semibold">
                    Convert 3 liters to milliliters:
                  </span>
                  <br />
                  Since 1 liter = 1,000 milliliters, we multiply: 3 × 1,000 =
                  3,000 milliliters.
                </p>
              </div>
              <div className="rounded-lg border bg-gray-50 p-3 dark:bg-gray-800/50">
                <p className="font-mono text-sm">
                  <span className="font-semibold">
                    Convert 8 quarts to gallons:
                  </span>
                  <br />
                  Since 1 gallon = 4 quarts, we divide: 8 ÷ 4 = 2 gallons.
                </p>
              </div>
              <div className="rounded-lg border bg-gray-50 p-3 dark:bg-gray-800/50">
                <p className="font-mono text-sm">
                  <span className="font-semibold">
                    Convert 500 milliliters to fluid ounces:
                  </span>
                  <br />
                  Since 1 fluid ounce ≈ 29.574 milliliters, we divide: 500 ÷
                  29.574 ≈ 16.9 fluid ounces.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Your Most Asked-For Volume Conversions
          </h2>
          <p className="text-muted-foreground mb-4">
            Here are the most common volume conversion pairs, along with their
            conversion factors. Our tool makes these, and many more, effortless.
          </p>
          <Table
            headers={popularConversions.headers}
            rows={popularConversions.rows}
          />
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            FAQs about Volume Conversion
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                How many milliliters are in a cup?
              </p>
              <p className="text-muted-foreground mt-1">
                In the US customary system, there are approximately 236.59
                milliliters in one cup. This is a very common conversion for
                cooking and baking.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                What is the difference between a US gallon and an imperial
                gallon?
              </p>
              <p className="text-muted-foreground mt-1">
                A US gallon is smaller than an imperial (UK) gallon. One US
                gallon is about 3.785 liters, while one imperial gallon is about
                4.546 liters. Our converter uses the US standard.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                Is a liter a measure of mass or volume?
              </p>
              <p className="text-muted-foreground mt-1">
                A liter is a unit of volume. While 1 liter of water has a mass
                of approximately 1 kilogram, the liter itself measures space,
                not mass.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Explore Our Full Suite of Unit Conversion Tools
          </h2>
          <p className="text-muted-foreground">
            Volume is just one piece of the puzzle! UnitConvertor.co is your
            comprehensive hub for all kinds of measurements.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <Link
              href="/length-converter"
              className="bg-card text-card-foreground hover:bg-accent rounded-lg border p-4 transition-colors"
            >
              Length Conversion
            </Link>
            <Link
              href="/weight-converter"
              className="bg-card text-card-foreground hover:bg-accent rounded-lg border p-4 transition-colors"
            >
              Weight Conversion
            </Link>
            <Link
              href="/temperature-converter"
              className="bg-card text-card-foreground hover:bg-accent rounded-lg border p-4 transition-colors"
            >
              Temperature Conversion
            </Link>
            <Link
              href="/area-converter"
              className="bg-card text-card-foreground hover:bg-accent rounded-lg border p-4 transition-colors"
            >
              Area Conversion
            </Link>
            <Link
              href="/time-converter"
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
