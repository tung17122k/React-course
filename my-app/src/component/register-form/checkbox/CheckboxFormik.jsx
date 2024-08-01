import React from "react";
import { useField, Form, Formik } from "formik";

const CheckboxFormik = ({ text, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <label className="w-5 h-5 cursor-pointer custom-checkbox">
      <input
        type="checkbox"
        {...field}
        {...props}
        className="hidden"
        id={props.name}
        value={props.value}
        checked={field.value}
        // checked={field.value}
      />
      <div className="flex items-center gap-x-3 mt-5 ">
        <div className=" bg-white rounded-md w-full h-full custom-checkbox-square flex items-center justify-center">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7453 4.89733L5.93178 12.7109L2.25482 9.03391L3.17132 8.11741L5.93178 10.8714L12.8288 3.98083L13.7453 4.89733Z"
              fill="white"
            />
          </svg>
        </div>
        <label htmlFor={props.name} className="cursor-pointer">
          {text}
        </label>
      </div>
      {meta.touched && meta.error ? (
        <p className="text-red-500 text-sm">{meta.error}</p>
      ) : null}
    </label>
  );
};

export default CheckboxFormik;
