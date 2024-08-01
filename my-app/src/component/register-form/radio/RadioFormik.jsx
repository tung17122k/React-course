import React from "react";
import { useField, Form, Formik } from "formik";

const RadioFormik = ({ label, gender, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-x-3">
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
        <span>{gender}</span>
      </div>
    </div>
  );
};

export default RadioFormik;
