import { useReducer } from "react";
import "./index.css";
import Main from "./Main";
import Header from "./components/Header"

const SEC_PER_QS = 30;

const initialState = {
  questions: [],
  isPlaying: false,
  qsNbr: 0,
  endGame: false,
  score: 0,
  answeredOption: null,
  highScore: 0,
  time: 0,
};

function reducer(state, action) {
  const {
    questions,
    qsNbr: curQsNbr,
    score: curScore,
    highScore: curHighScore,
    time: curTime,
  } = state;

  switch (action.type) {
    case "setQuestions":
      return { ...state, questions: action.payload };
    case "startPlaying":
      return { ...state, isPlaying: true, time: questions.length * SEC_PER_QS };
    case "answer":
      return { ...state, answeredOption: action.payload };
    case "nextQs":
      return { ...state, qsNbr: curQsNbr + 1, answeredOption: null };
    case "end":
      return { ...state, endGame: true, isPlaying: false };
    case "restart":
      return {
        ...state,
        isPlaying: false,
        endGame: false,
        qsNbr: 0,
        score: 0,
        answeredOption: null,
        highScore: 0,
      };
    case "updateScore":
      return {
        ...state,
        score: curScore + action.payload,
        highScore:
          curScore >= curHighScore ? curScore + action.payload : curHighScore,
      };
    case "timer":
      return { ...state, time: curTime - 1 };
    default:
      throw new Error("no action type detected!");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isPlaying,
    qsNbr,
    endGame,
    score,
    questions,
    answeredOption,
    highScore,
    time,
  } = state;

  return (
    <div className="app">
      <Header />
      <Main
        dispatch={dispatch}
        isPlaying={isPlaying}
        qsNbr={qsNbr}
        endGame={endGame}
        score={score}
        questions={questions}
        answeredOption={answeredOption}
        highScore={highScore}
        time={time}
      />
    </div>
  );
}
