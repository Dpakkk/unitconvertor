'use client'

import { Sidebar } from '@/components/Sidebar'
import { UnitConverter } from '@/components/UnitConverter'
import { conversions, ConversionCategory } from '@/lib/conversions'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

type Props = {
  category: ConversionCategory
  initialFromValue?: string
  initialFromUnit?: string
  initialToUnit?: string
}

function useOutsideClick(
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}

export function ConverterPage({
  category,
  initialFromValue,
  initialFromUnit,
  initialToUnit,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useOutsideClick(dropdownRef, () => {
    if (isOpen) {
      setIsOpen(false)
    }
  })

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="bg-card text-card-foreground rounded-lg border p-6">
            <div className="relative mb-4" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-background flex w-full items-center justify-between rounded-md border p-3 text-left text-2xl font-bold"
              >
                <span>{category.name} Converter</span>
                <svg
                  className={`text-muted-foreground h-6 w-6 transform transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-md border bg-white shadow-lg dark:bg-gray-800">
                  <ul className="py-1">
                    {conversions.map((cat) => (
                      <li key={cat.path}>
                        <Link
                          href={cat.path === '/length' ? '/' : cat.path}
                          className="text-card-foreground hover:bg-accent block px-4 py-2 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {cat.name} Converter
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <UnitConverter
              category={category}
              initialFromValue={initialFromValue}
              initialFromUnit={initialFromUnit}
              initialToUnit={initialToUnit}
            />
          </div>
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
