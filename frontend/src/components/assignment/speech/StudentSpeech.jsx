import React, { useState} from 'react';
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';

// =====================================================================
// Speech assignment, Student side - Use of react-speech-kit library
export default function StudentSpeech({speech, setEnd}) {

    const [ answer, setAnswer ] = useState('');

    const { speak } = useSpeechSynthesis();
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            setAnswer(result);
        },
    });

    return (
        <div>
            <div className="border-bottom mb-3">
                Teacher's question : 
                <button 
                    id="listen-teacher-question-button"
                    className="btn m-1 is-rounded btn-danger text-white"
                    onClick={() => speak({ text: speech.question })}
                >Listen</button>
            </div>

            <div className="d-flex flex-wrap p-3">

                <textarea
                    id="answer-textarea-readonly"
                    readOnly
                    placeholder="Your answer will appear here."
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                />

                <div className={`${listening && "bg-warning "} m-2`}>
                    Hold the button and speak
                    <div>
                        <button 
                            id="speech-speak-button"
                            className="btn btn-sm btn-success m-1" 
                            onMouseDown={listen} onMouseUp={stop}
                        >
                            🎤
                        </button>
                    </div>
                </div>
            
            </div>

            <div>
                When you are sure of your answer, 
                <button
                    id="speech-send-answer-button"
                    className="btn m-1 btn-sm btn-success text-white"
                    onClick={() => setEnd(true)}
                >Save it</button>
            </div>
        </div>
    );
}
