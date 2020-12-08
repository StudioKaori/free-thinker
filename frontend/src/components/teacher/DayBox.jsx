import moment from "moment";

import "../../css/DayBox.css";

export default function DayBox({ day }) {
  console.log(day);
  const calender = moment().add(day, "days");
  console.log(calender);
  const dayonly = calender.format("dddd");
  console.log(dayonly);

  // Also need some more creative ideas about how to display the week bar
  // Lecture and Assignment count to be included in the week's display
  
  return day == 0 ? (
    <div className="week-card text-white bg-primary mb-3">
      <div className="card-header">{moment().format("dddd")}</div>
      <div className="card-body">
        <p className="card-text">X Lectures</p>
        <p className="card-text">X Assignments</p>
      </div>
    </div>
  ) : (
    <div className="week-card bg-light mb-3">
      <div className="card-header">{dayonly}</div>
      <div className="card-body">
        <p className="card-text">X Lectures</p>
        <p className="card-text">X Assignments</p>
      </div>
    </div>
  );
  // null
}
