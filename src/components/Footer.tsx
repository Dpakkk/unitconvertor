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
    <footer className="mt-12 border-t bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="UnitConvertor Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mt-4 max-w-xs text-sm">
              A simple and fast online tool for all your conversion needs.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-2">
            {/* Column 1: Converters */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Converters
              </h3>
              <ul className="mt-4 space-y-2">
                {conversions.slice(0, 3).map((category) => (
                  <li key={category.path}>
                    <Link
                      href={
                        category.path === '/length-converter'
                          ? '/'
                          : category.path
                      }
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 2: More Converters */}
            <div>
              <h3 className="hidden font-semibold text-gray-900 opacity-0 sm:block dark:text-white">
                &nbsp;
              </h3>
              <ul className="mt-4 space-y-2">
                {conversions.slice(3, 6).map((category) => (
                  <li key={category.path}>
                    <Link
                      href={category.path}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 3: Company & Connect */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/Dpakkk/unitconvertor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 dark:border-gray-800">
          <p className="text-muted-foreground text-center text-sm">
            &copy; {currentYear} UnitConvertor.co. All rights reserved. | Last
            Updated: {formattedDate}
          </p>
        </div>
      </div>
    </footer>
  )
}
