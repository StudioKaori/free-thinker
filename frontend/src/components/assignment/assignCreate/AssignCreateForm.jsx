import React, { useState } from "react";


export default function AssignCreateForm(onCreateClick) {
    const [title, setTitle] = useState("");
    const [instruction, setInstruction] = useState("");
    const [unlockDate, setUnlockDate] = useState("");
    const [unlockTime, setUnlockTime] = useState("")
   
  return (
    <div className="body-wrapper">
      <div className="card-body">
          <h2> Create a Assignment: </h2>

          <div className="form-group">
            <label>Title:</label>
            <input
              id="assignTitleInAssignForm"
              type="text"
              className="form-control"
              placeholder="lecture title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Instructions:</label>
              <input
              id="assignbodyInAssignForm"
              type="text"
              className="form-control"
              placeholder="Instruction"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
            /> 
          </div>
          <div className="form-group">
            <label>Unlock Date:</label>
              <input
              id="assignDateInAssignForm"
              type="text"
              className="form-control"
              placeholder="YYYY-MM-DD"
              value={unlockDate}
              onChange={(e) => setUnlockDate(e.target.value)}
            /> 
          <div>
          
            </div>
            </div>
            

          <div className="form-group">
            <label>Unlock Time:</label>
            <input
              id="assignTimeInAssignForm"
              type="text"
              className="form-control"
              placeholder="ex. 09:00"
              value={unlockTime}
              onChange={(e) => setUnlockTime(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              id="assignCreateButtonInAssignForm"
              className="btn btn-info"
              onClick={() => {
                onCreateClick({ title, instruction,unlockDate, unlockTime });
                setTitle("");
                setInstruction("");
                setUnlockDate("");
                setUnlockTime("");
                
               
            }}
            >
              Create
            </button>
          </div>

          </div>
    </div>
  );
}
