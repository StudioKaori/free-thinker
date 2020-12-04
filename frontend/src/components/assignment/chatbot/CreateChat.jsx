import { useState } from "react";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import AssignmentApi from '../../../api/AssignmentApi';

import CreateChatForm from './CreateChatForm';
import { defaultSteps } from "./templates";

import Button from '../atoms/Button';

export default function CreateChat() {

    // Initialise with default minimal properties
    const [newChat, setNewChat ] = useState({
        title: "New Chat",
        steps: defaultSteps,
        theme: {}
    })

    // Backup solution to see changes waiting for better
    // Just 'open - close' the chat
    const [refresh, setRefresh] = useState(false)
    const handleRefresh = () => {
        setRefresh(true); 
        setTimeout(() => {
            setRefresh(false);
        }, 200);
    }

    const saveChat = () => {
        const newAssignment = {
            type: 'Chat',
            assignment : JSON.stringify(newChat),
        }
        AssignmentApi.createAssignment(newAssignment)
            .then(() => {
                console.log('chat saved')
            })
    }

    return (
        <div className="container d-flex justify-content-around flex-wrap"> 

            <div className="col-sm-12 col-md-6">
                <h5 className="text-center">Create here</h5>

                <CreateChatForm refresh={refresh} setNewChat={setNewChat} />

                <Button 
                    buttonStyle="btn-danger"
                    content="Save Chat" 
                    onClick={() => saveChat()}
                />
            </div>

            <div className="col-sm-12 col-md-6">
                <h5 className="text-center">See changes there</h5>

                <div className="text-center">
                    <Button
                        buttonStyle="btn-sm btn-success mb-3"
                        content="Apply Changes"
                        onClick={() => handleRefresh()}
                    />
                </div>

                { !refresh &&
                    <ThemeProvider theme={newChat.theme}>
                        <ChatBot 
                            steps={newChat.steps} 
                            headerTitle={newChat.title}
                        />
                    </ThemeProvider>
                }
            </div>
        </div>
    );
}
