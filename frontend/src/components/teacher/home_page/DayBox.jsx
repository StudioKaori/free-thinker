import moment from "moment";

import "../../../css/DayBox.css";

export default function DayBox({ day }) {
  console.log(day);
  const calender = moment().add(day, "days");
  console.log(calender);
  const dayonly = calender.format("dddd");
  console.log(dayonly);
  const dateonly = calender.format("L");
  console.log(dateonly);

  const lectures = [
    {
      id: "1",
      title: "Lecture 1",
      date: "12/10/2020",
    },
    {
      id: "2",
      title: "Lecture 2",
      date: "12/11/2020",
    },
    {
      id: "3",
      title: "Lecture 3",
      date: "12/11/2020",
    },
    {
      id: "4",
      title: "Lecture 4",
      date: "12/13/2020",
    },
    {
      id: "5",
      title: "Lecture 5",
      date: "12/13/2020",
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
  const lec = lectures.filter((lecture) => lecture.date === dateonly);

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
