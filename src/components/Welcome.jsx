import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Quiz from "../img/materias.png";

import "./Welcome.css";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="welcome">
            <h2>Agente Controlador de Vetores</h2>
            <p>Simulado 1</p>
            <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
                Iniciar
            </button>
            <img src={Quiz} alt="materias" />
        </div>
    );
};

export default Welcome;