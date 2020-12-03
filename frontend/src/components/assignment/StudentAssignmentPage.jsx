import StudentChat from './chatbot/StudentChat';
import StudentSpeech from './speech/StudentSpeech';
import StudentQuiz from './quiz/StudentQuiz';

export default function StudentAssignmentPage({ assignment }) {

    console.log(assignment);

    return (
        <div className="bg-light p-2">
            <h4>Student Assignment Page</h4>

            <hr />
            {
                assignment.type === 'Chat'
                    ? <StudentChat key={assignment.id} chat={JSON.parse(assignment.assignment)} />
                    : assignment.type === 'Speech'
                        ? <StudentSpeech key={assignment.id} speech={JSON.parse(assignment.assignment)} />
                        : assignment.type === 'Quiz'
                            ? <StudentQuiz key={assignment.id} quiz={JSON.parse(assignment.assignment)} />
                            : null

            }
            <hr />

        </div>
    );
}
