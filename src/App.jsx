import React from 'react'
import WeatherPanel from './component/WeatherPanel'
import Weather from './WeatherApi/current-weather-api'

const App = () => {
  return (
    <main>
      <WeatherPanel />
      <Weather />
    </main>
  )
}

export default App
