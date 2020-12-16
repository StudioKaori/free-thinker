import { useEffect, useState } from "react";

// =====================================================================
// One bloc => Teacher's question + 3 choices for student answers
export default function Question(props) {

    const {question, update} = props;

    const [teacherQuestion, setTeacherQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');

    const [pickedOption, setPickedOption] = useState(1); // Correct answer

    // Update in every change
    useEffect(() => {
        const newQuestion = {...question};

        newQuestion.question = teacherQuestion;
        newQuestion.answers = [
            option1,
            option2,
            option3
        ];
        newQuestion.correctAnswer = pickedOption.toString();

        update(newQuestion, newQuestion.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teacherQuestion, option1, option2, option3, pickedOption])


    return (
        <div>
            <input
                id={`quiz-teacher-question-${question.id}`}
                className="quiz-teacher-question"
                placeholder={`Question ${question.id}`} value={teacherQuestion}
                maxLength={200}
                onChange={(e) => setTeacherQuestion(e.target.value)}
            />
            <input
                id={`quiz-student-answer-choice-1-${question.id}`}
                className="quiz-student-answer"
                placeholder='Choice 1' value={option1}
                maxLength={40}
                onChange={(e) => setOption1(e.target.value)}
            />
            <span
                id={`quiz-checkbox-choice-1-${question.id}`}
                className={`quiz-student-box ${pickedOption === 1 && 'active'}`}
                onClick={() => setPickedOption(1)}
            ></span>
            <input
                id={`quiz-student-answer-choice-2-${question.id}`}
                className="quiz-student-answer"
                placeholder='Choice 2' value={option2}
                maxLength={40}
                onChange={(e) => setOption2(e.target.value)}
            />
            <span
                id={`quiz-checkbox-choice-2-${question.id}`}
                className={`quiz-student-box ${pickedOption === 2 && 'active'}`}
                onClick={() => setPickedOption(2)}
            ></span>
            <input
                id={`quiz-student-answer-choice-3-${question.id}`}
                className="quiz-student-answer"
                placeholder='Choice 3' value={option3}
                maxLength={40}
                onChange={(e) => setOption3(e.target.value)}
            />
            <span
                id={`quiz-checkbox-choice-3-${question.id}`}
                className={`quiz-student-box ${pickedOption === 3 && 'active'}`}
                onClick={() => setPickedOption(3)}
            ></span>
        </div>
    );
}
