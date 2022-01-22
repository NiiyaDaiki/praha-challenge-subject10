import React, { useState } from 'react';
import Board from './Board';
import { Status } from './Status';

export const Game = (props) => {
  const { history, setHistory, stepNumber, setStepNumber } = props;
  const [xIsNext, setXIsNext] = useState(true);
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares, stepNumber);

  // this.state = {
  //   history: [
  //     {
  //       squares: Array(9).fill(null),
  //     },
  //   ],
  //   stepNumber: 0,
  //   xIsNext: true,
  // };
  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares, stepNumber) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(
      newHistory.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);

    // this.setState({
    //   history: history.concat([

    //   ]),
    //   stepNumber: history.length,
    //   xIsNext: !this.state.xIsNext,
    // });
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);

    // this.setState({
    //   stepNumber: step,
    //   xIsNext: step % 2 === 0,
    // });
  };

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>
          <Status winner={winner} xIsNext={xIsNext} />
        </div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

function calculateWinner(squares, stepNumber) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (stepNumber > 8) {
    return 'draw';
  }

  return null;
}
