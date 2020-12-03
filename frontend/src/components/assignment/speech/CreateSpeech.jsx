import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import AssignmentApi from '../../../api/AssignmentApi';

import Button from '../atoms/Button';

export default function CreateSpeech() {
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
                console.log('should be in database')
            })
    }

    return (
        <div>
            <p> Type your question here.</p>
            <textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
            />
            <div>
                <Button 
                    buttonStyle="btn-sm btn-info"
                    content="Test it" 
                    onClick={() => speak({ text: question })}
                />
            </div>

            <div>
                <Button 
                    buttonStyle="btn-sm btn-danger"
                    content="Save Question" 
                    onClick={() => saveSpeech()}
                />
            </div>
        </div>
    );
}