import { RetroDigit } from 'react-retro-digit'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        gap: 2,
        height: '20vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RetroDigit color="indigo" alphaRatio="0.05" number={7} size="75%" />
      <RetroDigit color="indigo" alphaRatio="0.05" number={5} size="75%" />
    </div>
  )
}

export default App
