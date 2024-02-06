import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const ResultComponent = () => {

  const location=useLocation()
  console.log(location)
  const score=location.state.score
  const attempted=location.state.questionsCount
  return (
    <div id="resultComponent">
      <h1 id="ResultComponentHeading">Result</h1>
      <div id="result-container">
        <h3>You need more Practice ! </h3>
        <h1 id="scorestatement">Your Score is {parseInt((score/15)*100)}%</h1>
        <div id="results">
          <div className="resultStatements">
            <p>Total number of question</p>
            <p>15</p>
          </div>
          <div className="resultStatements">
            <p>Number of attempted questions</p>
            <p>{attempted}</p>
          </div>
          <div className="resultStatements">
            <p>Number of correct answers</p>
            <p>{score}</p>
          </div>
          <div className="resultStatements">
            <p>Number of wrong answers</p>
            <p>{attempted-score}</p>
          </div>
        </div>
      </div>
      <div id="RC-actionsContainer">
        <Link to="/project-react-quiz-app-three/quiz">
          <button className="RC-actions" id="playagain">
            Play Again
          </button>
        </Link>
        <Link to="/project-react-quiz-app-three">
          <button className="RC-actions" id="backtohome">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResultComponent;
