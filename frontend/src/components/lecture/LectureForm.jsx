import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import moment from "moment";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PopUpMsg from "../assignment/PopUpMsg";

import "react-datepicker/dist/react-datepicker.css";

export default function LectureForm({
  errorTitle,
  errorDate,
  errorTime,
  isOpen,
  onCreateClick,
  dateFromCalDate,
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleOnChange = (e, editor) => {
    const data = editor.getData();
    setBody(data);
  };

  const [youtube, setYoutube] = useState("");
  const [zoom, setZoom] = useState("");

  // unlock date
  // const initialUnlockDate =
  //   dateFromCalDate.current === ""
  //     ? ""
  //     : moment(dateFromCalDate.current).format("YYYY-MM-DD");

  // const initialUnlockTime =
  //   dateFromCalDate.current === ""
  //     ? ""
  //     : moment(dateFromCalDate.current)
  //         .format("hh")
  //         .concat(":00");

  // console.log("initialUnlockTime", initialUnlockTime);
  // console.log("initialUnlockDate ", initialUnlockDate);

  const [unlockDate, setUnlockDate] = useState("");
  const [unlockTime, setUnlockTime] = useState("");

  return (
  <form novalidate=""  id="myForm">
    <div className="body-wrapper">
      <div className="card">
        <div className="card-body">
          <h2> Create a Lecture: </h2>

          <div className="form-group">
            <label className="form-control-label" for ="inputSuccess1">Title:</label>
            <input
              id="inputSuccess1"
              type="text"
              className="form-control"
              placeholder="lecture title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div> {errorTitle &&  <span style={{ color: "red" }}> Please provide a title</span>} </div>
          </div>

          <div className="form-group">
            <label>Unlock Date:</label>
            <div>
              <DatePicker
                id="lectureDateInLectureForm"
                className="form-control"
                selected={unlockDate}
                dateFormat="yyyy-MM-dd"
                onChange={(e) => setUnlockDate(e)}
              />
            </div>
            <div> {errorDate &&  <span style={{ color: "red" }}> Please provide unlockDate</span>} </div>
          </div>

          <div className="form-group">
            <label>Unlock Time:</label>
            <input
              id="lectureTimeInLectureForm"
              type="time"
              className="form-control"
              placeholder="ex. 09:00"
              value={unlockTime}
              onChange={(e) => setUnlockTime(e.target.value)}
            />
            <div> {errorTime &&  <span style={{ color: "red" }}> Please provide unlockTime</span>} </div>
          </div>

          <div className="form-group">
            <label>Youtube URL:</label>
            <input
              id="lectureYoutubeInLectureForm"
              type="text"
              className="form-control"
              placeholder="Youtube video url"
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Zoom Link:</label>
            <input
              id="lectureZoomInLectureForm"
              type="text"
              className="form-control"
              placeholder="Zoom link"
              value={zoom}
              onChange={(e) => setZoom(e.target.value)}
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
              type="submit"
              onClick={(e) => {e.preventDefault()
                onCreateClick({
                  title,
                  body,
                  youtube,
                  unlockDate,
                  unlockTime,
                  zoom,
                });
                setTitle("");
                setUnlockDate("");
                setUnlockTime("");
                setYoutube("");
                setZoom("");
              }}
            >
              Create
            </button>
            {isOpen && (
              <PopUpMsg type="success" message="lecture has been created" />
            )}
          </div>
        </div>
      </div>
    </div>
  </form>
  );
}
