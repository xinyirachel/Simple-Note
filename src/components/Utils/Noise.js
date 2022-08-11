import React from 'react'
import sound from '../../assets/sound.wav'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MusicNoteIcon from '@mui/icons-material/MusicNote';


function Noise() {

    function play(){
        new Audio(sound).play()
    }

    

  return (
    <div>
        <h1>White Noise<MusicNoteIcon/></h1>
        <p>This white noise player can help you to focus.</p>
        <button onClick={play}>
           <PlayCircleIcon />
        </button>

    </div>
  );
}

export default Noise