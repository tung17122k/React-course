/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "./helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = x ? "X" : "O";
    setBoard(boardCopy);
    setX((x) => !x);
  };
  const [x, setX] = useState(true);
  const winner = calculateWinner(board);
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setX(true);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
