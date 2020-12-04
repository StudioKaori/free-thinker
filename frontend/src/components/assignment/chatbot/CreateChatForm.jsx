import { useState, useEffect } from 'react';
import { premadeThemes, stepsTemplate2 } from './templates';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function CreateChatForm({ refresh, setNewChat }) {

    // Main style
    const [newTitle, setNewTitle] = useState('New Chat Bot');
    const [pickedTheme, setPickedTheme] = useState(premadeThemes[0]);
    const [steps, setSteps] = useState(stepsTemplate2);
    const [expectedAnswers, setExpectedAnswers] = useState([]); 
    // Need that because functions cannot support the JSON transformations

    // Steps
    const [stepId, setStepId] = useState(0);
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswer, setNewAnswer] = useState('');
    const [newTryAgain, setNewTryAgain] = useState('');
    const [newCongrats, setNewCongrats] = useState('');

    // Update whole Chat when user changes something
    useEffect(() => {
        setNewChat({
            title: newTitle,
            steps: steps,
            theme: pickedTheme,
            expectedAnswers: expectedAnswers,
        })
    }, [newTitle, pickedTheme, refresh]);

    const saveStep = () => {
        const newStep = [{
            id: `${stepId + 1}`,
            message: newQuestion,
            trigger: `${stepId + 2}`,
        },
        {
            id: `${stepId + 2}`,
            user: true,
            trigger: (value) => {
                if (value.value === newAnswer) {
                    return `${stepId + 4}`;
                }
                return `${stepId + 3}`;
            }
        },
        {
            id: `${stepId + 3}`,
            message: newTryAgain,
            trigger: `${stepId + 2}`,
        },
        {
            id: `${stepId + 4}`,
            message: newCongrats,
        }]

        // Override default question only for the first one
        if (steps === stepsTemplate2) {
            setSteps(newStep)
        } else { // Otherwise just add it
            setSteps(steps.concat(newStep))
        }

        setExpectedAnswers(expectedAnswers.concat(newAnswer));
        // Reset feilds
        setNewAnswer('');
        setNewCongrats('');
        setNewTryAgain('');
        setNewQuestion('');
        setStepId(stepId + 4);

        console.log(steps)
        console.log(expectedAnswers);
    };

    return (
        <div className="card p-3 mt-4 mb-4">
            <Input
                label="Choose a Title : " value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />

            <div>
                Choose a Theme:
                <Button 
                    buttonStyle="btn-sm btn-info"
                    content="Theme 1" 
                    onClick={() => setPickedTheme(premadeThemes[0])} 
                />
                <Button 
                    buttonStyle="btn-sm btn-info"
                    content="Theme 2" 
                    onClick={() => setPickedTheme(premadeThemes[1])} 
                />
                <Button 
                    buttonStyle="btn-sm btn-info"
                    content="Theme 3" 
                    onClick={() => setPickedTheme(premadeThemes[2])} 
                />
            </div>

            <hr />
            
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
            <div>
                <Button
                    buttonStyle="btn-sm btn-primary"
                    content="Save Step"
                    onClick={() => saveStep()}
                />
            </div>
        </div>
    );
}