import { useEffect, useState} from 'react';

import { premadeThemes } from './templates';
import Step from './Step';

import '../../../css/assignment/chatbot.css';

// =====================================================================
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [steps, title, theme])

    // Create a set of 4 steps => corresponding at one question/answer set.
    const createStep = () => {
        const newStep = [
            { id: stepId },
            { id: stepId + 1},
            { id: stepId + 2},
            { id: stepId + 3},
        ]
        setSteps(steps.concat(newStep));
        setStepId(stepId + 4);
    }

    useEffect(() => {
        createStep()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <button
                    id="create-chat-theme-1"
                    className="btn m-1 btn-sm btn-info"
                    onClick={() => setTheme(1)} 
                >Theme 1</button>
                <button 
                    id="create-chat-theme-2"
                    className="btn m-1 btn-sm btn-info"
                    onClick={() => setTheme(2)} 
                >Theme 2</button>
                <button 
                    id="create-chat-theme-3"
                    className="btn m-1 btn-sm btn-info"
                    onClick={() => setTheme(3)} 
                >Theme 3</button>
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
                        <button
                            id="create-chat-step-button"
                            className="btn mt-4 ml-1 btn-sm btn-success"
                            onClick={() => createStep()}
                        >+</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
