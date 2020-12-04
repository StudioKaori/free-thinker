import DisplayDate from "./DisplayDate";
import Island from "./Island";
import Schedule from "../../home/schedule/Schedule";

export default function Map() {
  return (
    <div className="student-home-map-wrapper">
      <DisplayDate />
      <Island />
      <Schedule />
    </div>
  );
}
