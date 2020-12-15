import DisplayDate from "./DisplayDate";
import Island from "./Island";
import Schedule from "../../home/schedule/Schedule";

// ========================================================================
// Student home page main component
export default function Map() {
  return (
    <div className="student-home-map-wrapper">
      <Island />
      <DisplayDate />
      <div className="student-home-schedule-wrapper">
        <Schedule />
      </div>
    </div>
  );
}
