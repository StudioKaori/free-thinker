import React, { useState } from 'react';
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';

export default function StudentSpeech({speech}) {

    const [ answer, setAnswer ] = useState('');
    const { speak } = useSpeechSynthesis();
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            setAnswer(result);
        },
    });

    return (
        <div>
            <div>
                <button onClick={() => speak({ text: speech.question })}>
                    Teacher's question.
                </button>
            </div>

            <div>

            <p>Hold the button and speak
                <button className="m-1" onMouseDown={listen} onMouseUp={stop}>
                    🎤
                </button>
            </p>
            {listening && <div>Go ahead I'm listening</div>}

            <textarea
                placeholder="Your answer will appear here"
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
            />
            
            </div>

            <p>If you are sure of your answer, click here -
                <button>
                        Send answer
                </button>
            </p>
        </div>
    );
}
