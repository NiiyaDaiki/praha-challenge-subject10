import React from 'react';
export const Status = (props) => {
  const { winner, xIsNext } = props;
  let status;
  if (winner === 'draw') {
    // setStatus(winner);
    status = winner;
  } else if (winner) {
    // setStatus('Winner: ' + winner);
    status = 'Winner: ' + winner;
  } else {
    // setStatus('Next player:' + (xIsNext ? 'X' : 'O'));
    status = '次のプレイヤー:' + (xIsNext ? 'X' : 'O');
  }

  return <>{status}</>;
};
