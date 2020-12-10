import ReactDatePicker from "react-datepicker";

import React, { useEffect, useRef, useState } from "react";

import { useRecoilState } from "recoil";
import { recent } from "../teacher/home_page/State";

import Api from "../../api/Api";
import moment from "moment";
import LectureCard from "./LectureCard";
import LectureForm from "./LectureForm";

function LecturePage({ dateFromCal }) {
  const dateFromCalDate = useRef("");

  if (typeof dateFromCal !== "undefined") {
    dateFromCalDate.current = dateFromCal.match.params.date;
  }

  const [lectures, setLectures] = useState([]);

  // const [activity, setActivity] = useRecoilState(recent);

  const createLecture = (lectureData) => {
    let sqlLectureData = {};
    sqlLectureData.title = lectureData.title;
    sqlLectureData.body = lectureData.body;

    sqlLectureData.unlockTime =
      moment(lectureData.unlockDate).format("YYYY-MM-DD") +
      "T" +
      lectureData.unlockTime +
      ":00.0";

    sqlLectureData.youtubeUrl = lectureData.youtube.replace(
      "https://www.youtube.com/watch?v=",
      ""
    );

    sqlLectureData.youtubeUrl = lectureData.youtube
      .match(/[v][=][A-Za-z1-9]+/g)[0]
      .replace("v=", "");

    Api.post("/lectures", sqlLectureData).then((res) => {
      setLectures([res.data, ...lectures]);
      const temp =
        JSON.parse(window.localStorage.getItem("recent-activity")) || [];
      window.localStorage.setItem(
        "recent-activity",
        JSON.stringify(temp.concat(res.data))
      );
    });
  };

  const getAll = () => {
    Api.get("/lectures").then((res) => {
      setLectures(res.data.sort((a, b) => b.id - a.id));
    });
  };

  const updateLecture = (updatedLecture) => {
    let sqlLectureData = {};
    sqlLectureData.id = updatedLecture.id;
    sqlLectureData.title = updatedLecture.title;
    sqlLectureData.body = updatedLecture.body;
    sqlLectureData.unlockTime =
      updatedLecture.unlockDate + "T" + updatedLecture.unlockTime + ":00.0";
    sqlLectureData.youtubeUrl = updatedLecture.youtube
      .match(/[v][=][A-Za-z1-9]+/g)[0]
      .replace("v=", "");

    console.log("update", sqlLectureData);

    Api.put("/lectures/", sqlLectureData).then((r) => getAll([]));
  };

  const deleteLecture = (lecture) => {
    Api.delete("/lectures/" + lecture.id).then((r) => getAll());
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="body-wrapper">
      <LectureForm
        onCreateClick={createLecture}
        dateFromCalDate={dateFromCalDate}
      />

      {lectures.map((lecture) => (
        <LectureCard
          key={lecture.id}
          lecture={lecture}
          onUpdateClick={updateLecture}
          onDeleteClick={deleteLecture}
        />
      ))}
    </div>
  );
}

export default LecturePage;
