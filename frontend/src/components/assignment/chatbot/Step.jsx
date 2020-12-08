import { useEffect, useState } from "react";

// One single Step => one input for text.
export default function Step(props) {

    const {step, update, numberOfSteps} = props;
    const [message, setMessage] = useState('');

    let placeholder = '';
    switch(step.id % 4) {
        case 1: placeholder = "Enter message"; break;
        case 2: placeholder = "Expected Student Input"; break;
        case 3: placeholder = "If wrong input"; break;
        case 0: placeholder = "If correct input"; break;
        default: placeholder = "Enter message"; break;
    }

    // Update step when user add text or create a new step
    useEffect(() => {
        const newStep = {...step};

        newStep.message = message;

        if (newStep.id === numberOfSteps) {
            newStep.end = true;
        } else {
            newStep.end = false;
            if (newStep.id % 4 === 3) {
                newStep.trigger = newStep.id - 1;
            } else {
                newStep.trigger = newStep.id + 1;
            } 
        }

        update(newStep, newStep.id)

    }, [message, numberOfSteps])

    return (
        <div 
            className={`${step.id % 4 === 2 && 'chat-right'} 
                ${step.id % 4 === 1 && 'chat-first'}`}
        >
            <input
                id={`chat-step-input-${step.id}`}
                className={`chat-input ${step.id % 4 === 2 && 'chat-input-right'}`}
                placeholder={placeholder} value={message}
                maxLength={step.id % 4 === 2 ? 40 : 200}
                onChange={(e) => setMessage(e.target.value)}
            />
        </div>
    );
}
