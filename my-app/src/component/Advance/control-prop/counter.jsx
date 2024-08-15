import React from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import Count from "./Count";
import { CountProvider } from "./CountContext";
import { useState } from "react";

const Counter = ({ value = null, initialValue = 0, onChange }) => {
  const [count, setCount] = useState(initialValue);
  const isControlled = value != null && !!onChange;
  const getCount = () => (isControlled ? value : count);
  const handleCountChange = (newValue) => {
    isControlled ? onChange(newValue) : setCount(newValue);
  };
  const handleIncrement = () => {
    handleCountChange(getCount() + 1);
  };
  const handleDecrement = () => {
    handleCountChange(getCount() - 1);
  };

  return (
    <CountProvider
      value={{ handleIncrement, handleDecrement, count: getCount() }}
    >
      <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-800 rounded-lg">
        <Decrement></Decrement>
        <Count></Count>
        <Increment></Increment>
      </div>
    </CountProvider>
  );
};

export default Counter;
