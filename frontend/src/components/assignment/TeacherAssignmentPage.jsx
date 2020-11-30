import { useState } from 'react';

import CreateChat from './chatbot/CreateChat';
import Button from './atoms/Button';

export default function TeacherAssignmentPage() {

    const [createChatIsOpen, setCreateChatIsOpen] = useState(false);

    return (
        <div className="bg-light p-2">

            <h3>Teacher Assignment Page</h3>

            <p> Here, as a teacher, I can decide what will be this assignment, I can : </p>
            <Button content="Import a new file" />
            <Button content="Create new Quiz" />
            <Button content="Create new Speech" />

            <Button 
                content={!createChatIsOpen ? "Create new Chat" : "Stop"}
                onClick={() => setCreateChatIsOpen(!createChatIsOpen)}
            />

            {createChatIsOpen && <CreateChat /> }
        </div>
    );
}
