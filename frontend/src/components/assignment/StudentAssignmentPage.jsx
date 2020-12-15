import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../js/state-information";
import moment from "moment";

import StudentChat from "./chatbot/StudentChat";
import StudentSpeech from "./speech/StudentSpeech";
import StudentQuiz from "./quiz/StudentQuiz";

import AssignmentApi from "../../api/AssignmentApi";

import "../../css/student/assignmentPage.css";
import AssignmentProgressApi from "../../api/AssignmentProgressApi";
import ClassDailySettingsApi from "../../api/ClassDailySettingsApi";

// Student assignment entry point, fetch assignment by id and display the related component
export default function StudentAssignmentPage({ match }) {

    const assignmentId = Number(match.match.params.id);
    const [assignment, setAssignment] = useState({});
    const [isLastAssignment, setIsLastAssignment] = useState(false);
    const [allDone, setAllDone] = useState(false);
    const [end, setEnd] = useState(false); // Check for assignment completion
    const [user] = useRecoilState(userState);
    const [date] = useState(moment().format("yyyy-MM-DD"));

  useEffect(() => {
    AssignmentApi.getAssignmentById(assignmentId).then((res) => {
      setAssignment(res.data);
      const done =
        res.data.isDoneByUser.filter((usr) => usr.id === user[0].id).length > 0;
      setEnd(done);
    });

    AssignmentApi.getAssignmentsByUnlockDate(date).then((res) => {
        const lastAssignmentId = res.data[res.data.length - 1].id;
        if (lastAssignmentId === assignmentId) {
            setIsLastAssignment(true);
        } else {
            setAllDone(false); // In case we add an assignment the same day.
        }
      });
  }, []);

  useEffect(() => {
    if (end) {
      let updatedAssign = { ...assignment };
      if (
        updatedAssign.isDoneByUser.filter((usr) => usr.id === user[0].id)
          .length > 0
      ) {
        // Means : student click on an already finished assignment
        return;
      }
      const temp = updatedAssign.isDoneByUser.concat(user[0]);
      updatedAssign.isDoneByUser = temp;

      AssignmentApi.updateAssignment(updatedAssign).then(() =>
        console.log('assignment', updatedAssign.id, "is done")
      );

            if (isLastAssignment && !allDone) { // Send signal that all assignment for the day are done

            ClassDailySettingsApi.getByDate(date).then((res) => { 
                const newObj = {
                    assignmentsOfTheDayIsDone: true,
                    classDailySetting: {id: res.data.id}, 
                    student: {id: user[0].id} // student id
                }
                AssignmentProgressApi.createAssignmentProgress(newObj)
                    .then((res) => {
                        console.log("End of the day, youhou!")
                    } );
            })
            setAllDone(true);
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, assignment]);

  return (
    <section className="body-wrapper">
      <h2 className="border-bottom mb-3">{assignment.title}</h2>

      {end ? (
        <div className="text-center">
          <p>Thank you very much your teacher will review your answers.</p>
          <Link to="/" className="btn btn-danger">
            Back
          </Link>
        </div>
      ) : assignment.type === "Chat" ? (
        <StudentChat
          key={assignment.id}
          chat={JSON.parse(assignment.assignment)}
          setEnd={setEnd}
        />
      ) : assignment.type === "Speech" ? (
        <StudentSpeech
          key={assignment.id}
          speech={JSON.parse(assignment.assignment)}
          setEnd={setEnd}
        />
      ) : assignment.type === "Quiz" ? (
        <StudentQuiz
          key={assignment.id}
          quiz={JSON.parse(assignment.assignment)}
          setEnd={setEnd}
        />
      ) : assignment.type === "None" ? (
        <div>
            {assignment.title}
            {assignment.instructions}
            <div className="text-right">
                <button
                    className="btn btn-success"
                    onClick={() => setEnd(true)}
                >I am done</button>
            </div>
        </div>
      ) : null}
    </section>
  );
}
