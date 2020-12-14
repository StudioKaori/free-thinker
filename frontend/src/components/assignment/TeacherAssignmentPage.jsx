import { useState } from 'react';
import AssignmentApi from '../../api/AssignmentApi'

import CreateChat from './chatbot/CreateChat';
import CreateSpeech from './speech/CreateSpeech';
import CreateQuiz from './quiz/CreateQuiz';
import PopUpMsg from "./PopUpMsg";
import AssignmentCreateForm from  "./assignCreate/AssignCreateForm"
import Icon from "../icons/map-icon"

// Create assignment Page for teacher
export default function TeacherAssignmentPage(onDeleteClick) {

    // Form Validity
    const [nothingIsPicked, setNothingIsPicked] = useState(true);
    const [assignmentIsValid, setAssignmentIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    // Assignment choices
    const [uploadFileIsOpen, setUploadFileIsOpen] = useState(false);
    const [createQuizIsOpen, setCreateQuizIsOpen] = useState(false);
    const [createSpeechIsOpen, setCreateSpeechIsOpen] = useState(false);
    const [createChatIsOpen, setCreateChatIsOpen] = useState(false);

    
    // Pop up messages
    const [displayPopUp, setDisplayPopUp] = useState(false);
    const [displayError, setDisplayError] = useState(false);
    
    // Form helpers
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
                setAssignmentIsValid(false);
                setFormIsValid(false);
                setNothingIsPicked(true)
            })
    } 

    return (
        <div className="bg-light p-2">

            <AssignmentCreateForm 
                assignmentObj={assignmentObj} setAssignmentObj={setAssignmentObj} 
                setFormIsValid={setFormIsValid}
                setResetFields={setResetFields} resetFields={resetFields}
            />

        <div className="dropdown ml-4">
            <label>Assignement :</label>
            <button className="btn btn-secondary dropdown-toggle mx-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {typeof assignmentObj.type === 'undefined' ? 'Pick Assignment' : assignmentObj.type}
            </button>
            {
                assignmentIsValid ? 
                <span>
                    <span className="mr-2"> {assignmentObj.type} </span>
                    <span > <Icon type="check"/> </span>
                </span>
                : !nothingIsPicked ?
                <span>
                    <span className="mr-2"> {assignmentObj.type} </span>
                    <span > <Icon type="wrong"/> </span>
                </span>
                : null
            }
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div 
                    className="dropdown-item"
                    onClick={() => {
                        setNothingIsPicked(false);
                        setAssignmentIsValid(true);
                        setUploadFileIsOpen(false);
                        setCreateChatIsOpen(false);
                        setCreateQuizIsOpen(false);
                        setCreateSpeechIsOpen(false);
                        setAssignmentObj({type: 'None', assignment: ''})
                    }}
                >None</div>
                <div 
                    className="dropdown-item" data-toggle="dropdown-menu"
                    onClick={() => {
                        // setUploadFileIsOpen(true);
                        // setCreateChatIsOpen(false);
                        // setCreateQuizIsOpen(false);
                        // setCreateSpeechIsOpen(false);
                    }}
                >Upload File</div>
                <div 
                    className="dropdown-item"
                    onClick={() => {
                        setUploadFileIsOpen(false);
                        setCreateChatIsOpen(true);
                        setCreateQuizIsOpen(false);
                        setCreateSpeechIsOpen(false);
                    }}
                >Chat</div>
                <div 
                    className="dropdown-item"
                    onClick={() => {
                        setUploadFileIsOpen(false);
                        setCreateChatIsOpen(false);
                        setCreateQuizIsOpen(true);
                        setCreateSpeechIsOpen(false);
                    }}
                >Quiz</div>
                <div 
                    className="dropdown-item"
                    onClick={() => {
                        setUploadFileIsOpen(false);
                        setCreateChatIsOpen(false);
                        setCreateQuizIsOpen(false);
                        setCreateSpeechIsOpen(true);
                    }}
                >Speech</div>
            </div>
        </div>


            <div className="d-flex justify-content-center mt-3">
                {createChatIsOpen && 
                    <CreateChat 
                        close={() => setCreateChatIsOpen(false)} 
                        setAssignmentIsValid={setAssignmentIsValid}
                        setNothingIsPicked={setNothingIsPicked}
                        assignmentObj={assignmentObj} setAssignmentObj={setAssignmentObj}
                    /> }
                {createSpeechIsOpen && 
                    <CreateSpeech 
                        close={() => setCreateSpeechIsOpen(false)} 
                        setAssignmentIsValid={setAssignmentIsValid}
                        setNothingIsPicked={setNothingIsPicked}
                        assignmentObj={assignmentObj}  setAssignmentObj={setAssignmentObj}
                    /> }
                {createQuizIsOpen && 
                    <CreateQuiz 
                        close={() => setCreateQuizIsOpen(false)} 
                        setAssignmentIsValid={setAssignmentIsValid}
                        setNothingIsPicked={setNothingIsPicked}
                        assignmentObj={assignmentObj}  setAssignmentObj={setAssignmentObj}
                    /> }
                {uploadFileIsOpen && <div>Not ready yet</div>}
            </div>

            <button
              id="assignCreateButtonInAssignForm"
              className="btn btn-info"
              disabled={assignmentIsValid && formIsValid ? '' : 'disabled'}
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
