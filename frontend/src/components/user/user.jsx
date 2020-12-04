import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AssignmentApi from "../../api/AssignmentApi";
import LectureApi from "../../api/LectureApi";
import LectureStudentPage from "../lecture/LectureStudentPage";


// Pages
import StudentHomePage from "../student/StudentHomePage";
import TeacherHomePage from "../teacher/TeacherHomePage";
import LecturePage from "../lecture/LecturePage";
import TeacherAssignmentPage from "../assignment/TeacherAssignmentPage";
import StudentAssignmentPage from "../assignment/StudentAssignmentPage";
import StudentLecture from "../student/lecture/LecturePage";
import Lecture from "../lecture/Lecture";


export default function User() {
  const { path } = useRouteMatch();
  const [status, setStatus] = useState(0);
  const [user] = useRecoilState(userState);
  const [assignments, setAssignments] = useState([]);
  const [lectures, setLectures] = useState([]);


  useEffect(() => {
    AssignmentApi.getAllAssignments().then((res) => {
      setAssignments(res.data);
    });
  }, []);

  useEffect(() => {
        LectureApi.getAllLectures().then((res) => {
            setLectures(res.data);
        })
}, [])

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
            {assignments.map((assign) => (
              <Route path={path + "student/assignments/" + assign.id}>
                <StudentAssignmentPage assignment={assign} />
              </Route>
            ))}
            {lectures.map((lecture) =>
              <Route key={lecture.id} path={path + "student/lectures/"+ lecture.id}>
                  <Lecture lecture={lecture} />
              </Route>
              )
              }
              <Route path={path + "see-lecture"}>
                            <LectureStudentPage />
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
