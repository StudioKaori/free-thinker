import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';




function LectureUpdate({ lecture, oldLecture, onUpdateClick }) {
    const [title, setTitle] = useState(oldLecture.name);
    const [body, setBody] = useState(oldLecture.description);

    const handleOnChange =(e, editor) => {
        console.log(editor.getData());
        const data= editor.getData()
        setBody(data)
    }
    return (
        <div className="card">
            <div className="card-body">
                <h1> Update Lecture: </h1>
                    <CKEditor className ="container"
                        editor={ClassicEditor} 
                        onChange ={handleOnChange} 
                            
                    />
                <button className="btn btn-primary" onClick={() => onUpdateClick({ ...oldLecture, body })}>
                    Update
                </button>
                <button className="btn btn-primary m-2" onClick={() => onUpdateClick({ ...oldLecture})}>
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default LectureUpdate;
