import GetTodayDate from "../../../common/GetTodayDate";

export default function DisplayDate() {
  return (
    <div className="student-home-map-date-wrapper">
      <div className="student-home-map-date-text">
        <h5>
          <GetTodayDate />
        </h5>
      </div>
    </div>
  );
}
