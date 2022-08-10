import React from 'react'
import Header from "./Header";
import Footer from "./Footer";  
import Clock from './Utils/Clock';


function Tools() {
  return (
    <div>
        <Header />
        <div className="section-center" style={{color: "DimGrey"}}>


            <div className="card">
             <h1>Checking Time</h1>
             <p><Clock /></p>
             <button>click</button>
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