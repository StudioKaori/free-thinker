import { useState } from "react";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

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

    return (
        <div className="d-flex justify-content-around align-items-center flex-wrap">
            <CreateChatForm setNewChat={setNewChat} />
            
            <div className>
                <p>
                    Teacher see changes
                    <Button
                        content="Apply Changes"
                        onClick={() => handleRefresh()}
                    />
                </p>

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
