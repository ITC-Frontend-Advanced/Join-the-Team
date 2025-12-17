import { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import Loader from "./components/Loader";
import Error from "./components/Error";

export default function Main({
  endGame,
  dispatch,
  score,
  isPlaying,
  qsNbr,
  questions,
  answeredOption,
  highScore,
  time,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const totalPoints = questions.reduce((acc, qs) => acc + qs.points, 0);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
        setIsLoading(true);
        const res = await fetch("http://localhost:3000/questions");
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (data.Response === "False") throw new Error();
        dispatch({ type: "setQuestions", payload: data });
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [dispatch]);
  return (
    <div className="main">
      {error ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : qsNbr === questions.length || endGame ? (
        <End
          dispatch={dispatch}
          score={score}
          totalPoints={totalPoints}
          highScore={highScore}
        />
      ) : !isPlaying ? (
        <Welcome dispatch={dispatch} questions={questions} />
      ) : (
        <Quiz
          dispatch={dispatch}
          qsNbr={qsNbr}
          score={score}
          questions={questions}
          isLoading={isLoading}
          error={error}
          answeredOption={answeredOption}
          totalPoints={totalPoints}
          time={time}
        />
      )}
    </div>
  );
}

function End({ dispatch, score, totalPoints, highScore }) {
  const percentage = (score / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{score}</strong> out of {totalPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore : {highScore} points )</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
