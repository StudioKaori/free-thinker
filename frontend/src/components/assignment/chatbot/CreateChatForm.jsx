import { useState, useEffect } from 'react';
import { premadeThemes, stepsTemplate2 } from './templates';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function CreateChatForm({ setNewChat }) {

    // Main style
    const [newTitle, setNewTitle] = useState('New Chat Bot');
    const [pickedTheme, setPickedTheme] = useState(premadeThemes[0]);
    const [pickedSteps, setPickedSteps] = useState(stepsTemplate2);

    // Steps
    const [createStepIsOpen, setCreateStepIsOpen] = useState(false);
    const [newQuestion, setNewQuestion] = useState(stepsTemplate2[0].message);
    const [newAnswer, setNewAnswer] = useState('30');
    const [newTryAgain, setNewTryAgain] = useState(stepsTemplate2[2].message);
    const [newCongrats, setNewCongrats] = useState(stepsTemplate2[3].message);

    // Update whole Chat when user changes something
    useEffect(() => {
        setNewChat({
            title: newTitle,
            steps: pickedSteps,
            theme: pickedTheme,
        })
    }, [newTitle, pickedTheme, pickedSteps]);

    // Update steps when User changes something
    useEffect(() => {
        const newPickedSteps = [...pickedSteps];

        newPickedSteps[0].message = newQuestion;
        newPickedSteps[1].trigger = (value) => {
            if (value.value === newAnswer) {
                return '4';
            }
            return '3';
        }
        newPickedSteps[2].message = newTryAgain;
        newPickedSteps[3].message = newCongrats;

        setPickedSteps(newPickedSteps)

    }, [newQuestion, newAnswer, newCongrats, newTryAgain]);


    return (
        <div className="card p-3 mt-4 mb-4">
            <h5>Teacher Fill that part</h5>
            <Input
                label="Choose a Title : " value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />

            <div>
                Choose a Theme:
                <Button content="Theme 1" onClick={() => setPickedTheme(premadeThemes[0])} />
                <Button content="Theme 2" onClick={() => setPickedTheme(premadeThemes[1])} />
                <Button content="Theme 3" onClick={() => setPickedTheme(premadeThemes[2])} />
            </div>

            <hr />

            <div>
                <Button
                    content={!createStepIsOpen ? 'Create Step' : 'Stop'}
                    onClick={() => setCreateStepIsOpen(!createStepIsOpen)}
                />
            </div>
            
            { createStepIsOpen &&
                <div>
                    <Input
                        label="Choose a question : " value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                    />
                    <Input
                        label="Expected answer : " value={newAnswer}
                        onChange={(e) => setNewAnswer(e.target.value)}
                    />
                    <Input
                        label="Congrats Message : " value={newCongrats}
                        onChange={(e) => setNewCongrats(e.target.value)}
                    />
                    <Input
                        label="Try again message : " value={newTryAgain}
                        onChange={(e) => setNewTryAgain(e.target.value)}
                    />
                </div>
            }
        </div>
    );
}