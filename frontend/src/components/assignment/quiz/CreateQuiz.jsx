import React, {useState} from 'react';

import CreateQuizForm from './CreateQuizForm';

import Button from '../atoms/Button';

// Entry point for Quiz creation
export default function CreateQuiz({close, setDisplayPopUp, setDisplayError, 
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
        if (!lastCheck(newQuiz.questions)) { 
            setDisplayError(true);
            setTimeout(() => {
                setDisplayError(false);
            }, 1000)
            return; 
        } // Cancel if not ok
        
        const newObj = {...assignmentObj}
        newObj.type = "Quiz";
        newObj.assignment = JSON.stringify(newQuiz);

        setAssignmentObj(newObj);

        setDisplayPopUp(true);
        setTimeout(() => {
            setDisplayPopUp(false);
        }, 2000)

        close();
    }

    return (
        <div className="container d-flex justify-content-center">

            <div className="col-sm-12 col-md-8">

                <div className="text-center">
                    <Button 
                        id="save-quiz-button"
                        buttonStyle="btn-danger"
                        content="Save Quiz" 
                        onClick={() => saveQuiz()}
                    />
                </div>

                <CreateQuizForm setNewQuiz={setNewQuiz} />
            </div>

        </div>
    );
}
