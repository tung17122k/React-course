import React, { useEffect, useRef, useState } from "react";

const TextArea = () => {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  //   const [parentHeight, setParentHeight] = useState("auto");
  const handleChange = (e) => {
    setTextAreaHeight("auto");
    setText(e.target.value);
    // setParentHeight(`${textAreaRef?.current?.scrollHeight}px`);
  };
  useEffect(() => {
    setTextAreaHeight(`${textAreaRef?.current?.scrollHeight}px`);
    // setParentHeight(`${textAreaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div
      className="p-5"
      style={
        {
          // minHeight: parentHeight,
        }
      }
    >
      <textarea
        className="w-full max-w-[400px] p-5 rounded-lg border border-gray-500 resize-none overflow-hidden transition-all"
        placeholder="enter content"
        value={text}
        ref={textAreaRef}
        style={{
          height: textAreaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
