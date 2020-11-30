import GetTodayDate from "../../common/GetTodayDate";

export default function DisplayDate() {
  return (
    <div className="map-date-wrapper">
      <div className="map-date-text">
        <h5>
          <GetTodayDate />
        </h5>
      </div>
    </div>
  );
}
