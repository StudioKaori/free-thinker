import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { useRecoilState } from "recoil";
import { userState } from "../../../js/state-information";

import StudentChat from "./StudentChat";
import StudentSpeech from "./StudentSpeech";
import StudentQuiz from "./StudentQuiz";

import AssignmentApi from "../../../api/AssignmentApi";
import AssignmentProgressApi from "../../../api/AssignmentProgressApi";

import WorldMap from "../../components/student/worldmap/WorldMap";

import "../../../css/student/assignmentPage.css";

// =====================================================================
// Student assignment entry point, fetch assignment by id and display the related component
export default function StudentAssignmentPage({ match }) {
  // Variables
  const assignmentId = Number(match.match.params.id);
  const [assignment, setAssignment] = useState({});
  const [isLastAssignment, setIsLastAssignment] = useState(false);
  const [allDone, setAllDone] = useState(false);
  const [end, setEnd] = useState(false); // Check for assignment completion
  const [user] = useRecoilState(userState);
  const [date] = useState(moment().format("yyyy-MM-DD"));

  const monster = useRef();
  monster.current = "oni";

  useEffect(() => {
    // Current assignment
    AssignmentApi.getAssignmentById(assignmentId).then((res) => {
      setAssignment(res.data);
      const done =
        res.data.isDoneByUser.filter((usr) => usr.id === user[0].id).length > 0;
      setEnd(done);
    });

    // Is it the last of the day ?
    AssignmentApi.getAssignmentsByUnlockDate(date).then((res) => {
      const lastAssignmentId = res.data[res.data.length - 1].id;
      if (lastAssignmentId === assignmentId) {
        setIsLastAssignment(true);
      } else {
        setAllDone(false); // In case we add an assignment the same day.
      }
    });
  }, []);

  // When/If assignment is done
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
        console.log("assignment", updatedAssign.id, "is done")
      );

      if (isLastAssignment && !allDone) {
        // Send signal that all assignment for the day are done

        AssignmentProgressApi.getAllAssignmentProgresss().then((res) => {
          const todayStudentProgress = res.data.filter(
            (prog) =>
              prog.classDailySetting.date.substr(0, 10) === date &&
              prog.student.id === user[0].id
          )[0]; // Supposed to return an array of 1 element

          const newObj = { ...todayStudentProgress };
          newObj.assignmentsOfTheDayIsDone = true;

          AssignmentProgressApi.updateAssignmentProgress(newObj).then((res) => {
            console.log("End of the day, youhou!");
            console.log("res", res.data);
            monster.current = res.data.monster;
          });
        });
        setAllDone(true);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, assignment]);

  return (
    <section className="body-wrapper">
      <h2 className="border-bottom mb-3">{assignment.title}</h2>

      {allDone ? (
        <div>
          <WorldMap showCongrats="true" />
        </div>
      ) : end ? (
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
            <button className="btn btn-success" onClick={() => setEnd(true)}>
              I am done
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
