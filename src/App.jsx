import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'



function App() {
  
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [isLoading, setisLoading] = useState(true)

  const success = (pos) => {
    
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    }
    setCoords(obj)
    }
  
    useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
    }, [])
  
  
   useEffect(() => {
    if (coords) {
        const apiKey = 'd368a2c5c96c886c017b8a834af25ccf'
    
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}` 

        axios.get(url)
          .then(res => {
            const cel = res.data.main.temp - 273.15
            const fah = cel * 9/5 + 32
            setTemp ({cel, fah})
            setWeather(res.data)
          })
          .catch(err => console.log(err))
          .finally(() => {
            setisLoading(false)
          })
    }
   }, [coords])
   
    console.log(temp);
    
    return (
    <div className='app'>
     {
      isLoading?
      <h2>Loading...</h2>
      :
      <WeatherCard
        weather ={weather} 
        temp={temp}
      />
     }  
    </div>
     
  )
}

export default App



