import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import Weatherpage from "./Utils/Weatherpage";




function App() {

  const[notes, setNotes] = useState([]);
 

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes,newNote];
    });  
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />

      <CreateArea 
      onAdd={addNote}
      />
      <div>
      {notes.map((noteItem,index) => 
      {
          return (
          <Note
          key={index}
          id={index} 
          title={noteItem.title} 
          content={noteItem.content}
          onDelete={deleteNote}
          />
          );

      })}
      </div>
      <Footer />
      {/* <Weatherpage /> */}
    </div>
  );
}

export default App;