import { useState } from "react"
import SearchBox from "./SeacrhBox"
import Infobox from "./infoBox"

export default function WeatherApp()
{
    let [weatherInfo,setWeatherInfo]=useState(
        {
         feelsLike: 19.47,
        humidity: 52,
        temp: 20.05,
        tempMax:20.05 ,
        tempMin: 20.05,
        weather: "haze",
        city:"Delhi"
        }
    )
    let updateWeather=(result)=>
    {
        setWeatherInfo(result)
    }
    return(

        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateWeather={updateWeather}/>
            <Infobox info={weatherInfo}/>
        </div>
       
    )
}