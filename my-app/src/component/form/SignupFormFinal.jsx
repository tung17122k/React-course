import React from "react";
import { Form, Formik, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

// V2 => update final => component input => useField

const SignupFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        term: Yup.boolean().oneOf(
          [true],
          "please check the terms and conditions"
        ),
      })}
      onSubmit={(values, actions) => {
        // console.log(values);
        setTimeout(() => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            terms: false,
          });
          actions.setSubmitting(false);
        }, 5000);
      }}
      autoComplete="off"
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form className="w-full p-10 max-w-[500px] mx-auto">
            <MyInput
              label="First name"
              name="firstName"
              placeholder="Enter your first name"
              id="firstName"
            ></MyInput>
            <MyInput
              label="Last name"
              name="lastName"
              placeholder="Enter your last name"
              id="lastName"
            ></MyInput>
            <MyInput
              label="Email"
              name="email"
              placeholder="Enter your email"
              id="email"
              type="email"
            ></MyInput>
            <MyTextarea
              label="Intro"
              name="intro"
              placeholder="Enter your intro"
              id="intro"
            ></MyTextarea>
            <MySelect label="Select your job" name="job">
              <option value="FE">FE Developer</option>
              <option value="BE">BE Developer</option>
              <option value="PM">Project Manager</option>
            </MySelect>
            <MyCheckbox name="term">
              <p>I accept the terms and conditions </p>
            </MyCheckbox>
            <button
              type="submit"
              className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("🚀 ~ MyInput ~ field:", field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border-gray-300 border"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("🚀 ~ MyInput ~ field:", field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className="p-4 rounded-md border-gray-300 border h-[150px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("🚀 ~ MyInput ~ field:", field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="p-4 rounded-md border-gray-300 border "
        {...field}
        {...props}
      ></select>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("🚀 ~ MyInput ~ field:", field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex item-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default SignupFormFinal;
