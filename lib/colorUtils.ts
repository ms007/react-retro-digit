// Regular expressions for matching color formats and extracting alpha
const COLOR_REGEXES: { regex: RegExp; alphaIndex: number | null }[] = [
  {
    regex: /^rgba?\(\s*(\d+)\s*,?\s*(\d+)\s*,?\s*(\d+)\s*,?\s*(?:\/\s*)?(\d*\.?\d+%?)\s*\)$/,
    alphaIndex: 4,
  },
  {
    regex: /^hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(0|1|0?\.\d+|\d+%)\s*\)$/,
    alphaIndex: 4,
  },
  {
    regex: /^hsl\(\s*(\d+)\s*(\d+)%\s*(\d+)%\s*\/\s*(\d+%|0|1|0?\.\d+)\)$/,
    alphaIndex: 4,
  },
  {
    regex: /^hsl\(\s*(\d+),\s*(\d+)%\s*,\s*(\d+)%\s*\)$/,
    alphaIndex: null,
  },
  {
    regex:
      /^(?:oklch|oklab|lab|lch)\(\s*([^,\s]+)[,\s]+([^,\s]+)[,\s]+([^,\s]+)\s*[/,\s]\s*(\d*\.?\d+%?)\s*\)$/,
    alphaIndex: 4,
  },
  {
    regex: /^hwb\((\d+),\s*(\d+%?),\s*(\d+%?),\s*(\d*\.?\d+)?%?\)$/,
    alphaIndex: 4,
  },
  {
    regex: /^#([0-9A-Fa-f]{4})$/,
    alphaIndex: null,
  },
  {
    regex: /^#([0-9A-Fa-f]{8})$/,
    alphaIndex: null,
  },
]

export function getAlphaValue(color: string): number {
  for (const { regex, alphaIndex } of COLOR_REGEXES) {
    const match = color.match(regex)
    if (match) {
      if (alphaIndex === null) {
        // Handle #RGBA and #RRGGBBAA
        if (match[1].length === 4) {
          const alpha = parseInt(match[1][3] + match[1][3], 16)
          return alpha / 255
        } else if (match[1].length === 8) {
          const alpha = parseInt(match[1].slice(6, 8), 16)
          return alpha / 255
        } else {
          return 1 // full opacity for #RGB/#RRGGBB
        }
      } else if (match[alphaIndex]) {
        // Extract and calculate alpha values
        const alphaValue = parseFloat(match[alphaIndex])
        return alphaValue / (match[alphaIndex].includes('%') ? 100 : 1)
      }
    }
  }

  // If no alpha value is found, return 1 (full opacity)
  return 1
}
