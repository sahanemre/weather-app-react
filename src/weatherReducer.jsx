export const initialState = {
  searchCity: '',
  temp: '',
  date: '',
  humidity: '',
  icon: '',
}

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_CITY':
      return { ...state, searchCity: action.payload }
    case 'SET_TEMP':
      return { ...state, temp: action.payload }
    case 'SET_DATE':
      return { ...state, date: action.payload }
    case 'SET_HUMIDITY':
      return { ...state, humidity: action.payload }
    case 'SET_ICON':
      return { ...state, icon: action.payload }
    default:
      return state
  }
}
