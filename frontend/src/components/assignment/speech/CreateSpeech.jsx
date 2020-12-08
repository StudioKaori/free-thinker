import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import AssignmentApi from '../../../api/AssignmentApi';

import Button from '../atoms/Button';

// Entry point for creating a Speech assignment - use of react-speech-kit library
export default function CreateSpeech({close, setDisplayPopUp}) {

    const [question, setQuestion] = useState('');
    const { speak } = useSpeechSynthesis();

    const saveSpeech = () => {
        const newAssignment = {
            type: 'Speech',
            assignment : JSON.stringify({ question: question }),
        }
        console.log(newAssignment);
        AssignmentApi.createAssignment(newAssignment)
            .then(() => {
                setDisplayPopUp(true);
                setTimeout(() => {
                    setDisplayPopUp(false);
                }, 1000)

                close();
            })
    }

    return (
        <div>
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
                    content="Test it" 
                    onClick={() => speak({ text: question })}
                />
            </div>

            <div>
                <Button 
                    id="save-speech-button"
                    buttonStyle="btn-sm btn-danger"
                    content="Save Question" 
                    onClick={() => saveSpeech()}
                />
            </div>
        </div>
    );
}