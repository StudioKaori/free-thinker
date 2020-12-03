import { useEffect, useState } from 'react';

import StudentChat from './chatbot/StudentChat';
import StudentSpeech from './speech/StudentSpeech';
import StudentQuiz from './quiz/StudentQuiz';
import AssignmentApi from '../../api/AssignmentApi';

export default function StudentAssignmentPage() {

    const [ assignments, setAssignments ] = useState([]);

    useEffect(() => {
        AssignmentApi.getAllAssignments()
            .then((res) => {
                setAssignments(res.data);
            })
    }, [])

    return (
        <div className="bg-light p-2">
            <h4>Student Assignment Page</h4>

            <hr />
            {
                assignments.map((ass) => 
                    ass.type === 'Chat' 
                        ? <StudentChat key={ass.id} chat={JSON.parse(ass.assignment)} /> 
                        : ass.type === 'Speech' 
                            ? <StudentSpeech key={ass.id} speech={JSON.parse(ass.assignment)} />
                            : ass.type === 'Quiz'
                                ? <StudentQuiz key={ass.id} quiz={JSON.parse(ass.assignment)} />
                                : null
                )
            }
            <hr />

        </div>
    );
}
