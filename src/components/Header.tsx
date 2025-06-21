'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { conversions } from '@/lib/conversions'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function Header() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  return (
    <header className="border-b px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="UnitConvertor Logo"
            width={239}
            height={239}
          />
        </Link>
        <nav className="hidden gap-4 md:flex">
          {conversions.map((category) => (
            <Link
              key={category.path}
              href={category.path}
              className={`text-sm font-medium ${
                pathname === category.path ? '' : 'text-muted-foreground'
              } hover:text-primary transition-colors`}
            >
              {category.name}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm"
          aria-label="Toggle theme"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute h-4 w-4 scale-0 rotate-90 transition-transform duration-500 dark:scale-100 dark:rotate-0"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute h-4 w-4 scale-100 rotate-0 transition-transform duration-500 dark:scale-0 dark:-rotate-90"
          >
            <path d="M12 3v1"></path>
            <path d="M12 20v1"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M1 12h1"></path>
            <path d="M22 12h1"></path>
            <path d="m4.93 19.07 1.41-1.41"></path>
            <path d="m17.66 6.34 1.41-1.41"></path>
            <circle cx="12" cy="12" r="5"></circle>
          </svg>
        </button>
      </div>
    </header>
  )
}
