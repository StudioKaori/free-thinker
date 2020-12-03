import React, {useState} from 'react';
import AssignmentApi from '../../../api/AssignmentApi';
import Quiz from 'react-quiz-component';
import CreateQuizForm from './CreateQuizForm';
import { quiz } from './templates';

import Button from '../atoms/Button';

export default function CreateQuiz() {

    const [newQuiz, setNewQuiz ] = useState(quiz);

    // Backup solution to see changes waiting for better
    // Just 'open - close' the chat
    const [refresh, setRefresh] = useState(false)
    const handleRefresh = () => {
        setRefresh(true); 
        setTimeout(() => {
            setRefresh(false);
        }, 200);
    }

    const saveQuiz = () => {
        const newAssignment = {
            type: 'Quiz',
            assignment : JSON.stringify(newQuiz),
        }
        AssignmentApi.createAssignment(newAssignment)
            .then(() => {
                console.log('Quiz saved')
            })
    }

    return (
        <div className="d-flex justify-content-around align-items-center flex-wrap">

            <div>
                <CreateQuizForm setNewQuiz={setNewQuiz} />

                <Button content="Save Quiz" 
                    onClick={() => saveQuiz()}
                />
            </div>

            <div className>
                <p>
                    Teacher see changes
                    <Button
                        buttonStyle="btn-sm btn-success"
                        content="Apply Changes"
                        onClick={() => handleRefresh()}
                    />
                </p>

                { !refresh &&
                    <Quiz quiz={newQuiz}/>
                }
            </div>
        </div>
    );
}