import React from "react";
import { useCount } from "./CountContext";

const Decrement = () => {
  const { handleDecrement } = useCount();
  return (
    <button
      className="flex items-center justify-center p-3 p-5 text-lg cursor-pointer decrement bg-slate-300"
      onClick={handleDecrement}
    >
      -
    </button>
  );
};

export default Decrement;
