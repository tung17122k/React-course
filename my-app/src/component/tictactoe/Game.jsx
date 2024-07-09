/* eslint-disable no-case-declarations */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "./helper";

const initialState = {
  board: Array(9).fill(null),
  x: true,
};

// dispatch ({type: 'CLICK'}) dispatch la 1 function

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK":
      const { board, x } = state;
      const nextState = JSON.parse(JSON.stringify(state));

      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      nextState.board[index] = x ? "X" : "O";
      nextState.x = !x;
      return nextState;
    case "RESET":
      return initialState;

    default:
      break;
  }
};

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [x, setX] = useState(true);
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   x: true,
  // });
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    // dispatch(action)
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCopy[index] = state.x ? "X" : "O";
    // setBoard(boardCopy);
    // setX((x) => !x);
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   x: !state.x,
    // });
  };

  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setX(true);
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
