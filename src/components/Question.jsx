import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

import "./Question.css";


const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option },
        });
    };

    return (
        <div id="question">
            <h5>
                Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
            </h5>
            {quizState.answerSelected && (
                <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
                    Próxima questão
                </button>
            )}
            <p>{currentQuestion.question}</p>
            <div id="options-container">
                {currentQuestion.options.map((option) => (
                    <Option
                        option={option}
                        key={option}
                        answer={currentQuestion.answer}
                        selectOption={() => onSelectOption(option)}
                    />
                ))}
                {quizState.answerSelected && (
                    <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
                        Próxima questão
                    </button>
                )}
            </div>

        </div>
    );
};

export default Question;