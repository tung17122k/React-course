import React from "react";
import useCounter from "./useCounter";

const Decrement = ({ onClick, ...props }) => {
  return (
    <button
      className="flex items-center justify-center p-3 text-lg cursor-pointer decrement bg-slate-300"
      onClick={onClick}
      {...props}
    >
      -
    </button>
  );
};

export default Decrement;
