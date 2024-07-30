import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "./input/InputHook";
import RadioHook from "./radio/RadioHook";
import CheckboxHook from "./checkbox/CheckboxHook";
import DropdownHook from "./dropdown/DropdownHook";

const RegisterHook = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3 mb-5 ">
        <label htmlFor="userName" className="cursor-pointer">
          User Name
        </label>
        <InputHook
          name="userName"
          placeholder="enter your username"
          id="userName"
          control={control}
          type="text"
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter your password</p>
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
        <p className="text-red-500 text-sm">Please enter your email</p>
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
        <p className="text-red-500 text-sm">Please enter your email</p>
      </div>
      <div className="flex flex-col gap-3 ">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="male"></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <label htmlFor="">Are you</label>
        <DropdownHook
          control={control}
          setValue={setValue}
          name="job"
        ></DropdownHook>
      </div>
      <div>
        <CheckboxHook
          control={control}
          name="term"
          text="I accept the terms and conditions"
        ></CheckboxHook>
      </div>

      <button className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold">
        Submit
      </button>
    </form>
  );
};
// console.log("🚀 ~ RegisterHook ~ InputHook:", InputHook);

export default RegisterHook;
