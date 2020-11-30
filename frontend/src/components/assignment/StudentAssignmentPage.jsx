import { useState } from 'react';

import Button from './atoms/Button';
import StudentChat from './chatbot/StudentChat';
import StudentSpeech from './speech/StudentSpeech';

export default function StudentAssignmentPage() {

    const [chatIsOpen, setChatIsOpen] = useState(false);
    const [speechIsOpen, setSpeechIsOpen] = useState(false);

    return (
        <div className="bg-light p-2">
            <h4>Student Assignment Page</h4>

            <p>Regarding what the teacher decided, I can :</p>

            <Button content="Open a Quiz" />

            <Button 
                content={!speechIsOpen ? "Open a Speech exercice" : "Close Speech"}
                onClick={() => setSpeechIsOpen(!speechIsOpen)} 
            />

            <Button 
                content={!chatIsOpen ? "Open a chatbot" : "Close Chat"}
                onClick={() => setChatIsOpen(!chatIsOpen)} 
            />

            <Button content="Do something else" />

            <hr />

            { chatIsOpen && <StudentChat /> }
            { speechIsOpen && <StudentSpeech /> }

        </div>
    );
}
