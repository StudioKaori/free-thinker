import Assignment from "../../../assets/img/Assignment.jpg";
import Lecture from "../../../assets/img/Lecture.png";

import "../../../css/ActivityBox.css";

export default function ActivityBox({ activity }) {
  return (
    <div className="activity-card bg-light">
      <img src={Lecture} alt="checklist logo" className="logo" />
      <div className="activity-card-body">
        <p className="card-text">{activity.title}</p>
        <p className="card-text">{activity.date}</p>
        <p className="card-text">Unlock Time: {activity.unlockTime}</p>
      </div>
    </div>
  );
}
