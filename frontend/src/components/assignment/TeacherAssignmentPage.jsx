import { useState, useEffect } from 'react';
import moment from "moment";

import AssignmentApi from '../../api/AssignmentApi';

import AssignCard from '../assignment/assignCreate/AssignCard';
import AssignmentCreateForm from "./assignCreate/AssignCreateForm";
import FileUpload from "../assignment/assignCreate/FileUpload";

import CreateChat from './chatbot/CreateChat';
import CreateSpeech from './speech/CreateSpeech';
import CreateQuiz from './quiz/CreateQuiz';

import PopUpMsg from "./PopUpMsg";
import Icon from "../icons/map-icon";
import ClassDailySettingsApi from '../../api/ClassDailySettingsApi';

// =====================================================================
// Create assignment Page for teacher
export default function TeacherAssignmentPage() {

    // Form Validity
    const [nothingIsPicked, setNothingIsPicked] = useState(true);
    const [assignmentIsValid, setAssignmentIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    // Assignment choices
    const [uploadFileIsOpen, setUploadFileIsOpen] = useState(false);
    const [createQuizIsOpen, setCreateQuizIsOpen] = useState(false);
    const [createSpeechIsOpen, setCreateSpeechIsOpen] = useState(false);
    const [createChatIsOpen, setCreateChatIsOpen] = useState(false);

    // Pop up message
    const [displayPopUp, setDisplayPopUp] = useState(false);

    // Form helpers
    const [assignmentObj, setAssignmentObj] = useState({});
    const [resetFields, setResetFields] = useState(false);

    // Assignment list for overview
    const [assignments, setAssignments] = useState([]);

    const getAll = () => {
        AssignmentApi.getAllAssignments().then((res) => {
            setAssignments(res.data.sort((a, b) => b.id - a.id));
        });
    };

    useEffect(() => {
        getAll();
    }, [])

    const onCreateClick = () => {
        AssignmentApi.createAssignment(assignmentObj)
            .then(() => {
                getAll();

                setDisplayPopUp(true);
                setTimeout(() => {
                    setDisplayPopUp(false);
                }, 1000)

                setAssignmentObj({})
                setResetFields(true);
                setAssignmentIsValid(false);
                setFormIsValid(false);
                setNothingIsPicked(true);

                
                // Create a new daily setting if teacher create assignment for another day
                const assignDate = assignmentObj.unlockTime.substr(0,10);
                ClassDailySettingsApi.getByDate(assignDate)
                    .then((res) => {
                        if (res.data === "") { // Non existing
                            const defaultSettings = {
                                islandTheme: "island-green",
                                date: assignDate + "T00:00:00.0",
                            }
                            ClassDailySettingsApi
                                .createClassDailySetting(defaultSettings)
                                .then(() => console.log('New daily setting set for', assignDate));
                        }
                    })

            })
    }

    const deleteAssignment = (id) => {
        AssignmentApi.deleteAssignment(id).then(() => getAll());
    };

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
                            <span > <Icon type="check" /> </span>
                        </span>
                        : !nothingIsPicked ?
                            <span>
                                <span className="mr-2"> {assignmentObj.type} </span>
                                <span > <Icon type="wrong" /> </span>
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

                            const newAssign = { ...assignmentObj };
                            newAssign.type = 'None';
                            newAssign.assignment = '';
                            setAssignmentObj(newAssign);
                        }}
                    >None</div>
                    <div
                        className="dropdown-item" data-toggle="dropdown-menu"
                        onClick={() => {
                            setUploadFileIsOpen(true);
                            setCreateChatIsOpen(false);
                            setCreateQuizIsOpen(false);
                            setCreateSpeechIsOpen(false);
                        }}
                    >Upload</div>
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
                    />}
                {createSpeechIsOpen &&
                    <CreateSpeech
                        close={() => setCreateSpeechIsOpen(false)}
                        setAssignmentIsValid={setAssignmentIsValid}
                        setNothingIsPicked={setNothingIsPicked}
                        assignmentObj={assignmentObj} setAssignmentObj={setAssignmentObj}
                    />}
                {createQuizIsOpen &&
                    <CreateQuiz
                        close={() => setCreateQuizIsOpen(false)}
                        setAssignmentIsValid={setAssignmentIsValid}
                        setNothingIsPicked={setNothingIsPicked}
                        assignmentObj={assignmentObj} setAssignmentObj={setAssignmentObj}
                    />}
                {uploadFileIsOpen &&
                    <FileUpload
                        close={() => setUploadFileIsOpen(false)}
                        setAssignmentIsValid={setAssignmentIsValid}
                        setNothingIsPicked={setNothingIsPicked}
                        assignmentObj={assignmentObj} setAssignmentObj={setAssignmentObj}
                    />}
            </div>

            <button
                id="assignCreateButtonInAssignForm"
                className="btn btn-info"
                disabled={assignmentIsValid && formIsValid ? '' : 'disabled'}
                onClick={() => onCreateClick()}
            >
                Create
            </button>

            {displayPopUp && <PopUpMsg type="success" message="Succesfully saved" />}

            {assignments.map((assign) => (
                <AssignCard
                    key={assign.id}
                    assign={assign}
                    onDeleteClick={deleteAssignment}
                />
            ))}
        </div>
    );
}
