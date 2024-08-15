import React from "react";
import { useCount } from "./CountContext";

const Count = () => {
  const { count } = useCount();
  console.log("🚀 ~ Count ~ count:", count);

  return (
    <span className="flex items-center justify-center flex-1 font-bold">
      {count}
    </span>
  );
};

export default Count;
