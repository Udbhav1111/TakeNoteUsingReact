import React from "react";


function Note(props) {
  function ondelete(event){
    event.preventDefault();
    props.delete_func(props.id);
    
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={ondelete}>DELETE</button>
    </div>
  );
}

export default Note;
