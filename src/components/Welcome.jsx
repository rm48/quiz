import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Quiz from "../img/materias.png";

import "./Welcome.css";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="welcome">
            <h2>Quiz</h2>

            <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
                Simulado 1
            </button>
            <button onClick={() => dispatch({ type: "CHANGE_STATE2" })}>
                Simulado 2
            </button>
            <button onClick={() => dispatch({ type: "CHANGE_STATE3" })}>
                Simulado 3
            </button>
            <img src={Quiz} alt="materias" />
        </div>
    );
};

export default Welcome;