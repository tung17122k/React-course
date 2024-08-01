import React from "react";
import { useField, Form, Formik } from "formik";

const InputFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field);
  return (
    <div className="flex flex-col gap-3 mb-5 ">
      <label htmlFor={props.id} className="cursor-pointer">
        {label}
      </label>
      <input
        // type="text"
        className="p-4 border border-gray-400 rounded-lg bg-white outline-none focus:border-blue-500 transition-all"
        {...field}
        {...props}
      ></input>

      {meta.touched && meta.error ? (
        <p className="text-red-500 text-sm">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default InputFormik;
