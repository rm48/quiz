import { createContext, useReducer } from "react";
import questions1 from '../data/questions1';
import questions2 from '../data/questions2';

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions: questions1,
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
                questions: questions1,
            };
        case "CHANGE_STATE2":
            return {
                ...state,
                gameStage: STAGES[1],
                questions: questions2,
            };

        // case "REORDER_QUESTIONS":
        //     // eslint-disable-next-line no-case-declarations
        //     const reorderedQuestions = questions.sort(() => {
        //         return Math.random() - 0.5;
        //     });

        //     return {
        //         ...state,
        //         question: reorderedQuestions,
        //     };

        case "CHANGE_QUESTION":
            // eslint-disable-next-line no-case-declarations
            const nextQuestion = state.currentQuestion + 1;
            // eslint-disable-next-line no-case-declarations
            let endGame = false

            if (!state.questions[nextQuestion]) {
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
            //const questao = state.questions[state.currentQuestion];
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
                // if (questao.question[0] === "S" || questao.question[0] === "E")
                //     nota = 0.3;
                // else
                //     nota = 0.2;
                console.log(state.currentQuestion)
                if (state.currentQuestion >= 20)
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