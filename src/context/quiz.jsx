import { createContext, useReducer } from "react";
import questions1 from '../data/questions1';
import questions2 from '../data/questions2';
import questions3 from '../data/questions3';

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
        // case "CHANGE_STATE":
        //     return {
        //         ...state,
        //         gameStage: STAGES[1],
        //         questions: questions1,
        //     };
        // case "CHANGE_STATE2":
        //     return {
        //         ...state,
        //         gameStage: STAGES[1],
        //         questions: questions2,
        //     };

        case "CHANGE_STATE":
            const reorderedQuestions1 = questions1.sort(() => {
                return Math.random() - 0.5;
            });
            return {
                ...state,
                gameStage: STAGES[1],
                questions: reorderedQuestions1,
            };

        case "CHANGE_STATE2":
            const reorderedQuestions2 = questions2.sort(() => {
                return Math.random() - 0.5;
            });
            return {
                ...state,
                gameStage: STAGES[1],
                questions: reorderedQuestions2,
            };
        case "CHANGE_STATE3":
            const reorderedQuestions3 = questions3.sort(() => {
                return Math.random() - 0.5;
            });
            return {
                ...state,
                gameStage: STAGES[1],
                questions: reorderedQuestions3,
            };

        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions1.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: reorderedQuestions,
            };

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
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
            const questao = state.questions[state.currentQuestion];
            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;
            //let nota = 0;
            let pontos = 0;
            if (answer === option[0]) {
                correctAnswer = 1;
                // if (questao.question[0] === "S" || questao.question[0] === "E")
                //     nota = 0.3;
                // else
                //     nota = 0.2;
                // console.log(state.currentQuestion)
                // if (state.currentQuestion >= 20)
                //     nota = 0.3;
                // else
                //     nota = 0.2;
                pontos = 0.25;
            }

            return {
                ...state,
                score: state.score + correctAnswer,
                //nota: state.nota + nota,
                nota: state.nota + pontos,
                answerSelected: option,
            }

        default:
            return state;
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};