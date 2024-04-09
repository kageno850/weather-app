import React, { useState } from 'react'
import './styles/weathercard.css'
const WeatherCard = ({ weather, temp }) => {

    const [isCel, setisCel] = useState(true)

    const handleTemp = () => {
        setisCel(!isCel)
    }

    return (
        <div className='weather__card'>
            <h1 className='weather__title'>Weather App</h1>
            <h2 className='weather__place'>{weather?.name}, {weather?.sys.country}</h2>
            <div className='weather__container'>
                <figure className='weather__img'>
                    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="weather image" />
                </figure>
                <div className='weather__info'>
                    <h3 className='weather__description'>{weather?.weather[0].description}</h3>
                    <ul className='weather list'>
                        <li className='weather__item'><span>Wind speed: </span><span>{weather?.wind.speed} m/s</span></li>
                        <li className='weather__item'><span>Clouds: </span><span>{weather?.clouds.all} %</span></li>
                        <li className='weather__item'><span>Pressure </span><span>{weather?.main.pressure} hPa</span></li>
                    </ul>
                </div>
            </div>
            <h3>
                {
                    isCel ?
                        temp?.cel + ' ºC'
                        :
                        temp?.fah + ' ºF'
                }
            </h3>
            <button onClick={handleTemp}>
                Change to {isCel ? 'ºF' : 'ºC'}
            </button>

        </div>
    )
}

export default WeatherCard