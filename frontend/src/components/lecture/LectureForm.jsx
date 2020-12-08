import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function LectureForm({ onCreateClick }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // var date = new Date();
  // var timestamp = date.getTime();
  // const sortTime = new Intl.DateTimeFormat("en-US", {
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  // }).format(timestamp);

  const handleOnChange = (e, editor) => {
    console.log(editor.getData());
    const data = editor.getData();
    setBody(data);
  };

  //youtube video
  const [youtube, setYoutube] = useState("");

  // unlock date
  const [unlockDate, setUnlockDate] = useState("");
  const [unlockTime, setUnlockTime] = useState("");

  return (
    <div className="body-wrapper">
      <div className="card">
        <div className="card-body">
          <h2> Create a Lecture: </h2>

          <div className="form-group">
            <label>Title:</label>
            <input
              id="lectureTitleInLectureForm"
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
              id="lectureDateInLectureForm"
              type="text"
              className="form-control"
              placeholder="YYYY-MM-DD"
              value={unlockDate}
              onChange={(e) => setUnlockDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Unlock Time:</label>
            <input
              id="lectureTimeInLectureForm"
              type="text"
              className="form-control"
              placeholder="ex. 09:00"
              value={unlockTime}
              onChange={(e) => setUnlockTime(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Youtube:</label>
            <input
              id="lectureYoutubeInLectureForm"
              type="text"
              className="form-control"
              placeholder="youtube video url"
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
            />
          </div>

          <CKEditor
            id="lectureBodyInLectureForm"
            className="container"
            editor={ClassicEditor}
            onChange={handleOnChange}
          />

          <div className="form-group">
            <button
              id="lectureCreateButtonInLectureForm"
              className="btn btn-info"
              onClick={() => {
                onCreateClick({ title, body, youtube, unlockDate, unlockTime });
                setTitle("");
                setUnlockDate("");
                setUnlockTime("");
                setYoutube("");
                document.getElementsByClassName("ck-content")[0].childNodes[0].innerHTML = '';




              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
