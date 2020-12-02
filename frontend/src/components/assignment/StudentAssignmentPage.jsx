import { useEffect, useState } from 'react';

// import Button from './atoms/Button';
import StudentChat from './chatbot/StudentChat';
import StudentSpeech from './speech/StudentSpeech';
import AssignmentApi from '../../api/AssignmentApi';

export default function StudentAssignmentPage() {

    // const [chatIsOpen, setChatIsOpen] = useState(false);
    // const [speechIsOpen, setSpeechIsOpen] = useState(false);
    const [ assignments, setAssignments ] = useState([]);

    useEffect(() => {
        AssignmentApi.getAllAssignments()
            .then((res) => {
                // console.log(res);
                setAssignments(res.data);
            })
    }, [])

    return (
        <div className="bg-light p-2">
            <h4>Student Assignment Page</h4>

            {/* <p>Regarding what the teacher decided, I can :</p>

            <Button content="Open a Quiz" />

            <Button 
                content={!speechIsOpen ? "Open a Speech exercice" : "Close Speech"}
                onClick={() => setSpeechIsOpen(!speechIsOpen)} 
            />

            <Button 
                content={!chatIsOpen ? "Open a chatbot" : "Close Chat"}
                onClick={() => setChatIsOpen(!chatIsOpen)} 
            />

            <Button content="Do something else" /> */}

            <hr />
            {
                assignments.map((ass) => 
                    ass.type === 'Chat' 
                        ? <StudentChat key={ass.id} chat={JSON.parse(ass.assignment)} /> 
                        : ass.type === 'Speech' 
                            ? <StudentSpeech key={ass.id} speech={JSON.parse(ass.assignment)} />
                            : null
                )
            }
            <hr />

            {/* { chatIsOpen && <StudentChat /> }
            { speechIsOpen && <StudentSpeech /> } */}

        </div>
    );
}
