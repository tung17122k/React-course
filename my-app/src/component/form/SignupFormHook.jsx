import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schemaValidation = yup.object({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),
});
const SignupFormHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    setValue,
    control,
    reset,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  // console.log(errors);
  // console.log(isValid);
  const watchShowAge = watch("showAge", false);
  // console.log(dirtyFields);
  // console.log(control);
  const onSubmits = async (values) => {
    if (isValid) {
      console.log("send data");
      // after submit => reset form
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
    // const response = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query=react"
    // );
    // return response.data;
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 5000);
    // });
    // console.log(values);
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  const handleSetDemodata = () => {
    setValue("firstName", "Tung");
    setValue("lastName", "Nguyen");
    setValue("email", "sanking1712@gmail.com");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmits)}
      className="w-full p-10 max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          className="p-4 rounded-md border-gray-300 border "
          // {...register("firstName", { required: true, maxLength: 10 })}
          {...register("firstName")}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          className="p-4 rounded-md border-gray-300 border "
          {...register("lastName", { required: true, maxLength: 10 })}
        />
        {errors.lastName?.type === "required" && (
          <div className="text-red-500 text-sm">Required</div>
        )}
        {errors.lastName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 characters or less
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Email</label>
        <MyInput
          name="email"
          placeholder="Enter your email"
          id="email"
          control={control}
          type="email"
        ></MyInput>
        {/* <input
          type="email"
          placeholder="Enter your email"
          className="p-4 rounded-md border-gray-300 border "
          {...register("email", { required: true, maxLength: 20 })}
        /> */}
        {errors.email?.type === "required" && (
          <div className="text-red-500 text-sm">Required</div>
        )}
        {errors.email?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 20 characters or less
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && <input type="number" placeholder="enter age" />}
      </div>
      <button
        type="submit"
        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin mx-auto"></div>
        ) : (
          "Submit"
        )}
      </button>
      <div>
        <button
          className="p-3 bg-green-400 text-white"
          onClick={handleSetDemodata}
        >
          Demo data
        </button>
      </div>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       defaultValue=""
//       type={props.type}
//       control={control}
//       render={({ field }) => {
//         return (
//           <input
//             className="p-4 rounded-md border-gray-300 border"
//             {...field}
//             {...props}
//           />
//         );
//       }}
//     ></Controller>
//   );
// };

// useController
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border-gray-300 border"
      {...field}
      {...props}
    />
  );
};

export default SignupFormHook;
