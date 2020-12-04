import React, { useState } from 'react';
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';

import Button from '../atoms/Button';

export default function StudentSpeech({speech}) {

    const [ answer, setAnswer ] = useState('');
    const [ sendAnswer, setSendAnswer] = useState(false);
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
                <Button 
                    buttonStyle="is-rounded btn-danger text-white"
                    content="Listen"
                    onClick={() => speak({ text: speech.question })}
                />
            </div>

            <div className="d-flex flex-wrap p-3">

                <textarea
                    disabled={sendAnswer && "disabled"}
                    placeholder="Your answer will appear here"
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                />

                <div className={`${listening && "bg-warning "} m-2`}>
                    Hold the button and speak
                    <div>
                        <button 
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
                    buttonStyle="btn-sm btn-success text-white"
                    content="Save it"
                    onClick={() => setSendAnswer(true)}
                />
            </div>

            { sendAnswer && <div> Your answer : {answer} </div> }
        </div>
    );
}
