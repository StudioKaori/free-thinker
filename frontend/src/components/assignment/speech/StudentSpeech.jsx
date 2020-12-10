import React, { useState, useEffect } from 'react';
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';

import Button from '../atoms/Button';

// Speech assignment, Student side - Use of react-speech-kit library
export default function StudentSpeech({speech}) {

    const [ answer, setAnswer ] = useState('');
    const [ sendAnswer, setSendAnswer] = useState(false);
    const [end, setEnd] = useState(false);

    const { speak } = useSpeechSynthesis();
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            setAnswer(result);
        },
    });

    useEffect(() => {
        if (end) {
            console.log('end')
        }
    }, [end])

    return (
        <div>
            <div className="border-bottom mb-3">
                Teacher's question : 
                <Button 
                    id="listen-teacher-question-button"
                    buttonStyle="is-rounded btn-danger text-white"
                    content="Listen"
                    onClick={() => speak({ text: speech.question })}
                />
            </div>

            <div className="d-flex flex-wrap p-3">

                <textarea
                    id="answer-textarea-readonly"
                    readOnly
                    disabled={sendAnswer && "disabled"}
                    placeholder="Your answer will appear here."
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                />

                <div className={`${listening && "bg-warning "} m-2`}>
                    Hold the button and speak
                    <div>
                        <button 
                            id="speech-speak-button"
                            disabled={sendAnswer && "disabled"}
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
                <Button 
                    id="speech-send-answer-button"
                    buttonStyle="btn-sm btn-success text-white"
                    content="Save it"
                    onClick={() => {
                        setSendAnswer(true);
                        setEnd(true);
                    }}
                />
            </div>

            { sendAnswer && <div> Your answer : {answer} </div> }
        </div>
    );
}
