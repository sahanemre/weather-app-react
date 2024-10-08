import React from 'react'
import { useAppContext } from '../context'

const SearchForm = () => {
  const { dispatch } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.searchCity.value.trim()
    if (!searchValue) {
      alert('Lütfen bir şehir adı giriniz!')
      return
    }
    dispatch({ type: 'SET_SEARCH_CITY', payload: searchValue })
    e.target.reset()
  }

  return (
    <div>
      <section className="search-section">
        <h1 className="title">weather app</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Enter the city..."
            name="searchCity"
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </section>
    </div>
  )
}

export default SearchForm
