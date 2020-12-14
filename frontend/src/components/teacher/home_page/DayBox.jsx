import React, { useEffect, useState } from "react";
import moment from "moment";
import Api from "../../../api/Api";
import assApi from "../../../api/AssignmentApi";

import "../../../css/DayBox.css";

export default function DayBox({ day }) {
  const [lectures, setLectures] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const calender = moment().add(day, "days");
  console.log(calender);
  const dayonly = calender.format("dddd");
  console.log(dayonly);
  const dateonly = calender.format("L");
  console.log(dateonly);

  const getAllLectures = () => {
    Api.get("/lectures").then((res) => {
      setLectures(res.data);
    });
  };

  const getAllAssignments = () => {
    assApi.getAllAssignments().then((res) => {
      setAssignments(res.data);
    });
  };

  useEffect(() => {
    getAllLectures();
    getAllAssignments();
  }, []);

  console.log(lectures);
  console.log(assignments);

  // Filters the elements of same date to get the daily count
  const lec = lectures.filter((lecture) => {
    const lectureDate = moment(lecture.unlockTime).format("L");
    if (lectureDate === dateonly) {
      return lecture;
    }
  });

  const assn = assignments.filter((assnt) => {
    const assignmentDate = moment(assnt.unlockTime).format("L");
    if (assignmentDate === dateonly) {
      return assnt;
    }
  });

  console.log(lec);
  console.log(assn);
  
  // Also need some more creative ideas about how to display the week bar
  // Lecture and Assignment count to be included in the week's display

  return day == 0 ? (
    <div className="week-card text-white bg-info mb-3">
      <div className="card-header">{moment().format("dddd")}</div>
      <div className="card-body">
        <p className="card-text">{lec.length} Lectures</p>
        <p className="card-text">{assn.length} Assignments</p>
      </div>
    </div>
  ) : (
    <div className="week-card bg-light mb-3">
      <div className="card-header">{dayonly}</div>
      <div className="card-body">
        <p className="card-text">{lec.length} Lectures</p>
        <p className="card-text">{assn.length} Assignments</p>
      </div>
    </div>
  );
}
