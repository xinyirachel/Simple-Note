import React from 'react'
import Header from './Header'
import { useForm, ValidationError } from '@formspree/react';



function About() {
    const [state, handleSubmit] = useForm("xnqleadb");

  return (
    <div>
        <Header />
        <div className="section-center">
            <h2>About this app</h2>
            <div>
            Simple Note is a simplistic application that allows notes to be added and deleted, as well as printed. The app also include some utilities for note-taking on Tools page.
            Themes can also be set on the Notes page. Your notes will be stored in local storage of your browser. Enjoy and welcome to send me any question below.
            </div>
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
    </div>
  )
}

export default About