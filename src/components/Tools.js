import React from 'react'
import Header from "./Header";
import Footer from "./Footer";  
import Clock from './Utils/Clock';
import Noise from './Utils/Noise';
import Weather from "./Utils/Weather";




function Tools() {
  return (
    <div>
        <Header />
        <div className="section-center2" style={{color: "DimGrey"}}>

         
            <div className="card">
             <h1>Checking Time</h1>
             <p>What time is it?</p>
             <Clock />
            </div>


            <div className="card">
            <h1>Checking Weather</h1>
             <p>Input "city name, country name abbreviations" in  and press the <b>Enter</b> key...</p>
             <Weather />
            </div>
            

            <div className="card">
             <Noise />
            </div>

            <div className="card">
             <h1>Google Search</h1>
             
             <form action="https://www.google.com/search">
                <input type="text" placeholder="Search.." name="q"/>
                <button type="submit">Search</button>
             </form>
            </div>

            <div className="card">
             <h1>WIP</h1>
             <p>ANOTHER UTIL COMING SOON</p>
             <button>click</button>
            </div>
                    
        </div>
        <Footer />  
    </div>
  )
}

export default Tools