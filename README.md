# react-retro-digit

Ah, the good old days! Do you remember when radio alarm clocks lit up the bedroom with their glowing digital displays? Now you can bring that nostalgic feeling to your modern web app with **react-retro-digit**!

With this React component, you can display numbers in the classic "seven-segment display" style and create a retro look on your website.

## Use Cases

- Time displays in a retro UI
- Highscore boards for arcade games
- Nostalgic displays in dashboard applications
- Any application that needs a classic digital look

## Preview

Here's how the it looks like:<br>
![preview](https://github.com/ms007/react-retro-digit/blob/main/doc/preview.png?raw=true)

## Installation

Install the package with npm:

```sh
npm install react-retro-digit
```

## Usage

Import the component and use it in your React app:

```jsx
import { RetroDigit } from 'react-retro-digit'

function App() {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      <RetroDigit number="7" color="currentcolor" />
      <RetroDigit
        number={2}
        size={24}
        color="oklch(0.63 0.06 251.57)"
        inactiveColor="rgb(221, 221, 221)"
      />
      <RetroDigit number={2} color="oklch(87.33% 0.1922 89.47 / 76.35%)" />
      <RetroDigit number={7} color="rgba(234, 239, 44, 0.9)" />
      <RetroDigit number={3} color="hsl(90 100% 50%)" />
      <RetroDigit number={9} color="hsla(0, 100%, 50%, 50%)" />
      <RetroDigit number={9} color="#222" alphaRatio="0.2" />
    </div>
  )
}

export default App
```

## Props

| Property        | Type                 | Description                                                                               | Default Value |
| --------------- | -------------------- | ----------------------------------------------------------------------------------------- | ------------- |
| `number`        | `string` \| `number` | The number or character to display                                                        | 0             |
| `size`          | `string` \| `number` | The size of the digit (number or percentage).<br> Forwared to `height` of the SVG element | 24            |
| `color`         | `string`             | The color of the active segments. (Supports all CSS color formats)                        | currentcolor  |
| `inactiveColor` | `string`             | The color of the inactive segments                                                        | -             |
| `alphaRatio`    | `string` \| `number` | Transparency of the digit from 0 to 1.<br>(If no inactiveColor provided)                  | 0.1           |
| `className`     | `string`             | Additional CSS classes. Forwared to the SVG element                                       | -             |

Enjoy developing and reliving the nostalgia! 🚀
