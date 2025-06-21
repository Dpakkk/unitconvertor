export type Unit = {
  name: string
  symbol: string
  factor: number // Factor relative to a base unit
}

export type ConversionCategory = {
  name: string
  path: string
  baseUnit: string
  units: Unit[]
  type: 'linear' | 'temperature'
}

export const conversions: ConversionCategory[] = [
  {
    name: 'Length',
    path: '/length',
    baseUnit: 'meter',
    units: [
      { name: 'Meter', symbol: 'm', factor: 1 },
      { name: 'Kilometer', symbol: 'km', factor: 1000 },
      { name: 'Centimeter', symbol: 'cm', factor: 0.01 },
      { name: 'Millimeter', symbol: 'mm', factor: 0.001 },
      { name: 'Mile', symbol: 'mi', factor: 1609.34 },
      { name: 'Yard', symbol: 'yd', factor: 0.9144 },
      { name: 'Foot', symbol: 'ft', factor: 0.3048 },
      { name: 'Inch', symbol: 'in', factor: 0.0254 },
    ],
    type: 'linear',
  },
  {
    name: 'Weight',
    path: '/weight',
    baseUnit: 'gram',
    units: [
      { name: 'Gram', symbol: 'g', factor: 1 },
      { name: 'Kilogram', symbol: 'kg', factor: 1000 },
      { name: 'Milligram', symbol: 'mg', factor: 0.001 },
      { name: 'Pound', symbol: 'lb', factor: 453.592 },
      { name: 'Ounce', symbol: 'oz', factor: 28.3495 },
    ],
    type: 'linear',
  },
  {
    name: 'Temperature',
    path: '/temperature',
    baseUnit: 'celsius',
    units: [
      { name: 'Celsius', symbol: '°C', factor: 1 },
      { name: 'Fahrenheit', symbol: '°F', factor: 1 }, // Special handling needed
      { name: 'Kelvin', symbol: 'K', factor: 1 }, // Special handling needed
    ],
    type: 'temperature',
  },
  {
    name: 'Area',
    path: '/area',
    baseUnit: 'square meter',
    units: [
      { name: 'Square Meter', symbol: 'm²', factor: 1 },
      { name: 'Square Kilometer', symbol: 'km²', factor: 1000000 },
      { name: 'Square Foot', symbol: 'ft²', factor: 0.092903 },
      { name: 'Square Yard', symbol: 'yd²', factor: 0.836127 },
      { name: 'Acre', symbol: 'acre', factor: 4046.86 },
      { name: 'Hectare', symbol: 'ha', factor: 10000 },
    ],
    type: 'linear',
  },
  {
    name: 'Volume',
    path: '/volume',
    baseUnit: 'liter',
    units: [
      { name: 'Liter', symbol: 'L', factor: 1 },
      { name: 'Milliliter', symbol: 'mL', factor: 0.001 },
      { name: 'Gallon (US)', symbol: 'gal', factor: 3.78541 },
      { name: 'Quart (US)', symbol: 'qt', factor: 0.946353 },
      { name: 'Pint (US)', symbol: 'pt', factor: 0.473176 },
      { name: 'Cup (US)', symbol: 'cup', factor: 0.24 },
      { name: 'Fluid Ounce (US)', symbol: 'fl oz', factor: 0.0295735 },
    ],
    type: 'linear',
  },
  {
    name: 'Time',
    path: '/time',
    baseUnit: 'second',
    units: [
      { name: 'Second', symbol: 's', factor: 1 },
      { name: 'Minute', symbol: 'min', factor: 60 },
      { name: 'Hour', symbol: 'h', factor: 3600 },
      { name: 'Day', symbol: 'd', factor: 86400 },
      { name: 'Week', symbol: 'wk', factor: 604800 },
      { name: 'Month', symbol: 'mo', factor: 2629800 },
      { name: 'Year', symbol: 'yr', factor: 31557600 },
    ],
    type: 'linear',
  },
  // More categories to be added here
]
