import React, {useState} from 'react';
import AssignmentApi from '../../../api/AssignmentApi';
import Quiz from 'react-quiz-component';
import CreateQuizForm from './CreateQuizForm';
import { defaultQuiz } from './templates';

import Button from '../atoms/Button';

export default function CreateQuiz() {

    const [newQuiz, setNewQuiz ] = useState(defaultQuiz);

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
        <div className="container d-flex justify-content-around flex-wrap">

            <div className="col-sm-12 col-md-6">
                <h5 className="text-center">Create here</h5>
                <CreateQuizForm refresh={refresh} setNewQuiz={setNewQuiz} />

                <Button 
                    buttonStyle="btn-danger"
                    content="Save Quiz" 
                    onClick={() => saveQuiz()}
                />
            </div>

            <div className="col-sm-12 col-md-6">
                <h5 className="text-center">See changes there</h5>

                <div className="text-center">
                    <Button
                        buttonStyle="btn-sm btn-success"
                        content="Apply Changes"
                        onClick={() => handleRefresh()}
                    />
                </div>

                { !refresh &&
                    <div className="mt-4">
                        <Quiz quiz={newQuiz}/>
                    </div>
                }
            </div>
        </div>
    );
}