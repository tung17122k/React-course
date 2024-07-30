import React from "react";
import { useController } from "react-hook-form";

const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 border border-gray-400 rounded-lg bg-white outline-none focus:border-blue-500 transition-all"
      {...field}
      {...props}
    ></input>
  );
};

export default InputHook;
