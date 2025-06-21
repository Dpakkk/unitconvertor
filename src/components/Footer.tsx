import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { conversions } from '@/lib/conversions'

export function Footer() {
  const lastUpdatedDate = new Date()
  lastUpdatedDate.setDate(lastUpdatedDate.getDate() - 2)
  const formattedDate = lastUpdatedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background mt-8 border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="mb-2 inline-flex items-center gap-2 text-lg font-semibold"
            >
              <Image
                src="/logo.svg"
                alt="UnitConvertor Logo"
                width={150}
                height={150}
              />
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm">
              Online Unit Converter for All Measurements
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 text-center sm:grid-cols-3 md:text-left">
            {conversions.map((category) => (
              <Link
                key={category.path}
                href={category.path}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t pt-6">
          <p className="text-muted-foreground text-center text-sm">
            Built by{' '}
            <Link
              href="https://github.com/Dpakkk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium underline-offset-4 hover:underline"
            >
              Dpakkk
            </Link>
            . The source code is available on{' '}
            <Link
              href="https://github.com/Dpakkk/unitconvertor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium underline-offset-4 hover:underline"
            >
              GitHub
            </Link>
            .
          </p>
          <p className="text-muted-foreground mt-4 text-center text-sm">
            &copy; {currentYear} UnitConvertor.co. All rights reserved. | Last
            Updated: {formattedDate}
          </p>
        </div>
      </div>
    </footer>
  )
}
