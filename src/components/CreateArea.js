import React from "react";
import { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title:"",
    content:""

  });  

  function handleChange(event){
    const {name,value} = event.target;

    setNote(prevNote => {
       return { 
        ...prevNote,
        [name]: value
       } 
    })
  }

  function submitNote(event){
    props.onAdd(note)
    setNote({
        title:"",
        content:""
    
      })
    event.preventDefault();

  }


  return (
    <div>
      <form className="form">
        <input className="form-input" name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea
            className="form-textarea" 
            name="content" onChange={handleChange}
            value={note.content} 
            placeholder="Take a note and download it as PDF here" 
            rows="3" 
        />
        <button className="form-button" onClick={submitNote}>Add Note</button>
      </form>
    </div>
  );
}

export default CreateArea;