import React from "react";
import { useCount } from "./CountContext";

const Increment = () => {
  const { handleIncrement } = useCount();
  return (
    <button
      className="flex items-center justify-center p-3 p-5 text-lg cursor-pointer increment bg-slate-300"
      onClick={handleIncrement}
    >
      +
    </button>
  );
};

export default Increment;
