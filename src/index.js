import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Game } from './components/Game';

// ========================================
const App = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(''),
    },
  ]);

  const [stepNumber, setStepNumber] = useState(0);
  return (
    <Game
      history={history}
      setHistory={setHistory}
      stepNumber={stepNumber}
      setStepNumber={setStepNumber}
    />
  );
};

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
