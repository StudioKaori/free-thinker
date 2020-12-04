import { useState, useEffect } from "react";
import AssignmentApi from "../../../../api/AssignmentApi";

import LockIcon from "../../../icons/map-icon";
import SpaceHolder from "../../../../assets/img/components/student/home/islands/island-spaceholder.gif";
import "../../../../css/student/islands/island-green.css";

export default function Island() {
  const [assignments, setAssignments] = useState([]);
  const [status, setStatus] = useState(0);

  const fakesDates = [
    // Waiting for release_dates coming directly with assignment
    new Date(2020, 10, 29, 12, 30, 45),
    new Date(2020, 10, 29, 12, 30, 45),
    new Date(2020, 10, 29, 12, 30, 45),
    new Date(2020, 11, 29, 12, 30, 45),
    new Date(2020, 12, 1, 12, 30, 45),
    new Date(2020, 12, 1, 12, 30, 45),
  ]; // No more than 6 assignment for tests

  useEffect(() => {
    AssignmentApi.getAllAssignments().then((res) => {
      const assignmentsPlusDate = [...res.data];
      for (let i = 0; i < assignmentsPlusDate.length; i += 1) {
        assignmentsPlusDate[i].release_date = fakesDates[i];
      }
      setAssignments(assignmentsPlusDate);
    });
  }, []);

  useEffect(() => {
    if (assignments.length !== 0) {
      setStatus(1);
    }
  }, [assignments]);

  return (
    <div className="student-home-map-island">
      <div className="student-home-map-island-spaceholder">
        <img src={SpaceHolder} alt="island" />
      </div>

      {status === 1 &&
        assignments.map((assignment, index) => {
          const className = "island-icon-position island-lock-" + index;
          const linkUrl = "/assignment/" + assignment.id;
          console.log("date", assignment.release_date.getTime());

          return (
            <div className={className}>
              <LockIcon
                key={index}
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
