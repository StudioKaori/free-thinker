import { useState } from "react";

import DailySettingForm from "./home/DailySettingForm";
import Map from "../../components/student/home/map/Map";
import moment from "moment";

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
