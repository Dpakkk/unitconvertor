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

export function TimePageContent() {
  const popularConversions = {
    headers: ['From Unit', 'To Unit', 'Conversion Factor'],
    rows: [
      ['Second (s)', 'Millisecond (ms)', '1,000'],
      ['Millisecond (ms)', 'Second (s)', '0.001'],
      ['Minute (min)', 'Second (s)', '60'],
      ['Second (s)', 'Minute (min)', '0.0166667'],
      ['Hour (h)', 'Minute (min)', '60'],
      ['Minute (min)', 'Hour (h)', '0.0166667'],
      ['Day (d)', 'Hour (h)', '24'],
      ['Hour (h)', 'Day (d)', '0.0416667'],
      ['Week', 'Day (d)', '7'],
      ['Day (d)', 'Week', '0.142857'],
      ['Year (yr)', 'Day (d)', '365.25 (approx.)'],
      ['Day (d)', 'Year (yr)', '0.0027379 (approx.)'],
      ['Decade', 'Year (yr)', '10'],
      ['Year (yr)', 'Decade', '0.1'],
      ['Century', 'Year (yr)', '100'],
      ['Year (yr)', 'Century', '0.01'],
      ['Millennium', 'Year (yr)', '1,000'],
      ['Year (yr)', 'Millennium', '0.001'],
    ],
  }

  const commonUnits = {
    headers: [
      'Scale',
      'Unit Name',
      'Symbol',
      'Relationship',
      'Approximate Real-World Scale Example',
    ],
    rows: [
      [
        'Fractional',
        'Nanosecond',
        'ns',
        <>
          10<sup>-9</sup> s
        </>,
        'Time for light to travel ~1 foot',
      ],
      [
        'Fractional',
        'Microsecond',
        'µs',
        <>
          10<sup>-6</sup> s
        </>,
        'Time for a high-speed camera flash',
      ],
      [
        'Fractional',
        'Millisecond',
        'ms',
        <>
          10<sup>-3</sup> s
        </>,
        'Duration of a camera shutter click',
      ],
      ['Standard', 'Second', 's', 'Base unit', 'A single heartbeat'],
      ['Standard', 'Minute', 'min', '60 s', 'Time to brew a tea bag'],
      ['Standard', 'Hour', 'h', '60 min', 'A typical work session'],
      ['Standard', 'Day', 'd', '24 h', "The Earth's rotation"],
      ['Calendar', 'Week', '', '7 days', 'A common holiday duration'],
      ['Calendar', 'Month', '', '~30.44 days', 'Duration of a lunar cycle'],
      [
        'Calendar',
        'Year',
        'yr',
        '~365.25 days',
        'One orbit of Earth around the Sun',
      ],
      ['Calendar', 'Decade', '', '10 years', 'A significant period of change'],
      [
        'Calendar',
        'Century',
        '',
        '100 years',
        'The lifespan of several generations',
      ],
      ['Calendar', 'Millennium', '', '1,000 years', 'A major historical era'],
    ],
  }

  return (
    <div className="container mx-auto mt-16 px-4">
      <div className="space-y-12">
        <section>
          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            Time Conversion: Seconds, Minutes, Hours, Days &amp; Beyond
          </h2>
          <p className="text-muted-foreground mb-4 max-w-4xl text-lg">
            Whether you&apos;re scheduling international meetings, calculating
            project durations, or simply figuring out how many minutes are left
            until the weekend, understanding and converting time units is a
            fundamental task. Our intuitive Time Converter simplifies these
            essential calculations, providing reliable and instant results for
            every scenario.
          </p>
          <p className="text-muted-foreground max-w-4xl text-lg">
            From precise scientific measurements in milliseconds to long-term
            planning in years, UnitConvertor.co offers lightning-fast, accurate
            time conversions for seconds, minutes, hours, days, weeks, months,
            years, and beyond. Say goodbye to manual calculations and hello to
            instant precision!
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Why Convert Time? Navigating a World of Different Durations
          </h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Time conversion is simply the process of translating a measurement
              of duration from one unit to another, like changing minutes into
              seconds or days into hours. It&apos;s a skill we all use, often
              without realizing it, and it&apos;s absolutely essential in our
              interconnected world.
            </p>
            <p>Think about it:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">
                  Planning &amp; Scheduling:
                </span>{' '}
                Organizing international calls, synchronizing events across
                different time zones, or setting project deadlines often
                requires converting hours into days or vice versa.
              </li>
              <li>
                <span className="font-semibold">Travel &amp; Logistics:</span>{' '}
                Estimating travel times, understanding flight durations, or
                managing shipping schedules across vast distances relies heavily
                on accurate time conversions.
              </li>
              <li>
                <span className="font-semibold">
                  Science &amp; Engineering:
                </span>{' '}
                In fields like physics, astronomy, and data analysis, precise
                time measurements, often in milliseconds or microseconds, are
                critical for experimental accuracy and data interpretation.
              </li>
              <li>
                <span className="font-semibold">Finance &amp; Business:</span>{' '}
                Calculating interest rates, loan durations, or employee work
                hours necessitates converting between days, months, and years.
              </li>
              <li>
                <span className="font-semibold">Everyday Life:</span> From
                knowing how many minutes are in an hour for a quick task to
                understanding how many days until a special event, time
                conversion is part of our daily rhythm.
              </li>
            </ul>
            <p>
              The primary reason we need conversion tools is the widespread use
              of different time measurement systems, both across cultures and
              within specialized fields. Our converter helps you seamlessly
              navigate between these units, making your life easier and your
              measurements accurate.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Understanding Time Units: From Microseconds to Millennia
          </h2>
          <p className="text-muted-foreground mb-4">
            The measurement of time has evolved over millennia, with units often
            tied to astronomical cycles (like the Earth&apos;s rotation and
            orbit) or human-defined intervals. While we primarily use seconds,
            minutes, and hours in daily life, a vast array of units exist to
            measure durations both fleeting and immense. Understanding these
            scales is key to mastering time conversions. Our tool handles all,
            ensuring you always get the right measurement, no matter the
            duration.
          </p>
          <Table headers={commonUnits.headers} rows={commonUnits.rows} />
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            How Time Conversion Works: Simple Principles
          </h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              While our converter does the heavy lifting, knowing the basic
              principles can help you understand the relationships between
              different time units:
            </p>
            <p>
              To convert from a <span className="font-semibold">larger</span>{' '}
              unit to a <span className="font-semibold">smaller</span> unit, you{' '}
              <span className="text-primary/80 font-semibold">multiply</span> by
              the conversion factor (e.g., hours to minutes, multiply by 60). To
              convert from a <span className="font-semibold">smaller</span> unit
              to a <span className="font-semibold">larger</span> unit, you{' '}
              <span className="text-primary/80 font-semibold">divide</span> by
              the conversion factor (e.g., seconds to minutes, divide by 60).
            </p>
            <p>Let&apos;s look at some quick examples:</p>
            <div className="space-y-2">
              <div className="rounded-lg border bg-gray-50 p-3 dark:bg-gray-800/50">
                <p className="font-mono text-sm">
                  <span className="font-semibold">
                    Convert 3 hours to minutes:
                  </span>
                  <br />
                  Since 1 hour = 60 minutes, we multiply: 3 × 60 = 180 minutes.
                </p>
              </div>
              <div className="rounded-lg border bg-gray-50 p-3 dark:bg-gray-800/50">
                <p className="font-mono text-sm">
                  <span className="font-semibold">
                    Convert 7200 seconds to hours:
                  </span>
                  <br />
                  Since 1 minute = 60 seconds and 1 hour = 60 minutes, there are
                  3600 seconds in an hour. We divide: 7200 ÷ 3600 = 2 hours.
                </p>
              </div>
              <div className="rounded-lg border bg-gray-50 p-3 dark:bg-gray-800/50">
                <p className="font-mono text-sm">
                  <span className="font-semibold">
                    Convert 5 days to hours:
                  </span>
                  <br />
                  Since 1 day = 24 hours, we multiply: 5 × 24 = 120 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Your Most Asked Time Conversions, Answered Instantly
          </h2>
          <p className="text-muted-foreground mb-4">
            Here are the most common time conversion pairs, along with their
            conversion factors. Our tool makes these, and many more, effortless.
          </p>
          <Table
            headers={popularConversions.headers}
            rows={popularConversions.rows}
          />
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            FAQs about Time Conversion
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">How many seconds are in a day?</p>
              <p className="text-muted-foreground mt-1">
                There are 86,400 seconds in a standard day. (24 hours/day * 60
                minutes/hour * 60 seconds/minute = 86,400 seconds).
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                Why do some months have different numbers of days?
              </p>
              <p className="text-muted-foreground mt-1">
                The varying number of days in months (28, 29, 30, or 31) is a
                result of the historical development of calendars, particularly
                the Gregorian calendar. It&apos;s a way to reconcile the
                Earth&apos;s orbital period (approximately 365.25 days) with
                human-defined calendar months.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                What is a &quot;leap year&quot; and how does it affect time
                conversion?
              </p>
              <p className="text-muted-foreground mt-1">
                A leap year occurs every four years (with exceptions for years
                divisible by 100 but not by 400) and adds an extra day (February
                29th) to the calendar. This is done to keep our calendar year
                synchronized with the astronomical year. Our converter accounts
                for this by using an average year length of 365.25 days for
                conversions involving years.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                How do time zones factor into time conversion?
              </p>
              <p className="text-muted-foreground mt-1">
                Time zones represent different offsets from Coordinated
                Universal Time (UTC) and are crucial for real-world time
                conversions, especially for scheduling. While our basic tool
                converts durations (e.g., hours to minutes), converting between
                time zones requires knowing the specific offset.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                What is the smallest unit of time that can be measured?
              </p>
              <p className="text-muted-foreground mt-1">
                In practical terms, the smallest unit of time that can be
                routinely measured is determined by the precision of atomic
                clocks, which can measure time to nanoseconds or even
                picoseconds. Theoretically, in physics, the Planck time (5.39 ×
                10<sup>-44</sup> seconds) is considered the smallest measurable
                unit of time.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Explore Our Full Suite of Unit Conversion Tools
          </h2>
          <p className="text-muted-foreground">
            Time is just one piece of the puzzle! UnitConvertor.co is your
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
          </div>
        </section>
      </div>
    </div>
  )
}
