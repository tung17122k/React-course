import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "./input/InputHook";
import RadioHook from "./radio/RadioHook";
import CheckboxHook from "./checkbox/CheckboxHook";
import DropdownHook from "./dropdown/DropdownHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters or greater")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Your password must have 8 characters, one uppercase, one lowercase and one number",
        }
      )
      .required(),
    gender: yup
      .string()
      .required()
      .oneOf(["male", "female"], "You can only chose male or female"),
    email: yup.string().email("Please enter valid email").required(),
    job: yup.string().required("Please select your Job"),
    term: yup.boolean().required("Please accept the terms and conditions"),
  })
  .required();
const RegisterHook = () => {
  const {
    // register,
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    // getValues,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange", // validation
    defaultValues: {
      gender: "male",
    },
  });
  // console.log({ errors });
  const onSubmitHandler = (values) => {
    // console.log(values);
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        // console.log(resolve);
        console.log(values);
        reset({
          username: "",
          password: "",
          email: "",
          gender: "male",
          job: "",
          term: false,
        });
      }, 5000);
    });
  };
  const watchGender = watch("gender");
  // console.log(watchGender);
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3 mb-5 ">
        <label htmlFor="username" className="cursor-pointer">
          User Name
        </label>
        <InputHook
          name="username"
          placeholder="enter your username"
          id="userName"
          control={control}
          type="text"
        ></InputHook>
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5 ">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          placeholder="enter your password"
          id="password"
          control={control}
          type="password"
        ></InputHook>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 ">
        <label htmlFor="email" className="cursor-pointer">
          Email
        </label>
        <InputHook
          name="email"
          placeholder="enter your email"
          id="email"
          control={control}
          type="email"
        ></InputHook>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              checked={watchGender === "male"}
              value="male"
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              checked={watchGender === "female"}
              value="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <label htmlFor="">Are you</label>
        <DropdownHook
          control={control}
          setValue={setValue}
          name="job"
          dropdownLabel={"Select your job"}
        ></DropdownHook>
      </div>
      {errors.job && (
        <p className="text-red-500 text-sm mt-2">{errors.job.message}</p>
      )}
      <div>
        <CheckboxHook
          control={control}
          name="term"
          text="I accept the terms and conditions"
        ></CheckboxHook>
        {errors.term && (
          <p className="text-red-500 text-sm mt-2">{errors.term.message}</p>
        )}
      </div>
      <button
        className={`w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold ${isSubmitting ? "opacity-50" : ""}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent mx-auto animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};
// console.log("🚀 ~ RegisterHook ~ InputHook:", InputHook);

export default RegisterHook;
