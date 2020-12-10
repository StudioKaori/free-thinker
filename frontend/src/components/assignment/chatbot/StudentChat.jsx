import { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// Chat in Student side: use of 'react-simple-chatbot' library
export default function StudentChat({chat, setEnd}) {

    const [steps, setSteps] = useState(chat.steps);
    const [status, setStatus] = useState(0);

    // Lost functions in database transfert, need to put it back here.
    useEffect(() => {
        const newSteps = [...chat.steps];

        for (let i = 0; i < newSteps.length; i += 1) {
            if ( i % 4 === 1 ) { // Means every 2nd steps (user steps)
                const answer = newSteps[i].message;

                function userFunction(value) {
                    if (value.value === answer) {
                        return `${i + 3}`;
                    }
                    return `${i + 2}`;
                }
                const newUserStep = {
                    id: i + 1,
                    user: true,
                    trigger: userFunction,
                }
                newSteps[i] = newUserStep;
            }
        }

        setSteps(newSteps);

        setStatus(1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {status === 1 &&
                <ThemeProvider theme={chat.theme}>
                    <ChatBot
                        headerTitle={chat.title}
                        steps={steps}
                        handleEnd={() => {
                            setTimeout(() => {
                                setEnd(true);
                            }, 1000)
                        }}
                    />
                </ThemeProvider>
            }
        </>
    );
}
