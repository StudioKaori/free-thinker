import React, { useEffect, useState } from "react";
import moment from "moment";
import Api from "../../../api/Api";

import "../../../css/DayBox.css";

export default function DayBox({ day }) {
  const [lectures, setLectures] = useState([]);

  const calender = moment().add(day, "days");
  console.log(calender);
  const dayonly = calender.format("dddd");
  console.log(dayonly);
  const dateonly = calender.format("L");
  console.log(dateonly);

  const getAll = () => {
    Api.get("/lectures").then((res) => {
      setLectures(res.data.sort((a, b) => b.id - a.id));
    });
  };

  useEffect(() => {
    getAll();
  }, []);

  console.log(lectures);

  // Filters the elements of same date to get the daily count
  const lec = lectures.filter((lecture) => {
    const lectureDate = moment(lecture.unlockTime).format("L");
    if (lectureDate === dateonly) {
      return lecture;
    }
  });

  console.log(lec);
  // Also need some more creative ideas about how to display the week bar
  // Lecture and Assignment count to be included in the week's display

  return day == 0 ? (
    <div className="week-card text-white bg-primary mb-3">
      <div className="card-header">{moment().format("dddd")}</div>
      <div className="card-body">
        <p className="card-text">{lec.length} Lectures</p>
        <p className="card-text">X Assignments</p>
      </div>
    </div>
  ) : (
    <div className="week-card bg-light mb-3">
      <div className="card-header">{dayonly}</div>
      <div className="card-body">
        <p className="card-text">{lec.length} Lectures</p>
        <p className="card-text">X Assignments</p>
      </div>
    </div>
  );
  // null
}
