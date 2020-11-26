import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { steps, theme } from './chat-options';

import CreateChatForm from './CreateChatForm';
import catAvatar from './images/avatar-cat.png'

export default function Chat() {

    return (
        <div>
            <h3>Some space to see what chat will look like</h3>
            
            <ThemeProvider theme={theme}>
                <ChatBot 
                    botAvatar={catAvatar}
                    // userAvatar={user.photo} Can put here user profile photo
                    steps={steps} 
                />
            </ThemeProvider>

            <CreateChatForm />
        </div>
    );
}
