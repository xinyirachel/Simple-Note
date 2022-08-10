import React from 'react'
import sound from '../../assets/sound.wav'


function Noise() {

    function play(){
        new Audio(sound).play()
    }

    

  return (
    <div>
        <h1>White Noise</h1>
        <p>This white noise player can help you to focus.</p>
        <button onClick={play}>
            Play
        </button>

    </div>
  );
}

export default Noise