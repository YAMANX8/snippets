import { useState } from "react";
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function eventHandler(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) nextSquares[i] = "X";
    else nextSquares[i] = "O";
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} hundler={() => eventHandler(0)} />
        <Square value={squares[1]} hundler={() => eventHandler(1)} />
        <Square value={squares[2]} hundler={() => eventHandler(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} hundler={() => eventHandler(3)} />
        <Square value={squares[4]} hundler={() => eventHandler(4)} />
        <Square value={squares[5]} hundler={() => eventHandler(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} hundler={() => eventHandler(6)} />
        <Square value={squares[7]} hundler={() => eventHandler(7)} />
        <Square value={squares[8]} hundler={() => eventHandler(8)} />
      </div>
    </>
  );
}
function Square({ value, hundler }) {
  return (
    <button className="square" onClick={hundler} style={{color:value=="X"?"red":"blue"}}>
      {value}
    </button>
  );
}
function calculateWinner(squares) {
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
  return null;
}
