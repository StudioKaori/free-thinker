import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import AssignmentApi from '../../../api/AssignmentApi';

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
            <p>
                Insert your question here.
            </p>
            <textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
            />
            <button onClick={() => speak({ text: question })}>Test it</button>
            <div>
                <button
                    onClick={() => saveSpeech()}
                >Save it</button>
            </div>
        </div>
    );
}