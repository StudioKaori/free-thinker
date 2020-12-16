import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser"

import LectureUpdate from "./LectureUpdate";

// ========================================================================
// One lecture Card - In teacher create lecture page - 
function LectureCard({ lecture, onDeleteClick, onUpdateClick }) {
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdateClick = () => {
        setIsUpdating(true);
    };

    const createYoutubeUrl = (youtubeID) => {
        return "https://www.youtube.com/embed/" + youtubeID;
    };

    return isUpdating ? (
        <LectureUpdate oldLecture={lecture} onUpdateClick={(updatedLecture) => { setIsUpdating(false); onUpdateClick(updatedLecture); }} />
    ) : (
            <div className="card mt-4">
                <div className="card-body">
                    <div >
                        <h2>{lecture.title}</h2>
                        <iframe
                            title="youtube"
                            width="560"
                            height="315"
                            src={createYoutubeUrl(lecture.youtubeUrl)}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <p> {ReactHtmlParser(lecture.body)} </p>
                        <p> {lecture.unlockDate} </p>
                        <p> {lecture.unlockTime} </p>
                    </div>
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
        );
}

export default LectureCard;
