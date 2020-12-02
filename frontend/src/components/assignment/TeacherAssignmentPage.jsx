import { useState } from 'react';

import Button from './atoms/Button';
import CreateChat from './chatbot/CreateChat';
import CreateSpeech from './speech/CreateSpeech';
import CreateQuiz from './quiz/CreateQuiz';

export default function TeacherAssignmentPage() {

    const [createChatIsOpen, setCreateChatIsOpen] = useState(false);
    const [createSpeechIsOpen, setCreateSpeechIsOpen] = useState(false);
    const [createQuizIsOpen, setCreateQuizIsOpen] = useState(false);

    return (
        <div className="bg-light p-2">

            <h3>Teacher Assignment Page</h3>

            <div className="d-flex justify-content-center mt-3">
                <Button 
                    buttonStyle="is-rounded btn-primary"
                    content={!createQuizIsOpen ? "Create new Quiz" : "Stop"}
                    onClick={() => setCreateQuizIsOpen(!createQuizIsOpen)}
                />

                <Button 
                    buttonStyle="is-rounded btn-primary"
                    content={!createSpeechIsOpen ? "Create new Speech" : "Stop"}
                    onClick={() => setCreateSpeechIsOpen(!createSpeechIsOpen)}
                />

                <Button 
                    buttonStyle="is-rounded btn-primary"
                    content={!createChatIsOpen ? "Create new Chat" : "Stop"}
                    onClick={() => setCreateChatIsOpen(!createChatIsOpen)}
                />
            </div>

            <div className="d-flex justify-content-center mt-3">
                {createChatIsOpen && <CreateChat /> }
                {createSpeechIsOpen && <CreateSpeech /> }
                {createQuizIsOpen && <CreateQuiz /> }
            </div>
        </div>
    );
}
