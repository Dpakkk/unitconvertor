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

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <select
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
          value={fromValue}
          onChange={handleFromValueChange}
          className="w-full rounded border bg-transparent p-2"
        />
      </div>
      <div>
        <select
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
          value={toValue}
          onChange={handleToValueChange}
          className="w-full rounded border bg-transparent p-2"
        />
      </div>
    </div>
  )
}
