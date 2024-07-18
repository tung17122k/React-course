import React, { useEffect, useState } from "react";

const timer = () => {
  const [message, setMessage] = useState("Tung");
  useEffect(() => {
    const timer = setInterval(() => {
      //   console.log(message);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [message]);
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </div>
  );
};

export default timer;
