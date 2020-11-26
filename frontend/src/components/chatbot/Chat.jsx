import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { steps, theme } from './chat-options';

import CreateChatForm from './CreateChatForm';

export default function Chat() {

    return (
        <div>
            <h3>Some space to see what chat will look like</h3>
            
            <ThemeProvider theme={theme}>
                <ChatBot steps={steps} />
            </ThemeProvider>

            <CreateChatForm />
        </div>
    );
}
