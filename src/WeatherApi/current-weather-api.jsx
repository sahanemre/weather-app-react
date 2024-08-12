import axios from 'axios'
import { useAppContext } from '../context'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'

const Weather = () => {
  const { state, dispatch } = useAppContext()

  const url = useMemo(() => {
    const base_url = 'https://api.openweathermap.org/data/2.5/weather'
    const api_key = '46a267cc744764fa9fa317a023472756'
    return `${base_url}?q=${state.searchCity}&appid=${api_key}`
  }, [state.searchCity])

  const { data, error, isLoading } = useQuery({
    queryKey: ['weather', state.searchCity],
    queryFn: async () => {
      const response = await axios.get(url)
      console.log(response)
      return response.data
    },
  })

  useEffect(() => {
    if (data) {
      const now = new Date()
      const date = now.toLocaleDateString('en-US', { weekday: 'long' })
      const time = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })

      console.log(data.list)
      const dispatches = {
        SET_TEMP: data.main.temp,
        SET_DATE: `${date} ${time}`,
        SET_HUMIDITY: data.main.humidity,
        SET_ICON: data.weather[0].icon,
      }

      Object.entries(dispatches).forEach(([type, payload]) => {
        dispatch({ type, payload })
      })
    }
  }, [data, dispatch])

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) return <p>Error: {error.message}</p>

  return null
}

export default Weather
