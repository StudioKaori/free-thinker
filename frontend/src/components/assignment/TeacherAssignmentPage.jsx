import { useState } from 'react';
import AssignmentApi from '../../api/AssignmentApi'

import Button from './atoms/Button';
import CreateChat from './chatbot/CreateChat';
import CreateSpeech from './speech/CreateSpeech';
import CreateQuiz from './quiz/CreateQuiz';
import PopUpMsg from "./PopUpMsg";
import AssignmentCreateForm from  "./assignCreate/AssignCreateForm"

// Create assignment Page for teacher
export default function TeacherAssignmentPage(onDeleteClick) {

    const [uploadFileIsOpen, setUploadFileIsOpen] = useState(false);
    const [createQuizIsOpen, setCreateQuizIsOpen] = useState(false);
    const [createSpeechIsOpen, setCreateSpeechIsOpen] = useState(false);
    const [createChatIsOpen, setCreateChatIsOpen] = useState(false);
    const [displayPopUp, setDisplayPopUp] = useState(false);
    const [displayError, setDisplayError] = useState(false);

    const [assignmentObj, setAssignmentObj] = useState({});
    const [resetFields, setResetFields] = useState(false);

    const onCreateClick = () => {

        if (typeof assignmentObj.assignment === 'undefined' ) {
            setDisplayError(true);
            setTimeout(() => {
                setDisplayError(false);
            }, 1000)
            return;
        }

        console.log(assignmentObj)
        AssignmentApi.createAssignment(assignmentObj)
            .then(() => {
                setDisplayPopUp(true);
                setTimeout(() => {
                    setDisplayPopUp(false);
                }, 1000)

                setAssignmentObj({})
                setResetFields(true);
            })
    }

    return (
        <div className="bg-light p-2">

            <AssignmentCreateForm 
                assignmentObj={assignmentObj} setAssignmentObj={setAssignmentObj} 
                setResetFields={setResetFields} resetFields={resetFields}
            />

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
                        setDisplayError={setDisplayError} setDisplayPopUp={setDisplayPopUp}
                        assignmentObj={assignmentObj} setAssignmentObj={setAssignmentObj}
                    /> }
                {createSpeechIsOpen && 
                    <CreateSpeech 
                        close={() => setCreateSpeechIsOpen(false)} 
                        setDisplayError={setDisplayError} setDisplayPopUp={setDisplayPopUp}
                        assignmentObj={assignmentObj}  setAssignmentObj={setAssignmentObj}
                    /> }
                {createQuizIsOpen && 
                    <CreateQuiz 
                        close={() => setCreateQuizIsOpen(false)} 
                        setDisplayError={setDisplayError} setDisplayPopUp={setDisplayPopUp}
                        assignmentObj={assignmentObj}  setAssignmentObj={setAssignmentObj}
                    /> }
                {uploadFileIsOpen && <div>Not ready yet</div>}
            </div>

            <button
              id="assignCreateButtonInAssignForm"
              className="btn btn-info"
              onClick={() => onCreateClick()}
            >
              Create
            </button>


            {displayPopUp && <PopUpMsg type="success" message="Succesfully saved"/>}
            {displayError && <PopUpMsg type="error" message="Something is Missing"/>}

          
                <button className="btn btn-danger m-2" onClick={() => onDeleteClick()}>  
                        Delete
                </button>








        </div>





    );
}
