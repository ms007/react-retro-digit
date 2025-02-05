function parseNumber(value: string | number): number {
  return parseInt(value.toString()[0], 10)
}

export function validateNumber(value: number | string): number {
  if (typeof value === 'number') {
    return parseNumber(value.toString()[0])
  }

  if (typeof value === 'string' && value.match(/\d/)) {
    const match = value.match(/\d/)
    return match ? parseNumber(match[0]) : 0
  }

  return 0
}

export function validateRatio(value: string | number): number {
  const num = typeof value === 'number' ? value : parseFloat(value)
  return !isNaN(num) && num >= 0 && num <= 1 ? num : 0.1
}
