function Welcome({ dispatch, questions }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{questions.length} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "startPlaying" })}
      >
        Let's start
      </button>
    </div>
  );
}
export default Welcome;
