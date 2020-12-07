import { useState } from "react";
import { Link } from "react-router-dom";
import Map from "../student/home/map/Map";
import Dropdown from "./Dropdown";
import DailySettingForm from "./home/DailySettingForm";

export default function TeacherHomePage() {
  const [previewChange, setPreviewChange] = useState(<Map />);

  const onClickPreview = (islandTheme) => {
    console.log("change island");
    setPreviewChange(<Map key={islandTheme} />);
  };

  return (
    <div className="container p-3 my-3">
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
            <Dropdown />
          </div>

          <div>
            <DailySettingForm onClickPreview={onClickPreview} />
          </div>
          <div>{previewChange}</div>
        </div>
      </div>
    </div>
  );
}
