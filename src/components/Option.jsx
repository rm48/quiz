import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import './Option.css'

const Option = ({ option, selectOption, answer, }) => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div
            className={`
            ${quizState.answerSelected && option[0] === answer ? "correct" : "option"}  
            ${quizState.answerSelected && option[0] !== answer ? "wrong" : "option"}
                `}
            onClick={() => selectOption()}>
            <p>{option}</p>
        </div>
    )
}
//${quizState.answerSelected && option[0] !== answer ? "wrong" : ""}
export default Option