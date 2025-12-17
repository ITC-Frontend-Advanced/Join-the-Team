import { useEffect } from "react";

export default function Quiz({
  dispatch,
  qsNbr,
  score,
  questions,
  answeredOption,
  totalPoints,
  time,
}) {
  // const [date, setDate] = useState(new Date(2025, 6, 30, 0, 7, 30));

  const min = Math.floor(time / 60);
  const sec = time % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      // setDate((prevDate) => new Date(prevDate.getTime() - 1000));
      dispatch({ type: "timer" });
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
      dispatch({ type: "end" });
    }

    // if (date.getMinutes() === 0 && date.getSeconds === 0) {
    //   clearInterval(timer);
    //   dispatch({ type: "end" });
    // }

    return () => clearInterval(timer);
  }, [time, dispatch]);

  return (
    <div className="quiz">
      <>
        <progress
          max={questions.length}
          value={qsNbr + Number(answeredOption !== null)}
        ></progress>
        <div className="progress">
          <p>
            Question {qsNbr + 1} / {questions.length}
          </p>
          <p>{score + " / " + totalPoints}</p>
        </div>
        <h4>{questions[qsNbr]?.question}</h4>
        <div className="options">
          {questions[qsNbr]?.options.map((op, index) => (
            <Option
              key={index}
              op={op}
              isCorrect={index === questions[qsNbr]?.correctOption}
              opNbr={index + 1}
              answeredOption={answeredOption}
              dispatch={dispatch}
              points={questions[qsNbr].points}
            />
          ))}
        </div>
        {answeredOption && (
          <button
            className="btn btn-ui"
            onClick={() => {
              dispatch({ type: "nextQs" });
            }}
          >
            Next
          </button>
        )}
        <div className="timer">
          {min < 10 && "0"}
          {min}:{sec < 10 && "0"}
          {sec}
        </div>
        {/* <div className="timer">{date.toTimeString().slice(3, 8)}</div> */}
      </>
    </div>
  );
}

function Option({ op, isCorrect, opNbr, answeredOption, dispatch, points }) {
  return (
    <button
      className={`btn btn-option ${
        !answeredOption ? "" : isCorrect ? "correct" : "wrong"
      } ${opNbr === answeredOption && "answer"} `}
      disabled={answeredOption !== null}
      onClick={() => {
        dispatch({ type: "answer", payload: opNbr });
        isCorrect && dispatch({ type: "updateScore", payload: points });
      }}
    >
      {op}
    </button>
  );
}
