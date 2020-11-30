import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import catAvatar from '../images/avatar-cat.png'
import { stepsTemplate1, premadeThemes } from './templates';

export default function StudentChat() {

    // An example to see how it looks like. Will not stay here.
    const example = {
        steps: stepsTemplate1,
        theme: premadeThemes[0],
    };


    return (
        <ThemeProvider theme={example.theme}>
            <ChatBot
                botAvatar={catAvatar}
                steps={example.steps}
            />
        </ThemeProvider>
    );
}
