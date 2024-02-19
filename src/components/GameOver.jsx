import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

import './GameOver.css'

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div id="gameover">
            <h1>Nota: {quizState.nota.toFixed(2)}</h1>
            <p>Você acertou  {quizState.score} de  {quizState.questions.length}{" "} questões.</p>
            <img src={WellDone} alt="Fim do Quiz" />
            <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
        </div>
    )
}

export default GameOver