import "./search.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
export default function SearchBox({updateWeather})
{
    let[city,setSearch]=useState("")
    const API_URL=""
    const API_KEY=""

    let weatherInfo= async()=>
    {
       let response= await fetch(`url`)
       let jsonResponse=await response.json()
       let result={
        city:city,
        temp: jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description
       }
       console.log(result)
       return result
    }

    

    let handleSearch=(event)=>
    {
        setSearch(event.target.value)
    }
    let handleSubmit= async(event)=>
    {
        event.preventDefault()
        console.log(city)
        setSearch("")
       let newInfo=await weatherInfo()
       updateWeather(newInfo)

    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <TextField id="City" label="City" variant="outlined" value={city}  onChange={handleSearch}/>
                <br></br>  <br></br>
                <Button variant="contained" type="submit" >Search City</Button>
            </form>
        </div>
    )
}