import React, {useState} from 'react';

import CreateQuizForm from './CreateQuizForm';

// =====================================================================
// Entry point for Quiz creation
export default function CreateQuiz({close, setAssignmentIsValid, setNothingIsPicked,
    assignmentObj ,setAssignmentObj}) {

    const [newQuiz, setNewQuiz ] = useState({});

    // Helper function when saving quiz,
    // Check if no empty field for each question
    const lastCheck = (questions) => {
        for (let i = 0; i < questions.length; i += 1) {
            if (questions[i].question === ''
                || questions[i].answers[0] === ''
                || questions[i].answers[0] === ''
                || questions[i].answers[0] === '') {
                return false;
            }
        }
        return true;
    }

    const saveQuiz = () => {

        const newObj = {...assignmentObj}
        newObj.type = "Quiz";

        if (!lastCheck(newQuiz.questions)) { 
            setNothingIsPicked(false)
            setAssignmentObj(newObj);
            setAssignmentIsValid(false)
            return; 
        } // Cancel if not ok

        newObj.assignment = JSON.stringify(newQuiz);

        setNothingIsPicked(false)
        setAssignmentObj(newObj);
        setAssignmentIsValid(true);
        close();
    }

    return (
        <div className="container d-flex justify-content-center">

            <div className="col-sm-12 col-md-8">

                <div className="text-center">
                    <button
                        id="save-quiz-button"
                        className="btn m-1 btn-danger" 
                        onClick={() => saveQuiz()}
                    >Save Quiz</button>
                </div>

                <CreateQuizForm setNewQuiz={setNewQuiz} />
            </div>

        </div>
    );
}
