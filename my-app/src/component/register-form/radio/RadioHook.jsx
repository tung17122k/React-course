import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: props.value,
  });
  // console.log({ field });
  return (
    <label className="w-5 h-5 cursor-pointer custom-radio">
      <input
        type="radio"
        {...field}
        {...props}
        className="hidden"
        checked={props.checked}
      />
      <div className=" bg-white rounded-full w-full h-full"></div>
    </label>
  );
};

export default RadioHook;
