import { useState } from "react";

import QUESTIONS from "../questions.js";
import quizCompleteImage from "../assets/quiz-complete.png";

export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const activeQuestion = QUESTIONS[activeQuestionIndex];
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        });
    }

    if(quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImage} alt="Trophy icon"/>
                <h2>Quiz completed</h2>
            </div>
        );
    }
    
    const shuffledAnswers = [...activeQuestion.answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <p>{activeQuestion.text}</p>
                <ul id="answers">
                    {shuffledAnswers.map(answer => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}