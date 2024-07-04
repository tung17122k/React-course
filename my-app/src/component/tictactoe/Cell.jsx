/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Cell = ({ value, onClick, className }) => {
  // console.log(props);
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {/* onclick ở đây là props của Cell */}
      {value}
    </div>
  );
};

export default Cell;
