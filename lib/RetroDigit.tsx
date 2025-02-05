import { getAlphaValue } from './colorUtils'
import { parts, visibility } from './retroNumberData'
import { validateNumber, validateRatio } from './validate'

export interface RetroDigitProps {
  number: string | number
  size?: string | number
  color?: string
  inactiveColor?: string
  alphaRatio?: string | number
  className?: string
}

type VisibilityKeys = keyof typeof visibility

export function RetroDigit({
  color,
  inactiveColor,
  alphaRatio = 0.1,
  number,
  size = 24,
  className,
}: RetroDigitProps) {
  const activeColor = color || 'currentColor'
  const activeColorAlpha = getAlphaValue(activeColor)

  const hasInactiveColor = !!inactiveColor
  const fillOpacity = activeColorAlpha * validateRatio(alphaRatio)

  const validatedNumber = validateNumber(number) as VisibilityKeys
  const visibleParts = visibility[validatedNumber]
  const partstoRender = parts.map((part, index) => {
    const visible = visibleParts.includes(index)
    return {
      ...part,
      fill: visible ? activeColor : inactiveColor ? inactiveColor : activeColor,
      fillOpacity: visible ? 1 : hasInactiveColor ? undefined : fillOpacity,
    }
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 360"
      height={size}
      className={className}
    >
      {partstoRender.map(({ d, id, fill, fillOpacity }) => (
        <path key={id} d={d} fill={fill} fillOpacity={fillOpacity} />
      ))}
    </svg>
  )
}

export default RetroDigit
