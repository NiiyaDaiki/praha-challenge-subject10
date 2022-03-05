import React from 'react';

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      data-e2e={`btn-${props.indexNum}`}
    >
      {props.value}
    </button>
  );
}

export default Square;
