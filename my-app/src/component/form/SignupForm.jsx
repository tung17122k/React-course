import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// sử dụng useFormik + Yup để khởi tạo và validate

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 characters or less";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }
//   return errors;
// };
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full p-10 max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          // id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border-gray-300 border "
          // value={formik.values.firstName}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          // id="lastName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border-gray-300 border "
          // value={formik.values.lastName}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <button
        type="submit"
        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
