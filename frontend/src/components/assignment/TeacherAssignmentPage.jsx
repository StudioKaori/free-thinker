import { useState } from 'react';

import Button from './atoms/Button';
import CreateChat from './chatbot/CreateChat';
import CreateSpeech from './speech/CreateSpeech';
import CreateQuiz from './quiz/CreateQuiz';
import PopUpMsg from "./PopUpMsg";

export default function TeacherAssignmentPage() {

    const [uploadFileIsOpen, setUploadFileIsOpen] = useState(false);
    const [createQuizIsOpen, setCreateQuizIsOpen] = useState(false);
    const [createSpeechIsOpen, setCreateSpeechIsOpen] = useState(false);
    const [createChatIsOpen, setCreateChatIsOpen] = useState(false);
    const [displayPopUp, setDisplayPopUp] = useState(false);

    return (
        <div className="bg-light p-2">

            <h3 className="text-center">Create a new Assignment</h3>

            <div className="d-flex justify-content-center mt-3">
                <Button 
                    disabled={createChatIsOpen || createSpeechIsOpen || createQuizIsOpen}
                    buttonStyle="is-rounded btn-primary"
                    content={!uploadFileIsOpen ? "Upload File" : "Stop"}
                    onClick={() => setUploadFileIsOpen(!uploadFileIsOpen)}
                />

                <Button 
                    disabled={createChatIsOpen || createSpeechIsOpen || uploadFileIsOpen}
                    buttonStyle="is-rounded btn-primary"
                    content={!createQuizIsOpen ? "Create new Quiz" : "Stop"}
                    onClick={() => setCreateQuizIsOpen(!createQuizIsOpen)}
                />

                <Button 
                    disabled={createQuizIsOpen || createChatIsOpen || uploadFileIsOpen}
                    buttonStyle="is-rounded btn-primary"
                    content={!createSpeechIsOpen ? "Create new Speech" : "Stop"}
                    onClick={() => setCreateSpeechIsOpen(!createSpeechIsOpen)}
                />

                <Button 
                    disabled={createQuizIsOpen || createSpeechIsOpen || uploadFileIsOpen}
                    buttonStyle="is-rounded btn-primary"
                    content={!createChatIsOpen ? "Create new Chat" : "Stop"}
                    onClick={() => setCreateChatIsOpen(!createChatIsOpen)}
                />
            </div>

            <div className="d-flex justify-content-center mt-3">
                {createChatIsOpen && 
                    <CreateChat 
                        close={() => setCreateChatIsOpen(false)} 
                        setDisplayPopUp={setDisplayPopUp}
                    /> }
                {createSpeechIsOpen && <CreateSpeech /> }
                {createQuizIsOpen && <CreateQuiz /> }
                {uploadFileIsOpen && <div>Not ready yet</div>}
            </div>

            {displayPopUp && <PopUpMsg message="Succesfully saved"/>}
        </div>
    );
}
