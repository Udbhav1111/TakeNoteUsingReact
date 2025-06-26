import React,{useState} from "react";

function CreateArea(props) {

  const [obj,setobj] = useState({title:"",content:""})

  function onChangeHandle(event){
    const {name,value} = event.target;
    setobj((prev) => ({
      ...prev,
      [name]:value
    }));
  

  }

  function handleSubmit(event){
      event.preventDefault(); 
      props.addnote(obj);
      setobj({ title: "", content: "" });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={onChangeHandle} name="title" placeholder="Title" value={obj.title}/>
        <textarea  onChange={onChangeHandle} name="content" placeholder="Take a note..." rows="3" value={obj.content} />
        <button type="submit" >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
