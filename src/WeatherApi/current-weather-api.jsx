import axios from 'axios'
import { useAppContext } from '../context'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

const Weather = () => {
  const { searchCity } = useAppContext()

  const url = useMemo(() => {
    const base_url = 'https://api.openweathermap.org/data/2.5/weather'
    const api_key = '46a267cc744764fa9fa317a023472756'
    return `${base_url}?q=${searchCity}&appid=${api_key}`
  }, [searchCity])

  const { data, error, isLoading } = useQuery({
    queryKey: ['weather', searchCity],
    queryFn: async () => {
      const response = await axios.get(url)
      console.log(response.data)
      return response.data
    },
  })

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) return <p>Error: {error.message}</p>
}

export default Weather
