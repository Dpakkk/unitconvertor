'use client'

import { ConversionCategory, Unit } from '@/lib/conversions'
import { useState } from 'react'

type Props = {
  category: ConversionCategory
}

const convert = (
  value: number,
  from: Unit,
  to: Unit,
  type: 'linear' | 'temperature',
) => {
  if (type === 'temperature') {
    // Celsius to Fahrenheit
    if (from.symbol === '°C' && to.symbol === '°F') return (value * 9) / 5 + 32
    // Fahrenheit to Celsius
    if (from.symbol === '°F' && to.symbol === '°C')
      return ((value - 32) * 5) / 9
    // Celsius to Kelvin
    if (from.symbol === '°C' && to.symbol === 'K') return value + 273.15
    // Kelvin to Celsius
    if (from.symbol === 'K' && to.symbol === '°C') return value - 273.15
    // Fahrenheit to Kelvin
    if (from.symbol === '°F' && to.symbol === 'K')
      return ((value - 32) * 5) / 9 + 273.15
    // Kelvin to Fahrenheit
    if (from.symbol === 'K' && to.symbol === '°F')
      return ((value - 273.15) * 9) / 5 + 32
    // if units are same
    if (from.symbol === to.symbol) return value
  }
  return (value * from.factor) / to.factor
}

function CopyButton({
  textToCopy,
  className,
}: {
  textToCopy: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (!textToCopy) return
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className={`relative inline-flex ${className || ''}`}>
      <button
        onClick={handleCopy}
        className="text-muted-foreground hover:text-foreground p-1"
        aria-label="Copy value"
      >
        {copied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        )}
      </button>
      {copied && (
        <div className="bg-foreground text-background absolute bottom-full left-1/2 mb-1 -translate-x-1/2 transform rounded-md px-2 py-1 text-xs whitespace-nowrap">
          Copied!
        </div>
      )}
    </div>
  )
}

export function UnitConverter({ category }: Props) {
  const [fromUnit, setFromUnit] = useState<Unit>(category.units[0])
  const [toUnit, setToUnit] = useState<Unit>(category.units[1])
  const [fromValue, setFromValue] = useState<string>('1')
  const [toValue, setToValue] = useState<string>(() => {
    const result = convert(
      1,
      category.units[0],
      category.units[1],
      category.type,
    )
    return result.toString()
  })

  const handleFromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFromValue(value)
    const numericValue = parseFloat(value)
    if (!isNaN(numericValue)) {
      const result = convert(numericValue, fromUnit, toUnit, category.type)
      setToValue(result.toString())
    } else {
      setToValue('')
    }
  }

  const handleToValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setToValue(value)
    const numericValue = parseFloat(value)
    if (!isNaN(numericValue)) {
      const result = convert(numericValue, toUnit, fromUnit, category.type)
      setFromValue(result.toString())
    } else {
      setFromValue('')
    }
  }

  const handleFromUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const unit = category.units.find((u) => u.symbol === e.target.value)
    if (unit) {
      setFromUnit(unit)
      const numericValue = parseFloat(fromValue)
      if (!isNaN(numericValue)) {
        const result = convert(numericValue, unit, toUnit, category.type)
        setToValue(result.toString())
      }
    }
  }

  const handleToUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const unit = category.units.find((u) => u.symbol === e.target.value)
    if (unit) {
      setToUnit(unit)
      const numericValue = parseFloat(fromValue)
      if (!isNaN(numericValue)) {
        const result = convert(numericValue, fromUnit, unit, category.type)
        setToValue(result.toString())
      }
    }
  }

  const fullResultString = `${fromValue || 0} ${fromUnit.name} = ${
    toValue || '...'
  } ${toUnit.name}`

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="from-unit"
            className="text-muted-foreground mb-1 block text-sm font-medium"
          >
            From:
          </label>
          <select
            id="from-unit"
            value={fromUnit.symbol}
            onChange={handleFromUnitChange}
            className="mb-2 w-full rounded border bg-transparent p-2"
          >
            {category.units.map((unit) => (
              <option key={unit.symbol} value={unit.symbol}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
          <input
            type="number"
            aria-label="From Value"
            value={fromValue}
            onChange={handleFromValueChange}
            className="w-full rounded border bg-transparent p-2"
          />
        </div>
        <div>
          <label
            htmlFor="to-unit"
            className="text-muted-foreground mb-1 block text-sm font-medium"
          >
            To:
          </label>
          <select
            id="to-unit"
            value={toUnit.symbol}
            onChange={handleToUnitChange}
            className="mb-2 w-full rounded border bg-transparent p-2"
          >
            {category.units.map((unit) => (
              <option key={unit.symbol} value={unit.symbol}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
          <input
            type="number"
            aria-label="To Value"
            value={toValue}
            onChange={handleToValueChange}
            className="w-full rounded border bg-transparent p-2"
          />
        </div>
      </div>
      <div className="bg-background relative mt-6 rounded-lg border p-4 text-center text-lg">
        <CopyButton
          textToCopy={fullResultString}
          className="absolute top-2 right-2"
        />
        <p className="text-muted-foreground font-semibold">Result:</p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 text-2xl font-bold">
          <code className="bg-accent text-accent-foreground inline-flex items-center rounded-md px-2 py-1 font-mono">
            {fromValue || 0}
            <CopyButton textToCopy={fromValue} className="ml-2" />
          </code>
          <span>{fromUnit.name}</span>
          <span>=</span>
          <code className="bg-accent text-accent-foreground inline-flex items-center rounded-md px-2 py-1 font-mono">
            {toValue || '...'}
            <CopyButton textToCopy={toValue} className="ml-2" />
          </code>
          <span>{toUnit.name}</span>
        </div>
      </div>
    </>
  )
}
