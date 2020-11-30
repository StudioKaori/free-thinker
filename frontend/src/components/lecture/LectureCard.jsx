import React, { useState } from "react";
import LectureUpdate from "./LectureUpdate";
import ReactHtmlParser from "react-html-parser"

function LectureCard({ lecture, onDeleteClick, onUpdateClick }) {
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdateClick = () => {
        setIsUpdating(true);
    };


    return isUpdating ?
        <LectureUpdate oldLecture={lecture} onUpdateClick={(updatedLecture) => { setIsUpdating(false); onUpdateClick(updatedLecture); }} />
        :
        <div className="card mt-4">
            <div className="card-body">
               
                <p> {ReactHtmlParser(lecture.body)} </p>

                <div>
                    <button className="btn btn-danger m-2" onClick={() => onDeleteClick(lecture)}>
                        Delete
                </button>

                    <button className="btn btn-warning" onClick={handleUpdateClick}>
                        Update
                    </button>
                </div>
            </div>
            </div>
}

export default LectureCard;
