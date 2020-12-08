import { Link } from "react-router-dom";
import Map from "../student/home/map/Map";
import DayBox from "./DayBox";
import Dropdown from "./Dropdown";

export default function TeacherHomePage() {
  var num = 0;
  return (
    <div class="container p-3 my-3">
      {/* This container forms the week's display
      The number props soecify the day relative to the current day */}
      <div class="week-container">
        <DayBox day="-1" />
        <DayBox day="0" />
        <DayBox day="1" />
        <DayBox day="2" />
        <DayBox day="3" />
        <DayBox day="4" />
        <DayBox day="5" />
      </div>
      <hr/>
      <div className="bottom-container">
        {/* The following div forms the recent activity block on the page
        It needs an independent component to display the task details */}
        <div className="card">
          <div className="card-header">Recent Activity</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h3>Some assignment</h3></li>
            <li className="list-group-item">Some lecture</li>
            <li className="list-group-item">Some assignment</li>
            <li className="list-group-item">Some assignment</li>
            <li className="list-group-item">Some lecture</li>
          </ul>
        </div>
        {/* This div only needs some finer CSS touch, otherwise it looks fine */}
        <div className="btn-container">
          <Link to="/create-lecture" className="btn btn-info btn-lg btn-block mb-5">
            Create New Lecture
          </Link>
          <Link to="/create-assignment" className="btn btn-info btn-lg btn-block mb-5">
            Create New Assignment
          </Link>
          <div>
            <Dropdown />
          </div>
        </div>
        {/* <div>
              <Map />
            </div> */}
      </div>
    </div>
  );
}
