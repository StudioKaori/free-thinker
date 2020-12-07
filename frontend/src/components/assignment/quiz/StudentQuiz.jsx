import Quiz from 'react-quiz-component';

export default function StudentQuiz({quiz}) {

    console.log(quiz)

    return (
        <Quiz quiz={quiz}/>
    );
}
