import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from "react-html-parser"
import moment from "moment";



function LectureUpdate({ lecture, oldLecture, onUpdateClick }) {
    const [title, setTitle] = useState(oldLecture.title);
    const [body, setBody] = useState(oldLecture.body);
    const [youtube, setYoutube] = useState("https://www.youtube.com/watch?v="+oldLecture.youtubeUrl);
    const [unlockDate, setUnlockDate] = useState(moment(oldLecture.unlockTime).format("YYYY-MM-DD"));
    const [unlockTime, setUnlockTime] = useState(moment(oldLecture.unlockTime).format("HH:mm"));


    const handleOnChange =(e, editor) => {
        console.log(editor.getData());
        const data= editor.getData()
        setBody(data)
    }
    return (
        <div className="card">
            <div className="card-body">
                <h1> Update Lecture: </h1>
                    <div className="form-group">
                    <label>Title:</label>
                    <input
                    id="updatedLecture_title"
                    type="text"
                    className="form-control"
                    placeholder="lecture title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Unlock Date:</label>
                    <input
                    id="updatedLecture_date"
                    type="text"
                    className="form-control"
                    placeholder="YYYY-MM-DD"
                    value={(unlockDate)}
                    onChange={(e) => setUnlockDate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Unlock Time:</label>
                    <input
                    type="text"
                    id="updatedLecture_time"
                    className="form-control"
                    placeholder="ex. 09:00"
                    value={unlockTime}
                    onChange={(e) => setUnlockTime(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Youtube:</label>
                    <input
                    id="updatedLecture_youtube"
                    type="text"
                    className="form-control"
                    placeholder="youtube video url"
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                    />
                </div>    
                    <CKEditor className ="container"
                        editor={ClassicEditor} 
                        data={body}
                        onChange ={handleOnChange} 
                            
                    />
                <button className="btn btn-primary" onClick={() => onUpdateClick({ ...oldLecture, title, body, unlockDate, unlockTime, youtube })}>
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
