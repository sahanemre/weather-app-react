import React, { useEffect } from 'react'
import SearchForm from './SearchForm'
import myImage from '../assets/images/cloudy.jpg'

const WeatherPanel = () => {
  return (
    <div className="container">
      <SearchForm />

      <div className="weather-container">
        <div className="current-weather">
          <div className="weather-forecast">
            <span>Ankara</span>
            <img src={myImage} style={{ width: '50px', height: '50px' }} />
            <p>12</p>
            <p>Friday 9:53</p>
          </div>
          <div className="weather-info">
            <p>Precipitation: 1%</p>
            <p>Humidity: 50%</p>
            <p>Wind: 5 km/h</p>
          </div>
        </div>
        <div className="weekly-forecast">
          <div className="weather-day">
            <span>Mon</span>
            <img src={myImage} style={{ width: '50px', height: '50px' }} />
            <span>8/0</span>
          </div>
          <div className="weather-day">
            <span>Mon</span>
            <img src={myImage} style={{ width: '50px', height: '50px' }} />
            <span>8/0</span>
          </div>
          <div className="weather-day">
            <span>Mon</span>
            <img src={myImage} style={{ width: '50px', height: '50px' }} />
            <span>8/0</span>
          </div>
          <div className="weather-day">
            <span>Mon</span>
            <img src={myImage} style={{ width: '50px', height: '50px' }} />
            <span>8/0</span>
          </div>
          <div className="weather-day">
            <span>Mon</span>
            <img src={myImage} style={{ width: '50px', height: '50px' }} />
            <span>8/0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherPanel
