import React, { useState } from "react";
import useHandleChange from "../../Hooks/UseHandleChange";

const Form = () => {
  const { value, handleChange } = useHandleChange({
    fullName: "",
    email: "",
    hobby: false,
  });
  // console.log(value);
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (value.fullName === "") {
      setNameError("your full name is emty");
    } else setNameError("");
  };

  // const [fullName, setFullName] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");
  // const handleInputchange = (e) => {
  //   const type = e.target.type;
  //   setValue({
  //     ...value,
  //     [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
  //   });
  // };
  // const handleTextAreaChange = (e) => {
  //   setMessage(e.target.value);
  // };
  // const handleSelectChange = (e) => {
  //   setCountry(e.target.value);
  // };
  // const [value, setValue] = useState({
  //   fullName: "",
  //   email: "",
  //   hobby: false,
  // });
  return (
    <div className="p-5">
      <form
        className="p-5 flex gap-x-5"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            className="w-full max-w-[300px] p-5 border border-gray-400 rounded-lg"
            type="text"
            name="fullName"
            placeholder="enter yr name"
            onChange={handleChange}
          />
          {nameError}
        </div>
        <div>
          <input
            className="w-full max-w-[300px] p-5 border border-gray-400 rounded-lg"
            type="email"
            name="email"
            placeholder="enter yr email"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="p-3 text-white bg-blue-600 rounded-lg">
          {" "}
          Submit
        </button>
        {/* <input type="checkbox" name="hobby" id="" onClick={handleChange} /> */}
        {/* <textarea
        name="message"
        id=""
        className="w-full max-w-[300px] p-3 border border-gray-400 rounded-lg"
        placeholder="enter message"
        onChange={handleTextAreaChange}
      ></textarea> */}
        {/* <select name="country" id="" onChange={handleSelectChange}>
        <option value="VN">VN</option>
        <option value="TL">TL</option>
        <option value="US">US</option>
      </select> */}
      </form>
    </div>
  );
};

export default Form;
