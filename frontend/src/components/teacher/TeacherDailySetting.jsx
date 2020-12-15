import { useState } from "react";

import DailySettingForm from "./home/DailySettingForm";
import Map from "../student/home/map/Map";

// ========================================================================
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
        </div>
      </div>
    </div>
  );
}
