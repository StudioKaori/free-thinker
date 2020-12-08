import { useEffect, useState} from 'react';
import { premadeThemes } from './templates';

import Button from '../atoms/Button';
import Step from './Step';

import '../../../css/assignment/chatbot.css';

// The actual form for create the chat
export default function CreateChatForm({ setNewChat }) {

    // Main style
    const [title, setTitle] = useState('');
    const [theme, setTheme] = useState(1);
    // Steps
    const [steps, setSteps] = useState([]);
    const [stepId, setStepId] = useState(1);

    // Update the final chat object when changes are made
    useEffect(() => {
        setNewChat({
            theme: premadeThemes[theme - 1],
            title: title,
            steps: steps
        })
    }, [steps, title, theme])

    // Create a set of 4 steps => corresponding at one question/answer set.
    const createStep = () => {
        const newStep = [
            {
                id: stepId,
            },
            {
                id: stepId + 1,
            },
            {
                id: stepId + 2,
            },
            {
                id: stepId + 3,
            },
        ]
        setSteps(steps.concat(newStep));
        setStepId(stepId + 4);
    }

    useEffect(() => {
        createStep()
    },[])

    // Update the list of steps when change is made inside one step.
    const update = (newStep, id) => {
        const newSteps = steps;
        newSteps[id - 1] = newStep;

        setSteps(newSteps);
    }

    return (
        <div className="card p-3 mt-4 mb-4 bg-dark">
            <div className="text-center">
                <Button 
                    id="create-chat-theme-1"
                    buttonStyle="btn-sm btn-info"
                    content="Theme 1" 
                    onClick={() => setTheme(1)} 
                />
                <Button 
                    id="create-chat-theme-2"
                    buttonStyle="btn-sm btn-info"
                    content="Theme 2" 
                    onClick={() => setTheme(2)} 
                />
                <Button 
                    id="create-chat-theme-3"
                    buttonStyle="btn-sm btn-info"
                    content="Theme 3" 
                    onClick={() => setTheme(3)} 
                />
            </div>

            <div className="d-flex justify-content-center">
                <div className={`create-chat-div div-theme-${theme}`} >

                    <div className={`create-chat-header header-theme-${theme}`}>
                        <input 
                            id="create-chat-input-title"
                            className={`header-theme-${theme}`}
                            placeholder="Enter title" value={title}
                            maxLength="40"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="d-flex flex-column">
                        {
                            steps.map((step) => 
                                <Step 
                                    key={`step-${step.id}`}
                                    step={step}
                                    update={update}
                                    numberOfSteps={steps.length}
                                />
                            )
                        }
                    </div>

                    <div>
                        <Button
                            id="create-chat-step-button"
                            buttonStyle="mt-4 ml-1 btn-sm btn-success"
                            content="+"
                            onClick={() => createStep()}
                        />
                    </div>

                </div>
            </div>

        </div>
    );
}