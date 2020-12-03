import { useState, useEffect } from 'react';
import { defaultQuiz } from './templates';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function CreateChatForm({ refresh, setNewQuiz }) {

    // Variables for quiz main part
    const [title, setTitle] = useState("Build your quiz");
    const [synopsis, setSynopsis] = useState("What is your quiz about");
    const [questions, setQuestions] = useState(defaultQuiz.questions);

    // Variables for one question
    const [question, setQuestion] = useState("1 + 1");
    const [answer, setAnswer] = useState('2');
    const [option1, setOption1] = useState('1');
    const [option2, setOption2] = useState('2');
    const [option3, setOption3] = useState('3');

    // Update whole Chat when user changes something
    useEffect(() => {
        setNewQuiz({
            quizTitle: title,
            quizSynopsis: synopsis,
            questions: questions,
        })
        console.log('youhou')
    }, [title, synopsis, refresh]);

    const saveQuestion = () => {
        const newQuestion = {
            question: question,
            questionType: "text",
            answerSelectionType: "single",
            answers: [
              option1,
              option2,
              option3,
            ],
            correctAnswer: option1 === answer ? '1' : option2 === answer ? '2' : '3',
            point: 20,
        }

        // Override default question only for the first one
        if (questions === defaultQuiz.questions) {
            setQuestions([newQuestion])
        } else { // Otherwise just add it
            setQuestions(questions.concat(newQuestion))
        }

        // Reset
        setQuestion('');
        setOption1('');
        setOption2('');
        setOption3('');
        setAnswer('');
    };

    return (
        <div className="card p-3 mt-4 mb-4">
            <Input
                label="Choose a Title : " value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input
                label="Enter Synopsis : " value={synopsis}
                onChange={(e) => setSynopsis(e.target.value)}
            />
            <hr />

            <div>
                <Input
                    label="Choose a question : " value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <Input
                    label="Expected answer : " value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <Input
                    label="Option 1 : " value={option1}
                    onChange={(e) => setOption1(e.target.value)}
                />
                <Input
                    label="Option 2 : " value={option2}
                    onChange={(e) => setOption2(e.target.value)}
                />
                <Input
                    label="Option 3 : " value={option3}
                    onChange={(e) => setOption3(e.target.value)}
                />
                <Button 
                    buttonStyle="btn-sm btn-primary"
                    content="Save question"
                    onClick={() => saveQuestion()}
                />
            </div>
        </div>
    );
}