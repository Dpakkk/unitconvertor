'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { conversions } from '@/lib/conversions'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  return (
    <header className="border-b px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">
          <Link href="/">UnitConvertor</Link>
        </h1>
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
          className="rounded-md border px-4 py-2"
        >
          {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </header>
  )
}
