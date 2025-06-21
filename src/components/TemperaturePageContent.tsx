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

export function TemperaturePageContent() {
  const keyTemperatures = {
    headers: ['Description', 'Celsius (°C)', 'Fahrenheit (°F)', 'Kelvin (K)'],
    rows: [
      ['Absolute Zero', '-273.15', '-459.67', '0'],
      ['Freezing Point of Water', '0', '32', '273.15'],
      ['Room Temperature (approx.)', '20-25', '68-77', '293.15-298.15'],
      ['Normal Human Body Temperature', '37', '98.6', '310.15'],
      ['Boiling Point of Water', '100', '212', '373.15'],
    ],
  }

  const popularConversions = {
    headers: ['From Unit', 'To Unit', 'Formula'],
    rows: [
      ['Celsius (°C)', 'Fahrenheit (°F)', '(°C × 1.8) + 32'],
      ['Fahrenheit (°F)', 'Celsius (°C)', '(°F - 32) / 1.8'],
      ['Celsius (°C)', 'Kelvin (K)', '°C + 273.15'],
      ['Kelvin (K)', 'Celsius (°C)', 'K - 273.15'],
      ['Fahrenheit (°F)', 'Kelvin (K)', '((°F - 32) / 1.8) + 273.15'],
      ['Kelvin (K)', 'Fahrenheit (°F)', '(K - 273.15) × 1.8 + 32'],
    ],
  }

  return (
    <div className="container mx-auto mt-16 px-4">
      <div className="space-y-12">
        <section>
          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            Temperature Conversion: Celsius, Fahrenheit, Kelvin & More
          </h2>
          <p className="text-muted-foreground max-w-4xl text-lg">
            From checking the weather forecast in a foreign country to following
            a precise baking recipe, or conducting critical scientific
            experiments, understanding and converting temperature units is a
            daily necessity. Our intuitive Temperature Converter simplifies
            these essential tasks, providing reliable and instant results for
            every scenario.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Why Convert Temperature? Navigating a World of Different Scales
          </h2>
          <p className="text-muted-foreground">
            Temperature conversion is the process of translating a measurement
            from one scale to another. When you&apos;re traveling abroad,
            knowing that 25°C is a pleasant 77°F can make all the difference.
            For cooking, converting 180°C to 350°F ensures your recipes turn out
            perfectly. In science and healthcare, precise conversions are
            absolutely critical.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Understanding Temperature Scales: Celsius, Fahrenheit, and Kelvin
          </h2>
          <p className="text-muted-foreground mb-4">
            The world of temperature is dominated by three main scales: Celsius
            (°C), Fahrenheit (°F), and Kelvin (K). Celsius is the metric
            standard, Fahrenheit is common in the US, and Kelvin is the absolute
            scale used in science. Our tool handles all three seamlessly.
          </p>
          <Table
            headers={keyTemperatures.headers}
            rows={keyTemperatures.rows}
          />
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            How Temperature Conversion Works: Simple Formulas
          </h2>
          <p className="text-muted-foreground mb-4">
            While our converter does the heavy lifting, knowing the basic
            formulas can help you understand the relationships between scales.
            Here are the most common conversion formulas.
          </p>
          <Table
            headers={popularConversions.headers}
            rows={popularConversions.rows}
          />
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            FAQs about Temperature Conversion
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                What is the formula to convert Celsius to Fahrenheit?
              </p>
              <p className="text-muted-foreground mt-1">
                The formula is: °F = (°C × 1.8) + 32.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                What is the boiling point of water?
              </p>
              <p className="text-muted-foreground mt-1">
                At standard atmospheric pressure, water boils at 100°C, 212°F,
                or 373.15 K.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                Is there a temperature where Celsius and Fahrenheit are the
                same?
              </p>
              <p className="text-muted-foreground mt-1">
                Yes, the two scales converge at -40 degrees. So, -40°C is equal
                to -40°F.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Explore Our Full Suite of Unit Conversion Tools
          </h2>
          <p className="text-muted-foreground">
            Temperature is just one piece of the puzzle! UnitConvertor.co is
            your comprehensive hub for all kinds of measurements.
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
