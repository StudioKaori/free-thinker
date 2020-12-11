import { useState, useEffect } from "react";
import AssignmentApi from "../../../../api/AssignmentApi";
import { useRecoilState } from "recoil";
import { userState } from "../../../../js/state-information";

import moment from "moment";
import ClassDailySettingApi from "../../../../api/ClassDailySettingsApi";
import LockIcon from "../../../icons/map-icon";
import SpaceHolder from "../../../../assets/img/components/student/home/islands/island-spaceholder.gif";
import "../../../../css/student/islands/island-green.css";

export default function Island() {
  const [assignments, setAssignments] = useState([]);
  const [islandTheme, setIslandTheme] = useState("island-green");
  const [date, setDate] = useState(moment().format("yyyy-MM-DD"));
  const [status, setStatus] = useState(0);
  const [user] = useRecoilState(userState);

  // island theme
  const getIslandTheme = () => {
    ClassDailySettingApi.getByDate(date).then((res) => {
      res.data.length !== 0 && setIslandTheme(res.data.islandTheme);
    });
  };

  const fakesDates = [
    // Waiting for release_dates coming directly with assignment
    new Date(2020, 10, 29, 12, 30, 45),
    new Date(2020, 10, 29, 12, 30, 45),
    new Date(2020, 10, 29, 12, 30, 45),
    new Date(2020, 10, 29, 12, 30, 45),
    new Date(2020, 10, 29, 12, 30, 45),
    new Date(2020, 12, 1, 12, 30, 45),
    new Date(2020, 10, 29, 12, 30, 45),
    new Date(2020, 10, 29, 12, 30, 45),
    new Date(2020, 10, 29, 12, 30, 45),
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

    // island theme
    getIslandTheme();
  }, []);

  useEffect(() => {
    if (assignments.length !== 0) {
      setStatus(1);
    }
  }, [assignments]);

  useEffect(() => {
    const islandImg = "url('/assets/img/css/islands/" + islandTheme + ".png')";
    document.getElementById("map-island").style.backgroundImage = islandImg;
  }, [islandTheme]);

  return (
    <div id="map-island" className="student-home-map-island">
      <div className="student-home-map-island-spaceholder">
        <img src={SpaceHolder} alt="island" />
      </div>

      {status === 1 &&
        assignments.map((assignment, index) => {
          const className = "island-icon-position island-lock-" + index;
          const linkUrl = "/assignment/" + assignment.id;
          const uniqueKey = "assignment-icon" + assignment.id;

          // This const "done" return true If assignment is done for that student / false if not
          const done = assignment.isDoneByUser.filter(usr => usr.id === user[0].id).length > 0;
        //   console.log( 'Assignement with id', assignment.id, 
        //     done ? "has be done" : "is not done", 'by user', user[0].name);

          return (
            <div className={className}>
              <LockIcon
                key={uniqueKey}
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
