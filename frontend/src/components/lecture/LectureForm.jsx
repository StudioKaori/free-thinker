import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function LectureForm({ onCreateClick }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  var date = new Date();
  var timestamp = date.getTime();
  const sortTime= new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);

  const handleOnChange =(e,editor) => {
    console.log(editor.getData());
    const data= editor.getData()
    setBody(data)
}

  return (
    <div className="card">
        <div className="card">
            <h2> Create a Lecture: </h2>
            <CKEditor className ="container"
              editor={ClassicEditor} 
              onChange ={handleOnChange}  
             />
                <button 
                    className="btn btn-info" 
                    onClick={() => onCreateClick({title, body})}>
                    Create
                </button> 
            
        </div>
    </div>
);
}

