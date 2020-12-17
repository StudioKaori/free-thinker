import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

import '../../../../css/assignment/speech.css'

// =====================================================================
// Entry point for creating a Speech assignment - use of react-speech-kit library
export default function CreateSpeech({close, setAssignmentIsValid, setNothingIsPicked,
    assignmentObj ,setAssignmentObj}) {

    const [question, setQuestion] = useState('');
    const { speak } = useSpeechSynthesis();

    const saveSpeech = () => {
        const newObj = {...assignmentObj}
        newObj.type = "Speech";

        if (question === '') { 
            setNothingIsPicked(false)
            setAssignmentObj(newObj);
            setAssignmentIsValid(false)
            return; 
        } // Cancel if not ok

        newObj.assignment = JSON.stringify({question: question});

        setNothingIsPicked(false)
        setAssignmentObj(newObj);
        setAssignmentIsValid(true);
        close();
    }

    return (
        <div className="container d-flex flex-column align-items-center">
            <p> Type your question here.</p>
            <textarea
                id="create-speech-textarea"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
            />
            <div>
                <button 
                    id="test-speech-button"
                    className="btn m-1 btn-sm btn-info"
                    onClick={() => speak({ text: question })}
                >Test</button>
                <button
                    id="save-speech-button"
                    className="btn m-1 btn-sm btn-danger" 
                    onClick={() => saveSpeech()}
                >Save</button>
            </div>
        </div>
    );
}