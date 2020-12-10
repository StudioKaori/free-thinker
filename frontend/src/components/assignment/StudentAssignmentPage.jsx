import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import StudentChat from './chatbot/StudentChat';
import StudentSpeech from './speech/StudentSpeech';
import StudentQuiz from './quiz/StudentQuiz';

import AssignmentApi from "../../api/AssignmentApi";

// Student assignment entry point, fetch assignment by id and display the related component
export default function StudentAssignmentPage({ match }) {
    const assignmentId = Number(match.match.params.id);
    const [assignment, setAssignment] = useState({});
    const [end, setEnd] = useState(false); // Check for assignment completion

    useEffect(() => {
      AssignmentApi.getAssignmentById(assignmentId).then((res) => {
        setAssignment(res.data);
        setEnd(res.data.isDone);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (end) {
            const updatedAssign = {...assignment}
            updatedAssign.isDone = true;
            AssignmentApi.updateAssignment(updatedAssign)
        }
    }, [end, assignment])

    return (
        <div className="bg-light p-2 d-flex flex-column align-items-center">

            <h4 className="border-bottom mb-3" >Student Assignment Page</h4>

            { end ?
                <div className="text-center">
                    <p>
                        Thank you very much your teacher will review your answers.
                    </p>
                    <Link to="/" className="btn btn-danger">
                        Back
                    </Link>
                </div>
            :
                assignment.type === 'Chat'
                    ? <StudentChat 
                        key={assignment.id} 
                        chat={JSON.parse(assignment.assignment)}
                        setEnd={setEnd} 
                      />
                    : assignment.type === 'Speech'
                        ? <StudentSpeech 
                            key={assignment.id} 
                            speech={JSON.parse(assignment.assignment)} 
                            setEnd={setEnd} 
                          />
                        : assignment.type === 'Quiz'
                            ? <StudentQuiz 
                                key={assignment.id} 
                                quiz={JSON.parse(assignment.assignment)}
                                setEnd={setEnd} 
                              />
                            : null

            }

        </div>
    );
}
