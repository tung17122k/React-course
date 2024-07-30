import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// use Formik , Field, ErrorMessage, Form từ thư viện formik

const SignupFormV2 = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
      autoComplete="off"
    >
      <Form className="w-full p-10 max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">First name</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            className="p-4 rounded-md border-gray-300 border "
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Last name</label>
          <Field
            name="lastName"
            type="text"
            // id="lastName"
            placeholder="Enter your first name"
            className="p-4 rounded-md border-gray-300 border "
            // value={formik.values.lastName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default SignupFormV2;
