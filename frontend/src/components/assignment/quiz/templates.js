/* Template for a default quiz, can be used to see the original format */

export const defaultQuiz =  {
    "quizTitle": "React Quiz Component Demo",
    "quizSynopsis": "Test",
    "questions": [
      {
        "question": "5 + 5",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "55",
          "10",
          "0",
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Count your fingers",
        "point": "20"
      },
    ],

    // This part is default one, can be modified, for end of quiz options for example.

    "appLocale": {
        "landingHeaderText": "<questionLength> Questions",
        "question": "Question",
        "startQuizBtn": "Start Quiz",
        "resultFilterAll": "All",
        "resultFilterCorrect": "Correct",
        "resultFilterIncorrect": "Incorrect",
        "nextQuestionBtn": "Next",
        "resultPageHeaderText": "You have completed the quiz. You got <correctIndexLength> out of <questionLength> questions."
      } 
  } 