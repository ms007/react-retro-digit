import { describe, it, expect } from 'vitest'
import { validateNumber, validateRatio } from './validate'

describe('validateNumber', () => {
  it('should parse leading digit from a string', () => {
    expect(validateNumber('123')).toBe(1)
    expect(validateNumber('456')).toBe(4)
  })

  it('should return 0 if no digits in string', () => {
    expect(validateNumber('abc')).toBe(0)
    expect(validateNumber('')).toBe(0)
  })

  it('should parse digit from a numeric input', () => {
    expect(validateNumber(123)).toBe(1)
    expect(validateNumber(456)).toBe(4)
  })

  it('should return 0 if string does not start with a digit', () => {
    expect(validateNumber('a123')).toBe(1)
  })
})

describe('validateRatio', () => {
  it('should return the number itself if between 0 and 1', () => {
    expect(validateRatio(0.5)).toBe(0.5)
    expect(validateRatio('0.7')).toBe(0.7)
  })

  it('should return 0.1 if the number is outside 0-1 range', () => {
    expect(validateRatio(1.5)).toBe(0.1)
    expect(validateRatio(-0.1)).toBe(0.1)
    expect(validateRatio('1.1')).toBe(0.1)
  })

  it('should return 0.1 if the input cannot be parsed to a number', () => {
    expect(validateRatio('abc')).toBe(0.1)
    expect(validateRatio('NaN')).toBe(0.1)
  })

  it('should handle numeric input correctly', () => {
    expect(validateRatio(0)).toBe(0)
    expect(validateRatio(1)).toBe(1)
  })
})
