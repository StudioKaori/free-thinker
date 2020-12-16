import Island from "../home/map/Island";

export default function IslandPage({ myDate }) {
  const date = myDate.match.params.date;
  return (
    <div className="student-home-map-wrapper">
      <h2>{date} Assignment</h2>
      <Island myDate={date} />
    </div>
  );
}
