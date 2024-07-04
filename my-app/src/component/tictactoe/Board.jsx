/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Cell from "./Cell";
import { calculateWinner } from "./helper";

const Board = (props) => {
  // const cells = [null, null, null, "x", "x", "x", null, null, null];
  // console.log(calculateWinner(cells));
  // console.log(props); // props la object cells: [null,null,null,null,null,null,null,null,null,]
  return (
    <div>
      <div className="game-board">
        {props.cells.map((item, index) => (
          <Cell
            key={index}
            value={item}
            onClick={() => props.onClick(index)}
            className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
            // onClick ở đây trả về props.onClick của bên Game là handleClick
          ></Cell>
        ))}
      </div>
    </div>
  );
};

export default Board;
