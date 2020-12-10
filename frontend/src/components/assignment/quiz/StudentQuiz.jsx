import { useEffect, useState } from 'react';
import Quiz from 'react-quiz-component';

// Student side for quiz - use of react-quiz-component (Just give it our own JSON object)
export default function StudentQuiz({quiz}) {

    const [end, setEnd] = useState(false);

    useEffect(() => {
        if (end) {
            console.log('end')
        }
    }, [end])

    
    return (
        <Quiz 
            quiz={quiz}
            onComplete={() => setEnd(true)}
        />
    );
}
