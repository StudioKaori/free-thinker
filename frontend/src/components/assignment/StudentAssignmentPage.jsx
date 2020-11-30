import { useState } from 'react';

import Button from './atoms/Button';
import StudentChat from './chatbot/StudentChat';

export default function StudentAssignmentPage() {

    const [chatIsOpen, setChatIsOpen] = useState(false);

    return (
        <div className="bg-light p-2">
            <h4>Student Assignment Page</h4>

            <p>Regarding what the teacher decided, I can :</p>

            <Button content="Open a Speech exercice" />
            <Button content="Open a Quiz" />

            <Button 
                content={!chatIsOpen ? "Open a chatbot" : "Close Chat"}
                onClick={() => setChatIsOpen(!chatIsOpen)} 
            />

            <Button content="Do something else" />

            <hr />

            { chatIsOpen && <StudentChat /> }
        </div>
    );
}
