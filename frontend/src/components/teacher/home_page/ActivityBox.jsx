import moment from "moment";
import { useRecoilState } from "recoil";
import { recent } from "./State";

import Assignment from "../../../assets/img/Assignment.jpg";
import Lecture from "../../../assets/img/Lecture.png";

import "../../../css/ActivityBox.css";

export default function ActivityBox({ activity }) {

  const lectures = [
    {
      id: "1",
      title: "Lecture 1",
      date: "12/10/2020",
      unlockTime: "09:00",
    },
    {
      id: "2",
      title: "Lecture 2",
      date: "12/11/2020",
      unlockTime: "09:00",
    },
    {
      id: "3",
      title: "Lecture 3",
      date: "12/11/2020",
      unlockTime: "11:00",
    },
    {
      id: "4",
      title: "Lecture 4",
      date: "12/13/2020",
      unlockTime: "10:00",
    },
    {
      id: "5",
      title: "Lecture 5",
      date: "12/13/2020",
      unlockTime: "13:00",
    },
  ];

  const assingments = [
    {
      id: "1",
      title: "Assignment 1",
      date: "12/10/2020",
    },
    {
      id: "2",
      title: "Assignment 2",
      date: "12/10/2020",
    },
    {
      id: "3",
      title: "Assignment 3",
      date: "12/12/2020",
    },
    {
      id: "4",
      title: "Assingment 4",
      date: "12/12/2020",
    },
    {
      id: "5",
      title: "Assignment 5",
      date: "12/13/2020",
    },
  ];

  // Filters the elements of same date to get the daily count
  //   const lec = lectures.filter(lecture => lecture.date===dateonly);

  //   console.log(lec);
  // Also need some more creative ideas about how to display the week bar
  // Lecture and Assignment count to be included in the week's display

  return (
    <div className="activity-card bg-light">
      <img src={Lecture} alt="checklist logo" className="logo" />
      <div className="card-body">
        <p className="card-text">{activity.title}</p>
        <p className="card-text">{activity.date}</p>
        <p className="card-text">Unlock Time: {activity.unlockTime}</p>
      </div>
    </div>
  );
}
