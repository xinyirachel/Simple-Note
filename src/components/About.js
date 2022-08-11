import React from 'react'
import Header from './Header'
import { useForm, ValidationError } from '@formspree/react';
import Footer from "./Footer";


function About() {
    const [state, handleSubmit] = useForm("xnqleadb");

  return (
    <div>
        <Header />
        <div className="section-center" style={{color: "DimGrey"}}>
            <h2>A Minimalist Note</h2>
            <div>
            Simple Note is a simplistic application that allows notes to be added and deleted, as well as printed. The app also include some utilities for note-taking on Tools page.
            Enjoy and welcome to send me any question below.
            </div>
            <div>
            Simple Note is simple but powerful. Current features are:
            </div>
            <ul>
              <li>Note taking.</li>
              <li>Convert your one piece of note as PDF</li>
              <li>Checking current weather around the world though OpenWeather API</li>
              <li>Checking time</li>
              <li>Search anything on Google</li>
              <li>and...tell me what feature you like me to add in the app thought the following form  :D</li>
            </ul>
            <div className="grid1x2">
                
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            Your Email Address
                        </label>
                        <input 
                            id="email"
                            type="email" 
                            name="email"
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    
                        <textarea
                            id="message"
                            name="message"  
                            placeholder="Your message"   
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default About