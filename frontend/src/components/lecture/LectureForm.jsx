import React, { useState } from "react";

export default function LectureForm({ onCreateClick }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  var date = new Date();
  var timestamp = date.getTime();
  const sortTime= new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);

  

  return (
    <div className="card">
        <div className="card-body">
            <h4 className="card-title" >Create Lectures</h4>
            <div>
                <div className="form-group">
                    <label>Title:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Lecture Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Content:</label>
                    <input 
                        type="text" 
                        placeholder="Lecture Description" 
                        className="form-control" 
                        value={body}
                        onChange={e => setBody(e.target.value)} />
                </div>

                <div className="form-group">
                     <button 
                        className="btn btn-info" 
                        
                        onClick={() => onCreateClick({title, body})}>
                        Create
                    </button> 
                </div>
            </div>
        </div>
    </div>
);
}

