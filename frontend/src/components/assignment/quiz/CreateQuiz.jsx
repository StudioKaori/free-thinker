import React, {useState} from 'react';
import AssignmentApi from '../../../api/AssignmentApi';

import CreateQuizForm from './CreateQuizForm';

import Button from '../atoms/Button';

export default function CreateQuiz({close, setDisplayPopUp}) {

    const [newQuiz, setNewQuiz ] = useState({});

    // Check if an answer has been selected for each question
    const lastCheck = (questions) => {
        for (let i = 0; i < questions.length; i += 1) {
            if (questions[i].correctAnswer === '') {
                return false;
            }
        }
        return true;
    }

    const saveQuiz = () => {
        if (!lastCheck(newQuiz.questions)) { return; }
        
        const newAssignment = {
            type: 'Quiz',
            assignment : JSON.stringify(newQuiz),
        }
        AssignmentApi.createAssignment(newAssignment)
            .then(() => {
                setDisplayPopUp(true);
                setTimeout(() => {
                    setDisplayPopUp(false);
                }, 1000)

                close();
            })
    }

    return (
        <div className="container d-flex justify-content-center">

            <div className="col-sm-12 col-md-8">

                <div className="text-center">
                    <Button 
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
