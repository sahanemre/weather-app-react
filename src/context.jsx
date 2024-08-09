import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [searchCity, setSearchCity] = useState('Ankara')
  return (
    <AppContext.Provider value={{ searchCity, setSearchCity }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
