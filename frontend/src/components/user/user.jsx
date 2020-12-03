import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// Pages
import StudentHomePage from "../student/StudentHomePage";
import TeacherHomePage from "../teacher/TeacherHomePage";
import LecturePage from "../lecture/LecturePage";
import TeacherAssignmentPage from "../assignment/TeacherAssignmentPage";
import StudentAssignmentPage from "../assignment/StudentAssignmentPage";
import StudentLecture from "../student/lecture/LecturePage";

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
            <Route path={path}>
              <TeacherHomePage />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path={path + "see-assignment"}>
              <StudentAssignmentPage />
            </Route>
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
