import { useState } from "react";
import moment from "moment";

import DailySettingForm from "./home/DailySettingForm";
import Map from "../student/home/map/Map";


// ========================================================================
export default function TeacherDailySetting() {
  const [previewChange, setPreviewChange] = useState(<Map key={moment()} />);

  const onClickPreview = (islandTheme) => {
    setPreviewChange(<Map key={moment()} />);
  };

  return (
    <div className="body-wrapper">
      <div>
        <DailySettingForm onClickPreview={onClickPreview} />
      </div>

      <div>{previewChange}</div>
    </div>
  );
}
