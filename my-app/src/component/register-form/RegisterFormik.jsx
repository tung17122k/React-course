import React from "react";
import InputFormik from "./input/InputFormik";
import { Formik, useFormik, Form, useField } from "formik";
import * as Yup from "yup";
import RadioFormik from "./radio/RadioFormik";
import CheckboxFormik from "./checkbox/CheckboxFormik";
import DropdownFormik from "./dropdown/DropdownFormik";

//https://formik.org/docs/api/useField

const RegisterFormik = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       usename: "",
  //       password: "",
  //       email: "",

  //     },
  //     onSubmit: (values) => {
  //       console.log(values);
  //     },
  //   });
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        email: "",
        gender: "male",
        job: "",
        term: false,
      }}
      validationSchema={Yup.object({
        // username: Yup.string().required(),
        // password: Yup.string()
        //   .min(8, "Your password must be at least 8 characters or greater")
        //   .matches(
        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        //     {
        //       message:
        //         "Your password must have 8 characters, one uppercase, one lowercase and one number",
        //     }
        //   )
        //   .required(),
        gender: Yup.string()
          .required()
          .oneOf(["male", "female"], "You can only chose male or female"),
        // email: Yup.string().email("Please enter valid email").required(),
        job: Yup.string().required("Please select your Job"),
        term: Yup.boolean().oneOf(
          [true],
          "Please accept the terms and conditions"
        ),
      }).required()}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          console.log(values);
          setSubmitting(false);
          resetForm();
        }, 5000);
      }}
    >
      {(formik) => {
        {
          /* console.log(formik); */
        }
        const watchGender = formik.values.gender;
        {
          /* console.log(watchGender); */
        }
        return (
          <form
            className="max-w-[300px] mx-auto my-10"
            onSubmit={formik.handleSubmit}
          >
            <InputFormik
              name="username"
              id="username"
              type="text"
              label="Username"
              placeholder="Enter your username "
            ></InputFormik>
            <InputFormik
              name="password"
              id="password"
              type="password"
              label="Password"
              placeholder="Enter your password "
            ></InputFormik>
            <InputFormik
              name="email"
              id="email"
              type="email"
              label="Email"
              placeholder="Enter your email "
            ></InputFormik>

            <div className="flex flex-col gap-3 mt-5">
              <label className="cursor-pointer">Gender</label>
              <div className="flex items-center gap-5">
                <RadioFormik
                  name="gender"
                  value="male"
                  checked={watchGender === "male"}
                  gender="Male"
                ></RadioFormik>
                <RadioFormik
                  name="gender"
                  value="female"
                  checked={watchGender === "female"}
                  gender="Female"
                ></RadioFormik>
              </div>
            </div>

            <DropdownFormik
              name="job"
              setValue={formik.setFieldValue}
            ></DropdownFormik>

            <CheckboxFormik
              name="term"
              text="I accept the terms and conditions"
            ></CheckboxFormik>

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className={`w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold `}
            >
              {formik.isSubmitting ? (
                <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent mx-auto animate-spin"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;
