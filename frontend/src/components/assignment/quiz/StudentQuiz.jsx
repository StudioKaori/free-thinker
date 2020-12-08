import Quiz from 'react-quiz-component';

// Student side for quiz - use of react-quiz-component (Just give it our own JSON object)
export default function StudentQuiz({quiz}) {

    // If need to adapt quiz for our own needs, it is here
    
    return (
        <Quiz quiz={quiz}/>
    );
}
