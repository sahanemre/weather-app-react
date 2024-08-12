import { createContext, useContext, useReducer, useState } from 'react'
import { weatherReducer, initialState } from './weatherReducer'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState)

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
