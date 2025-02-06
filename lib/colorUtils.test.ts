import { describe, it, expect } from 'vitest'
import { getAlphaValue } from './colorUtils'

describe('getAlphaValue', () => {
  // Tests for rgba() and rgb()
  it('should parse rgba color with percentage alpha', () => {
    expect(getAlphaValue('rgba(255, 99, 71, 50%)')).toBeCloseTo(0.5)
  })

  it('should parse rgba color with / and decimal alpha', () => {
    expect(getAlphaValue('rgb(255 0 0 / 0.5)')).toBeCloseTo(0.5)
  })

  it('should parse rgba color with / and percentage alpha', () => {
    expect(getAlphaValue('rgb(255 0 0 / 50%)')).toBeCloseTo(0.5)
  })

  it('should parse rgba color with decimal alpha', () => {
    expect(getAlphaValue('rgba(255, 99, 71, 0.5)')).toBeCloseTo(0.5)
  })

  it('should parse rgb color without alpha', () => {
    expect(getAlphaValue('rgb(255, 99, 71)')).toBe(1)
  })

  // Tests for hsla() and hsl()
  it('should parse hsla color with percentage alpha', () => {
    expect(getAlphaValue('hsla(120, 100%, 50%, 75%)')).toBeCloseTo(0.75)
  })

  it('should parse hsla color with decimal alpha', () => {
    expect(getAlphaValue('hsla(120, 100%, 50%, 0.75)')).toBeCloseTo(0.75)
  })

  it('should parse hsl color without alpha', () => {
    expect(getAlphaValue('hsl(120, 100%, 50%)')).toBe(1)
  })

  it('should parse hsl color with / and percentage', () => {
    expect(getAlphaValue('hsl(120 100% 50% / 30%)')).toBeCloseTo(0.3)
  })

  it('should parse hsl color with / and decimal', () => {
    expect(getAlphaValue('hsl(120 100% 50% / 0.3)')).toBeCloseTo(0.3)
  })

  // Tests for hex Farben
  it('should parse 4-digit hex color #RGBA', () => {
    expect(getAlphaValue('#ff15')).toBeCloseTo(0.33)
  })

  it('should parse 8-digit hex color #RRGGBBAA', () => {
    expect(getAlphaValue('#FF634780')).toBeCloseTo(0.5)
  })

  // Tests for oklch()
  it('should parse oklch color with decimal alpha', () => {
    expect(getAlphaValue('oklch(83%, 0.1, 30, 0.5)')).toBeCloseTo(0.5)
  })

  it('should parse oklch color with percentage alpha', () => {
    expect(getAlphaValue('oklch(87.33% 0.1922 89.47 / 76.35%)')).toBeCloseTo(0.7635)
  })

  it('should parse other oklch color with percentage alpha', () => {
    expect(getAlphaValue('oklch(0.62796 0.22486 0.12585 / 50%)')).toBeCloseTo(0.5)
  })

  // Tests for oklab()
  it('should parse oklab color with alpha', () => {
    expect(getAlphaValue('oklab(0.5, 0.1, 0.1, 0.5)')).toBeCloseTo(0.5)
  })

  it('should parse oklab color with percentage alpha', () => {
    expect(getAlphaValue('oklab(0.62796 0.22486 0.12585 / 50%)')).toBeCloseTo(0.5)
  })

  it('should parse oklab color with decimal alpha', () => {
    expect(getAlphaValue('oklab(0.62796 0.22486 0.12585 / 0.5)')).toBeCloseTo(0.5)
  })

  // Tests for lab()
  it('should parse lab color with alpha', () => {
    expect(getAlphaValue('lab(50, -50, 50, 0.5)')).toBeCloseTo(0.5)
  })

  it('should parse lab color with percentage ahead and alpha', () => {
    expect(getAlphaValue('lab(53.23288% 80.109309 67.220068 / 0.5)')).toBeCloseTo(0.5)
  })

  it('should parse lab color with percentage alpha', () => {
    expect(getAlphaValue('lab(53.23288% 80.109309 67.220068 / 50%)')).toBeCloseTo(0.5)
  })

  // Tests for lch()
  it('should parse lch color with alpha', () => {
    expect(getAlphaValue('lch(50, 50, 180, 0.5)')).toBeCloseTo(0.5)
  })

  it('should parse lch color with percentage alpha', () => {
    expect(getAlphaValue('lch(53.23288% 104.552115 40.853768 / 0.5)')).toBeCloseTo(0.5)
  })

  it('should parse lch color with decimal alpha', () => {
    expect(getAlphaValue('lch(53.23288% 104.552115 40.853768 / 50%)')).toBeCloseTo(0.5)
  })

  // Tests for hwb()
  it('should parse hwb color with alpha', () => {
    expect(getAlphaValue('hwb(120, 0%, 0%, 0.5)')).toBeCloseTo(0.5)
  })
})
