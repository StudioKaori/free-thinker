import { useState, useEffect, useRef } from "react";
import AssignmentApi from "../../../../api/AssignmentApi";
import { useRecoilState } from "recoil";
import { userState } from "../../../../js/state-information";

import moment from "moment";
import ClassDailySettingApi from "../../../../api/ClassDailySettingsApi";
import LockIcon from "./IslandIcon";
import SpaceHolder from "../../../../assets/img/components/student/home/islands/island-spaceholder.gif";
import "../../../../css/student/islands/island-green.css";

export default function Island() {
  const [assignments, setAssignments] = useState([]);
  const [islandTheme, setIslandTheme] = useState("island-green");
  const [date] = useState(moment().format("yyyy-MM-DD"));
  const [status, setStatus] = useState(0);
  const [user] = useRecoilState(userState);
  const iconAddLink = useRef("");
  iconAddLink.current = true;

  // island theme
  const getIslandTheme = () => {
    ClassDailySettingApi.getByDate(date).then((res) => {
      res.data.length !== 0 && setIslandTheme(res.data.islandTheme);
    });
  };

  useEffect(() => {
    AssignmentApi.getAllAssignments().then((res) => {
      setAssignments([...res.data]);
    });

    // island theme
    getIslandTheme();
  }, []);

  useEffect(() => {
    const islandImg = "url('/assets/img/css/islands/" + islandTheme + ".png')";
    document.getElementById("map-island").style.backgroundImage = islandImg;
  }, [islandTheme]);

  useEffect(() => {
    if (assignments.length !== 0) {
      setStatus(1);
    }
  }, [assignments]);

  // icon setting
  const giveLinkToIcon = (assignmentType, done) => {
    if (iconAddLink.current && assignmentType === "unlock" && !done) {
      iconAddLink.current = false;
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      id="map-island"
      className="student-home-map-island animate__animated animate__pulse animate__infinite	infinite animate__slower"
    >
      <div className="student-home-map-island-spaceholder">
        <img
          src="/assets/img/css/islands/island-spaceholder.gif"
          alt="island"
        />
      </div>

      <div className="student-home-map-island-path">
        <img src="/assets/img/css/islands/island-path.png" alt="path" />
      </div>

      {status === 1 &&
        assignments
          .sort((a, b) => a.id - b.id)
          .map((assignment, index) => {
            const className = "island-icon-position island-lock-" + index;
            const linkUrl = "/assignment/" + assignment.id;
            const uniqueKey = "assignment-icon" + assignment.id;

            // This const "done" return true If assignment is done for that student / false if not
            const done =
              assignment.isDoneByUser.filter((usr) => usr.id === user[0].id)
                .length > 0;
            console.log("Assignement with id", assignment);
            //     done ? "has be done" : "is not done", 'by user', user[0].name);

            const assignmentType = done
              ? "done"
              : moment(assignment.unlockTime).format("YYYY-MM-DD HH:MM") <
                moment().format("YYYY-MM-DD HH:MM")
              ? "unlock"
              : "lock";

            const orderNumber = index + 1;
            const addLinkToIcon = giveLinkToIcon(assignmentType, done);

            return (
              <div>
                <div className={className}>
                  <LockIcon
                    key={uniqueKey}
                    linkUrl={linkUrl}
                    type={assignmentType}
                    done={done}
                    assignmentNum={orderNumber}
                    addLinkToIcon={addLinkToIcon}
                  />
                </div>
              </div>
            );
          })}
    </div>
  );
}
