import { useState, useEffect } from 'react';

import Question from './Question';

import '../../../../css/assignment/quiz.css';

// =====================================================================
// Actual form for creating the quiz
export default function CreateQuizForm({ setNewQuiz }) {

    // Main
    const [title, setTitle] = useState('');
    const [synopsis, setSynopsis] = useState('');
    
    // Steps
    const [questions, setQuestions] = useState([]);
    const [stepId, setStepId] = useState(1);


    // Update the whole Quiz when changes are made
    useEffect(() => {
        setNewQuiz({
            quizTitle: title,
            quizSynopsis: synopsis,
            questions: questions,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, synopsis, questions]);


    // Create a new 'question' => corresponding at one question + several choice.
    const createQuestion = () => {
        const newQuestion =
        {
            id: stepId,
            question: '',
            questionType: "text",
            answerSelectionType: "single",
            answers: [],
            correctAnswer: '',
            point: 10, // 'point' is related to quiz librairy functionalities, not used now, but necessary
        }
        setQuestions(questions.concat(newQuestion));
        setStepId(stepId + 1);
    }

    useEffect(() => {
        createQuestion()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Update the list of steps when change is made inside one step.
    const update = (newQuestion, id) => {
        const newQuestions = questions;
        newQuestions[id - 1] = newQuestion;

        setQuestions(newQuestions);
    }

    return (
        <div className="card p-3 mt-4 mb-4 bg-dark">
            <div className="d-flex justify-content-center">
                <div className='create-quiz-div' >
                    <div className='create-quiz-header'>
                        <input
                            id="create-quiz-title-input"
                            placeholder="Quiz Title" value={title}
                            maxLength="40"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            id="create-quiz-synopsis-input"
                            placeholder="About what ?" value={synopsis}
                            maxLength="200"
                            onChange={(e) => setSynopsis(e.target.value)}
                        />
                    </div>

                    <div className="d-flex flex-column">
                        {
                            questions.map((question) =>
                                <Question
                                    key={`question-${question.id}`}
                                    question={question}
                                    update={update}
                                />
                            )
                        }
                    </div>

                    <div>
                        <button
                            id="create-quiz-new-question-button"
                            className="btn mt-4 ml-1 btn-sm btn-success"
                            onClick={() => createQuestion()}
                        >+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
