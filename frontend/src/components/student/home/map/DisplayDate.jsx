import moment from "moment";

export default function DisplayDate() {
  return (
    <div className="student-home-map-date-wrapper">
      <div className="student-home-map-date-text">
        <h5>
          {moment().format("MM/DD")}
          <br />
          <span>Assignment</span>
        </h5>
      </div>
    </div>
  );
}
