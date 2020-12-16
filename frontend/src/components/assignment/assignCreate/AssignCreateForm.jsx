import React, { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";

// ========================================================================
// Form in teacher create assignment page
export default function AssignCreateForm({ assignmentObj, setAssignmentObj,
    resetFields, setResetFields, setFormIsValid }) {

    const [title, setTitle] = useState(assignmentObj.title);
    const [instruction, setInstruction] = useState("");
    const [unlockDate, setUnlockDate] = useState("");
    const [unlockTime, setUnlockTime] = useState("")

    useEffect(() => {
        const newObj = { ...assignmentObj };
        newObj.title = title;
        newObj.instruction = instruction;
        newObj.unlockTime = moment(unlockDate).format("YYYY-MM-DD") + "T" + unlockTime + ":00.0";

        setAssignmentObj(newObj);

        if (title !== '' && instruction !== '' && unlockDate !== '' && unlockTime !== '') {
            setFormIsValid(true)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, instruction, unlockDate, unlockTime])

    useEffect(() => {
        if (resetFields) {
            setTitle('');
            setInstruction('');
            setUnlockDate('');
            setUnlockTime('');
            setResetFields(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resetFields])

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
                        placeholder="Title"
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
            <div>
              <DatePicker
                id="assignDateInAssignForm"
                className="form-control"
                selected={unlockDate}
                dateFormat="yyyy-MM-dd"
                onChange={(e) => setUnlockDate(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Unlock Time:</label>
            <input
              id="assignTimeInAssignForm"
              type="time"
              className="form-control"
              placeholder="ex. 09:00"
              value={unlockTime}
              onChange={(e) => setUnlockTime(e.target.value)}
            />
          </div>
            </div>
        </div>
    );
}
