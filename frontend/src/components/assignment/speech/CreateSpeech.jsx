import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import AssignmentApi from '../../../api/AssignmentApi';

import '../../../css/assignment/speech.css'

import Button from '../atoms/Button';

// Entry point for creating a Speech assignment - use of react-speech-kit library
export default function CreateSpeech({close, setDisplayPopUp, setDisplayError,
    assignmentObj ,setAssignmentObj}) {

    const [question, setQuestion] = useState('');
    const { speak } = useSpeechSynthesis();

    const saveSpeech = () => {
        if (question === '') { 
            setDisplayError(true);
            setTimeout(() => {
                setDisplayError(false);
            }, 1000)
            return; 
        } // Cancel if not ok

        const newObj = {...assignmentObj}
        newObj.type = "Speech";
        newObj.assignment = JSON.stringify({question: question});

        setAssignmentObj(newObj);

        setDisplayPopUp(true);
        setTimeout(() => {
            setDisplayPopUp(false);
        }, 2000)

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
                <Button 
                    id="test-speech-button"
                    buttonStyle="btn-sm btn-info"
                    content="Test" 
                    onClick={() => speak({ text: question })}
                />
                <Button 
                    id="save-speech-button"
                    buttonStyle="btn-sm btn-danger"
                    content="Save" 
                    onClick={() => saveSpeech()}
                />
            </div>
        </div>
    );
}