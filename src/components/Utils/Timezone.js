import React from 'react';
import { useState } from "react";


function Timezone() {
    const [tzData, setTzData] = useState([{}])
    const [city, setCity] =useState("")
   


    const getTz = (event) => {
        if (event.key === "Enter") {
            fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=452551f2f47c0a064d9bb0322b3b470c`)
            .then(
                (response) => response.json()
            )
            .then(
                (data) => {
                  setTzData(data)  
                }
            )
        }
    }
    // console.log(tzData)
  return (
    <div>
        <input 
        placeholder="Enter here..."
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getTz}
        />
        <div>
            <p>{tzData.name}'s time zone is: {tzData.timezone}</p>
        </div>
    </div>

  )
}

export default Timezone