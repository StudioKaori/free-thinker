import Quiz from 'react-quiz-component';

// Student side for quiz - use of react-quiz-component (Just give it our own JSON object)
export default function StudentQuiz({quiz, setEnd}) {
    
    return (
        <Quiz 
            quiz={quiz}
            onComplete={() => setEnd(true)}
        />
    );
}
