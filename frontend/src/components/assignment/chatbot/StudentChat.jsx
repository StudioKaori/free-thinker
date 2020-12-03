import { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


export default function StudentChat({chat}) {

    const [steps, setSteps] = useState(chat.steps);
    // Backup solution to avoid chat taking steps before changes
    const [refresh, setRefresh] = useState(false)

    // Lost functions in database transfert, need to put it back here.
    useEffect(() => {
        const newSteps = [...chat.steps];

        for (let i = 0; i < newSteps.length; i += 4) {
            function expectedFunction(value) {
                console.log(value, chat.expectedAnswers[i])
                if (value.value === chat.expectedAnswers[i / 4]) {
                    console.log(`${i + 4}`)
                    return `${i + 4}`;
                }
                return `${i + 3}`;
            }
            newSteps[i + 1].trigger = expectedFunction;
            if (i < newSteps.length - 6) {
                newSteps[i + 3].trigger = `${i + 5}`
            } else {
                newSteps[i + 3].end = true;
            }
        }
        console.log(newSteps);
        setSteps(newSteps);

        setRefresh(true); 
        setTimeout(() => {
            setRefresh(false);
        }, 200);
    }, [])

    return (
        <>
        {!refresh &&
        <ThemeProvider theme={chat.theme}>
            <ChatBot
                headerTitle={chat.title}
                steps={steps}
            />
        </ThemeProvider>
        }
        </>
    );
}
