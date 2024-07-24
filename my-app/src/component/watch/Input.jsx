import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef();
  const divRef = useRef();
  useEffect(() => {
    console.log(divRef.current);
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="input-div" ref={divRef}>
      <input
        type="text"
        placeholder="auto focus"
        className="inline-block p-5 border border-gray-200 focus:border-blue-600"
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
