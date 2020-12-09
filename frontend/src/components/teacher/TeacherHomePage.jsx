import { Link } from "react-router-dom";
import { useState } from "react";
import Map from "../student/home/map/Map";
import DailySettingForm from "./home/DailySettingForm";
import LectureCalendar from "./schedule/LectureCalendar";
import DayBox from "./home_page/DayBox";
import Dropdown from "./Dropdown";
import ActivityBox from "./home_page/ActivityBox";

export default function TeacherHomePage() {
  const [previewChange, setPreviewChange] = useState(<Map />);

  const onClickPreview = (islandTheme) => {
    console.log("change island");
    setPreviewChange(<Map key={islandTheme} />);
  };
  var num = 0;
  return (
    <div class="container p-3 my-3">
      <div>
        <LectureCalendar />
      </div>
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
      <hr />
      <div className="bottom-container">
        {/* The following div forms the recent activity block on the page
        It needs an independent component to display the task details */}
        <div className="card">
          <div className="card-header">Recent Activity</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <ActivityBox index="0" />
            </li>
            <li className="list-group-item">
              <ActivityBox index="1" />
            </li>
            <li className="list-group-item">
              <ActivityBox index="2" />
            </li>
            <li className="list-group-item">
              <ActivityBox index="3" />
            </li>
            <li className="list-group-item">
              <ActivityBox index="4" />
            </li>
          </ul>
        </div>
        {/* This div only needs some finer CSS touch, otherwise it looks fine */}
        <div className="btn-container">
          <Link
            to="/create-lecture"
            className="btn btn-info btn-lg btn-block mb-5"
          >
            Create New Lecture
          </Link>
          <Link
            to="/create-assignment"
            className="btn btn-info btn-lg btn-block mb-5"
          >
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
      <div>
        <div>
          <DailySettingForm onClickPreview={onClickPreview} />
        </div>

        <div>{previewChange}</div>
      </div>
    </div>
  );
}
