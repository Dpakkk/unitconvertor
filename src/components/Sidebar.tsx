'use client'

import { conversions } from '@/lib/conversions'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="bg-card text-card-foreground rounded-lg border p-6">
      <h3 className="text-lg font-semibold">Common Unit Converters</h3>
      <ul className="mt-4 space-y-2">
        {conversions.map((category) => (
          <li key={category.path}>
            <Link
              href={category.path === '/length-converter' ? '/' : category.path}
              className={`hover:text-primary block text-sm transition-colors ${
                pathname === category.path ||
                (pathname === '/' && category.path === '/length-converter')
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground'
              }`}
            >
              • {category.name} Converter
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
