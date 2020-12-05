import { useEffect, useState } from "react";

export default function Step(props) {

    const {step, update, numberOfSteps} = props;
    let placeholder = '';

    switch(step.id % 4) {
        case 1: placeholder = "Enter message"; break;
        case 2: placeholder = "Expected Student Input"; break;
        case 3: placeholder = "If wrong input"; break;
        case 0: placeholder = "If correct input"; break;
        default: placeholder = "Enter message"; break;
    }

    const [message, setMessage] = useState('');

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
                className={`chat-input ${step.id % 4 === 2 && 'chat-input-right'}`}
                placeholder={placeholder} value={message}
                maxLength={step.id % 4 === 2 ? 40 : 200}
                onChange={(e) => setMessage(e.target.value)}
            />
        </div>
    );
}
