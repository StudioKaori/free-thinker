import { useState } from "react";
import AssignmentApi from '../../../api/AssignmentApi';

import CreateChatForm from './CreateChatForm';

import Button from '../atoms/Button';

export default function CreateChat({close, setDisplayPopUp}) {

    const [newChat, setNewChat ] = useState({})

    const saveChat = () => {
        const newAssignment = {
            type: 'Chat',
            assignment : JSON.stringify(newChat),
        }
        AssignmentApi.createAssignment(newAssignment)
            .then(() => {
                setDisplayPopUp(true);
                setTimeout(() => {
                    setDisplayPopUp(false);
                }, 1000)

                close();
            })
    }

    return (
        <div className="container d-flex justify-content-center"> 

            <div className="col-sm-12 col-md-8">

                <div className="text-center">
                    <Button 
                        buttonStyle="btn-danger"
                        content="Save Chat" 
                        onClick={() => saveChat()}
                    />
                </div>

                <CreateChatForm setNewChat={setNewChat} />

            </div>
        </div>
    );
}
