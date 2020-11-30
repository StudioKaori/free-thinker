import { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import CreateChat from './CreateChat';
import Button from './Button';

import catAvatar from './images/avatar-cat.png'
import { stepsTemplate1, premadeThemes } from './templates';

export default function Assignment() {

    const [chatIsOpen, setChatIsOpen] = useState(false);
    const [createChatIsOpen, setCreateChatIsOpen] = useState(false);

    // An example to see how it looks like. Will not stay here.
    const example = {
        steps: stepsTemplate1,
        theme: premadeThemes[0],
    };


    return (
        <div className="bg-light p-2">
            <h3>Example of possible assigment - Student view</h3>

            <Button content="Download my teacher file" />
            <Button content="Import my answer" />
            <Button content="Open Quiz" />

            <Button 
                content={!chatIsOpen ? "Open chat" : "Close Chat"}
                onClick={() => setChatIsOpen(!chatIsOpen)} 
            />

            <hr />

            {chatIsOpen &&
                <ThemeProvider theme={example.theme}>
                    <ChatBot
                        botAvatar={catAvatar}
                        steps={example.steps}
                    />
                </ThemeProvider>
            }

            <h3>Create assigment - Teacher's view</h3>

            <Button content="Import a new file" />
            <Button content="Create new Quiz" />

            <Button 
                content={!createChatIsOpen ? "Create new Chat" : "Stop"}
                onClick={() => setCreateChatIsOpen(!createChatIsOpen)}
            />

            {createChatIsOpen && <CreateChat /> }
        </div>
    );
}
