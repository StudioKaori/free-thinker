import LockIcon from "../../../icons/map-icon";
import "../../../../css/student/islands/island-green.css";

export default function Island() {
  const assignments = [
    {
      id: 1,
      release_date: new Date(2020, 10, 29, 12, 30, 45),
    },
    {
      id: 2,
      release_date: new Date(2020, 10, 29, 12, 30, 45),
    },
    {
      id: 3,
      release_date: new Date(2020, 10, 29, 12, 30, 45),
    },
    {
      id: 4,
      release_date: new Date(2020, 11, 29, 12, 30, 45),
    },
    {
      id: 5,
      release_date: new Date(2020, 12, 1, 12, 30, 45),
    },
    {
      id: 6,
      release_date: new Date(2020, 12, 1, 12, 30, 45),
    },
  ];

  return (
    <div className="student-home-map-island">
      {assignments.map((assignment, index) => {
        const className = "island-icon-position island-lock-" + index;
        const linkUrl = "/student/assignments/" + assignment.id;

        return (
          <div className={className}>
            <LockIcon
              key={assignment.id}
              linkUrl={linkUrl}
              type={
                assignment.release_date.getTime() < new Date().getTime()
                  ? "unlock"
                  : "lock"
              }
            />
          </div>
        );
      })}
    </div>
  );
}
