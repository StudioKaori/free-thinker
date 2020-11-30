import React, { useState } from 'react';
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';

export default function StudentSpeech() {
    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            setValue(result);
        },
    });

    return (
        <div>
            <div>
                <button onClick={() => speak({ text: "Is a whale bigger than a mouse ?" })}>
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
                value={value}
                onChange={(event) => setValue(event.target.value)}
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
