import { useState } from 'react';

import Button from './atoms/Button';
import CreateChat from './chatbot/CreateChat';
import CreateSpeech from './speech/CreateSpeech';

export default function TeacherAssignmentPage() {

    const [createChatIsOpen, setCreateChatIsOpen] = useState(false);
    const [createSpeechIsOpen, setCreateSpeechIsOpen] = useState(false);

    return (
        <div className="bg-light p-2">

            <h3>Teacher Assignment Page</h3>

            <p> Here, as a teacher, I can decide what will be this assignment, I can : </p>
            <Button content="Import a new file" />
            <Button content="Create new Quiz" />

            <Button 
                content={!createSpeechIsOpen ? "Create new Speech" : "Stop"}
                onClick={() => setCreateSpeechIsOpen(!createSpeechIsOpen)}
            />

            <Button 
                content={!createChatIsOpen ? "Create new Chat" : "Stop"}
                onClick={() => setCreateChatIsOpen(!createChatIsOpen)}
            />

            {createChatIsOpen && <CreateChat /> }
            {createSpeechIsOpen && <CreateSpeech /> }
        </div>
    );
}
