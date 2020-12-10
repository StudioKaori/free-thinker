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
        <div>
          <div>
            <div>
              <DailySettingForm onClickPreview={onClickPreview} />
            </div>

            <div>{previewChange}</div>
          </div>

          <div className="lecture-calendar-wrapper">
            <LectureCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}
