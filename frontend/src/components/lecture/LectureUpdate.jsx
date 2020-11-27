import React, { useState } from "react";


function LectureUpdate({ oldLecture, onUpdateClick }) {
    const [title, setTitle] = useState(oldLecture.name);
  const [body, setBody] = useState(oldLecture.description);

    return (
        <div className="card">
            <div className="card-body">
                <h1>Update product</h1>

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Lecture Title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>

                <div class="input-group mb-3">
                    <textarea class="form-control" placeholder="Lecture Description" value={body} onChange={e => setBody(e.target.value)} />
                </div>

                <button className="btn btn-primary" onClick={() => onUpdateClick({ ...oldLecture, title, body })}>
                    Update
                </button>
            </div>
        </div>
    );
}

export default LectureUpdate;
