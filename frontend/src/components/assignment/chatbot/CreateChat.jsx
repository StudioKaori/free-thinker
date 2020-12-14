import { useState } from "react";

import Button from '../atoms/Button';
import CreateChatForm from './CreateChatForm';

// Entry point for Creating a chat - Teacher's side
export default function CreateChat({close, assignmentObj, setAssignmentObj, 
    setAssignmentIsValid, setNothingIsPicked}) {

    const [newChat, setNewChat ] = useState({})

    // Helper function when saving quiz,
    // Check if no empty field for each question
    const lastCheck = (steps) => {
        for (let i = 0; i < steps.length; i += 1) {
            if (steps[i].message === '') {
                return false;
            }
        }
        return true;
    }

    const saveChat = () => {

        const newObj = {...assignmentObj}
        newObj.type = "Chat";

        if (!lastCheck(newChat.steps)) { 
            setNothingIsPicked(false)
            setAssignmentObj(newObj);
            setAssignmentIsValid(false)
            return; 
        } // Cancel if not ok
        newObj.assignment = JSON.stringify(newChat);

        setNothingIsPicked(false)
        setAssignmentObj(newObj);
        setAssignmentIsValid(true);
        close();
    }

    return (
        <div className="container d-flex justify-content-center"> 

            <div className="col-sm-12 col-md-8">

                <div className="text-center">
                    <Button
                        id="create-chat-button"
                        buttonStyle="btn m-1 btn-danger"
                        content="Save Chat" 
                        onClick={() => saveChat()}
                    />
                </div>

                <CreateChatForm setNewChat={setNewChat} />

            </div>
        </div>
    );
}
