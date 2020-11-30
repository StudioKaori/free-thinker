import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function CreateSpeech() {
    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();

    return (
        <div>
            <p>
                Insert your question here.
            </p>
            <textarea
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button onClick={() => speak({ text: value })}>Test it</button>
            <div>
                <button>Save it</button>
            </div>
        </div>
    );
}