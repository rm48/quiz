//import { useContext, useEffect } from "react";
import { useContext } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";

import "./App.css";


function App() {
  //const [quizState, dispatch] = useContext(QuizContext);
  const [quizState] = useContext(QuizContext);

  // useEffect(() => {
  //   dispatch({ type: "REORDER_QUESTIONS" });
  // }, [])

  return (
    <div className="App">
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
