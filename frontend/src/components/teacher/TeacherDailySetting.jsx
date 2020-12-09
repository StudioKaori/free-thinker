import { useState } from "react";
import { Link } from "react-router-dom";
import Map from "../student/home/map/Map";
import DailySettingForm from "./home/DailySettingForm";
import LectureCalendar from "./schedule/LectureCalendar";

export default function TeacherDailySetting() {
  const [previewChange, setPreviewChange] = useState(<Map />);

  const onClickPreview = (islandTheme) => {
    setPreviewChange(<Map key={islandTheme} />);
  };

  return (
    <div className="body-wrapper">
      <div>
        <h4 className="card-title"> Class Settings</h4>
        <div>
          <Link to="/create-lecture" className="btn btn-info">
            Create New Lecture
          </Link>
          <Link to="/create-assignment" className="btn btn-info m-2">
            Create New Assignment
          </Link>

          <div>
            <LectureCalendar />
          </div>

          <div>
            <div>
              <DailySettingForm onClickPreview={onClickPreview} />
            </div>

            <div>{previewChange}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
