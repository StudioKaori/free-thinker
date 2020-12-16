import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";

// Pages
import StudentHomePage from "../student/StudentHomePage";
import StudentLecture from "../student/lecture/LecturePage";
import StudentAssignmentPage from "../assignment/StudentAssignmentPage";
import LecturePage from "../lecture/LecturePage";
import LectureStudentPage from "../lecture/LectureStudentPage";
import TeacherHomePage from "../teacher/TeacherHomePage";
import TeacherAssignmentPage from "../assignment/TeacherAssignmentPage";
import LectureCalendarPage from "../teacher/LectureCalendarPage";
import WorldMapPage from "../student/worldmap/WorldMapPage";
import IslandPage from "../student/assignment/IslandPage";
import TeacherDailySettings from "../teacher/home/DailySettingForm";

// ========================================================================
// Router - dispatch routes regarding user type (student or teacher)
export default function User() {
  const { path } = useRouteMatch();
  const [status, setStatus] = useState(0);
  const [user] = useRecoilState(userState);

  useEffect(() => {
    if (user.length !== 0) {
      setStatus(1);
    }
  }, [user]);

  return (
    <div>
      {status === 1 ? (
        user[0].userType === "Teacher" ? (
          <Switch>
            <Route path={path + "create-lecture"}>
              <LecturePage />
            </Route>
            <Route path={path + "create-assignment"}>
              <TeacherAssignmentPage />
            </Route>
            <Route path={path + "daily-settings"}>
              <TeacherDailySettings />
            </Route>
            <Route
              path="/create-lecture-from-cal/:date"
              render={(dateFromCal) => (
                <LecturePage dateFromCal={dateFromCal} />
              )}
            />

            <Route
              path="/lecture-calendar"
              render={() => <LectureCalendarPage />}
            />
            <Route
              path="/assignment/:id"
              render={(match) => <StudentAssignmentPage match={match} />}
            />
            <Route
              path="/lecture/:id"
              render={(match) => <StudentLecture match={match} />}
            />
            <Route path={path}>
              <TeacherHomePage />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path={path + "see-lecture"}>
              <LectureStudentPage />
            </Route>
            <Route
              path="/lecture-calendar"
              render={() => <LectureCalendarPage />}
            />
            <Route path="/my-progress" render={() => <WorldMapPage />} />
            <Route
              path="/assignment/day/:date"
              render={(date) => <IslandPage myDate={date} />}
            />
            <Route
              path="/assignment/:id"
              render={(match) => <StudentAssignmentPage match={match} />}
            />
            <Route
              path="/lecture/:id"
              render={(match) => <StudentLecture match={match} />}
            />
            <Route path={path}>
              <StudentHomePage />
            </Route>
          </Switch>
        )
      ) : null}
    </div>
  );
}
