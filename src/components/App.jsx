import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes_lst,setNotes] = useState([]);

  function addNotesLst(obj){
    setNotes((prev_lst) => [...prev_lst,obj]);
  }

  function delete_note(id) {
    setNotes(notes_lst.filter((_, index) => index !== id));
  }
  return (
    <div>
      <Header />
      <CreateArea  addnote={addNotesLst}/>
      {notes_lst.map((note,index) => <Note key={index} id={index} title={note.title} content={note.content} delete_func={delete_note}/> )}
      
      <Footer />
    </div>
  );
}

export default App;
