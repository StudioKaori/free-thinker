import { useState, useEffect } from 'react';

import Input from '../atoms/Input';

export default function CreateChatForm({ setNewQuiz }) {

    const [title, setTitle] = useState("Build your quiz");
    const [synopsis, setSynopsis] = useState("What is your quiz about");
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState("1 + 1");
    const [answer, setAnswer] = useState('2');
    const [tryAgain, setTryAgain] = useState('Good');
    const [congrats, setCongrats] = useState('Bad');
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
    }, [title, synopsis, questions]);

    // Update whole Chat when user changes something
    useEffect(() => {
        setQuestions([{
            question: question,
            questionType: "text",
            answerSelectionType: "single",
            answers: [
              option1,
              option2,
              option3,
            ],
            correctAnswer: option1 === answer ? '1' : option2 === answer ? '2' : '3',
            messageForCorrectAnswer: congrats,
            messageForIncorrectAnswer: tryAgain,
            explanation: "Count your fingers",
            point: "20",
          }])
    }, [question, answer, option1, option2, option3, tryAgain, congrats]);

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
                <Input
                    label="Congrats Message : " value={congrats}
                    onChange={(e) => setCongrats(e.target.value)}
                />
                <Input
                    label="Try again message : " value={tryAgain}
                    onChange={(e) => setTryAgain(e.target.value)}
                />
            </div>
        </div>
    );
}