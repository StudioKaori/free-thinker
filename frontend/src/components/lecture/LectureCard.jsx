import React, { useState } from "react";
import LectureUpdate from "./LectureUpdate";

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
                <h1>{lecture.title}</h1>
                <p>{lecture.body}</p>

                <div>
                    <button className="btn btn-danger" onClick={() => onDeleteClick(lecture)}>
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
