import React from 'react'
import Header from "./Header";
import Footer from "./Footer";  
import Clock from './Utils/Clock';
import Noise from './Utils/Noise';
import Timezone from './Utils/Timezone';



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
            <h1>Checking Time Zone</h1>
             <p>Input city name and press the <b>Enter</b> key...</p>
             <Timezone />
            </div>
            
            <div className="card">
             <Noise />
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