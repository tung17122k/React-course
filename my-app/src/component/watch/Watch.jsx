import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Watch = () => {
  const timerRef = useRef(null);

  const [count, setCount] = useState(0);
  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  useEffect(() => {
    // side-eff
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <div>
      <h3>Timer: {count}s</h3>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default Watch;
