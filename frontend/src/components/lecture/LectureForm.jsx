import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import moment from "moment";

export default function LectureForm({ onCreateClick, dateFromCalDate }) {
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
    const data = editor.getData();
    setBody(data);
  };

  //youtube video
  const [youtube, setYoutube] = useState("");

  // unlock date
  const [unlockDate, setUnlockDate] = useState(
    typeof dateFromCalDate === "undefined"
      ? ""
      : moment(dateFromCalDate).format("YYYY-MM-DD")
  );
  const [unlockTime, setUnlockTime] = useState(
    typeof dateFromCalDate === "undefined"
      ? ""
      : moment(dateFromCalDate)
          .format("HH")
          .concat(":00")
  );

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
            <label>Youtube/Zoom:</label>
            <input
              id="lectureYoutubeInLectureForm"
              type="text"
              className="form-control"
              placeholder="Youtube video url or Zoom link"
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
