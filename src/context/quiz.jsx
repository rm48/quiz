import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    nota: 0,
    answerSelected: false,
};

const quizReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };

        case "REORDER_QUESTIONS":
            // eslint-disable-next-line no-case-declarations
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                question: reorderedQuestions,
            };

        case "CHANGE_QUESTION":
            // eslint-disable-next-line no-case-declarations
            const nextQuestion = state.currentQuestion + 1;
            // eslint-disable-next-line no-case-declarations
            let endGame = false

            if (!questions[nextQuestion]) {
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            };

        case "NEW_GAME":
            return initialState;

        case "CHECK_ANSWER":
            if (state.answerSelected) return state;
            // eslint-disable-next-line no-case-declarations
            const questao = state.questions[state.currentQuestion];
            // eslint-disable-next-line no-case-declarations
            const answer = action.payload.answer;
            // eslint-disable-next-line no-case-declarations
            const option = action.payload.option;
            // eslint-disable-next-line no-case-declarations
            let correctAnswer = 0;
            // eslint-disable-next-line no-case-declarations
            let nota = 0;
            if (answer === option[0]) {
                correctAnswer = 1;
                if (questao.question[0] === "S" || questao.question[0] === "E")
                    nota = 0.3;
                else
                    nota = 0.2;
            }

            return {
                ...state,
                score: state.score + correctAnswer,
                nota: state.nota + nota,
                answerSelected: option,
            }

        default:
            return state;
    }
};

export const QuizContext = createContext();

// eslint-disable-next-line react/prop-types
export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};